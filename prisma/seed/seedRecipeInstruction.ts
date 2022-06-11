import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedRecipeInstruction = async (
    prisma: PrismaClient,
    recipeInstruction: Prisma.RecipeInstructionCreateInput,
): Promise<PrismaClient> => {
    await prisma.recipeInstruction.create({
        data: {
            id: ids.recipeInstruction_1,
            ...recipeInstruction,
        }
    })
    return prisma
}
