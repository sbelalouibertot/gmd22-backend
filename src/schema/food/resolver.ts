import { Food, RecipeInstruction } from "generated/prisma-client"
import { GraphqlContext } from "schema/types"

export default {
    RecipeInstruction:  {
        foodItems: async (
        parent: RecipeInstruction,
        _: unknown,
        ctx: GraphqlContext,
      ): Promise<Food[]> => {
          return ctx.prisma.food.findMany({
        where: { recipeInstructionFoodItems : {some : {id : parent.id}} }
      })}   
     }
}