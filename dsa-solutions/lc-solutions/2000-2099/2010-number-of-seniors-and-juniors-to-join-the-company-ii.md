---
id: number-of-seniors-and-juniors-to-join-the-company-ii
title: The Number of Seniors and Juniors to Join the Company II
sidebar_label: 2010 The Number of Seniors and Juniors to Join the Company II
tags:
  - SQL
  - Hiring
  - Company
  - Leetcode
description: "This is a solution to the problem The Number of Seniors and Juniors to Join the Company II."
sidebar_position: 2010
---

## Problem Description

A company wants to hire new employees. The budget of the company for the salaries is $70,000. The company's criteria for hiring are:

1. Keep hiring the senior with the smallest salary until you cannot hire any more seniors.
2. Use the remaining budget to hire the junior with the smallest salary.
3. Keep hiring the junior with the smallest salary until you cannot hire any more juniors.

Write an SQL query to find the IDs of seniors and juniors hired under the mentioned criteria.

Return the result table in any order.

### Example 1:

```

Input:

Candidates table:
| employee_id | experience | salary |
|-------------|------------|--------|
| 1           | Junior     | 10000  |
| 9           | Junior     | 15000  |
| 2           | Senior     | 20000  |
| 11          | Senior     | 16000  |
| 13          | Senior     | 50000  |
| 4           | Junior     | 40000  |

Output:
| employee_id |
|-------------|
| 11          |
| 2           |
| 1           |
| 9           |

Explanation:
We can hire 2 seniors with IDs (11, 2). Since the budget is $70,000 and the sum of their salaries is $36,000, we still have $34,000 but they are not enough to hire the senior candidate with ID 13.
We can hire 2 juniors with IDs (1, 9). Since the remaining budget is $34,000 and the sum of their salaries is $25,000, we still have $9,000 but they are not enough to hire the junior candidate with ID 4.

```

### Example 2:

```
Input:

Candidates table:
| employee_id | experience | salary |
|-------------|------------|--------|
| 1           | Junior     | 25000  |
| 9           | Junior     | 10000  |
| 2           | Senior     | 85000  |
| 11          | Senior     | 80000  |
| 13          | Senior     | 90000  |
| 4           | Junior     | 30000  |

Output:
| employee_id |
|-------------|
| 9           |
| 1           |
| 4           |

Explanation:
We cannot hire any seniors with the current budget as we need at least $80,000 to hire one senior.
We can hire all three juniors with the remaining budget.

```

## Approach

To solve this problem, we can use a combination of window functions and common table expressions (CTEs) to track the cumulative sum of salaries for seniors and juniors, ensuring we stay within the budget.

#### SQL Solution

```sql
WITH Seniors AS (
    SELECT
        employee_id,
        salary,
        SUM(salary) OVER (ORDER BY salary) AS cumulative_salary
    FROM Candidates
    WHERE experience = 'Senior'
),
HiredSeniors AS (
    SELECT
        employee_id,
        salary
    FROM Seniors
    WHERE cumulative_salary <= 70000
),
RemainingBudget AS (
    SELECT
        70000 - IFNULL(MAX(cumulative_salary), 0) AS budget_left
    FROM Seniors
    WHERE cumulative_salary <= 70000
),
Juniors AS (
    SELECT
        employee_id,
        salary,
        SUM(salary) OVER (ORDER BY salary) AS cumulative_salary
    FROM Candidates
    WHERE experience = 'Junior'
),
HiredJuniors AS (
    SELECT
        employee_id,
        salary
    FROM Juniors, RemainingBudget
    WHERE cumulative_salary <= budget_left
)
SELECT employee_id
FROM HiredSeniors
UNION ALL
SELECT employee_id
FROM HiredJuniors;
```

