import HomeBanner from "../components/home-banner";
import Section from "../components/section";
import CTA from "../components/cta/default";
import SplitCTA from "../components/cta/split";
import CustomCarousel from "../components/carousel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import Image from "next/image";
import ImageContainer from "../components/image-container";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <SplitCTA bgImg="/images/cta/4.jpg">
        <h2>What can we do for you?</h2>
        <p>
          Jo & Darley offer an extensive range of services to make your hair
          look just as you want it. Not only is our services delivered at a high
          quality, but also at a reasonable price.
        </p>
        <p>Why not see for yourself?</p>
        <Link href="/services">
          <a className="btn btn-primary">See Our Services</a>
        </Link>
      </SplitCTA>
      <Section bg="light-pink">
        <div className="cta--instagram">
          <h2 className="cta--instagram-heading">Check Out Our Instagram</h2>
          <Row>
            <Col md="4">
              <ImageContainer>
                <Image
                  src="/images/instagram/instagram-1.jpg"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
                <a
                  href="https://www.instagram.com/jodarleyandco/"
                  className="img-overlay"
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    className="img-overlay__icon"
                    icon={faInstagram}
                  />
                  <p>
                    <strong>@jodarleyandco</strong>
                  </p>
                </a>
              </ImageContainer>
            </Col>
            <Col md="4">
              <ImageContainer>
                <Image
                  src="/images/instagram/instagram-2.jpg"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
                <a
                  href="https://www.instagram.com/jodarleyandco/"
                  className="img-overlay"
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    className="img-overlay__icon"
                    icon={faInstagram}
                  />
                  <p>
                    <strong>@jodarleyandco</strong>
                  </p>
                </a>
              </ImageContainer>
            </Col>
            <Col md="4">
              <ImageContainer>
                <Image
                  src="/images/instagram/instagram-3.jpg"
                  alt="Logo"
                  layout="fill"
                  objectFit="contain"
                />
                <a
                  href="https://www.instagram.com/jodarleyandco/"
                  className="img-overlay"
                  target={"_blank"}
                >
                  <FontAwesomeIcon
                    className="img-overlay__icon"
                    icon={faInstagram}
                  />
                  <p>
                    <strong>@jodarleyandco</strong>
                  </p>
                </a>
              </ImageContainer>
            </Col>
          </Row>
        </div>
      </Section>
      <SplitCTA bgImg="/images/cta/16.jpg" reverse>
        <h2>Education.</h2>
        <p>
          Jo & Darley are looking to share their vast experience with the rest
          of the industry with our latest Cutting Courses. Are you interested in
          becoming a hair stylist?
        </p>
        <Link href="/education">
          <a className="btn btn-primary">See Our Courses</a>
        </Link>
      </SplitCTA>
      <CustomCarousel />
      <SplitCTA bgImg="/images/cta/15.jpg">
        <h2>Eco-conscious.</h2>
        <ul className="custom-list">
          <li>
            For all of our colour, wash & styling, we exclusively use Italian
            haircare brand, Oway.
          </li>
          <li>
            Oway produces ultra-concentrated formulas with organic, plant-based
            & biodegradable ingredients. Good for hair, good for the
            environment.
          </li>
          <li>
            Using only glass bottles & aluminium tubes, Oway is plastic free,
            recyclable & cruelty-free PETA certified – a few of the many reasons
            why we love the brand.
          </li>
          <li>
            Recycle with us in salon by using our shampoo & conditioner refill
            station.
          </li>
        </ul>
      </SplitCTA>
    </main>
  );
}
