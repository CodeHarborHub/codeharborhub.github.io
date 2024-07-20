---
id: lesson-1
title: "API Routes in Next.js"
sidebar_label: API Routes
sidebar_position: 1
description: "API Routes in Next.js"
tags: [courses,beginner-level,FramWorks,Introduction]
--- 

Next.js provides a simple way to create API routes that you can use to handle backend logic, such as interacting with a database or performing server-side operations. These routes can be created within the `src/pages/api` directory.

#### Creating API Routes in Next.js

1. **Basic API Route**:
   - Create a new file in the `src/pages/api` directory. For example, create `hello.js`:
     ```javascript
     // src/pages/api/hello.js
     export default function handler(req, res) {
       res.status(200).json({ message: 'Hello, world!' });
     }
     ```
   - This API route will be accessible at `/api/hello`.

2. **Handling API Requests**:
   - API routes have access to the request (`req`) and response (`res`) objects, allowing you to handle different HTTP methods (GET, POST, PUT, DELETE, etc.).

3. **Example with Multiple Methods**:
   ```javascript
   // src/pages/api/users.js
   export default function handler(req, res) {
     const { method } = req;

     switch (method) {
       case 'GET':
         // Handle GET request
         res.status(200).json({ message: 'GET request' });
         break;
       case 'POST':
         // Handle POST request
         const data = req.body;
         res.status(201).json({ message: 'User created', data });
         break;
       default:
         res.setHeader('Allow', ['GET', 'POST']);
         res.status(405).end(`Method ${method} Not Allowed`);
     }
   }
   ```
