import clsx from "clsx";
import React, { useState } from "react";
import style from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Head from "@docusaurus/Head";
import Header from "../components/HomePage/Header";
import Tweet from "../components/Tweet";
import Tweets from "../data/tweets";
import { motion } from "framer-motion";
import ResourcesSection from "../components/HomePage/ResourcesSection";
import ScrollTopToButton from "../components/Buttons/bottom/ScrollTopToButton";
import ScrollBottomToTop from "../components/Buttons/top/ScrollBottomToTop";
import { LandingCommunity } from "../components/HomePage/Community";
import { CommunityStatsProvider } from "../context/CommunityStats";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import RateUsPopup from "../components/RateUsPopup/RateUsPopup";
function TweetsSection() {
  const [showRateUsPopup, setShowRateUsPopup] = useState(false);
  const tweetColumns = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3].push(tweet)
  );

  return (
    <div className={clsx(style.section, style.sectionAlt)}>
      <div className="tweets-container">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
          className={style.home__divider}
        >
          <Heading as="h2" className={clsx("text--center")}>
            Loved by many Users
          </Heading>
        </motion.div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{ delay: 2000 }}
          loop={true}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className={style.tweetsSwiper}
        >
          {tweetColumns.map((tweetItems, columnIndex) =>
            tweetItems.map((tweet, tweetIndex) => (
              <SwiperSlide key={`${columnIndex}-${tweetIndex}`}>
                <div className={clsx(style.tweetContainer)}>
                  <div className={clsx(style.tweetContent)}>
                    <Tweet {...tweet} />
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
        <button
          className={clsx(style.rateUsButton)}
          onClick={() => setShowRateUsPopup(true)}
        >
          Rate Us
        </button>
        {showRateUsPopup && (
          <RateUsPopup onClose={() => setShowRateUsPopup(false)} />
        )}
      </div>
    </div>
  );
}

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
        ></script>
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        ></script>
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

        <TweetsSection />

        <ScrollTopToButton />
        <ScrollBottomToTop />
      </main>
    </Layout>
  );
}
