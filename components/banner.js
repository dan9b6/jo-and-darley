import React from "react";
import Container from "react-bootstrap/Container";

const Banner = ({ title, bgImg }) => {
  return (
    <div className="banner" style={{ backgroundImage: "url(" + bgImg + ")" }}>
      <Container>
        <div className="banner__content">
          <h1>{title}</h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
