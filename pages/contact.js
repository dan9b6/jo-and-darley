import React from "react";
import Banner from "../components/banner";
import Section from "../components/section";

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
        <form className="contact-form" method="post" onSubmit={handleOnSubmit}>
          <div className="contact-form__group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="contact-form__group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="contact-form__group">
            <label htmlFor="message">Name</label>
            <input type="text" name="message" />
          </div>
          <div className="contact-form__group">
            <button>Submit</button>
          </div>
        </form>
      </Section>
    </main>
  );
};

export default Contact;
