import Button from "@mui/material/Button";
import "../ServiceImgCard/imagehover.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

const ServiceImgCardItem = ({ serviceImgItem }) => {
  const { title, serviceImg, hoverText, buttonText } = serviceImgItem;

  return (
    <Grid item xs={12} md={6} lg={3}>
      <Box
        sx={{
          width: 291,
        }}
      >
        <figure className="imghvr-hinge-up">
          <CardMedia
            component="img"
            height="400"
            image={serviceImg}
            alt="Paella dish"
            sx={{
              width: 291,
              borderColor: "text.primary",
              borderRight: 1,
            }}
          />
          <figcaption>
            <Box>
              <Typography variant="h6" component="div" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" component="div" gutterBottom>
                {hoverText}
              </Typography>
              <Button variant="contained">{buttonText}</Button>
            </Box>
          </figcaption>
        </figure>
      </Box>
    </Grid>
  );
};

export default ServiceImgCardItem;
