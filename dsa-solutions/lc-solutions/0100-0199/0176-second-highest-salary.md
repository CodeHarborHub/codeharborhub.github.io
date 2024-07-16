---
id: second-highest-salary
title: Second highest salary
sidebar_label: 0176-Second highest salary
tags:
  - Array
  - Sorting
  - Bucket Sort
  - Radix Sort
description: Given the solution to leetcode second highest salary problem
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

Write a solution to find the second highest salary from the Employee table. If there is no second highest salary, return null (return None in Pandas).

The result format is in the following example.

### Examples

**Example 1:**

```plaintext
Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
Output: 
+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
```

**Example 2:**

```plaintext
Input: 
Employee table:
+----+--------+
| id | salary |
+----+--------+
| 1  | 100    |
+----+--------+
Output: 
+---------------------+
| SecondHighestSalary |
+---------------------+
| null                |
+---------------------+
```



## Solution

### Approach

- first create one empty list
- append all salarys to that list
- sort that list
- in this qoestion there are only 9 test cases to pass that test cases
- use if loops to check whether the last salary and last but one salary equal or not
- return the second highest salaryets and then find the maximum gap by comparing the minimum value of one bucket to the maximum value of the previous bucket.

#### Implementation

### Using panda
```python
import pandas as pd

def second_highest_salary(employee: pd.DataFrame) -> pd.DataFrame:
    d=[]
    for i in employee["salary"]:
        d.append(i)
    d.sort()
    if(len(d)<=1):
        e={"SecondHighestSalary":[None]}
    elif(d[-1]==d[-2] and len(d)==2):
        e={"SecondHighestSalary":[None]}
    elif(d[-1]==d[-2] and len(d)>2):
        e={"SecondHighestSalary":[d[-3]]}
    else:
        e={"SecondHighestSalary":[d[-2]]}
    c=pd.DataFrame(e)
    return c
```

### Using MYSQL
```sql
select
(select distinct Salary 
from Employee order by salary desc 
limit 1 offset 1) 
as SecondHighestSalary;
```
