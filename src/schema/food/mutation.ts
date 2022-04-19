import { Food } from "@prisma/client";
import { GraphqlContext } from ".././types";

export default {
  Mutation: {
    deleteFood: async (
      _: unknown,
      { id }: { id: string },
      ctx: GraphqlContext
    ): Promise<{ food: Food }> => {
      const food = await ctx.prisma.food.delete({ where: { id } });
      console.log({ food })
      return { food };
    },
  },
};
