import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./models/typeDefs";
import { resolvers } from "./resolvers/resolvers";
import { BooksAPI } from "./services/books-api";

async function main() {
  interface ContextValue {
    dataSources: {
      booksAPI: BooksAPI;
    };
  }

  const server = new ApolloServer<ContextValue>({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          booksAPI: new BooksAPI({ cache }),
        },
      };
    },
  });

  console.log(`Server ready at ${url}`);
}

main().catch(console.error);
