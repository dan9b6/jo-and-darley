import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";

const Modal = () => {
  function closeModal() {
    document.querySelector(".modal__overlay").classList.remove("active");
  }

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  let validated = false;

  const handleValidation = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== ""
    ) {
      validated = true;
    }
  };

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    handleValidation();

    const formValidationMessage = document.querySelector(
      ".modal__overlay .contact-form__validation-message"
    );

    if (!captchaToken) {
      formValidationMessage?.classList.remove("hidden");
      formValidationMessage &&
        (formValidationMessage.innerHTML =
          "<small class='mb-0 pb-0'>Please complete the reCAPTCHA *</small>");
      return;
    }

    if (validated == true) {
      formValidationMessage?.classList.add("hidden");

      const submitBtn = document.getElementById("modal-form-submit");
      if (submitBtn) {
        submitBtn.classList.add("loading");
      }

      const res = await fetch("/api/SendGridApi", {
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          message,
          recaptchaToken: captchaToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const data = await res.json();

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.classList.add("success");
          submitBtn.innerHTML = "Message Sent";
          submitBtn.classList.remove("loading");
        }
      }, 2000);

      if (!res.ok) {
        console.log(data.error || "Error sending message");
      } else {
        // clear fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setCaptchaToken(null);
      }
    } else {
      formValidationMessage?.classList.remove("hidden");
      formValidationMessage &&
        (formValidationMessage.innerHTML =
          "<small class='mb-0 pb-0'>Please fill all fields *</small>");
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
            {/* ...your existing inputs... */}
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

            {/* reCAPTCHA */}
            <Col xs="12">
              <div className="contact-form__group">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                />
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
