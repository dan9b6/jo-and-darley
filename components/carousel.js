import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CustomCarousel = () => {
  return (
    <div className="carousel--reviews section--dark-green">
      <Carousel variant="light" interval={6000}>
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                "Jo is such a good cutter and always takes the time to discuss
                your hairstyle with you. She is happy to take you through
                different styles and make suggestions if you want to change your
                style and as she has such a good eye for what will suit your
                face and personality, it always works! I wouldn’t trust anyone
                else with my hair and would highly recommend her to anyone. "
              </strong>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                " This was my first visit and I'm so glad I found JO & CO. Jo
                did wonders with my hair and I learnt so much about how to look
                after and style my hair in the appointment. Thank you Jo, this
                is definitely the best haircut I've had in my life!! The girls
                at the salon were also really friendly and made me feel so
                welcome, Emilie is the first hairdresser to wash my hair without
                it becoming a tangled mess which was very impressive! She did a
                great job curling it too. I'm so glad I found this hairdressers
                and gave it a go because I'll definitely be coming back!"
              </strong>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                "Very high standard service, made to feel very comfortable
                despite covid. Just had a very positive and welcoming vibe, will
                definitely be coming back and recommending to others!"
              </strong>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item__content">
            <div>
              <strong>
                "Had an amazing Cut & colour at Jo & Co! Really happy with my
                hair and the salon is so lovely, beautifully decorated and a
                really nice place to be. The hair products smell amazing aswell
                and hair felt lovely and soft afterwards!! 100% recommend!!!"
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
                there soon! "
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
                beautiful bouncy curls & I am thrilled with the results! "
              </strong>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
