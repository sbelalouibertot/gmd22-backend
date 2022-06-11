import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedShoppingList = async (
    prisma: PrismaClient,
    shoppingList: Prisma.ShoppingListCreateInput,
): Promise<PrismaClient> => {
    await prisma.shoppingList.create({
        data: {
            id: ids.shoppingList_1,
            ...shoppingList,
        }
    })
    return prisma
}
