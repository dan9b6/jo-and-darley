import Banner from "../components/banner";
import SplitCTA from "../components/cta/split";
import Head from "next/head";

const Policies = () => {
  return (
    <>
      <Head>
        <title>Policies | Jo Darley & Co</title>
        <meta name="title" content="Policies - Jo Darley & Co" />
        <meta
          name="description"
          content="Read our salon policies, including skin testing and cancellation information, before your appointment at Jo Darley & Co."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.jodarleyandco.com/policies"
        />
        <meta property="og:title" content="Policies | Jo Darley & Co" />
        <meta
          property="og:description"
          content="Read our salon policies, including skin testing and cancellation information, before your appointment at Jo Darley & Co."
        />
        <meta
          property="og:image"
          content="https://www.jodarleyandco.com/images/cta/index/1st.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.jodarleyandco.com/policies"
        />
        <meta property="twitter:title" content="Policies | Jo Darley & Co" />
        <meta
          property="twitter:description"
          content="Read our salon policies, including skin testing and cancellation information, before your appointment at Jo Darley & Co."
        />
        <meta
          property="twitter:image"
          content="https://www.jodarleyandco.com/images/cta/index/1st.jpg"
        />
      </Head>

      <main>
        <Banner title="Policies" bgImg="/images/banner/services.jpg" />

        <SplitCTA
          bgImg="/images/cta/index/1st.jpg"
          altText="hair colour consultation"
        >
          <h2>Our Skin Testing Policy</h2>
          <p>
            To ensure we meet legal and health and safety requirements, we need
            to perform a quick skin test at least 48 hours before your colour
            appointment.
          </p>
          <p>
            The test is free, takes just a few minutes, and can be done during
            your consultation. We can’t carry out colour services without it, so
            please make sure to schedule this test in advance.
          </p>
        </SplitCTA>

        <SplitCTA
          bgImg="/images/cta/index/2nd.jpg"
          altText="salon interior"
          reverse
          bg="light-pink"
        >
          <h2>Our Cancellation Policy</h2>
          <p>
            We kindly ask that you let us know at least 48 hours in advance if
            you need to cancel or reschedule your appointment.
          </p>
          <p>
            Our stylists&apos; time is precious, and with enough notice, we can
            offer the slot to another client who is waiting. Please note that
            cancellations or reschedules within 48 hours of the appointment will
            incur a 50% charge.
          </p>
          <p>
            If you have any questions, please feel free to give us a call.
            We&apos;re happy to help!
          </p>
        </SplitCTA>
      </main>
    </>
  );
};

export default Policies;
