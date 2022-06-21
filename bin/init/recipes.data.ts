// import { Prisma } from '../../src/generated/prisma-client'

// type CustomFoodItem = {
//   name: string
// } & Pick<Prisma.RecipeInstructionFoodCreateInput, 'quantity' | 'quantityUnit'>

// type CustomRecipeInstruction = Pick<
//   Prisma.RecipeInstructionCreateInput,
//   'description' | 'duration'
// > & { foodItems: CustomFoodItem[] }

// export const recipeInstructions: CustomRecipeInstruction[] = [
//   {
//     description: 'Faire cuire le quinoa comme indiqué sur la paquet.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: 'Pendant ce temps, coupez les betteraves en petits dés.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: "Dans un saladier, mélangez l'huile et le jus de citron.",
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: 'Ajoutez les betteraves et le quinoa cuit.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: 'Ajoutez les graines et les fruits secs, salez, poivrez et remuez bien.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: 'Servez tiède ou froid selon votre convenance.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
// ]

// export const recipeInstructions2: CustomRecipeInstruction[] = [
//   {
//     description: 'Préchauffez le four à 180°C (th. 6).',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: "Découpez et faites cuire le brocoli dans de l'eau bouillante.",
//     duration: 10,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description:
//       'Dans un saladier, battez les oeufs avec la fécule, le fromage blanc, le curcuma et le parmesan.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: 'Égouttez et écrasez le brocoli en purée.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: 'Ajoutez-le dans le saladier et mélangez bien le tout.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: 'Sur une plaque de cuisson sulfurisée, faites des petits tas de cette pâte.',
//     duration: 0,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
//   {
//     description: 'Enfournez en vérifiant la cuisson et en la prolongeant si nécessaire',
//     duration: 10,
//     foodItems: [
//       {
//         name: 'Quinoa',
//         quantity: null,
//         quantityUnit: null,
//       },
//     ],
//   },
// ]

// export const recipes: (Prisma.RecipeCreateInput & {
//   recipeInstructionsToCreate: CustomRecipeInstruction[]
// })[] = [
//   {
//     name: 'Taboulé de quinoa vitaminé',
//     cookingDuration: 15,
//     preparationDuration: 15,
//     recipeInstructionsToCreate: [
//       {
//         description: 'Faire cuire le quinoa comme indiqué sur la paquet.',
//         duration: 0,
//         foodItems: [
//           {
//             name: 'Quinoa',
//             quantity: null,
//             quantityUnit: null,
//           },
//         ],
//       },
//       {
//         description: 'Pendant ce temps, coupez les betteraves en petits dés.',
//         duration: 0,
//         foodItems: [
//           {
//             name: 'Quinoa',
//             quantity: null,
//             quantityUnit: null,
//           },
//         ],
//       },
//       {
//         description: "Dans un saladier, mélangez l'huile et le jus de citron.",
//         duration: 0,
//         foodItems: [
//           {
//             name: 'Quinoa',
//             quantity: null,
//             quantityUnit: null,
//           },
//         ],
//       },
//       {
//         description: 'Ajoutez les betteraves et le quinoa cuit.',
//         duration: 0,
//         foodItems: [
//           {
//             name: 'Quinoa',
//             quantity: null,
//             quantityUnit: null,
//           },
//         ],
//       },
//       {
//         description: 'Ajoutez les graines et les fruits secs, salez, poivrez et remuez bien.',
//         duration: 0,
//         foodItems: [
//           {
//             name: 'Quinoa',
//             quantity: null,
//             quantityUnit: null,
//           },
//         ],
//       },
//       {
//         description: 'Servez tiède ou froid selon votre convenance.',
//         duration: 0,
//         foodItems: [
//           {
//             name: 'Quinoa',
//             quantity: null,
//             quantityUnit: null,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Galettes de brocolis',
//     cookingDuration: 20,
//     preparationDuration: 20,
//     recipeInstructions: {
//       createMany: {
//         data: [
//           { description: 'Préchauffez le four à 180°C (th. 6).', duration: 0 },
//           {
//             description: "Découpez et faites cuire le brocoli dans de l'eau bouillante.",
//             duration: 10,
//           },
//           {
//             description:
//               'Dans un saladier, battez les oeufs avec la fécule, le fromage blanc, le curcuma et le parmesan.',
//             duration: 0,
//           },
//           { description: 'Égouttez et écrasez le brocoli en purée.', duration: 0 },
//           {
//             description: 'Ajoutez-le dans le saladier et mélangez bien le tout.',
//             duration: 0,
//           },
//           {
//             description:
//               'Sur une plaque de cuisson sulfurisée, faites des petits tas de cette pâte.',
//             duration: 0,
//           },
//           {
//             description: 'Enfournez en vérifiant la cuisson et en la prolongeant si nécessaire',
//             duration: 10,
//           },
//         ],
//       },
//     },
//   },
//   { name: 'Curry de chou-fleur et pois chiches', cookingDuration: 20, preparationDuration: 10 },
//   { name: 'Lentilles aux épinards et au tofu', cookingDuration: 30, preparationDuration: 15 },
//   {
//     name: 'Salade de chou rouge et mâche au miel',
//     cookingDuration: 0,
//     preparationDuration: 10,
//   },
//   { name: 'Flan de poisson aux légumes', cookingDuration: 30, preparationDuration: 15 },
//   {
//     name: 'Tarte aux tomates cerise, aux épinards et à la ricotta',
//     cookingDuration: 30,
//     preparationDuration: 15,
//   },
//   { name: "Terrine de saumon à l'oseille", cookingDuration: 60, preparationDuration: 20 },
// ]
