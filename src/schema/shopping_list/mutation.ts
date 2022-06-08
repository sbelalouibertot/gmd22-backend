
import { ShoppingListFood } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
    Mutation: {
        toggleCheckShoppingListFood: async (
            _: unknown,
            { id }: { id: string },
            ctx: GraphqlContext
        ): Promise<{ shoppingListFood: ShoppingListFood }> => {
            const previousShoppingListFoodCheckState = (await ctx.prisma.shoppingListFood.findUnique({ where: { id } }))?.isChecked
            const shoppingListFood = await ctx.prisma.shoppingListFood.update({
                data: {
                    isChecked: !previousShoppingListFoodCheckState
                }, where: { id }
            });
            return { shoppingListFood };
        },
    },
};
