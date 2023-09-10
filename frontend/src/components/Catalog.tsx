import React from "react";
import { BookCard } from ".";
import Container from "@mui/material/Container";

const Catalog = () => {
  return (
    <Container>
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
    </Container>
  );
};

export default Catalog;
