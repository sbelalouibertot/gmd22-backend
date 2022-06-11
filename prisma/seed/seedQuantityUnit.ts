import { PrismaClient, Prisma } from '../../src/generated/prisma-client'

export const seedQuantityUnit = async (
    prisma: PrismaClient,
    quantityUnit: Prisma.QuantityUnitCreateInput,
): Promise<PrismaClient> => {
    await prisma.quantityUnit.create({
        data: {
            ...quantityUnit,
        }
    })
    return prisma
}
