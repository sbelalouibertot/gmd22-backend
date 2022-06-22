import { Food, ShoppingListFood } from 'generated/prisma-client'
import { GraphqlContext } from 'schema/types'

export default {
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
