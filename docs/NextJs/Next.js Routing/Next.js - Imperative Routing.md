---
id: routing-ImperativeRouting
title: Next.js - Imperative Routing
sidebar_label: Next.js - Imperative Routing
sidebar_position: 3
tags: [Next.js Routing]
description: "In this section, you will learn about Routing in NEXT ."
---


In Next.js, so far we are using Link react component to navigate from one page to other. There is a programmatic way as well to achive the same using Router component. Generally Router component is used with html tags.

Update index.js file in pages directory as following.

```
import Router from 'next/router'
import Head from 'next/head'

function HomePage(props) {
   return (
      <>
         <Head>
            <title>Welcome to Next.js!</title>
         </Head>
         <div>Welcome to Next.js!</div>
         <span onClick={() => Router.push('/posts/one')}>First Post</span>
         <br/>
         <div>Next stars: {props.stars}</div>
         <img src="/logo.png" alt="TutorialsPoint Logo" />
      </>	    
   )
}

export async function getServerSideProps(context) {
   const res = await fetch('https://api.github.com/repos/vercel/next.js')
   const json = await res.json()
   return {
      props: { stars: json.stargazers_count }
   }
}

export default HomePage

```

Start Next.js Server
Run the following command to start the server −.
```
npm run dev
> nextjs@1.0.0 dev \Node\nextjs
> next

ready - started server on http://localhost:3000
event - compiled successfully
event - build page: /
wait  - compiling...
event - compiled successfully
event - build page: /next/dist/pages/_error
wait  - compiling...
event - compiled successfully

```
## Verify Output

Open localhost:3000 in a browser and you will see the following output.

```
Home page with Router
```
Click on First post which is not a link but is clickable.

First page with Data