import { Recipe, RecipeEvent } from 'generated/prisma-client'

import { replaceRecipe } from '../../service/recipe/replaceRecipe'
import { GraphqlContext } from '.././types'

export default {
  Mutation: {
    newRecipe: async (
      _: unknown,
      { recipeInput }: { recipeInput: Recipe },
      ctx: GraphqlContext,
    ): Promise<{ recipe: Recipe }> => {
      const recipe = await ctx.prisma.recipe.create({ data: recipeInput })
      return { recipe }
    },
    replaceRecipe: async (
      _: unknown,
      { recipeId, eventId }: { recipeId: string; eventId: string },
      ctx: GraphqlContext,
    ): Promise<{ recipeEvent: RecipeEvent | null }> => {
      const recipeEvent = await ctx.prisma.recipeEvent.findFirst({ where: { recipeId, eventId } })
      if (!recipeEvent) {
        return { recipeEvent: null }
      }
      return replaceRecipe(ctx.prisma, { recipeEventId: recipeEvent.id })
    },
  },
}
