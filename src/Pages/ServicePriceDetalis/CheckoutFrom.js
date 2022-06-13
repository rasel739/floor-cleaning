import { Box, Button, Container } from "@mui/material";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import cogoToast from "cogo-toast";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import paymentStyle from "../../assets/css/payment.module.css";
import {
  orderInformationData,
  paymentDetails,
} from "../../features/servicePrice/servicePriceSlice";

const CheckoutFrom = () => {
  const time = new Date().toLocaleString();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [processing, setProcessing] = useState(false);

  const { paymentInfo, userAdressData } = useSelector(
    (state) => state.servicePriceReducer
  );

  const stripe = useStripe();
  const elements = useElements();

  const client_secret = paymentInfo?.clientSecret;

  const {
    title,
    price,
    address1,
    address2,
    city,
    country,
    firstName,
    lastName,
    email,
    state,
    zip,
    orderId,
    homeIcon,
  } = userAdressData;

  useEffect(() => {
    dispatch(paymentDetails({ price }));
  }, [dispatch, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    setProcessing(true);

    const card = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      console.log(error);
    } else {
      console.log(paymentMethod);
    }
    // confirm payment intent

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: card,
          billing_details: {
            name: `${firstName} ${lastName} Service ${title}`,
          },
        },
      });

    if (intentError) {
      cogoToast.error(intentError.message);
    } else {
      setProcessing(false);
      cogoToast.success("Your Payment Successfully Completed");
      const orderInfo = {
        orderId: orderId,
        homeIcon: homeIcon,
        title: title,
        price: price,
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        email: email,
        state: state,
        city: city,
        country: country,
        zip: zip,
        time: time,
        amount: paymentIntent.amount,
        status: paymentIntent.status,
        transitions: paymentIntent.client_secret,
        cardBrand: paymentMethod.card.brand,
        cardLastNumber: paymentMethod.card.last4,
      };

      dispatch(orderInformationData(orderInfo));

      navigate(`/payment-success/${orderId}`);
    }
    setProcessing(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Card
          variant="outlined"
          sx={{ p: 5 }}
          className={paymentStyle.paymentCheckout}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "#fff" }}
              component="div"
              gutterBottom
            >
              Pay With Card
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Box sx={{ py: 5 }}>
              <CardElement
                options={{
                  style: {
                    base: {
                      color: "#fff",
                      fontFamily: "Arial, sans-serif",
                      fontSmoothing: "antialiased",
                      fontSize: "16px",
                      "::placeholder": {
                        color: "#fff",
                      },
                    },
                    invalid: {
                      fontFamily: "Arial, sans-serif",
                      color: "#fa755a",
                      iconColor: "#fa755a",
                    },
                  },
                }}
              />
            </Box>
            {processing ? (
              <CircularProgress color="success" />
            ) : (
              <Button
                variant="contained"
                color="success"
                type="submit"
                disabled={!stripe}
                sx={{ mt: 5 }}
              >
                Pay Now ${price}
              </Button>
            )}
          </form>
        </Card>
      </Container>
    </Container>
  );
};

export default CheckoutFrom;
