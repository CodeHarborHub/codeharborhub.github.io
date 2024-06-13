---
id: api-routes
title: Next.js - Api Routes
sidebar_label: Next.js - Api Routes
sidebar_position: 1
tags: [Next.js API Routes ]
description: "In this section, you will learn about API routes in  NEXT ."
---

Next.js - Api Routes

API Routes is a way to create rest API using Next.js. Next.js maps any file present in /pages/api folder and will be treated as API end point. An example of API function −

```
export default (req, res) => {
   ...
}

```

Following are some important points to consider.

- req − req is an instance of http.IncomingMessage and is used to get data from request.

- res − res is an instance of http.ServerResponse and is used to send data as response.

Let's create an example to demonstrate the same.

In this example, we are going to create an user.js in pages/api directory.

Let's update the nextjs project used in Global CSS Support chapter.

Create user.js file in pages/api directory as following.

```
export default (req, res) => {
   res.statusCode = 200
   res.setHeader('Content-Type', 'application/json')
   res.end(JSON.stringify({ name: 'Robert' }))
}
```

Start Next.js Server

Run the following command to start the server −.

```
npm run dev

> nextjs@1.0.0 dev D:\Node\nextjs
> next

ready - started server on http://localhost:3000
info  - Loaded env from D:\Node\nextjs\.env.local
event - compiled successfully
event - build page: /api/user
wait  - compiling...
event - compiled successfully
event - build page: /next/dist/pages/_error
wait  - compiling...
event - compiled successfully
```

## Verify Output

Open localhost:3000/api/user in a browser and you will see the following output.

```{"name":"Robert"} ```