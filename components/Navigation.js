import { useState, ReactElement } from "react";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// Next
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
    console.log(toggle);
  }
  return (
    <header className="header">
      <Container>
        <Row className="header__content">
          <Col xs="6" md="3">
            <div className="header__logo">
              <img src="/images/logo.png" alt="" title="" />
            </div>
          </Col>
          <Col md="6" className={`nav-primary ${toggle ? "active" : ""}`}>
            <Container className="ps-2 ps-sm-3">
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
                <li className="d-none d-md-block">
                  <Link href="/contact">
                    <a className="btn btn-secondary">Book</a>
                  </Link>
                </li>
              </ul>
            </Container>
            <div className="nav-primary__social d-md-none">
              <Container>
                <Row className="justify-content-between">
                  <Col className="nav-primary__cta" xs="9">
                    <p>Style your hair today!</p>
                    <Button className="btn-primary">Book Now</Button>
                    <small>#joanddarley</small>
                  </Col>
                  <Col xs="3" className="text-right">
                    <FontAwesomeIcon
                      className="nav-primary__social-icon"
                      icon={faInstagram}
                    />
                    <FontAwesomeIcon
                      className="nav-primary__social-icon"
                      icon={faFacebook}
                    />
                    <FontAwesomeIcon
                      className="nav-primary__social-icon"
                      icon={faEnvelope}
                    />
                    <FontAwesomeIcon
                      className="nav-primary__social-icon"
                      icon={faPhone}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
          <Col xs="6" md="3" className="nav-toggle d-md-none">
            <div
              className={`nav-toggle__btn ${toggle ? "active" : ""}`}
              onClick={toggleNav}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Navigation;
