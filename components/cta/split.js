import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SplitCTA = ({ bgImg, reverse, children, bg, altText }) => {
  return (
    <div
      className={`cta--split ${reverse ? "cta--split__reverse" : ""} ${
        bg ? "section--" + bg : ""
      }`}
    >
      <Container>
        <Row className={`${reverse ? "justify-content-end" : ""}`}>
          <Col md="8" lg="6">
            <div className="cta--split__text">{children}</div>
          </Col>
        </Row>
      </Container>
      <div
        className="cta--split__img"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="500"
      >
        <img src={bgImg} alt={altText} />
      </div>
    </div>
  );
};

export default SplitCTA;
