---
id: lesson-3
title: "Advanced Routing Techniques with a Custom Server"
sidebar_label: Advanced Routing Technique 
sidebar_position: 3
description: "Advanced Routing Techniques with a Custom Server"
tags: [courses,intermediate-level,FramWorks,Introduction]
--- 

A custom server enables more advanced routing capabilities beyond the file-based routing system provided by Next.js.

1. **Custom Route Handling**:
   ```javascript
   server.get('/custom-route', (req, res) => {
     return app.render(req, res, '/custom', req.query);
   });
   ```

2. **Dynamic Routing**:
   ```javascript
   server.get('/post/:id', (req, res) => {
     const actualPage = '/post';
     const queryParams = { id: req.params.id };
     return app.render(req, res, actualPage, queryParams);
   });
   ```

3. **Middleware Specific to Routes**:
   ```javascript
   server.use('/protected', (req, res, next) => {
     const token = req.headers.authorization?.split(' ')[1];
     if (!token) {
       return res.status(401).json({ message: 'Unauthorized' });
     }
     next();
   });

   server.get('/protected', (req, res) => {
     return res.status(200).json({ message: 'This is a protected route' });
   });
   ```
 