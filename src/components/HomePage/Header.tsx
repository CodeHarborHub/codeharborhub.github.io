// skipcq: JS-W1028
import React, { useEffect, useRef } from "react";
import "./header.css";
import Link from "@docusaurus/Link";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

/**
 * Renders the header component of the application.
 * @returns The Header component as a React functional component.
 */

const HeaderContent = () => {
  return (
    <div className="chh__header-content">
      <h1 className="gradient__text"
      >Level Up Skills with CodeHarborHub</h1>
      <motion.p
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
      >
        Tired of limitations? CodeHarborHub shatters them. We&apos;re the
        exclusive platform offering a comprehensive tech curriculum, taught by
        industry masters, completely free. Join our vibrant community, master
        in-demand skills, and launch your dream tech career.
      </motion.p>

      <div className="chh__header-content__input">
        <motion.button
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          type="button"
        >
          <Link to="/docs" className="chh__header-content__input--link">
            Get Started
          </Link>
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          type="button"
        >
          <Link to="/courses" className="chh__header-content__input--link">
            Courses
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

/**
 * Renders the header image component.
 * @returns The header image element.
 */
const HeaderImage = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current) {
      VanillaTilt.init(imgRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    // Cleanup function to destroy VanillaTilt instance
    return () => {
      if (imgRef.current && imgRef.current.vanillaTilt) {
        imgRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <motion.div
        initial={{ scale: 0, x: 150 }}
        whileInView={{ scale: 0.8, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.5,
        }}
        className="chh__header-image"
      >
      <img
        src="/img/hero-img.png"
        alt="ai"
        className="float-animation"
        data-tilt
        ref={imgRef}
      />
    </motion.div>
  );
};

/**
 * Renders the header component of the application.
 * @returns A header component with styling and structure.
 */
const Header: React.FC = () => {
  return (
    <div className="chh__header--body">
      <div className="chh__header">
        <HeaderContent />
        <HeaderImage />
      </div>
    </div>
  );
};

export default Header;
