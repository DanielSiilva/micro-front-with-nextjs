import Nav from "../components/nav";
import "../styles/globals.css";

import { Provider } from "react-redux";
import store from "../features/cart/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
