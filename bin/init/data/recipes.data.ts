import pick from 'lodash/pick'

import { Food, Recipe, RecipeFood, RecipeInstruction } from '../../../src/generated/prisma-client'
export type InputCustomRecipeInstruction = (Pick<
  Recipe,
  'name' | 'cookingDuration' | 'preparationDuration' | 'image' | 'numberOfPeople'
> & {
  foodItems: [Food['name'], RecipeFood['quantity'], RecipeFood['quantityUnit']?][]
  instructions: [RecipeInstruction['description'], RecipeInstruction['duration']?][]
})[]

export type OutputCustomRecipeInstruction = (Pick<
  Recipe,
  'name' | 'cookingDuration' | 'preparationDuration' | 'image' | 'numberOfPeople'
> & {
  foodItems: {
    name: Food['name']
    quantity: RecipeFood['quantity']
    quantityUnit?: RecipeFood['quantityUnit']
  }[]
  instructions: {
    description: RecipeInstruction['description']
    duration?: RecipeInstruction['duration']
  }[]
})[]

const inputRecipes: InputCustomRecipeInstruction = [
  {
    name: 'Taboulé de quinoa vitaminé',
    cookingDuration: 15,
    preparationDuration: 15,
    foodItems: [
      ['Quinoa', 200, 'g'],
      ['Betterave', 1],
      ['Huile', 1, 'cuillère à soupe'],
      ['Jus de citron', 1, 'cuillère à soupe'],
      ['Graines', 100, 'g'],
      ['Fruits secs', 100, 'g'],
      ['Sel', 1, 'pincée'],
      ['Poivre', 1, 'pincée'],
    ],
    instructions: [
      ['Faire cuire le quinoa comme indiqué sur la paquet.', 10],
      ['Pendant ce temps, coupez les betteraves en petits dés.'],
      ["Dans un saladier, mélangez l'huile et le jus de citron.", 1],
      ['Ajoutez les betteraves et le quinoa cuit.'],
      ['Ajoutez les graines et les fruits secs, salez, poivrez et remuez bien.'],
      ['Servez tiède ou froid selon votre convenance.'],
    ],
    image: null,
    numberOfPeople: null,
  },
  {
    name: 'Galettes de brocolis',
    cookingDuration: 20,
    preparationDuration: 20,
    foodItems: [
      ['Brocolis', 200, 'g'],
      ['Oeuf', 4],
      ['Fromage blanc', 150, 'g'],
      ['Curcuma', 1, 'pincée'],
      ['Parmesan', 1, 'pincée'],
    ],
    instructions: [
      ['Préchauffez le four à 180°C (th. 6).', 10],
      [
        'Dans un saladier, battez les oeufs avec la fécule, le fromage blanc, le curcuma et le parmesan.',
      ],
      ['Égouttez et écrasez le brocoli en purée.', 1],
      ['Ajoutez-le dans le saladier et mélangez bien le tout.', 1],
      ['Sur une plaque de cuisson sulfurisée, faites des petits tas de cette pâte.'],
      ['Enfournez en vérifiant la cuisson et en la prolongeant si nécessaire'],
    ],

    image: null,
    numberOfPeople: null,
  },
  {
    name: 'Salade de lentilles corail, sauce au curry, miel et citron',
    cookingDuration: 10,
    preparationDuration: 10,
    foodItems: [
      ['Lentilles corail', 200, 'g'],
      ['Oignon', 1],
      ["Huile d'olive", 3, 'cl'],
      ['Citron', 0.5],
      ['Miel', 1, 'cuillère à café'],
      ['Curry', 1, 'cuillère à café'],
      ['Coriandre', 1, 'cuillère à café'],
      ['Graines de sésame', 1],
      ['Sel fin', 1],
      ['Moulin à poivre', 1],
    ],
    instructions: [
      ["Verser 200g de lentilles corail dans une casserole d'eau froide et les faire cuire pendant 10 min environ.", 10],
      [
        "Égoutter-les",
      ],
      ["Faire revenir un oignon émincé dans une poêle avec un peu d’huile."],
      ["Préparer la sauce : dans un saladier, mélanger à l’aide d’un fouet le jus d'un demi citron, 1 cuillère à café de miel, 1 cuillère à café de curry, un peu de poivre, et l’huile d’olive."],
      ["Verser les lentilles et les oignons."],
      ["Saupoudrer d’un peu de graines de sésame."],
      ["Mélanger et servir frais."],
    ],

    image: "https://carnetsgourmands.com/wp-content/uploads/2021/01/dhal-de-lentilles-corail.jpg",
    numberOfPeople: 4,
  },
]

export const recipes: OutputCustomRecipeInstruction = inputRecipes.map(recipe => ({
  ...pick(recipe, ['name', 'cookingDuration', 'preparationDuration', 'image', 'numberOfPeople']),
  foodItems: recipe.foodItems.map(foodItem => ({
    name: foodItem[0],
    quantity: foodItem[1],
    ...(foodItem.length === 3 && { quantityUnit: foodItem[2] }),
  })),
  instructions: recipe.instructions.map(instruction => ({
    description: instruction[0],
    ...(instruction.length === 2 && { duration: instruction[1] }),
  })),
}))
