import { ids } from '../../../../prisma/seed/constants'
import {
  clear,
  seedEvent,
  seedFood,
  seedRecipe,
  seedRecipeEvent,
  seedUser,
  shutdown,
} from '../../../../prisma/seed/seed'
import { Prisma, PrismaClient } from '../../../../src/generated/prisma-client'
import { replaceRecipe } from '../../../../src/service/recipe/replaceRecipe'

describe('Replace recipe', () => {
  let prisma: PrismaClient

  const foodItemsData: Prisma.FoodCreateInput[] = [
    { id: ids.food_1, name: 'Pomme', type: 'FRUIT' },
    { id: 'food_2', name: 'Poisson', type: 'FISH' },
  ]

  const foodRecipesData: Prisma.RecipeCreateInput[] = [
    { id: ids.recipe_1, name: 'Crumble aux pommes', cookingDuration: 20, preparationDuration: 20 },
    { id: 'recipe_2', name: 'Soupe de poisson', cookingDuration: 10, preparationDuration: 30 },
    { id: 'recipe_3', name: 'Boeuf bourguignon', cookingDuration: 30, preparationDuration: 20 },
    { id: 'recipe_4', name: 'Pâtes à la carbonara', cookingDuration: 10, preparationDuration: 10 },
  ]

  const eventsData: Prisma.EventCreateInput[] = [
    {
      id: ids.event_1,
      type: 'PERIOD_START',
      date: new Date('2022-01-01T00:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
    {
      id: 'event_2',
      type: 'PERIOD_END',
      date: new Date('2022-01-06T23:59:59.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
    {
      id: 'event_4',
      type: 'PREPARATION',
      date: new Date('2022-01-02T18:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
    {
      id: 'event_5',
      type: 'PREPARATION',
      date: new Date('2022-01-05T13:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    },
  ]

  const recipesEventsData: Prisma.RecipeEventCreateInput[] = [
    {
      id: ids.recipeEvent_1,
      event: { connect: { id: 'event_4' } },
      recipe: { connect: { id: ids.recipe_1 } },
    },
    {
      id: 'recipe_event_2',
      event: { connect: { id: 'event_5' } },
      recipe: { connect: { id: 'recipe_2' } },
    },
  ]

  beforeAll(() => {
    prisma = new PrismaClient()
  })

  afterAll(() => {
    shutdown(prisma)
  })

  beforeEach(async () => {
    await seedUser(prisma, { firstName: 'Samy', username: 'Belaloui-Bertot' })
    await seedUser(prisma, { id: 'user_2', firstName: 'Jacques', username: 'Danièle' })

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

  test('Should correctly replace the recipe event id with another recipe, wich is not already scheduled in the period (1)', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2022-01-02T09:00:00.000Z').getTime())

    await replaceRecipe(prisma, { recipeEventId: ids.recipeEvent_1 })
    const updatedRecipeEvent = await prisma.recipeEvent.findFirst({
      where: { id: ids.recipeEvent_1 },
    }) // findUnique causes a timeout

    expect(updatedRecipeEvent).not.toBeNull()
    expect(updatedRecipeEvent?.recipeId).not.toBe(ids.recipe_1)
    expect(['recipe_3', 'recipe_4']).toContain(updatedRecipeEvent?.recipeId)
  })

  test('Should correctly replace the recipe event id with another recipe, wich is not already scheduled in the period (2)', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2022-01-02T09:00:00.000Z').getTime())

    await replaceRecipe(prisma, { recipeEventId: 'recipe_event_2' })
    const updatedRecipeEvent = await prisma.recipeEvent.findFirst({
      where: { id: 'recipe_event_2' },
    })

    expect(updatedRecipeEvent).not.toBeNull()
    expect(updatedRecipeEvent?.recipeId).not.toBe('recipe_2')
    expect(['recipe_3', 'recipe_4']).toContain(updatedRecipeEvent?.recipeId)
  })

  test('Should not change anything if the recipeEvent is scheduled in another period', async () => {
    jest.useFakeTimers().setSystemTime(new Date('2022-01-02T09:00:00.000Z').getTime())

    await seedEvent(prisma, {
      id: 'event_6',
      type: 'PREPARATION',
      date: new Date('2022-01-10T13:00:00.000Z'),
      user: { connect: { id: ids.user_1 } },
    })
    await seedRecipeEvent(prisma, {
      id: 'recipe_event_3',
      event: { connect: { id: 'event_6' } },
      recipe: { connect: { id: 'recipe_3' } },
    })

    await replaceRecipe(prisma, { recipeEventId: 'recipe_event_3' })
    const recipeEvent = await prisma.recipeEvent.findFirst({ where: { id: 'recipe_event_3' } })

    expect(recipeEvent).not.toBeNull()
    expect(recipeEvent?.recipeId).toBe('recipe_3')
  })
})
