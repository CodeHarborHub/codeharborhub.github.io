---
id: customers-who-never-order
title: Customers Who Never Order
sidebar_label: 0183. Customers Who Never Order
tags:
- SQL
- Database
description: "Solution to Leetcode 183. Customers Who Never Order"
---

## Problem Description

Given two tables, `Customers` and `Orders`, write a query to find all customers who never ordered anything.

**Table: Customers**

| Column Name | Type    |
| ----------- | ------- |
| id          | int     |
| name        | varchar |
id is the primary key for this table.

**Table: Orders**

| Column Name | Type |
| ----------- | ---- |
| id          | int  |
| customerId  | int  |
id is the primary key for this table. `customerId` is a foreign key referencing the `id` column in the `Customers` table.

### Examples

**Example 1:**

**Input:**

**Customers table:**

| id  | name  |
| --- | ----- |
| 1   | Joe   |
| 2   | Henry |
| 3   | Sam   |
| 4   | Max   |

**Orders table:**

| id  | customerId |
| --- | ---------- |
| 1   | 3          |
| 2   | 1          |

**Output:**

| Customers |
| --------- |
| Henry     |
| Max       |

### Approach

1. Perform a `LEFT JOIN` between the `Customers` table and the `Orders` table on the `id` and `customerId` columns.
2. Use the `WHERE` clause to filter out the customers who have `NULL` in the `Orders` table, which indicates that they never placed an order.

### Solution

#### SQL

```sql
-- SQL solution to find customers who never order anything

SELECT
    name AS Customers
FROM
    Customers
LEFT JOIN
    Orders
ON
    Customers.id = Orders.customerId
WHERE
    Orders.customerId IS NULL;
```

### Explanation

- **LEFT JOIN**: Joins the `Customers` table with the `Orders` table. This join includes all customers, even those who have not placed any orders.
- **WHERE Orders.customerId IS NULL**: Filters the result to include only those customers who do not have a corresponding entry in the `Orders` table.

### Complexity Analysis

- **Time Complexity**: O(n), where n is the number of rows in the `Customers` table.
- **Space Complexity**: O(n), where n is the number of rows in the `Customers` table.

### References

- **LeetCode Problem**: Customers Who Never Order