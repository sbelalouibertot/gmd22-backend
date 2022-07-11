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
// npm run ts-node ./src/bin/round-generator/roundGenerator.ts
const main = async (prisma: PrismaClient) => {
  try {
    const lastPeriodEndEvent = await prisma.event.findFirst({
      where: { type: 'PERIOD_END', date: { gte: new Date() } },
      orderBy: { date: 'desc' },
    })

    if (
      dayjs
        .utc(lastPeriodEndEvent?.date)
        .startOf('day')
        .isAfter(dayjs.utc(new Date()).startOf('day'))
    ) {
      return
    }

    // User preferences
    const user = await prisma.user.findFirst({ where: { username: 'samy' } })
    const userId =
      user?.id ?? (await prisma.user.create({ data: { firstName: 'Samy', username: 'samy' } })).id

    const shoppingWeeksInterval = (
      (await prisma.userPreference.findFirst({
        where: { type: 'SHOPPING_WEEKS_INTERVAL', userId },
      })) ??
      (await prisma.userPreference.create({
        data: { value: 3, type: 'SHOPPING_WEEKS_INTERVAL', userId },
      }))
    ).value

    const maxRecipesPerWeek = (
      (await prisma.userPreference.findFirst({
        where: { type: 'MAX_RECIPES_PER_WEEK', userId },
      })) ??
      (await prisma.userPreference.create({
        data: { value: 2, type: 'MAX_RECIPES_PER_WEEK', userId },
      }))
    ).value

    // Shopping list
    console.log('📝 Creating shopping list')

    const shoppingListsCount = await prisma.shoppingList.count()
    const shoppingList = await prisma.shoppingList.create({
      data: {
        name: `Liste de courses #${shoppingListsCount + 1}`,
      },
    })

    // Random recipes
    const totalRecipesNb = maxRecipesPerWeek * (shoppingWeeksInterval - 1)
    const recipes: Recipe[] =
      await prisma.$queryRaw`SELECT * FROM recipes ORDER BY RANDOM() LIMIT ${totalRecipesNb};`

    // Events
    console.log('📆 Creating events')

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
      ...[...Array(shoppingWeeksInterval - 1).keys()].map(
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

    // Shopping list food items
    // TODO: Generate shopping list from recipes food
    console.log('🛒 Creating shopping list food items')
    const createdRecipeFoodItems = await prisma.recipeFood.findMany({
      where: {
        recipe: {
          recipeEvents: {
            every: {
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

    await prisma.shoppingListFood.createMany({
      data: createdRecipeFoodItems.map(recipeFood => ({
        shoppingListId: shoppingList.id,
        isChecked: false,
        foodId: recipeFood.foodId,
      })),
    })

    console.log('Succès ✅')
    pushNotification({
      message: `Un nouveau cycle a été créé ✅. ${totalRecipesNb} nouvelles recettes réparties sur ${shoppingWeeksInterval} semaines. Bon appétit ! 👨‍🍳`,
    })
  } catch (err) {
    console.log('Erreurs ❌', err)
  } finally {
    console.log('Fin 🏁')
  }
}

prismaInjector(main)
