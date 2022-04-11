import React from "react";
import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

const Footer = () => {
  // const googlemap = useRef(null);
  // useEffect(() => {
  //   const loader = new Loader({
  //     apiKey: process.env.NEXT_PUBLIC_API_KEY,
  //     version: "weekly",
  //   });
  //   let map;
  //   let marker;
  //   loader.load().then(() => {
  //     const google = window.google;

  //     var myLatlng = new google.maps.LatLng(
  //       50.765779847367675,
  //       -2.021353615339215
  //     );

  //     map = new google.maps.Map(googlemap.current, {
  //       center: myLatlng,
  //       zoom: 12,
  //     });

  //     marker = new google.maps.Marker({
  //       position: myLatlng,
  //       title: "Hello World!",
  //     });

  //     marker.setMap(map);
  //   });
  // });

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
            {/* <div id="map" ref={googlemap} /> */}
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
