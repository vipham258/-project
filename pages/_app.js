import App from "next/app";

import { CheeseDataProvider } from "../hooks/useCheeseData";

import "normalize.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CheeseDataProvider>
        <Component {...pageProps} />
      </CheeseDataProvider>
    );
  }
}

export default MyApp;
