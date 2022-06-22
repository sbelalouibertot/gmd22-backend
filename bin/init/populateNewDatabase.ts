import 'dayjs/locale/fr'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { Food, Prisma, PrismaClient } from '../../src/generated/prisma-client'
import { prismaInjector } from '../../src/utils/libs/prisma/prismaInjector'
import { foodData } from './food.data'
import { recipes } from './recipes.data'

dayjs.extend(utc)
dayjs.locale('fr')

// To use if need to populate a new database with data
// npm run ts-node ./bin/init/populateNewDatabase.ts
const main = async (prisma: PrismaClient) => {
  // User & preferences
  await prisma.user.createMany({
    data: [
      { firstName: 'Samy', username: 'samy' },
      { firstName: 'Invité', username: 'guest' },
    ],
    skipDuplicates: true,
  })

  const createdUser = await prisma.user.findFirst({ where: { username: 'samy' } })
  const userId = createdUser.id

  const SHOPPING_WEEKS_INTERVAL = 3

  await prisma.userPreference.createMany({
    data: [
      { userId, type: 'MAX_RECIPES_PER_WEEK', value: 3 },
      { userId, type: 'SHOPPING_WEEKS_INTERVAL', value: SHOPPING_WEEKS_INTERVAL },
    ],
    skipDuplicates: true,
  })

  await prisma.food.createMany({
    data: foodData,
    skipDuplicates: true,
  })

  // Recipes & recipes food

  const createdRecipes = []
  for (const recipe of recipes) {
    const createdRecipe = await prisma.recipe.create({
      data: {
        name: recipe.name,
        cookingDuration: recipe.cookingDuration,
        preparationDuration: recipe.preparationDuration,
      },
    })
    createdRecipes.push(createdRecipe)

    await prisma.recipeInstruction.createMany({
      data: recipe.instructions.map(instruction => ({
        recipeId: createdRecipe.id,
        description: instruction.description,
        duration: instruction.duration,
      })),
    })

    for (const foodItem of recipe.foodItems) {
      const existingFood = await prisma.food.findFirst({
        where: { name: { equals: foodItem.name } },
      })

      let createdFood: Food | null = null
      if (!existingFood) {
        createdFood = await prisma.food.create({
          data: {
            name: foodItem.name,
            type: 'INGREDIENT',
          },
        })
      }

      await prisma.recipeFood.create({
        data: {
          recipeId: createdRecipe.id,
          quantity: foodItem.quantity,
          quantityUnit: foodItem.quantityUnit,
          foodId: existingFood?.id ?? createdFood.id,
        },
      })
    }
  }

  // Shopping list
  const shoppingList = await prisma.shoppingList.create({
    data: {
      name: 'Liste de courses',
    },
  })

  // Events
  const events: Prisma.EventCreateInput[] = [
    {
      type: 'PERIOD_START',
      date: dayjs.utc().startOf('day').toDate(),
      user: { connect: { id: userId } },
    },
    {
      type: 'PERIOD_END',
      date: dayjs.utc().add(SHOPPING_WEEKS_INTERVAL, 'weeks').startOf('day').toDate(),
      user: { connect: { id: userId } },
    },
    {
      type: 'SHOPPING',
      date: dayjs.utc().startOf('week').add(4, 'days').set('hours', 12).set('minutes', 45).toDate(),
      user: { connect: { id: userId } },
      shoppingListEvents: { create: [{ shoppingListId: shoppingList.id }] },
    },
    {
      type: 'PREPARATION',
      date: dayjs.utc().startOf('week').add(1, 'week').set('hours', 12).set('minutes', 30).toDate(),
      user: { connect: { id: userId } },
      recipeEvents: {
        createMany: {
          data: createdRecipes.slice(0, 2).map(recipe => ({ recipeId: recipe.id })),
        },
      },
    },
    {
      type: 'PREPARATION',
      date: dayjs.utc().startOf('week').add(2, 'week').set('hours', 12).set('minutes', 30).toDate(),
      user: { connect: { id: userId } },
      recipeEvents: {
        createMany: {
          data: createdRecipes.slice(2, 4).map(recipe => ({ recipeId: recipe.id })),
        },
      },
    },
  ]

  for (const event of events) {
    await prisma.event.create({ data: event })
  }

  // SHopping list food items
  // TODO: Generate shopping list from recipes food

  //TODO: Promises in chunk if needed
}

prismaInjector(main)