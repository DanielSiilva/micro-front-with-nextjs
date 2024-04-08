import React from "react";
import { Provider } from "react-redux";
import dynamic from "next/dynamic";

const Store = dynamic(() => import("shell/store"), {
  ssr: false,
  loading: () => <div> Carregando..</div>,
});

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      {(store) => (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )}
    </Store>
  );
}

export default MyApp;
