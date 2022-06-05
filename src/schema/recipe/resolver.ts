import { Recipe, RecipeInstruction } from "generated/prisma-client";
import { GraphqlContext } from "schema/types";

export default {
    Recipe: {
        recipeInstructions: async (
          parent: Recipe,
          _: unknown,
          ctx: GraphqlContext,
        ): Promise<RecipeInstruction[]> =>
          ctx.prisma.recipeInstruction.findMany({
            where: { recipeId: parent.id },
          }),
      }}
