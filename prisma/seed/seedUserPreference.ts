import { PrismaClient, Prisma } from '../../src/generated/prisma-client'
import { ids } from './constants'

export const seedUserPreference = async (
    prisma: PrismaClient,
    userPreference: Prisma.UserPreferenceCreateInput,
): Promise<PrismaClient> => {
    await prisma.userPreference.create({
        data: {
            id: ids.userPreference_1,
            ...userPreference,
        }
    })
    return prisma
}
