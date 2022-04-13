import React from "react";
import Image from "next/image";
import ImageContainer from "../components/image-container";
import Container from "react-bootstrap/Container";

const Banner = ({ title, bgImg }) => {
  return (
    <div className="banner">
      <ImageContainer>
        <Image
          src={bgImg}
          alt="Banner image"
          layout="fill"
          objectFit="cover"
          loading="eager"
          priority
        />
        <Container>
          <div className="banner__content">
            <h1>{title}</h1>
          </div>
        </Container>
      </ImageContainer>
    </div>
  );
};

export default Banner;
