---
id: Drop-Missing-Data
title: Drop Missing Data Solution
sidebar_label: 2883 - Drop Missing Data
tags:
  - LeetCode
  - Python
description: "This is a solution to the Drop Missing Data problem on LeetCode."
sidebar_position: 1
---

In this tutorial, we will solve the Drop Missing Data problem. We will provide the implementation of the solution in Python.

## Problem Description

```plaintext
DataFrame students
+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| student_id  | int    |
| name        | object |
| age         | int    |
+-------------+--------+
```

There are some rows having missing values in the name column.

Write a solution to remove the rows with missing values.

### Examples

**Example 1:**

```plaintext
Input:
+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 32         | Piper   | 5   |
| 217        | None    | 19  |
| 779        | Georgia | 20  |
| 849        | Willow  | 14  |
+------------+---------+-----+

Output:
+------------+---------+-----+
| student_id | name    | age |
+------------+---------+-----+
| 32         | Piper   | 5   |
| 779        | Georgia | 20  |
| 849        | Willow  | 14  |
+------------+---------+-----+

Explanation:
Student with id 217 havs empty value in the name column, so it will be removed.
```

### Constraints

- You have to solve using python pandas only.

---

## Solution for Drop Missing Data

```py
import pandas as pd

def dropMissingData(students: pd.DataFrame) -> pd.DataFrame:
    return students[students['name'].notnull()]
```

### Complexity Analysis

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(n)$
- **Iterating over the DataFrame:** The notnull() function on the 'name' column performs an O(n) operation, iterating through each row of the DataFrame, where n is the number of rows.
- **Boolean indexing:** Usually an O(n) process, this involves building a new DataFrame from the boolean mask (the output of notnull()).
- **New DataFrame:** To hold the filtered data, the function builds a new DataFrame. The number of rows with complete "name" values determines the size of this new DataFrame, and in the worst scenario, that number may reach n.
  As a result, O(n) is also the space complexity.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['avdhut-pailwan'].map(username => (
 <Author key={username} username={username} />
))}
</div>
