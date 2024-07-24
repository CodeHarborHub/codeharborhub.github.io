---
id: lesson-3
title: "CRUD Operations (Create, Read, Update, Delete)"
sidebar_label: CRUD Operations
sidebar_position: 3
description: "CRUD Operations (Create, Read, Update, Delete)"
tags: [courses,beginner-level,CRUD,Introduction]
--- 

1. **Create**:
   - To insert a document into a collection, use the `insertOne` or `insertMany` methods.
   ```javascript
   db.collection.insertOne({ name: "John Doe", age: 30 });
   db.collection.insertMany([{ name: "Jane Doe", age: 25 }, { name: "Jim Beam", age: 35 }]);
   ```

2. **Read**:
   - To retrieve documents from a collection, use the `find` or `findOne` methods.
   ```javascript
   db.collection.find({ name: "John Doe" });
   db.collection.findOne({ age: { $gte: 30 } });
   ```

3. **Update**:
   - To modify existing documents, use the `updateOne`, `updateMany`, or `replaceOne` methods.
   ```javascript
   db.collection.updateOne({ name: "John Doe" }, { $set: { age: 31 } });
   db.collection.updateMany({ age: { $lt: 30 } }, { $set: { status: "young" } });
   db.collection.replaceOne({ name: "Jim Beam" }, { name: "James Beam", age: 36 });
   ```

4. **Delete**:
   - To remove documents from a collection, use the `deleteOne` or `deleteMany` methods.
   ```javascript
   db.collection.deleteOne({ name: "John Doe" });
   db.collection.deleteMany({ age: { $lt: 30 } });
   ```
