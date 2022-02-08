import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            Hello
          </Col>
          <Col md="6" className={`nav-primary ${toggle ? "active" : ""}`}></Col>
          <Col xs="6" md="3" className="nav-toggle">
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
