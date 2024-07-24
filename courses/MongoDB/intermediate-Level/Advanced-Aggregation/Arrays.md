---
id: lesson-3
title: "Working with Arrays"
sidebar_label: Arrays
sidebar_position: 3
description: "Working with Arrays"
tags: [courses,beginner-level,Arrays,Introduction]
--- 
 

Aggregation operators like `$unwind` and `$arrayElemAt` are useful for manipulating array fields within documents.

**$unwind Example**:
```javascript
db.orders.aggregate([
  { $unwind: "$items" },
  { $group: { _id: "$_id", totalQuantity: { $sum: "$items.quantity" } } }
])
```

**$arrayElemAt Example**:
```javascript
db.orders.aggregate([
  {
    $project: {
      firstItem: { $arrayElemAt: ["$items", 0] }
    }
  }
])
```
