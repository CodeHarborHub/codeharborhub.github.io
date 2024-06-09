---
id:  Routing
title: Next.js Routing
sidebar_label: Next.js  Routing
sidebar_position: 1
tags: [Next.js Routing]
description: "In this section, you will learn about Routing in NEXT ."
---




## Next.js - Routing


Next.js uses file system based router. Whenever we add any page to pages directory, it is automatically available via url. Following are the rules of this router.

- Index Routes − An index.js file present in a folder maps to root of directory. For example −

  - pages/index.js maps to '/'.

  - pages/posts/index.js maps to '/posts'.

- Nested Routes − Any nested folder structure in pages directory because router url automatically. For example −

   - pages/settings/dashboard/about.js maps to '/settings/dashboard/about'.

   - pages/posts/first.js maps to '/posts/first'.

- Dynamic Routes − We can use named parameter as well to match url. Use brackets for the same. For example −

   - pages/posts/[id].js maps to '/posts/:id' where we can use URL like '/posts/1'.

   - pages/[user]/settings.js maps to '/posts/:user/settings' where we can use URL like '/abc/settings'.

   - pages/posts/[...all].js maps to '/posts/*' where we can use any URL like '/posts/2020/jun/'.

## Page Linking
<br/>
Next.JS allows to link pages on client side using Link react component. It has following properties −


- href − name of the page in pages directory. For example /posts/first which refers to first.js present in pages/posts directory.

Let's create an example to demonstrate the same.

In this example, we'll update index.js and first.js page to make a server hit to get data.

Let's update the nextjs project used in Global CSS Support chapter.

Update index.js file in pages directory as following.
```
import Link from 'next/link'
import Head from 'next/head'

function HomePage(props) {
   return (
      <>
         <Head>
            <title>Welcome to Next.js!</title>
         </Head>
         <div>Welcome to Next.js!</div>
         <Link href="/posts/first">> <a>First Post</a></Link>
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

<br/>
Start Next.js Server
Run the following command to start the server −.
<br/>

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
