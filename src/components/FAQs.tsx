import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is CodeHarborHub?",
    answer:
      "CodeHarborHub is an educational platform aimed at providing comprehensive resources for learners at all levels. Whether you're a beginner looking to start your career in web development or an advanced professional wanting to master a new programming language, CodeHarborHub offers tutorials, courses, and a community to support your learning journey.",
  },
  {
    question: "What features does CodeHarborHub offer?",
    answer:
      "CodeHarborHub offers features such as code solutions, project collaboration, coding quizzes, tutorials, and a community section. Our platform is designed to help you learn, share, and grow as a developer.",
  },
  {
    question: "Can I contribute my tutorials here?",
    answer:
      "Yes, users can contribute tutorials by submitting them through a PR with the resources committed.",
  },
  {
    question: "How many types of tutorials are available?",
    answer:
      "CodeHarborHub offers tutorials on HTML, CSS, JavaScript, React, and Node.js, providing a comprehensive guide to web development.",
  },
  {
    question: "What types of courses are available?",
    answer:
      "CodeHarborHub offers courses in HTML, CSS, JavaScript, React, and Node.js. Each course is designed to help you build practical skills and projects.",
  },
  {
    question: "How can I contribute to open-source projects?",
    answer:
      "You can contribute by navigating to the Showcase section, where you can find and join community projects.",
  },
  {
    question: "How can I stay updated with the latest news?",
    answer:
      "You can stay updated by following our blog and joining our community on social media platforms like LinkedIn, YouTube, Discord, and Twitter.",
  },
];

const FAQs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container transition duration-500">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item border-b border-gray-200 dark:border-gray-700 py-4"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="faq-question flex justify-between items-center cursor-pointer bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg md:text-xl font-semibold dark:text-gray-100 text-gray-900">
                {faq.question}
              </h3>
              <motion.span
                className="transition-transform"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
              >
                <FiChevronDown
                  size={24}
                  className="dark:text-gray-100 text-gray-900"
                />
              </motion.span>
            </div>
            <motion.div
              className="faq-answer mt-2 text-sm md:text-base dark:text-gray-200 text-gray-800"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <p className="p-4">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
