---
id: lesson-1
title: "Data Fetching and Caching in Next.js"
sidebar_label: Data Fetching and Caching
sidebar_position: 1
description: "Data Fetching and Caching in Next.js"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
  

Efficient data fetching and caching are crucial for building performant and responsive web applications. Next.js provides several methods for fetching data, including the use of the SWR (Stale-While-Revalidate) library for caching. Additionally, Next.js supports fetching data from GraphQL APIs.

#### Fetching Data from APIs

Next.js allows you to fetch data in different ways depending on your requirements. The primary methods are:

1. **`getStaticProps`**: Fetch data at build time for static generation.
2. **`getServerSideProps`**: Fetch data on each request for server-side rendering.
3. **Client-Side Fetching**: Fetch data on the client side, typically using `useEffect`.

**Example with `getStaticProps`**:
```javascript
// src/pages/index.js
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
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

**Example with `getServerSideProps`**:
```javascript
// src/pages/index.js
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
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

**Example with Client-Side Fetching**:
```javascript
// src/pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts);
    }
    fetchData();
  }, []);

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

  <BrowserWindow url="http://localhost:3000/post/3">
    <h1>Posts</h1>
    <ul>
      <li>Post 1</li>
      <li>Post 2</li>
      <li>Post 3</li>
      <li>Post 4</li>
      <li>Post 5</li>
      <li>Post 6</li>
    </ul>
  </BrowserWindow>