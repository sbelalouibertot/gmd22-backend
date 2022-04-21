import { Food } from "@prisma/client";
import { GraphqlContext } from ".././types";

export default {
  Query: {
    foodItems: async (
      _: unknown,
      {},
      ctx: GraphqlContext
    ): Promise<{ foodItems: Food[] }> => {
      //const foodItems = await ctx.prisma.food.findMany();
      const foodItems = (await ctx.prisma.$queryRaw`SELECT * from food`) as Food[];
      console.log('foodItems = ', foodItems)
      return { foodItems };
    },
  },
};
