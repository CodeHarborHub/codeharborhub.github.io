---
id: students-report-by-geography
title: Students Report By Geography
sidebar_label: 0618-students-report-by-geography
tags:
- Database
description: "Given a table that indicates the name of a student and the continent they came from if it is unknown which continent has the most students, could you write a solution to generate the student report?"
---

## Problem
Table: `Student`

```
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| name        | varchar |
| continent   | varchar |
+-------------+---------+

```
This table may contain duplicate rows.
Each row of this table indicates the name of a student and the continent they came from.



A school has students from Asia, Europe, and America.
Write a solution to [pivot](https://en.wikipedia.org/wiki/Pivot_table) the continent column in the `Student` table so that each name is **sorted alphabetically** and displayed underneath its corresponding continent. The output headers should be `America`, `Asia`, and `Europe`, respectively.
The test cases are generated so that the student number from America is not less than either Asia or Europe.

**Follow up**:
 If it is unknown which continent has the most students, could you write a solution to generate the student report?

### Example

**Example 1:**

**Input:**
Student table:

```
+--------+-----------+
| name   | continent |
+--------+-----------+
| Jane   | America   |
| Pascal | Europe    |
| Xi     | Asia      |
| Jack   | America   |
+--------+-----------+
**Output:**
+---------+------+--------+
| America | Asia | Europe |
+---------+------+--------+
| Jack    | Xi   | Pascal |
| Jane    | null | null   |
+---------+------+--------+

```


### Constraints

- The number of nodes in both trees is in the range `[0, 2000]`.
- `-10^4 <= Node.val <= 10^4`

---

## Approach

Create a pivot table using a CTE to assign row numbers partitioned by continent and then aggregate maximum names for each row number.

### Steps:

1. Create a Common Table Expression (CTE) named T to select all columns from the Student table and calculate a
   row number (rk) for each student, partitioned by continent and ordered by name.
2.  Use the `ROW_NUMBER()` window function to assign a unique row number to each student within their
    continent.
3. In the main query, select the maximum student name for each continent by row number, grouping the results
   by `rk`.
4. Use the `IF` function within MAX to conditionally select the student names from different continents.
5. Retrieve the desired pivoted result,showing the student names from different continents in separate columns.

### Solution

#### MySQL

```MySQL
# Write your MySQL query statement below.

WITH
    T AS (
        SELECT
            *,
            ROW_NUMBER() OVER (
                PARTITION BY continent
                ORDER BY name
            ) AS rk
        FROM Student
    )
SELECT
    MAX(IF(continent = 'America', name, NULL)) AS 'America',
    MAX(IF(continent = 'Asia', name, NULL)) AS 'Asia',
    MAX(IF(continent = 'Europe', name, NULL)) AS 'Europe'
FROM T
GROUP BY rk;
    
```



### Complexity Analysis
**Time Complexity:** $O(nlog(n))$
>Reason: Due to sorting within each continent partition for the ROW_NUMBER window function.

**Space Complexity:** $O(n)$
>Reason: because the CTE `T` stores the entire table with an additional column.

### References
**LeetCode Problem:** Students Report By Geography
