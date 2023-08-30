import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./models/typeDefs";
import { resolvers } from "./resolvers/resolvers";
import { BooksAPI } from "./services/books-api";
import { ReviewsAPI } from "./services/reviews-api";
import { UsersAPI } from "./services/users-api";

async function main() {
  interface ContextValue {
    dataSources: {
      booksAPI: BooksAPI;
      reviewsAPI: ReviewsAPI;
      usersAPI: UsersAPI;
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
          reviewsAPI: new ReviewsAPI({ cache }),
          usersAPI: new UsersAPI({ cache }),
        },
      };
    },
  });

  console.log(`Server ready at ${url}`);
}

main().catch(console.error);
