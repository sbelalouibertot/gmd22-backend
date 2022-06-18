import path from 'path'

import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge'

export const getResolvers = (exclusions: string[] = []) => {
  const queryResolverArray = loadFilesSync(path.join(__dirname, './**/query.*'))
  const Query = mergeResolvers(queryResolverArray, {
    exclusions,
  }).Query

  const mutationResolverArray = loadFilesSync(path.join(__dirname, './**/mutation.*'))
  const Mutation = mergeResolvers(mutationResolverArray, {
    exclusions,
  }).Mutation

  const resolverResolverArray = loadFilesSync(path.join(__dirname, './**/resolver.*'))
  const types = mergeResolvers(resolverResolverArray, {
    exclusions,
  })

  return {
    Query,
    Mutation,
    ...types,
  }
}

export const getTypeDefs = (exclusions: string[] = []) =>
  mergeTypeDefs(loadFilesSync(path.join(__dirname, './**/*.graphql')), {
    exclusions,
  })
