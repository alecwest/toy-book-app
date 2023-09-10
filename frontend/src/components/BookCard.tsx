import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import { RatingIndicator } from ".";

const BookCard = () => {
  return (
    <Card sx={{ display: "flex", mb: 1 }}>
      <CardActionArea sx={{ display: "flex", justifyContent: "flex-start" }}>
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
              Title
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
              color="text.secondary">
              Author
            </Typography>
          </Box>
          {/* TODO Rating component */}
          <Box>
            <RatingIndicator rating={2.76}></RatingIndicator>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookCard;
