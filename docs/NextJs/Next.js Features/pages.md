---
id: pages
title: Next.js Features - Page
sidebar_label: Next.js Features - Page
sidebar_position: 1
tags: [Next.js Features ]
description: "In this section, you will learn about Features of NEXT ."
---


## Next.js - Pages


In Next.js, we can create pages and navigate between them using file system routing feature. We'll use Link component to have a client side navigation between pages.

In Next.js, a page is a React Component and are exported from pages directory. Each page is associated with a route based on its file name. For example

- pages/index.js is linked with '/' route.

- pages/posts/first.js is linked with '/posts/first' route and so on.

Let's update the nextjs project created in Environment Setup chapter.

Create post directory and first.js within it with following contents.

```
export default function FirstPost() {
   return <h1>My First Post</h1>
}
```
Add Link Support to go back to Home page. Update first.js as follows −

``` 
import Link from 'next/link'

export default function FirstPost() {
   return (
      <>
         <h1>My First Post</h1>
         <h2>
            <Link href="/">
               <a>Home</a>
            </Link>
         </h2>
      </>	  
   )
}
```
Add Link Support to home page to navigate to first page. Update index.js as follows −

```
import Link from 'next/link'

function HomePage() {
   return (
      <>
         <div>Welcome to Next.js!</div>
         <Link href="/posts/first"><a>First Post</a></Link>
      </>	    
   )
}

export default HomePage
```

## Start Next.js Server

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
Home page
```
Click on First Link and you will see the following output.