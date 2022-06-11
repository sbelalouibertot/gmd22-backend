import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedEvent = async (
    prisma: PrismaClient,
    event: Prisma.EventCreateInput,
): Promise<PrismaClient> => {
    await prisma.event.create({
        data: {
            id: ids.event_1,
            ...event,
        }
    })
    return prisma
}
