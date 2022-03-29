import React from "react";

const ImageContainer = ({ children }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000" className="img-container">
      {children}
    </div>
  );
};

export default ImageContainer;
