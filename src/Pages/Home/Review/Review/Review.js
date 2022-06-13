import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ReviewSliderLeft from "../ReviewSliderLeft.js/ReviewSliderLeft";

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const review = [
    {
      id: 1,
      name: "Noah",
      imageUrl:
        "https://demo.detheme.com/cleanco-elementor-1/wp-content/uploads/sites/194/2020/07/portrait-of-a-muslim-man-NKFJQEG-1.jpg",
      reviewText:
        "A fantastic organisation! Great cutomer support from beginning to end of the process. The team are really informed and go the extra mile at every stage. I would recommend them unreservedly.",
    },
    {
      id: 2,
      name: "Oliver",
      imageUrl:
        "https://demo.detheme.com/cleanco-elementor-1/wp-content/uploads/sites/194/2020/07/close-up-portrait-of-a-happy-african-american-man-LQVG43V.jpg",
      reviewText:
        "The service is smooth and straightforward. My advisor was helpful. I would recommend deal direct.",
    },
    {
      id: 3,
      name: "George",
      imageUrl:
        "https://demo.detheme.com/cleanco-elementor-1/wp-content/uploads/sites/194/2020/07/portrait-of-happy-attractive-man-outdoors-FSGVT4M-1.jpg",
      reviewText:
        "Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal.",
    },
    {
      id: 4,
      name: "Theo",
      imageUrl:
        "https://media.istockphoto.com/photos/mechanic-with-wrench-standing-hands-folded-on-white-background-picture-id1048532190?k=20&m=1048532190&s=612x612&w=0&h=2rhOGlfzWXSnCn8dTT_nbHfYFxe_iVRgRCW2TQ3gVrc=",
      reviewText:
        "Great service, efficient communication and a really easy way to get a mortgage with lots of help and support to get the right deal.",
    },
    {
      id: 5,
      name: "Arthur",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn5M0V4zHv2e85dMegS-JjYAyUQ0P_LVGgrKw7IYHUsNJ2XrB_IIb6B16mm5Zz9MfKFls&usqp=CAU",
      reviewText:
        "Great customer service! The man I spoke with was very helpful in answering questions as well as helping in finding the best hotel for my husband and I.",
    },
    {
      id: 5,
      name: "Freddie",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFV5hlyDCzDcs_Z3g3xqLX5CVGXgR_EL78AHadH2K0XGhCwnIimnyTlj5D4Pi0zb8iDg&usqp=CAU",
      reviewText:
        "We were provided excellent customer service. All responses were prompt and professional. Clearly, the upfront statement on our policy stated it was limited which told us that our preliminary research was not well thought out.",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Slider {...settings}>
                {review.map((review) => (
                  <ReviewSliderLeft
                    key={review.id}
                    review={review}
                  ></ReviewSliderLeft>
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Container>
  );
};

export default Review;
