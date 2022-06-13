import React from "react";
import { Route, Routes } from "react-router-dom";
import Announcement from "./Announcement";
import OrderHistory from "./OrderHistory";
import PaymentHistory from "./PaymentHistory";
import Profile from "./Profile";
import YourOrder from "./YourOrder";

const DashbordRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="profile" element={<Profile />} />
      <Route path="your-order" element={<YourOrder />} />
      <Route path="payment-history" element={<PaymentHistory />} />
      <Route path="order-history" element={<OrderHistory />} />

      <Route path="announcement" element={<Announcement />} />
    </Routes>
  );
};

export default DashbordRoute;
