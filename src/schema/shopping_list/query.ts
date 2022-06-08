
import { ShoppingList, ShoppingListEvent } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
    Query: {
        shoppingList: async (
            _: unknown,
            { id }: { id: string },
            ctx: GraphqlContext
        ): Promise<{ shoppingList: ShoppingList | null }> => {
            const shoppingList = await ctx.prisma.shoppingList.findUnique({ where: { id } });
            return { shoppingList };
        },
        shoppingLists: async (
            _: unknown,
            { userId }: { userId: string },
            ctx: GraphqlContext
        ): Promise<{ shoppingLists: ShoppingList[] | null }> => {
            const shoppingLists = await ctx.prisma.shoppingList.findMany({ where: { shoppingListEvents: { some: { event: { userId } } } } });
            return { shoppingLists };
        },
    },
};
