import Banner from "../components/banner";
import Section from "../components/section";
import SplitCTA from "../components/cta/split";
import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Head from "next/head";

const Education = () => {
  return (
    <>
      <Head>
        <title>Education | Jo Darley & Co</title>
        <meta name="title" content="Education | Jo Darley & Co" />
        <meta
          name="description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Education | Jo Darley & Co" />
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
        <meta property="twitter:title" content="Education | Jo Darley & Co" />
        <meta
          property="twitter:description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <main className="education">
        <Banner title="Education" bgImg="/images/banner/education.jpg" />
        <div className="education__heading">
          <h2>“a natural, concise way of learning to cut hair”</h2>
        </div>
        <Section bg="pink">
          <div className="education__section">
            <div className="education__header">
              <h2>Foundations of Cutting</h2>
              <h3>1 Day Course</h3>
              <h4>
                An introduction to creating any haircut – beginner level &amp;
                above
              </h4>
            </div>
            <Row>
              <Col lg="6" className="mb-4">
                <h5>
                  <strong>The Day:</strong>
                </h5>
                <ul className="custom-list">
                  <li>
                    Jo will provide theoretical insight into the methods of
                    cutting baselines, graduation &amp; layering.
                  </li>
                  <li>
                    Combining the correct sectioning, cutting angles &amp;
                    standing positions, to produce any desired hairstyle on any
                    head shape.
                  </li>
                  <li>
                    A practical demonstration of Jo’s method &amp; techniques,
                    followed by guidance &amp; mentoring of your chosen hair
                    style on a model.
                  </li>
                </ul>
              </Col>

              <Col md="6" className="mb-4">
                <h5>
                  <strong>The Requirements:</strong>
                </h5>
                <ul className="custom-list">
                  <li>Scissors</li>
                  <li>Cutting combs</li>
                  <li>Section grips</li>
                  <li>Brushes for styling</li>
                  <li>Hair dryer </li>
                  <li>Your own model or a block if you’d prefer</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col lg="6" className="mb-4">
                <h5>
                  <strong>The Learning:</strong>
                </h5>
                <ul className="custom-list">
                  <li>
                    Personal guidance, monitoring &amp; theoretical knowledge
                  </li>
                  <li>Equipment handling, standing positions &amp; posture</li>
                  <li>Step by step of sectioning methods &amp; sub-partings</li>
                  <li>
                    Understanding cutting angles for layering &amp; graduation
                  </li>
                  <li>
                    How to change shapes using a combination of cutting
                    techniques
                  </li>
                  <li>
                    Problem solving with different hair growth patterns, head
                    shapes &amp; hair texture (curly, afro)
                  </li>
                </ul>
              </Col>

              <Col md="6" className="mb-4">
                <h5>
                  <strong>The Investment:</strong>
                </h5>
                <ul className="custom-list">
                  <li>£250.00 (including VAT)</li>
                </ul>
                <Link href="/contact-us">
                  <a className="btn btn-primary">Enquire Now</a>
                </Link>
              </Col>
            </Row>
          </div>
        </Section>
        <SplitCTA
          bgImg="/images/cta/education/1st.jpg"
          bg="light-pink"
          altText="tiger print painting"
        >
          <div>
            <h2>General Course Details</h2>
            <p>
              Courses will be held on Mondays in our spacious salon near
              Wimborne, Dorset.
            </p>
            <p>Courses will start at 9:00 and finish at approx. 17:00.</p>
            <p>Course dates will be arranged with you upon booking</p>
            <p>
              If you are a salon owner & require bespoke learning for your team,
              please{" "}
              <Link href="/contact-us">
                <a className="link">get in touch for a quote.</a>
              </Link>
            </p>
          </div>
        </SplitCTA>
      </main>
    </>
  );
};

export default Education;
