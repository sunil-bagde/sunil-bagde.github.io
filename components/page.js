import React from "react";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";

import config from "../site.config";

Router.onRouteChangeStart = url => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Page({ title, description, children }) {
  return (
    <div>
      <Head>
        <title>{title || "Sunil Bagde - Web Developer & Writer"}</title>
        {description !== false && (
          <meta
            name="description"
            content={description || config.siteDescription}
          />
        )}
      </Head>
      <div className="flex flex-col min-h-full">{children}</div>
    </div>
  );
}

export default Page;
