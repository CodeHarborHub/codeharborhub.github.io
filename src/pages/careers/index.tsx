import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CareerPage from "../../components/CareerPage";
import Head from "@docusaurus/Head";

export default function Careers() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Careers from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub. Build your career in tech. Find the best opportunities in software engineering, data science, web development, and more."
    >
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
        <CareerPage />
    </Layout>
  );
}
