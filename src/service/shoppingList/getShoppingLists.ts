import { PrismaClient, ShoppingList } from 'generated/prisma-client'

export type TShoppingListsInput = { userId: string }

export const getShoppingLists = async (
  prisma: PrismaClient,
  { userId }: TShoppingListsInput,
): Promise<{ shoppingLists: ShoppingList[] | null }> => {
  const shoppingLists = await prisma.shoppingList.findMany({
    where: { shoppingListEvents: { some: { event: { userId } } } },
  })
  return { shoppingLists }
}
