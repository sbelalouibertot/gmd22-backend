
import { Recipe, RecipeEvent } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
  Mutation: {
    newRecipe: async (
      _: unknown,
      { recipeInput }: { recipeInput: {recipe: Recipe} },
      ctx: GraphqlContext
    ): Promise<{ recipe: Recipe }> => {
      const recipe = await ctx.prisma.recipe.create({data: recipeInput.recipe})
      return { recipe };
    },
    replaceRecipe: async (
      _: unknown,
      { id, eventId }: { id: string, eventId: string },
      ctx: GraphqlContext
    ): Promise<{ recipe: RecipeEvent }> => {
      // remplacer la recette d'un évènement par une autre au hasard qui n'existe pas déjà dans l'interval en cours
      // intervalle en cours: pas encore géré

      //todo: gérer le hasard
      const newRecipeId = (await ctx.prisma.recipe.findFirst({
        where : {
          /*recipeEvents : {
            every : {recipeId : {not: id}, eventId}
          }*/id: {not : id}
        },
      }))?.id

      const recipe = await ctx.prisma.recipeEvent.update({data : {
        eventId,
        recipeId: newRecipeId
      }, include : {event: true}, where : {}})

      return { recipe };
    },
  },
};
