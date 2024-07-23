---
id: lesson-4
title: "Protecting Routes and API Endpoints"
sidebar_label: Protecting Routes and API Endpoints 
sidebar_position: 4
description: "Protecting Routes and API Endpoints"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
  

1. **Protecting Next.js Pages**:
   - Use the `getServerSideProps` function to protect pages:
     ```javascript
     // src/pages/protected.js
     import { getSession } from 'next-auth/client';

     export default function ProtectedPage({ session }) {
       if (!session) {
         return <p>Access Denied</p>;
       }

       return <p>Welcome, {session.user.email}</p>;
     }

     export async function getServerSideProps(context) {
       const session = await getSession(context);

       if (!session) {
         return {
           redirect: {
             destination: '/api/auth/signin',
             permanent: false,
           },
         };
       }

       return {
         props: { session },
       };
     }
     ```

2. **Protecting API Endpoints with Middleware**:
   ```javascript
   // src/utils/withAuth.js
   import { verifyToken } from './jwt';

   export function withAuth(handler) {
     return async (req, res) => {
       const token = req.headers.authorization?.split(' ')[1];
       const user = verifyToken(token);

       if (!user) {
         return res.status(401).json({ message: 'Unauthorized' });
       }

       req.user = user;
       return handler(req, res);
     };
   }
   ```

   ```javascript
   // src/pages/api/protected.js
   import { withAuth } from '../../utils/withAuth';

   const handler = (req, res) => {
     res.status(200).json({ message: 'Protected route', user: req.user });
   };

   export default withAuth(handler);
   ```
 