import * as cron from 'node-cron'

import { prismaInjector } from '../utils/libs/prisma/prismaInjector'
import { main as dayInformationMain } from './day-information/dayInformation'
import { main as roundGeneratorMain } from './round-generator/roundGenerator'

export const crons = () => {
  // Round generation
  // Every day at 4:55AM UTC -> 6:55AM
  cron.schedule('55 4 * * *', () => {
    prismaInjector(roundGeneratorMain)
  })

  // Day information
  // Every day at 5AM UTC -> 7:00 AM
  cron.schedule('0 6 * * *', () => {
    prismaInjector(dayInformationMain)
  })
}
