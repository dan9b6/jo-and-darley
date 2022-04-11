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
        <meta name="title" content="Jo Darley & Co" />
        <meta
          name="description"
          content="Our spacious, boutique salon & team of cutting & colour specialists provide the highest quality of hairdressing. We pride ourselves on client experience & exclusively use luxury organic colour & haircare. Located on the South Coast near Wimborne, Dorset - a short drive from Poole & Bournemouth."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Jo Darley & Co" />
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
        <meta property="twitter:title" content="Jo Darley & Co" />
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
        <Banner title="Privacy Policy" />
        <Section>
          <Container>
            <h4>The type of personal information we collect</h4>
            <p className="mb-5">
              Our website collects your IP address and passes this information
              to Google Analytics so that we can monitor how our website is
              being used. Google uses your IP address in order to provide us
              with general information about use of our website and also to
              enable it to personalise advertisements on its own advertising
              network. Google may share this information with other Google
              services. The data we receive from Google Analytics allows us to
              make improvements to our website.
            </p>
            <h4>How we use your personal information</h4>
            <p className="mb-5">
              We use the data collected by our website to monitor trends by
              using analytics tools produced by Google which enable us to
              monitor how our website is being used so that we can operate our
              business more effectively.
            </p>
            <h4>Reasons for processing your personal information</h4>
            <p className="mb-5">
              Collecting your IP address and passing this to Google Analytics so
              that we can improve our website is in our “legitimate interests”.
              This is the “lawful basis” we rely on under the data protection
              legislation to process this personal information.
            </p>
            <h4>Transfer of personal data</h4>
            <p className="mb-5">
              We will not actively send your data outside the EU but Google may
              do this. Google subscribes to the EU-US Privacy Shield framework
              which means that it has agreed to work with the appropriate
              regulatory authorities to resolve any complaints regarding the
              transfer of personal data where these complaints cannot be
              resolved directly. Organisations subscribing to the EU-US Privacy
              Shield framework (eg. Gmail, Dropbox, Mailchimp) are considered to
              be permitted destinations for personal data by the EU.
            </p>
            <h4>How long we keep personal data</h4>
            <p className="mb-5">
              We will retain your IP address for 90 days after which time it is
              automatically removed.
            </p>
            <h4>Questions and concerns</h4>
            <p className="mb-5">
              If you have any questions or concerns about our use of your
              personal information, please let us know by sending an email to{" "}
              <a href="mailto: danbh7296@gmail.com">...@....com</a>. You may
              raise any concerns or obtain more information from the{" "}
              <a href="https://ico.org.uk/" target="_blank">
                Information Commissioner’s Office (ICO)
              </a>
              .
            </p>
            <h4>Your data protection rights</h4>
            <p>Under data protection law, you have rights including:</p>
            <p>
              <strong>Your right of access</strong> - You have the right to ask
              us for copies of your personal information.
            </p>
            <p>
              <strong>Your right to rectification</strong> - You have the right
              to ask us to rectify personal information you think is inaccurate.
              You also have the right to ask us to complete information you
              think is incomplete.
            </p>
            <p>
              <strong>Your right to erasure</strong> - You have the right to ask
              us to erase your personal information in certain circumstances.
            </p>
            <p>
              <strong>Your right to restriction of processing</strong> - You
              have the right to ask us to restrict the processing of your
              personal information in certain circumstances.
            </p>
            <p>
              <strong>Your right to object to processing</strong> - You have the
              the right to object to the processing of your personal information
              in certain circumstances.
            </p>
            <p>
              <strong>Your right to data portability</strong> - You have the
              right to ask that we transfer the personal information you gave us
              to another organisation, or to you, in certain circumstances.
            </p>
            <p>
              You are not required to pay any charge for exercising your rights.
              If you make a request, we have one month to respond to you.
            </p>
            <p>
              Please contact us at{" "}
              <a href="mailto:danbh7296@gmail.com">...@....com</a> if you wish
              to make a request.
            </p>
            <p>
              <strong>How to complain</strong>
            </p>
            <p>
              If you have any concerns about our use of your personal
              information, you can make a complaint to us at{" "}
              <a href="mailto:danbh7296@gmail.com">...@....com</a>.
            </p>
            <p>
              You can also complain to the ICO if you are unhappy with how we
              have used your data.
            </p>
            <p>
              The ICO’s address: Information Commissioner’s Office, Wycliffe
              House, Water Lanek, Wilmslow, Cheshire, SK9 5AF
            </p>
            <p>Helpline number: 0303 123 1113</p>
            <p>
              ICO website:{" "}
              <a href="https://www.ico.org.uk">https://www.ico.org.uk</a>
            </p>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
