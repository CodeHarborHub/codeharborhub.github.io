---
id: lesson-1
title: "Advanced Data Fetching in Next.js"
sidebar_label: Advanced Data Fetching in Next.js
sidebar_position: 1
description: "Advanced Data Fetching in Next.js"
tags: [courses,Advance-level,FramWorks,Introduction]
--- 
 
 

Next.js provides powerful data fetching capabilities to optimize the performance and scalability of your application. This involves using static generation with revalidation, server-side rendering with caching strategies, combining static and dynamic data fetching, and optimizing these processes for performance.

#### Static Generation with Revalidation

Static generation with revalidation allows you to generate static pages at build time and update them at runtime when necessary.

1. **Setting up Static Generation with Revalidation**:
   ```javascript
   // pages/index.js
   export async function getStaticProps() {
     // Fetch data
     const res = await fetch('https://api.example.com/data');
     const data = await res.json();

     return {
       props: {
         data,
       },
       revalidate: 10, // Revalidate every 10 seconds
     };
   }

   export default function Home({ data }) {
     return (
       <div>
         <h1>Static Generation with Revalidation</h1>
         <pre>{JSON.stringify(data, null, 2)}</pre>
       </div>
     );
   }
   ```



#### Server-side Rendering with Caching Strategies

Server-side rendering (SSR) can be optimized using caching strategies to improve performance and reduce server load.

1. **Setting up Server-side Rendering with Caching**:
   ```javascript
   // pages/ssr.js
   export async function getServerSideProps(context) {
     const res = await fetch('https://api.example.com/data');
     const data = await res.json();

     context.res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

     return {
       props: {
         data,
       },
     };
   }

   export default function SSR({ data }) {
     return (
       <div>
         <h1>Server-side Rendering with Caching</h1>
         <pre>{JSON.stringify(data, null, 2)}</pre>
       </div>
     );
   }
   ```

2. **Using Cache-Control Headers**:
   - `s-maxage=10`: Cache the response on the server for 10 seconds.
   - `stale-while-revalidate`: Serve stale content while revalidating in the background.

**Output:**
    <BrowserWindow url="http://localhost:3000/users">
      <div>
          <h1>Static Generation with Revalidation</h1>
          <button onClick={()=>{
             let text=document.getElementById("text")
             let details=[{
                    id:"1",
                    name:"siva",
                    info:"Developer"
                   },{
                     id:"2",
                     name:"John",
                     info:"Developer"
                   }] 
              text.textContent=JSON.stringify(details, null, 2) 
             }} style={{padding:"1rem 2rem",border:"none",borderRadius:"0.6rem",color:"white",background:"black",fontWeight:"600",cursor:"pointer"}}>click to Fetch</button>
          <br />
          <pre id="text" style={{margin:"2rem auto"}}></pre>
      </div>
    </BrowserWindow> 