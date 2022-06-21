import { Event, Recipe, ShoppingList } from 'generated/prisma-client'
import { GraphqlContext } from 'schema/types'

export default {
  Event: {
    nextRecipe: async (parent: Event, _: unknown, ctx: GraphqlContext): Promise<Recipe | null> => {
      const recipeId = (
        await ctx.prisma.recipeEvent.findFirst({
          where: {
            eventId: parent.id,
          },
        })
      )?.id

      if (!recipeId) {
        return null
      }
      const recipe = ctx.prisma.recipe.findUnique({
        where: { id: recipeId },
      })
      return recipe
    },
    recipes: async (parent: Event, _: unknown, ctx: GraphqlContext): Promise<Recipe[] | null> => {
      const parentEvent = await ctx.prisma.event.findUnique({
        where: { id: parent.id },
        include: { recipeEvents: { include: { recipe: true } } },
      })
      if (!parentEvent) {
        return null
      }

      const recipes = parentEvent.recipeEvents.map(({ recipe }) => recipe)
      return recipes
    },
    shoppingList: async (
      parent: Event,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<ShoppingList | null> => {
      const shoppingListEvent = await ctx.prisma.shoppingListEvent.findFirst({
        where: {
          eventId: parent.id,
        },
        include: { shoppingList: true },
      })

      if (!shoppingListEvent) {
        return null
      }

      return shoppingListEvent.shoppingList
    },
  },
}
