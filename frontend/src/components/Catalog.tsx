import Grid from "@mui/material/Unstable_Grid2";
import { BookCard } from ".";
import { Box } from "@mui/material";
import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";

async function getBooks() {
  const { data } = await client.query({
    query: gql`
      query Books {
        books {
          id
          title
          author
          averageRating
        }
      }
    `,
  });

  return data.books;
}

const Catalog = async () => {
  const books = await getBooks();
  console.log(books);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {books.map((book: any) => (
          <Grid key={`book-${book.id}`} lg={6} xs={12}>
            <BookCard book={book}></BookCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Catalog;
