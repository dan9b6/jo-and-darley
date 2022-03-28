import Banner from "../components/banner";
import Section from "../components/section";
import CTA from "../components/cta/default";
import SplitCTA from "../components/cta/split";
import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Education = () => {
  return (
    <main>
      <Banner title="Education" bgImg="/images/banner/education-banner.jpg" />
      <Section>
        <div className="education__section">
          <div className="education__header">
            <h2>
              Foundations of Cutting - <i>Course</i>
            </h2>
            <h3>1 Day Course</h3>
            <h4>
              An introduction to creating any haircut – beginner level &amp;
              above
            </h4>
          </div>
          <Row>
            <Col lg="6" className="mb-4">
              <h5>
                <strong>Day 1:</strong>
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
                  followed by guidance &amp; mentoring of your chosen hair style
                  on a model.
                </li>
              </ul>
            </Col>
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
                  How to change shapes using a combination of cutting techniques
                </li>
                <li>
                  Problem solving with different hair growth patterns, head
                  shapes &amp; hair texture (curly, afro)
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
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
            <Col md="6" className="mb-4">
              <h5>
                <strong>The Investment:</strong>
              </h5>
              <ul className="custom-list">
                <li>£250.00 (including VAT)</li>
              </ul>
              <Link href="/contact">
                <a className="btn btn-primary">Enquiry Now</a>
              </Link>
            </Col>
          </Row>
        </div>
      </Section>
      <div className="education__heading">
        <h2>“a natural, concise way of learning to cut hair”</h2>
      </div>
      <SplitCTA bgImg="/images/cta/6.jpg">
        <div>
          <h2>General Course Details</h2>
          <p>
            All our courses will be held on Mondays in our spacious salon near
            Wimborne, Dorset.
          </p>
          <p>
            Our courses will commence at 9:00am and finish approximately at
            5:00pm.
          </p>
          <p>The start date of your course will be arranged upon booking.</p>
          <p>
            If you are a salon owner &amp; require bespoke learning for your
            team, please{" "}
            <Link href="/contact">
              <a className="link">get in touch for a quote.</a>
            </Link>
          </p>
        </div>
      </SplitCTA>
    </main>
  );
};

export default Education;
