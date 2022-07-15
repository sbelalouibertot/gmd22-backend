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
      orderBy: { date: 'desc' },
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

  const availableRecipes: { id: string }[] = await prisma.$queryRaw`SELECT r.id FROM recipes r 
  WHERE r.id NOT IN (${recipeIdsToSkip.join(',')})
  ORDER BY RANDOM()
  LIMIT 1`

  const availableRecipeId = availableRecipes?.[0]['id']

  if (!availableRecipeId) {
    return { recipeEvent: null }
  }

  const recipeEvent = await prisma.recipeEvent.update({
    data: { recipeId: availableRecipeId },
    where: { id: recipeEventId },
  })

  const recipeFoodItems = await prisma.recipeFood.findMany({
    where: {
      recipe: {
        recipeEvents: {
          some: {
            event: {
              date: {
                gte: periodStartEvent.date,
                lt: periodEndEvent.date,
              },
            },
          },
        },
      },
    },
  })

  const currentShoppingList = await prisma.shoppingList.findFirst({
    where: {
      shoppingListEvents: {
        some: {
          event: {
            date: {
              gte: periodStartEvent.date,
              lt: periodEndEvent.date,
            },
          },
        },
      },
    },
  })

  if (!!currentShoppingList) {
    await prisma.shoppingListFood.deleteMany({ where: { shoppingListId: currentShoppingList.id } })
    await prisma.shoppingListFood.createMany({
      data: recipeFoodItems.map(recipeFood => ({
        shoppingListId: currentShoppingList.id,
        isChecked: false,
        foodId: recipeFood.foodId,
      })),
    })
  }

  return { recipeEvent }
}
