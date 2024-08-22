---
title: "Getting Started with NextJS"
slidebar_label: "Getting Started with NextJS"
authors: [mohitmuktikant]
tags: [NextJS, Node, JS]
date: 2024-07-13
hide_table_of_contents: true
---

Next.js is a popular React framework that enables server-side rendering and static site generation, offering an optimized, flexible approach to building modern web applications.

<!-- truncate -->

### What is Next.js?

- Next.js is a powerful framework built on top of React, designed to provide the best developer experience with features such as:
- **Server-Side Rendering** (SSR)
- **Static Site Generation** (SSG)
- **API Routes**
- **Incremental Static Regeneration** (ISR)
- **File-based routing**

### Why Use Next.js?

- **Performance:** Automatically optimizes the performance of your application.
- **SEO:** Enhances SEO with server-side rendering.
- **Flexibility:** Offers a hybrid approach allowing SSR and SSG.
- **Developer Experience:** Simplifies development with built-in CSS and Sass support, fast refresh, and API routes.

## Setting Up a Next.js Project

**Prerequisites**
Make sure that you have `Node.js` and `npm` installed. You can check this by running:

```
node -v
npm -v
```

### Step 1: Create a `Next.js` App

You can quickly create a new Next.js application using the following command:

```
npx create-next-app@latest my-nextjs-app
cd my-nextjs-app
```

### Step 2: Run the Development Server

Start the development server with:

```
npm run dev
```

Navigate to `http://localhost:3000` to see your `Next.js` app in action.

### Step 3: Project Structure

A basic Next.js project includes the following structure:

```
my-nextjs-app/
  ├── node_modules/
  ├── public/
  ├── pages/
  ├── styles/
  ├── .gitignore
  ├── package.json
  ├── README.md
```

- `pages/`: Contains all the routes for your application.
- `public/`: Static files like images.
- `styles/`: Global styles and CSS modules.

### Step 4: Creating Pages

Create a new page by adding a file to the pages directory. For example, create `pages/about.js`:

```javascript
const About = () => {
  return <h1>About Page</h1>;
};

export default About;
```

Navigate to `http://localhost:3000/about` to see the new page.

### Adding CSS and Styling

`Next.js` supports _global styles_ and _CSS modules_ out of the box.

#### Global Styles

Edit the `styles/globals.css` file to add global styles:

```css
body {
  font-family: Arial, sans-serif;
}
```

These styles will apply to the entire application.

#### CSS Modules

Create a `CSS module` in the styles directory:

```css
/* styles/Home.module.css */
.container {
  padding: 20px;
  background-color: #f0f0f0;
}
```

Use this `module` in a component:

```javascript
// pages/index.js
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
```

## Fetching Data in Next.js

#### Server-Side Rendering (SSR)

Fetch data on each request with `getServerSideProps`:

```javascript
// pages/index.js
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}

const Home = ({ data }) => {
  return <div>{/* Render data */}</div>;
};

export default Home;
```

#### Static Site Generation (SSG)

Fetch data at build time with `getStaticProps`:

```javascript
// pages/index.js
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();

  return { props: { data } };
}

const Home = ({ data }) => {
  return <div>{/* Render data */}</div>;
};

export default Home;
```

## API Routes

Next.js allows you to create API endpoints inside the `pages/api` directory.

#### Example API Route

Create `pages/api/hello.js`:

```javascript
export default function handler(req, res) {
  res.status(200).json({ message: "Hello, world!" });
}
```

Access this endpoint at `http://localhost:3000/api/hello`.

## Deployment

Deploy your `Next.js` application easily with platforms like _Vercel_, which offers seamless integration with Next.js.

#### Deploy to Vercel

1. Push your code to GitHub, GitLab, or Bitbucket.
2. Import your repository into Vercel.
3. Follow the prompts to deploy.

Your _Next.js_ application is now live!

### Conclusion:

- Next.js is a powerful and _flexible framework_ that simplifies the development of modern web applications with React.
- By leveraging its built-in features like _SSR_, _SSG_, and _API routes_, you can create **high-performance**, **SEO-friendly applications** with ease.
- Start your Next.js journey today and unlock the potential of _server-side_ rendering and _static site generation_ for your projects.
