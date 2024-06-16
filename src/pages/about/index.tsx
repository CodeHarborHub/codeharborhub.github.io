import Layout from "@theme/Layout";
import AboutUsSection from "../../components/Aboutpage";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from "react";

export default function About() {
    const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`About | ${siteConfig.title}`}
      description="Learn more about Code Harbor Hub and our mission to provide accessible and comprehensive educational resources to learners of all levels."
    >
      <AboutUsSection />
    </Layout>
  );
}
