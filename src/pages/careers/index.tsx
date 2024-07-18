import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CareerPage from "../../components/CareerPage";

export default function Careers() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Careers from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub. Build your career in tech. Find the best opportunities in software engineering, data science, web development, and more."
    >
        <CareerPage />
    </Layout>
  );
}
