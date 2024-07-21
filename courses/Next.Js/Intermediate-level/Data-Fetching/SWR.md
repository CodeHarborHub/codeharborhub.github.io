---
id: lesson-2
title: "SWR (Stale-While-Revalidate) for Data Fetching and Caching"
sidebar_label: SWR (Stale-While-Revalidate)
sidebar_position: 2
description: "SWR (Stale-While-Revalidate) for Data Fetching and Caching"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
 
 

SWR is a React Hooks library for data fetching, providing features like caching, revalidation, focus tracking, and more.

1. **Install SWR**:
   ```bash
   npm install swr
   ```

2. **Using SWR**:
   ```javascript
   // src/pages/index.js
   import useSWR from 'swr';

   const fetcher = url => fetch(url).then(res => res.json());

   export default function Home() {
     const { data: posts, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

     if (error) return <div>Failed to load</div>;
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

**Key Features of SWR**:
- **Stale-While-Revalidate**: Data is returned from the cache first (stale), then fetches the latest data in the background (revalidate).
- **Automatic Revalidation**: Data is revalidated on focus, network reconnect, and interval-based revalidation.
- **Error Handling**: Provides built-in error handling and state management.
