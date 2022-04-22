import HomeBanner from "../components/home-banner";
import Section from "../components/section";
import SplitCTA from "../components/cta/split";
import CustomCarousel from "../components/carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jo Darley & Co</title>
        <meta name="title" content="Jo Darley & Co" />
        <meta
          name="description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jodarleyandco.com/" />
        <meta property="og:title" content="Jo Darley & Co" />
        <meta
          property="og:description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />
        <meta
          property="og:image"
          content="https://www.jodarleyandco.com/images/cta/index/1st.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.jodarleyandco.com/" />
        <meta property="twitter:title" content="Jo Darley & Co" />
        <meta
          property="twitter:description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />
        <meta
          property="twitter:image"
          content="https://www.jodarleyandco.com/images/cta/index/1st.jpg"
        />
      </Head>
      <main>
        <HomeBanner />
        <SplitCTA bgImg="/images/cta/index/1st.jpg" altText="our products">
          <h2>PASSIONATE ABOUT HAIR.</h2>
          <p>
            Jo’s creativity, alongside her fascination for hair colouring &amp;
            precision cutting, became the foundation that led to her educating
            worldwide &amp; accumulating extensive knowledge within the hair
            industry.
          </p>
          <p>
            Jo &amp; the team are passionate about caring for all hair types
            &amp; prioritising client’s hair needs, whilst building a community
            of giving &amp; creative individuals.
          </p>
          <Link href="/services">
            <a className="btn btn-primary">See Our Services</a>
          </Link>
        </SplitCTA>

        <SplitCTA
          bgImg="/images/cta/index/2nd.jpg"
          altText="our product stand"
          reverse
          bg="light-pink"
        >
          <h2>Eco-conscious.</h2>
          <ul>
            <p>
              For all of our colour, wash & styling, we exclusively use Italian
              haircare brand, Oway.
            </p>
            <p>
              Oway produces ultra-concentrated formulas with organic,
              plant-based & biodegradable ingredients. Good for hair, good for
              the environment.
            </p>
            <p>
              Using only glass bottles & aluminium tubes, Oway is plastic free,
              recyclable & cruelty-free PETA certified – a few of the many
              reasons why we love the brand.
            </p>
            <p>
              Recycle with us in salon by using our shampoo & conditioner refill
              station.
            </p>
          </ul>
        </SplitCTA>
        <CustomCarousel />
        <SplitCTA bgImg="/images/cta/index/3rd.jpg" altText="our seating area">
          <h2>Education.</h2>
          <p>
            Sharing knowledge is an important part of salon life at Jo &amp; Co.
            Developing individuals who value education &amp; strive to fulfil
            their upmost potential throughout their career.
          </p>
          <p>
            Our stylists &amp; young stylists take every opportunity to learn,
            share &amp; implement ideas. Jo &amp; Co. offer bespoke educational
            courses tailored to your individual needs.
          </p>
          <Link href="/education">
            <a className="btn btn-primary">See Our Courses</a>
          </Link>
        </SplitCTA>
        <Section bg="light-pink">
          <div className="cta--instagram">
            <h2 className="cta--instagram-heading">Follow us on instagram</h2>
            <Row>
              <Col md="4">
                <div
                  className="cta--instagram-image"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-offset="0"
                  data-aos-delay="0"
                  data-aos-duration="500"
                >
                  <a
                    className="img-overlay"
                    href="https://www.instagram.com/jodarleyandco/"
                    target="_blank"
                    alt="instagram cover overlay 1"
                  >
                    <FontAwesomeIcon
                      className="img-overlay__icon"
                      icon={faInstagram}
                    />
                  </a>
                  <img
                    src="/images/instagram/2nd.jpg"
                    alt="instagram image 1"
                  />
                </div>
              </Col>
              <Col md="4">
                <div
                  className="cta--instagram-image"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-offset="0"
                  data-aos-delay="0"
                  data-aos-duration="500"
                >
                  <a
                    className="img-overlay"
                    href="https://www.instagram.com/jodarleyandco/"
                    target="_blank"
                    alt="instagram cover overlay 2"
                  >
                    <FontAwesomeIcon
                      className="img-overlay__icon"
                      icon={faInstagram}
                    />
                  </a>
                  <img
                    src="/images/instagram/1st.jpg"
                    alt="instagram image 2"
                  />
                </div>
              </Col>
              <Col md="4">
                <div
                  className="cta--instagram-image"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-offset="0"
                  data-aos-delay="0"
                  data-aos-duration="500"
                >
                  <a
                    className="img-overlay"
                    href="https://www.instagram.com/jodarleyandco/"
                    target="_blank"
                    alt="instagram cover overlay 3"
                  >
                    <FontAwesomeIcon
                      className="img-overlay__icon"
                      icon={faInstagram}
                    />
                  </a>
                  <img
                    src="/images/instagram/4th.jpg"
                    alt="instagram image 3"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Section>
      </main>
    </>
  );
}
