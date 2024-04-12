import React, { useState } from "react";
import styled from "styled-components";

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  author: string;
  link: string;
}

interface Props {
  courses: Course[];
}

const CoursesContainer = styled.div`
  margin: 5px;
`;

const FilterButtons = styled.div`
  margin: 10px 0;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  justify-content: space-between;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`;

const CoursesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

const CourseItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`;

const CourseImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background: linear-gradient(-30deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 150% 150%;
`;

const CourseTitle = styled.h3`
  margin-bottom: 5px;
  padding: 0 5px;
`;

const CourseDescription = styled.p`
  margin-bottom: 5px;
  padding: 0 8px;
  text-align: justify;
`;

const CourseAuthor = styled.span`
  font-style: italic;
  padding: 0 8px;
`;

const VisitCourse = styled.div`
  margin-top: 10px;
  padding: 0 8px;

  a {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;



const Courses: React.FC<Props> = ({ courses }) => {
  const [filter, setFilter] = useState("all");

  const filteredCourses =
    filter === "all"
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
    <CoursesContainer>
      <FilterButtons>
        <Button onClick={() => setFilter("all")}>All</Button>
        <Button onClick={() => setFilter("html")}>HTML</Button>
        <Button onClick={() => setFilter("css")}>CSS</Button>
        <Button onClick={() => setFilter("javascript")}>JavaScript</Button>
        <Button onClick={() => setFilter("dsa")}>DSA</Button>
        <Button onClick={() => setFilter("react")}>React</Button>
        <Button onClick={() => setFilter("node")}>Node</Button>
        <Button onClick={() => setFilter("python")}>Python</Button>
        <Button onClick={() => setFilter("mongodb")}>MongoDB</Button>
      </FilterButtons>

      <CoursesList>
        {filteredCourses.map((course) => (
          <CourseItem key={course.id}>
            <CourseImage src={course.imageUrl} alt={course.title} />
            <CourseTitle>{course.title}</CourseTitle>
            <CourseDescription>{course.description}</CourseDescription>
            <CourseAuthor>
              <strong>Author:</strong> {course.author}
            </CourseAuthor>
            <VisitCourse>
              <a href={course.link} target="_blank" rel="noopener noreferrer">
                Visit Course
              </a>
            </VisitCourse>
          </CourseItem>
        ))}
      </CoursesList>
    </CoursesContainer>
  );
};

export default Courses;
