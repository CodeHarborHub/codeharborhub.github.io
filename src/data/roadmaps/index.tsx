export interface Lesson {
  id: string;
  title: string;
  duration: string;
  link: string;
}

export interface MyRoadmap {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export const roadmaps: MyRoadmap[] = [
  {
    id: "html",
    title: "HTML Basics",
    description: "Learn the basics of HTML",
    lessons: [
      {
        id: "html_intro",
        title: "Introduction to HTML",
        duration: "1 hour",
        link: "https://www.w3schools.com/html/",
      },
      {
        id: "html_elements",
        title: "HTML Elements",
        duration: "2 hours",
        link: "https://www.w3schools.com/html/html_elements.asp",
      },
      // Add more lessons as needed
    ],
  },
  {
    id: "css",
    title: "CSS Styling",
    description: "Learn CSS for styling web pages",
    lessons: [
      {
        id: "css_intro",
        title: "Introduction to CSS",
        duration: "1.5 hours",
        link: "https://www.w3schools.com/css/",
      },
      {
        id: "css_selectors",
        title: "CSS Selectors",
        duration: "2.5 hours",
        link: "https://www.w3schools.com/css/css_selectors.asp",
      },
      // Add more lessons as needed
    ],
  },
  // Add more courses (React, Node.js, etc.)
];
