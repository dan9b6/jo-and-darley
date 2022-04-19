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

  const [modalContactData, setModalContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleFormInput(e) {
    const { name, value } = e.target;
    setModalContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleChange(e) {
    let submitBtn = document.getElementById("modal-form-submit");
    submitBtn.classList.remove("success");
    submitBtn.innerHTML = "Submit";
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formValidationMessage = document.querySelector(
      ".modal__content .contact-form__validation-message"
    );

    if (
      modalContactData.firstName == "" ||
      modalContactData.lastName == "" ||
      modalContactData.phone == "" ||
      modalContactData.email == "" ||
      modalContactData.message == ""
    ) {
      formValidationMessage.classList.remove("hidden");
    } else {
      formValidationMessage.classList.add("hidden");

      fetch("/api/SendGrid", {
        method: "post",
        body: JSON.stringify(modalContactData),
      })
        .then((res) => {
          if (res.status === 200) {
            let submitBtn = document.getElementById("modal-form-submit");
            submitBtn.classList.add("loading");
            setTimeout(() => {
              submitBtn.classList.add("success");
              submitBtn.classList.remove("loading");
              submitBtn.innerHTML = "Message Sent";
            }, 2000);
            return res.json();
          }
        })
        .catch((error) => console.log("error"));
    }
  }

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
                  placeholder="First name..."
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
                  placeholder="Last name..."
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
                  type="text"
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
            <button id="modal-form-submit" className="btn btn-primary">
              Submit
            </button>
            <div className="contact-form__validation-message hidden">
              <small className="mb-0 pb-0">Please fill all fields *</small>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
