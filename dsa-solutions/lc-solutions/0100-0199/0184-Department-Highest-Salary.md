---

id: department-highest-salary
title: Department Highest Salary
sidebar_label: 0184. Department Highest Salary
tags:
- SQL
- Database
description: "Solution to Leetcode 184. Department Highest Salary"

## Problem Description

Given two tables, `Employee` and `Department`, write a query to find the employees who have the highest salary in each department.

**Table: Employee**

| Column Name  | Type    |
| -------------|---------|
| id           | int     |
| name         | varchar |
| salary       | int     |
| departmentId | int     |
id is the primary key for this table. `departmentId` is a foreign key referencing the `id` column in the `Department` table.

**Table: Department**

| Column Name | Type    |
|-------------|---------|
| id          | int     |
| name        | varchar |
id is the primary key for this table. It is guaranteed that department name is not NULL.

### Examples

**Example 1:**

**Input:**

**Employee table:**

| id  | name  | salary | departmentId |
| --- | ----- | ------ | ------------ |
| 1   | Joe   | 70000  | 1            |
| 2   | Jim   | 90000  | 1            |
| 3   | Henry | 80000  | 2            |
| 4   | Sam   | 60000  | 2            |
| 5   | Max   | 90000  | 1            |

**Department table:**

| id  | name  |
| --- | ----- |
| 1   | IT    |
| 2   | Sales |

**Output:**

| Department | Employee | Salary |
|------------|----------|--------|
| IT         | Jim      | 90000  |
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |

### Approach

1. Perform a `JOIN` between the `Employee` table and the `Department` table on the `departmentId` column.
2. Use a subquery to find the maximum salary for each department.
3. Filter the employees who have the highest salary in their respective departments.

### Solution

#### SQL

```sql
-- SQL solution to find employees with the highest salary in each department

SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
FROM Employee e
JOIN Department d ON e.departmentId = d.id
WHERE e.salary = (
    SELECT MAX(salary)
    FROM Employee
    WHERE departmentId = e.departmentId
);
```

### Explanation

- **JOIN**: Joins the `Employee` table with the `Department` table to get the department name along with employee details.
- **Subquery**: The subquery finds the maximum salary for each department.
- **WHERE e.salary = (subquery)**: Filters the result to include only those employees who have the maximum salary in their respective departments.

### Complexity Analysis

- **Time Complexity**: O(n * m), where n is the number of rows in the `Employee` table and m is the number of rows in the `Department` table.
- **Space Complexity**: O(n), where n is the number of rows in the `Employee` table.

### References

- **LeetCode Problem**: Department Highest Salary

