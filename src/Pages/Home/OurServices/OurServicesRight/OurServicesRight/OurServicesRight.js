import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ourServiceStyle from "../../../../../assets/css/ourService.module.css";

const OurServicesRight = ({ service }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mt: 5,
        mr: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left",
        p: 1,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "50%", ml: -18 }}
        image={service.serviceIcon}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {service.title}
        </Typography>
        <Typography gutterBottom variant="body" component="div">
          {service.subTitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: "justify" }}
          color="text.secondary"
        >
          {service.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{ ml: -15 }}
          className={ourServiceStyle.serviceCleanBtn}
          href="#contained-buttons"
        >
          Get Started
        </Button>
      </CardActions>
    </Card>
  );
};

export default OurServicesRight;
