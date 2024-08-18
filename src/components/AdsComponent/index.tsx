import React from "react";
import Head from "@docusaurus/Head";

const AdsComponent = () => {
  return (
    <Head>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
        crossOrigin="anonymous"
      />
      <script
        async
        custom-element="amp-auto-ads"
        src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
      />
      <meta name="google-adsense-account" content="ca-pub-5832817025080991" />
    </Head>
  );
};

export default AdsComponent;
