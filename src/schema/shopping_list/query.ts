import { ShoppingList } from 'generated/prisma-client'

import { getShoppingLists, TShoppingListsInput } from '../../service/shoppingList/getShoppingLists'
import { GraphqlContext } from '.././types'

export default {
  Query: {
    shoppingList: async (
      _: unknown,
      { id }: { id: string },
      ctx: GraphqlContext,
    ): Promise<{ shoppingList: ShoppingList | null }> => {
      const shoppingList = await ctx.prisma.shoppingList.findUnique({ where: { id } })
      return { shoppingList }
    },
    shoppingLists: async (
      _: unknown,
      shoppingListsInput: TShoppingListsInput,
      ctx: GraphqlContext,
    ): Promise<{ shoppingLists: ShoppingList[] | null }> =>
      getShoppingLists(ctx.prisma, shoppingListsInput),
  },
}
