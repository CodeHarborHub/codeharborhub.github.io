
export interface Topic {
    title: string;
    description: string;
  }

export interface RoadmapItem {
    title: string;
    description: string;
    topics: Topic[];
  }

  const roadmapJavaScript: RoadmapItem[] = [
    {
      title: "Beginner Topics",
      description: "Start with these!",
      topics: [
        {
          title: "Introduction to JavaScript",
          description: "Learn the basics of JavaScript",
        },
        {
          title: "Variables",
          description: "Learn how to declare variables",
        },
        {
          title: "Data Types",
          description: "Learn about the different data types in JavaScript",
        },
        {
          title: "Operators",
          description: "Learn about the different operators in JavaScript",
        },
        {
          title: "Control Structures",
          description: "Learn about control structures in JavaScript",
        },
        {
          title: "Functions",
          description: "Learn about functions in JavaScript",
        },
        {
          title: "Arrays",
          description: "Learn about arrays in JavaScript",
        },
        {
          title: "Objects",
          description: "Learn about objects in JavaScript",
        },
        {
          title: "Classes",
          description: "Learn about classes in JavaScript",
        },
        {
          title: "DOM Manipulation",
          description: "Learn about manipulating the DOM in JavaScript",
        },
        {
          title: "Events",
          description: "Learn about events in JavaScript",
        },
        {
          title: "AJAX",
          description: "Learn about AJAX in JavaScript",
        },
        {
          title: "ES6 Features",
          description: "Learn about the new features in ES6",
        },
      ],
    },
    {
      title: "Intermediate Topics",
      description: "Pick these after beginner topics",
      topics: [
        {
          title: "Promises",
          description: "Learn about promises in JavaScript",
        },
        {
          title: "Async/Await",
          description: "Learn about async/await in JavaScript",
        },
        {
          title: "Modules",
          description: "Learn about modules in JavaScript",
        },
        {
          title: "Error Handling",
          description: "Learn about error handling in JavaScript",
        },
        {
          title: "Regular Expressions",
          description: "Learn about regular expressions in JavaScript",
        },
        {
          title: "Closures",
          description: "Learn about closures in JavaScript",
        },
        {
          title: "Scope",
          description: "Learn about scope in JavaScript",
        },
        {
          title: "This Keyword",
          description: "Learn about the this keyword in JavaScript",
        },
        {
          title: "Prototype",
          description: "Learn about prototype in JavaScript",
        },
        {
          title: "Functional Programming",
          description: "Learn about functional programming in JavaScript",
        },
        {
          title: "Testing",
          description: "Learn about testing in JavaScript",
        },
        {
          title: "Debugging",
          description: "Learn about debugging in JavaScript",
        },
        {
          title: "Performance",
          description: "Learn about performance in JavaScript",
        },
      ],
    },
    {
      title: "Advanced Topics",
      description: "Pick these after intermediate topics",
      topics: [
        {
          title: "Web Components",
          description: "Learn about web components in JavaScript",
        },
        {
          title: "Web Workers",
          description: "Learn about web workers in JavaScript",
        },
        {
          title: "Service Workers",
          description: "Learn about service workers in JavaScript",
        },
        {
          title: "Web Assembly",
          description: "Learn about web assembly in JavaScript",
        },
        {
          title: "Web Sockets",
          description: "Learn about web sockets in JavaScript",
        },
        {
          title: "WebRTC",
          description: "Learn about webRTC in JavaScript",
        },
        {
          title: "Node.js",
          description: "Learn about Node.js",
        },
        {
          title: "Express.js",
          description: "Learn about Express.js",
        },
        {
          title: "GraphQL",
          description: "Learn about GraphQL",
        },
        {
          title: "React",
          description: "Learn about React",
        },
        {
          title: "Vue",
          description: "Learn about Vue",
        },
        {
          title: "Angular",
          description: "Learn about Angular",
        },
        {
          title: "TypeScript",
          description: "Learn about TypeScript",
        },
      ],
    },
    // Add more items as needed
  ];

  export default roadmapJavaScript;
