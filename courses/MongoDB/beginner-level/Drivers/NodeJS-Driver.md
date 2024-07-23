---
id: lesson-2
title: "Using MongoDB with Node.js"
sidebar_label: Work with Node.Js
sidebar_position: 2
description: "Using MongoDB with Node.js"
tags: [courses,beginner-level,Drivers,Introduction]
--- 
 
 

Node.js is a popular runtime for building server-side applications using JavaScript. The official MongoDB Node.js driver allows Node.js applications to interact with MongoDB databases.

#### Installing the MongoDB Node.js Driver

To use MongoDB with Node.js, you need to install the official MongoDB driver for Node.js using npm (Node Package Manager).

```bash
npm install mongodb
```

### Connecting to MongoDB from a Node.js Application

To connect to MongoDB from a Node.js application, you need to require the `mongodb` module and use it to create a connection to your MongoDB server.

#### Example of Connecting to MongoDB

```javascript
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("myDatabase");
    const collection = database.collection("myCollection");

    // Perform operations with the collection here

  } finally {
    await client.close();
  }
}

run().catch(console.dir);
```
