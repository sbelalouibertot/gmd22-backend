import { Recipe } from 'generated/prisma-client'

import { getFoodRecipes, TFoodRecipesInput } from '../../service/recipe/getFoodRecipes'
import { getNextRecipe, TNextRecipeInput } from '../../service/recipe/getNextRecipe'
import { GraphqlContext } from '.././types'

export default {
  Query: {
    recipe: async (_: unknown, { id }, ctx: GraphqlContext): Promise<{ recipe: Recipe | null }> => {
      const recipe = await ctx.prisma.recipe.findUnique({ where: { id } })
      return { recipe }
    },
    nextRecipe: async (
      _: unknown,
      nextRecipeInput: TNextRecipeInput,
      ctx: GraphqlContext,
    ): Promise<{ recipe: Recipe | null }> => getNextRecipe(ctx.prisma, nextRecipeInput),
    recipes: async (
      _: unknown,
      { filters }: { filters: { searchQuery?: string } },
      ctx: GraphqlContext,
    ): Promise<{ recipes: Recipe[] | null }> => {
      if (!filters?.searchQuery) {
        const recipes = await ctx.prisma.recipe.findMany()
        return { recipes }
      }
      const recipes = await ctx.prisma.recipe.findMany({
        where: {
          OR: [
            { name: { contains: filters?.searchQuery, mode: 'insensitive' } },
            {
              recipeFood: {
                some: { food: { name: { contains: filters?.searchQuery, mode: 'insensitive' } } },
              },
            },
          ],
        },
      })
      return { recipes }
    },
    foodRecipes: async (
      _: unknown,
      foodRecipesInput: TFoodRecipesInput,
      ctx: GraphqlContext,
    ): Promise<{ recipes: Recipe[] | null }> => getFoodRecipes(ctx.prisma, foodRecipesInput),
  },
}
