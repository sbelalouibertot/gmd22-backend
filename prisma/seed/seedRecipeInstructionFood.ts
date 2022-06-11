import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedRecipeInstructionFood = async (
    prisma: PrismaClient,
    recipeInstructionFood: Prisma.RecipeInstructionFoodCreateInput,
): Promise<PrismaClient> => {
    await prisma.recipeInstructionFood.create({
        data: {
            id: ids.recipeInstructionFood_1,
            ...recipeInstructionFood,
        }
    })
    return prisma
}
