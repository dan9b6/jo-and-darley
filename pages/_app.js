import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

// Components
import Navigation from "../components/Navigation";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
