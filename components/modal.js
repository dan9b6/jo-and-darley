import React from "react";
import ContactForm from "./contact-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  function closeModal() {
    document.querySelector(".modal__overlay").classList.remove("active");
  }

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__close" onClick={closeModal}>
          <FontAwesomeIcon className="" icon={faXmark} />
        </div>
        <h2>Book your appointment</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          vehicula enim risus, eget imperdiet enim suscipit ac.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Modal;
