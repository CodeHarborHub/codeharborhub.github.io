// import clsx from "clsx";
// import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import OurInstructors from "@site/src/components/OurInstructors";
// import GiscusComponent from "@site/src/components/GiscusComponent";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Features from "../components/HomePage/Features";
import Courses from "../components/HomePage/Courses";
import { featuresData, coursesData } from "../database/home";
import Header from "../components/HomePage/Header";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
    >
      <main>
        <div className={styles.home__header}>
          <Header />
        </div>

        <hr className={styles.home__hr} />

        <div className={styles.home__divider}>
          <Heading as="h2">Courses Available</Heading>
        </div>

        <Courses courses={coursesData} />

        <div className={styles.home__divider}>
          <Heading as="h2">Features of CodeHarborHub</Heading>
        </div>

        <Features features={featuresData} />

        {/* 
        <div className={styles.home__divider}>
          <Heading as="h2">Join the Discussion</Heading>
        </div> */}

        {/* <div>
          <GiscusComponent />
        </div> */}
      </main>
    </Layout>
  );
}
