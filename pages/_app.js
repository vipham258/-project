/**
 *  @fileOverview Auto use by next js,This class hold the css for the hold project, also using Hook for cheeseDataProvider
 *  @author       Vi Thi Phuong Pham
 */
import App from "next/app";

import { CheeseDataProvider } from "../hooks/useCheeseData";

import "normalize.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

//MyApp class for the whole project
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
