import React from "react";
import Link from "@docusaurus/Link";
import { ArrowRight, Github, Sparkles, Terminal } from "lucide-react";
import "./FinalCTA.css";

const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <div className="final-cta__container">
        {/* Decorative background */}
        <div className="final-cta__grid" aria-hidden="true" />
        <div className="final-cta__glow final-cta__glow--one" aria-hidden="true" />
        <div className="final-cta__glow final-cta__glow--two" aria-hidden="true" />

        <div className="final-cta__content">
          {/* Eyebrow */}
          <div className="final-cta__eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            <span>YOUR NEXT STEP STARTS HERE</span>
          </div>

          {/* Heading */}
          <h2 id="final-cta-title" className="final-cta__title">
            Ready to{" "}
            <span className="final-cta__highlight">level up</span>{" "}
            your skills?
          </h2>

          {/* Description */}
          <p className="final-cta__description">
            Learn the fundamentals, practice what you know, build real-world
            projects, and grow with an open-source community of developers.
          </p>

          {/* CTAs */}
          <div className="final-cta__actions">
            <Link
              to="/tutorial"
              className="final-cta__button final-cta__button--primary"
            >
              <Terminal size={18} aria-hidden="true" />
              <span>Start Learning Free</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <a
              href="https://github.com/CodeHarborHub/codeharborhub.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta__button final-cta__button--secondary"
            >
              <Github size={18} aria-hidden="true" />
              <span>Explore on GitHub</span>
            </a>
          </div>

          {/* Trust line */}
          <div className="final-cta__trust">
            <span className="final-cta__status" aria-hidden="true" />
            <span>Open source</span>
            <span className="final-cta__separator">•</span>
            <span>Free to learn</span>
            <span className="final-cta__separator">•</span>
            <span>Built by the community</span>
          </div>
        </div>

        {/* Terminal decoration */}
        <div className="final-cta__terminal" aria-hidden="true">
          <div className="final-cta__terminal-header">
            <span />
            <span />
            <span />
            <code>codeharborhub</code>
          </div>

          <div className="final-cta__terminal-body">
            <div>
              <span className="final-cta__terminal-prompt">$</span>{" "}
              <span>start-learning</span>
            </div>

            <div className="final-cta__terminal-output">
              → Loading your developer journey...
            </div>

            <div>
              <span className="final-cta__terminal-prompt">$</span>{" "}
              <span>build --future</span>
            </div>

            <div className="final-cta__terminal-success">
              ✓ Let's build something amazing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;