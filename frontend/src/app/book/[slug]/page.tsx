import { BookDetail } from "@/components";
import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  return <BookDetail id={params.slug} />;
};

export default Page;
