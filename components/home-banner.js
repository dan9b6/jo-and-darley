import React from "react";
import ImageContainer from "./image-container";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="banner banner--home">
      <div className="img-container">
        <Image
          src="/images/image002.jpg"
          alt="Home Banner"
          layout="fill"
          objectFit="cover"
          loading="eager"
          priority={true}
        />
      </div>
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
