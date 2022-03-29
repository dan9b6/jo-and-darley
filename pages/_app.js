import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "../styles/main.css";

import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/footer";
import Modal from "../components/modal";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Modal />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
