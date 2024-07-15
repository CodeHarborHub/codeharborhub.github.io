---
id: low-quality-problems
title: Low-Quality Problems
sidebar_label: 2026 Low-Quality Problems
tags:
  - SQL
---

## Problem Description

You are given a table `Problems` with columns `problem_id`, `likes`, and `dislikes`. The `problem_id` is the primary key column representing the ID of each LeetCode problem, while `likes` and `dislikes` represent the number of likes and dislikes for each problem, respectively.

Write an SQL query to report the IDs of the low-quality problems. A LeetCode problem is considered low-quality if the like percentage (likes / (likes + dislikes)) is strictly less than 60%.

Return the result table ordered by `problem_id` in ascending order.

### Examples 

**Example 1**

```
Input

Problems table:
+------------+-------+----------+
| problem_id | likes | dislikes |
+------------+-------+----------+
| 6          | 1290  | 425      |
| 11         | 2677  | 8659     |
| 1          | 4446  | 2760     |
| 7          | 8569  | 6086     |
| 13         | 2050  | 4164     |
| 10         | 9002  | 7446     |
+------------+-------+----------+

Output:*

+------------+
| problem_id |
+------------+
| 7          |
| 10         |
| 11         |
| 13         |
+------------+

Explanation:
The like percentages are as follows:
- Problem 1: (4446 / (4446 + 2760)) * 100 = 61.69858%
- Problem 6: (1290 / (1290 + 425)) * 100 = 75.21866%
- Problem 7: (8569 / (8569 + 6086)) * 100 = 58.47151%
- Problem 10: (9002 / (9002 + 7446)) * 100 = 54.73006%
- Problem 11: (2677 / (2677 + 8659)) * 100 = 23.61503%
- Problem 13: (2050 / (2050 + 4164)) * 100 = 32.99002%

Problems 7, 10, 11, and 13 are low-quality problems because their like percentages are less than 60%.
```

### Approach

To solve this problem, we need to:
1. Calculate the like percentage for each problem using the formula `(likes / (likes + dislikes)) * 100`.
2. Select the `problem_id` where the calculated like percentage is less than 60%.
3. Order the results by `problem_id` in ascending order.

#### SQL Query

```sql
SELECT problem_id
FROM Problems
WHERE likes * 100 / (likes + dislikes) < 60
ORDER BY problem_id;
```