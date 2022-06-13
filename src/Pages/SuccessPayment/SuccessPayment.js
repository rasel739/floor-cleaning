import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuccessPayment = () => {
  const { userAdressData } = useSelector((state) => state.servicePriceReducer);

  const { title, orderId } = userAdressData;

  return (
    <Container
      maxWidth="xl"
      sx={{ py: 5, bgcolor: "#EBF0F4", height: "100vh" }}
    >
      <Container>
        <Box sx={{ margin: "auto" }}>
          <Card sx={{ p: 5 }}>
            <DoneAllIcon sx={{ fontSize: "5rem", color: "greenyellow" }} />
            <Typography gutterBottom variant="h4" component="div">
              Congratulations.
            </Typography>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ color: "green" }}
                component="div"
              >
                Your Service Successfully Confirm.
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Thank you for your order our {title} service.
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Your order number is # {orderId}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We have emailed your order confirmation, and will send you an
                update when your order has shipped.For choosing us and being so
                awesome all at once. Floor cleaning service is our first love
                and to make it even better for you, we have levelled up with
                floor-cleaning and extended our services to floor cleaning
                development. You can depend on us for anything
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                sx={{ margin: "auto" }}
              >
                <Link
                  to="/user-dashboard"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Go to your deshbord
                </Link>
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    </Container>
  );
};

export default SuccessPayment;
