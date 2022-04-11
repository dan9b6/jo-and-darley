import React from "react";

const ImageContainer = ({ children, animate }) => {
  return (
    <div
      data-aos={animate ? "zoom-in" : ""}
      data-aos-duration={animate ? "1000" : ""}
      className="img-container"
    >
      {children}
    </div>
  );
};

export default ImageContainer;
