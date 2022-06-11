import { PrismaClient, ShoppingListFood } from "generated/prisma-client"

export type TToggleCheckShoppingListFoodInput = { id: string }

export const toggleCheckShoppingListFood = async (
    prisma: PrismaClient,
    { id }: TToggleCheckShoppingListFoodInput,
): Promise<{ shoppingListFood: ShoppingListFood }> => {
    const previousShoppingListFoodCheckState = (await prisma.shoppingListFood.findUnique({ where: { id } }))?.isChecked
    const shoppingListFood = await prisma.shoppingListFood.update({
        data: {
            isChecked: !previousShoppingListFoodCheckState
        }, where: { id }
    });
    return { shoppingListFood };
}