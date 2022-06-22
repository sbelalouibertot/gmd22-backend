import { Prisma, PrismaClient } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedRecipeFood = async (
  prisma: PrismaClient,
  recipeInstructionFood: Prisma.RecipeFoodCreateInput,
): Promise<PrismaClient> => {
  await prisma.recipeFood.create({
    data: {
      id: ids.recipeFood_1,
      ...recipeInstructionFood,
    },
  })
  return prisma
}
