import clsx from "clsx";
import React from "react";
import style from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Head from "@docusaurus/Head";
import Header from "../components/HomePage/Header";
import ResourcesSection from "../components/HomePage/ResourcesSection";
import ScrollTopToButton from "../components/Buttons/bottom/ScrollTopToButton";
import ScrollBottomToTop from "../components/Buttons/top/ScrollBottomToTop";
import { LandingCommunity } from "../components/HomePage/Community";
import { CommunityStatsProvider } from "../context/CommunityStats";
import Faq from "./Faq";
import Organizations from "../components/HomePage/organizations";
import TweetsSection from "../components/HomePage/TweetsSection";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
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
      <main className={style.main__home}>
        <div className={style.home__header}>
          <Header />
        </div>

        <hr className={style.home__hr} />

        <div>
          <ResourcesSection />
        </div>

        <hr className={style.home__hr} />

        <CommunityStatsProvider>
          <LandingCommunity className="codeharborhub" />
        </CommunityStatsProvider>

        <hr className={style.home__hr} />

        <div className={style.home__divider}>
          <Heading as="h2" className={clsx("text--center")}>
            Our GitHub Organizations
          </Heading>
        </div>
        <Organizations />

        <hr className={style.home__hr} />

        <TweetsSection />

        <hr className={style.home__hr} />

        <div className={style.home__divider}>
          <Heading as="h2" className={clsx("text--center", style.mainHeading)}>
            Frequently Asked Questions
          </Heading>
        </div>

        <Faq />

        <ScrollTopToButton />
        <ScrollBottomToTop />
      </main>
    </Layout>
  );
}
