---
id: lesson-1
title: "Pages and Routing in Next.js"
sidebar_label: Pages and Routing
sidebar_position: 1
description: "Pages and Routing in Next.js"
tags: [courses,beginner-level,FramWorks,Introduction]
---
 

#### Creating Pages in Next.js

In Next.js, pages are React components that are stored in the `src/pages` directory. Each file in this directory corresponds to a route in the application.

1. **Basic Page Creation**:
   - To create a new page, add a new file to the `src/pages` directory. For example, to create an "About" page, create `src/pages/about.js`:
     ```javascript
     // src/pages/about.js
     export default function About() {
       return <h1>About Us</h1>;
     }
     ```
   - This file will be accessible at the `/about` URL.

    <BrowserWindow url="http://localhost:3000/about">
        <div>
          <h1>About Us</h1>   
        </div>
    </BrowserWindow>

2. **Home Page**:
   - The default home page is created by adding `index.js` to the `src/pages` directory:
     ```javascript
     // src/pages/index.js
     export default function Home() {
       return <h1>Welcome to Our Site</h1>;
     }
     ```
   - This file will be accessible at the root URL `/`.

    <BrowserWindow url="http://localhost:3000/">
        <div>
          <h1>Welcome to Our Site</h1>   
        </div>
    </BrowserWindow>