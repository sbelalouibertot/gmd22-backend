import { PrismaClient } from '@prisma/client'
import { tables } from './constants'
import { seedEvent } from './seedEvent'
import { seedFood } from './seedFood'
import { seedQuantityUnit } from './seedQuantityUnit'
import { seedRecipe } from './seedRecipe'
import { seedRecipeEvent } from './seedRecipeEvent'
import { seedRecipeInstruction } from './seedRecipeInstruction'
import { seedRecipeInstructionFood } from './seedRecipeInstructionFood'
import { seedShoppingList } from './seedShoppingList'
import { seedShoppingListEvent } from './seedShoppingListEvent'
import { seedShoppingListFood } from './seedShoppingListFood'
import { seedUser } from './seedUser'
import { seedUserPreference } from './seedUserPreference'

/**
 * Init prisma
 */
export async function init(): Promise<PrismaClient> {
  const prisma = new PrismaClient()

  return prisma
}
/**
 * Shutdown prisma instance
 */
export async function shutdown(prisma: PrismaClient): Promise<void> {
  await prisma.$disconnect()
}
export async function seed(prisma: PrismaClient): Promise<PrismaClient> {
  return prisma
}
export async function clear(prisma: PrismaClient): Promise<PrismaClient> {
  for (const table of tables) {
    await prisma.$queryRawUnsafe(`DELETE FROM "${process.env.POSTGRES_SCHEMA}".${table} CASCADE;`)
  }

  return prisma
}

async function main() {
  const prisma = await init()

  await seed(prisma)

  await prisma.$disconnect()
}

if (require.main === module) {
  main().catch(error => {
    console.error(error)
    process.exit(1)
  })
}

export {
  seedEvent,
  seedFood,
  seedQuantityUnit,
  seedRecipe,
  seedRecipeEvent,
  seedRecipeInstruction,
  seedRecipeInstructionFood,
  seedShoppingList,
  seedShoppingListEvent,
  seedShoppingListFood,
  seedUser,
  seedUserPreference
}