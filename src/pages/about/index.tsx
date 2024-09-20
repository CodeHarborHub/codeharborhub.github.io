import Layout from "@theme/Layout";
import AboutUsSection from "../../components/Aboutpage";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from "react";
import Head from "@docusaurus/Head";

export default function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`About | ${siteConfig.title}`}
      description="Learn more about Code Harbor Hub and our mission to provide accessible and comprehensive educational resources to learners of all levels."
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
      <AboutUsSection />
    </Layout>
  );
}
