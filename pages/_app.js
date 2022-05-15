import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";

function test({ Component, pageProps, reduxStore }) {
  return (
    <Provider store={reduxStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default withReduxStore(test);
