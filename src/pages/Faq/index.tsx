import React, { useState } from "react";
import "./FaqPage.css";
import { FiChevronDown } from 'react-icons/fi';
const faqData = [
  {
    question: "What is CodeHarborHub?",
    answer:
      "CodeHarborHub is an educational platform aimed at providing comprehensive resources for learners at all levels. Whether you're a beginner looking to start your career in web development or an advanced professional wanting to master a new programming language, CodeHarborHub offers tutorials, courses, and a community to support your learning journey.",
  },
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

  {
    question: "What types of tutorials does CodeHarborHub provide?",
    answer:
      "CodeHarborHub provides in-depth tutorials on a wide range of web development topics, including HTML & CSS, JavaScript, React, and Node.js. These tutorials are designed to help learners understand complex concepts and apply them in real-world scenarios.",
  },
  {
    question: "What can I expect from the courses offered on CodeHarborHub?",
    answer:
      "The courses on CodeHarborHub are structured to help you achieve mastery in various web development topics. Each course includes comprehensive lessons, practical projects, and assessments to ensure you build practical skills and a solid understanding of the subject matter.",
  },
  {
    question: "How can I engage with the community on CodeHarborHub?",
    answer:
      "CodeHarborHub has a vibrant community of developers where you can share knowledge, collaborate on projects, and get your questions answered. You can join our community on platforms like LinkedIn, YouTube, Discord, and Twitter to stay connected and engaged.",
  },
];

const FaqPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            {faq.question}
            <span className={`icon ${activeIndex === index ? "rotate" : ""}`}>
              <FiChevronDown />
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
