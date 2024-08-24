interface Blog {
  id: number;
  title: string;
  image: string;
  description: string;
  slug: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Getting started with Microservices",
    image: "/assets/images/image01-736d71e3db56657987594b3b11459b5d.png",
    description:
      "Microservices are an architectural style that structures an application as a collection of small, loosely coupled services.",
    slug: "getting-started-with-microservices",
  },
  {
    id: 2,
    title: "Cryptography and Its Use in Cyber Security",
    image: "/img/blogs/introduction-to-cryptography-and-cyber-security.jpg",
    description:
      "In the realm of cyber security, cryptography stands as a critical tool for protecting information.",
    slug: "introduction-to-cryptography-and-cyber-security",
  },
  {
    id: 3,
    title: "Getting started with Mern",
    image: "/img/blogs/mern.jpg",
    description:
      " Learn the basics of the MERN stack, from building an API with Express.js to creating a React app.",
    slug: "getting-started-with-mern",
  },
  {
    id: 4,
    title: "Getting started with Vite",
    image: "/img/blogs/react-and-vite.jpg",
    description:
      "Learn how to get started with React by creating a new app using Vite. Follow the steps to set up your development environment",
    slug: "getting-started-with-vite",
  },
  {
    id: 5,
    title: "Dockerizing a Rust application with Multi-Stage Builds",
    image: "/img/blogs/rust-docker.png",
    description:
      "Learn the basics of the MERN stack, from building an API with Express.js to creating a React app.",
    slug: "dockerizing-a-rust-application-with-multi-stage-builds",
  },
  {
    id: 6,
    title: "Git Best Practices: Commit Often, Perfect Later, Publish Once",
    image: "/img/svg/coding.svg",
    description:
      "Git is a powerful tool for managing the development of software projects, but it can be challenging to use effectively. ",
    slug: "git-best-practicies",
  },
  {
    id: 7,
    title: "Mastering Data Structures in Python",
    image: "/img/svg/programming.svg",
    description:
      "Data structures are essential components in computer science, enabling efficient data storage, manipulation, and retrieval.",
    slug: "Mastering Data Structures in Python",
  },
  {
    id: 8,
    title: "Automating Tasks with Python",
    image: "/img/svg/progress.svg",
    description:
      "Automation is a powerful way to boost productivity and efficiency by minimizing manual intervention in repetitive tasks.",
    slug: "automating-tasks-with-python",
  },
  {
    id: 9,
    title: "A Beginner’s Guide to the Top 5 React Hooks",
    image: "/img/svg/react.svg",
    description:
      "Since its inception, React has undergone significant evolution, with each new release introducing enhancements and improvements to the framework.",
    slug: "Beginner’s Guide to the Top 5 React Hooks",
  },
  {
    id: 10,
    title: "DOM manipulation in JavaScript",
    image: "/img/svg/javascript_frameworks.svg",
    description:
      " This model allows developers to interact with the document programmatically via scripting languages like JavaScript.",
    slug: "DOM manipulation in JavaScript",
  },
  {
    id: 11,
    title: "CI evolution: From FTP client to GitHub Action",
    image: "/img/svg/dev_productivity.svg",
    description:
      "In the early days of web development, the most common way to deploy a website was to use an FTP client.",
    slug: "from-ftp-client-to-github-action",
  },
  {
    id: 12,
    title: "Getting Started with PostgreSQL",
    image: "/img/svg/educator.svg",
    description:
      "The PostgreSQL language, primarily SQL (Structured Query Language), is the standard language for interacting with the PostgreSQL database.",
    slug: "Getting started with PostgreSQL",
  },
  {
    id: 13,
    title: "Getting Started with NextJS",
    image: "/img/svg/next_js.svg",
    description:
      "Next.js is a popular React framework that enables server-side rendering and static site generation, offering an optimized, flexible approach to building modern web applications.",
    slug: "Getting-started-with-nextJS",
  },
  {
    id: 14,
    title: "Comprehensive Documentation on Linux Development and Cybersecurity",
    image: "/img/svg/developer_activity.svg",
    description:
      "Renowned for its stability, security, and open-source nature, plays a pivotal role in modern computing environments",
    slug: "introduction-to-the-Linux-development-and-cyber-security",
  },
];

export default blogs;
