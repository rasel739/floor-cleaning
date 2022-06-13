import React from "react";
import ImageMapper from "react-img-mapper";
import imageMap from "../../../../img/image-map.png";

const URL = imageMap;

const MAP = {
  name: "my-map",
  areas: [
    {
      shape: "poly",
      coords: [489, 456, 491, 458],
      fillColor: "#eab54d4d",
      strokeColor: "black",
      title: "Hardwood",
      name: "1",
    },
    { shape: "rect", coords: [1058, 425, 1061, 428] },
    { shape: "rect", coords: [1554, 364, 1557, 367] },
  ],
};

const LocationMap = () => {
  return <ImageMapper src={URL} map={MAP} width="1200" />;
};

export default LocationMap;
