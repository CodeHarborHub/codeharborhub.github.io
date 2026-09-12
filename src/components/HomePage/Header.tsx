import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

// @ts-expect-error The stylesheet is handled by Docusaurus at build time.
import "./header.css";
import ParticlesComponent from "../Particles/Particle";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const HeaderContent: React.FC = () => {
  return (
    <div className="chh__header-content">
      {/* Background particles */}
      <div
        className="chh__header-particles"
        aria-hidden="true"
      >
        <ParticlesComponent />
      </div>

      {/* Hero badge */}
      <motion.div
        className="chh__header-badge"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <span className="chh__header-badge-dot" />
        <span>Open-source learning platform for developers</span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        className="chh__header-title"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Level Up Your
        <span className="chh__gradient-text">
          {" "}
          Skills with
        </span>
        <br />
        CodeHarborHub
      </motion.h1>

      {/* Description */}
      <motion.p
        className="chh__header-description"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        Learn programming and modern technology through practical tutorials,
        structured roadmaps, coding practice, real-world projects, and
        open-source learning — all in one place.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        className="chh__header-actions"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <a
          href="/tutorials"
          className="chh__header-button chh__header-button--primary"
        >
          <span>Start Learning</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <a
          href="/courses"
          className="chh__header-button chh__header-button--secondary"
        >
          Explore Courses
        </a>
      </motion.div>

      {/* Platform highlights */}
      <motion.div
        className="chh__header-highlights"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="chh__highlight">
          <span className="chh__highlight-icon">✓</span>
          <span>Free Learning</span>
        </div>

        <div className="chh__highlight">
          <span className="chh__highlight-icon">⌘</span>
          <span>Hands-on Practice</span>
        </div>

        <div className="chh__highlight">
          <span className="chh__highlight-icon">◆</span>
          <span>Open Source</span>
        </div>
      </motion.div>
    </div>
  );
};

const HeaderImage: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = imageRef.current;

    if (!image) return;

    VanillaTilt.init(image, {
      max: 10,
      speed: 500,
      scale: 1.02,
      glare: true,
      "max-glare": 0.18,
      perspective: 1200,
      easing: "cubic-bezier(.03,.98,.52,.99)",
    });

    return () => {
      const tiltElement = image as HTMLImageElement & {
        vanillaTilt?: {
          destroy: () => void;
        };
      };

      tiltElement.vanillaTilt?.destroy();
    };
  }, []);

  return (
    <motion.div
      className="chh__header-visual"
      initial={{
        opacity: 0,
        scale: 0.92,
        x: 30,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        type: "spring",
        stiffness: 80,
        damping: 18,
      }}
    >
      <div className="chh__visual-glow" aria-hidden="true" />

      <div className="chh__visual-card">
        <div className="chh__visual-orbit chh__visual-orbit--one" />
        <div className="chh__visual-orbit chh__visual-orbit--two" />

        <img
          ref={imageRef}
          src="/img/hero-img.png"
          alt="CodeHarborHub learning and developer illustration"
          className="chh__hero-image"
        />

        <div className="chh__floating-card chh__floating-card--top">
          <span className="chh__floating-icon">⚡</span>

          <div>
            <strong>Learn Faster</strong>
            <span>Build real skills</span>
          </div>
        </div>

        <div className="chh__floating-card chh__floating-card--bottom">
          <span className="chh__floating-icon">🚀</span>

          <div>
            <strong>Build Projects</strong>
            <span>Grow your portfolio</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="chh__header--body">
      <div className="chh__header">
        <HeaderContent />
        <HeaderImage />
      </div>
    </header>
  );
};

export default Header;