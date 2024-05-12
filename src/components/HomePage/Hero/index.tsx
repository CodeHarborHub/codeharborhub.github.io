import React, { useState } from "react";
import styles from "../home.module.css";
import Link from "@docusaurus/Link";
import BrowserWindow from "../../BrowserWindow";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface HeroProps {
  title: string;
  description: string;
  imageUrl?: string;
  videoId?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

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
          {showVideo ? (
            <BrowserWindow
              url="https://www.codeharborhub.live"
              bodyStyle={{ padding: "0", overflow: "hidden" }}
            >
              <LiteYouTubeEmbed
                id="lI3RBnK8V6Y"
                params="autoplay=1&autohide=1&showinfo=0&rel=0"
                title="CodeHarborHub Website Introduction | CodeHarborHub Website Overview | CodeHarborHub Website Features"
                poster="maxresdefault"
                webp
              />
            </BrowserWindow>
          ) : (
            <>
              <BrowserWindow url="https://www.codeharborhub.live" bodyStyle={{ padding: "0" }}>
                <img className={styles.hero_image} src={imageUrl} alt={title} />
                <div className={styles.play_button_overlay} onClick={handlePlayClick}>
                  <div className={styles.play_icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </BrowserWindow>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
