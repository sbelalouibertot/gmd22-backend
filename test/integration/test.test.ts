import { PrismaClient } from '../../src/generated/prisma-client'
import { shutdown, clear, seedFood } from '../../prisma/seed/seed'

describe('synchronization', () => {
  let prisma: PrismaClient

  beforeAll(async () => {
    prisma = new PrismaClient()
  })

  afterAll(() => shutdown(prisma))

  beforeEach(async () => {
  })

  afterEach(() => clear(prisma))

  describe('Test description', () => {
    test('Test food creation', async () => {
      await seedFood(prisma, { name: 'Pomme', type : 'FRUIT' })
      const allFood = await prisma.food.findMany({})
      expect(allFood.length).toBe(1)
      expect(allFood[0].name).toBe('Pomme')
      expect(allFood[0].type).toBe('FRUIT')
    })
  })
})