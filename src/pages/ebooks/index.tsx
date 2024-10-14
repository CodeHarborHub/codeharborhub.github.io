import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import books from "../../database/ebooks";
import Head from "@docusaurus/Head";

export default function Books(): JSX.Element {
  // Books component
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Books from ${siteConfig.title}`}
      description="Explore CodeHarborHub's E-Books on web development topics, including HTML, CSS, JavaScript, React, Node.js, and more."
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
      <section className="blog-page my-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text">
            Welcome to CodeHarborHub E-Books
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Discover a variety of web development resources. Learn HTML, CSS,
            JavaScript, React, Node.js, DSA, and much more with our e-books.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

const BookCard = ({ book }) => {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold dark:text-white">{book.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {book.description}
        </p>
        <Link
          to={book.link}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Link to the PDF
        </Link>
      </div>
    </div>
  );
};
