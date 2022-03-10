import { useState } from "react";
import Banner from "../components/banner";
import Section from "../components/section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleFormInput(e) {
    const { name, value } = e.target;
    setContactData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formValidationMessage = document.querySelector(
      ".contact-form__validation-message"
    );

    if (
      contactData.firstName == "" ||
      contactData.lastName == "" ||
      contactData.phone == "" ||
      contactData.email == "" ||
      contactData.message == ""
    ) {
      formValidationMessage.classList.remove("hidden");
    } else {
      formValidationMessage.classList.add("hidden");

      fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(contactData),
      })
        .then((res) => {
          if (res.status === 200) {
            let submitBtn = document.getElementById("contact-form-submit");
            submitBtn.classList.add("loading");
            setTimeout(() => {
              submitBtn.classList.add("success");
              submitBtn.querySelector("span").innerHTML = "Message Sent";
              submitBtn.classList.remove("loading");
            }, 2000);
            return res.json();
          }
        })
        .catch((error) => console.log("error"));
    }
  }

  return (
    <main>
      <Banner title="Contact" />
      <Section>
        <div className="form">
          <Row>
            <Col xs="12" lg="6">
              <form
                className="contact-form"
                method="post"
                onSubmit={handleOnSubmit}
              >
                <h2>Get in touch</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam vehicula enim risus, eget imperdiet enim suscipit ac.
                  Vestibulum eleifend feugiat vestibulum. Aenean pellentesque,
                  turpis non laoreet.
                </p>
                <Row>
                  <Col xs="12" md="6">
                    <div className="contact-form__group">
                      <input
                        type="text"
                        name="firstName"
                        onChange={handleFormInput}
                        placeholder="First name..."
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
                      />
                    </div>
                  </Col>
                </Row>
                <div className="contact-form__group contact-form__validation">
                  <button id="contact-form-submit" className="btn btn-book">
                    <span>Submit</span>
                  </button>
                  <div className="contact-form__validation-message hidden">
                    <small className="mb-0 pb-0">
                      Please fill all fields *
                    </small>
                  </div>
                </div>
              </form>
            </Col>
            <Col sm="6" lg="3">
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
            <Col sm="6" lg="3">
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
        </div>
      </Section>
    </main>
  );
};

export default Contact;
