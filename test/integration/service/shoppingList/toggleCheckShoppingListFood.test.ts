import { Prisma, PrismaClient } from '../../../../src/generated/prisma-client'
import { shutdown, clear, seedFood, seedUser, seedShoppingList, seedShoppingListFood } from '../../../../prisma/seed/seed'
import { toggleCheckShoppingListFood } from '../../../../src/service/shoppingList/toggleCheckShoppingListFood'
import { ids } from '../../../../prisma/seed/constants'

describe('Toggle check shopping list food', () => {
    let prisma: PrismaClient

    const foodItemsData: Prisma.FoodCreateInput[] = [
        { id: ids.food_1, name: 'Pomme', type: 'FRUIT' },
        { id: 'food_2', name: 'Poisson', type: 'FISH' },
        { id: 'food_3', name: 'Pâtes', type: 'FISH' },
        { id: 'food_4', name: 'Riz', type: 'FISH' },
    ]

    const shoppingListsFoodData: Prisma.ShoppingListFoodCreateInput[] = [
        { id: ids.shoppingListFood_1, isChecked: false, shoppingList: { connect: { id: ids.shoppingList_1 } }, food: { connect: { id: ids.food_1 } } },
        { id: 'shopping_list_food_2', isChecked: false, shoppingList: { connect: { id: 'shopping_list_1' } }, food: { connect: { id: 'food_2' } } },
        { id: 'shopping_list_food_3', isChecked: true, shoppingList: { connect: { id: 'shopping_list_1' } }, food: { connect: { id: 'food_3' } } },
        { id: 'shopping_list_food_4', isChecked: false, shoppingList: { connect: { id: 'shopping_list_1' } }, food: { connect: { id: 'food_4' } } },
    ]

    beforeAll(() => {
        prisma = new PrismaClient()
    })

    afterAll(() => {
        shutdown(prisma)
    })

    beforeEach(async () => {
        await seedUser(prisma, { firstName: 'Samy', username: 'Belaloui-Bertot', })
        await seedUser(prisma, { id: 'user_2', firstName: 'Jacques', username: 'Danièle', })

        await seedShoppingList(prisma, { id: ids.shoppingList_1, name: 'Première liste de course' })

        for (const foodItemData of foodItemsData) {
            await seedFood(prisma, foodItemData)
        }
        for (const shoppingListFood of shoppingListsFoodData) {
            await seedShoppingListFood(prisma, shoppingListFood)
        }
    })

    afterEach(async () => {
        await clear(prisma)
    })

    test('Should correctly set to "checked" an "unchecked" toggle', async () => {
        await toggleCheckShoppingListFood(prisma, { id: ids.shoppingListFood_1 })
        const updatedShoppingListFood = await prisma.shoppingListFood.findFirst({ where: { id: ids.shoppingListFood_1 } })

        expect(updatedShoppingListFood).not.toBeNull()
        expect(updatedShoppingListFood?.isChecked).toBeTruthy()
    })

    test('Should correctly set to "unchecked" an "checked" toggle', async () => {
        await toggleCheckShoppingListFood(prisma, { id: 'shopping_list_food_3' })
        const updatedShoppingListFood = await prisma.shoppingListFood.findFirst({ where: { id: 'shopping_list_food_3' } })

        expect(updatedShoppingListFood).not.toBeNull()
        expect(updatedShoppingListFood?.isChecked).toBeFalsy()
    })
})