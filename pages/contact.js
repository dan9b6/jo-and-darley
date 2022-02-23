import React from "react";
import Banner from "../components/banner";
import Section from "../components/section";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log("success");
        return res.json();
      })
      .catch((error) => console.log("error"));
  }

  return (
    <main>
      <Banner title="Contact" />
      <Section>
        <div className="form">
          <Row>
            <Col xs="12">
              <img src="/images/logo.png" alt="Logo" className="pb-5" />
            </Col>
            <Col sm="6" md="3">
              <h4>Opening Hours:</h4>
              <ul>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
              </ul>
            </Col>
            <Col sm="6" md="3">
              <h4>Opening Hours:</h4>
              <ul>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
                <li>Monday: 08:00 - 18:00</li>
              </ul>
            </Col>
            <Col xs="12" md="6">
              <form
                className="contact-form"
                method="post"
                onSubmit={handleOnSubmit}
              >
                <Row>
                  <Col xs="12" md="6">
                    <div className="contact-form__group">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First name..."
                      />
                    </div>
                  </Col>
                  <Col xs="12" md="6">
                    <div className="contact-form__group">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name..."
                      />
                    </div>
                  </Col>
                  <Col xs="12" md="6">
                    <div className="contact-form__group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                  </Col>
                  <Col xs="12" md="6">
                    <div className="contact-form__group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Contact number"
                      />
                    </div>
                  </Col>
                  <Col xs="12">
                    <div className="contact-form__group">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Message"
                      />
                    </div>
                  </Col>
                </Row>
                <div className="contact-form__group">
                  <button className="btn btn-book">
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
