import { Food } from 'generated/prisma-client'

import { getFoodItems } from '../../service/food/getFoodItems'
import { GraphqlContext } from '.././types'

type TFoodItem = {
  id: string
}

export default {
  Query: {
    foodItem: async (
      _: unknown,
      { id }: TFoodItem,
      ctx: GraphqlContext,
    ): Promise<{ foodItem: Food | null }> => {
      const foodItem = await ctx.prisma.food.findUnique({ where: { id } })
      return { foodItem }
    },
    foodItems: async (_: unknown, {}, ctx: GraphqlContext): Promise<{ foodItems: Food[] }> =>
      getFoodItems(ctx.prisma),
  },
}
