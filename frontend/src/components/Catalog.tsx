"use client";

import { gql, useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { BookCard } from ".";
import { APOLLO_SERVER } from "@/lib/constants";

const GET_BOOKS = gql`
  query Books {
    books {
      id
      title
      author
      averageRating
    }
  }
`;

const Catalog = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const books = data?.books;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {books?.map((book: any) => (
          <Grid key={`book-${book.id}`} lg={6} xs={12}>
            <BookCard book={book}></BookCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Catalog;
