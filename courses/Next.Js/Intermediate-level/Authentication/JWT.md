---
id: lesson-2
title: "JWT-Based Authentication"
sidebar_label: JWT-Based Authentication 
sidebar_position: 2
description: "JWT-Based Authentication"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
 

JWT (JSON Web Token) is a common method for securing APIs by encoding user information within a token.

1. **Install JWT Dependencies**:
   ```bash
   npm install jsonwebtoken
   ```

2. **Generate JWTs**:
   ```javascript
   // src/utils/jwt.js
   import jwt from 'jsonwebtoken';

   const secret = process.env.JWT_SECRET;

   export function generateToken(user) {
     return jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
   }

   export function verifyToken(token) {
     try {
       return jwt.verify(token, secret);
     } catch (err) {
       return null;
     }
   }
   ```

3. **Protecting API Routes**:
   ```javascript
   // src/pages/api/protected.js
   import { verifyToken } from '../../utils/jwt';

   export default function handler(req, res) {
     const token = req.headers.authorization?.split(' ')[1];
     const user = verifyToken(token);

     if (!user) {
       return res.status(401).json({ message: 'Unauthorized' });
     }

     res.status(200).json({ message: 'This is a protected route', user });
   }
   ```