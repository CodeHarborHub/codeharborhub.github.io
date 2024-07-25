---
id : drop-duplicate-rows
title : Drop Duplicate Rows
sidebar_label: 2882 - Drop Duplicate Rows
tags:
  - LeetCode
  - Python
  - Data Science
description: "This is a solution for the Leetcode problem 2882 which asks to drop duplicate rows and keep only the first occurence.
This Problem is solved with the help of python library Pandas. "
---

## Problem Description

There are some duplicate rows in the DataFrame based on the email column.
Write a solution to remove these duplicate rows and keep only the first occurrence.
The result format is in the following example.

## Examples

Example 1:

Input:

```plaintext
+-------------+---------+---------------------+
| customer_id | name    | email               |
+-------------+---------+---------------------+
| 1           | Ella    | emily@example.com   |
| 2           | David   | michael@example.com |
| 3           | Zachary | sarah@example.com   |
| 4           | Alice   | john@example.com    |
| 5           | Finn    | john@example.com    |
| 6           | Violet  | alice@example.com   |
+-------------+---------+---------------------+
```

Output:

```plaintext
+-------------+---------+---------------------+
| customer_id | name    | email               |
+-------------+---------+---------------------+
| 1           | Ella    | emily@example.com   |
| 2           | David   | michael@example.com |
| 3           | Zachary | sarah@example.com   |
| 4           | Alice   | john@example.com    |
| 6           | Violet  | alice@example.com   |
+-------------+---------+---------------------+
```

## Explanation:

Alic (customer_id = 4) and Finn (customer_id = 5) both use john@example.com, so only the first occurrence of this email is retained.

## Intuition

I will use the pandas library to solve this problem. I will use the drop_duplicates method to remove the duplicate rows based on the email column and keep only the first occurrence.

### Solution Code

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@abhay"/>
    ```Python
    import pandas as pd

    def dropDuplicateEmails(customers: pd.DataFrame) -> pd.DataFrame:
          customers.drop_duplicates(subset='email',keep='first',inplace = True)
          return  customers
    ```
  </TabItem>
</Tabs>

## References

- **Leetcode Problem :** [Drop Duplicate Rows](https://leetcode.com/problems/drop-duplicate-rows/description/)
