import { ShoppingList, ShoppingListFood } from 'generated/prisma-client'
import { GraphqlContext } from 'schema/types'

export default {
  ShoppingList: {
    shoppingListItems: async (
      parent: ShoppingList,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<ShoppingListFood[]> => {
      const parentShoppingList = await ctx.prisma.shoppingList.findUnique({
        where: { id: parent.id },
        include: { shoppingListFoods: true },
      })
      if (!parentShoppingList) {
        return []
      }
      return parentShoppingList.shoppingListFoods
    },
  },
}
