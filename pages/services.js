import React from "react";
import Banner from "../components/banner";
import CTA from "../components/cta/default";
import SplitCTA from "../components/cta/split";
import Section from "../components/section";

import Link from "next/link";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Pricing = () => {
  return (
    <main>
      <Banner title="Services" bgImg="/images/banner/services-banner.jpg" />
      <Section>
        <div className="pricing__table">
          <Row>
            <Col md="4">
              <div className="pricing__table-data-title">
                <h4>Cut & Styling</h4>
                <p>
                  <strong>Junior Stylist / Stylist / Director</strong>
                </p>
              </div>
              <div className="pricing__table-data">
                <p>Short / Clippered Cut</p>
                <p>£20 / £27 / £30</p>
              </div>
              <div className="pricing__table-data">
                <p>Blow Dry - Short</p>
                <p>£20 / £25 / £27</p>
              </div>
              <div className="pricing__table-data">
                <p>Blow Dry - Long</p>
                <p>£25 / £30 / £35</p>
              </div>
              <div className="pricing__table-data">
                <p>Hair Up</p>
                <p>£30 / £40 / £45</p>
              </div>
              <div className="pricing__table-data">
                <p>Kids 0-14 years</p>
                <p>£10 - £35 / £10 - £35 / No Kids</p>
              </div>
              <div className="pricing__table-data-title">
                <h4>Highlights</h4>
              </div>
              <div className="pricing__table-data">
                <p>T-SECTION</p>
                <p>FROM £50</p>
              </div>
              <div className="pricing__table-data">
                <p>HALF HEAD</p>
                <p>SHORT / LONG</p>
                <p>FROM £60 / £70</p>
              </div>
              <div className="pricing__table-data">
                <p>FULL HEAD</p>
                <p>SHORT / LONG</p>
                <p>FROM £90 / £100</p>
              </div>
            </Col>
            <Col md="4">
              <div className="pricing__table-data-title">
                <h4>Colour</h4>
              </div>
              <div className="pricing__table-data">
                <p>Roots</p>
                <p>£40</p>
              </div>
              <div className="pricing__table-data">
                <p>Full Head</p>
                <p>from £50</p>
              </div>
              <div className="pricing__table-data">
                <p>Semi-permanent</p>
                <p>Short / Long</p>
                <p>from £32 / £42</p>
              </div>
              <div className="pricing__table-data">
                <p>Colour Correction</p>
                <p>Price on consultation only</p>
                <p>From £70 (Including treatment)</p>
              </div>
              <div className="pricing__table-data-title">
                <h4>Balayage</h4>
              </div>
              <div className="pricing__table-data">
                <p>Express</p>
                <p>Colour, Toner & Natural Dry</p>
                <p>from £130</p>
              </div>
              <div className="pricing__table-data">
                <p>Luxury</p>
                <p>Colour, Toner, Cut & Finish</p>
                <p>from £170</p>
              </div>
              <div className="pricing__table-data-title">
                <h4>Bleach Roots</h4>
              </div>
              <div className="pricing__table-data">
                <p>FROM £60</p>
              </div>
            </Col>
            <Col md="4">
              <div className="pricing__table-data-title">
                <h4>Toner</h4>
              </div>
              <div className="pricing__table-data">
                <p>Short / Long</p>
                <p>£18 / £28</p>
              </div>
              <div className="pricing__table-data-title">
                <h4>Perming</h4>
              </div>
              <div className="pricing__table-data">
                <p>Price on consultation only</p>
                <p>(Cut & Finish Included)</p>
                <p>Short / Long</p>
                <p>from £90 / £120</p>
              </div>
              <div className="pricing__table-data-title">
                <h4>BRAZILIAN BLOW DRY</h4>
              </div>
              <div className="pricing__table-data">
                <p>SHORT / LONG</p>
                <p>FROM £100 / £130</p>
              </div>
              <div className="pricing__table-data-title">
                <h4>OWAY ORGANIC TREATMENT</h4>
              </div>
              <div className="pricing__table-data">
                <p>FROM £15</p>
              </div>
            </Col>
          </Row>
        </div>
      </Section>
      <Section>
        <CTA
          title="Make your special day more special."
          img="/images/instagram/instagram-5.jpg"
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
      </Section>
    </main>
  );
};

export default Pricing;
