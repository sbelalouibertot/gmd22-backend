import { PrismaClient, RecipeEvent } from "generated/prisma-client"

export type TReplaceRecipeInput = { recipeEventId: string }

export const replaceRecipe = async (
    prisma: PrismaClient,
    { recipeEventId }: { recipeEventId: string },
): Promise<{ recipeEvent: RecipeEvent | null }> => {
    const [periodStartDate, periodEndDate] = await Promise.all(
        [(await prisma.event.findFirst({ where: { type: 'PERIOD_START', date: { lte: new Date() } }, orderBy: { date: 'desc' } }))?.date, (await prisma.event.findFirst({ where: { type: 'PERIOD_END', date: { gte: new Date() } }, orderBy: { date: 'asc' } }))?.date]
    )
    const recipeIdsToSkip = (await prisma.recipeEvent.findMany({
        select: { recipeId: true }, where: {
            event: {
                date: {
                    gte: periodStartDate,
                    lte: periodEndDate
                }
            }
        }
    })).map(({ recipeId }) => recipeId)

    const newRecipeId = (await prisma.recipe.findFirst({ where: { id: { notIn: recipeIdsToSkip } } }))?.id
    if (!newRecipeId) return { recipeEvent: null }
    const recipeEvent = await prisma.recipeEvent.update({ data: { recipeId: newRecipeId }, where: { id: recipeEventId } })

    return { recipeEvent };
}