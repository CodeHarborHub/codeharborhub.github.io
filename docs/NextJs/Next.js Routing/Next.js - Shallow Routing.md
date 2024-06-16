---
id: routing-ShallowRouting
title: Next.js - Shallow Routing
sidebar_label: Next.js - Shallow Routing
sidebar_position: 4
tags: [Next.js Routing]
description: "In this section, you will learn about Routing in NEXT ."
---



In Next.js, shallow routing refers to navigating to same page but no calls to getServerSideProps, getStaticProps, and getInitialProps methods.

To do shallow routing, we use Router with shallow flag as true. See the below example.

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
         <span onClick={() => Router.push('/?counter=1', undefined, { shallow: true })}>Reload</span>
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
Start Next.js Server
```

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

Open localhost:3000 in a browser and then click on Reload link and you will see the following output.

``` Home page with Shallow Routing ```