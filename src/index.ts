import { makeExecutableSchema } from "@graphql-tools/schema";
import { FoodType, PrismaClient } from "./generated/prisma-client";
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
  debug: true,
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

  /*
const all = [
  {
    name: "Bagels",
    type: "CEREALS_AND_DERIVED",
  }
];

(async () => {
  const food = await prisma.food.createMany({
    data: all.map(({ name, type }) => ({ name, type: type as FoodType })),
    skipDuplicates: true
  });
  console.log("food = ", food);
})();*/
