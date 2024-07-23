---
id: lesson-2
title: "Basic Documents Commands(Inserting,Querying,Updating,Deleting)"
sidebar_label: Documents Commands
sidebar_position: 2
description: "Basic Documents Commands(Inserting,Querying,Updating,Deleting)"
tags: [courses,beginner-level,Documents,Commands,Introduction]
---


#### Inserting Documents

1. **Inserting a Single Document**:
   - Use the `insertOne` method to add a single document to a collection.
   ```javascript
   db.myCollection.insertOne({ name: "John Doe", age: 30, city: "New York" })
   ```

2. **Inserting Multiple Documents**:
   - Use the `insertMany` method to add multiple documents at once.
   ```javascript
   db.myCollection.insertMany([
     { name: "Jane Doe", age: 25, city: "Los Angeles" },
     { name: "Jim Beam", age: 35, city: "Chicago" }
   ])
   ```

#### Querying Documents

1. **Finding All Documents**:
   - Use the `find` method to retrieve all documents from a collection.
   ```javascript
   db.myCollection.find()
   ```

2. **Finding Documents with a Condition**:
   - Use a query object to filter documents.
   ```javascript
   db.myCollection.find({ age: { $gte: 30 } })
   ```

3. **Finding a Single Document**:
   - Use the `findOne` method to retrieve a single document that matches a query.
   ```javascript
   db.myCollection.findOne({ name: "John Doe" })
   ```

4. **Projecting Fields**:
   - Use projection to include or exclude fields in the result.
   ```javascript
   db.myCollection.find({ age: { $gte: 30 } }, { name: 1, _id: 0 })
   ```

#### Updating Documents

1. **Updating a Single Document**:
   - Use the `updateOne` method to update the first document that matches a query.
   ```javascript
   db.myCollection.updateOne(
     { name: "John Doe" },
     { $set: { age: 31 } }
   )
   ```

2. **Updating Multiple Documents**:
   - Use the `updateMany` method to update all documents that match a query.
   ```javascript
   db.myCollection.updateMany(
     { age: { $lt: 30 } },
     { $set: { status: "young" } }
   )
   ```

3. **Replacing a Document**:
   - Use the `replaceOne` method to completely replace a document.
   ```javascript
   db.myCollection.replaceOne(
     { name: "Jim Beam" },
     { name: "James Beam", age: 36, city: "Boston" }
   )
   ```

#### Deleting Documents

1. **Deleting a Single Document**:
   - Use the `deleteOne` method to remove the first document that matches a query.
   ```javascript
   db.myCollection.deleteOne({ name: "John Doe" })
   ```

2. **Deleting Multiple Documents**:
   - Use the `deleteMany` method to remove all documents that match a query.
   ```javascript
   db.myCollection.deleteMany({ age: { $lt: 30 } })
   ```

3. **Dropping a Collection**:
   - Use the `drop` method to remove an entire collection.
   ```javascript
   db.myCollection.drop()
   ```
 