---
id: lesson-1
title: "Styling in Next.js"
sidebar_label: Styling
sidebar_position: 1
description: "Styling in Next.js"
tags: [courses,beginner-level,FramWorks,Introduction]
--- 

Next.js offers several ways to style your applications, including using plain CSS, CSS Modules, Styled JSX, and integrating with popular CSS-in-JS libraries like styled-components and emotion.

#### Using CSS in Next.js

You can use global CSS files in your Next.js application by importing them in your `src/pages/_app.js` file.

1. **Create a Global CSS File**:
   - Create a CSS file in the `src/styles` directory, e.g., `globals.css`:
     ```css
     /* src/styles/globals.css */
     body {
       margin: 0;
       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
         'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
         sans-serif;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
     }

     code {
       font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
     }
     ```

2. **Import the Global CSS File**:
   - Import the CSS file in `src/pages/_app.js`:
     ```javascript
     // src/pages/_app.js
     import '../styles/globals.css';

     function MyApp({ Component, pageProps }) {
       return <Component {...pageProps} />;
     }

     export default MyApp;
     ```

#### CSS Modules

CSS Modules provide a way to scope CSS to a specific component, avoiding global namespace collisions.

1. **Create a CSS Module File**:
   - Create a CSS Module file, e.g., `Home.module.css`:
     ```css
     /* src/styles/Home.module.css */
     .container {
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       height: 100vh;
     }

     .title {
       font-size: 4rem;
       color: #0070f3;
     }
     ```

2. **Import and Use the CSS Module in a Component**:
   - Import and apply the styles in your component:
     ```javascript
     // src/pages/index.js
     import styles from '../styles/Home.module.css';

     export default function Home() {
       return (
         <div className={styles.container}>
           <h1 className={styles.title}>Welcome to Next.js!</h1>
         </div>
       );
     }
     ```

#### Styled JSX

Styled JSX is built into Next.js and allows you to write scoped CSS directly within your components.

1. **Use Styled JSX in a Component**:
   ```javascript
   // src/pages/index.js
   export default function Home() {
     return (
       <div>
         <h1>Welcome to Next.js!</h1>
         <style jsx>{`
           h1 {
             color: #0070f3;
             font-size: 4rem;
           }
         `}</style>
       </div>
     );
   }
   ```