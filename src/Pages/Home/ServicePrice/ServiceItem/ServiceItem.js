import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import serviceStyle from "../../../../assets/css/serviceItem.module.css";

const ServiceItem = ({ service }) => {
  const theme = useTheme();

  const serviceItemStyle = makeStyles({
    serviceI: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: "2rem",
      },
    },
  });

  const { serviceI } = serviceItemStyle();

  const {
    title,
    price,
    titleColor,
    homeStyle,
    homeIcon,
    serviceOne,
    serviceTwo,
    serviceThree,
    serviceFour,
    serviceFive,
    serviceSix,
    serviceSeven,
    serviceEight,
    serviceNine,
  } = service;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card
        className={serviceI}
        sx={{
          maxWidth: 445,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: 5,
          boxShadow: 10,
          mr: -1,
          ml: -1,
        }}
      >
        <Box className={homeStyle}>
          <CardMedia
            component="img"
            image={homeIcon}
            alt="Paella dish"
            sx={{ width: "50%", margin: "auto", height: "10rem" }}
          />
          <Typography
            gutterBottom
            variant="h5"
            sx={{ color: titleColor }}
            component="div"
          >
            {title}
          </Typography>
        </Box>
        <CardContent>
          <Box>
            <Typography gutterBottom variant="h3" component="div">
              <sup>$</sup> <span>{price}</span>
              <sub>USD</sub>
            </Typography>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceOne.color, pr: 1 }}>
              <span>{serviceOne.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceOne.subTitle}
              </Typography>
            </Box>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceTwo.color, pr: 1 }}>
              <span>{serviceTwo.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceTwo.subTitle}
              </Typography>
            </Box>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceThree.color, pr: 1 }}>
              <span>{serviceThree.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceThree.subTitle}
              </Typography>
            </Box>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceFour.color, pr: 1 }}>
              <span>{serviceFour.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceFour.subTitle}
              </Typography>
            </Box>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceFive.color, pr: 1 }}>
              <span>{serviceFive.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceFive.subTitle}
              </Typography>
            </Box>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceSix.color, pr: 1 }}>
              <span>{serviceSix.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceSix.subTitle}
              </Typography>
            </Box>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceSeven.color, pr: 1 }}>
              <span>{serviceSeven.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceSeven.subTitle}
              </Typography>
            </Box>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceEight.color, pr: 1 }}>
              <span>{serviceEight.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceEight.subTitle}
              </Typography>
            </Box>
          </Box>
          <Box className={serviceStyle.serviceContent}>
            <Box sx={{ color: serviceNine.color, pr: 1 }}>
              <span>{serviceNine.icon}</span>
            </Box>
            <Box>
              <Typography gutterBottom variant="body" component="div">
                {serviceNine.subTitle}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
            <Link
              to={`service-price-details/${service.id}`}
              style={{ textDecoration: "none" }}
            >
              Service Buy Now
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ServiceItem;
