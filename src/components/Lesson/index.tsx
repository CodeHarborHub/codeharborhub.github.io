import React from 'react';
import './Lesson.css'; // Importing CSS file for styling

interface LessonProps {
  id: string;
  title: string;
  tags: string[];
  description: string;
}

const Lesson: React.FC<LessonProps> = ({ id, title, tags, description }) => {
  return (
    <div className="lesson">
      <h2 className="lesson-title">{title}</h2>
      <p className="lesson-description">{description}</p>
      <div className="lesson-tags">
        {tags.map((tag, index) => (
          <span key={index} className="lesson-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default Lesson;