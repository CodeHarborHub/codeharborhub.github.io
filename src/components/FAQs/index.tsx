import React, { useState } from 'react';
import './FAQs.css';

interface FAQ {
  question: string;
  answer: string;
}

const FAQs: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li className="faq-item" key={index}>
            <button
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQs;