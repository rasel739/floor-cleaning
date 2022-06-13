import React from "react";
import AboutCustomImport from "../AboutCustomImport/AboutCustomImport";

const AboutTeamItem = ({ aboutTeamItem }) => {
  const {
    CardMedia,
    Box,
    Card,
    CardActionArea,
    Typography,
    CardContent,
    ReactCardFlipper,
    Grid,
  } = AboutCustomImport();
  const { title, description, logoImg, subTitle } = aboutTeamItem;

  return (
    <Grid item xs={12} md={6} lg={4}>
      <ReactCardFlipper width="350px" height="300px" behavior="hover">
        {/* card front side*/}
        <Box>
          <Card sx={{ height: 300, bgcolor: "#E5F7FB" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={logoImg}
                alt="our-service-img"
                sx={{ width: "100%", height: "auto" }}
              />
            </CardActionArea>
          </Card>
        </Box>
        {/* card back side*/}
        <Box>
          <Card sx={{ height: 300, bgcolor: "#E5F7FB" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Name : {title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Title : {subTitle}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "justify" }}
                >
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

export default AboutTeamItem;
