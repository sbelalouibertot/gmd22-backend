
import { Event, EventType } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
    Query: {
        event: async (
            _: unknown,
            { id }: { id: string },
            ctx: GraphqlContext
        ): Promise<{ event: Event | null }> => {
            const event = await ctx.prisma.event.findUnique({ where: { id } });
            return { event };
        },
        events: async (
            _: unknown,
            { userId, date, type, onlyCurrentPeriod = false }: { userId: string, date: Date, type: EventType, onlyCurrentPeriod: boolean },
            ctx: GraphqlContext
        ): Promise<{ events: Event[] }> => {
            const [formattedDay] = !!date ? new Date(date).toISOString().split('T') : []
            const tomorrowDay = !!formattedDay ? new Date(formattedDay).setDate(new Date(formattedDay).getDate() + 1) : null
            const [periodStartDate, periodEndDate] = onlyCurrentPeriod ? await Promise.all(
                [(await ctx.prisma.event.findFirst({ where: { type: 'PERIOD_START', date: { lte: new Date() } }, orderBy: { date: 'desc' } }))?.date, (await ctx.prisma.event.findFirst({ where: { type: 'PERIOD_END', date: { gte: new Date() } }, orderBy: { date: 'asc' } }))?.date]
            ) : []

            const events = await ctx.prisma.event.findMany({
                where: {
                    ...(!!userId && { userId }),
                    ...(!!formattedDay && !!tomorrowDay && { date: { gte: new Date(formattedDay), lt: new Date(tomorrowDay) } }),
                    ...(!!periodStartDate && !!periodEndDate && {
                        date: {
                            gte: periodStartDate,
                            lte: periodEndDate
                        }
                    }),
                    ...(type && { type })
                }
            });
            return { events };
        },
        nextEvent: async (
            _: unknown,
            { userId, type }: { userId: string, type: EventType },
            ctx: GraphqlContext
        ): Promise<{ event: Event | null }> => {
            const event = await ctx.prisma.event.findFirst({
                where: {
                    userId, date: { gte: new Date() }, ...(!!type && {
                        type
                    })
                }, orderBy: { date: 'asc' }
            });
            return { event };
        },
    },
};
