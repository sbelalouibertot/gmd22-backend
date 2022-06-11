import { EventType, Event, PrismaClient } from "generated/prisma-client"

export type TNextEventInput = { userId: string, type?: EventType }

export const getNextEvent = async (
    prisma: PrismaClient,
    { userId, type }: TNextEventInput,
): Promise<{ event: Event | null }> => {
    const event = await prisma.event.findFirst({
        where: {
            userId, date: { gte: new Date() }, ...(!!type && {
                type
            })
        }, orderBy: { date: 'asc' }
    });
    return { event };
}