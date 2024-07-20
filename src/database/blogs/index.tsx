interface Blog {
    id: number;
    title: string;
    image: string;
    description: string;
    link: string;
  }

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Building RESTful CRUD API in springboot",
      image: "img/blogs/image01.png",
      description:
        " RESTful APIs have become a cornerstone for building scalable, efficient, and maintainable web applications.",
      link: "Building RESTful CRUD API in springboot",
    },
    {
      id: 2,
      title: "Getting started with Microservices",
      image: "/assets/images/image01-736d71e3db56657987594b3b11459b5d.png",
      description:
        "Microservices are an architectural style that structures an application as a collection of small, loosely coupled services.",
      link: "getting-started-with-microservices",
    },
    {
      id: 3,
      title: "Cryptography and Its Use in Cyber Security",
      image: "/img/blogs/introduction-to-cryptography-and-cyber-security.jpg",
      description:
        "In the realm of cyber security, cryptography stands as a critical tool for protecting information.",
      link: "introduction-to-cryptography-and-cyber-security",
    },
    {
      id: 4,
      title: "Getting started with Mern",
      image: "/img/blogs/mern.jpg",
      description:
        " Learn the basics of the MERN stack, from building an API with Express.js to creating a React app.",
      link: "getting-started-with-mern",
    },
    {
      id: 5,
      title: "Getting started with Vite",
      image: "/img/blogs/react-and-vite.jpg",
      description:
        "Learn how to get started with React by creating a new app using Vite. Follow the steps to set up your development environment",
      link: "getting-started-with-vite",
    },
    {
      id: 6,
      title: "VS Code: Fix Bug in Any Extension by Rebuilding It",
      image: "/img/blogs/build-done-vsce.png",
      description:
        "How to fix a bug in any VS Code extension (.vsix) by rebuilding that extension",
      link: "fix-bug-in-vscode-extension",
    },
    {
      id: 7,
      title: "Dockerizing a Rust application with Multi-Stage Builds",
      image: "/img/blogs/rust-docker.png",
      description:
        "Learn the basics of the MERN stack, from building an API with Express.js to creating a React app.",
      link: "dockerizing-a-rust-application-with-multi-stage-builds",
    },
  ];
  

  export default blogs;
