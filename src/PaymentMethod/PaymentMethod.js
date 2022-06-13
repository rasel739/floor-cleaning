import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutFrom from "../Pages/ServicePriceDetalis/CheckoutFrom";
import Review from "../Pages/ServicePriceDetalis/Review";
import Footer from "../Pages/Shered/Footer/Footer";
import Navigation from "../Pages/Shered/Navigation/Navigation";

const PaymentMethod = () => {
  document.title = "Payment Method";

  const { userAdressData } = useSelector((state) => state.servicePriceReducer);

  const stripePromise = loadStripe(
    "pk_test_51L85GDFuFCzX4Yh5V0Ilz2UrjNEcsdOOv8VO7DpSJemtb4Xfk9mAikoSEArK80ZVtt1TXxoTQbTjsWpSPnwnzehX00VZgEA7HH"
  );

  return (
    <>
      <Navigation></Navigation>
      <Container maxWidth="xl" sx={{ py: 5, bgcolor: "#D0D7FF" }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {userAdressData?.price ? (
                  <Elements stripe={stripePromise}>
                    <CheckoutFrom />
                  </Elements>
                ) : (
                  <h3>Payment Not Found</h3>
                )}
              </Grid>
              <Grid item xs={12}>
                <Review />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default PaymentMethod;
