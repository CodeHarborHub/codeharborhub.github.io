---
id: lesson-1
title: "MongoDB Query Operators"
sidebar_label: Query Operators
sidebar_position: 1
description: "Learn MongoDB Query Operators"
tags: [courses,beginner-level,CRUD,Introduction]
--- 
 

MongoDB provides various query operators to filter documents based on specific conditions. These operators enable more sophisticated and fine-grained queries.

#### Common Query Operators

1. **$gt** (greater than)
   - Matches values that are greater than a specified value.
   ```javascript
   { age: { $gt: 21 } }
   ```

2. **$lt** (less than)
   - Matches values that are less than a specified value.
   ```javascript
   { age: { $lt: 21 } }
   ```

3. **$gte** (greater than or equal to)
   - Matches values that are greater than or equal to a specified value.
   ```javascript
   { age: { $gte: 21 } }
   ```

4. **$lte** (less than or equal to)
   - Matches values that are less than or equal to a specified value.
   ```javascript
   { age: { $lte: 21 } }
   ```

5. **$eq** (equal)
   - Matches values that are equal to a specified value.
   ```javascript
   { age: { $eq: 21 } }
   ```

6. **$ne** (not equal)
   - Matches values that are not equal to a specified value.
   ```javascript
   { age: { $ne: 21 } }
   ```

7. **$in** (in)
   - Matches any of the values specified in an array.
   ```javascript
   { status: { $in: ["active", "pending"] } }
   ```

8. **$nin** (not in)
   - Matches none of the values specified in an array.
   ```javascript
   { status: { $nin: ["inactive", "banned"] } }
   ```

9. **$and**
   - Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
   ```javascript
   { $and: [ { status: "active" }, { age: { $gte: 21 } } ] }
   ```

10. **$or**
    - Joins query clauses with a logical OR returns all documents that match the conditions of either clause.
    ```javascript
    { $or: [ { status: "active" }, { age: { $lt: 18 } } ] }
    ```

11. **$not**
    - Inverts the effect of a query expression and returns documents that do not match the query expression.
    ```javascript
    { age: { $not: { $gt: 21 } } }
    ```

12. **$exists**
    - Matches documents that have the specified field.
    ```javascript
    { email: { $exists: true } }
    ```
