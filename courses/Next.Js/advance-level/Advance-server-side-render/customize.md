---
id: lesson-1
title: "Advanced Server-Side Rendering (SSR) in Next.js"
sidebar_label: Advanced SSR 
sidebar_position: 1
description: "Advanced Server-Side Rendering (SSR) in Next.js"
tags: [courses,Advance-level,FramWorks,Introduction]
--- 
   

Server-Side Rendering (SSR) in Next.js allows for dynamic data fetching and rendering on the server, providing a performant and SEO-friendly experience. This guide covers customizing the SSR process, handling complex data fetching and state management, optimizing SSR for performance, and implementing SSR with authentication and session management.

#### Customizing the Server-Side Rendering Process

1. **Customizing `getServerSideProps`**:
   - Use `getServerSideProps` to fetch data on each request.
   ```javascript
   // pages/index.js
   export async function getServerSideProps(context) {
     const res = await fetch('https://api.example.com/data');
     const data = await res.json();

     return {
       props: {
         data,
       },
     };
   }

   export default function Home({ data }) {
     return (
       <div>
         <h1>Data from Server</h1>
         <pre>{JSON.stringify(data, null, 2)}</pre>
       </div>
     );
   }
   ```

2. **Handling Complex Data Fetching**:
   - Perform multiple data fetches or handle errors within `getServerSideProps`.
   ```javascript
   // pages/index.js
   export async function getServerSideProps(context) {
     try {
       const [res1, res2] = await Promise.all([
         fetch('https://api.example.com/data1'),
         fetch('https://api.example.com/data2'),
       ]);
       const data1 = await res1.json();
       const data2 = await res2.json();

       return {
         props: {
           data1,
           data2,
         },
       };
     } catch (error) {
       return {
         props: {
           error: 'Failed to fetch data',
         },
       };
     }
   }

   export default function Home({ data1, data2, error }) {
     if (error) {
       return <p>{error}</p>;
     }

     return (
       <div>
         <h1>Data from Server</h1>
         <pre>{JSON.stringify(data1, null, 2)}</pre>
         <pre>{JSON.stringify(data2, null, 2)}</pre>
       </div>
     );
   }
   ```

#### Handling Complex Data Fetching and State Management

1. **Integrating Redux with SSR**:
   - Set up Redux store and integrate with `getServerSideProps`.
   ```javascript
   // store.js
   import { createStore } from 'redux';
   import rootReducer from './reducers';

   export const initializeStore = (preloadedState) => {
     return createStore(rootReducer, preloadedState);
   };
   ```

   ```javascript
   // pages/_app.js
   import { Provider } from 'react-redux';
   import { initializeStore } from '../store';

   export default function App({ Component, pageProps }) {
     const store = initializeStore(pageProps.initialReduxState);

     return (
       <Provider store={store}>
         <Component {...pageProps} />
       </Provider>
     );
   }
   ```

   ```javascript
   // pages/index.js
   import { useSelector } from 'react-redux';
   import { initializeStore } from '../store';
   import { fetchData } from '../actions';

   export async function getServerSideProps() {
     const reduxStore = initializeStore();
     const { dispatch } = reduxStore;

     await dispatch(fetchData());

     return {
       props: {
         initialReduxState: reduxStore.getState(),
       },
     };
   }

   export default function Home() {
     const data = useSelector((state) => state.data);

     return (
       <div>
         <h1>Data from Redux Store</h1>
         <pre>{JSON.stringify(data, null, 2)}</pre>
       </div>
     );
   }
   ```