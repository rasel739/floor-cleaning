import Box from "@mui/material/Box";
import React from "react";
import { Rings } from "react-loader-spinner";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import spinnerCss from "../assets/css/spinner.module.css";
import useFirebase from "../hooks/useFirebase";

const PrivateRoute = () => {
  const { auth, loading } = useFirebase();
  const location = useLocation();
  const authLogin = auth.currentUser;

  if (loading) {
    return (
      <Box className={spinnerCss.spinnerMainPage}>
        <Rings color="#154784" height={150} width={150} />
      </Box>
    );
  }

  return authLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
