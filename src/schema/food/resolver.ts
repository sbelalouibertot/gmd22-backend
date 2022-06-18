import { Food, RecipeInstruction } from 'generated/prisma-client'
import { GraphqlContext } from 'schema/types'

export default {
  RecipeInstruction: {
    foodItems: async (
      parent: RecipeInstruction,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<Food[]> => {
      const parentRecipeInstruction = await ctx.prisma.recipeInstruction.findUnique({
        where: { id: parent.id },
        include: { recipeInstructionFoods: { include: { food: true } } },
      })
      if (!parentRecipeInstruction) {
        return []
      }

      const foodItems = parentRecipeInstruction?.recipeInstructionFoods.map(({ food }) => food)
      return foodItems
    },
  },
}
