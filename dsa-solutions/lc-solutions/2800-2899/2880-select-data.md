---
id: select-data-from-a-dataframe
title: Select Data from a DataFrame
sidebar_label: 2880 - Select Data Leetcode
tags:
  - LeetCode
  - Python
  - Data Science
description: "This is a solution to the Select Data question from the Leetcode 2880 question"
---

## Problem Description

Write a solution to select the name and age of the student with student_id = 101.

## Examples

Example 1:

Input:
```plaintext
+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
|    101     | Ulysses | 13  |
|    53      | William | 10  |
|    128     | Henry   | 6   |
|    3       | Henry   | 11  |
+------------+---------+-----+
```

Output:

```plaintext
+---------+-----+
| name    | age |
+---------+-----+
| Ulysses | 13  |
+---------+-----+
```

## Intuition

We can use the `loc` method of the DataFrame to select the rows where the student_id is 101 and then select the columns "name" and "age".

### Solution Code

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@Abhay:)"/>
    ```Python
    import pandas as pd

    def selectData(students: pd.DataFrame) -> pd.DataFrame:
            return students.loc[students['student_id'] == 101, ["name", "age"]]
    ```

  </TabItem>
</Tabs>

## References

- **Leetcode Problem :** [Select Data](https://leetcode.com/problems/select-data/)
