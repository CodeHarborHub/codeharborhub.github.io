---
id: employee-earning
title:  Employees Earning More Than Their Managers
sidebar_label: 0181-Employees Earning More Than Their Managers
tags:
  - SQL
description: Given the solution to leetcode consecutive numbers problem
---

## Problem Statement
Table: Employee
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| salary      | int     |
| managerId   | int     |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.
```
Write a solution to find the employees who earn more than their managers.

Return the result table in any order.

The result format is in the following example.

 

### Examples
***Example 1:***
```
Input: 
Employee table:
+----+-------+--------+-----------+
| id | name  | salary | managerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | Null      |
| 4  | Max   | 90000  | Null      |
+----+-------+--------+-----------+
Output: 
+----------+
| Employee |
+----------+
| Joe      |
+----------+
Explanation: Joe is the only employee who earns more than his manager.
```

## Solution

### Approach

- select e1.name as employee: This selects the name of the employee from the employee table e1.
- from employee e1: This specifies the primary table e1 from which we are selecting the data.
- join employee e2 on e2.id = e1.managerid: This joins the employee table e2 with e1 on the condition that the id of e2 (which represents the manager's ID) matches the managerid of e1 (which represents the employee's manager ID).
- where e1.salary > e2.salary: This filters the results to include only those employees whose salary is greater than their manager's salary.


#### Implementation

### Using MYSQL
```sql
select e1.name as employee from employee e1
join employee e2 on e2.id=e1.managerid and e1.salary> e2.salary
```
