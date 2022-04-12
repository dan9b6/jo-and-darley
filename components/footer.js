import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

import ImageContainer from "./image-container";
import Image from "next/image";
import MapCopy from "../public/images/map-screenshot.jpg";

import GoogleMap from "../components/google-map";

const Footer = () => {
  const [changeMap, setChangeMap] = useState();

  function showMap() {
    setChangeMap(true);
    document.querySelector(".map-copy").style.display = "none";
  }

  return (
    <footer className="footer">
      <Container>
        <Row className="mb-4">
          <Col xs="12" sm="6" lg="3" className="footer__col">
            <h2>Links</h2>
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
            <h2>Social</h2>
            <ul>
              <li>
                <Link href="https://www.instagram.com/jodarleyandco/">
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
                <Link href="https://www.facebook.com/jodarleyandco/">
                  <a target="_blank">
                    <FontAwesomeIcon
                      className="footer__social-icon"
                      icon={faFacebook}
                    />
                    @jodarleyandco
                  </a>
                </Link>
              </li>
              <li>
                <Link href="mailto:hair@jodarleyandco.com">
                  <a target="_blank">
                    <FontAwesomeIcon className="" icon={faEnvelope} />
                    hair@jodarleyandco.com
                  </a>
                </Link>
              </li>
              <li>
                <Link href="tel:01202690009">
                  <a>
                    <FontAwesomeIcon className="" icon={faPhone} />
                    01202 690009
                  </a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs="12" sm="6" lg="3" className="footer__col">
            <h2>Address</h2>
            <ul>
              <li>2 & 3 Albert Parade</li>
              <li>147b Wareham Road</li>
              <li>Corfe Mullen</li>
              <li>BH21 3LA</li>
            </ul>
          </Col>
          <Col xs="12" sm="6" lg="3" className="footer__col">
            <h2>Location</h2>
            <div className="map-copy" onClick={showMap}>
              <ImageContainer>
                <Image src={MapCopy} alt="google map image of salon location" />
              </ImageContainer>
            </div>
            {changeMap && <GoogleMap />}
          </Col>
        </Row>
        <p className="footer__privacy">
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>{" "}
          - Copyright 2022 - Dan Burton
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
