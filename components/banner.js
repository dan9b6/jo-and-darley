import React from "react";
import Container from "react-bootstrap/Container";

const Banner = ({ title, bgImg }) => {
  return (
    <div className="banner">
      <Container>
        <div className="banner__content">
          <h1>{title}</h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
