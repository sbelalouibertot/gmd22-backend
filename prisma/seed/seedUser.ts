import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedUser = async (
    prisma: PrismaClient,
    user: Prisma.UserCreateInput,
): Promise<PrismaClient> => {
    await prisma.user.create({
        data: {
            id: ids.user_1,
            ...user,
        }
    })
    return prisma
}
