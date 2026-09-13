import clsx from "clsx";
import style from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import Heading from "@theme/Heading";
import Head from "@docusaurus/Head";
import Header from "../components/HomePage/Header";
import ResourcesSection from "../components/HomePage/ResourcesSection";
import ScrollTopToButton from "../components/Buttons/bottom/ScrollTopToButton";
import ScrollBottomToTop from "../components/Buttons/top/ScrollBottomToTop";
import { LandingCommunity } from "../components/HomePage/Community";
import { CommunityStatsProvider } from "../context/CommunityStats";
// import Faq from "./Faq";
import Organizations from "../components/HomePage/organizations";
import TweetsSection from "../components/HomePage/TweetsSection";
import WhyChooseCodeHarbor from "../components/HomePage/WhyChooseCodeHarbor";
import ContributorList from "../components/ContributorList";
import AntiAdBlock from "../components/AntiAdBlock";
import FinalCTA from "../components/HomePage/FinalCTA";

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
        <AntiAdBlock />
        <div className={style.home__header}>
          <Header />
        </div>

        <hr className={style.home__hr} />

        <WhyChooseCodeHarbor />

        <hr className={style.home__hr} />

        <ResourcesSection />

        <hr className={style.home__hr} />

        <CommunityStatsProvider>
          <LandingCommunity className="codeharborhub" />
        </CommunityStatsProvider>

        <hr className={style.home__hr} />

        <Organizations />

        <hr className={style.home__hr} />

        <TweetsSection />

        <hr className={style.home__hr} />

        {/* <div className={style.home__divider}>
          <Heading as="h2" className={clsx("text--center", style.mainHeading)}>
            Frequently Asked Questions
          </Heading>
        </div>

        <Faq /> */}
        
        <ContributorList
          contributorsPerPage={150}
          contributorsIgnore={[
            "restyled-commits",
            "dependabot",
            "renovate",
            "deepsource-autofix",
            "ImgBotApp",
          ]}
        />

<hr className={style.home__hr} />

        <FinalCTA />

        <ScrollTopToButton />
        <ScrollBottomToTop />
      </main>
    </Layout>
  );
}
