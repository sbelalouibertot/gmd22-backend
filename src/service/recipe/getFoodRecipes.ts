import { PrismaClient, Recipe } from 'generated/prisma-client'

export type TFoodRecipesInput = { foodId: string }

export const getFoodRecipes = async (
  prisma: PrismaClient,
  { foodId }: TFoodRecipesInput,
): Promise<{ recipes: Recipe[] }> => {
  const recipes = await prisma.recipe.findMany({
    where: { recipeFood: { every: { foodId } } },
  })
  return { recipes }
}
