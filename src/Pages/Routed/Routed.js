import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paperbase from "../../Dashbord/Paperbase";
import PaymentMethod from "../../PaymentMethod/PaymentMethod";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import About from "../About/About/About";
import Contact from "../Contact/Contact/Contact";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home/Home";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import OurServiceNav from "../OurServiceNav/OurServiceNav/OurServiceNav";
import AddressForm from "../ServicePriceDetalis/AddressForm";
import ServicePriceDetalis from "../ServicePriceDetalis/ServicePriceDetalis";
import SuccessPayment from "../SuccessPayment/SuccessPayment";

const Routed = () => {
  const { userAdressData } = useSelector((state) => state.servicePriceReducer);

  const { orderId } = userAdressData;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
        <Route path="/*" element={<PrivateRoute />}>
          <Route path="our-service" element={<OurServiceNav></OurServiceNav>} />
          <Route
            path="service-price-details/:detailsId"
            element={<ServicePriceDetalis />}
          />
        </Route>
        <Route path="/address-from" element={<AddressForm />} />

        <Route path="/user-dashboard/*" element={<Paperbase />} />
        <Route
          path={`/payment-success/${orderId}`}
          element={<SuccessPayment />}
        />
        <Route path="/payment-method/:paymentId" element={<PaymentMethod />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routed;
