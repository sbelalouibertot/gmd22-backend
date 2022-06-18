import { PrismaClient, ShoppingListFood } from "generated/prisma-client"

export type TToggleCheckShoppingListFoodInput = { id: string }

export const toggleCheckShoppingListFood = async (
    prisma: PrismaClient,
    { id }: TToggleCheckShoppingListFoodInput,
): Promise<{ shoppingListFood: ShoppingListFood }> => {
    const previousShoppingListFood = await prisma.shoppingListFood.findUnique({ where: { id } })
    const shoppingListFood = await prisma.shoppingListFood.update({
        data: {
            isChecked: !previousShoppingListFood?.isChecked
        }, where: { id }
    });
    return { shoppingListFood };
}