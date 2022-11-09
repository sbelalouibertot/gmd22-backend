import { PrismaClient } from 'generated/prisma-client'

export type TReplaceRecipeInput = { recipeEventId: string }

import 'dayjs/locale/fr'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { PrismaClient } from '../../src/generated/prisma-client'
import { prismaInjector } from '../../src/utils/libs/prisma/prismaInjector'

dayjs.extend(utc)
dayjs.locale('fr')

const RECIPE_EVENT_ID = 'cl9nqhnd9007601pekb55lzx5'
const RECIPE_ID_TO_ADD = 'claa2dfkn0385hjpkadfmnx9f'

// To use if need to replace a specific recipe by another one
// npm run ts-node ./bin/init/forceRecipeReplace.ts
const main = async (prisma: PrismaClient) => {
  console.log('Forcing recipe replacement')
  try {
    if (RECIPE_EVENT_ID === '' || RECIPE_ID_TO_ADD === '') {
      throw Error('Empty params')
    }

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
      return
    }

    await prisma.recipeEvent.update({
      data: { recipeId: RECIPE_ID_TO_ADD },
      where: { id: RECIPE_EVENT_ID },
    })
    console.log(
      `Successfully replaced recipe event ${RECIPE_EVENT_ID} with recipe ${RECIPE_ID_TO_ADD}`,
    )

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
      await prisma.shoppingListFood.deleteMany({
        where: { shoppingListId: currentShoppingList.id },
      })
      await prisma.shoppingListFood.createMany({
        data: recipeFoodItems.map(recipeFood => ({
          shoppingListId: currentShoppingList.id,
          isChecked: false,
          foodId: recipeFood.foodId,
        })),
      })
    }
    console.log('Successfully updated shopping list')
  } catch (err) {
    console.log(err)
  }
}

prismaInjector(main)
