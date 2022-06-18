import { Recipe, RecipeInstruction } from "generated/prisma-client";
import { GraphqlContext } from "schema/types";

export default {
  Recipe: {
    recipeInstructions: async (
      parent: Recipe,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<RecipeInstruction[]> => {
      const parentRecipe = await ctx.prisma.recipe.findUnique({ where: { id: parent.id }, include: { recipeInstructions: true } })
      return parentRecipe?.recipeInstructions ?? []
    }
  }
}
