---
id: lesson-4
title: "Handling Data Fetching Errors"
sidebar_label: Handling Fetching Errors
sidebar_position: 4
description: "Handling Data Fetching Errors"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
 

Handling errors in data fetching is crucial to provide a good user experience.

1. **Error Handling with `getStaticProps` and `getServerSideProps`**:
   ```javascript
   export async function getStaticProps() {
     try {
       const res = await fetch('https://jsonplaceholder.typicode.com/posts');
       const posts = await res.json();
       return { props: { posts } };
     } catch (error) {
       return { props: { error: 'Failed to fetch data' } };
     }
   }

   export default function Home({ posts, error }) {
     if (error) {
       return <div>{error}</div>;
     }

     return (
       <div>
         <h1>Posts</h1>
         <ul>
           {posts.map(post => (
             <li key={post.id}>{post.title}</li>
           ))}
         </ul>
       </div>
     );
   }
   ```

2. **Error Handling with SWR**:
   ```javascript
   import useSWR from 'swr';

   const fetcher = url => fetch(url).then(res => res.json());

   export default function Home() {
     const { data: posts, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

     if (error) return <div>Failed to load: {error.message}</div>;
     if (!posts) return <div>Loading...</div>;

     return (
       <div>
         <h1>Posts</h1>
         <ul>
           {posts.map(post => (
             <li key={post.id}>{post.title}</li>
           ))}
         </ul>
       </div>
     );
   }
   ``` 

  **Output:**
  <BrowserWindow >
    <div>  
         Failed to load: 404 server not found
    </div>
  </BrowserWindow>