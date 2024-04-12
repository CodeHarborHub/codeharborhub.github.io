import React from "react";

import styles from "../home.module.css";

type Course = {
  title: string;
  description: string;
  imageUrl?: string;
};

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
    <>
      <div className={styles.course_cards}>
        {courses.map((course) => (
          <div className={styles.course_card} key={course.title}>
            {course.imageUrl && (
              <img src={course.imageUrl} alt={course.title} />
            )}
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Courses;