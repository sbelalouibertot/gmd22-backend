import { Food, Recipe, RecipeInstruction } from 'generated/prisma-client'
import { GraphqlContext } from 'schema/types'

export default {
  Recipe: {
    recipeInstructions: async (
      parent: Recipe,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<RecipeInstruction[]> => {
      const parentRecipe = await ctx.prisma.recipe.findUnique({
        where: { id: parent.id },
        include: { recipeInstructions: true },
      })
      return parentRecipe?.recipeInstructions ?? []
    },
  },
  Food: {
    recipes: async (parent: Food, _: unknown, ctx: GraphqlContext): Promise<Recipe[]> => {
      const parentFood = await ctx.prisma.food.findUnique({
        where: { id: parent.id },
        include: {
          recipeInstructionFoodItems: {
            include: { recipeInstruction: { include: { recipe: true } } },
          },
        },
      })
      if (!parentFood) {
        return []
      }

      const recipes = parentFood?.recipeInstructionFoodItems.map(
        foodItem => foodItem.recipeInstruction.recipe,
      )
      const recipesWithoutDupplicates = recipes.filter(
        (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i,
      )

      return recipesWithoutDupplicates ?? []
    },
  },
}
