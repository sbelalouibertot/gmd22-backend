import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedRecipe = async (
    prisma: PrismaClient,
    recipe: Prisma.RecipeCreateInput,
): Promise<PrismaClient> => {
    await prisma.recipe.create({
        data: {
            id: ids.recipe_1,
            ...recipe,
        }
    })
    return prisma
}
