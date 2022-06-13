import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  serviceData: [],
  userAdressData: [],
  orderRespons: null,
  paymentInfo: null,
  userOrderArray: [],
  loading: false,
  error: null,
};

//service user order post data to send database

export const orderInformationData = createAsyncThunk(
  "servicePrice/orderInformation",

  async (orderInfo) => {
    const res = await axios.post(
      "http://localhost:5000/orderInformation",
      orderInfo
    );

    return res.data;
  }
);

//service user order get data

export const orderInformationGet = createAsyncThunk(
  "servicePrice/orderInformationOnePersonGet",
  async (email) => {
    const res = await axios.get(
      `http://localhost:5000/orderInformation/${email}`
    );

    return res.data;
  }
);

// paymentDetails post

export const paymentDetails = createAsyncThunk(
  "servicePrice/paymentDetails",

  async (paymentData) => {
    const res = await axios.post(
      "https://floor-cleaning.herokuapp.com/create-payment-intent",
      paymentData
    );

    return res.data;
  }
);

// service data get  from server

export const servicePriceAll = createAsyncThunk(
  "servicePrice/servicePriceAll",
  async () => {
    const res = await axios.get(
      "https://floor-cleaning.herokuapp.com/servicePriceGet"
    );

    return res.data;
  }
);

const servicePriceSlice = createSlice({
  name: "servicePrice",
  initialState,

  reducers: {
    serviceUserAddress: (state, action) => {
      state.userAdressData = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Service Price All Data

    builder.addCase(servicePriceAll.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(servicePriceAll.fulfilled, (state, action) => {
      state.serviceData = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(servicePriceAll.rejected, (state, action) => {
      state.error = action.error.message;
      state.serviceData = [];
      state.loading = false;
    });

    // order information send data to server
    builder.addCase(orderInformationData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(orderInformationData.fulfilled, (state, action) => {
      state.orderRespons = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(orderInformationData.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    //Payment Details send data

    builder.addCase(paymentDetails.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(paymentDetails.fulfilled, (state, action) => {
      state.paymentInfo = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(paymentDetails.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    //service user order data get

    builder.addCase(orderInformationGet.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(orderInformationGet.fulfilled, (state, action) => {
      state.userOrderArray = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(orderInformationGet.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { serviceUserAddress } = servicePriceSlice.actions;

export default servicePriceSlice.reducer;
