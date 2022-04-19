import React from "react";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SendgridForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [valid, setValid] = useState(false);

  let validated = false;

  const resetForm = (e) => {
    let submitBtn = document.getElementById("contact-form-submit");
    submitBtn.classList.remove("success");
    submitBtn.innerHTML = "Submit";
  };

  const handleValidation = (e) => {
    if (
      firstName !== "" ||
      lastName !== "" ||
      email !== "" ||
      phone !== "" ||
      message !== ""
    ) {
      validated = true;
      setValid(validated);
    }
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    handleValidation();

    const formValidationMessage = document.querySelector(
      ".contact .contact-form__validation-message"
    );

    if (validated == true) {
      formValidationMessage.classList.add("hidden");

      const res = await fetch("/api/SendGridApi", {
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      let submitBtn = document.getElementById("contact-form-submit");
      submitBtn.classList.add("loading");
      submitBtn.innerHTML = "Sending...";

      setTimeout(() => {
        submitBtn.classList.add("success");
        submitBtn.innerHTML = "Message Sent";
        submitBtn.classList.remove("loading");
      }, 2000);

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }
      console.log(firstName, lastName, email, phone, message);
    } else {
      formValidationMessage.classList.remove("hidden");
    }
  };

  return (
    <form onSubmit={handleFormSubmission} className="contact-form">
      <Row>
        <Col xs="12" md="6">
          <div className="contact-form__group">
            <input
              placeholder="First Name..."
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                resetForm();
              }}
              name="firstName"
            />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="contact-form__group">
            <input
              placeholder="Last Name..."
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                resetForm();
              }}
              name="lastName"
            />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="contact-form__group">
            <input
              placeholder="Email..."
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                resetForm();
              }}
              name="email"
            />
          </div>
        </Col>
        <Col xs="12" md="6">
          <div className="contact-form__group">
            <input
              placeholder="Contact Number..."
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                resetForm();
              }}
              name="phone"
            />
          </div>
        </Col>
        <Col xs="12">
          <div className="contact-form__group">
            <textarea
              placeholder="Message..."
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                resetForm();
              }}
            ></textarea>
          </div>
        </Col>
        <Col xs="12">
          <div className="contact-form__group">
            <button id="contact-form-submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Col>
        <Col xs="12">
          <div className="contact-form__group contact-form__validation">
            <div className="contact-form__validation-message hidden">
              <small className="mb-0 pb-0">Please fill all fields *</small>
            </div>
          </div>
        </Col>
      </Row>
    </form>
  );
};

export default SendgridForm;
