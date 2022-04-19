import React from "react";
import Image from "next/image";
import ImageContainer from "../components/image-container";
import Container from "react-bootstrap/Container";

const Banner = ({ title, bgImg }) => {
  return (
    <div className="banner">
      <img
        src={bgImg}
        alt={title}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="750"
      />
      <Container>
        <div
          className="banner__content"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="750"
        >
          <h1>{title}</h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
