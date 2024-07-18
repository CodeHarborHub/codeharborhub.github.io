---
id: lesson-3
title: "CRUD Operations with the Node.js Driver"
sidebar_label: CRUD Operation
sidebar_position: 3
description: "Performing CRUD Operations with the Node.js Driver"
tags: [courses,beginner-level,Drivers,Introduction]
--- 
  
Once connected, you can perform various CRUD operations on the collections in your database.

#### Create (Insert) Documents

**Insert a Single Document**:
```javascript
const doc = { name: "Alice", age: 25, city: "London" };
const result = await collection.insertOne(doc);
console.log(`New document inserted with _id: ${result.insertedId}`);
```

**Insert Multiple Documents**:
```javascript
const docs = [
  { name: "Bob", age: 30, city: "New York" },
  { name: "Charlie", age: 35, city: "San Francisco" }
];
const result = await collection.insertMany(docs);
console.log(`${result.insertedCount} documents were inserted`);
```

#### Read (Query) Documents

**Find All Documents**:
```javascript
const cursor = collection.find();
const results = await cursor.toArray();
console.log(results);
```

**Find Documents with a Filter**:
```javascript
const query = { age: { $gte: 30 } };
const cursor = collection.find(query);
const results = await cursor.toArray();
console.log(results);
```

**Find a Single Document**:
```javascript
const query = { name: "Alice" };
const result = await collection.findOne(query);
console.log(result);
```

#### Update Documents

**Update a Single Document**:
```javascript
const filter = { name: "Alice" };
const updateDoc = {
  $set: { age: 26 }
};
const result = await collection.updateOne(filter, updateDoc);
console.log(`${result.modifiedCount} document(s) were updated`);
```

**Update Multiple Documents**:
```javascript
const filter = { age: { $lt: 30 } };
const updateDoc = {
  $set: { city: "Updated City" }
};
const result = await collection.updateMany(filter, updateDoc);
console.log(`${result.modifiedCount} document(s) were updated`);
```

#### Delete Documents

**Delete a Single Document**:
```javascript
const query = { name: "Alice" };
const result = await collection.deleteOne(query);
console.log(`${result.deletedCount} document(s) were deleted`);
```

**Delete Multiple Documents**:
```javascript
const query = { age: { $lt: 30 } };
const result = await collection.deleteMany(query);
console.log(`${result.deletedCount} document(s) were deleted`);
```
 