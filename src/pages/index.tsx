import clsx from "clsx";
// import Link from "@docusaurus/Link";
import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Features from "../components/HomePage/Features";
import Courses from "../components/HomePage/Courses";
import { featuresData, coursesData } from "../database/home";
import Header from "../components/HomePage/Header";
import Tweet from "../components/Tweet";
import Tweets, { type TweetItem } from "../data/tweets";

function TweetsSection(): React.JSX.Element {
  const tweetColumns: TweetItem[][] = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3]!.push(tweet)
  );

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="tweets-container">
        <div className={styles.home__divider}>
          <Heading
            as="h2"
            className={clsx("text--center")}
          >
            Loved by many Users
          </Heading>
        </div>
        <div className={clsx("row", styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home(): React.JSX.Element {
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

        <div className={styles.home__divider}>
          <Heading as="h2">Courses Available</Heading>
        </div>

        <Courses courses={coursesData} />

        <div className={styles.home__divider}>
          <Heading as="h2">Features of {siteConfig.title}</Heading>
        </div>

        <Features features={featuresData} />

        <TweetsSection />
      </main>
    </Layout>
  );
}
