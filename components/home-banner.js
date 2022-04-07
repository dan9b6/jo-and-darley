import React from "react";
import ImageContainer from "./image-container";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="banner banner--home">
      <ImageContainer>
        <Image
          src="/images/banner/home-banner.jpg"
          alt="Logo"
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
      <div className="banner__content">
        <ImageContainer>
          <Image
            src="/images/logo3.png"
            alt="Logo"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
      </div>
    </div>
  );
};

export default HomeBanner;
