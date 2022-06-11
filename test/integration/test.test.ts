import { PrismaClient } from '../../src/generated/prisma-client'
import { shutdown, clear } from '../../prisma/seed'

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
      await prisma.food.create({ data: { name: 'Nourriture de test', type: 'FRUIT' } })
      const allFood = await prisma.food.findMany({})
      expect(allFood.length).toBe(1)
      expect(allFood[0].name).toBe('Nourriture de test')
      expect(allFood[0].type).toBe('FRUIT')
    })
  })
})