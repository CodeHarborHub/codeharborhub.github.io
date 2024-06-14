---
id:  api-Responsehelpers
title: Next.js -Response Helpers
sidebar_label: Next.js - Response Helpers
sidebar_position: 3
tags: [Next.js API Routes ]
description: "In this section, you will learn about API routes in  NEXT ."
---

Next.js - Response Helpers

res object have express.js like helper methods to ease development to create services.

Following are the response helper methods

- res.status(code) − This methods set the status of response. Code passed must be a valid HTTP status.

- req.json(json) − This method returns a JSON response. json passed must be a valid JSON object.

- req.send(body) − This methods sends an HTTP response. Response can be string, object or Buffer.

Let's create an example to demonstrate the same.

In this example, we are going to update an user.js in pages/api directory.

Let's update the nextjs project used in API Routes chapter.

Create user.js file in pages/api directory as following.

```
export default (req, res) => {
   res.status(200).json({ name: 'Robert' });
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

Open http://localhost:3000/api/user in a browser and you will see the following output.

```{ name: 'Robert' }```