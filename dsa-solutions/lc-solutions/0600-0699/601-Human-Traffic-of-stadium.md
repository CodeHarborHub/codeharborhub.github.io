---
id: human-traffic-of-stadium
title: Human-Traffic-Of-Stadium
sidebar_label: Human Traffic Of Stadium
tags:
  - Sql
  - Database
  - Pandas
description: "This question solve important question of sql which gives us knowledge about writing of sql command."
---

# Non-negative Integers without Consecutive Ones

## 1. Problem Description
```
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| id            | int     |
| visit_date    | date    |
| people        | int     |
+---------------+---------+
visit_date is the column with unique values for this table.
Each row of this table contains the visit date and visit id to the stadium with the number of people during the visit.
As the id increases, the date increases as well.
```
Write a solution to display the records with three or more rows with consecutive `id`'s, and the number of people is greater than or equal to 100 for each.

Return the result table ordered by `visit_date` in ascending order.

The result format is in the following example.
## 2. Examples

### Example 1:
**Input:**
```
Stadium table:
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 1    | 2017-01-01 | 10        |
| 2    | 2017-01-02 | 109       |
| 3    | 2017-01-03 | 150       |
| 4    | 2017-01-04 | 99        |
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-09 | 188       |
+------+------------+-----------+ 
```
**Output:** 
```
+------+------------+-----------+
| id   | visit_date | people    |
+------+------------+-----------+
| 5    | 2017-01-05 | 145       |
| 6    | 2017-01-06 | 1455      |
| 7    | 2017-01-07 | 199       |
| 8    | 2017-01-09 | 188       |
+------+------------+-----------+
```
**Explanation:**  
The four rows with ids 5, 6, 7, and 8 have consecutive ids and each of them has >= 100 people attended. Note that row 8 was included even though the visit_date was not the next day after row 7.
The rows with ids 2 and 3 are not included because we need at least three consecutive ids.

### Idea
I've seen pretty many solutions using join of three tables or creating temporary tables with `n^3 `rows. With my `5-years`' working experience on data analysis, I can guarantee you this method will cause you "out of spool space" issue when you deal with a large table in big data field.

I recommend you to learn and master window functions like `lead`, `lag` and use them as often as you can in your codes. These functions are very fast, and whenever you find yourself creating duplicate temp tables, you should ask yourself: can I solve this with window functions.


## 5. Implementation (Code for 4 Languages)

<Tabs>
  <TabItem value="Pandas" label="Pandas" default>
  ```Pandas
 import pandas as pd

def human_traffic(stadium: pd.DataFrame) -> pd.DataFrame:
    stadium = stadium[stadium.people >= 100].sort_values(by='id')
    third = (stadium.id.diff() == 1)\
          & (stadium.id.diff().shift(1) == 1)
    return stadium[third | third.shift(-1) | third.shift(-2)]


  ```
  </TabItem>

  <TabItem value="SQL" label="SQL">
  ```SQL
   SELECT ID
    , visit_date
    , people
FROM (
    SELECT ID
        , visit_date
        , people
        , LEAD(people, 1) OVER (ORDER BY id) nxt
        , LEAD(people, 2) OVER (ORDER BY id) nxt2
        , LAG(people, 1) OVER (ORDER BY id) pre
        , LAG(people, 2) OVER (ORDER BY id) pre2
    FROM Stadium
) cte 
WHERE (cte.people >= 100 AND cte.nxt >= 100 AND cte.nxt2 >= 100) 
    OR (cte.people >= 100 AND cte.nxt >= 100 AND cte.pre >= 100)  
    OR (cte.people >= 100 AND cte.pre >= 100 AND cte.pre2 >= 100) 
  ```
  </TabItem>

</Tabs>

### Complexity Analysis
**Time Complexity:** $O(nlogn)$


**Space Complexity:** $O(n)$

## 10. References

- [LeetCode - Human-Traffic-Of-Stadium](https://leetcode.com/problems/human-traffic-of-stadium/solutions/911779/mysql-use-window-function-for-big-data/)


