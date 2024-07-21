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

     function handleClick(){
       // Fetch dynamic data on client-side
       fetch('https://api.example.com/dynamic-data')
         .then((res) => res.json())
         .then((data) => setDynamicData(data));
     }

     return (
       <div>
         <h1>Combining Static and Dynamic Data Fetching</h1>
         <h2>Static Data</h2>
         <pre>{JSON.stringify(staticData, null, 2)}</pre>
         <h2>Dynamic Data</h2>
         <button onClick={handleClick}>click to Fetch</button>
         {dynamicData ? (
           <pre>{JSON.stringify(dynamicData, null, 2)}</pre>
         ) : (
           <p>Loading...</p>
         )}
       </div>
     );
   }
   ```
**Output:**
    <BrowserWindow url="http://localhost:3000/users">
      <div>
          <h1 style={{fontSize:"1.5rem"}}>Combining Static and Dynamic Data Fetching</h1>
          <h2 style={{fontSize:"1.3rem"}}>Static Data</h2>
          <pre style={{margin:"2rem auto"}}>{`${JSON.stringify([{ id:"1",
                    name:"siva",
                    info:"Developer"
                   },{
                     id:"2",
                     name:"Kumar",
                     info:"Developer"
                   }],null,2)}`}</pre>
          <h2 style={{fontSize:"1.3rem"}}>Dynamic Data</h2>
          <button onClick={()=>{
             let text=document.getElementById("text")
             let loading=document.getElementById("loading")
             let details=[{
                    id:"11",
                    name:"Rohan",
                    info:"Jr.Developer"
                   },{
                     id:"15",
                     name:"Mano",
                     info:"Sr.Developer"
                   }]
              loading.textContent="Loading..."
              setTimeout(() => {
              text.style.display="block"
              loading.textContent=" "
              text.textContent=JSON.stringify(details, null, 2)
              }, 2000)
             }} style={{padding:"1rem 2rem",border:"none",borderRadius:"0.6rem",color:"white",background:"black",fontWeight:"600",cursor:"pointer"}}>click to Fetch</button>
          <br />
          <p id="loading"  style={{margin:"2rem auto"}}></p>
          <pre id="text" style={{margin:"2rem auto",display:"none"}}></pre>
      </div>
    </BrowserWindow> 
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

**Output:**
    <BrowserWindow url="http://localhost:3000/data">
      <div>
          <h1 style={{fontSize:"1.5rem"}}>Optimized Data Fetching</h1> 
          <pre style={{margin:"2rem auto"}}>{`${JSON.stringify([{ id:"1",
                    name:"siva",
                    info:"Developer"
                   },{
                     id:"2",
                     name:"Kumar",
                     info:"Developer"
                   }],null,2)}`}</pre>
      </div>
    </BrowserWindow> 

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

**Output:**
    <BrowserWindow>
      <div>
          <h1 style={{fontSize:"1.5rem"}} id="Text">Home Page</h1> 
          <button style={{textDecoration:"underline",color:"blue",border:"none",background:"transparent",cursor:"pointer"}}
          onClick={()=>{
            let text=document.getElementById("Text")
            text.textContent="About page"
            let button=document.getElementById("button")
            button.style.display="none"
          }}
           id="button">Go to About</button>
      </div>
    </BrowserWindow> 


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

