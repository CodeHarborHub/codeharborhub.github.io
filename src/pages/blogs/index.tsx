import React from "react";
import "./style.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import blogs from "../../database/blogs";

interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
}

export default function Blogs() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Blogs from ${siteConfig.title}`}
      description="Welcome to CodeHarborHub Bloge. Learn the basics to advanced concepts of web development. html, css, javascript, react, node.js, dsa, and more."
    >
      <section className="blog-page margin-top--lg margin-bottom--lg">
        <h1 className="TitleText">Latest Blogs</h1>
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
