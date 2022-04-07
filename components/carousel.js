import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CustomCarousel = () => {
  return (
    <div className="carousel--reviews">
      <Carousel variant="dark">
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <p>
                <strong>
                  "It was a thoroughly enjoyable visit. From someone who rarely
                  treats themselves, I was welcomed so warmly and explained
                  every detail at each step. Thanks to all for making me feel so
                  relaxed - and for my wonderful haircut, it’s beautiful and
                  exactly what I wanted."
                </strong>
              </p>
              <p>Anonymous User</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                "It was a thoroughly enjoyable visit. From someone who rarely
                treats themselves, I was welcomed so warmly and explained every
                detail at each step. Thanks to all for making me feel so relaxed
                - and for my wonderful haircut, it’s beautiful and exactly what
                I wanted."
              </strong>
              <p>Anonymous User</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                "It was a thoroughly enjoyable visit. From someone who rarely
                treats themselves, I was welcomed so warmly and explained every
                detail at each step. Thanks to all for making me feel so relaxed
                - and for my wonderful haircut, it’s beautiful and exactly what
                I wanted."
              </strong>
              <p>Anonymous User</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
