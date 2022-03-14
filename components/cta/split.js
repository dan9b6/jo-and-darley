import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SplitCTA = ({ bgImg, reverse, children }) => {
  return (
    <div className={`cta--split ${reverse ? "cta--split__reverse" : ""}`}>
      <div
        className="cta--split__img"
        style={{ backgroundImage: "url(" + bgImg + ")" }}
      ></div>
      <Container>
        <Row className={`${reverse ? "justify-content-end" : ""}`}>
          <Col md="8" lg="6">
            <div className="cta--split__text">{children}</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SplitCTA;
