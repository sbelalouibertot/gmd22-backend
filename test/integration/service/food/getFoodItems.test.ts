import { ids } from '../../../../prisma/seed/constants'
import { clear, seedFood, shutdown } from '../../../../prisma/seed/seed'
import { Prisma, PrismaClient } from '../../../../src/generated/prisma-client'

describe('Get food items', () => {
  let prisma: PrismaClient
  const foodItemsData: Prisma.FoodCreateInput[] = [
    { id: ids.food_1, name: 'Pomme', type: 'FRUIT' },
    { id: 'food_2', name: 'Poisson', type: 'FISH' },
    { id: 'food_3', name: 'Coca', type: 'SODAS' },
  ]

  beforeAll(() => {
    prisma = new PrismaClient()
  })

  afterAll(() => {
    shutdown(prisma)
  })

  beforeEach(async () => {
    for (const foodItemData of foodItemsData) {
      await seedFood(prisma, foodItemData)
    }
  })

  afterEach(async () => {
    await clear(prisma)
  })

  test('All food items should be returned', async () => {
    const allFood = await prisma.food.findMany({})

    expect(allFood.length).toBe(foodItemsData.length)
    expect(allFood).toEqual(
      expect.arrayContaining(
        foodItemsData.map(foodItemData => expect.objectContaining(foodItemData)),
      ),
    )
  })
})
