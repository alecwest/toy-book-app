import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { APOLLO_SERVER } from "./constants";

const httpLink = createHttpLink({
  uri: APOLLO_SERVER,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // authorization: `Bearer ${whatever}`
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
