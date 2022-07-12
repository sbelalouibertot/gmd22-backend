import 'dayjs/locale/fr'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { Food, PrismaClient } from '../../src/generated/prisma-client'
import { prismaInjector } from '../../src/utils/libs/prisma/prismaInjector'
import { foodData } from './food.data'
import { recipes } from './recipes.data'

dayjs.extend(utc)
dayjs.locale('fr')

// To use if need to populate a new database with data
// npm run ts-node ./bin/init/populateNewDatabase.ts
const main = async (prisma: PrismaClient) => {
  // User & preferences
  console.log('👨‍👩👨‍💼 Creating users')
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
  const MAX_RECIPES_PER_WEEK = 2

  await prisma.userPreference.createMany({
    data: [
      { userId, type: 'MAX_RECIPES_PER_WEEK', value: MAX_RECIPES_PER_WEEK },
      { userId, type: 'SHOPPING_WEEKS_INTERVAL', value: SHOPPING_WEEKS_INTERVAL },
    ],
    skipDuplicates: true,
  })

  // Food
  console.log('🍎 Creating food')
  await prisma.food.createMany({
    data: foodData,
    skipDuplicates: true,
  })

  // Recipes & recipes food
  console.log('🍳 Creating recipes & recipes food')
  const createdRecipes = []
  for (const recipe of recipes) {
    const createdRecipe = await prisma.recipe.create({
      data: {
        name: recipe.name,
        cookingDuration: recipe.cookingDuration ?? 0,
        preparationDuration: recipe.preparationDuration ?? 0,
      },
    })
    createdRecipes.push(createdRecipe)

    await prisma.recipeInstruction.createMany({
      data: recipe.instructions.map(instruction => ({
        recipeId: createdRecipe.id,
        description: instruction.description,
        duration: instruction.duration ?? 0,
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
}

prismaInjector(main)
