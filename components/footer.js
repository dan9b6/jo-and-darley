import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="mb-4">
          <Col xs="12" sm="6" lg="3" className="footer__col">
            <h4>Links</h4>
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
          <Col xs="12" sm="6" lg="3" className="footer__col footer__social">
            <h4>Social</h4>
            <ul>
              <li>
                <Link href="/contact">
                  <a target="_blank">
                    <FontAwesomeIcon
                      className="footer__social-icon"
                      icon={faInstagram}
                    />
                    @joanddarley
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a target="_blank">
                    <FontAwesomeIcon
                      className="footer__social-icon"
                      icon={faFacebook}
                    />
                    @joanddarley
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a target="_blank">
                    <FontAwesomeIcon className="" icon={faEnvelope} />
                    hair@jodarleyandco.com
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a target="_blank">
                    <FontAwesomeIcon className="" icon={faPhone} />
                    01202 690009
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="6" lg="3" className="footer__col">
            <h4>Address</h4>
            <ul>
              <li>2 & 3 Albert Parade</li>
              <li>147b Wareham Road</li>
              <li>Corfe Mullen</li>
              <li>BH21 3LA</li>
            </ul>
          </Col>
          <Col xs="12" sm="6" lg="3" className="footer__col">
            <h4>Location</h4>
            <img src="/images/logo.png" alt="" title="" />
          </Col>
        </Row>
        <p className="footer__privacy">
          Privacy Policy - Copyright 2022 - Dan Burton
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
