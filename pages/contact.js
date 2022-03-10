import { useState } from "react";
import Banner from "../components/banner";
import ContactForm from "../components/contact-form";
import Section from "../components/section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  return (
    <main>
      <Banner title="Contact" />
      <Section>
        <div className="">
          <Row>
            <Col xs="12" md="9" lg="9">
              <div className="form">
                <h2>Get in touch</h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam vehicula enim risus, eget imperdiet enim suscipit ac.
                  Vestibulum eleifend feugiat vestibulum. Aenean pellentesque,
                  turpis non laoreet.
                </p>
                <ContactForm />
              </div>
            </Col>
            <Col xs="12" lg="3" className="subsection">
              <Row>
                <Col sm="6" md="12" className="mb-md-5">
                  <h4>Opening Hours:</h4>
                  <ul>
                    <li>Monday: 08:00 - 18:00</li>
                    <li>Tuesday: 08:00 - 18:00</li>
                    <li>Wednesday: 08:00 - 18:00</li>
                    <li>Thursday: 08:00 - 18:00</li>
                    <li>Friday: 08:00 - 18:00</li>
                    <li>Saturday: 08:00 - 18:00</li>
                    <li>Sunday: 08:00 - 18:00</li>
                  </ul>
                </Col>
                <Col sm="6" md="12">
                  <h4>Location:</h4>
                  <ul>
                    <li>2 & 3 Albert Parade</li>
                    <li>147b Wareham Road</li>
                    <li>Corfe Mullen</li>
                    <li>Dorset</li>
                    <li>BH21 3LA</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
