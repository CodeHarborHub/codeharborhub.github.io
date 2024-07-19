---
id: lesson-2
title: "Query Concepts"
sidebar_label: Concepts
sidebar_position: 2
description: "Query Concepts (Projection,Sorting,Pagination)"
tags: [courses,beginner-level,Query,Introduction]
--- 



#### Projection

Projection in MongoDB refers to selecting only the necessary fields from a document to return in the query result. This is useful for improving performance by reducing the amount of data transferred over the network.

**Example of Projection**:
```javascript
db.users.find(
  { age: { $gte: 21 } }, 
  { name: 1, age: 1, _id: 0 }
)
```

In this example:
- The query filters documents where the age is greater than or equal to 21.
- The projection specifies that only the `name` and `age` fields should be returned, and the `_id` field should be excluded.

#### Sorting

Sorting in MongoDB allows you to order the documents in the query result based on the value of one or more fields.

**Example of Sorting**:
```javascript
db.users.find().sort({ age: -1 })
```

In this example:
- The `sort` method sorts the documents in descending order based on the `age` field.

#### Pagination

Pagination in MongoDB involves using the `skip` and `limit` methods to control the number of documents returned and to skip a specified number of documents.

**Example of Pagination**:
```javascript
db.users.find().sort({ age: -1 }).skip(10).limit(5)
```

In this example:
- The `sort` method sorts the documents in descending order based on the `age` field.
- The `skip` method skips the first 10 documents.
- The `limit` method limits the result to 5 documents.
