import React from "react";
// import ContactForm from "./contact-form";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  function closeModal() {
    document.querySelector(".modal__overlay").classList.remove("active");
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [valid, setValid] = useState(false);

  let validated = false;

  const handleValidation = (e) => {
    if (
      firstName !== "" ||
      lastName !== "" ||
      email !== "" ||
      phone !== "" ||
      message !== ""
    ) {
      setValid(validated);
      validated = true;
    }
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    handleValidation();

    const formValidationMessage = document.querySelector(
      ".modal__overlay .contact-form__validation-message"
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

      let submitBtn = document.getElementById("modal-form-submit");
      submitBtn.classList.add("loading");
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
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__close" onClick={closeModal}>
          <FontAwesomeIcon className="" icon={faXmark} />
        </div>
        <h2>Book your appointment</h2>
        <p className="mb-4">
          Please fill out the below with as much information as you can & we
          will get back to you as soon as possible.
        </p>
        <form onSubmit={handleFormSubmission}>
          <Row>
            <Col xs="12" md="6">
              <div className="contact-form__group">
                <input
                  placeholder="First Name..."
                  type="text"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
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
                  }}
                ></textarea>
              </div>
            </Col>
            <Col xs="12">
              <div className="contact-form__group">
                <button id="modal-form-submit" className="btn btn-primary">
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
      </div>
    </div>
  );
};

export default Modal;
