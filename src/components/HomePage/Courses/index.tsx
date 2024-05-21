import React, { useEffect } from "react";
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
  useEffect(() =>{
    const allBox=document.querySelectorAll<HTMLElement>(".course_card_src-components-HomePage-home-module");
    const boxWidth=allBox[0].offsetWidth;
    const boxHeight=allBox[0].offsetHeight;
    const div=document.createElement("div");
    div.style.position="absolute";
	  div.style.height=boxHeight + "px";
	  div.style.width=boxWidth + "px";
	  div.style.background="linear-gradient( 30deg, rgba(206, 86, 174, 0.972) 0%, rgb(253 29 29 / 100%) 50%, rgb(252 176 69 / 100%) 100%)";
	  div.style.transition="all 1s ease";
	  div.style.zIndex="1";
    div.style.left=allBox[0].offsetLeft + "px";
    div.style.top=allBox[0].offsetTop + "px";
    div.style.display = "none"
    const bigbox = document.querySelector("main");
    bigbox.appendChild(div)
    for(let i=0; i<allBox.length; i++){
      allBox[i].addEventListener("mouseover", function(){
      const height=this.offsetHeight;
      const width=this.offsetWidth;
      const x=this.offsetLeft;           	 	
      const y=this.offsetTop;
      div.style.display = "block";
      div.style.left=x + "px";
      div.style.top=y + "px";
      div.style.width=width + "px";
      div.style.height=height + "px";
    })
    const allfeatureBox=document.querySelectorAll<HTMLElement>(".feature_item_src-components-HomePage-home-module");
    const boxWidth=allfeatureBox[0].offsetWidth;
    const boxHeight=allfeatureBox[0].offsetHeight;
    for(let i=0; i<allfeatureBox.length; i++){
      allfeatureBox[i].addEventListener("mouseover", function(){
      const height=this.offsetHeight;
      const width=this.offsetWidth;
      const x=this.offsetLeft;           	 	
      const y=this.offsetTop;
      div.style.display = "block";
      div.style.left=x + "px";
      div.style.top=y + "px";
      div.style.width=width + "px";
      div.style.height=height + "px";
    })
    const mainitem = document.getElementsByTagName("main")
    mainitem[0].addEventListener("mouseleave", function(){
      div.style.display = "none";
    })
  }}
  })

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