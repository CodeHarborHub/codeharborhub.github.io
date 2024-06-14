---
id:  Routing-DynamicAPIRouting
title: Dynamic API Routing
sidebar_label: Next.js-Dynamic API Routing
sidebar_position: 2
tags: [Next.js Routing]
description: "In this section, you will learn about Routing in NEXT ."
---



In Next.js, we can create routes dynamically. In this example, we'll create pages on the fly and their routing.

- Step 1. Define [id].js file − [id].js represents the dynamic page where id will be relative path. Define this file in pages/post directory.

- Step 2. Define lib/posts.js − posts.js represents the ids and contents. lib directory is to be created in root directory.
[id].js

- Update [id].js file with getStaticPaths() method which sets the paths and getStaticProps() method to get the contents based on id.

```
import Link from 'next/link'
import Head from 'next/head'
import Container from '../../components/container'

import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
   return (
      <Container>
         {postData.id}
         <br />
         {postData.title}
         <br />
         {postData.date}
      </Container>
   )
}
export async function getStaticPaths() {
   const paths = getAllPostIds()
   return {
      paths,
      fallback: false
   }
}

export async function getStaticProps({ params }) {
   const postData = getPostData(params.id)
      return {
      props: {
         postData
      }
   }
}
posts.js
posts.js contains getAllPostIds() to get the ids and getPostData() to get corresponding contents.

export function getPostData(id) {
   const postOne = {
      title: 'One',
      id: 1,
      date: '7/12/2020'
   }

   const postTwo = {
      title: 'Two',
      id: 2,
      date: '7/12/2020'
   }
   if(id == 'one'){
      return postOne;
   }else if(id == 'two'){
      return postTwo;
   }  
}

export function getAllPostIds() {
   return [{
      params: {
         id: 'one'
      }
   },
   {
      params: {
         id: 'two'
      }
   }
];
}
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

```Open localhost:3000/posts/one in a browser and you will see the following output. ```

``` Open localhost:3000/posts/two in a browser and you will see the following output. ```
