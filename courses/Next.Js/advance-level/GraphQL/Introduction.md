---
id: lesson-1
title: "Next.js and GraphQL"
sidebar_label:  GraphQL
sidebar_position: 1
description: "Next.js and GraphQL"
tags: [courses,Advance-level,FramWorks,Introduction]
--- 
   

Integrating GraphQL with Next.js allows you to leverage the powerful capabilities of GraphQL for querying data while enjoying the benefits of Next.js, such as server-side rendering and static site generation. Here's a guide to setting up a GraphQL server with Next.js, querying GraphQL APIs from Next.js, using Apollo Client, and advanced GraphQL features.

#### Setting up a GraphQL Server with Next.js

1. **Install Required Packages**:
   ```bash
   npm install apollo-server-micro graphql
   ```

2. **Create a GraphQL Server**:
   ```javascript
   // pages/api/graphql.js
   import { ApolloServer, gql } from 'apollo-server-micro';

   const typeDefs = gql`
     type Query {
       hello: String
     }
   `;

   const resolvers = {
     Query: {
       hello: () => 'Hello, world!',
     },
   };

   const apolloServer = new ApolloServer({ typeDefs, resolvers });

   export const config = {
     api: {
       bodyParser: false,
     },
   };

   const startServer = apolloServer.start();

   export default async function handler(req, res) {
     await startServer;
     await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
   }
   ```

3. **Test the GraphQL Server**:
   - Start your Next.js development server and navigate to `/api/graphql`.
   - Use a tool like GraphQL Playground or Insomnia to send queries to your GraphQL endpoint.

#### Querying GraphQL APIs from Next.js

1. **Install Apollo Client**:
   ```bash
   npm install @apollo/client graphql
   ```

2. **Set up Apollo Client**:
   ```javascript
   // lib/apolloClient.js
   import { ApolloClient, InMemoryCache } from '@apollo/client';

   const client = new ApolloClient({
     uri: '/api/graphql',
     cache: new InMemoryCache(),
   });

   export default client;
   ```

3. **Query GraphQL APIs in a Next.js Page**:
   ```javascript
   // pages/index.js
   import { gql } from '@apollo/client';
   import client from '../lib/apolloClient';

   export async function getStaticProps() {
     const { data } = await client.query({
       query: gql`
         query {
           hello
         }
       `,
     });

     return {
       props: {
         message: data.hello,
       },
     };
   }

   export default function Home({ message }) {
     return (
       <div>
         <h1>{message}</h1>
       </div>
     );
   }
   ```