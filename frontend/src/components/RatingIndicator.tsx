import { Star, StarBorder, StarHalf } from "@mui/icons-material";
import { Paper } from "@mui/material";
import React from "react";

const RatingIndicator = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating - i >= 1) {
      stars.push(<Star color="primary"></Star>);
    } else if (rating - i > 0) {
      if (rating - i < 0.25) {
        stars.push(<StarBorder></StarBorder>);
      } else if (rating - i > 0.75) {
        stars.push(<Star color="primary"></Star>);
      } else {
        stars.push(<StarHalf color="primary"></StarHalf>);
      }
    } else {
      stars.push(<StarBorder></StarBorder>);
    }
  }

  // TODO show a smaller rating element when on XS screens
  return <Paper>{stars}</Paper>;
};

export default RatingIndicator;
