import React from "react";

const HomeBanner = () => {
  return (
    <div className="banner banner--home">
      <img
        src="/images/banner/index.jpg"
        alt="Home Banner"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      />
      <div
        className="banner__content"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
        data-aos-delay="500"
        data-aos-duration="750"
      >
        <img src="images/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default HomeBanner;
