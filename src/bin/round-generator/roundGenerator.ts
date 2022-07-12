/* eslint-disable no-console */
import 'dayjs/locale/fr'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { pushNotification } from 'utils/pushNotification'

import { Prisma, PrismaClient, Recipe } from '../../../src/generated/prisma-client'
import { prismaInjector } from '../../../src/utils/libs/prisma/prismaInjector'

dayjs.extend(utc)
dayjs.locale('fr')

// Round generator
// Run by CRON every day
// 55 5 * * *
// npm run ts-node ./src/bin/round-generator/roundGenerator.ts
export const main = async (prisma: PrismaClient) => {
  try {
    console.log('🚀 Start rounds generation')
    const lastPeriodEndEvent = await prisma.event.findFirst({
      where: { type: 'PERIOD_END', date: { gte: new Date() } },
      orderBy: { date: 'desc' },
    })

    if (
      !!lastPeriodEndEvent &&
      dayjs
        .utc(lastPeriodEndEvent?.date)
        .startOf('day')
        .isAfter(dayjs.utc(new Date()).startOf('day'))
    ) {
      return
    }

    // User preferences
    const user = await prisma.user.findFirst({ where: { username: 'samy' } })
    if (!user) {
      throw Error('❌ No user was found')
    }
    const userId = user.id

    const shoppingWeeksInterval = (
      await prisma.userPreference.findFirst({
        where: { type: 'SHOPPING_WEEKS_INTERVAL', userId },
      })
    )?.value
    const maxRecipesPerWeek = (
      await prisma.userPreference.findFirst({
        where: { type: 'MAX_RECIPES_PER_WEEK', userId },
      })
    )?.value

    if (!shoppingWeeksInterval || !maxRecipesPerWeek) {
      throw Error('❌ No user preferences were found')
    }

    // Shopping list
    const shoppingListsCount = await prisma.shoppingList.count()
    const shoppingList = await prisma.shoppingList.create({
      data: {
        name: `Liste de courses #${shoppingListsCount + 1}`,
      },
    })
    console.log(`📝 Created shopping list "Liste de courses #${shoppingListsCount + 1}"`)

    // Random recipes
    const totalRecipesNb = maxRecipesPerWeek * shoppingWeeksInterval
    const recipes: Recipe[] =
      await prisma.$queryRaw`SELECT * FROM recipes ORDER BY RANDOM() LIMIT ${totalRecipesNb};`
    console.log(`👨‍🍳 Found ${totalRecipesNb} random recipes"`)

    // Events
    const startPeriodDate = dayjs.utc().startOf('week').add(1, 'days').toDate()
    const events: Prisma.EventCreateInput[] = [
      {
        type: 'PERIOD_START',
        date: startPeriodDate,
        user: { connect: { id: userId } },
      },
      {
        type: 'PERIOD_END',
        date: dayjs
          .utc(startPeriodDate)
          .add(shoppingWeeksInterval, 'weeks')
          .startOf('day')
          .toDate(),
        user: { connect: { id: userId } },
      },
      {
        type: 'SHOPPING',
        date: dayjs
          .utc(startPeriodDate)
          .startOf('week')
          .add(4, 'days')
          .set('hours', 12)
          .set('minutes', 45)
          .toDate(),
        user: { connect: { id: userId } },
        shoppingListEvents: { create: [{ shoppingListId: shoppingList.id }] },
      },
      ...[...Array(shoppingWeeksInterval).keys()].map(
        (weekIndex: number): Prisma.EventCreateInput => ({
          type: 'PREPARATION',
          date: dayjs
            .utc(startPeriodDate)
            .startOf('week')
            .add(weekIndex + 1, 'week')
            .set('hours', 12)
            .set('minutes', 30)
            .toDate(),
          user: { connect: { id: userId } },
          recipeEvents: {
            createMany: {
              data: recipes
                .slice(
                  0 + weekIndex * maxRecipesPerWeek,
                  maxRecipesPerWeek + weekIndex * maxRecipesPerWeek,
                )
                .map(recipe => ({ recipeId: recipe.id })),
            },
          },
        }),
      ),
    ]

    for (const event of events) {
      await prisma.event.create({ data: event })
    }
    console.log(`📆 Created ${events.length} new events`)

    // Shopping list food items
    // TODO: Generate shopping list from recipes food
    const recipeFoodItems = await prisma.recipeFood.findMany({
      where: {
        recipe: {
          recipeEvents: {
            some: {
              event: {
                date: {
                  gte: events.find(event => event.type === 'PERIOD_START')?.date,
                  lt: events.find(event => event.type === 'PERIOD_END')?.date,
                },
              },
            },
          },
        },
      },
    })

    const createdShoppingListFoodItems = await prisma.shoppingListFood.createMany({
      data: recipeFoodItems.map(recipeFood => ({
        shoppingListId: shoppingList.id,
        isChecked: false,
        foodId: recipeFood.foodId,
      })),
    })
    console.log(`🛒 Created ${createdShoppingListFoodItems.count} new shopping list food items`)

    console.log('Success ✅')
    pushNotification({
      message: `Un nouveau cycle a été créé ✅. ${totalRecipesNb} nouvelles recettes réparties sur ${shoppingWeeksInterval} semaines. Bon appétit ! 👨‍🍳`,
    })
  } catch (err) {
    console.log('Errors ❌', err)
    console.log('Running populateNewDatabase script first may fix the issue.')
  } finally {
    console.log('End 🏁')
  }
}

prismaInjector(main)
