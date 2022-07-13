import 'dayjs/locale/fr'

import axios from 'axios'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

import { PrismaClient } from '../../src/generated/prisma-client'
import { prismaInjector } from '../../src/utils/libs/prisma/prismaInjector'
import { spreadIngredient } from '../../src/utils/scrap'
import { InputCustomRecipeInstruction } from './data/recipes.data'
dayjs.extend(utc)
dayjs.locale('fr')

const SCRAP_BASE_URL = process.env.SCRAP_BASE_URL
const SCRAP_URL_PREFIX = process.env.SCRAP_URL_PREFIX
const SCRAP_URL_SUFFIX = process.env.SCRAP_URL_SUFFIX
const SCRAP_START_TAG = process.env.SCRAP_START_TAG
const SCRAP_END_TAG = process.env.SCRAP_END_TAG

const getRecipesPageUrl = (pageIndex = 1) =>
  `${SCRAP_BASE_URL}${SCRAP_URL_PREFIX}${pageIndex}${SCRAP_URL_SUFFIX}`

const extractScriptData = (html: string): string =>
  html.split(SCRAP_START_TAG)[1].split(SCRAP_END_TAG)[0]

// npm run ts-node ./bin/init/scrap.ts
const main = async (prisma: PrismaClient) => {
  const recipes: InputCustomRecipeInstruction = []

  // Recipes
  const { data: recipesData }: { data: string } = await axios.get(getRecipesPageUrl(29))
  const extractedScriptData = extractScriptData(recipesData)

  const recipesJson = JSON.parse(extractedScriptData)
  const recipesUrls: string[] = recipesJson.itemListElement.map(recipe => recipe.url)

  for (const url of recipesUrls) {
    const { data: recipeData }: { data: string } = await axios.get([SCRAP_BASE_URL, url].join(''))
    const extractedRecipeScriptData = extractScriptData(recipeData)

    const recipeJson: {
      name: string
      cookTime: string
      prepTime: string
      recipeIngredient: string[]
      recipeInstructions: { text: string }[]
    } = JSON.parse(extractedRecipeScriptData)

    const recipe = {
      name: recipeJson.name,
      cookingDuration: parseInt(recipeJson.cookTime.match(/\d/gm).join('')),
      preparationDuration: parseInt(recipeJson.prepTime.match(/\d/gm).join('')),
      foodItems: recipeJson.recipeIngredient.map(ingredient => spreadIngredient(ingredient)),
      instructions: recipeJson.recipeInstructions.map(instruction => [instruction.text]) as [
        string,
        number?,
      ][],
      //image: recipeJson.image[1],
      //numberOfPeople: parseInt(recipeJson.recipeYield.match(/\d/gm).join('')),
    }

    recipes.push(recipe)
  }
}

prismaInjector(main)
