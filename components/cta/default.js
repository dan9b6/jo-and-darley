import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cta = ({ title, img, children, reverse }) => {
  return (
    <div className={`cta ${reverse ? "cta--flex" : ""}`}>
      <Row className="mb-5 pb-5 align-items-center">
        <Col md="6">
          <div>
            <h2>{title}</h2>
            {children}
          </div>
        </Col>
        <Col md="6">
          <div className="cta__img">
            <img src={img} alt={title} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cta;
