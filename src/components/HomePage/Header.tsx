import React, { useEffect, useRef } from "react";
import "./header.css"; // Importing styles from external CSS file
import Link from "@docusaurus/Link"; // Importing Link component from Docusaurus
import VanillaTilt from "vanilla-tilt"; // Importing VanillaTilt for image tilt effect
import { motion } from "framer-motion"; // Importing motion components from Framer Motion
import ParticlesComponent from "../Particles/Particle"; // Importing custom ParticlesComponent

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 1; i <= 100; i++) {
      const li = document.createElement('li');
      li.innerHTML = `<img src="" alt="img" width="90" height="90"><span>${i}</span>`;
      document.querySelector('ul')?.appendChild(li);
  }
});

interface ScrollProgressSettings {
  position: 'left' | 'right' | 'top' | 'bottom';
  thick: number;
  color: string;
}

function ScrollProgress(settings?: ScrollProgressSettings): void {
  const defaultSettings: ScrollProgressSettings = {
      position: 'top',
      thick: 70,
      color: 'var(--ifm-color-primary)'
  };

  const config = { ...defaultSettings, ...settings };

  const progressBar = document.createElement('div');
  progressBar.style.position = 'fixed';
  progressBar.style[config.position] = '0';

  if (config.position === 'top' || config.position === 'bottom') {
      progressBar.style.left = '0';
      progressBar.style.width = '100%';
      progressBar.style.height = `${config.thick}px`;
  } else {
      progressBar.style.top = '0';
      progressBar.style.width = `${config.thick}px`;
      progressBar.style.height = '100%';
  }

  progressBar.style.backgroundColor = config.color;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      if (config.position === 'top' || config.position === 'bottom') {
          progressBar.style.width = `${scrollPercent}%`;
      } else {
          progressBar.style.height = `${scrollPercent}%`;
      }
  });
}

const setting: ScrollProgressSettings = {
  position: 'top',
  thick: 70,
  color: 'var(--ifm-color-primary)'
};

ScrollProgress(setting);


/**
 * Renders the header content section of the application.
 * Includes a title, description, and buttons for navigation.
 * @returns JSX element representing the header content.
 */
const HeaderContent = () => {
  return (
    <div className="chh__header-content">
      {/* Title with animated text gradient and particles effect */}
      <motion.h1
        initial={{ opacity: 0, x: -10 }} // Initial animation properties
        whileInView={{ opacity: 1, x: 0 }} // Animation while in view
        viewport={{ once: true }} // Animation triggers once
        transition={{ // Animation transition settings
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.1,
        }}
        className="gradient__text" // CSS class for gradient text
      >
        <ParticlesComponent/> {/* Render ParticlesComponent */}
        Level Up Skills with CodeHarborHub {/* Text content */}
      </motion.h1>

      {/* Description paragraph with animated entrance */}
      <motion.p
        initial={{ opacity: 0, x: -10 }} // Initial animation properties
        whileInView={{ opacity: 1, x: 0 }} // Animation while in view
        viewport={{ once: true }} // Animation triggers once
        transition={{ // Animation transition settings
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

      {/* Buttons for navigation */}
      <div className="chh__header-content__input">
        {/* Button with animated entrance */}
        <motion.button
          initial={{ opacity: 0, x: -10 }} // Initial animation properties
          whileInView={{ opacity: 1, x: 0 }} // Animation while in view
          viewport={{ once: true }} // Animation triggers once
          transition={{ // Animation transition settings
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
          type="button" // Button type
        >
          {/* Link to documentation page */}
          <Link to="/docs" className="chh__header-content__input--link">
            Get Started
          </Link>
        </motion.button>
        
        {/* Button with animated entrance */}
        <motion.button
          initial={{ opacity: 0, x: 10 }} // Initial animation properties
          whileInView={{ opacity: 1, x: 0 }} // Animation while in view
          viewport={{ once: true }} // Animation triggers once
          transition={{ // Animation transition settings
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          type="button" // Button type
        >
          {/* Link to courses page */}
          <Link to="/courses" className="chh__header-content__input--link">
            Courses
          </Link>
        </motion.button>
      </div>
    </div>
  );
};

/**
 * Renders the header image section with tilt effect.
 * @returns JSX element representing the header image.
 */
const HeaderImage = () => {
  const imgRef = useRef<HTMLImageElement>(null); // Ref for the header image element

  useEffect(() => {
    // Initialize VanillaTilt effect on image ref
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
      if (imgRef.current?.vanillaTilt) {
        imgRef.current.vanillaTilt.destroy();
      }
    };
  }, []); // Run effect only once on component mount

  return (
    // Animated wrapper for the header image
    <motion.div
        initial={{ scale: 0, x: 10 }} // Initial animation properties
        whileInView={{ scale: 0.8, x: 0 }} // Animation while in view
        viewport={{ once: true }} // Animation triggers once
        transition={{ // Animation transition settings
          duration: 1,
          type: "spring",
          stiffness: 100,
          delay: 0.3,
        }}
        className="chh__header-image" // CSS class for header image container
      >
      {/* Actual header image element */}
      <img
        src="/img/hero-img.png" // Image source
        alt="ai" // Alt attribute
        className="float-animation" // Additional CSS class
        data-tilt // Activate VanillaTilt effect
        ref={imgRef} // Reference for image element
      />
    </motion.div>
  );
};

/**
 * Renders the complete header component of the application.
 * @returns JSX element representing the complete header.
 */
const Header: React.FC = () => {
  return (
    <div className="chh__header--body"> {/* Container for header */}
      <div className="chh__header"> {/* Main header container */}
        <HeaderContent /> {/* Render header content section */}
        <HeaderImage /> {/* Render header image section */}
      </div>
    </div>
  );
};

export default Header;
