import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import serviceStyle from "../../../../assets/css/serviceItem.module.css";
import { servicePriceAll } from "../../../../features/servicePrice/servicePriceSlice";
import ServiceItem from "../ServiceItem/ServiceItem";

const ServicePrice = () => {
  const check = <CheckCircleOutlineIcon />;
  const notCheck = <CancelOutlinedIcon />;
  const dispatch = useDispatch();

  const { serviceData } = useSelector((state) => state.servicePriceReducer);

  useEffect(() => {
    dispatch(servicePriceAll());
  }, [dispatch]);

  const serviceCard = [
    {
      id: serviceData?.[0]?._id,
      title: "Home Basic",
      price: 50,
      homeIcon: "https://i.ibb.co/Wtj30Ct/Icons-1.png",
      homeStyle: serviceStyle.homeOne,
      titleColor: "#000",
      serviceOne: {
        subTitle: "Bathroom Cleaning",
        color: "green",
        icon: check,
      },
      serviceTwo: {
        subTitle: "Vacusum Cleaning",
        color: "green",
        icon: check,
      },
      serviceThree: {
        subTitle: "Floor Mooping",
        color: "green",
        icon: check,
      },
      serviceFour: {
        subTitle: "Trash Handling",
        color: "green",
        icon: check,
      },
      serviceFive: {
        subTitle: "Windows Cleaning",
        color: "red",
        icon: notCheck,
      },
      serviceSix: {
        subTitle: "Polish Wood Surfaces",
        color: "red",
        icon: notCheck,
      },
      serviceSeven: {
        subTitle: "Laundry",
        color: "red",
        icon: notCheck,
      },
      serviceEight: {
        subTitle: "Clean Oven Interior",
        color: "red",
        icon: notCheck,
      },
      serviceNine: {
        subTitle: "Clean Fridage Interior",
        color: "red",
        icon: notCheck,
      },
    },
    {
      id: serviceData?.[1]?._id,
      title: "Home Premium",
      price: 100,
      homeIcon: "https://i.ibb.co/VNYy6Fb/Icons-2.png",
      homeStyle: serviceStyle.homeTwo,
      titleColor: "#fff",
      serviceOne: {
        subTitle: "Bathroom Cleaning",
        color: "green",
        icon: check,
      },
      serviceTwo: {
        subTitle: "Vacusum Cleaning",
        color: "green",
        icon: check,
      },
      serviceThree: {
        subTitle: "Floor Mooping",
        color: "green",
        icon: check,
      },
      serviceFour: {
        subTitle: "Trash Handling",
        color: "green",
        icon: check,
      },
      serviceFive: {
        subTitle: "Windows Cleaning",
        color: "green",
        icon: check,
      },
      serviceSix: {
        subTitle: "Polish Wood Surfaces",
        color: "green",
        icon: check,
      },
      serviceSeven: {
        subTitle: "Laundry",
        color: "green",
        icon: check,
      },
      serviceEight: {
        subTitle: "Clean Oven Interior",
        color: "green",
        icon: check,
      },
      serviceNine: {
        subTitle: "Clean Fridage Interior",
        color: "green",
        icon: check,
      },
    },
    {
      id: serviceData?.[2]?._id,
      title: "Home Standard",
      price: 80,
      homeIcon: "https://i.ibb.co/wW7yWnk/Icons-3.png",
      homeStyle: serviceStyle.homeThree,
      titleColor: "#000",
      serviceOne: {
        subTitle: "Bathroom Cleaning",
        color: "green",
        icon: check,
      },
      serviceTwo: {
        subTitle: "Vacusum Cleaning",
        color: "green",
        icon: check,
      },
      serviceThree: {
        subTitle: "Floor Mooping",
        color: "green",
        icon: check,
      },
      serviceFour: {
        subTitle: "Trash Handling",
        color: "green",
        icon: check,
      },
      serviceFive: {
        subTitle: "Windows Cleaning",
        color: "green",
        icon: check,
      },
      serviceSix: {
        subTitle: "Polish Wood Surfaces",
        color: "green",
        icon: check,
      },
      serviceSeven: {
        subTitle: "Laundry",
        color: "red",
        icon: notCheck,
      },
      serviceEight: {
        subTitle: "Clean Oven Interior",
        color: "red",
        icon: notCheck,
      },
      serviceNine: {
        subTitle: "Clean Fridage Interior",
        color: "red",
        icon: notCheck,
      },
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {serviceCard.map((service) => (
              <ServiceItem key={service.id + 1} service={service}></ServiceItem>
            ))}
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default ServicePrice;
