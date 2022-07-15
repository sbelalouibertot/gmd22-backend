import { Food } from 'generated/prisma-client'

import { defaultPagination } from '../../constants/pagination'
import { getFoodItems } from '../../service/food/getFoodItems'
import { GraphqlContext, TPagination } from '.././types'

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
    foodItems: async (
      _: unknown,
      {
        pagination: {
          skip = defaultPagination.skip,
          take = defaultPagination.take,
        } = defaultPagination,
      }: { pagination: TPagination },
      ctx: GraphqlContext,
    ): Promise<{ foodItems: Food[]; total: number }> => getFoodItems(ctx.prisma, { skip, take }),
  },
}
