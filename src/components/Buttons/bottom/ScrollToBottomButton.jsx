import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "./ScrollToBottomButton.module.css";

export default function ScrollToBottomButton() {
  const [showButton, setShowButton] = useState(true);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    setShowButton(false);
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowButton(true);
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
