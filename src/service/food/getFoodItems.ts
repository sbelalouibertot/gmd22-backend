import { Food, PrismaClient } from 'generated/prisma-client'

import { TPagination } from '../../schema/types'

export const getFoodItems = async (
  prisma: PrismaClient,
  { skip, take }: TPagination,
): Promise<{ foodItems: Food[]; total: number }> => {
  const [foodItems, total] = await prisma.$transaction([
    prisma.food.findMany({ orderBy: { name: 'asc' }, skip, take }),
    prisma.food.count(),
  ])
  return { foodItems, total }
}
