import React from "react";
import Link from "@docusaurus/Link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Users2,
  Zap,
  Trophy,
  Github,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// @ts-expect-error Docusaurus resolves stylesheet imports at build time.
import "./why-choose-codeharbor.css";

type Reason = {
  title: string;
  description: string;
  icon: React.ElementType;
  number: string;
  link: string;
};

const reasons: Reason[] = [
  {
    number: "01",
    title: "Free Education",
    description:
      "Learn modern programming and technology through structured, practical, and beginner-friendly resources — completely free.",
    icon: BookOpen,
    link: "/tutorials",
  },
  {
    number: "02",
    title: "Open Source",
    description:
      "Contribute to real-world projects, collaborate with developers, and build meaningful experience for your GitHub profile.",
    icon: Github,
    link: "/community/team", // /contributors
  },
  {
    number: "03",
    title: "Hands-on Coding",
    description:
      "Move beyond theory with coding practice, interactive examples, projects, and developer-focused learning experiences.",
    icon: Code2,
    link: "#", // "/practice",
  },
  {
    number: "04",
    title: "Global Community",
    description:
      "Learn with developers and contributors, share knowledge, collaborate on projects, and grow together.",
    icon: Users2,
    link: "/community",
  },
  {
    number: "05",
    title: "DSA & Interview Prep",
    description:
      "Strengthen problem-solving skills with curated DSA topics, coding challenges, patterns, and interview preparation.",
    icon: Zap,
    link: "https://codeharborhub.github.io/dsa/",
  },
  {
    number: "06",
    title: "Structured Roadmaps",
    description:
      "Follow clear learning paths from beginner to advanced with practical milestones designed around real-world skills.",
    icon: Trophy,
    link: "/roadmaps",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhyChooseCodeHarbor: React.FC = () => {
  return (
    <section
      className="chh-why"
      aria-labelledby="why-codeharbor-heading"
    >
      {/* Background decoration */}
      <div className="chh-why__background" aria-hidden="true">
        <div className="chh-why__orb chh-why__orb--one" />
        <div className="chh-why__orb chh-why__orb--two" />

        <div className="chh-why__grid">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="chh-why-grid"
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
              fill="url(#chh-why-grid)"
            />
          </svg>
        </div>
      </div>

      <div className="chh-why__container">
        {/* Section header */}
        <motion.div
          className="chh-why__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="chh-why__eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            <span>Why CodeHarborHub?</span>
          </div>

          <h2 id="why-codeharbor-heading">
            Everything You Need to
            <span> Level Up Your Tech Journey</span>
          </h2>

          <p>
            Learn, practice, build, contribute, and grow — with a developer
            ecosystem designed to help you turn knowledge into real-world
            skills.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="chh-why__grid-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                variants={itemVariants}
                className="chh-why-card"
              >
                {/* Hover glow */}
                <div
                  className="chh-why-card__glow"
                  aria-hidden="true"
                />

                {/* Top row */}
                <div className="chh-why-card__top">
                  <span className="chh-why-card__number">
                    {reason.number}
                  </span>

                  <span className="chh-why-card__arrow">
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </div>

                {/* Icon */}
                <div className="chh-why-card__icon">
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="chh-why-card__content">
                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>
                </div>

                {/* Learn more */}
                <Link
                  to={reason.link}
                  className="chh-why-card__link"
                  aria-label={`Explore ${reason.title}`}
                >
                  <span>Explore</span>

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </Link>

                {/* Bottom accent */}
                <div
                  className="chh-why-card__accent"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="chh-why__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="chh-why__cta-content">
            <div className="chh-why__cta-icon">
              <Github size={25} aria-hidden="true" />
            </div>

            <div>
              <span className="chh-why__cta-label">
                BUILD WITH US
              </span>

              <h3>
                Help shape the future of open-source learning.
              </h3>

              <p>
                Contribute code, documentation, ideas, tutorials, and
                projects to the CodeHarborHub ecosystem.
              </p>
            </div>
          </div>

          <Link
            to="https://github.com/CodeHarborHub"
            className="chh-why__cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={19} aria-hidden="true" />
            <span>Join Open Source</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseCodeHarbor;