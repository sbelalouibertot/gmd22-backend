import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedShoppingListFood = async (
    prisma: PrismaClient,
    shoppingListFood: Prisma.ShoppingListFoodCreateInput,
): Promise<PrismaClient> => {
    await prisma.shoppingListFood.create({
        data: {
            id: ids.shoppingListFood_1,
            ...shoppingListFood,
        }
    })
    return prisma
}
