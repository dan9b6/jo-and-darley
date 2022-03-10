import HomeBanner from "../components/home-banner";
import Section from "../components/section";
import CTA from "../components/cta/default";
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
      <Section>
        <h2 className="text-center mb-5">Meet The Team</h2>
        <Row>
          <Col md="4">
            <div className="employee">
              <img src="/images/person.png" alt="" title="" />
              <div className="employee__info">
                <h4>Persons Name</h4>
                <p>Director</p>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="employee">
              <img src="/images/person.png" alt="" title="" />
              <h4>Persons Name</h4>
              <p>Senior Stylist</p>
            </div>
          </Col>
          <Col md="4">
            <div className="employee">
              <img src="/images/person.png" alt="" title="" />
              <h4>Persons Name</h4>
              <p>Junior Stylist</p>
            </div>
          </Col>
        </Row>
      </Section>
      <CustomCarousel />

      <Section>
        <CTA
          title="Make your special day more special."
          img="/images/person.png"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vehicula enim risus, eget imperdiet enim suscipit ac. Vestibulum
            eleifend feugiat vestibulum. Aenean pellentesque, turpis non laoreet
            ullamcorper, erat justo mollis neque, quis rutrum nulla ante et
            massa. Proin sodales augue lorem.
          </p>
          <a href="/services" className="btn btn-primary">
            See Bridal Package
          </a>
        </CTA>
        <CTA title="Lorem Ipsum." img="/images/person.png" reverse>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vehicula enim risus, eget imperdiet enim suscipit ac. Vestibulum
            eleifend feugiat vestibulum. Aenean pellentesque, turpis non laoreet
            ullamcorper, erat justo mollis neque, quis rutrum nulla ante et
            massa. Proin sodales augue lorem.
          </p>
          <a href="/services" className="btn btn-primary">
            Button
          </a>
        </CTA>
      </Section>
    </main>
  );
}
