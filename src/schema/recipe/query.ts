import { Prisma, Recipe } from 'generated/prisma-client'

import { defaultPagination } from '../../constants/pagination'
import { getFoodRecipes, TFoodRecipesInput } from '../../service/recipe/getFoodRecipes'
import { getNextRecipe, TNextRecipeInput } from '../../service/recipe/getNextRecipe'
import { GraphqlContext, TPagination } from '.././types'

export default {
  Query: {
    recipe: async (_: unknown, { id }, ctx: GraphqlContext): Promise<{ recipe: Recipe | null }> => {
      const recipe = await ctx.prisma.recipe.findUnique({ where: { id } })
      return { recipe }
    },
    nextRecipe: async (
      _: unknown,
      nextRecipeInput: TNextRecipeInput,
      ctx: GraphqlContext,
    ): Promise<{ recipe: Recipe | null }> => getNextRecipe(ctx.prisma, nextRecipeInput),
    recipes: async (
      _: unknown,
      {
        filters,
        pagination: {
          skip = defaultPagination.skip,
          take = defaultPagination.take,
        } = defaultPagination,
      }: { filters: { searchQuery?: string }; pagination: TPagination },
      ctx: GraphqlContext,
    ): Promise<{ recipes: Recipe[] | null; total: number }> => {
      const pagination = { skip, take }

      if (!filters?.searchQuery) {
        const [recipes, total] = await ctx.prisma.$transaction([
          ctx.prisma.recipe.findMany(pagination),
          ctx.prisma.recipe.count(),
        ])
        return { recipes, total }
      }

      const where: Prisma.RecipeWhereInput = {
        OR: [
          { name: { contains: filters?.searchQuery, mode: 'insensitive' } },
          {
            recipeFood: {
              some: { food: { name: { contains: filters?.searchQuery, mode: 'insensitive' } } },
            },
          },
        ],
      }
      const [recipes, total] = await ctx.prisma.$transaction([
        ctx.prisma.recipe.findMany({
          where,
          ...pagination,
        }),
        ctx.prisma.recipe.count({ where }),
      ])
      return { recipes, total }
    },
    foodRecipes: async (
      _: unknown,
      foodRecipesInput: TFoodRecipesInput,
      ctx: GraphqlContext,
    ): Promise<{ recipes: Recipe[] | null }> => getFoodRecipes(ctx.prisma, foodRecipesInput),
  },
}
