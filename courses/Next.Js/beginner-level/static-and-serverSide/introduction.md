---
id: lesson-1
title: "Static and Server-Side Rendering in Next.js"
sidebar_label: Static and Server-Side Rendering 
sidebar_position: 1
description: "Static and Server-Side Rendering in Next.js"
tags: [courses,beginner-level,FramWorks,Introduction]
---
 

#### Difference Between Static and Server-Side Rendering

**Static Rendering (Static Site Generation - SSG)**:
- **Pre-rendering**: Pages are generated at build time, and the HTML is created once and reused for each request.
- **Performance**: Faster since the content is pre-rendered and served as static files.
- **Use Cases**: Ideal for pages that do not require frequent updates, such as blogs, documentation, and marketing pages.

**Server-Side Rendering (SSR)**:
- **On-Demand Rendering**: Pages are generated on each request, fetching data and rendering HTML dynamically.
- **Performance**: Slower compared to static rendering because the server must generate the HTML for each request.
- **Use Cases**: Suitable for pages that require real-time data or frequent updates, such as dashboards, user profiles, and dynamic content.

## Implementing Static Generation (`getStaticProps`)

`getStaticProps` is a Next.js function that allows you to fetch data at build time to pre-render a page.

1. **Creating a Page with `getStaticProps`**:

   ```javascript title="pages/posts/[id].js"
   import { useRouter } from "next/router";

   export async function getStaticProps({ params }) {
     // Fetch data for the post using the id from params
     const res = await fetch(
       `https://jsonplaceholder.typicode.com/posts/${params.id}`,
     );
     const post = await res.json();

     return {
       props: {
         post,
       },
     };
   }

   export async function getStaticPaths() {
     // Specify dynamic routes to pre-render based on data
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
     const posts = await res.json();

     const paths = posts.map((post) => ({
       params: { id: post.id.toString() },
     }));

     return {
       paths,
       fallback: false,
     };
   }

   export default function Post({ post }) {
     const router = useRouter();
     if (router.isFallback) {
       return <div>Loading...</div>;
     }

     return (
       <div>
         <h1>{post.title}</h1>
         <p>{post.body}</p>
       </div>
     );
   }
   ```

2. **Explanation**:

   - `getStaticProps` fetches data at build time and passes it as props to the page component.
   - `getStaticPaths` specifies the dynamic routes to be pre-rendered.
   - `fallback: false` ensures that only the specified paths are generated at build time.
   - `router.isFallback` checks if the page is in fallback mode and displays a loading indicator.
   - The `Post` component displays the post title and body fetched from the API.

## Implementing Server-Side Rendering (`getServerSideProps`)

`getServerSideProps` is a Next.js function that allows you to fetch data on each request to pre-render a page.

1. **Creating a Page with `getServerSideProps`**:

   ```javascript title="pages/user/[id].js"
   import { useRouter } from "next/router";

   export async function getServerSideProps({ params }) {
     // Fetch user data using the id from params
     const res = await fetch(
       `https://jsonplaceholder.typicode.com/users/${params.id}`,
     );
     const user = await res.json();

     return {
       props: {
         user,
       },
     };
   }

   export default function User({ user }) {
     return (
       <div>
         <h1>{user.name}</h1>
         <p>Email: {user.email}</p>
       </div>
     );
   }
   ```

2. **Explanation**:

   - `getServerSideProps` fetches data on each request and passes it as props to the page component.
   - The `User` component displays the user's name and email fetched from the API.

In this lesson, you learned about static and server-side rendering in Next.js and how to implement them using `getStaticProps` and `getServerSideProps` functions. Static rendering is ideal for content that does not change frequently, while server-side rendering is suitable for real-time data and dynamic content.
