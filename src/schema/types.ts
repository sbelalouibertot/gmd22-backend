import { Request } from 'express'

import { PrismaClient } from 'generated/prisma-client'

export type GraphqlContext = {
  prisma: PrismaClient
  request: Request
}

export type TPagination = {
  skip: number
  take: number
}
