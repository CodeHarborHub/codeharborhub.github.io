// Roadmap.tsx

import React from 'react';
import { roadmaps, MyRoadmap } from '../../data/roadmaps';
import './Roadmap.css';

const Roadmap: React.FC = () => {
  return (
    <div className="roadmap-container">
      {roadmaps.map((roadmap: MyRoadmap) => (
        <div key={roadmap.id} className="roadmap-card">
          <h2 className="roadmap-title">{roadmap.title}</h2>
          <p className="roadmap-description">{roadmap.description}</p>
          <ul className="lesson-list">
            {roadmap.lessons.map((lesson) => (
              <li key={lesson.id} className="lesson-item">
                <a href={lesson.link} className="lesson-link" target="_blank" rel="noopener noreferrer">
                  <span className="lesson-title">{lesson.title}</span>
                  <span className="lesson-duration">{lesson.duration}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
