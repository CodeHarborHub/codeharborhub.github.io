import React from "react";
import styles from "../home.module.css";
import Link from "@docusaurus/Link"

type Course = {
  title: string;
  description: string;
  url:string;
  // imageUrl?: string;
};

interface CoursesProps {
  courses: Course[];
}

const Courses: React.FC<CoursesProps> = ({ courses }) => {
  return (
      <div className={styles.course_container}>
        {courses.map((course) => (
          <div className={styles.course_card} key={course.title}>
            {/* <img src={course.imageUrl} alt={course.title} /> */}
            <Link to={course.url} className="course-links"><h3>{course.title}</h3></Link>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
  );
};

export default Courses;