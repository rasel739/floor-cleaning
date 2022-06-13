import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SteperItemImg from "./SteperItemImg";
import SteperItem from "./SteperItem";

const TheProcessSteper = () => {
  const steperProduct = [
    {
      id: 1,
      steperTitle: " Hygiene & clean",
      steperImg: "https://i.ibb.co/KKkgZg7/steper-img-1.png",
      steperText:
        "Seek a business license from the department of licensing and inspections, or a similar agency depending on your location. The specifics of this will vary depending on your local and state governments requirements.",
    },
    {
      id: 2,
      steperTitle: " Safety check",
      steperImg: "https://i.ibb.co/vYsPJXS/steper-img-2.png",
      steperText:
        "Seek a business license from the department of licensing and inspections, or a similar agency depending on your location. The specifics of this will vary depending on your local and state governments requirements.",
    },
    {
      id: 3,
      steperTitle: " Deep cleaning",
      steperImg: "https://i.ibb.co/WFFY2b8/steper-img-3.png",
      steperText:
        "Seek a business license from the department of licensing and inspections, or a similar agency depending on your location. The specifics of this will vary depending on your local and state governments requirements.",
    },
    {
      id: 4,
      steperTitle: " Health inspection",
      steperImg: "https://i.ibb.co/7nGrPRg/steper-img-4.png",
      steperText:
        "Seek a business license from the department of licensing and inspections, or a similar agency depending on your location. The specifics of this will vary depending on your local and state governments requirements.",
    },
    {
      id: 5,
      steperTitle: " Eco friendly",
      steperImg: "https://i.ibb.co/LJDftWK/steper-img-5.png",
      steperText:
        "Seek a business license from the department of licensing and inspections, or a similar agency depending on your location. The specifics of this will vary depending on your local and state governments requirements.",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={12}>
          <Grid container spacing={2}>
            {steperProduct.map((steperImgs) => (
              <SteperItemImg
                key={steperImgs.id}
                steperImgs={steperImgs.steperImg}
              ></SteperItemImg>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6} md={12}>
          <Grid container spacing={2}>
            {steperProduct.map((steperProduct) => (
              <SteperItem
                key={steperProduct.id}
                steperProduct={steperProduct}
              ></SteperItem>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TheProcessSteper;
