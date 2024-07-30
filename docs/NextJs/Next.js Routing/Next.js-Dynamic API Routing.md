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

<BrowserWindow>
       <div id="buttons_con" style={{display:"flex",flexDirection:"column",gap:"1rem",justifyContent:"center",alignItems:"center"}}>
            <button
            onClick={()=>{
               let buttons_con=document.getElementById("buttons_con")
               buttons_con.style.display="none"
               let get_all_post_con=document.getElementById("get_all_post_con")
               get_all_post_con.style.display="block"
               let data=[{id:1,title:"This is 1st post",body:"Thank you for visiting in our 1st post"},{id:2,title:"This is 2nd post",body:"Thank you for visiting in our 2nd post"},{id:3,title:"This is 3rd post",body:"Thank you for visiting in our 3rd  post"}]
               data.map((item)=>{
                  let h4=document.createElement("h4")
                  h4.textContent=item.title
                  let p=document.createElement("p")
                  p.textContent=item.body
                  let hr=document.createElement("hr")
                  get_all_post_con.appendChild(h4)
                  get_all_post_con.appendChild(p)
                  get_all_post_con.appendChild(hr)
               })
            }}
             style={{padding:"0.6rem 1.4rem",backgroundImage:"radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)",border:"none",color:"white",fontWeight:"700",borderRadius:"0.6rem",cursor:"pointer"}}>All Post</button>
            <button
            onClick={()=>{
               let buttons_con=document.getElementById("buttons_con")
               buttons_con.style.display="none"
               let see_1st_post_con=document.getElementById("see_1st_post_con")
               see_1st_post_con.style.display="block"
               let data=[{id:1,title:"This is 1st post",body:"Thank you for visiting in our 1st post"}]
               data.map((item)=>{
                  let h4=document.createElement("h4")
                  h4.textContent=item.title
                  let p=document.createElement("p")
                  p.textContent=item.body
                  let hr=document.createElement("hr")
                  see_1st_post_con.appendChild(h4)
                  see_1st_post_con.appendChild(p)
                  see_1st_post_con.appendChild(hr)
               })
            }}
             style={{padding:"0.6rem 1.4rem",backgroundImage:"radial-gradient(100% 100% at 100% 0px, rgb(90 255 165) 0px, rgb(255 130 84) 100%)",border:"none",color:"white",fontWeight:"700",borderRadius:"0.6rem",cursor:"pointer"}}
            >1st Post</button>
            <button
            onClick={()=>{
               let buttons_con=document.getElementById("buttons_con")
               buttons_con.style.display="none"
               let see_2nd_post_con=document.getElementById("see_2nd_post_con")
               see_2nd_post_con.style.display="block"
               let data=[{id:2,title:"This is 2nd post",body:"Thank you for visiting in our 2nd post"}]
               data.map((item)=>{
                  let h4=document.createElement("h4")
                  h4.textContent=item.title
                  let p=document.createElement("p")
                  p.textContent=item.body
                  let hr=document.createElement("hr")
                  see_2nd_post_con.appendChild(h4)
                  see_2nd_post_con.appendChild(p)
                  see_2nd_post_con.appendChild(hr)
               })
            }}
             style={{padding:"0.6rem 1.4rem",backgroundImage:"radial-gradient(100% 100% at 100% 0px, rgb(255 90 172) 0px, rgb(84 201 255) 100%)",border:"none",color:"white",fontWeight:"700",borderRadius:"0.6rem",cursor:"pointer"}}
            >2nd Post</button>
            <button
            onClick={()=>{
               let buttons_con=document.getElementById("buttons_con")
               buttons_con.style.display="none"
               let see_3rd_post_con=document.getElementById("see_3rd_post_con")
               see_3rd_post_con.style.display="block"
               let data=[{id:3,title:"This is 3rd post",body:"Thank you for visiting in our 3rd post"}]
               data.map((item)=>{
                  let h4=document.createElement("h4")
                  h4.textContent=item.title
                  let p=document.createElement("p")
                  p.textContent=item.body
                  let hr=document.createElement("hr")
                  see_3rd_post_con.appendChild(h4)
                  see_3rd_post_con.appendChild(p)
                  see_3rd_post_con.appendChild(hr)
               })
            }}
             style={{padding:"0.6rem 1.4rem",backgroundImage:"radial-gradient(100% 100% at 100% 0px, rgb(255, 90, 90) 0px, rgb(39 185 106) 100%)",border:"none",color:"white",fontWeight:"700",borderRadius:"0.6rem",cursor:"pointer"}}
            >3rd Post</button>            
       </div>
       <div id="get_all_post_con" style={{display:"none"}}>
       </div>
       <div id="see_1st_post_con" style={{display:"none"}}>
       </div>
       <div id="see_2nd_post_con" style={{display:"none"}}>
       </div>
       <div id="see_3rd_post_con" style={{display:"none"}}>
       </div>
</BrowserWindow>