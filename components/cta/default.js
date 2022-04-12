import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ImageContainer from "../image-container";
import Image from "next/image";

const Cta = ({ title, img, children, reverse }) => {
  return (
    <div className={`cta ${reverse ? "cta--flex" : ""}`}>
      <Row className="align-items-center">
        <Col md="6">
          <div>
            <h2>{title}</h2>
            {children}
          </div>
        </Col>
        <Col md="6">
          <div className="cta__img">
            <ImageContainer animate>
              <Image src={img} alt={title} layout="fill" objectFit="cover" />
            </ImageContainer>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cta;
