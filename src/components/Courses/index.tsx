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
  scroll-behavior: smooth;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  gap: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;  
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
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
  box-shadow: 0 0 10px 0 rgba(255, 64, 102, 1); transform: scale(1.05);
  border-color: red;
  }
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
        <Button onClick={() => setFilter("sql")}>SQL</Button>
        <Button onClick={() => setFilter("express")}>Express</Button>
        <Button onClick={() => setFilter("bootstrap")}>Bootstrap</Button>
        <Button onClick={() => setFilter("sass")}>Sass</Button>
        <Button onClick={() => setFilter("redux")}>Redux</Button>
        <Button onClick={() => setFilter("typescript")}>TypeScript</Button>
        <Button onClick={() => setFilter("graphql")}>GraphQL</Button>
        <Button onClick={() => setFilter("firebase")}>Firebase</Button>
        <Button onClick={() => setFilter("aws")}>AWS</Button>
        <Button onClick={() => setFilter("docker")}>Docker</Button>
        <Button onClick={() => setFilter("kubernetes")}>Kubernetes</Button>
        <Button onClick={() => setFilter("jenkins")}>Jenkins</Button>
        <Button onClick={() => setFilter("git")}>Git</Button>
        <Button onClick={() => setFilter("github")}>GitHub</Button>
        <Button onClick={() => setFilter("gitlab")}>GitLab</Button>
        <Button onClick={() => setFilter("figma")}>Figma</Button>
        <Button onClick={() => setFilter("adobexd")}>Adobe XD</Button>
        <Button onClick={() => setFilter("sketch")}>Sketch</Button>
        <Button onClick={() => setFilter("fullstack")}>Full Stack Web Developer</Button>
        <Button onClick={() => setFilter("sde")}>Software Development Engineer</Button>
        <Button onClick={() => setFilter("mern")}>MERN Stack Developer</Button>
        <Button onClick={() => setFilter("mean")}>MEAN Stack Developer</Button>
        <Button onClick={() => setFilter("laravel")}>Laravel Developer</Button>
        <Button onClick={() => setFilter("django")}>Django Developer</Button>
        <Button onClick={() => setFilter("flask")}>Flask Developer</Button>
        <Button onClick={() => setFilter("wordpress")}>WordPress Developer</Button>
        <Button onClick={() => setFilter("joomla")}>Joomla Developer</Button>
        <Button onClick={() => setFilter("drupal")}>Drupal Developer</Button>
        <Button onClick={() => setFilter("vue")}>Vue Developer</Button>
        <Button onClick={() => setFilter("angular")}>Angular Developer</Button>
        <Button onClick={() => setFilter("next")}>Next Developer</Button>
        <Button onClick={() => setFilter("nuxt")}>Nuxt Developer</Button>
        <Button onClick={() => setFilter("svelte")}>Svelte Developer</Button>
        <Button onClick={() => setFilter("webcomponents")}>Web Components Developer</Button>
        <Button onClick={() => setFilter("cybersecurity")}>Cybersecurity Engineer</Button>
        <Button onClick={() => setFilter("datascience")}>Data Science Engineer</Button>
        <Button onClick={() => setFilter("machinelearning")}>Machine Learning Engineer</Button>
        <Button onClick={() => setFilter("artificialintelligence")}>Artificial Intelligence Engineer</Button>
        <Button onClick={() => setFilter("arvr")}>AR/VR Engineer</Button>
        <Button onClick={() => setFilter("frontend")}>Frontend Developer</Button>
        <Button onClick={() => setFilter("backend")}>Backend Developer</Button>
        <Button onClick={() => setFilter("fullstackdev")}>Full Stack Developer</Button>
        <Button onClick={() => setFilter("softwaredev")}>Software Developer</Button>
        <Button onClick={() => setFilter("webapp")}>Web App Developer</Button>
        <Button onClick={() => setFilter("aidev")}>AI Developer</Button>
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
