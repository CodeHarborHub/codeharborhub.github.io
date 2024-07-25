---
id: department-highest-salary
title: Department Highest Salary
sidebar_label: 0184. Department Highest Salary
tags: [SQL, Database]
description: Solution to Leetcode 184 Department Highest Salary
sidebar_position: 85
---

## Problem Statement 

### Problem Description

Given two tables, `Employee` and `Department`, write a query to find the employees who have the highest salary in each department.

**Table: Employee**

```
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
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
+-------------+---------+
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

Write a solution to find employees who have the highest salary in each of the departments. Return the result table in any order.

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

### Constraints

1. Each employee's salary is a positive integer.
2. The number of employees in each department is between 1 and 1000.
3. The number of departments is between 1 and 500.

## Solution of Given Problem

### Intuition and Approach

1. Perform a `JOIN` between the `Employee` table and the `Department` table on the `departmentId` column.
2. Use a subquery to find the maximum salary for each department.
3. Filter the employees who have the highest salary in their respective departments.

### Complexity Analysis

- **Time Complexity**: O(n * m), where n is the number of rows in the `Employee` table and m is the number of rows in the `Department` table.
- **Space Complexity**: O(n), where n is the number of rows in the `Employee` table.

#### Codes in Different Languages

<Tabs>
  <TabItem value="SQL" label="SQL" default>
  <SolutionAuthor name="@pallasivasai"/>
   ```sql
   SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
   FROM Employee e
   JOIN Department d ON e.departmentId = d.id
   WHERE e.salary = (
       SELECT MAX(salary)
       FROM Employee
       WHERE departmentId = e.departmentId
   );
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ajay-Dhangar"/>
   ```python
   import sqlite3

   conn = sqlite3.connect(':memory:')
   cursor = conn.cursor()

   cursor.execute('''
   CREATE TABLE Employee (
       id INTEGER PRIMARY KEY,
       name TEXT,
       salary INTEGER,
       departmentId INTEGER
   )
   ''')

   cursor.execute('''
   CREATE TABLE Department (
       id INTEGER PRIMARY KEY,
       name TEXT
   )
   ''')

   employees = [
       (1, 'Joe', 70000, 1),
       (2, 'Jim', 90000, 1),
       (3, 'Henry', 80000, 2),
       (4, 'Sam', 60000, 2),
       (5, 'Max', 90000, 1)
   ]

   departments = [
       (1, 'IT'),
       (2, 'Sales')
   ]

   cursor.executemany('INSERT INTO Employee VALUES (?, ?, ?, ?)', employees)
   cursor.executemany('INSERT INTO Department VALUES (?, ?)', departments)

   cursor.execute('''
   SELECT d.name AS Department, e.name AS Employee, e.salary AS Salary
   FROM Employee e
   JOIN Department d ON e.departmentId = d.id
   WHERE e.salary = (
       SELECT MAX(salary)
       FROM Employee
       WHERE departmentId = e.departmentId
   )
   ''')
   results = cursor.fetchall()
   for row in results:
       print(row)

   conn.close()
    ```

  </TabItem>
</Tabs>

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="oAboCsqLX2g"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['pallasivasai'].map(username => (
 <Author key={username} username={username} />
))}
</div>