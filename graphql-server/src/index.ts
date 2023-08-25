import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/BookResolver";
import { ReviewResolver } from "./resolvers/ReviewResolver";
import Container from "typedi";

async function main() {
  const schema = await buildSchema({
    resolvers: [BookResolver, ReviewResolver],
    container: Container,
  });

  const server = new ApolloServer({ schema });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at ${url}`);
}

main().catch(console.error);
