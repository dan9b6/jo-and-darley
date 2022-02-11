import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs="12">Logo</Col>
          <Col xs="12">
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <a>Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="/bridal">
                  <a>Bridal</a>
                </Link>
              </li>
              <li>
                <Link href="/courses">
                  <a>Courses</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs="12">Col</Col>
          <Col xs="12">Col</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
