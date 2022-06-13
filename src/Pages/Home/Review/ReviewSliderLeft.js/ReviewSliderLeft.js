import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

const ReviewSliderLeft = ({ review }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mt: 5,
        mr: 1,
        mb: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "19rem",
        p: 2,
      }}
    >
      <Box>
        <Avatar
          alt="Remy Sharp"
          src={review.imageUrl}
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {review.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "justify" }}
          color="text.secondary"
        >
          {review.reviewText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewSliderLeft;
