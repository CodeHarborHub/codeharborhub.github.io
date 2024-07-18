---
id: lesson-3
title: "Compound Indexes"
sidebar_label: Compound Indexes
sidebar_position: 3
description: "Compound Indexes"
tags: [courses,beginner-level,Compound Indexes,Introduction]
--- 
 

A compound index is an index on multiple fields of a collection. These indexes support queries that involve multiple fields and can also support queries on any prefix of the indexed fields.

**Example**:
```javascript
db.users.createIndex({ name: 1, age: -1 })  // Creates a compound index on 'name' (ascending) and 'age' (descending)
```

**Query Optimization**:
With a compound index on `name` and `age`, queries that filter by `name` and `age` or by just `name` will be optimized.
```javascript
db.users.find({ name: "John Doe", age: 30 })
db.users.find({ name: "John Doe" })
```

**Sort Optimization**:
Compound indexes can also optimize sort operations.
```javascript
db.users.find({ name: "John Doe" }).sort({ age: -1 })
```

**Partial Indexes**:
Partial indexes only index the documents that meet a specified filter expression.
```javascript
db.orders.createIndex({ status: 1 }, { partialFilterExpression: { status: { $exists: true } } })
```
 