import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Careers = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Careers from ${siteConfig.title}`}
      description="Explore career opportunities with CodeHarborHub."
    >
      <div>Careers</div>
    </Layout>
  );
};

export default Careers;
