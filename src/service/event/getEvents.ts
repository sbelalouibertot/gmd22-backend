import { EventType, Event, PrismaClient } from "generated/prisma-client"

export type TEventsSearchInput = { userId?: string, date?: Date, type?: EventType, onlyCurrentPeriod?: boolean }

export const getEvents = async (
    prisma: PrismaClient,
    { userId, date, type, onlyCurrentPeriod = false }: TEventsSearchInput,
): Promise<{ events: Event[] }> => {
    const [formattedDay] = !!date ? new Date(date).toISOString().split('T') : []
    const tomorrowDay = !!formattedDay ? new Date(formattedDay).setDate(new Date(formattedDay).getDate() + 1) : null
    const [periodStartDate, periodEndDate] = onlyCurrentPeriod ? await Promise.all(
        [(await prisma.event.findFirst({ where: { type: 'PERIOD_START', date: { lte: new Date() } }, orderBy: { date: 'desc' } }))?.date, (await prisma.event.findFirst({ where: { type: 'PERIOD_END', date: { gte: new Date() } }, orderBy: { date: 'asc' } }))?.date]
    ) : []

    const events = await prisma.event.findMany({
        where: {
            ...(!!userId && { userId }),
            ...(!!formattedDay && !!tomorrowDay && { date: { gte: new Date(formattedDay), lt: new Date(tomorrowDay) } }),
            ...(!!periodStartDate && !!periodEndDate && {
                date: {
                    gte: periodStartDate,
                    lte: periodEndDate
                }
            }),
            ...(!!type && { type })
        }
    });
    return { events };
}