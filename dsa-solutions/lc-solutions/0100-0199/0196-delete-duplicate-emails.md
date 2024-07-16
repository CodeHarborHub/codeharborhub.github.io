---
id: delete-duplicate-emails
title: Delete Duplicate Emails
difficulty: Easy
sidebar_label: 0196-Delete-Duplicate-Emails
tags:
  - SQL
  - LeetCode Easy
---

## Problem Description
Write a SQL query to delete all the duplicate emails, keeping only one unique email with the smallest `id`.

Assume the table `Person` has the following structure:
```plaintext
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
```

### Example
**Example 1:**
```plaintext
Assume that the `Person` table has the following content:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+

Your query should delete the duplicate emails and the result table should look like:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
```

### Constraints
- The `Person` table will have at most 10^4 rows.
- Each email in the `Person` table will have at most 100 characters.

## Solution Approach

### Approach Overview
To delete duplicate emails while keeping the record with the smallest `id`, we can use a subquery to identify the duplicates and then delete them based on their `id`.

### Detailed Steps

1. **Identify Duplicates**:
   - Use a subquery to find the smallest `id` for each duplicate email.
   
2. **Delete Duplicates**:
   - Delete from the `Person` table where the `id` is not in the list of smallest `id`s for each email.

## Code Examples

### SQL Query
```sql
DELETE p1 FROM Person p1
JOIN Person p2
ON p1.email = p2.email
AND p1.id > p2.id;
```

### Explanation
- The `JOIN` operation matches each row in the `Person` table with every other row having the same email.
- The `DELETE` statement removes rows from the `Person` table where the `id` is greater than the smallest `id` for each email, effectively keeping only one unique email with the smallest `id`.

## Complexity

- **Time Complexity**: `O(n^2)` in the worst case, where `n` is the number of rows in the `Person` table, due to the `JOIN` operation. However, for practical purposes with indexing and optimizations, the performance may be better.
  
- **Space Complexity**: `O(1)`, as no additional space is required beyond the query execution.
