---
id: department-top-three-salaries
title: Department Top Three Salaries
sidebar_label: 0185 - Department Top Three Salaries
tags: [SQL, Database]
description: Solution to Leetcode 185 Department Top Three Salaries
sidebar_position: 86
---

## Problem Statement 

### Problem Description

Given two tables, `Employee` and `Department`, write a query to find the employees who are high earners in each department. A high earner is defined as an employee who has a salary in the top three unique salaries for their department.

**Table: Employee**

| Column Name  | Type    |
|--------------|---------|
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
id is the primary key for this table.

### Examples

**Example 1:**

**Input:**

**Employee table:**

| id  | name  | salary | departmentId |
| --- | ----- | ------ | ------------ |
| 1   | Joe   | 85000  | 1            |
| 2   | Henry | 80000  | 2            |
| 3   | Sam   | 60000  | 2            |
| 4   | Max   | 90000  | 1            |
| 5   | Janet | 69000  | 1            |
| 6   | Randy | 85000  | 1            |
| 7   | Will  | 70000  | 1            |

**Department table:**

| id  | name  |
| --- | ----- |
| 1   | IT    |
| 2   | Sales |

**Output:**

| Department | Employee | Salary |
|------------|----------|--------|
| IT         | Max      | 90000  |
| IT         | Joe      | 85000  |
| IT         | Randy    | 85000  |
| IT         | Will     | 70000  |
| Sales      | Henry    | 80000  |
| Sales      | Sam      | 60000  |

### Constraints

- The tables contain at least one row and at most 10^4 rows.

## Solution of Given Problem

### Intuition and Approach

To solve this problem, we need to:
1. Create a subquery to find the top three unique salaries for each department.
2. Join the `Employee` table with the `Department` table to get the department names.
3. Filter the employees who have salaries in the top three unique salaries for their department.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="SQL" label="SQL" default>
  <SolutionAuthor name="@pallasivasai"/>
   ```sql
   -- SQL solution to find employees who are high earners in each department

   WITH TopSalaries AS (
       SELECT 
           departmentId, 
           salary,
           DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) AS salary_rank
       FROM 
           Employee
   )
   SELECT 
       d.name AS Department, 
       e.name AS Employee, 
       e.salary AS Salary
   FROM 
       Employee e
   JOIN 
       Department d ON e.departmentId = d.id
   JOIN 
       TopSalaries t ON e.departmentId = t.departmentId AND e.salary = t.salary
   WHERE 
       t.salary_rank <= 3;
   ```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time Complexity**: $O(n logn)$, where n is the number of rows in the `Employee` table due to the ranking operation.
- **Space Complexity**: $O(n)$, where n is the number of rows in the `Employee` table for storing the CTE results.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="OsMuAspJAkc"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['Ajay-Dhangar', 'pallasivasai'].map(username => (
 <Author key={username} username={username} />
))}
</div>
