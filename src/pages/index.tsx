import clsx from "clsx";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
// import Features from "../components/HomePage/Features";
// import Courses from "../components/HomePage/Courses";
// import { featuresData, coursesData } from "../database/home";
import Header from "../components/HomePage/Header";
import Tweet from "../components/Tweet";
import Tweets, { type TweetItem } from "../data/tweets";
import { motion } from "framer-motion";
import ResourcesSection from "../components/HomePage/ResourcesSection";
import ScrollTopToButton from "../components/Buttons/bottom/ScrollTopToButton";
import ScrollBottomToTop from "../components/Buttons/top/ScrollBottomToTop";

function TweetsSection() {
  const tweetColumns = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3].push(tweet)
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
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
          className={styles.home__divider}
        >
          <Heading as="h2" className={clsx("text--center")}>
            Loved by many Users
          </Heading>
        </motion.div>
        <div className={clsx("row", styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 100,
                delay: 0.3,
              }}
              className="col col--4"
              key={i}
            >
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
              ))}
            </motion.div>
          ))}
        </div>
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
      <main className={styles.main__home}>
        <div className={styles.home__header}>
          <Header />
        </div>

        <hr className={styles.home__hr} />

        {/* <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
          className={styles.home__divider}
        >
          <Heading as="h2">Courses Available</Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
        >
          <Courses courses={coursesData} />
        </motion.div>

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
          className={styles.home__divider}
        >
          <Heading as="h2">Features of {siteConfig.title}</Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
        >
        <Features features={featuresData} />
        </motion.div> */}

        <div>
          <ResourcesSection />
        </div>

        <TweetsSection />

        <ScrollTopToButton />
        <ScrollBottomToTop />
      </main>
    </Layout>
  );
}