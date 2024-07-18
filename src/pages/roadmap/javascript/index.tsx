import React, { useState } from "react";
import Layout from "@theme/Layout";
import roadmapJavaScript from '../../../data/roadmaps/javascript';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

const RoadmapJavaScript: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Layout>
      <div className="roadmaps">
        {roadmapJavaScript.map((item, index) => (
          <div key={index} className="roadmap-item">
            <h3
              className={`roadmap-title ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {item.title}
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </h3>
            {activeIndex === index && (
              <div className="roadmap-details">
                <p className="roadmap-description">{item.description}</p>
                <ul className="topic-list">
                  {item.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="topic-item">
                      <h4 className="topic-title">{topic.title}</h4>
                      <p className="topic-description">{topic.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default RoadmapJavaScript;
