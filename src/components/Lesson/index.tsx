import React from 'react';
import './Lesson.css'; // Importing CSS file for styling

interface LessonProps {
  id: string; // Unique identifier for the lesson
  title: string; // Title of the lesson
  tags: string[]; // Array of tags associated with the lesson
  description: string; // Description or content of the lesson
}

/**
 * Lesson component displays a single lesson with its title, description, and tags.
 * @param id - Unique identifier for the lesson.
 * @param title - Title of the lesson.
 * @param tags - Array of tags associated with the lesson.
 * @param description - Description or content of the lesson.
 * @returns JSX element representing the lesson.
 */
const Lesson: React.FC<LessonProps> = ({ id, title, tags, description }) => {
  return (
    <div className="lesson"> {/* Container for the lesson */}
      <h2 className="lesson-title">{title}</h2> {/* Title of the lesson */}
      <p className="lesson-description">{description}</p> {/* Description or content of the lesson */}
      <div className="lesson-tags"> {/* Container for tags */}
        {tags.map((tag, index) => (
          <span key={index} className="lesson-tag">{tag}</span> 
        ))
        }
      </div>
    </div>
  );
};

export default Lesson;
