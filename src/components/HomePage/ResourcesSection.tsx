import React, { useState } from "react";
import Link from "@docusaurus/Link";
import {
  ArrowRightFilled,
  ChevronLeftRegular,
  ChevronRightRegular,
} from "@fluentui/react-icons";
import "./style.css";

// Interface defining the structure of a resource
interface Resource {
  url: string;
  type: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

// Array containing all available resources
const ALL_RESOURCES: Resource[] = [
  {
    url: "https://codeharborhub.github.io/docs/",
    type: "tutorial",
    title: "Tutorial: For Beginners",
    description:
      "Get started with CodeHarborHub and learn how to use it to manage your codebases. This tutorial is for beginners.",
    image: "/img/resources/tutorials.jpg",
    duration: "10 min",
  },
  {
    url: "https://codeharborhub.github.io/courses/",
    type: "courses",
    title: "Courses: For Advanced Users",
    description:
      "Learn advanced topics in CodeHarborHub and become a pro. This course is for advanced users.",
    image: "/img/resources/courses.jpg",
    duration: "3 min",
  },
  {
    url: "https://codeharborhub.github.io/blog/",
    type: "blog",
    title: "Blog: For All Users",
    description:
      "Read our blog to get the latest updates, news, and articles on CodeHarborHub.",
    image: "/img/resources/blogs.jpg",
    duration: "7 min",
  },
  {
    url: "https://codeharborhub.github.io/dsa/",
    type: "dsa",
    title: "DSA: For Competitive Programmers",
    description:
      "Prepare for your next coding interview with our Data Structures and Algorithms course.",
    image: "/img/resources/dsa.jpg",
    duration: "5 min",
  },
];

// Component to render each individual resource
function Resource({
  type,
  url,
  image,
  title,
  description,
  duration,
}: Resource) {
  return (
    <Link className="resource fade-in" key={title} href={url}>
      <div>
        <div className="resource-image-container">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="resource-image"
          />
        </div>
        <h3 className="resource-title">{title}</h3>
        <p className="resource-description">{description}</p>
      </div>
      <div className="resource-footer">
        <div className="resource-duration">
          {`${duration} ${type === "video" ? "watch" : "read"}`}
        </div>
      </div>
    </Link>
  );
}

// Main component for displaying resources and managing pagination
export default function ResourcesSection() {
  const [page, setPage] = useState(1); // State to track current page number
  const [activeType, setActiveType] = useState<
    "all" | "blog" | "tutorial" | "courses" | "dsa"
  >("all"); // State to track currently active resource type filter

  // Filter resources based on activeType
  const resources =
    activeType === "all"
      ? ALL_RESOURCES
      : ALL_RESOURCES.filter((r) => r.type === activeType);

  // Determine the current set of resources to display based on pagination
  const currentResources = resources.slice((page - 1) * 3, page * 3);

  // Calculate total number of pages based on the number of resources
  const pages = Math.ceil(resources.length / 3);

  // Function to navigate to the next page of resources
  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  // Function to navigate to the previous page of resources
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <section className="resources-section">
      <div className="resources-container">
        {/* Section header */}
        <div className="resources-header">
          <div>
            <span className="codeharborhub-badge">RESOURCES</span>
            <h2 className="resources-title">Want to know more?</h2>
          </div>
          {/* Link to view all blogs */}
          <Link to="/blog" className="resources-all-blogs">
            All Blogs <ArrowRightFilled className="arrow-icon" />
          </Link>
        </div>

        {/* Filter buttons for resource types */}
        <div className="resources-filters bg-secondary-700">
          <button
            className={`filter-button ${activeType === "all" ? "active" : ""}`}
            onClick={() => setActiveType("all")}
          >
            All
          </button>
          <button
            className={`filter-button ${activeType === "blog" ? "active" : ""}`}
            onClick={() => setActiveType("blog")}
          >
            Blogs
          </button>
          <button
            className={`filter-button ${
              activeType === "tutorial" ? "active" : ""
            }`}
            onClick={() => setActiveType("tutorial")}
          >
            Tutorials
          </button>
          <button
            className={`filter-button ${
              activeType === "courses" ? "active" : ""
            }`}
            onClick={() => setActiveType("courses")}
          >
            Courses
          </button>
          <button
            className={`filter-button ${activeType === "dsa" ? "active" : ""}`}
            onClick={() => setActiveType("dsa")}
          >
            DSA
          </button>
        </div>

        {/* Displaying the current set of resources */}
        <div className="resources-content">
          <div className="resources-grid">
            {currentResources.map((resource, idx) => {
              return <Resource {...resource} key={idx} />;
            })}
          </div>

          {/* Pagination controls */}
          <div className="pagination">
            <button onClick={prevPage} className="pagination-button">
              <ChevronLeftRegular className="chevron-icon" />
            </button>

            <button onClick={nextPage} className="pagination-button">
              <ChevronRightRegular className="chevron-icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
