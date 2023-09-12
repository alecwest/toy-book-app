"use client";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { RatingIndicator } from ".";
import { useRouter } from "next/navigation";

const BookCard = ({ book }: { book: any }) => {
  const router = useRouter();

  return (
    <Card sx={{ display: "flex", mb: 1 }}>
      <CardActionArea
        sx={{ display: "flex", justifyContent: "flex-start" }}
        onClick={() => router.push(`/book/${book.id}`)}>
        <CardMedia
          sx={{ maxWidth: "100px" }}
          component="img"
          height="100"
          image="https://placehold.co/100x100"
          alt="some book"></CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}>
          <Box sx={{ flex: "1 0 auto" }}>
            <Typography variant="subtitle1" component="div">
              {book.title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              color="text.secondary">
              {book.author}
            </Typography>
          </Box>
          {/* TODO Rating component */}
          <Box>
            <RatingIndicator rating={book.averageRating}></RatingIndicator>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
