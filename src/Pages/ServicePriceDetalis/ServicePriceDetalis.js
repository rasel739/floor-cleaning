import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { servicePriceAll } from "../../features/servicePrice/servicePriceSlice";
import Footer from "../Shered/Footer/Footer";
import Navigation from "../Shered/Navigation/Navigation";
import AddressForm from "./AddressForm";

const ServicePriceDetalis = () => {
  const { detailsId } = useParams();

  const [servicFindData, setServiceFindData] = useState({});

  const dispatch = useDispatch();

  const { serviceData } = useSelector((state) => state.servicePriceReducer);

  useEffect(() => {
    dispatch(servicePriceAll());
  }, [dispatch]);

  useEffect(() => {
    const serviceDetails = serviceData?.find(
      (service) => service?._id === detailsId
    );

    setServiceFindData(serviceDetails);
  }, [serviceData, detailsId]);

  return (
    <>
      <Navigation></Navigation>
      <Container maxWidth="xl" sx={{ pt: 5, pb: 5 }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={5}>
                <Card sx={{ width: "100%" }}>
                  <Carousel autoPlay={true} infiniteLoop={true}>
                    <div>
                      <img
                        src={servicFindData?.serviceDetailsImgOne}
                        alt={servicFindData?.title + "1"}
                      />
                      <p className="legend">{servicFindData?.title} 1</p>
                    </div>
                    <div>
                      <img
                        src={servicFindData?.serviceDetailsImgTwo}
                        alt={servicFindData?.title + "2"}
                      />
                      <p className="legend">{servicFindData?.title} 2</p>
                    </div>
                    <div>
                      <img
                        src={servicFindData?.serviceDetailsImgThree}
                        alt={servicFindData?.title + "3"}
                      />
                      <p className="legend">{servicFindData?.title} 3</p>
                    </div>
                    <div>
                      <img
                        src={servicFindData?.serviceDetailsImgFour}
                        alt={servicFindData?.title + "4"}
                      />
                      <p className="legend">{servicFindData?.title} 4</p>
                    </div>
                  </Carousel>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {servicFindData?.title}
                    </Typography>
                    <Typography variant="h3" color="text.secondary">
                      ${servicFindData?.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={7}>
                <AddressForm
                  paymentId={servicFindData?._id}
                  servicFindData={servicFindData}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  );
};

export default ServicePriceDetalis;
