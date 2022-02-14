import React from "react";
import Container from "react-bootstrap/Container";

const Section = ({ children, bg, reverse }) => {
  return (
    <section
      className={`section ${bg ? "section--" + bg : ""} ${
        reverse ? "section--reverse" : ""
      }`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
