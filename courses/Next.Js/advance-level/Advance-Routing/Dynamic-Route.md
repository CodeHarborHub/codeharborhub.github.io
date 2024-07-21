---
id: lesson-1
title: "Advanced Routing Techniques in Next.js"
sidebar_label: Advanced Routing Techniques 
sidebar_position: 1
description: "Advanced Routing Techniques in Next.js"
tags: [courses,Advance-level,FramWorks,Introduction]
--- 
  

Advanced routing techniques in Next.js enable you to build more flexible and optimized applications. These techniques include dynamic API routes, middleware for route protection and redirects, customizing the Next.js router, and implementing route-level code splitting.

#### Dynamic API Routes

Dynamic API routes allow you to create API endpoints that can handle dynamic parameters.

1. **Creating Dynamic API Routes**:
   ```javascript
   // pages/api/user/[id].js
   export default function handler(req, res) {
     const {
       query: { id },
       method,
     } = req;

     switch (method) {
       case 'GET':
         // Fetch user data
         res.status(200).json({ id, name: `User ${id}` });
         break;
       case 'PUT':
         // Update user data
         res.status(200).json({ id, name: `Updated User ${id}` });
         break;
       default:
         res.setHeader('Allow', ['GET', 'PUT']);
         res.status(405).end(`Method ${method} Not Allowed`);
         break;
     }
   }
   ```

#### Middleware for Route Protection and Redirects

Middleware can be used to protect routes and handle redirects based on certain conditions, such as user authentication.

1. **Implementing Middleware for Route Protection**:
   ```javascript
   // middleware.js
   import { NextResponse } from 'next/server';

   export function middleware(req) {
     const { pathname } = req.nextUrl;

     // Protect routes starting with /admin
     if (pathname.startsWith('/admin')) {
       const token = req.cookies.get('token');

       if (!token) {
         return NextResponse.redirect('/login');
       }
     }

     return NextResponse.next();
   }
   ```

2. **Adding Middleware to the Next.js Configuration**:
   ```javascript
   // next.config.js
   module.exports = {
     async rewrites() {
       return {
         beforeFiles: [
           { source: '/admin/:path*', destination: '/middleware' },
         ],
       };
     },
   };
   ```