---
id: lesson-2
title: "Using Apollo Client with Next.js"
sidebar_label: Apollo Client 
sidebar_position: 2
description: "Using Apollo Client with Next.js"
tags: [courses,Advance-level,FramWorks,Introduction]
--- 
  

1. **Create an Apollo Provider**:
   ```javascript
   // lib/apolloClient.js
   import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

   const client = new ApolloClient({
     uri: '/api/graphql',
     cache: new InMemoryCache(),
   });

   export function ApolloProviderWrapper({ children }) {
     return <ApolloProvider client={client}>{children}</ApolloProvider>;
   }
   ```

2. **Wrap the App Component**:
   ```javascript
   // pages/_app.js
   import { ApolloProviderWrapper } from '../lib/apolloClient';

   function MyApp({ Component, pageProps }) {
     return (
       <ApolloProviderWrapper>
         <Component {...pageProps} />
       </ApolloProviderWrapper>
     );
   }

   export default MyApp;
   ```

3. **Query Data in Components**:
   ```javascript
   // components/Hello.js
   import { useQuery, gql } from '@apollo/client';

   const HELLO_QUERY = gql`
     query {
       hello
     }
   `;

   export default function Hello() {
     const { loading, error, data } = useQuery(HELLO_QUERY);

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     return <h1>{data.hello}</h1>;
   }
   ```

4. **Use the Component**:
   ```javascript
   // pages/index.js
   import Hello from '../components/Hello';

   export default function Home() {
     return (
       <div>
         <Hello />
       </div>
     );
   }
   ```

#### Advanced GraphQL Features (Subscriptions, Caching)

1. **Setting Up Subscriptions**:
   - For subscriptions, you need to set up a WebSocket server. First, install the required packages:
     ```bash
     npm install subscriptions-transport-ws @apollo/client graphql-ws
     ```

   - Configure your Apollo Server to support subscriptions:
     ```javascript
     // pages/api/graphql.js
     import { ApolloServer, gql } from 'apollo-server-micro';
     import { useServer } from 'graphql-ws/lib/use/ws';
     import { WebSocketServer } from 'ws';

     const typeDefs = gql`
       type Query {
         hello: String
       }
       type Subscription {
         time: String
       }
     `;

     const resolvers = {
       Query: {
         hello: () => 'Hello, world!',
       },
       Subscription: {
         time: {
           subscribe: (_, __, { pubsub }) => {
             setInterval(() => pubsub.publish('TIME', { time: new Date().toISOString() }), 1000);
             return pubsub.asyncIterator('TIME');
           },
         },
       },
     };

     const pubsub = new PubSub();
     const apolloServer = new ApolloServer({ typeDefs, resolvers, context: { pubsub } });

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

     // Setup WebSocket server
     const wsServer = new WebSocketServer({ port: 4000 });
     useServer({ schema: apolloServer.schema }, wsServer);
     ```

   - Connect to the subscription server in your client:
     ```javascript
     // lib/apolloClient.js
     import { ApolloClient, InMemoryCache, ApolloProvider, split } from '@apollo/client';
     import { WebSocketLink } from '@apollo/client/link/ws';
     import { createHttpLink } from '@apollo/client';
     import { getMainDefinition } from '@apollo/client/utilities';

     const httpLink = createHttpLink({
       uri: '/api/graphql',
     });

     const wsLink = new WebSocketLink({
       uri: 'ws://localhost:4000/graphql',
       options: {
         reconnect: true,
       },
     });

     const splitLink = split(
       ({ query }) => {
         const definition = getMainDefinition(query);
         return (
           definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
         );
       },
       wsLink,
       httpLink
     );

     const client = new ApolloClient({
       link: splitLink,
       cache: new InMemoryCache(),
     });

     export function ApolloProviderWrapper({ children }) {
       return <ApolloProvider client={client}>{children}</ApolloProvider>;
     }
     ```

   - Use subscriptions in your component:
     ```javascript
     // components/Time.js
     import { useSubscription, gql } from '@apollo/client';

     const TIME_SUBSCRIPTION = gql`
       subscription {
         time
       }
     `;

     export default function Time() {
       const { data, loading } = useSubscription(TIME_SUBSCRIPTION);

       if (loading) return <p>Loading...</p>;

       return <p>Current time: {data.time}</p>;
     }
     ```

2. **Optimizing Caching with Apollo Client**:
   - Configure cache policies in Apollo Client:
     ```javascript
     // lib/apolloClient.js
     import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

     const client = new ApolloClient({
       uri: '/api/graphql',
       cache: new InMemoryCache({
         typePolicies: {
           Query: {
             fields: {
               hello: {
                 read(existing) {
                   return existing;
                 },
               },
             },
           },
         },
       }),
     });

     export function ApolloProviderWrapper({ children }) {
       return <ApolloProvider client={client}>{children}</ApolloProvider>;
     }
     ```

3. **Using Advanced GraphQL Features**:
   - Utilize Apollo Client's built-in features for caching, pagination, optimistic UI updates, etc.
   - Refer to Apollo Client documentation for detailed examples and advanced use cases: [Apollo Client Docs](https://www.apollographql.com/docs/react/) 