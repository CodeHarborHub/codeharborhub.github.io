import React, { useEffect, useMemo, useState } from "react";
import Link from "@docusaurus/Link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Code2,
  FileText,
  GraduationCap,
  Layers3,
  Sparkles,
  Timer,
  Trophy,
} from "lucide-react";

import "./style.css";

type ResourceType = "tutorial" | "courses" | "blog" | "dsa";

interface Resource {
  id: string;
  url: string;
  type: ResourceType;
  title: string;
  description: string;
  image: string;
  duration: string;
  level?: string;
  featured?: boolean;
}

interface ResourceCategory {
  id: "all" | ResourceType;
  label: string;
  icon: React.ElementType;
}

const ALL_RESOURCES: Resource[] = [
  {
    id: "tutorials",
    url: "/docs/",
    type: "tutorial",
    title: "Learn the Fundamentals",
    description:
      "Start your developer journey with structured tutorials, clear explanations, examples, and practical guidance.",
    image: "/img/resources/tutorials.jpg",
    duration: "10 min",
    level: "Beginner",
    featured: true,
  },
  {
    id: "courses",
    url: "/courses/",
    type: "courses",
    title: "Master Modern Technologies",
    description:
      "Go deeper with structured courses designed to help you build practical skills and become job-ready.",
    image: "/img/resources/courses.jpg",
    duration: "3 min",
    level: "Intermediate",
  },
  {
    id: "blog",
    url: "/blog/",
    type: "blog",
    title: "Explore the Tech Blog",
    description:
      "Discover developer insights, technology trends, project ideas, engineering stories, and community updates.",
    image: "/img/resources/blogs.jpg",
    duration: "7 min",
    level: "All Levels",
  },
  {
    id: "dsa",
    url: "/dsa/",
    type: "dsa",
    title: "Build Strong DSA Skills",
    description:
      "Practice data structures and algorithms, improve problem-solving skills, and prepare for technical interviews.",
    image: "/img/resources/dsa.jpg",
    duration: "5 min",
    level: "Intermediate",
  },
];

const CATEGORIES: ResourceCategory[] = [
  {
    id: "all",
    label: "All Resources",
    icon: Layers3,
  },
  {
    id: "tutorial",
    label: "Tutorials",
    icon: BookOpen,
  },
  {
    id: "courses",
    label: "Courses",
    icon: GraduationCap,
  },
  {
    id: "blog",
    label: "Blog",
    icon: FileText,
  },
  {
    id: "dsa",
    label: "DSA",
    icon: Trophy,
  },
];

const ITEMS_PER_PAGE = 3;

const getTypeLabel = (type: ResourceType) => {
  const labels: Record<ResourceType, string> = {
    tutorial: "Tutorial",
    courses: "Course",
    blog: "Article",
    dsa: "DSA",
  };

  return labels[type];
};

const getTypeIcon = (type: ResourceType) => {
  const icons: Record<ResourceType, React.ElementType> = {
    tutorial: BookOpen,
    courses: GraduationCap,
    blog: FileText,
    dsa: Code2,
  };

  return icons[type];
};

