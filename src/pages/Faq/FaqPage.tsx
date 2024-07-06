import React, { useState } from "react";
import "./FaqPage.css";

const faqData = [
  {
    question: "What features does Code Harbor Hub offer?",
    answer:
      "  Code Harbor Hub offers a variety of features including code solutions, project collaboration, coding quizzes, tutorials, and community section. Our platform is designed to help you learn,share, and grow as a developer.",
  },
  {
    question: "Is it possible to contribute my tutorials here?",
    answer:
      "Yes, users can contribute tutorials by submitting them through sending a PR with the resources committed in it.",
  },
  {
    question: "How many kinds of tutorial is available here?",
    answer:
      " Code Harbor Hub offers tutorials on HTML & CSS, JavaScript,React, and Node.js, providing a comprehensive guide to web development",
  },
  {
    question: "What all type of courses are available here?",
    answer:
      "  Code Harbor Hub offers courses in HTML & CSS, JavaScript, React,and Node.js. Each course is designed to help you build practical skills and projects.",
  },
  {
    question: "How can I contribute to open source project?",
    answer:
      " You can contribute to open source projects by navigating to the Showcase section, where you can find and join various community projects.",
  },
  {
    question: "How can I stay updated with the latest news?",
    answer:
      "You can stay updated by following our blog and joining our community on social media platforms like LinkedIn, YouTube,Discord, and Twitter.",
  },
];

const FaqPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            {faq.question}
            <span className={`icon ${activeIndex === index ? "rotate" : ""}`}>
              ⌄
            </span>
          </div>
          <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
