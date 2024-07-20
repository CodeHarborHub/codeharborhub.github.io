---
id: lesson-2
title: "Using Middleware for Logging, Authentication, etc."
sidebar_label: Using Middleware for Logging, Authentication, etc.
sidebar_position: 2
description: "Using Middleware for Logging, Authentication, etc."
tags: [courses,intermediate-level,FramWorks,Introduction]
--- 


1. **Logging Middleware**:
   ```javascript
   server.use((req, res, next) => {
     console.log(`Request URL: ${req.url}, Method: ${req.method}`);
     next();
   });
   ```

2. **Authentication Middleware**:
   ```javascript
   const jwt = require('jsonwebtoken');

   server.use((req, res, next) => {
     const token = req.headers.authorization?.split(' ')[1];
     if (token) {
       try {
         req.user = jwt.verify(token, process.env.JWT_SECRET);
       } catch (err) {
         return res.status(401).json({ message: 'Invalid Token' });
       }
     }
     next();
   });
   ```

3. **Combining Middleware**:
   - Middleware can be combined for various purposes:
     ```javascript
     server.use((req, res, next) => {
       console.log(`Request URL: ${req.url}`);
       next();
     });

     server.use((req, res, next) => {
       const token = req.headers.authorization?.split(' ')[1];
       if (token) {
         try {
           req.user = jwt.verify(token, process.env.JWT_SECRET);
         } catch (err) {
           return res.status(401).json({ message: 'Invalid Token' });
         }
       }
       next();
     });
     ```
