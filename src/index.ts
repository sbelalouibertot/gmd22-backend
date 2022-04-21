import { makeExecutableSchema } from "@graphql-tools/schema";
import { PrismaClient } from "./generated/prisma-client";
import { getResolvers, getTypeDefs } from "./schema";

import { ApolloServer } from "apollo-server";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";

const schema = makeExecutableSchema({
  typeDefs: getTypeDefs(),
  resolvers: getResolvers(),
});

const prisma = new PrismaClient({ log: [{ emit: "event", level: "query" }] });

const server = new ApolloServer({
  schema,
  context: (request) => ({
    ...request,
    prisma,
  }),
  debug : true,
  introspection: true,
  plugins: [
    false /*process.env.NODE_ENV === "production"*/
      ? ApolloServerPluginLandingPageDisabled()
      : ApolloServerPluginLandingPageGraphQLPlayground(),
  ],
});

server
  .listen()
  .then(() => console.log(`🚀 Server is running on http://localhost:4000 🚀`))
  .catch((error) => console.error(error));
