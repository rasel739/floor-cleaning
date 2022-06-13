import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ReactCardFlipper from "react-card-flipper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ServiceItem = ({ serviceNItem }) => {
  const { title, description, logoImg } = serviceNItem;

  return (
    <Grid item xs={12} md={6} lg={3}>
      <ReactCardFlipper width="250px" height="250px" behavior="hover">
        {/* card front side*/}
        <Box>
          <Card sx={{ height: 250, bgcolor: "#E5F7FB" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={logoImg}
                alt="our-service-img"
                sx={{ width: 150, height: 150, ml: 8 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        {/* card back side*/}
        <Box>
          <Card sx={{ height: 250 }}>
            <CardActionArea>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </ReactCardFlipper>
    </Grid>
  );
};

export default ServiceItem;
