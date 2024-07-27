---
id: nth-highest-salary
title: Nth highest salary
sidebar_label: 0177-nth highest salary
tags:
  - Array
  - Sorting
  - Bucket Sort
  - Radix Sort
description: Given the solution to leetcode nth highest salary problem
---

## Problem Statement
Table: Employee
```
+-------------+------+
| Column Name | Type |
+-------------+------+
| id          | int  |
| salary      | int  |
+-------------+------+
id is the primary key (column with unique values) for this table.
Each row of this table contains information about the salary of an employee.
 
```
Write a solution to find the nth highest salary from the Employee table. If there is no nth highest salary, return null.

The result format is in the following example.
### Examples
***Example 1:***
```
Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
n = 2
Output: 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| 200                    |
+------------------------+
```

***Example 2:***
```
Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
n = 2
Output: 
+------------------------+
| getNthHighestSalary(2) |
+------------------------+
| null                   |
+------------------------+
```
## Solution

### Approach

- take one set function add all salaries to that one using for loop
- convert set to list and sort
- if N is negitive or salaries are `Null or len(c) <N` for this conditions return None value Data set
- else return n th element from backwards of the sorting list

#### Implementation

### Using panda
```python
import pandas as pd

def nth_highest_salary(employee: pd.DataFrame, N: int) -> pd.DataFrame:
    d=set()
    for i in employee["salary"]:
        d.add(i)
    c=list(set(d))
    c.sort()
    if(len(c)<N or len(c)==0 or N<=0 ):
        a=None
    else:
        a=c[-N]
    r="getNthHighestSalary"+"("+str(N)+")"
    t={r:[a]}
    o=pd.DataFrame(t)
    return o
```

### Using MYSQL
```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
    SELECT DISTINCT T.salary FROM 
    (
        SELECT E.salary, 
            DENSE_RANK() OVER (ORDER BY E.salary DESC) r
        FROM Employee E
    ) T
    WHERE N = r
  );
END
```
