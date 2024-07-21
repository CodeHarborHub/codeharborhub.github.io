---
id: lesson-3
title: "Using GraphQL with Next.js"
sidebar_label: Data Fetching and Caching
sidebar_position: 3
description: "Using GraphQL with Next.js"
tags: [courses,intermediate-level,FramWorks,Introduction]
---
   

You can use GraphQL with Next.js using Apollo Client or other GraphQL clients.

1. **Install Apollo Client**:
   ```bash
   npm install @apollo/client graphql
   ```

2. **Setup Apollo Client**:
   ```javascript
   // src/lib/apolloClient.js
   import { ApolloClient, InMemoryCache } from '@apollo/client';

   const client = new ApolloClient({
     uri: 'https://your-graphql-endpoint',
     cache: new InMemoryCache(),
   });

   export default client;
   ```

3. **Use Apollo Client in a Page**:
   ```javascript
   // src/pages/index.js
   import { ApolloProvider, gql, useQuery } from '@apollo/client';
   import client from '../lib/apolloClient';

   const GET_POSTS = gql`
     query GetPosts {
       posts {
         id
         title
       }
     }
   `;

   function Posts() {
     const { loading, error, data } = useQuery(GET_POSTS);

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error :(</p>;

     return (
       <ul>
         {data.posts.map(post => (
           <li key={post.id}>{post.title}</li>
         ))}
       </ul>
     );
   }

   export default function Home() {
     return (
       <ApolloProvider client={client}>
         <h1>Posts</h1>
         <Posts />
       </ApolloProvider>
     );
   }
   ```
