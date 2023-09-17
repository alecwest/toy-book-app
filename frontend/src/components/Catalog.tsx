import { getClient, revalidateFastOr } from "@/lib/apolloClient";
import { gql } from "@apollo/client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { BookCard } from ".";

async function getBooks() {
  console.log("getting all books");
  const { data } = await getClient()
    .query({
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
      context: revalidateFastOr(60),
    })
    .catch((e) => {
      console.error("Error while fetching books,", e);
      return { data: { books: [] } };
    });

  return data.books;
}

const Catalog = async () => {
  const books = await getBooks();
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
