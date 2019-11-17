import Document, { Head, Main, NextScript } from "next/document";

import "normalize.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head></Head>
        <body style={{ backgroundColor: "#30404d" }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
