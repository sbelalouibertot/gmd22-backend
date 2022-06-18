import { Food, PrismaClient } from 'generated/prisma-client'

export const getFoodItems = async (prisma: PrismaClient): Promise<{ foodItems: Food[] }> => {
  const foodItems = await prisma.food.findMany()
  return { foodItems }
}
