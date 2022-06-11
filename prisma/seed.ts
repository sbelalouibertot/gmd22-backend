import { PrismaClient } from '@prisma/client'

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
  const tables = [
    'events',
    'food', 
    'quantity_units',
    'recipes',
    'recipes_events',
    'recipes_instructions',
    'recipes_instructions_food',
    'shopping_lists',
    'shopping_lists_events',
    'shopping_lists_food',
    'users',
    'users_preferences'
  ]

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
