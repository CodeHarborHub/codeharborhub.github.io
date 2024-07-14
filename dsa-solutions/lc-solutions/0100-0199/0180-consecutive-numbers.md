---
id: consecutive-numbers
title: Consecutive Numbers(LeetCode)
sidebar_label: 0180-Consecutive Numbers
tags:
  - Database
description: Given a table named Logs with two columns id and num we have to find all the numbers which are repeated three times consecutively.
---

## Problem Statement
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| num         | varchar |
+-------------+---------+
```
In SQL, id is the primary key for this table.
id is an autoincrement column.
 

Find all numbers that appear at least three times consecutively.

Return the result table in any order.

### Examples

**Example 1:**
Input:
```plaintext
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
```
Output:
```
+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
```
Explanation: 
1 is the only number that appears consecutively for at least three times.

## Solution

### Approach 
1. We will first make creates three different aliases (log_1, log_2, and log_3) for the same table logs. It allows us to compare different rows within the same table.
2. Then simply use WHERE clause to get the result where id's and num in a row are consecutive and occurence of number is 3 times.
   The conditions that must be met for the rows to be included in the result:<br />

   * log_1.id = log_2.id + 1: The id of log_1 should be one more than the id of log_2. This means log_1 is immediately      after log_2.<br />
   * log_2.id = log_3.id + 1: Similarly, the id of log_2 should be one more than the id of log_3. This means log_2 is      immediately after log_3.<br />
   * log_1.num = log_2.num: The num value of log_1 should be equal to the num value of log_2.<br />
   * log_2.num = log_3.num: The num value of log_2 should be equal to the num value of log_3.<br />

        Together, these conditions ensure that the three rows have consecutive id values and the same num value.<br />

3. Then from the result we will select the distinct numbers and then put inside a column named 'ConsecutiveNums'. 
numbers 

#### Implementation

```MySQL
SELECT distinct 
    log_1.num as ConsecutiveNums 
FROM 
    logs log_1,
    logs log_2,
    logs log_3
WHERE 
    log_1.id=log_2.id+1 AND 
    log_2.id=log_3.id+1 AND 
    log_1.num=log_2.num AND 
    log_2.num=log_3.num
```


### Conclusion

This approach efficiently solves the problem of finding out the consecutive numbers.
