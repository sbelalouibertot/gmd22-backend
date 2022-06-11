import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedShoppingListEvent = async (
    prisma: PrismaClient,
    shoppingListEvent: Prisma.ShoppingListEventCreateInput,
): Promise<PrismaClient> => {
    await prisma.shoppingListEvent.create({
        data: {
            id: ids.shoppingListEvent_1,
            ...shoppingListEvent,
        }
    })
    return prisma
}
