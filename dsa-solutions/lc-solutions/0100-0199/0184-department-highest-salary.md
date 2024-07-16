---
id: department-highest-salary
title: Department Highest Salary(LeetCode)
sidebar_label: 0184-Department Highest Salary
tags:
  - Database
description: Given two tables named Employee table with four columns named id, name, salary, departmentId and Department table with two columns named id, name we have to find employees who have the highest salary in each of the departments.
---

## Problem Statement
Table: Employee
```
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| id           | int     |
| name         | varchar |
| salary       | int     |
| departmentId | int     |
+--------------+---------+
```
id is the primary key (column with unique values) for this table.
departmentId is a foreign key (reference columns) of the ID from the Department table.
Each row of this table indicates the ID, name, and salary of an employee. It also contains the ID of their department.
 

Table: Department
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
```
id is the primary key (column with unique values) for this table. It is guaranteed that department name is not NULL.
Each row of this table indicates the ID of a department and its name.

Write a solution to find employees who have the highest salary in each of the departments.

Return the result table in any order.

The result format is in the following example.

 

### Examples

**Example 1:**
Input:
```plaintext
Employee table:
+----+-------+--------+--------------+
| id | name  | salary | departmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Jim   | 90000  | 1            |
| 3  | Henry | 80000  | 2            |
| 4  | Sam   | 60000  | 2            |
| 5  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
Department table:
+----+-------+
| id | name  |
+----+-------+
| 1  | IT    |
| 2  | Sales |
+----+-------+
```
Output:
```
+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Jim      | 90000  |
| Sales      | Henry    | 80000  |
| IT         | Max      | 90000  |
+------------+----------+--------+
```
Explanation: 
Max and Jim both have the highest salary in the IT department and Henry has the highest salary in the Sales department.

## Solution

### Approach 
1. We will select three columns for the final output:<br />

   * D.Name as Department: The name of the department.
   * E.Name as Employee: The name of the employee.
   * E.Salary as Salary: The salary of the employee.

2. Then we use a subquery to retrieves the highest salary (max(Salary)) for each department (DepartmentId) from the Employee table and aliases this result as T.

3. Then we will use WHERE clause which has <br />

   * E.DepartmentId = T.DepartmentId: Ensures that the department ID in the Employee table matches the department ID in the subquery result T.
   * E.Salary = T.max: Ensures that the employee's salary matches the maximum salary for their department, as determined by the subquery T.
   * E.DepartmentId = D.id: Ensures that the department ID in the Employee table matches the ID in the Department table.

#### Implementation

```MySQL
SELECT D.Name AS Department ,E.Name AS Employee ,E.Salary 
FROM
	Employee E,
	(SELECT DepartmentId,max(Salary) as max FROM Employee GROUP BY DepartmentId) T,
	Department D
WHERE E.DepartmentId = T.DepartmentId 
  AND E.Salary = T.max
  AND E.DepartmentId = D.id
```


### Conclusion

This approach efficiently solves the problem by joining the Employee table with the Department table and a subquery that finds the maximum salary per department. The final result lists employees with the highest salaries in their respective departments, along with the department names and their salaries.
