---
id: department-top-three-salaries
title: Department Top Three Salaries(LeetCode)
sidebar_label: 0185-Department Top Three Salaries
tags:
  - Database
description: Given two tables named Employee table with four columns named id, name, salary, departmentId and Department table with two columns named id, name we have to to find the employees who are high earners in each of the departments.


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

A company's executives are interested in seeing who earns the most money in each of the company's departments. A high earner in a department is an employee who has a salary in the top three unique salaries for that department.

Write a solution to find the employees who are high earners in each of the departments.

Return the result table in any order.

### Examples

**Example 1:**
Input:
```plaintext
Employee table:
+----+-------+--------+--------------+
| id | name  | salary | departmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 85000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
| 5  | Janet | 69000  | 1            |
| 6  | Randy | 85000  | 1            |
| 7  | Will  | 70000  | 1            |
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
| IT         | Max      | 90000  |
| IT         | Joe      | 85000  |
| IT         | Randy    | 85000  |
| IT         | Will     | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |
+------------+----------+--------+
```
Explanation: 
In the IT department:
- Max earns the highest unique salary
- Both Randy and Joe earn the second-highest unique salary
- Will earns the third-highest unique salary

In the Sales department:
- Henry earns the highest salary
- Sam earns the second-highest salary
- There is no third-highest salary as there are only two employees
## Solution

### Approach 
1. We will select three columns for the final output:<br />

   * D.Name as Department: The name of the department.
   * E.Name as Employee: The name of the employee.
   * E.Salary as Salary: The salary of the employee.
     
2. Then we will use WHERE clause which has <br />

   * D.ID = E.DepartmentId: Ensures that the department ID in the Department table matches the department ID in the Employee table (aliased as E).
   * E.DepartmentId = E2.DepartmentId: Ensures that the department ID in the Employee table (aliased as E) matches the department ID in the Employee table (aliased as E2).
   * E.Salary &lt;= E2.Salary: Ensures that the salary of E is less than or equal to the salary of E2. This creates a comparison to find the top salaries within each department.
3. Then we will use Group By clause to group the results by department ID and employee name.
4. Then we will use Having clause
   * count(distinct E2.Salary) &lt;= 3: Filters the groups to include only those where the distinct count of salaries in E2 is less than or equal to 3. This effectively limits the results to the top 3 salaries per department.
5. Then finally we order the final results by department name in ascending order and employee salary in descending order.
#### Implementation

```MySQL
SELECT D.Name as Department, E.Name as Employee, E.Salary 
FROM Department D, Employee E, Employee E2  
WHERE D.ID = E.DepartmentId and E.DepartmentId = E2.DepartmentId and 
E.Salary <= E2.Salary
group by D.ID,E.Name having count(distinct E2.Salary) <= 3
order by D.Name, E.Salary desc
```


### Conclusion

This approach efficiently solves the problem by joining the Department table with the Employee table twice (aliased as E and E2). It finds employees who are among the top three highest salaries within their respective departments. The final result lists these employees along with their department names and salaries, sorted by department name and salary in descending order.
