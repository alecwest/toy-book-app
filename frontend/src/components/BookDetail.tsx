"use client";

import { gql, useQuery } from "@apollo/client";
import { Box, Container, Paper, Typography } from "@mui/material";
import Image from "next/image";
import { RatingIndicator } from ".";

interface Book {
  title: string;
  author: string;
  isbn10?: string;
  isbn13?: string;
  genre: string[];
  averageRating: number;
  reviews: Review[];
}

interface Review {
  id: string;
  user: { name: string };
  rating: number;
  content: string;
}

const GET_BOOK = gql`
  query Book($bookId: ID!) {
    book(id: $bookId) {
      title
      author
      isbn10
      isbn13
      genre
      averageRating
      reviews {
        id
        user {
          name
        }
        rating
        content
      }
    }
  }
`;

const BookDetail = ({ id }: { id: string }) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: {
      bookId: id,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const book: Book = data?.book;
  return (
    <Container>
      <Paper className="p-4">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}>
          <Box>
            <Typography variant="h4">{book.title}</Typography>
            <Typography variant="h5" gutterBottom>
              {book.author}
            </Typography>
            <Box>
              {book.isbn10 ? (
                <Typography variant="body2" color="text.secondary">
                  <b>ISBN10:</b> {book.isbn10}
                </Typography>
              ) : null}
              {book.isbn13 ? (
                <Typography variant="body2" color="text.secondary">
                  <b>ISBN13:</b> {book.isbn13}
                </Typography>
              ) : null}
            </Box>
          </Box>
          <Box>
            <Image
              width={100}
              height={100}
              src="https://placehold.co/100x100"
              alt="some book"
            />
          </Box>
        </Box>

        <hr className="my-4" />

        <Box id="reviews">
          <Typography variant="h6">Reviews</Typography>
          <Box id="reviews-list">
            {book.reviews.map((review) => (
              <Paper className="my-2 p-2" elevation={4} key={review.id}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}>
                  <Box>
                    <Typography variant="body1" color="text.primary">
                      {review.content}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.user.name}
                    </Typography>
                  </Box>

                  <RatingIndicator rating={review.rating}></RatingIndicator>
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default BookDetail;
