/* eslint-disable no-console */
import { PrismaClient } from 'generated/prisma-client'

export const prismaInjector = <T>(fn: (prisma: PrismaClient) => Promise<T>): Promise<T> => {
  const prisma = new PrismaClient()

  return fn(prisma)
    .catch(e => {
      console.log(e)
      throw e
    })
    .finally(async () => {
      await prisma?.$disconnect()
    })
}
