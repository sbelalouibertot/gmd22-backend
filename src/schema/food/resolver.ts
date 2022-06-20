import { Food, RecipeInstruction, ShoppingListFood } from 'generated/prisma-client'
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
  ShoppingListFood: {
    food: async (
      parent: ShoppingListFood,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<Food | null> => {
      const parentShoppingListFood = await ctx.prisma.shoppingListFood.findUnique({
        where: { id: parent.id },
        include: { food: true },
      })
      return parentShoppingListFood?.food ?? null
    },
  },
}
