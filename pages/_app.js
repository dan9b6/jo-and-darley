import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

import Head from "next/head";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
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
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
