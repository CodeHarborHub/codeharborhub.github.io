---
id: number-of-seniors-and-juniors-to-join-the-company
title: The Number of Seniors and Juniors to Join the Company
sidebar_label: 2004 The Number of Seniors and Juniors to Join the Company
tags:
  - SQL
  - LeetCode
description: "This is a solution to the The Number of Seniors and Juniors to Join the Company problem on LeetCode."
sidebar_position: 2004
---

## Problem Description

Table: Candidates

| Column Name | Type |
|-------------|------|
| employee_id | int  |
| experience  | enum |
| salary      | int  |

- `employee_id` is the primary key column for this table.
- `experience` is an enum with one of the values ('Senior', 'Junior').
- Each row of this table indicates the id of a candidate, their monthly salary, and their experience.

A company wants to hire new employees. The budget of the company for the salaries is $70,000. The company's criteria for hiring are:

1. Hiring the largest number of seniors.
2. After hiring the maximum number of seniors, use the remaining budget to hire the largest number of juniors.

Write an SQL query to find the number of seniors and juniors hired under the mentioned criteria.

Return the result table in any order.

### Examples

**Example 1:**

```
Input: 
Candidates table:

| employee_id | experience | salary |
|-------------|------------|--------|
| 1           | Junior     | 10000  |
| 9           | Junior     | 10000  |
| 2           | Senior     | 20000  |
| 11          | Senior     | 20000  |
| 13          | Senior     | 50000  |
| 4           | Junior     | 40000  |

Output: 

| experience | accepted_candidates |
|------------|---------------------|
| Senior     | 2                   |
| Junior     | 2                   |

Explanation: 
We can hire 2 seniors with IDs (2, 11). Since the budget is $70,000 and the sum of their salaries is $40,000, we still have $30,000 but they are not enough to hire the senior candidate with ID 13.
We can hire 2 juniors with IDs (1, 9). Since the remaining budget is $30,000 and the sum of their salaries is $20,000, we still have $10,000 but they are not enough to hire the junior candidate with ID 4.
```

**Example 2:**

```
Input: 
Candidates table:

| employee_id | experience | salary |
|-------------|------------|--------|
| 1           | Junior     | 10000  |
| 9           | Junior     | 10000  |
| 2           | Senior     | 80000  |
| 11          | Senior     | 80000  |
| 13          | Senior     | 80000  |
| 4           | Junior     | 40000  |

Output: 

| experience | accepted_candidates |
|------------|---------------------|
| Senior     | 0                   |
| Junior     | 3                   |

Explanation: 
We cannot hire any seniors with the current budget as we need at least $80,000 to hire one senior.
We can hire all three juniors with the remaining budget.
```

### Approach

To solve this problem, we can use the following SQL query. We need to first calculate the number of seniors that can be hired within the budget. After hiring the maximum number of seniors, we calculate the remaining budget and then determine the number of juniors that can be hired with this remaining budget.

#### SQL

```sql
WITH SeniorCandidates AS (
    SELECT COUNT(*) AS num_seniors, SUM(salary) AS total_senior_salary
    FROM Candidates
    WHERE experience = 'Senior'
    HAVING SUM(salary) <= 70000
),
JuniorCandidates AS (
    SELECT COUNT(*) AS num_juniors, SUM(salary) AS total_junior_salary
    FROM Candidates
    WHERE experience = 'Junior'
    HAVING SUM(salary) <= 70000 - COALESCE((SELECT total_senior_salary FROM SeniorCandidates), 0)
)
SELECT 
    'Senior' AS experience,
    COALESCE((SELECT num_seniors FROM SeniorCandidates), 0) AS accepted_candidates
UNION
SELECT 
    'Junior' AS experience,
    COALESCE((SELECT num_juniors FROM JuniorCandidates), 0) AS accepted_candidates;
```