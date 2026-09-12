import React from "react";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";
import "./style.css";

interface Organization {
  id: number;
  logo: string;
  name: string;
  description: string;
  link?: string;
  category?: string;
}

const Orgs: Organization[] = [
  {
    id: 1,
    logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
    name: "HTML 5",
    category: "Web Fundamentals",
    description:
      "Learn HTML from the fundamentals to advanced concepts and build accessible, semantic, and well-structured web pages.",
    link: "https://github.com/html-mastery",
  },
  {
    id: 2,
    logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
    name: "CSS 3",
    category: "Web Design",
    description:
      "Master modern CSS, responsive layouts, animations, Flexbox, Grid, and the techniques behind beautiful web experiences.",
    link: "#",
  },
  {
    id: 3,
    logo: "https://img.icons8.com/?size=100&id=gYCTehfTlYk5&format=png&color=000000",
    name: "JavaScript",
    category: "Programming",
    description:
      "Build interactive web applications and master JavaScript from core fundamentals to modern development patterns.",
    link: "https://github.com/javascript-mastery",
  },
  {
    id: 4,
    logo: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
    name: "React",
    category: "Frontend Development",
    description:
      "Learn React and build modern, component-driven interfaces using reusable architecture and industry-standard practices.",
    link: "#",
  },
  {
    id: 5,
    logo: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    name: "Node.js",
    category: "Backend Development",
    description:
      "Learn Node.js and build scalable backend services, APIs, real-time applications, and production-ready web systems.",
    link: "#",
  },
  {
    id: 6,
    logo: "https://img.icons8.com/?size=100&id=74402&format=png&color=000000",
    name: "MongoDB",
    category: "Database",
    description:
      "Explore MongoDB and learn how to design, query, and scale flexible NoSQL databases for modern applications.",
    link: "#",
  },
];

const Organizations: React.FC = () => {
  return (
    <section
      id="organization"
      className="organizations"
      aria-labelledby="organizations-title"
    >
      <div className="organizations__container">
        {/* Section Header */}
        <header className="organizations__header">
          <div className="organizations__eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            <span>MASTERY ECOSYSTEM</span>
          </div>

          <h2 id="organizations-title" className="organizations__title">
            Learn. Build.{" "}
            <span className="organizations__highlight">Master.</span>
          </h2>

          <p className="organizations__subtitle">
            Explore our technology-focused open-source organizations and
            level up your skills through structured learning, projects,
            documentation, and community collaboration.
          </p>
        </header>

        {/* Organization Grid */}
        <div className="organizations__grid">
          {Orgs.map((org) => {
            const hasLink = Boolean(org.link);

            const cardContent = (
              <>
                <div className="organization-card__top">
                  <div className="organization-card__logo-wrapper">
                    <img
                      src={org.logo}
                      alt={`${org.name} logo`}
                      className="organization-card__logo"
                      loading="lazy"
                    />
                  </div>

                  {org.category && (
                    <span className="organization-card__category">
                      {org.category}
                    </span>
                  )}
                </div>

                <div className="organization-card__content">
                  <h3 className="organization-card__title">{org.name}</h3>

                  <p className="organization-card__description">
                    {org.description}
                  </p>
                </div>

                <div className="organization-card__footer">
                  <span className="organization-card__action">
                    {hasLink ? "Explore organization" : "Coming soon"}

                    {hasLink && (
                      <ArrowUpRight
                        size={17}
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    )}
                  </span>

                  {hasLink && (
                    <span className="organization-card__github">
                      <Github size={16} aria-hidden="true" />
                    </span>
                  )}
                </div>
              </>
            );

            if (hasLink) {
              return (
                <a
                  key={org.id}
                  href={org.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="organization-card"
                  aria-label={`Explore ${org.name} organization on GitHub`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <article
                key={org.id}
                className="organization-card organization-card--disabled"
              >
                {cardContent}
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="organizations__cta">
          <div className="organizations__cta-content">
            <div className="organizations__cta-icon">
              <Github size={21} aria-hidden="true" />
            </div>

            <div>
              <h3>Build with the community</h3>
              <p>
                Explore CodeHarborHub on GitHub and contribute to the
                open-source learning ecosystem.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/CodeHarborHub"
            target="_blank"
            rel="noopener noreferrer"
            className="organizations__cta-button"
          >
            <span>Visit GitHub</span>
            <ExternalLink size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Organizations;