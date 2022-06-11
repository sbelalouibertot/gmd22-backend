
import { Recipe, RecipeEvent } from "generated/prisma-client";
import { TReplaceRecipeInput, replaceRecipe } from "service/recipe/replaceRecipe";
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
      replaceRecipeInput: TReplaceRecipeInput,
      ctx: GraphqlContext
    ): Promise<{ recipeEvent: RecipeEvent | null }> => replaceRecipe(ctx.prisma, replaceRecipeInput),
  },
};
