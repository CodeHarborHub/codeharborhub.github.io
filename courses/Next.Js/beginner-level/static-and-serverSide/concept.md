---
id: lesson-2
title: "Concepts of static and server-side rendering"
sidebar_label: Concepts
sidebar_position: 2
description: "Concepts of static and server-side rendering"
tags: [courses,beginner-level,FramWorks,Introduction]
---
 
#### Implementing Static Generation (`getStaticProps`)

`getStaticProps` is a Next.js function that allows you to fetch data at build time to pre-render a page.

1. **Creating a Page with `getStaticProps`**:
   ```javascript
   // src/pages/posts/[id].js
   import { useRouter } from 'next/router';

   export async function getStaticProps({ params }) {
     // Fetch data for the post using the id from params
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
     const post = await res.json();

     return {
       props: {
         post,
       },
     };
   }

   export async function getStaticPaths() {
     // Specify dynamic routes to pre-render based on data
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     const posts = await res.json();

     const paths = posts.map(post => ({
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

#### Implementing Server-Side Rendering (`getServerSideProps`)

`getServerSideProps` is a Next.js function that allows you to fetch data on each request to pre-render a page.

1. **Creating a Page with `getServerSideProps`**:
   ```javascript
   // src/pages/profile.js
   export async function getServerSideProps(context) {
     // Fetch data on each request
     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
     const profile = await res.json();

     return {
       props: {
         profile,
       },
     };
   }

   export default function Profile({ profile }) {
     return (
       <div>
         <h1>{profile.name}</h1>
         <p>{profile.email}</p>
       </div>
     );
   }
   ```
    <BrowserWindow url="http://localhost:3000/profile">
          <div> 
            <h1>John</h1>
            <p>johnexample@gmail.com</p>
           </div>  
    </BrowserWindow>

2. **Explanation**:
   - `getServerSideProps` fetches data on each request and passes it as props to the page component.
   - This method ensures that the page is always up-to-date with the latest data.

#### Incremental Static Regeneration (ISR)

ISR allows you to update static pages after they have been built, without requiring a full rebuild of the site.

1. **Implementing ISR with `revalidate`**:
   ```javascript
   // src/pages/posts/[id].js
   export async function getStaticProps({ params }) {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
     const post = await res.json();

     return {
       props: {
         post,
       },
       revalidate: 10, // Revalidate the page every 10 seconds
     };
   }

   export async function getStaticPaths() {
     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     const posts = await res.json();

     const paths = posts.map(post => ({
       params: { id: post.id.toString() },
     }));

     return {
       paths,
       fallback: true,
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
  <BrowserWindow url="http://localhost:3000/post/3">
        <div id="screen"> 
        Loading...
        </div> 
        <button style={{margin:"1rem",padding:"0.5rem 1.2rem"}} onClick={()=>{
        let screen = document.getElementById("screen"); 
        let post=document.createElement("h1")
        let body=document.createElement("p")
        post.textContent="Blog worked" 
        body.textContent="Hello users learn course and gain knowledage.keep connect with our website."
            screen.textContent = ""  
            screen.appendChild(post)
            screen.appendChild(body)
            }}>Show Answer</button>
  </BrowserWindow>
2. **Explanation**:
   - `revalidate`: Specifies the number of seconds after which the page should be regenerated.
   - With ISR, the page will be updated in the background after the specified time, providing fresh content without a full rebuild.
 