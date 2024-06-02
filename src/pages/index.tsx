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
import { motion } from "framer-motion";
import Testimonials from "./Testimonials/App";
/**
 * Home component renders the main homepage layout of the website.
 * It includes the header, courses, features, and testimonials sections.
 * @returns {React.JSX.Element} The rendered Home component.
 */
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
          <Heading as="h2">Loved by many Users</Heading>
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
        <Testimonials/>
        </motion.div>
      </main>
    </Layout>
  );
}
