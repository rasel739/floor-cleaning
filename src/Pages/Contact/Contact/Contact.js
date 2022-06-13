import React from "react";
import Footer from "../../Shered/Footer/Footer";
import Navigation from "../../Shered/Navigation/Navigation";
import ContactFrom from "../ContactFrom/ContactFrom/ContactFrom";
import ContactImg from "../ContactImg/ContactImg";
import ContactMap from "../ContactMap/ContactMap";
import ContactTitle from "../ContactTitle/ContactTitle";

const Contact = () => {
  document.title = "Contact";

  return (
    <>
      <Navigation></Navigation>
      <ContactTitle></ContactTitle>
      <ContactImg></ContactImg>
      <ContactFrom></ContactFrom>
      <ContactMap></ContactMap>
      <Footer></Footer>
    </>
  );
};

export default Contact;
