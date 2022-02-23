import { useState, useEffect } from "react";
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
import Link from "next/link";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  function toggleNav() {
    setToggle(!toggle);
  }

  function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () {
      window.scrollTo(x, y);
    };
  }

  function enableScrolling() {
    window.onscroll = function () {};
  }

  useEffect(() => {
    if (toggle) {
      document.querySelector("body").classList.add("disable-scroll--mobile");
      disableScrolling();
    } else {
      document.querySelector("body").classList.remove("disable-scroll--mobile");
      enableScrolling();
    }
  });

  return (
    <header className="header">
      <Container>
        <Row className="header__content">
          <Col xs="6" md="3">
            <div className="header__logo">
              <Link href="/">
                <a>
                  <img src="/images/logo.png" alt="Logo" />
                </a>
              </Link>
            </div>
          </Col>
          <Col md="6" className={`nav-primary ${toggle ? "active" : ""}`}>
            <Container className="">
              <ul>
                <li className="nav-primary__link">
                  <Link href="/">
                    <a onClick={toggleNav}>Home</a>
                  </Link>
                </li>
                <li className="nav-primary__link">
                  <Link href="/pricing">
                    <a onClick={toggleNav}>Pricing</a>
                  </Link>
                </li>
                <li className="nav-primary__link">
                  <Link href="/bridal">
                    <a onClick={toggleNav}>Bridal</a>
                  </Link>
                </li>
                <li className="nav-primary__link">
                  <Link href="/education">
                    <a onClick={toggleNav}>Education</a>
                  </Link>
                </li>
                <li className="nav-primary__link">
                  <Link href="/contact">
                    <a onClick={toggleNav}>Contact</a>
                  </Link>
                </li>
                <li className="d-none d-md-block">
                  <Link href="/contact">
                    <a className="btn btn-book">
                      <span>BOOK</span>
                    </a>
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
