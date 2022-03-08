import HomeBanner from "../components/home-banner";
import Section from "../components/section";
import SplitCTA from "../components/cta/split";
import CustomCarousel from "../components/carousel";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <SplitCTA>
        <h2>Passionate about hair.</h2>
        <p>
          Jo's creativity, alongside her fascination for hair colouring &
          precision cutting, became the foundation that led to her education
          worldwide & accumulating extensive knowledge within the hair industry.
        </p>
        <a className="btn btn-book">
          <span>See Our Services</span>
        </a>
      </SplitCTA>
      <SplitCTA reverse>
        <h2>Celebrating individuality.</h2>
        <p>
          Jo & the team are passionate about caring for all hair types &
          prioritising client's hair needs, whilst building a community of
          giving & creative individuals.
        </p>
        <a className="btn btn-book">
          <span>See Our Courses</span>
        </a>
      </SplitCTA>
      <SplitCTA>
        <h2>Education.</h2>
        <p>
          Jo & the team are passionate about caring for all hair types &
          prioritising client's hair needs, whilst building a community of
          giving & creative individuals.
        </p>
        <a className="btn btn-book">
          <span>See Our Courses</span>
        </a>
      </SplitCTA>
      <CustomCarousel />

      <Section>
        <Row className="mb-5 pb-5 align-items-center">
          <Col md="6">
            <div className="section__home-text">
              <h2>Passionate about hair.</h2>
              <p>
                Jo's creativity, alongside her fascination for hair colouring &
                precision cutting, became the foundation that led to her
                education worldwide & accumulating extensive knowledge within
                the hair industry.
              </p>
            </div>
          </Col>
          <Col md="6">
            <img src="/images/logo.png" alt="" title="" />
          </Col>
        </Row>
        <Row className="mb-5 py-5 align-items-center">
          <Col md="6">
            <div className="section__home-text">
              <h2>Celebrating individuality.</h2>
              <p>
                Jo & the team are passionate about caring for all hair types &
                prioritising client's hair needs, whilst building a community of
                giving & creative individuals.
              </p>
            </div>
          </Col>
          <Col md="6">
            <img src="/images/logo.png" alt="" title="" />
          </Col>
        </Row>
        <Row className="pt-5 align-items-center">
          <Col md="6">
            <div className="section__home-text">
              <h2>Education.</h2>
              <p>
                Jo & the team are passionate about caring for all hair types &
                prioritising client's hair needs, whilst building a community of
                giving & creative individuals.
              </p>
              <p>
                At Jo Darley & Co we are now offering new and exciting hair
                styling courses throughout the year so that you could become a
                qualified styling and hairdresser. Check out our latest courses
                and course information.
              </p>
              <Link href="/courses">
                <a className="btn btn-book">
                  <span>View our courses</span>
                </a>
              </Link>
            </div>
          </Col>
          <Col md="6">
            <img src="/images/logo.png" alt="" title="" />
          </Col>
        </Row>
      </Section>
    </main>
  );
}
