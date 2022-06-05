
import { Food } from "generated/prisma-client";
import { GraphqlContext } from ".././types";

export default {
  Mutation: {
    deleteFoodItem: async (
      _: unknown,
      { id }: { id: string },
      ctx: GraphqlContext
    ): Promise<{ food: Food }> => {
      const food = await ctx.prisma.food.delete({ where: { id } });
      return { food };
    },
  },
};
