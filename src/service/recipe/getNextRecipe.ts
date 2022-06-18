import { PrismaClient, Recipe } from 'generated/prisma-client'

export type TNextRecipeInput = { userId: string }

export const getNextRecipe = async (
  prisma: PrismaClient,
  { userId }: TNextRecipeInput,
): Promise<{ recipe: Recipe | null }> => {
  const recipe =
    (
      await prisma.recipeEvent.findFirst({
        where: {
          event: { userId, date: { gt: new Date() } },
        },
        include: {
          event: true,
          recipe: true,
        },
        orderBy: {
          event: { date: 'asc' },
        },
      })
    )?.recipe ?? null

  return { recipe }
}
