---
id : create-a-new-column
title : Create a New column
sidebar_label: 2881 - Create a new column Leetcode
tags:
  - LeetCode
  - Python
  - Data Science
description: "This is a solution for the leetcode 2881 problem which is to create a new column.This problem uses pandas which is a python library for solving"
---

## Problem Description

A company plans to provide its employees with a bonus.
Write a solution to create a new column name bonus that contains the doubled values of the salary column.

## Examples

Input:

```plaintext
DataFrame employees
+---------+--------+
| name    | salary |
+---------+--------+
| Piper   | 4548   |
| Grace   | 28150  |
| Georgia | 1103   |
| Willow  | 6593   |
| Finn    | 74576  |
| Thomas  | 24433  |
+---------+--------+
```

Output:

```plaintext
+---------+--------+--------+
| name    | salary | bonus  |
+---------+--------+--------+
| Piper   | 4548   | 9096   |
| Grace   | 28150  | 56300  |
| Georgia | 1103   | 2206   |
| Willow  | 6593   | 13186  |
| Finn    | 74576  | 149152 |
| Thomas  | 24433  | 48866  |
+---------+--------+--------+
```

Explanation:

A new column bonus is created by doubling the value in the column salary.

## Intuition

I will use the pandas library to solve this problem. I will create a new column bonus by multiplying the salary column by 2.

### Solution Code

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Abhay:)"/>
    ```Python
  import pandas as pd

  def createBonusColumn(employees: pd.DataFrame) -> pd.DataFrame:
      employees['bonus'] = employees['salary']*2
      return employees
    ```
  </TabItem>
</Tabs>

## References
- **Leetcode Problem :** [Create a new column](https://leetcode.com/problems/create-a-new-column/)