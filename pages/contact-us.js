import Banner from "../components/banner";
import SendGridForm from "../components/sendgrid-form";
import Section from "../components/section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Head from "next/head";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Jo Darley & Co</title>
        <meta name="title" content="Contact Us - Jo Darley & Co" />
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
        <Banner title="Contact" bgImg="/images/banner/contact.jpg" />
        <Section bg="light-pink">
          <div className="contact">
            <Row>
              <Col xs="12" lg="9">
                <div className="form">
                  <h2>Contact Us</h2>
                  <p className="mb-4">
                    To arrange a complimentary consultation, make a booking or
                    for any other enquiries, please get in touch…
                  </p>
                  <SendGridForm />
                </div>
              </Col>
              <Col xs="12" lg="3" className="subsection">
                <Row>
                  <Col sm="6" lg="12" className="mb-md-5">
                    <h4>Opening Hours:</h4>
                    <ul>
                      <li>Monday: CLOSED - EDUCATION DAY</li>
                      <li>Tuesday: 09:00 - 17:30</li>
                      <li>Wednesday: 09:00 - 17:30</li>
                      <li>Thursday: 09:00 - 17:30</li>
                      <li>Friday: 09:00 - 17:30</li>
                      <li>Saturday: 08:00 - 16:30</li>
                      <li>Sunday: CLOSED</li>
                    </ul>
                  </Col>
                  <Col sm="6" lg="12">
                    <h4>Location:</h4>
                    <ul>
                      <li>2 & 3 Albert Parade</li>
                      <li>147b Wareham Road</li>
                      <li>Corfe Mullen</li>
                      <li>Dorset</li>
                      <li>BH21 3LA</li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Section>
      </main>
    </>
  );
};

export default ContactUs;
