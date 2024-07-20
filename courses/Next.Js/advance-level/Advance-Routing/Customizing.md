---
id: lesson-2
title: "Customizing the Next.js Router"
sidebar_label: Customizing the Next.js Router
sidebar_position: 2
description: "Customizing the Next.js Router"
tags: [courses,Advance-level,FramWorks,Introduction]
--- 
 
 

Next.js allows you to customize the router to add additional functionalities or handle specific routing needs.

1. **Using Custom Server with Express.js**:
   ```javascript
   // server.js
   const express = require('express');
   const next = require('next');

   const dev = process.env.NODE_ENV !== 'production';
   const app = next({ dev });
   const handle = app.getRequestHandler();

   app.prepare().then(() => {
     const server = express();

     server.get('/custom-route', (req, res) => {
       return app.render(req, res, '/custom', req.query);
     });

     server.all('*', (req, res) => {
       return handle(req, res);
     });

     server.listen(3000, (err) => {
       if (err) throw err;
       console.log('> Ready on http://localhost:3000');
     });
   });
   ```

2. **Adding Custom Route to Next.js Router**:
   ```javascript
   // next.config.js
   module.exports = {
     async rewrites() {
       return [
         {
           source: '/custom-route',
           destination: '/custom',
         },
       ];
     },
   };
   ```

#### Route-Level Code Splitting

Route-level code splitting ensures that only the necessary code for the current route is loaded, improving performance by reducing the initial load time.

1. **Implementing Route-Level Code Splitting**:
   - Next.js automatically splits your code into separate bundles for each page. Each page only loads the necessary code when it is accessed.
   - You can leverage dynamic imports to further enhance code splitting:
     ```javascript
     // pages/index.js
     import dynamic from 'next/dynamic';

     const DynamicComponent = dynamic(() => import('../components/DynamicComponent'));

     export default function Home() {
       return (
         <div>
           <h1>Home Page</h1>
           <DynamicComponent />
         </div>
       );
     }
     ```

2. **Using `dynamic` for Code Splitting with Custom Loading**:
   ```javascript
   // pages/index.js
   import { useState } from 'react';
   import dynamic from 'next/dynamic';

   const DynamicComponentWithCustomLoading = dynamic(() => import('../components/DynamicComponent'), {
     loading: () => <p>Loading...</p>,
   });

   export default function Home() {
    const [loadDynamicComponent, setLoadDynamicComponent] = useState(false);

    const handleClick = () => {
      setLoadDynamicComponent(true);
    };
     return (
       <div>
         <h1>Home Page</h1>
         <button onClick={handleClick}>Load Dynamic Component</button>
         {loadDynamicComponent && <DynamicComponentWithCustomLoading />}
       </div>
     );
   }
   ```
 **Output:**
    <BrowserWindow>
      <div>
         <h1 style={{fontSize:"1.5rem"}}>Home Page</h1>
         <button onClick={()=>{
          let button=document.getElementById("button")
          button.style.display="none"
          let Interval=setInterval(()=>{
          let Dynamic=document.getElementById("Dynamic")
          let datas=["1st Content","2nd Content","3rd Content"]
          let Index
          if(Dynamic && Dynamic.textContent && Dynamic.textContent.length>1){
          if(Dynamic.textContent==="Switch Dynamic Content"){
            Index=0
          }
          else{
            if(datas.indexOf(Dynamic.textContent)==2){
              Index=0
            }
            else{Index=datas.indexOf(Dynamic.textContent)+1}
          }
          Dynamic.textContent=datas[Index]
          } 
          else{
            clearInterval(Interval)
            return
          }
          },1000)
         }} id="button" style={{padding:"0.8rem 2rem",fontWeight:"600",borderRadius:"0.6rem",border:"0.1rem solid",margin:"0.5rem"}}>Load Dynamic Component</button>
         <h2 style={{fontSize:"1.3rem"}} id="Dynamic">Switch Dynamic Content</h2>
      </div>
    </BrowserWindow>