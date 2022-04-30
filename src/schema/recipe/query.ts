import { Recipe } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
  Query: {
    recipe: async (
      _: unknown,
      { id },
      ctx: GraphqlContext
    ): Promise<{ recipe: Recipe | null }> => {
      const recipe = await ctx.prisma.recipe.findUnique({ where: { id } });
      return { recipe };
    },
    nextRecipe: async (
      _: unknown,
      { userId },
      ctx: GraphqlContext
    ): Promise<{ recipe: Recipe | null }> => {
      const recipe = (
        await ctx.prisma.recipeEvent.findFirst({
          where: {
            event: { userId },
          },
          include: {
            event: true,
            recipe: true,
          },
          orderBy: {
            event: { date: "desc" },
          },
        })
      )?.recipe ?? null;
  
      return { recipe };
    },
    recipes: async (
      _: unknown,
      {},
      ctx: GraphqlContext
    ): Promise<{ recipes: Recipe[] | null }> => {
      const recipes = await ctx.prisma.recipe.findMany();
      return { recipes };
    },
  },
};
