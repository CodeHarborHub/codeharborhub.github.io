const courses = [
  {
    id: 1,
    title: "HTML Crash Course",
    description:
      "Learn HTML from scratch. This course is for absolute beginners who want to learn the HTML programming language.",
    category: "html",
    imageUrl:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/ht-ml.jpeg",
    author: "FreeCodeCamp",
    link: "https://www.freecodecamp.org/news/html-crash-course/",
  },
  {
    id: 2,
    title: "CSS Learning Path",
    description:
      "Learn CSS from scratch. This course is for absolute beginners who want to learn the CSS programming language.",
    category: "css",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBbSR9q_NR2b14VravJodaVo-rW5RYf8e0w&usqp=CAU",
    author: "Frontend Masters",
    link: "https://frontendmasters.com/learn/css/",
  },
  {
    id: 3,
    title: "JavaScript for Beginners",
    description:
      "Learn JavaScript from scratch. This course is for absolute beginners who want to learn the JavaScript programming language.",
    category: "javascript",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCYXBgQbUIL58YlTKTeLKh4qYDT5Aoy0QMGsiBtdixSOvP5rzdqKc_IrjpYL61zJ_6qE&usqp=CAU",
    author: "Ajay Dhangar (CHH)",
    link: "/docs/category/javascript",
  },
  {
    id: 4,
    title: "DSA Learning Path",
    description:
      "Learn DSA from scratch. This course is for absolute beginners who want to learn the DSA programming language.",
    category: "dsa",
    imageUrl:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230726161506/Data-structure-algorithm-%E2%80%93-1-3.png",
    author: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/data-structures/",
  },
  {
    id: 5,
    title: "React Learning Path",
    description:
      "Learn React from scratch. This course is for absolute beginners who want to learn the React programming language.",
    category: "react",
    imageUrl:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210122183844/How-to-Learn-ReactJS-in-2021.png",
    author: "React Docs",
    link: "https://reactjs.org/docs/getting-started.html",
  },
  {
    id: 6,
    title: "Python Learning Path",
    description:
      "Learn Python from scratch. This course is for absolute beginners who want to learn the Python programming language.",
    category: "python",
    imageUrl:
      "https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/pythonbobby.png",
      author:"freeCodeCamp",
      link:"https://www.freecodecamp.org/news/free-python-crash-course/",
  },
  {
    id: 7,
    title: "Node for beginners",
    description:
      "Learn Node from scratch. This course is for absolute beginners who want to learn the Node programming language.",
    category: "node",
    imageUrl:
      "https://imgs.search.brave.com/TkwsCIAoHvzhuIwwdrgDgn8Cyomr8jPGr6zKeJmNce8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMy8wNS9yZXZp/c2VkX25vZGUucG5n",
      author:"freeCodeCamp",
      link:"https://www.freecodecamp.org/news/what-exactly-is-node-guide-for-beginners/",
  },
  {
    id: 8,
    title: "Mongodb Learning path",
    description:
      "Learn Mongodb from scratch. This course is for absolute beginners who want to learn the Mongodb.",
    category: "mongodb",
    imageUrl:"https://miro.medium.com/v2/resize:fit:720/format:webp/0*BmLKgrU_qFtakYsB.png",
    author:"freeCodeCamp",
      link:"https://www.tutorialsteacher.com/mongodb",
  },
  {
    id: 9,
    title: "SQL",
    description:
      "Learn SQL from scratch. This course is for absolute beginners who want to learn the SQL.",
    category: "sql",
    imageUrl:
      "https://imgs.search.brave.com/nzvumMGxKaku5XP5zvTjgH4ixFT5Gpi2ytqzGUm_mQo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNDAzMjEx/MjQ3NDAvTGVhcm4t/U1FMLndlYnA",
      author:"GeeksForGeeks",
      link:"https://www.geeksforgeeks.org/sql-tutorial/",
  },
  {
    id: 10,
    title: "Express",
    description: "Learn Express.js from scratch. This course is for absolute beginners who want to learn the Express framework for Node.js.",
    category: "express",
    imageUrl: "https://imgs.search.brave.com/9eWX5MiEPXS6e9pqf7EgK-Nvz7gaIltadxZJa5bLQfU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZWVrc2Zvcmdl/ZWtzLm9yZy93cC1j/b250ZW50L2Nkbi11/cGxvYWRzLzIwMjMw/MzEwMTUwMTQ1L0V4/cHJlc3MuanMtVHV0/b3JpYWwuanBn",
    author:"GeeksForGeeks",
    link: "https://www.geeksforgeeks.org/express-js/"
  },
  {
    id: 11,
    title: "Bootstrap",
    description: "Learn Bootstrap from scratch. This course is for absolute beginners who want to learn front-end development with Bootstrap framework.",
    category: "bootstrap",
    imageUrl: "https://imgs.search.brave.com/_WU9TAtctP0zG6K0SGoCGmyC-Rx3TordAxPKvGlly3M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtYXNzZXRzLmNv/ZGVjYWRlbXkuY29t/L2Fzc2V0cy9ob21l/cGFnZS9wbGF0Zm9y/bS1zaG93Y2FzZS9t/b2JpbGUtbGUud2Vi/cA",
    author: "Bootstrap",
    link: "https://www.codecademy.com/learn/learn-bootstrap"
  },
  {
    id: 12,
    title: "Sass",
    description: "Learn Sass from scratch. This course is for absolute beginners who want to learn CSS preprocessing with Sass.",
    category: "sass",
    imageUrl:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*2tphvXl5uXk2rHgJa23Vog.jpeg",
    author: "sass",
    link: "https://github.com/sass/sass"
  },
  {
    id: 13,
    title: "Redux",
    description: "Learn Redux from scratch. This course is for absolute beginners who want to manage state in JavaScript applications using Redux.",
    category: "redux",
    imageUrl: "https://imgs.search.brave.com/f7Aa28NUf5KIsoAiNu5HxCjM2xNSmdvZm66ERqBrvVI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5vbmxpbmVjb3Vy/c2ViYXkuY29tLzIw/MTkvMDMvMTIwMTE0/NDUvMTExMzUwOF9k/ZTUwXzMtNzUweDQw/NS5qcGc",
    author: "Redux",
    link: "https://www.valentinog.com/blog/redux/"
  },
  {
    id: 14,
    title: "Typescript",
    description: "Learn TypeScript from scratch. This course is for absolute beginners who want to use TypeScript for building scalable and maintainable applications.",
    category: "typescript",
    imageUrl: "https://www.freecodecamp.org/news/content/images/size/w2000/2022/01/Cheat-Sheet-Poster--1-.png",
    author: "TypeScript",
    link: "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/"
  },
  {
    id: 15,
    title: "Figma",
    description: "Learn Figma from scratch. This course is for absolute beginners who want to learn Figma for designing user interfaces.",
    category: "figma",
    imageUrl: "https://cdn.sanity.io/images/599r6htc/regionalized/80e3e2472a0120ed87663cf758f1cbfe9be2be47-2400x1256.png?w=720&q=75&fit=max&auto=format",
    author: "Figma",
    link: "https://www.figma.com/resource-library/design-basics/"
  }

];

export default courses;
