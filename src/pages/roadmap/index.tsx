import React from "react";
import Layout from "@theme/Layout";
import Roadmaps from "../../components/Roadmap";
import Head from "@docusaurus/Head";

export default function RoadMap() {
  return (
    <Layout title={"RoadMap for Learning"} description="RoadMap for Learning">
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
      <main>
        <Roadmaps />
      </main>
    </Layout>
  );
}
