import { Prisma, PrismaClient } from '../../../../src/generated/prisma-client'
import { shutdown, clear, seedFood, seedRecipe, seedUser, seedEvent, seedRecipeEvent } from '../../../../prisma/seed/seed'
import { getNextRecipe } from '../../../../src/service/recipe/getNextRecipe'
import { ids } from '../../../../prisma/seed/constants'

describe('Get next recipe', () => {
    let prisma: PrismaClient

    const foodItemsData: Prisma.FoodCreateInput[] = [
        { id: ids.food_1, name: 'Pomme', type: 'FRUIT' },
        { id: 'food_2', name: 'Poisson', type: 'FISH' },
    ]

    const foodRecipesData: Prisma.RecipeCreateInput[] = [
        { id: ids.recipe_1, name: 'Crumble aux pommes', cookingDuration: 20, preparationDuration: 20 },
        { id: 'recipe_2', name: 'Soupe de poisson', cookingDuration: 10, preparationDuration: 30 },
    ]

    const eventsData: Prisma.EventCreateInput[] = [
        { id: ids.event_1, type: 'PERIOD_START', date: new Date("2022-01-01T00:00:00.000Z"), user: { connect: { id: ids.user_1 } } },
        { id: 'event_2', type: 'PERIOD_END', date: new Date("2022-01-06T23:59:59.000Z"), user: { connect: { id: ids.user_1 } } },
        { id: 'event_4', type: 'PREPARATION', date: new Date("2022-01-02T18:00:00.000Z"), user: { connect: { id: ids.user_1 } } },
        { id: 'event_5', type: 'PREPARATION', date: new Date("2022-01-05T13:00:00.000Z"), user: { connect: { id: ids.user_1 } } },
    ]

    const recipesEventsData: Prisma.RecipeEventCreateInput[] = [
        {
            id: ids.recipeEvent_1, event: { connect: { id: 'event_4' } }, recipe: { connect: { id: ids.recipe_1 } }
        },
        { id: 'recipe_event_2', event: { connect: { id: 'event_5' } }, recipe: { connect: { id: 'recipe_2' } } }
    ]

    beforeAll(() => {
        prisma = new PrismaClient()
    })

    afterAll(() => {
        shutdown(prisma)
    })

    beforeEach(async () => {
        await seedUser(prisma, { firstName: 'Samy', username: 'Belaloui-Bertot', })
        await seedUser(prisma, { id: 'user_2', firstName: 'Jacques', username: 'Danièle', })

        for (const foodItemData of foodItemsData) {
            await seedFood(prisma, foodItemData)
        }
        for (const foodRecipeData of foodRecipesData) {
            await seedRecipe(prisma, foodRecipeData)
        }
        for (const eventData of eventsData) {
            await seedEvent(prisma, eventData)
        }
        for (const recipeEventData of recipesEventsData) {
            await seedRecipeEvent(prisma, recipeEventData)
        }
    })

    afterEach(async () => {
        await clear(prisma)
    })

    test('Correct next recipe should be returned (on same day, few hours before)', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-02T09:00:00.000Z').getTime())

        const nextRecipe = (await getNextRecipe(prisma, { userId: ids.user_1 })).recipe

        expect(nextRecipe).not.toBeNull()
        expect(nextRecipe).toMatchObject(foodRecipesData[0])
    })

    test('Correct next recipe should be returned (on day before)', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-01T09:00:00.000Z').getTime())

        const nextRecipe = (await getNextRecipe(prisma, { userId: ids.user_1 })).recipe

        expect(nextRecipe).not.toBeNull()
        expect(nextRecipe).toMatchObject(foodRecipesData[0])
    })

    test('Correct next recipe should be returned (same day, few hours after)', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-02T22:00:00.000Z').getTime())

        const nextRecipe = (await getNextRecipe(prisma, { userId: ids.user_1 })).recipe

        expect(nextRecipe).not.toBeNull()
        expect(nextRecipe).toMatchObject(foodRecipesData[1])
    })

    test('No recipe should be returned if all recipes events have been completed', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-05T16:00:00.000Z').getTime())

        const nextRecipe = (await getNextRecipe(prisma, { userId: ids.user_1 })).recipe

        expect(nextRecipe).toBeNull()
    })

    test('No recipe should be returned if user is not linked to any recipe events', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2022-01-02T09:00:00.000Z').getTime())

        const nextRecipe = (await getNextRecipe(prisma, { userId: 'user_2' })).recipe

        expect(nextRecipe).toBeNull()
    })
})