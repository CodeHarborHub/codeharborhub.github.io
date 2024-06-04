import clsx from "clsx";
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
import { motion } from "framer-motion";
import { FaArrowDown, FaArrowUp } from "react-icons/fa"; 
import ScrollToTopButton from "../components/Buttons/bottom/ScrollToBottomButton";
import ScrollToBottomButton from "../components/Buttons/top/ScrollToTopButton";

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
  const [showScrollButton, setShowScrollButton] = useState(true);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setShowScrollButton(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowScrollButton(false); // Optional: Hide button after scrolling
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowScrollButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
        </motion.div>

        <TweetsSection />
        {showScrollButton && (
          <button
            onClick={scrollToBottom}
            className={styles.scrollToBottomButton}
          >
            <FaArrowDown />
          </button>
        )}
        {showScrollButton && ( // Conditionally render the button
          <button onClick={scrollToTop} className={styles.scrollToTopButton}>
            <FaArrowUp />
          </button>
        )}
      </main>
    </Layout>
  );
}
