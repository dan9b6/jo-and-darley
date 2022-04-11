import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: null,
    message: "",
  });

  function handleFormInput(e) {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleChange(e) {
    let submitBtn = document.getElementById("contact-form-submit");
    submitBtn.innerHTML = "Submit";
    submitBtn.classList.remove("success");
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formValidationMessage = document.querySelector(
      ".contact .contact-form__validation-message"
    );

    if (
      contactData.firstName == "" ||
      contactData.lastName == "" ||
      contactData.phone == null ||
      contactData.email == "" ||
      contactData.message == ""
    ) {
      formValidationMessage.classList.remove("hidden");
    } else {
      formValidationMessage.classList.add("hidden");
      fetch("/api/SendGrid", {
        method: "post",
        body: JSON.stringify(contactData),
      })
        .then((res) => {
          if (res.status === 200) {
            let submitBtn = document.getElementById("contact-form-submit");
            submitBtn.classList.add("loading");
            setTimeout(() => {
              submitBtn.classList.add("success");
              submitBtn.innerHTML = "Message Sent";
              submitBtn.classList.remove("loading");
            }, 2000);
            return res.json();
          } else {
            console.log("Error in sending message");
          }
        })
        .catch((error) => console.log("error"));
    }
  }

  return (
    <form
      className="contact-form"
      method="post"
      onSubmit={handleOnSubmit}
      onChange={handleChange}
    >
      <Row>
        <Col xs="12" md="6">
          <div className="contact-form__group">
            <input
              type="text"
              name="firstName"
              onChange={handleFormInput}
              placeholder="First name"
              required
            />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="contact-form__group">
            <input
              type="text"
              name="lastName"
              onChange={handleFormInput}
              placeholder="Last name"
              required
            />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="contact-form__group">
            <input
              type="text"
              name="email"
              onChange={handleFormInput}
              placeholder="Email address"
              required
            />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="contact-form__group">
            <input
              type="number"
              name="phone"
              onChange={handleFormInput}
              placeholder="Contact number"
              required
            />
          </div>
        </Col>
        <Col xs="12">
          <div className="contact-form__group">
            <textarea
              type="text"
              name="message"
              onChange={handleFormInput}
              placeholder="Message"
              required
            />
          </div>
        </Col>
      </Row>
      <div className="contact-form__group contact-form__validation">
        <button id="contact-form-submit" className="btn btn-primary">
          Submit
        </button>
        <div className="contact-form__validation-message hidden">
          <small className="mb-0 pb-0">Please fill all fields *</small>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
