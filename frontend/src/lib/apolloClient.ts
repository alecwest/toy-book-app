import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { __DEV__ } from "@apollo/client/utilities/globals";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
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

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat(httpLink),
  });
});

/**
 * Use this for the `context` param of apollo client's `query` function to set revalidation time.
 * When used in development, the revalidation time is set to 5 seconds.
 *
 * @param prodRevalidation the revalidate time to use in production
 * @returns fetchOptions object
 */
export function revalidateFastOr(prodRevalidation: number = 60) {
  return {
    fetchOptions: {
      next: { revalidate: __DEV__ ? 5 : prodRevalidation },
    },
  };
}
