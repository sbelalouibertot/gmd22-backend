import { Recipe, Event, ShoppingList } from "generated/prisma-client";
import { GraphqlContext } from "schema/types";

export default {
    Event: {
        nextRecipe: async (
            parent: Event,
            _: unknown,
            ctx: GraphqlContext,
        ): Promise<Recipe | null> => {
            const recipeId = (await ctx.prisma.recipeEvent.findFirst({
                where: {
                    eventId: parent.id
                }
            }))?.id

            if (!recipeId) return null
            const recipe = ctx.prisma.recipe.findUnique({
                where: { id: recipeId },
            })
            return recipe
        },
        recipes: async (
            parent: Event,
            _: unknown,
            ctx: GraphqlContext,
        ): Promise<Recipe[] | null> => {
            const recipeEvents = (await ctx.prisma.recipeEvent.findMany({
                where: {
                    eventId: parent.id
                }
            }))
            const recipes = await ctx.prisma.recipe.findMany({
                where: { id: {in : recipeEvents.map(({recipeId}) => recipeId)} },
            })
            return recipes
        },
        shoppingList: async (
            parent: Event,
            _: unknown,
            ctx: GraphqlContext,
        ): Promise<ShoppingList | null> => {
            const shoppingListId = (await ctx.prisma.shoppingListEvent.findFirst({
                where: {
                    eventId: parent.id
                }
            }))?.id

            if (!shoppingListId) return null
            const shoppingList = ctx.prisma.shoppingList.findUnique({
                where: { id: shoppingListId },
            })
            return shoppingList
        }
    }
}
