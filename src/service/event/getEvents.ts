
import { EventType, Event, PrismaClient, Prisma } from "generated/prisma-client"

import { getStartOfDay, getTomorrowDate } from "../../utils/date"

export type TEventsSearchInput = { userId?: string, date?: Date, type?: EventType, onlyCurrentPeriod?: boolean }

export const getEvents = async (
    prisma: PrismaClient,
    { userId, date, type, onlyCurrentPeriod = false }: TEventsSearchInput,
): Promise<{ events: Event[] }> => {
    const where: Prisma.EventWhereInput = {
        ...(!!userId && { userId }),
        ...(!!type && { type })
    }
    if (onlyCurrentPeriod) {
        const [periodStartEvent, periodEndEvent] = await Promise.all([
            prisma.event.findFirst({ where: { type: 'PERIOD_START', date: { lte: new Date() } }, orderBy: { date: 'desc' } }),
            prisma.event.findFirst({ where: { type: 'PERIOD_END', date: { gte: new Date() } }, orderBy: { date: 'asc' } })
        ]
        )
        if (!!periodStartEvent?.date && !!periodEndEvent?.date) {
            where.date = {
                gte: periodStartEvent.date,
                lte: periodEndEvent.date
            }
        }
    } else if (!!date) {
        const startOfDay = getStartOfDay(date)
        const startOfTomorrowDay = getTomorrowDate({ date, startOfDay: true })
        where.date = { gte: startOfDay, lt: startOfTomorrowDay }
    }
    const events = await prisma.event.findMany({
        where
    });

    return { events };
}