import { PrismaClient, RecipeEvent } from 'generated/prisma-client'

export type TReplaceRecipeInput = { recipeEventId: string }

export const replaceRecipe = async (
  prisma: PrismaClient,
  { recipeEventId }: { recipeEventId: string },
): Promise<{ recipeEvent: RecipeEvent | null }> => {
  const [periodStartEvent, periodEndEvent] = await Promise.all([
    prisma.event.findFirst({
      where: { type: 'PERIOD_START', date: { lte: new Date() } },
      orderBy: { date: 'desc' },
    }),
    prisma.event.findFirst({
      where: { type: 'PERIOD_END', date: { gte: new Date() } },
      orderBy: { date: 'asc' },
    }),
  ])

  if (!periodStartEvent || !periodEndEvent) {
    return { recipeEvent: null }
  }

  const recipeEventsToSkip = await prisma.recipeEvent.findMany({
    select: { recipeId: true },
    where: {
      event: {
        date: {
          gte: periodStartEvent?.date,
          lte: periodEndEvent?.date,
        },
      },
    },
  })
  const recipeIdsToSkip = recipeEventsToSkip.map(({ recipeId }) => recipeId)

  const availableRecipeId = (
    await prisma.recipe.findFirst({ where: { id: { notIn: recipeIdsToSkip } } })
  )?.id
  if (!availableRecipeId) {
    return { recipeEvent: null }
  }

  const recipeEvent = await prisma.recipeEvent.update({
    data: { recipeId: availableRecipeId },
    where: { id: recipeEventId },
  })
  return { recipeEvent }
}
