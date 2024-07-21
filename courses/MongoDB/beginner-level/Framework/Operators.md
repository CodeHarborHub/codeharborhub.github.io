---
id: lesson-2
title: "Common Aggregation Operators"
sidebar_label: Compound Indexes
sidebar_position: 2
description: "Common Aggregation Operators"
tags: [courses,beginner-level,Aggregation Operators,Introduction]
--- 
 

1. **$match**:
   - Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
   ```javascript
   { $match: { status: "active" } }
   ```

2. **$group**:
   - Groups input documents by a specified identifier expression and applies an accumulator expression to each group.
   ```javascript
   { $group: { _id: "$status", count: { $sum: 1 } } }
   ```

3. **$sort**:
   - Sorts all input documents and returns them to the pipeline in sorted order.
   ```javascript
   { $sort: { age: -1 } }
   ```

4. **$project**:
   - Passes along the documents with the requested fields to the next stage in the pipeline.
   ```javascript
   { $project: { name: 1, status: 1, _id: 0 } }
   ```

#### Examples of Aggregation Queries

1. **Filtering and Projecting Documents**:
   - Use `$match` to filter documents and `$project` to include or exclude fields.
   ```javascript
   db.users.aggregate([
     { $match: { age: { $gte: 18 } } },
     { $project: { name: 1, age: 1, _id: 0 } }
   ])
   ```

2. **Grouping Documents and Calculating Aggregates**:
   - Use `$group` to group documents by a field and calculate aggregate values like sum, average, etc.
   ```javascript
   db.sales.aggregate([
     { $group: { _id: "$product", totalSales: { $sum: "$amount" } } }
   ])
   ```

3. **Sorting Documents**:
   - Use `$sort` to sort the results.
   ```javascript
   db.users.aggregate([
     { $sort: { age: -1 } }
   ])
   ```

4. **Combining Multiple Stages**:
   - Combine multiple stages to perform complex transformations.
   ```javascript
   db.orders.aggregate([
     { $match: { status: "shipped" } },
     { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } },
     { $sort: { totalAmount: -1 } },
     { $project: { customerId: "$_id", totalAmount: 1, _id: 0 } }
   ])
   ```

5. **Using Multiple Accumulators in `$group`**:
   - Use multiple accumulators to calculate different aggregates in the same `$group` stage.
   ```javascript
   db.orders.aggregate([
     { $group: { 
         _id: "$customerId", 
         totalAmount: { $sum: "$amount" }, 
         avgAmount: { $avg: "$amount" },
         count: { $sum: 1 }
       } 
     }
   ])
   ```

6. **Unwinding Arrays with `$unwind`**:
   - Use `$unwind` to deconstruct an array field from the input documents to output a document for each element.
   ```javascript
   db.users.aggregate([
     { $unwind: "$hobbies" },
     { $group: { _id: "$hobbies", count: { $sum: 1 } } }
   ])
   ``` 