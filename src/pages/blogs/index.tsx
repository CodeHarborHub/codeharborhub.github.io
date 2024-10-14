import React from "react";
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
      description="Welcome to CodeHarborHub Blogs. Learn the basics to advanced concepts of web development including HTML, CSS, JavaScript, React, Node.js, DSA, and more."
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
      <section className="m-4 my-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text">
            Welcome to CodeHarborHub Blogs
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Discover web development articles ranging from HTML and CSS to
            JavaScript, React, Node.js, DSA, and much more.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </Layout>
  );
}


const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold dark:text-white">{blog.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {blog.description}
        </p>
        <Link
          to={`/blog/${blog.slug}`}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};