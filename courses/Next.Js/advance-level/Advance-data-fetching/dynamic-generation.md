---
id: lesson-2
title: "Combining Static and Dynamic Data Fetching"
sidebar_label: Combining Static and Dynamic Data Fetching
sidebar_position: 2
description: "Combining Static and Dynamic Data Fetching"
tags: [courses,Advance-level,FramWorks,Introduction]
--- 
 

You can combine static and dynamic data fetching to build more flexible and performant applications.

1. **Combining Static Generation with Client-side Fetching**:
   ```javascript
   // pages/index.js
   import { useEffect, useState } from 'react';

   export async function getStaticProps() {
     // Fetch static data
     const res = await fetch('https://api.example.com/static-data');
     const staticData = await res.json();

     return {
       props: {
         staticData,
       },
       revalidate: 60, // Revalidate every 60 seconds
     };
   }

   export default function Home({ staticData }) {
     const [dynamicData, setDynamicData] = useState(null);

     useEffect(() => {
       // Fetch dynamic data on client-side
       fetch('https://api.example.com/dynamic-data')
         .then((res) => res.json())
         .then((data) => setDynamicData(data));
     }, []);

     return (
       <div>
         <h1>Combining Static and Dynamic Data Fetching</h1>
         <h2>Static Data</h2>
         <pre>{JSON.stringify(staticData, null, 2)}</pre>
         <h2>Dynamic Data</h2>
         {dynamicData ? (
           <pre>{JSON.stringify(dynamicData, null, 2)}</pre>
         ) : (
           <p>Loading...</p>
         )}
       </div>
     );
   }
   ```

#### Optimizing Data Fetching for Performance

1. **Minimizing API Calls**:
   - Cache data at various levels (CDN, server, client) to minimize API calls.
   - Use tools like `SWR` or `React Query` to manage caching and synchronization of data.

2. **Using Incremental Static Regeneration (ISR)**:
   - ISR allows pages to be regenerated incrementally without rebuilding the entire site.
   ```javascript
   // pages/index.js
   export async function getStaticProps() {
     const res = await fetch('https://api.example.com/data');
     const data = await res.json();

     return {
       props: {
         data,
       },
       revalidate: 60, // Revalidate every 60 seconds
     };
   }

   export default function Home({ data }) {
     return (
       <div>
         <h1>Optimized Data Fetching</h1>
         <pre>{JSON.stringify(data, null, 2)}</pre>
       </div>
     );
   }
   ```

3. **Prefetching Data**:
   - Prefetch data for links using the `next/link` component to improve navigation speed.
   ```javascript
   import Link from 'next/link';

   export default function Home() {
     return (
       <div>
         <h1>Home Page</h1>
         <Link href="/about">
           <a>Go to About</a>
         </Link>
       </div>
     );
   }
   ```

4. **Using SWR for Client-side Caching**:
   - `SWR` (Stale-While-Revalidate) is a React Hooks library for data fetching that provides caching and revalidation.
   ```javascript
   import useSWR from 'swr';

   const fetcher = (url) => fetch(url).then((res) => res.json());

   export default function DataComponent() {
     const { data, error } = useSWR('/api/data', fetcher);

     if (error) return <div>Failed to load</div>;
     if (!data) return <div>Loading...</div>;

     return <div>Data: {JSON.stringify(data)}</div>;
   }
   ```
 