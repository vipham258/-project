/**
 *  @fileOverview Auto use by next.js, Set background Color the whole application
 *  @author       Vi Thi Phuong Pham
 */
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  //set the background Color
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
