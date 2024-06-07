import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "./ScrollTopToBottom.module.css";

export default function ScrollTopToBottom() {
  const [showButton, setShowButton] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const bottomThreshold = document.documentElement.scrollHeight - window.innerHeight - 100;
    if (window.scrollY < bottomThreshold) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button onClick={scrollToBottom} className={styles.scrollToBottomButton}>
        <FaArrowDown />
      </button>
    )
  );
}