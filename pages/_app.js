import React from "react";
import App from "next/app";
import "../public/css/main.css";
import "../public/css/nprogress.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}
