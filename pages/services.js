import React from "react";
import Banner from "../components/banner";
import SplitCTA from "../components/cta/split";
import Section from "../components/section";

import Link from "next/link";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Head from "next/head";

const Pricing = () => {
  return (
    <>
      <Head>
        <title>Services | Jo Darley & Co</title>
        <meta name="title" content="Services - Jo Darley & Co" />
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
        <Banner title="Services" bgImg="/images/banner/services.jpg" />
        <Section bg="pink">
          <div className="pricing__table">
            <Row>
              <Col md="4">
                <div className="pricing__table-data-title">
                  <h4>Cut & Styling</h4>
                  <p className="text-uppercase">
                    Junior Stylist / Stylist / Director
                  </p>
                </div>
                <div className="pricing__table-data">
                  <p>CUT &amp; FINISH</p>
                  <p>£37 / £52 / £65</p>
                </div>
                <div className="pricing__table-data">
                  <p>Short / Clippered Cut</p>
                  <p>£22 / £29 / £36</p>
                </div>
                <div className="pricing__table-data">
                  <p>Blow Dry - Short</p>
                  <p>£22 / £29 / £36</p>
                </div>
                <div className="pricing__table-data">
                  <p>Blow Dry - Long</p>
                  <p>£27 / £37 / £50</p>
                </div>
                <div className="pricing__table-data">
                  <p>Hair Up</p>
                  <p>From £32 / From £42 / From £52</p>
                </div>
                <div className="pricing__table-data">
                  <p>Kids 0-14 years</p>
                  <p>£10 - £35 / £15 - £45 / No Kids</p>
                </div>
                <div className="pricing__table-data-title">
                  <h4>Highlights</h4>
                </div>
                <div className="pricing__table-data">
                  <p>T-SECTION</p>
                  <p>FROM £53</p>
                </div>
                <div className="pricing__table-data">
                  <p>HALF HEAD</p>
                  <p>SHORT / LONG</p>
                  <p>FROM £65 / £75</p>
                </div>
                <div className="pricing__table-data">
                  <p>FULL HEAD</p>
                  <p>SHORT / LONG</p>
                  <p>FROM £95 / £105</p>
                </div>
              </Col>
              <Col md="4">
                <div className="pricing__table-data-title">
                  <h4>Colour</h4>
                </div>
                <div className="pricing__table-data">
                  <p>Roots</p>
                  <p>£45</p>
                </div>
                <div className="pricing__table-data">
                  <p>Full Head</p>
                  <p>from £55</p>
                </div>
                <div className="pricing__table-data">
                  <p>Semi-permanent</p>
                  <p>Short / Long</p>
                  <p>from £36 / £47</p>
                </div>
                <div className="pricing__table-data">
                  <p>Colour Correction</p>
                  <p>Price on consultation only</p>
                  <p>From £80 (Including treatment)</p>
                </div>
                <div className="pricing__table-data-title">
                  <h4>Balayage</h4>
                </div>
                <div className="pricing__table-data">
                  <p>Express</p>
                  <p>Colour, Toner & Natural Dry</p>
                  <p>from £145</p>
                </div>
                <div className="pricing__table-data">
                  <p>Luxury</p>
                  <p>Colour, Toner, Cut & Finish</p>
                  <p>from £195</p>
                </div>
                <div className="pricing__table-data-title">
                  <h4>Bleach Roots</h4>
                </div>
                <div className="pricing__table-data">
                  <p>FROM £65</p>
                </div>
              </Col>
              <Col md="4">
                <div className="pricing__table-data-title">
                  <h4>Toner</h4>
                </div>
                <div className="pricing__table-data">
                  <p className="fwn">Short / Long</p>
                  <p>£22 / £32</p>
                </div>
                <div className="pricing__table-data-title">
                  <h4>Perming</h4>
                </div>
                <div className="pricing__table-data">
                  <p className="fwn">Price on consultation only</p>
                  <p>Short / Long</p>
                  <p>from £95 / £125</p>
                </div>
                <div className="pricing__table-data-title">
                  <h4>BRAZILIAN BLOW DRY</h4>
                </div>
                <div className="pricing__table-data">
                  <p className="fwn">SHORT / LONG</p>
                  <p>FROM £105 / £135</p>
                </div>
                <div className="pricing__table-data-title">
                  <h4>OWAY ORGANIC TREATMENT</h4>
                </div>
                <div className="pricing__table-data">
                  <p>FROM £20</p>
                </div>
                <div className="pricing__table-data pricing__table-end pt-4">
                  <p>
                    ALL COLOUR SERVICES REQUIRE A COMPLIMENTARY CONSULTATION AND
                    A SKIN TEST AT LEAST 48 HOURS PRIOR TO THE APPOINTMENT –
                    PLEASE CALL US IN ADVANCE IN ORDER TO BOOK THIS.
                  </p>
                  <a className="btn btn-primary mt-4" href="tel:01202690009">
                    Call 01202 690009
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Section>
        <Section bg="dark-green">
          <div className="text-center">
            <h2>YOUR SPECIAL DAY.</h2>
            <p>
              We offer a bespoke salon experience for your special day. You &
              your bridal party can enjoy the privacy of the salon, accompanied
              by complimentary pastries & bubbly.
            </p>
            <Link href="/contact-us">
              <a className="btn btn-secondary">Make an enquiry</a>
            </Link>
          </div>
        </Section>
        <SplitCTA
          bgImg="/images/cta/services/1st.jpg"
          altText="Our sign from the shop"
          bg="light-pink"
        >
          <h2>Opening Hours.</h2>
          <ul>
            <li>Monday: CLOSED - EDUCATION DAY</li>
            <li>Tuesday: 09:00 - 17:30</li>
            <li>Wednesday: 09:00 - 17:30</li>
            <li>Thursday: 09:00 - 17:30</li>
            <li>Friday: 09:00 - 17:30</li>
            <li>Saturday: 08:00 - 16:30</li>
            <li>Sunday: CLOSED</li>
          </ul>
          <Link href="/contact-us">
            <a className="btn btn-primary">Book appointment</a>
          </Link>
        </SplitCTA>
      </main>
    </>
  );
};

export default Pricing;
