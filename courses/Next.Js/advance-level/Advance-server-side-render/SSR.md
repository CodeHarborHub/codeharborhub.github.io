---
id: lesson-2
title: "Optimizing SSR for Performance"
sidebar_label: Optimizing SSR
sidebar_position: 2
description: "Optimizing SSR for Performance"
tags: [courses,Advance-level,FramWorks,Introduction]
--- 
   
 

1. **Caching Responses**:
   - Use caching strategies to reduce the load on the server.
   ```javascript
   // pages/index.js
   export async function getServerSideProps(context) {
     const cache = new Map();
     const cacheKey = 'data';
     
     if (cache.has(cacheKey)) {
       return {
         props: {
           data: cache.get(cacheKey),
         },
       };
     }

     const res = await fetch('https://api.example.com/data');
     const data = await res.json();
     cache.set(cacheKey, data);

     return {
       props: {
         data,
       },
     };
   }
   ```

2. **Optimizing Data Fetching**:
   - Fetch only necessary data and minimize the amount of data sent to the client.
   ```javascript
   // pages/index.js
   export async function getServerSideProps(context) {
     const res = await fetch('https://api.example.com/data?fields=id,name');
     const data = await res.json();

     return {
       props: {
         data,
       },
     };
   }
   ```

3. **Using Static Generation with Revalidation**:
   - Use static generation with incremental static regeneration (ISR) for frequently updated data.
   ```javascript
   // pages/index.js
   export async function getStaticProps() {
     const res = await fetch('https://api.example.com/data');
     const data = await res.json();

     return {
       props: {
         data,
       },
       revalidate: 60, // Revalidate every 60 seconds
     };
   }

   export default function Home({ data }) {
     return (
       <div>
         <h1>Data with ISR</h1>
         <pre>{JSON.stringify(data, null, 2)}</pre>
       </div>
     );
   }
   ```

#### SSR with Authentication and Session Management

1. **Implementing Authentication**:
   - Use a library like `next-auth` to handle authentication.
   ```bash
   npm install next-auth
   ```

   ```javascript
   // pages/api/auth/[...nextauth].js
   import NextAuth from 'next-auth';
   import Providers from 'next-auth/providers';

   export default NextAuth({
     providers: [
       Providers.Google({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
       }),
     ],
   });
   ```

2. **Protecting Routes**:
   - Use `getServerSideProps` to check authentication status.
   ```javascript
   // pages/secure-page.js
   import { getSession } from 'next-auth/react';

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

   export default function SecurePage({ session }) {
     return (
       <div>
         <h1>Secure Page</h1>
         <p>Welcome, {session.user.name}!</p>
       </div>
     );
   }
   ```

3. **Session Management**:
   - Manage sessions using cookies or tokens.
   ```javascript
   // lib/auth.js
   import { parseCookies, setCookie, destroyCookie } from 'nookies';

   export function getAuthCookie(context) {
     const cookies = parseCookies(context);
     return cookies.auth;
   }

   export function setAuthCookie(context, token) {
     setCookie(context, 'auth', token, {
       maxAge: 30 * 24 * 60 * 60,
       path: '/',
     });
   }

   export function destroyAuthCookie(context) {
     destroyCookie(context, 'auth');
   }
   ```
 