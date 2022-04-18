import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CustomCarousel = () => {
  return (
    <div className="carousel--reviews section--dark-green">
      <Carousel variant="light">
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                "Jo is such a good cutter and always takes the time to discuss
                your hairstyle with you. She is happy to take you through
                different styles and make suggestions if you want to change your
                style and as she has such a good eye for what will suit your
                face and personality, it always works! I wouldn’t trust anyone
                else with my hair and would highly recommend her to anyone."
              </strong>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                "Great work from Jo as always, understands exactly what I want
                straight away. Her years of experience become clear as soon as
                she starts, it’s like second nature. The staff are pleasant too,
                always keen to keep a supply of refreshments flowing. The salon
                looks fantastic you can see there has been some real care put
                into the furnishings and the feel of the place. I’ll be back
                there soon!""
              </strong>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                "My 2nd visit to Jo & Co and a lovely greeting from the team as
                always. Always feel very welcome & relaxed which I have found
                hard to find in other salons and this has put me off having my
                hair done for a long time. Jo was recommended to me and after
                she transformed my hair on the first visit, I will now be a
                loyal customer and look forward to going back again soon! Jo’s
                advice and styling has transformed my fine, lanky hair into
                beautiful bouncy curls & I am thrilled with the results!"
              </strong>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
