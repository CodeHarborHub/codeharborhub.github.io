---
id: lesson-1
title: "Advanced Aggregation in MongoDB"
sidebar_label: Advanced Aggregation
sidebar_position: 1
description: "Advanced Aggregation in MongoDB"
tags: [courses,beginner-level,Aggregation,Introduction]
--- 
  

MongoDB's aggregation framework allows for complex data processing and transformation through a series of pipeline stages. Beyond the basic operators, MongoDB provides advanced aggregation operators that enable more sophisticated data manipulations.

#### Advanced Aggregation Operators

1. **$lookup**:
   - Performs a left outer join to another collection in the same database to filter in documents from the "joined" collection for processing.
   ```javascript
   db.orders.aggregate([
     {
       $lookup: {
         from: "customers",
         localField: "customerId",
         foreignField: "_id",
         as: "customerDetails"
       }
     }
   ])
   ```

2. **$unwind**:
   - Deconstructs an array field from the input documents to output a document for each element.
   ```javascript
   db.orders.aggregate([
     { $unwind: "$items" }
   ])
   ```

3. **$addFields**:
   - Adds new fields to documents. The new fields can be computed based on existing fields.
   ```javascript
   db.orders.aggregate([
     {
       $addFields: {
         totalAmount: { $sum: "$items.price" }
       }
     }
   ])
   ```

4. **$replaceRoot**:
   - Replaces the input document with the specified document.
   ```javascript
   db.orders.aggregate([
     {
       $replaceRoot: { newRoot: "$orderDetails" }
     }
   ])
   ```