---
id: lesson-1
title: "Getting Started with Next.js"
sidebar_label: Understanding Project
sidebar_position: 1
description: "Getting Started with Next.js"
tags: [courses,beginner-level,FramWorks,Introduction]
---
 

#### Creating a New Next.js Project

To create a new Next.js project, you'll need to have Node.js and npm (or yarn) installed on your system. Follow these steps to set up your project:

1. **Install Node.js**:
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Create a New Next.js Application**:
   - Open your terminal and run the following command to create a new Next.js project:
     ```bash
     npx create-next-app@latest my-next-app
     # or
     yarn create next-app my-next-app
     ```

   - This command will prompt you to name your project and choose some initial configuration options. Once completed, it will generate a new Next.js project in a directory named `my-next-app`.

#### Project Structure Overview

A typical Next.js project has the following structure:

```
my-next-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   └── vercel.svg
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   └── hello.js
│   │   ├── _app.js
│   │   ├── _document.js
│   │   └── index.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── Home.module.css
│   └── components/
│       └── [Your components here]
├── .gitignore
├── package.json
├── README.md
└── next.config.js
```

:::note
**Key Directories and Files**:
- **`public/`**: Contains static assets like images, fonts, and other files that you want to serve directly. Files in this directory are accessible from the root URL.
- **`src/pages/`**: Each file in this directory automatically becomes a route. For example, `pages/index.js` maps to `/`, and `pages/about.js` maps to `/about`.
  - **`_app.js`**: Customizes the default App component used by Next.js to initialize pages.
  - **`_document.js`**: Customizes the default Document component, useful for augmenting the application's HTML and body tags.
  - **`api/`**: Contains serverless functions that map to `/api/*` routes.
- **`src/styles/`**: Contains CSS files to style your application.
- **`src/components/`**: Contains React components used across your application.
- **`next.config.js`**: Customizes the Next.js configuration.
- **`package.json`**: Lists dependencies and scripts for your project.
:::