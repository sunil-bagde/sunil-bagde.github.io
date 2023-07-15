import React from "react";
import Head from "next/head";

export default ({ title, description, image, url }) => (
  <Head>
    <meta name="twitter:site" content="@sunil-bagde" />
    <meta
      name="twitter:card"
      content={image ? "summary_large_image" : "summary"}
    />
    {title && <meta name="og:title" content={title} />}
    {url && <meta name="og:url" content={url} />}
    {description && <meta name="description" content={description} />}
    {description && <meta name="og:description" content={description} />}
    <meta
      name="og:image"
      content={`https://sunil-bagde.github.io/img/me.jpg`}
    />
  </Head>
);
