---
id: duplicate-emails
title: Duplicate Emails
sidebar_label: 0183. Duplicate Emails
tags:
- SQL
- Database
description: "Solution to Leetcode 183. Duplicate Emails"
---

## Problem Description

Given a table `Person`, write a query to find all duplicate emails.

**Table: Person**

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| email       | varchar |
id is the primary key for this table. Each row of this table contains an email. The emails will not contain uppercase letters.

### Examples

**Example 1:**

**Input:**

**Person table:**

| id  | email   |
| --- | ------- |
| 1   | a@b.com |
| 2   | c@d.com |
| 3   | a@b.com |

**Output:**

| Email   |
| ------- |
| a@b.com |

### Approach

1. Group the rows in the `Person` table by the `email` column.
2. Use the `HAVING` clause to filter out the groups that have a count greater than 1, indicating duplicate emails.

### Solution

#### SQL

```sql
-- SQL solution to find duplicate emails

SELECT email
FROM Person
GROUP BY email
HAVING COUNT(*) > 1;
```

### Explanation

- **GROUP BY email**: Groups the records by the `email` column.
- **HAVING COUNT(*) > 1**: Filters the groups to include only those with more than one occurrence, indicating that the email is duplicated.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the number of rows in the `Person` table.
- **Space Complexity**: O(n), where n is the number of rows in the `Person` table.

### References

- **LeetCode Problem**: Duplicate Emails