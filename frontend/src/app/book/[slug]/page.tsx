"use client";

import { BookDetail } from "@/components";
import client from "@/lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <ApolloProvider client={client}>
      <BookDetail id={params.slug} />
    </ApolloProvider>
  );
};

export default Page;
