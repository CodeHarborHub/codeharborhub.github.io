---
id: lesson-1
title: "Middleware and Custom Server in Next.js"
sidebar_label: Middleware and Custom Server in Next.js
sidebar_position: 1
description: "Middleware and Custom Server in Next.js"
tags: [courses,intermediate-level,FramWorks,Introduction]
--- 
 

Middleware and custom servers in Next.js can enhance functionality by adding features like logging, authentication, and advanced routing. Below, we'll explore how to implement middleware, set up a custom server using Express.js, and utilize middleware for various purposes.

#### Understanding and Using Middleware in Next.js

Middleware in Next.js can be added at the API route level or through a custom server setup.

1. **API Route Middleware**:
   - Middleware functions can be added directly in API routes to handle specific tasks like logging and authentication.

   **Example: Logging Middleware for an API Route**:
   ```javascript
   // src/pages/api/logged.js
   export default function handler(req, res) {
     console.log(`Request method: ${req.method}`);
     res.status(200).json({ message: 'Logged request method' });
   }
   ```

2. **Global Middleware Using Custom Server**:
   - For more complex middleware usage, setting up a custom server with Express.js allows applying middleware globally.

#### Creating a Custom Server with Express.js

A custom server can provide more control over the request handling process. Here's how to set up a custom server with Express.js:

1. **Install Required Packages**:
   ```bash
   npm install express
   ```

2. **Set Up the Custom Server**:
   - Create a `server.js` file at the root of your project:
     ```javascript
     // server.js
     const express = require('express');
     const next = require('next');

     const dev = process.env.NODE_ENV !== 'production';
     const app = next({ dev });
     const handle = app.getRequestHandler();

     app.prepare().then(() => {
       const server = express();

       // Example of a custom middleware for logging
       server.use((req, res, next) => {
         console.log(`Request URL: ${req.url}`);
         next();
       });

       // Example route
       server.get('/custom', (req, res) => {
         return app.render(req, res, '/custom', req.query);
       });

       // Default Next.js request handler
       server.all('*', (req, res) => {
         return handle(req, res);
       });

       server.listen(3000, err => {
         if (err) throw err;
         console.log('> Ready on http://localhost:3000');
       });
     });
     ```

3. **Modify `package.json` to Use the Custom Server**:
   ```json
   // package.json
   "scripts": {
     "dev": "node server.js",
     "build": "next build",
     "start": "NODE_ENV=production node server.js"
   }
   ```
