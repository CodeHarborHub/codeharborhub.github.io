---
id: top-three-salaries
title: Department top three salaries
sidebar_label: 0185-Deaprtment top three salaries
tags:
- SQL
- Database
description: "Solution to Leetcode 183. Customers Who Never Order"
---

## Problem Description

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
id is the primary key (column with unique values) for this table.
departmentId is a foreign key (reference column) of the ID from the Department table.
Each row of this table indicates the ID, name, and salary of an employee. It also contains the ID of their department.
```
Table: Department
```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
+-------------+---------+
id is the primary key (column with unique values) for this table.
Each row of this table indicates the ID of a department and its name.

```

A company's executives are interested in seeing who earns the most money in each of the company's departments. A high earner in a department is an employee who has a salary in the top three unique salaries for that department.

Write a solution to find the employees who are high earners in each of the departments.

Return the result table in any order.

The result format is in the following example
### Examples

**Example 1:**
```
Input: 
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
Output: 
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
Explanation: 
In the IT department:
- Max earns the highest unique salary
- Both Randy and Joe earn the second-highest unique salary
- Will earns the third-highest unique salary

In the Sales department:
- Henry earns the highest salary
- Sam earns the second-highest salary
- There is no third-highest salary as there are only two employees
```

### Approach
#### Approach 1: Return the First n Rows Using nlargest()
#### Algorithm
- For this problem, we can either identify the top earners first using DataFrame employee and then join the DataFrame department to get the department name, or join the DataFrame department first to get the department name before identifying the top earners. In this approach, we use the latter logic.

- In this step, we can also update the column name in the DataFrame department from name to Department as requested by the final output.
```sql
Employee_Department = employee.merge(department, left_on='departmentId', right_on='id').rename(columns = {'name_y': 'Department'})
```

- Since the definition of a high earner is an employee who has a salary in the top three unique salaries for the department, we want to make sure the salary is unique at the department level for later calculation. To do this, we select only the department and salary from the DataFrame created in the last step and drop any duplicated records if existed.
```sql  
Employee_Department = Employee_Department[['Department', 'departmentId', 'salary']].drop_duplicates()
```

- Now we can identify the top 3 unique salaries for each department. We use the function nlargest() to get this value. The parameter '3' is passed to the function as it defines the number of rows to return.

```sql
top_salary = Employee_Department.groupby(['Department', 'departmentId']).salary.nlargest(3).reset_index()
```

- Now we only need to identify the employees are in these departments and making the same amount of salary. To do this, we can merge the DataFrame top_salary, which contains the top three unique salary for each department, to the DataFrame employee on departmentId and salary, so only the employees that match both criteria will be retained.


```sql
df = top_salary.merge(employee, on=['departmentId', 'salary'])
```

- Lastly, we clean the DataFrame as per requested by the final output. We keep only the columns needed and rename the columns accordingly.

```sql
df[['Department', 'name', 'salary']].rename(columns = {'name': 'Employee', 'salary': 'Salary'})
```

### Solution

#### SQL

```sql
WITH employee_department AS
    (
    SELECT d.id, 
        d.name AS Department, 
        salary AS Salary, 
        e.name AS Employee, 
        DENSE_RANK()OVER(PARTITION BY d.id ORDER BY salary DESC) AS rnk
    FROM Department d
    JOIN Employee e
    ON d.id = e.departmentId
    )
SELECT Department, Employee, Salary
FROM employee_department
WHERE rnk <= 3
```

#### PYthon
```python
import pandas as pd
​
def top_three_salaries(employee: pd.DataFrame, department: pd.DataFrame) -> pd.DataFrame:
    
    Employee_Department = employee.merge(department, left_on='departmentId', right_on='id').rename(columns = {'name_y': 'Department'})

    Employee_Department = Employee_Department[['Department', 'departmentId', 'salary']].drop_duplicates()
    
    top_salary = Employee_Department.groupby(['Department', 'departmentId']).salary.nlargest(3).reset_index()
    
    df = top_salary.merge(employee, on=['departmentId', 'salary'])
    
    return df[['Department', 'name', 'salary']].rename(columns = {'name': 'Employee', 'salary': 'Salary'})
```

