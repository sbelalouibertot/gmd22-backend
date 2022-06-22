import { ids } from '../../../../prisma/seed/constants'
import {
  clear,
  seedFood,
  seedRecipe,
  seedRecipeInstruction,
  shutdown,
} from '../../../../prisma/seed/seed'
import { Prisma, PrismaClient } from '../../../../src/generated/prisma-client'
import { getFoodRecipes } from '../../../../src/service/recipe/getFoodRecipes'

describe('Get food recipes', () => {
  let prisma: PrismaClient

  const foodItemsData: Prisma.FoodCreateInput[] = [
    { id: ids.food_1, name: 'Pomme', type: 'FRUIT' },
    { id: 'food_2', name: 'Poisson', type: 'FISH' },
  ]

  const foodRecipesData: Prisma.RecipeCreateInput[] = [
    { id: ids.recipe_1, name: 'Crumble aux pommes', cookingDuration: 20, preparationDuration: 20 },
    { id: 'recipe_2', name: 'Soupe de poisson', cookingDuration: 10, preparationDuration: 30 },
  ]

  const recipesInstructionsData: Prisma.RecipeInstructionCreateInput[] = [
    {
      id: ids.recipeInstruction_1,
      description: 'Découper les pommes en petits morceaux',
      duration: 10,
      recipe: { connect: { id: ids.recipe_1 } },
    },
    {
      id: 'recipe_instruction_2',
      description: 'Faire cuire le crumble',
      duration: 10,
      recipe: { connect: { id: ids.recipe_1 } },
    },
    {
      id: 'recipe_instruction_3',
      description: 'Découper le poisson en petits morceaux',
      duration: 15,
      recipe: { connect: { id: 'recipe_2' } },
    },
    {
      id: 'recipe_instruction_4',
      description: "Mixer les morceaux jusqu'à obtenir une soupe",
      duration: 5,
      recipe: { connect: { id: 'recipe_2' } },
    },
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
    for (const foodRecipeData of foodRecipesData) {
      await seedRecipe(prisma, foodRecipeData)
    }
    for (const recipeInstructionData of recipesInstructionsData) {
      await seedRecipeInstruction(prisma, recipeInstructionData)
    }
    await prisma.recipeFood.createMany({
      data: [
        {
          foodId: ids.food_1, // Pomme
          quantity: 1,
          quantityUnit: null,
          recipeId: ids.recipe_1, // Crumble aux pommes
        },
        {
          foodId: 'food_2', // Poisson
          quantity: 1,
          quantityUnit: null,
          recipeId: 'recipe_2', // Soupe de poisson
        },
      ],
      skipDuplicates: true,
    })
  })

  afterEach(async () => {
    await clear(prisma)
  })

  test('All food recipes related to food should be returned (recipe 1)', async () => {
    const allFoodRecipes = (await getFoodRecipes(prisma, { foodId: ids.food_1 })).recipes

    expect(allFoodRecipes.length).toBe(1)
    expect(allFoodRecipes[0]).toMatchObject(foodRecipesData[0])
  })

  test('All food recipes related to food should be returned (recipe 2)', async () => {
    const allFoodRecipes = (await getFoodRecipes(prisma, { foodId: 'food_2' })).recipes

    expect(allFoodRecipes.length).toBe(1)
    expect(allFoodRecipes[0]).toMatchObject(foodRecipesData[1])
  })

  test('No food recipe should be return if food is not related to any of them', async () => {
    const allFoodRecipes = (await getFoodRecipes(prisma, { foodId: 'food_3' })).recipes

    expect(allFoodRecipes.length).toBe(0)
  })
})