const ResourceCard: React.FC<{
  resource: Resource;
  index: number;
}> = ({ resource, index }) => {
  const TypeIcon = getTypeIcon(resource.type);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      className={`chh-resource-card ${
        resource.featured ? "chh-resource-card--featured" : ""
      }`}
    >
      <Link
        to={resource.url}
        className="chh-resource-card__link"
        aria-label={`Read ${resource.title}`}
      >
        {/* Image */}
        <div className="chh-resource-card__media">
          <img
            src={resource.image}
            alt=""
            loading="lazy"
            className="chh-resource-card__image"
          />

          <div
            className="chh-resource-card__image-overlay"
            aria-hidden="true"
          />

          <div className="chh-resource-card__category">
            <TypeIcon size={14} aria-hidden="true" />
            <span>{getTypeLabel(resource.type)}</span>
          </div>

          {resource.featured && (
            <div className="chh-resource-card__featured">
              <Sparkles size={13} aria-hidden="true" />
              <span>Featured</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="chh-resource-card__body">
          <div className="chh-resource-card__meta">
            <span>
              <Timer size={13} aria-hidden="true" />
              {resource.duration}
            </span>

            <span className="chh-resource-card__dot" />

            <span>{resource.level}</span>
          </div>

          <h3>{resource.title}</h3>

          <p>{resource.description}</p>

          <div className="chh-resource-card__footer">
            <span className="chh-resource-card__read">
              Explore Resource
            </span>

            <span className="chh-resource-card__arrow">
              <ArrowRight size={17} aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

const ResourcesSection: React.FC = () => {
  const [activeType, setActiveType] = useState<
    "all" | ResourceType
  >("all");

  const [page, setPage] = useState(1);

  const filteredResources = useMemo(() => {
    if (activeType === "all") {
      return ALL_RESOURCES;
    }

    return ALL_RESOURCES.filter(
      (resource) => resource.type === activeType
    );
  }, [activeType]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredResources.length / ITEMS_PER_PAGE)
  );

  const currentResources = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;

    return filteredResources.slice(
      start,
      start + ITEMS_PER_PAGE
    );
  }, [filteredResources, page]);

  useEffect(() => {
    setPage(1);
  }, [activeType]);

  const handlePrevious = () => {
    setPage((current) => Math.max(1, current - 1));
  };

  const handleNext = () => {
    setPage((current) =>
      Math.min(totalPages, current + 1)
    );
  };

  return (
    <section
      className="chh-resources"
      aria-labelledby="resources-heading"
    >
      {/* Background */}
      <div
        className="chh-resources__background"
        aria-hidden="true"
      >
        <div className="chh-resources__glow chh-resources__glow--one" />
        <div className="chh-resources__glow chh-resources__glow--two" />

        <div className="chh-resources__grid">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="resources-grid-pattern"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.15"
                />
              </pattern>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#resources-grid-pattern)"
            />
          </svg>
        </div>
      </div>

      <div className="chh-resources__container">
        {/* Header */}
        <motion.div
          className="chh-resources__header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{ duration: 0.65 }}
        >
          <div className="chh-resources__heading">
            <div className="chh-resources__eyebrow">
              <Sparkles size={14} aria-hidden="true" />
              <span>Explore & Learn</span>
            </div>

            <h2 id="resources-heading">
              Resources to
              <span> Level Up Your Skills</span>
            </h2>

            <p>
              Tutorials, courses, articles, and coding resources
              designed to help you learn faster, practice smarter,
              and build real-world skills.
            </p>
          </div>

          <Link
            to="/blog/"
            className="chh-resources__view-all"
          >
            <span>View all resources</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>

        {/* Filters */}
        <div
          className="chh-resources__filters"
          role="tablist"
          aria-label="Resource categories"
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = activeType === category.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`chh-resources__filter ${
                  isActive
                    ? "chh-resources__filter--active"
                    : ""
                }`}
                onClick={() =>
                  setActiveType(category.id)
                }
              >
                <Icon size={15} aria-hidden="true" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="chh-resources__content">
          <AnimatePresence mode="wait">
            {currentResources.length > 0 ? (
              <motion.div
                key={`${activeType}-${page}`}
                className="chh-resources__grid-cards"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
              >
                {currentResources.map(
                  (resource, index) => (
                    <ResourceCard
                      key={resource.id}
                      resource={resource}
                      index={index}
                    />
                  )
                )}
              </motion.div>
            ) : (
              <div className="chh-resources__empty">
                <BookOpen
                  size={32}
                  aria-hidden="true"
                />
                <h3>No resources found</h3>
                <p>
                  We&apos;re working on adding more learning
                  resources.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom */}
        <div className="chh-resources__bottom">
          <div className="chh-resources__count">
            Showing{" "}
            <strong>
              {currentResources.length}
            </strong>{" "}
            of{" "}
            <strong>
              {filteredResources.length}
            </strong>{" "}
            resources
          </div>

          {totalPages > 1 && (
            <div className="chh-resources__pagination">
              <button
                type="button"
                className="chh-resources__pagination-button"
                onClick={handlePrevious}
                disabled={page === 1}
                aria-label="Previous resources"
              >
                <ChevronLeft
                  size={18}
                  aria-hidden="true"
                />
              </button>

              <span className="chh-resources__page">
                <strong>{page}</strong>
                <span>/</span>
                <span>{totalPages}</span>
              </span>

              <button
                type="button"
                className="chh-resources__pagination-button"
                onClick={handleNext}
                disabled={page === totalPages}
                aria-label="Next resources"
              >
                <ChevronRight
                  size={18}
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;