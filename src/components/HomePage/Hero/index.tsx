import React from "react";
import styles from "../home.module.css";
import Link from "@docusaurus/Link";

interface HeroProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_content}>
        <h1 className={styles.hero_title}>{title}</h1>
        <p className={styles.hero_description}>{description}</p>
        <div className={styles.buttons_container}>
          <button className={styles.animated_button}>
            <Link className={styles.source_link} to="/docs/">
              Getting Started
            </Link>
          </button>
          <button className={styles.animated_button}>
            <Link className={styles.source_link} to="/courses/category/beginners-level/">
              Courses
            </Link>
          </button>
        </div>
      </div>
      {imageUrl && (
        <div className={styles.hero_image_container}>
          <img className={styles.hero_image} src={imageUrl} alt={title} />
        </div>
      )}
    </div>
  );
};

export default Hero;
