
import { Recipe, RecipeEvent } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
  Mutation: {
    newRecipe: async (
      _: unknown,
      { recipeInput }: { recipeInput: Recipe },
      ctx: GraphqlContext
    ): Promise<{ recipe: Recipe }> => {
      const recipe = await ctx.prisma.recipe.create({ data: recipeInput })
      return { recipe };
    },
    replaceRecipe: async (
      _: unknown,
      { recipeEventId }: { recipeEventId: string },
      ctx: GraphqlContext
    ): Promise<{ recipeEvent: RecipeEvent | null }> => {
      const [periodStartDate, periodEndDate] = await Promise.all(
        [(await ctx.prisma.event.findFirst({ where: { type: 'PERIOD_START', date: { lte: new Date() } }, orderBy: { date: 'desc' } }))?.date, (await ctx.prisma.event.findFirst({ where: { type: 'PERIOD_END', date: { gte: new Date() } }, orderBy: { date: 'asc' } }))?.date]
      )
      const recipeIdsToSkip = (await ctx.prisma.recipeEvent.findMany({
        select: { recipeId: true }, where: {
          event: {
            date: {
              gte: periodStartDate,
              lte: periodEndDate
            }
          }
        }
      })).map(({ recipeId }) => recipeId)

      const newRecipeId = (await ctx.prisma.recipe.findFirst({ where: { id: { notIn: recipeIdsToSkip } } }))?.id
      if (!newRecipeId) return { recipeEvent: null }
      const recipeEvent = await ctx.prisma.recipeEvent.update({ data: { recipeId: newRecipeId }, where: { id: recipeEventId } })

      return { recipeEvent };
    },
  },
};
