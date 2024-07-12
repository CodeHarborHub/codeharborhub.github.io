---
id: consecutive-numbers
title: Consecutive Numbers
sidebar_label: 0180-Consecutive Numbers
tags:
  - SQL
description: Given the solution to leetcode consecutive numbers problem
---

## Problem Statement
Table: Logs
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| num         | varchar |
+-------------+---------+
In SQL, id is the primary key for this table.
id is an autoincrement column.
```
Find all numbers that appear at least three times consecutively.

Return the result table in any order.

The result format is in the following example.

### Examples
***Example 1:***
```
Input: 
Logs table:
+----+-----+
| id | num |
+----+-----+
| 1  | 1   |
| 2  | 1   |
| 3  | 1   |
| 4  | 2   |
| 5  | 1   |
| 6  | 2   |
| 7  | 2   |
+----+-----+
Output: 
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
Explanation: 1 is the only number that appears consecutively for at least three times.
```

## Solution

### Approach

- Consecutive appearing means the Id of the Num are next to each others. Since this problem asks for numbers appearing at least three times consecutively, we can use 3 aliases for this table Logs, and then check whether 3 consecutive numbers are all the same.
- Then we can select any Num column from the above table to get the target data. However, we need to add a keyword DISTINCT because it will display a duplicated number if one number appears more than 3 times consecutively.

#### Implementation


### Using MYSQL
```sql
SELECT DISTINCT
    l1.Num AS ConsecutiveNums
FROM
    Logs l1,
    Logs l2,
    Logs l3
WHERE
    l1.Id = l2.Id - 1
    AND l2.Id = l3.Id - 1
    AND l1.Num = l2.Num
    AND l2.Num = l3.Num
;
```
