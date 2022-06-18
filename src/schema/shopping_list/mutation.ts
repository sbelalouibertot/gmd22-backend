
import { ShoppingListFood } from "generated/prisma-client";
import { toggleCheckShoppingListFood, TToggleCheckShoppingListFoodInput } from "../../service/shoppingList/toggleCheckShoppingListFood";
import { GraphqlContext } from ".././types";

export default {
    Mutation: {
        toggleCheckShoppingListFood: async (
            _: unknown,
            toggleCheckShoppingListFoodInput: TToggleCheckShoppingListFoodInput,
            ctx: GraphqlContext
        ): Promise<{ shoppingListFood: ShoppingListFood }> => toggleCheckShoppingListFood(ctx.prisma, toggleCheckShoppingListFoodInput),
    },
};
