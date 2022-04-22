import React from "react";
import Container from "react-bootstrap/Container";
import Banner from "../components/banner";
import Section from "../components/section";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Jo Darley & Co</title>
        <meta name="title" content="Privacy - Jo Darley & Co" />
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
        <Banner title="Privacy Policy" bgImg="images/banner/index.jpg" />
        <Section>
          <Container>
            <div>
              <p className="mb-4">
                This Privacy Policy describes how your personal information is
                collected, used, and shared when you visit{" "}
                <a href="www.jodarleyandco.com">www.jodarleyandco</a>.
              </p>
              <h2>PERSONAL INFORMATION WE COLLECT</h2>
              <p>
                When you visit the Site, we automatically collect certain
                information about your device, including information about your
                web browser, IP address, time zone, and some of the cookies that
                are installed on your device. Additionally, as you browse the
                Site, we collect information about the individual web pages or
                products that you view, what websites or search terms referred
                you to the Site, and information about how you interact with the
                Site. We refer to this automatically-collected information as
                "Device Information."
              </p>
              <p>
                We collect Device Information using the following technologies:
              </p>
              <ul className="custom-list mb-4">
                <li>
                  “Cookies” are data files that are placed on your device or
                  computer and often include an anonymous unique identifier. For
                  more information about cookies, and how to disable cookies,
                  visit{" "}
                  <a href="http://www.allaboutcookies.org">
                    http://www.allaboutcookies.org
                  </a>
                </li>
                <li>
                  “Log files” track actions occurring on the Site, and collect
                  data including your IP address, browser type, Internet service
                  provider, referring/exit pages, and date/time stamps. - “Web
                  beacons,” “tags,” and “pixels” are electronic files used to
                  record information about how you browse the Site.
                </li>
              </ul>
              <h2>HOW DO WE USE YOUR PERSONAL INFORMATION?</h2>
              <p>
                We only use your device information to improve our service and
                help us reach more people (for example, by generating analytics
                about how our customers browse and interact with the Site, and
                to assess the success of our marketing and advertising
                campaigns). Should you contact us we only use your contact
                information to reply to you and provide you with any information
                or help that we can.
              </p>
              <p>
                Finally, we may also share your Personal Information to comply
                with applicable laws and regulations, to respond to a subpoena,
                search warrant or other lawful request for information we
                receive, or to otherwise protect our rights.
              </p>
              <p>
                <b>DO NOT TRACK</b>
              </p>
              <p>
                Please note that we do not alter our Site’s data collection and
                use practices when we see a Do Not Track signal from your
                browser.
              </p>
              <p>
                <b>YOUR RIGHTS</b>
              </p>
              <p>
                If you are a European resident, you have the right to access
                personal information we hold about you and to ask that your
                personal information be corrected, updated, or deleted. If you
                would like to exercise this right, please contact us through the
                contact information below.
              </p>
              <p>
                <b>CHANGES</b>
              </p>
              <p>
                We may update this privacy policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal or regulatory reasons.
              </p>
              <p>
                <b>CONTACT US</b>
              </p>
              <p>
                For more information about our privacy practices, if you have
                questions, or if you would like to make a complaint, please
                contact us by e-mail at{" "}
                <a href="mailto:hair@jodarleyandco.com">
                  hair@jodarleyandco.com
                </a>{" "}
                or by mail using the details provided below:
              </p>
              <ul>
                <li>2 & 3 ALBERT PARADE,</li>
                <li>147B WAREHAM ROAD,</li>
                <li>CORFE MULLEN,</li>
                <li>BH21 3LA</li>
              </ul>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
