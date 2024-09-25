import React from "react";
import "./style.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import blogs from "../../database/blogs";
import Head from "@docusaurus/Head";

export default function Blogs(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Blogs from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub Bloge. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
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
      <section className="blog-page margin-top--lg margin-bottom--lg">
        <div className="blog-header">
          <h1 className="TitleText">Welcome to CodeHarborHub Blogs </h1>
          <p className="SubTitleText">
            Learn the basics to advanced concepts of web development. html, css,
            javascript, react, node.js, dsa, and more.
          </p>
        </div>
        <div className="card-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="card">
              <img src={blog.image} alt={blog.title} />
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <Link to={`/blog/${blog.slug}`} className="read-more">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
