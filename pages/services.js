import React from "react";
import Banner from "../components/banner";
import CTA from "../components/cta/default";
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
        <meta name="title" content="Services | Jo Darley & Co" />
        <meta
          name="description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Services | Jo Darley & Co" />
        <meta
          property="og:description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Services | Jo Darley & Co" />
        <meta
          property="twitter:description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <main>
        <Banner title="Services" bgImg="/images/banner/services-banner.jpg" />
        <Section bg="pink">
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
        <Section bg="light-pink">
          <div className="text-center">
            <h2>Make your special day more special.</h2>
            <p>
              We offer a bespoke salon experience for your special day. You &
              your bridal party can enjoy the privacy of the salon, accompanied
              by complimentary pastries & bubbly.
            </p>
            <Link href="/contact">
              <a className="btn btn-primary">Make an enquiry</a>
            </Link>
          </div>
        </Section>
        <SplitCTA
          bgImg="/images/cta/outside-sign.jpg"
          altText="Our sign from the shop"
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
          <Link href="/contact">
            <a className="btn btn-primary">Book appointment</a>
          </Link>
        </SplitCTA>
      </main>
    </>
  );
};

export default Pricing;
