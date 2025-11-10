import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReCAPTCHA from "react-google-recaptcha";

const SendgridForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  let validated = false;

  const resetForm = () => {
    const submitBtn = document.getElementById("contact-form-submit");
    if (submitBtn) {
      submitBtn.classList.remove("success");
      submitBtn.innerHTML = "Submit";
    }
  };

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
      ".contact .contact-form__validation-message"
    );

    if (!captchaToken) {
      formValidationMessage?.classList.remove("hidden");
      formValidationMessage &&
        (formValidationMessage.innerHTML =
          "<small class='mb-0 pb-0'>Please complete the reCAPTCHA *</small>");
      return;
    }

    if (validated === true) {
      formValidationMessage?.classList.add("hidden");

      const submitBtn = document.getElementById("contact-form-submit");
      if (submitBtn) {
        submitBtn.classList.add("loading");
        submitBtn.innerHTML = "Sending...";
      }

      const res = await fetch("/api/SendGridApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          phone,
          message,
          recaptchaToken: captchaToken,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.classList.add("success");
            submitBtn.innerHTML = "Message Sent";
            submitBtn.classList.remove("loading");
          }
        }, 2000);

        // clear form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setCaptchaToken(null);
      } else {
        console.log(data.error || "Error sending message");
        if (submitBtn) {
          submitBtn.classList.remove("loading");
          submitBtn.innerHTML = "Submit";
        }
      }
    } else {
      formValidationMessage?.classList.remove("hidden");
      formValidationMessage &&
        (formValidationMessage.innerHTML =
          "<small class='mb-0 pb-0'>Please fill all fields *</small>");
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
