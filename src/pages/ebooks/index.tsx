import React from "react";
import "./style.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import books from "../../database/ebooks";
import Head from "@docusaurus/Head";

export default function Books() {
  // Books component
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Blogs from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub Blog. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
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
          <h1 className="TitleText">Welcome to CodeHarborHub E-Books </h1>
          <p className="SubTitleText">
            Learn the basics to advanced concepts of web development. html, css,
            javascript, react, node.js, DSA, and many more from our E-Book
            collection.
          </p>
        </div>
        <div className="card-container">
          {books.map((book) => (
            <div key={book.id} className="card">
              <img src={book.image} alt={book.title} />
              <h2>{book.title}</h2>
              <p>{book.description}</p>
              <Link to={book.link} className="read-more">
                Link to the PDF
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
