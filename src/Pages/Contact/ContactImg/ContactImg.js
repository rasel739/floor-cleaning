import React from "react";
import contactStyle from "../../../assets/css/contact.module.css";
import conImg from "../../../img/contact-us.jpg";
import AboutCustomImport from "../../About/AboutCustomImport/AboutCustomImport";

const ContactImg = () => {
  const { Container } = AboutCustomImport();

  return (
    <Container maxWidth="xl" sx={{ py: 5 }}>
      <Container>
        <img src={conImg} className={contactStyle.contactImgStyle} alt="" />
      </Container>
    </Container>
  );
};

export default ContactImg;
