"use client";

import { Catalog } from "@/components";
import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Catalog></Catalog>
    </ApolloProvider>
  );
}
