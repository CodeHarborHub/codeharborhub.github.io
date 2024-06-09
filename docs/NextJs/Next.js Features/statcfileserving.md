---
id: featuers-staticFileserving
title: Next.js - Static File Serving
sidebar_label: Next.js - Static File Serving
sidebar_position: 2
tags: [Next.js Features ]
description: "In this section, you will learn about Features of NEXT ."
---



## Next.js - Static File Serving

In Next.js, we can serve static pages like images very easily by putting them in public, a top level directory. We can refer these files in similar fashion like pages in pages directory.

In Next.js, a page is a React Component and are exported from pages directory. Each page is associated with a route based on its file name.

Let's update the nextjs project used in Pages chapter.

Create public directory and place any images within it. We've taken logo.png, CODEHARBOUR Logo image.

Update first.js as follows −
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
         <br/">
         <img src="/logo.png" alt="CodeHarborhub Logo" />
      </>	  
   )
}
```
Here we've added a reference to logo.png in index.js file.

##  Start Next.js Server
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

Open localhost:3000 in a browser