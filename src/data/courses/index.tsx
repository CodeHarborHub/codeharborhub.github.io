const courses = [
    // {
    //   id: 1,
    //   title: "HTML Crash Course",
    //   description: "Learn HTML from scratch. This course is for absolute beginners who want to learn the HTML programming language.",
    //   category: "html",
    //   imageUrl: "/img/svg/static_website.svg",
    //   author: "Ajay Dhangar",
    //   link: "#"
    // },

    // css learning path

    // {
    //   id: 2,
    //   title: "CSS Learning Path",
    //   description: "Learn CSS from scratch. This course is for absolute beginners who want to learn the CSS programming language.",
    //   category: "css",
    //   imageUrl: "/img/svg/static_website.svg",
    //   author: "Ajay Dhangar",
    //   link: "#"
    // },

    // javascript for beginners

    {
      id: 3,
      title: "JavaScript for Beginners",
      description: "Learn JavaScript from scratch. This course is for absolute beginners who want to learn the JavaScript programming language.",
      category: "javascript",
      imageUrl: "/img/svg/static_assets.svg",
      author: "Ajay Dhangar",
      link: "/docs/category/javascript"
    },

    // React for beginners

    {
      id: 5,
      title: "React for Beginners",
      description: "Learn React from scratch. This course is for absolute beginners who want to learn the React programming language.",
      category: "react",
      imageUrl: "/img/svg/react.svg",
      author: "Ajay Dhangar",
      link: "/courses/category/reactjs"
    },

    // angular for beginners

    // {
    //   id: 6,
    //   title: "Angular for Beginners",
    //   description: "Learn Angular from scratch. This course is for absolute beginners who want to learn the Angular programming language.",
    //   category: "angular",
    //   imageUrl: "/img/svg/developer_activity.svg",
    //   author: "Ajay Dhangar",
    //   link: "#"
    // },

    // tailwind-css

    // {
    //   id: 7,
    //   title: "Tailwind CSS for Beginners",
    //   description: "Learn Tailwind CSS from scratch. This course is for absolute beginners who want to learn the Tailwind CSS programming language.",
    //   category: "tailwind-css",
    //   imageUrl: "/img/svg/developer_activity.svg",
    //   author: "Ajay Dhangar",
    //   link: "#"
    // },

    // {
    //   id: 8,
    //   title: "Sass for Beginners",
    //   description: "Learn Sass from scratch. This course is for absolute beginners who want to learn the Sass programming language.",
    //   category: "sass",
    //   imageUrl: "/img/svg/developer_activity.svg",
    //   author: "Ajay Dhangar",
    //   link: "#"
    // },

    {
      id: 9,
      title: "Bootstrap for Beginners",
      description: "Learn Bootstrap from scratch. This course is for absolute beginners who want to learn the Bootstrap programming language.",
      category: "bootstrap",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "#"
    },

    {
      id: 10,
      title: "Test Your JavaScript Knowledge",
      description: "This course is for absolute beginners who want to test their JavaScript programming language.",
      category: "javascript",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "Ajay Dhangar",
      link: "#"
    },
    {
      id: 11,
      title: "JavaScript Projects",
      description: "This course is for absolute beginners who want to learn JavaScript projects.",
      category: "javascript",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "Ajay Dhangar",
      link: "#"
    },
    {
      id: 12,
      title: "Python Projects",
      description: "This course is for absolute beginners who want to learn Python projects.",
      category: "python",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://realpython.com/tutorials/projects/"
    },
    {
      id: 13,
      title: "Node for beginners",
      description: "This course is for absolute beginners who want to learn Node.",
      category: "node",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://www.freecodecamp.org/news/get-started-with-nodejs/"
    },
    {
      id: 14,
      title: "Mongodb Tutorial",
      description: "This course is for absolute beginners who want to learn Mongodb.",
      category: "mongodb",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "Ajay Dhangar",
      link: "#"
    },
    {
      id: 15,
      title: "SQL",
      description: "This course is for absolute beginners who want to learn SQL",
      category: "sql",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://www.w3schools.com/sql/"
    },
    {
      id: 16,
      title: "Express Js projects",
      description: "This course is for absolute beginners who want to learn Express Js projects",
      category: "express",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://www.geeksforgeeks.org/top-7-nodejs-project-ideas-for-beginners/"
    },
    {
      id: 17,
      title: "DSA",
      description: "This course is for absolute beginners who want to learn DSA.",
      category: "dsa",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2"
    },
    {
      id: 18,
      title: "Redux",
      description: "This course is for absolute beginners who want to learn Redux.",
      category: "redux",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://www.freecodecamp.org/news/what-is-redux-store-actions-reducers-explained/"
    },
    {
      id: 19,
      title: "TypeScript Guide",
      description: "This course is for absolute beginners who want to learn TypeScript.",
      category: "typescript",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://www.freecodecamp.org/news/learn-typescript-beginners-guide/"
    },
    {
      id: 20,
      title: "Firebase",
      description: "This course is for absolute beginners who want to learn Firebase.",
      category: "firebase",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://www.tutorialspoint.com/firebase/index.html"
    },
    {
      id: 21,
      title: "AWS",
      description: "This course is for absolute beginners who want to learn AWS.",
      category: "aws",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://aws.amazon.com/getting-started/"
    },
    {
      id: 22,
      title: "Docker",
      description: "This course is for absolute beginners who want to learn Docker.",
      category: "docker",
      imageUrl: "/img/svg/developer_activity.svg",
      author: "N/A",
      link: "https://www.geeksforgeeks.org/docker-projects-ideas-for-beginners/"
    },
    {
      "id": 23,
      "title": "GraphQL",
      "description": "This course is for absolute beginners who want to learn GraphQL.",
      "category": "graphql",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://graphql.org/learn/"
    },
    {
      "id": 24,
      "title": "Kubernetes",
      "description": "This course is for absolute beginners who want to learn Kubernetes.",
      "category": "kubernetes",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://kubernetes.io/docs/tutorials/kubernetes-basics/"
    },
    {
      "id": 25,
      "title": "Jenkins",
      "description": "This course is for absolute beginners who want to learn Jenkins.",
      "category": "jenkins",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://www.jenkins.io/doc/tutorials/"
    },
    {
      "id": 26,
      "title": "Git",
      "description": "This course is for absolute beginners who want to learn Git.",
      "category": "git",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://git-scm.com/doc"
    },
    {
      "id": 27,
      "title": "GitHub",
      "description": "This course is for absolute beginners who want to learn GitHub.",
      "category": "github",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://guides.github.com/activities/hello-world/"
    },
    {
      "id": 28,
      "title": "Adobe XD",
      "description": "This course is for absolute beginners who want to learn Adobe XD.",
      "category": "adobexd",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://www.adobe.com/products/xd/learn/get-started.html"
    },
    {
      "id": 29,
      "title": "Sketch",
      "description": "This course is for absolute beginners who want to learn Sketch.",
      "category": "sketch",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://www.sketch.com/docs/"
    },
    {
      "id": 30,
      "title": "Full Stack Web Development",
      "description": "This course is for absolute beginners who want to learn Full Stack Web Development.",
      "category": "fullstackwebdevelopment",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://www.theodinproject.com/"
    },
    {
      "id": 31,
      "title": "Software Development Engineer",
      "description": "This course is for absolute beginners who want to become a Software Development Engineer.",
      "category": "software development engineer",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://www.coursera.org/courses?query=software%20development"
    },
    {
      "id": 32,
      "title": "MERN Stack Development",
      "description": "This course is for absolute beginners who want to learn MERN Stack Development.",
      "category": "mern stack developer",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://www.freecodecamp.org/news/learn-the-mern-stack/"
    },
    {
      "id": 33,
      "title": "MEAN Stack Development",
      "description": "This course is for absolute beginners who want to learn MEAN Stack Development.",
      "category": "mean stack developer",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "Ajay Dhangar",
      "link": "https://www.geeksforgeeks.org/introduction-to-mean-stack/"
    },
    {
      "id": 34,
      "title": "Django Development",
      "description": "This course is for absolute beginners who want to learn Django Development.",
      "category": "django developer",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "Ajay Dhangar",
      "link": "https://www.djangoproject.com/start/"
    },
    {
      "id": 35,
      "title": "Laravel Development",
      "description": "This course is for absolute beginners who want to learn Laravel Development.",
      "category": "laravel developer",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://laravel.com/docs/8.x"
    },
    {
      "id": 36,
      "title": "Flask Development",
      "description": "This course is for absolute beginners who want to learn Flask Development.",
      "category": "flask developer",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://flask.palletsprojects.com/en/2.0.x/tutorial/"
    },
    {
      "id": 37,
      "title": "GitLab",
      "description": "This course is for absolute beginners who want to learn GitLab.",
      "category": "gitlab",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://docs.gitlab.com/ee/gitlab-basics/"
    },
    {
      "id": 38,
      "title": "Figma",
      "description": "This course is for absolute beginners who want to learn Figma.",
      "category": "figma",
      "imageUrl": "/img/svg/developer_activity.svg",
      "author": "N/A",
      "link": "https://www.figma.com/resources/learn-design/"
    },
  ];

  export default courses;
