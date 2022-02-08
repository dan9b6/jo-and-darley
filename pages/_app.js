import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";

// Components
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
