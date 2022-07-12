/* eslint-disable no-console */
import 'dayjs/locale/fr'

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { EVENTS_LABELS, EVENTS_MESSAGE_DESCRIPTION } from '../../constants/events'
import { PrismaClient } from '../../generated/prisma-client'
import { truthy } from '../../utils/libs/other'
import { prismaInjector } from '../../utils/libs/prisma/prismaInjector'
import { pushNotification } from '../../utils/pushNotification'

dayjs.extend(utc)
dayjs.locale('fr')

// Round generator
// Run by CRON every day
// 0 6 * * *
// npm run ts-node ./src/bin/day-information/dayInformation.ts

export const main = async (prisma: PrismaClient) => {
  console.log('🚀 Start day information')
  const startOfDay = dayjs.utc(new Date()).startOf('day').toDate()
  const startOfTomorrow = dayjs.utc(startOfDay).add(1, 'day').toDate()

  const events = await prisma.event.findMany({
    where: { date: { gte: startOfDay, lt: startOfTomorrow } },
    include: {
      recipeEvents: { include: { recipe: true } },
      shoppingListEvents: {
        include: { shoppingList: { include: { shoppingListFoods: { include: { food: true } } } } },
      },
    },
    orderBy: { date: 'asc' },
  })

  const dayEventsNb = events.length
  if (!dayEventsNb || dayEventsNb < 1) {
    return
  }

  if (dayEventsNb > 1) {
    pushNotification({
      message: `Il y a ${dayEventsNb} évènements de prévus aujourd'hui : ${events
        .map(event => EVENTS_LABELS[event.type])
        .join(', ')} 🌞`,
    })
  }
  const event = events[0]
  const baseMessage = `⏰ ${dayjs.utc(event.date).format('hh[h]mm')} - ${
    EVENTS_MESSAGE_DESCRIPTION[event.type]
  }`

  let additionalMessage = ''
  if (event.type === 'PREPARATION') {
    const recipes = event.recipeEvents.map(recipeEvent => recipeEvent.recipe)
    additionalMessage += `Au programme, ${recipes.length} nouvelles recettes : ${recipes
      .map(recipe => recipe.name)
      .join(' / ')} 🤌`
  }
  if (event.type === 'SHOPPING') {
    const foodItems = event.shoppingListEvents.flatMap(
      shoppingListEvent => shoppingListEvent.shoppingList.shoppingListFoods,
    )
    additionalMessage += `Au programme, ${foodItems.length} ingrédients à acheter : ${foodItems
      .map(foodItem => foodItem.food.name)
      .join(', ')} 📝`
  }
  pushNotification({ message: [baseMessage, additionalMessage].filter(truthy).join(' ') })
}

prismaInjector(main)
