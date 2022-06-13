import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { serviceUserAddress } from "../../features/servicePrice/servicePriceSlice";
import useFirebase from "../../hooks/useFirebase";
import PaymentTitle from "../ComonComponent/PaymentTitle";

const AddressForm = ({ paymentId, servicFindData }) => {
  const [nextSubmit, setNextSubmit] = useState(false);

  const orderId = uuidv4();

  const title = servicFindData?.title;

  const price = servicFindData?.price;

  const homeIcon = servicFindData?.homeIcon;

  const { user } = useFirebase();

  const email = user?.email;

  const dispatch = useDispatch();

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const allData = { ...data, title, price, email, orderId, homeIcon };

    dispatch(serviceUserAddress(allData));

    if (data.country) {
      setNextSubmit(true);
    }
  };

  return (
    <Box>
      <PaymentTitle title="Servicing address" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span style={{ color: "red" }}>first name is required</span>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && (
              <span style={{ color: "red" }}>last name is required</span>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              {...register("address1", { required: true })}
            />
            {errors.address1 && (
              <span style={{ color: "red" }}>address is required</span>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              variant="standard"
              {...register("address2")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              {...register("city", { required: true })}
            />
            {errors.city && (
              <span style={{ color: "red" }}>city is required</span>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              variant="standard"
              {...register("state", { required: true })}
            />
            {errors.state && (
              <span style={{ color: "red" }}>state is required</span>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              {...register("zip", { required: true })}
            />
            {errors.zip && (
              <span style={{ color: "red" }}>zip code is required</span>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              {...register("country", { required: true })}
            />
            {errors.country && (
              <span style={{ color: "red" }}>country is required</span>
            )}
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Box sx={{ mr: 2 }}>
            {nextSubmit && (
              <Button
                variant="contained"
                color="error"
                onClick={() => setNextSubmit(false)}
              >
                Back
              </Button>
            )}
          </Box>
          <Box>
            <Button variant="contained" type="submit">
              {nextSubmit ? (
                <Link
                  to={`/payment-method/${paymentId}`}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  Next
                </Link>
              ) : (
                "Confirm"
              )}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AddressForm;
