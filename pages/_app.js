import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import "aos/dist/aos.css";

import { useEffect } from "react";
import AOS from "aos";

import Head from "next/head";

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#144941" />
        <meta name="msapplication-TileColor" content="#144941" />
        <meta name="theme-color" content="#144941"></meta>
      </Head>
      <Navigation />
      <Modal />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
