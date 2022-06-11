import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedFood = async (
    prisma: PrismaClient,
    food: Prisma.FoodCreateInput,
): Promise<PrismaClient> => {
    await prisma.food.create({
        data: {
            id: ids.food_1,
            ...food,
        }
    })
    return prisma
}
