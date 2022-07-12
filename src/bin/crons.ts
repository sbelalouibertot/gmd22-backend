import * as cron from 'node-cron'

import { prismaInjector } from '../utils/libs/prisma/prismaInjector'
import { main as dayInformationMain } from './day-information/dayInformation'
import { main as roundGeneratorMain } from './round-generator/roundGenerator'

export const crons = () => {
  // Round generation
  // Every day at 5:55AM
  cron.schedule('55 5 * * *', () => {
    prismaInjector(roundGeneratorMain)
  })

  // Day information
  // Every day at 6AM
  cron.schedule('0 6 * * *', () => {
    prismaInjector(dayInformationMain)
  })
}
