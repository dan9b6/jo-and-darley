import React from "react";
import Banner from "../components/banner";
import Section from "../components/section";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Pricing = () => {
  return (
    <main>
      <Banner title="Pricing" />
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
            </Col>
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
            </Col>
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
            </Col>
          </Row>
        </div>
      </Section>
    </main>
  );
};

export default Pricing;
