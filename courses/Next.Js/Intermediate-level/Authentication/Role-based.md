---
id: lesson-3
title: "Role-Based Access Control"
sidebar_label: Protecting Routes and API Endpoints 
sidebar_position: 3
description: "Role-Based Access Control"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
  
 

1. **Assign Roles to Users**:
   - Modify your user model to include roles:
     ```javascript
     // src/models/User.js
     import mongoose from 'mongoose';

     const UserSchema = new mongoose.Schema({
       name: String,
       email: String,
       role: {
         type: String,
         enum: ['user', 'admin'],
         default: 'user',
       },
     });

     export default mongoose.models.User || mongoose.model('User', UserSchema);
     ```

2. **Create Middleware for Role-Based Access Control**:
   ```javascript
   // src/utils/withRole.js
   import { verifyToken } from './jwt';

   export function withRole(handler, role) {
     return async (req, res) => {
       const token = req.headers.authorization?.split(' ')[1];
       const user = verifyToken(token);

       if (!user || user.role !== role) {
         return res.status(403).json({ message: 'Forbidden' });
       }

       req.user = user;
       return handler(req, res);
     };
   }
   ```

3. **Protect Routes with Role-Based Access Control**:
   ```javascript
   // src/pages/api/admin.js
   import { withRole } from '../../utils/withRole';

   const handler = (req, res) => {
     res.status(200).json({ message: 'Admin route', user: req.user });
   };

   export default withRole(handler, 'admin');
   ```
