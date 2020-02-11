import Document, { Head, Main, NextScript } from "next/document";

class PersonalSite extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {/*<link rel="alternate" type="application/rss+xml" href="/feed.xml" />*/}
        </Head>
        <body className="font-sans text-black leading-tight antialiased">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default PersonalSite;
