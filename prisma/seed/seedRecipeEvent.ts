import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedRecipeEvent = async (
    prisma: PrismaClient,
    recipeEvent: Prisma.RecipeEventCreateInput,
): Promise<PrismaClient> => {
    await prisma.recipeEvent.create({
        data: {
            id: ids.recipeEvent_1,
            ...recipeEvent,
        }
    })
    return prisma
}
