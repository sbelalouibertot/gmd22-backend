/* eslint-disable no-console */
import 'dayjs/locale/fr'

import axios from 'axios'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import pick from 'lodash/pick'

import { Food, PrismaClient } from '../../src/generated/prisma-client'
import { prismaInjector } from '../../src/utils/libs/prisma/prismaInjector'
import { spreadIngredient } from '../../src/utils/scrap'
import { OutputCustomRecipeInstruction } from './data/recipes.data'
dayjs.extend(utc)
dayjs.locale('fr')

const SCRAP_BASE_URL = process.env.SCRAP_BASE_URL
const SCRAP_URL_PREFIX = process.env.SCRAP_URL_PREFIX
const SCRAP_URL_SUFFIX = process.env.SCRAP_URL_SUFFIX
const SCRAP_START_TAG = process.env.SCRAP_START_TAG
const SCRAP_END_TAG = process.env.SCRAP_END_TAG

const MAX_PAGE_SCRAP_NB = 10
const PAGE_START_NB = 1

export const tempo = (time: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => resolve(), time)
  })

const getRecipesPageUrl = (pageIndex = 1) =>
  `${SCRAP_BASE_URL}${SCRAP_URL_PREFIX}${pageIndex}${SCRAP_URL_SUFFIX}`

const extractScriptData = (html: string): string =>
  html.split(SCRAP_START_TAG)[1].split(SCRAP_END_TAG)[0]

// npm run ts-node ./bin/init/scrap.ts
const main = async (prisma: PrismaClient) => {
  console.log(`Début du scrapping`)

  const createdRecipes = []
  const failedRecipes = []

  // Recipes
  console.log('Récupération des urls de recettes')
  const recipesUrls: string[] = []

  for (const pageIndex of [...Array(MAX_PAGE_SCRAP_NB).keys()]) {
    const { data: recipesData }: { data: string } = await axios.get(
      getRecipesPageUrl(pageIndex + PAGE_START_NB),
    )
    const extractedScriptData = extractScriptData(recipesData)

    const recipesJson = JSON.parse(extractedScriptData)
    const pageRecipesUrls: string[] = recipesJson.itemListElement.map(recipe => recipe.url)

    recipesUrls.push(...pageRecipesUrls)
    await tempo(1000)
  }
  console.log(`${recipesUrls} urls de recettes récupérées avec succès`)

  for (const [urlIndex, url] of recipesUrls.entries()) {
    try {
      const { data: recipeData }: { data: string } = await axios.get([SCRAP_BASE_URL, url].join(''))
      const extractedRecipeScriptData = extractScriptData(recipeData)

      const recipeJson: {
        name: string
        cookTime: string
        prepTime: string
        recipeIngredient: string[]
        recipeInstructions: { text: string }[]
        image: string[]
        recipeYield: string
      } = JSON.parse(extractedRecipeScriptData)

      console.log(`Recette ${urlIndex} : ${recipeJson.name}`)

      const recipe = {
        name: recipeJson.name,
        cookingDuration: parseInt(recipeJson.cookTime.match(/\d/gm).join('')),
        preparationDuration: parseInt(recipeJson.prepTime.match(/\d/gm).join('')),
        foodItems: recipeJson.recipeIngredient.map(ingredient => spreadIngredient(ingredient)),
        instructions: recipeJson.recipeInstructions.map(instruction => [instruction.text]) as [
          string,
          number?,
        ][],
        image: recipeJson.image[1],
        numberOfPeople: parseInt(recipeJson.recipeYield.match(/\d/gm).join('')),
      }

      const formattedRecipe: OutputCustomRecipeInstruction[number] = {
        ...pick(recipe, [
          'name',
          'cookingDuration',
          'preparationDuration',
          'image',
          'numberOfPeople',
        ]),
        foodItems: recipe.foodItems.map(foodItem => ({
          name: foodItem[0],
          quantity: foodItem[1],
          ...(foodItem.length === 3 && { quantityUnit: foodItem[2] }),
        })),
        instructions: recipe.instructions.map(instruction => ({
          description: instruction[0],
          ...(instruction.length === 2 && { duration: instruction[1] }),
        })),
      }
      await addRecipeAndFoodItemsToDB(prisma, formattedRecipe)
      console.log('✅ Ajout à la base terminé')
      createdRecipes.push(url)
    } catch (err) {
      console.error(err.message)
      failedRecipes.push(url)
    } finally {
      await tempo(1000)
    }
  }

  console.log('✅ Scrapping terminé.')
  console.log(`${createdRecipes.length} nouvelles recettes créées.`, { createdRecipes })
  console.log(`${failedRecipes.length} recettes en échec.`, { failedRecipes })
}

prismaInjector(main)

const addRecipeAndFoodItemsToDB = async (prisma: PrismaClient, recipe) => {
  // Recipes & recipes food
  console.log('🍳 Creating recipes & recipes food')

  const createdRecipe = await prisma.recipe.create({
    data: {
      name: recipe.name,
      cookingDuration: recipe.cookingDuration ?? 0,
      preparationDuration: recipe.preparationDuration ?? 0,
      image: recipe.image,
      numberOfPeople: recipe.numberOfPeople,
    },
  })

  await prisma.recipeInstruction.createMany({
    data: recipe.instructions.map(instruction => ({
      recipeId: createdRecipe.id,
      description: instruction.description,
      duration: instruction.duration ?? 0,
    })),
  })

  for (const foodItem of recipe.foodItems) {
    const existingFood = await prisma.food.findFirst({
      where: { name: { equals: foodItem.name } },
    })

    let createdFood: Food | null = null
    if (!existingFood) {
      createdFood = await prisma.food.create({
        data: {
          name: foodItem.name,
          type: 'INGREDIENT',
        },
      })
    }

    await prisma.recipeFood.create({
      data: {
        recipeId: createdRecipe.id,
        quantity: foodItem.quantity,
        quantityUnit: foodItem.quantityUnit,
        foodId: existingFood?.id ?? createdFood.id,
      },
    })
  }
}
