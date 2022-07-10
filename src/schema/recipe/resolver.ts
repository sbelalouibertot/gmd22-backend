import { Food, Recipe, RecipeFood, RecipeInstruction } from 'generated/prisma-client'
import { GraphqlContext } from 'schema/types'

export default {
  Recipe: {
    recipeInstructions: async (
      parent: Recipe,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<RecipeInstruction[]> => {
      const parentRecipe = await ctx.prisma.recipe.findUnique({
        where: { id: parent.id },
        include: { recipeInstructions: true },
      })
      return parentRecipe?.recipeInstructions ?? []
    },
    recipeFoodItems: async (
      parent: Recipe,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<RecipeFood[]> => {
      const parentRecipe = await ctx.prisma.recipe.findUnique({
        where: { id: parent.id },
        include: { recipeFood: true },
      })
      return parentRecipe?.recipeFood ?? []
    },
  },
  Food: {
    recipes: async (parent: Food, _: unknown, ctx: GraphqlContext): Promise<Recipe[]> => {
      const parentFood = await ctx.prisma.food.findUnique({
        where: { id: parent.id },
        include: {
          recipeFoodItems: { include: { recipe: true } },
        },
      })
      if (!parentFood) {
        return []
      }

      const recipes = parentFood?.recipeFoodItems.map(foodItem => foodItem.recipe)
      const recipesWithoutDupplicates = recipes.filter(
        (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i,
      )

      return recipesWithoutDupplicates ?? []
    },
    currentRecipeFoodItems: async (
      parent: Food,
      _: unknown,
      ctx: GraphqlContext,
    ): Promise<RecipeFood[]> => {
      const [periodStartEvent, periodEndEvent] = await Promise.all([
        ctx.prisma.event.findFirst({
          where: { type: 'PERIOD_START', date: { lte: new Date() } },
          orderBy: { date: 'desc' },
        }),
        ctx.prisma.event.findFirst({
          where: { type: 'PERIOD_END', date: { gte: new Date() } },
          orderBy: { date: 'asc' },
        }),
      ])

      if (!periodStartEvent || !periodEndEvent) {
        return []
      }

      const parentFood = await ctx.prisma.food.findUnique({
        where: { id: parent.id },
        include: {
          recipeFoodItems: {
            include: { recipe: true },
            where: {
              recipe: {
                recipeEvents: {
                  some: {
                    event: {
                      date: {
                        gte: periodStartEvent.date,
                        lte: periodEndEvent.date,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })
      if (!parentFood) {
        return []
      }

      return parentFood?.recipeFoodItems ?? []
    },
    currentRecipes: async (parent: Food, _: unknown, ctx: GraphqlContext): Promise<Recipe[]> => {
      const [periodStartEvent, periodEndEvent] = await Promise.all([
        ctx.prisma.event.findFirst({
          where: { type: 'PERIOD_START', date: { lte: new Date() } },
          orderBy: { date: 'desc' },
        }),
        ctx.prisma.event.findFirst({
          where: { type: 'PERIOD_END', date: { gte: new Date() } },
          orderBy: { date: 'asc' },
        }),
      ])

      if (!periodStartEvent || !periodEndEvent) {
        return []
      }

      const parentFood = await ctx.prisma.food.findUnique({
        where: { id: parent.id },
        include: {
          recipeFoodItems: {
            include: { recipe: true },
            where: {
              recipe: {
                recipeEvents: {
                  some: {
                    event: {
                      date: {
                        gte: periodStartEvent.date,
                        lte: periodEndEvent.date,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      })
      if (!parentFood) {
        return []
      }

      const recipes = parentFood?.recipeFoodItems.map(foodItem => foodItem.recipe)
      const recipesWithoutDupplicates = recipes.filter(
        (v, i, a) => a.findIndex(v2 => v2.id === v.id) === i,
      )
      return recipesWithoutDupplicates ?? []
    },
  },
  RecipeFood: {
    food: async (parent: RecipeFood, _: unknown, ctx: GraphqlContext): Promise<Food | null> => {
      const parentRecipeFood = await ctx.prisma.recipeFood.findUnique({
        where: { id: parent.id },
        include: {
          food: true,
        },
      })
      if (!parentRecipeFood) {
        return null
      }
      return parentRecipeFood.food
    },
    recipe: async (parent: RecipeFood, _: unknown, ctx: GraphqlContext): Promise<Recipe | null> => {
      const parentRecipeFood = await ctx.prisma.recipeFood.findUnique({
        where: { id: parent.id },
        include: {
          recipe: true,
        },
      })
      if (!parentRecipeFood) {
        return null
      }
      return parentRecipeFood.recipe
    },
  },
}
