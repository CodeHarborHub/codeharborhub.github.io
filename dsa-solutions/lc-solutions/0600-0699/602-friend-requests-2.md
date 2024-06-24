---
id: friend-requests-ii-who-has-the-most-friends
title: Friend Requests II Who Has the Most Friends
sidebar_label: Friend Requests II
tags: [sql, database, pandas]
description: "This question solve important question of sql which gives us knowledge about writing of sql command."
---

## 1. Problem Description
```
+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| requester_id   | int     |
| accepter_id    | int     |
| accept_date    | date    |
+----------------+---------+
(requester_id, accepter_id) is the primary key (combination of columns with unique values) for this table.
This table contains the ID of the user who sent the request, the ID of the user who received the request, and the date when the request was accepted.

```
Write a solution to find the people who have the most friends and the most friends number.

The test cases are generated so that only one person has the most friends.

The result format is in the following example.
## 2. Examples

### Example 1:
**Input:**
```
RequestAccepted table:
+--------------+-------------+-------------+
| requester_id | accepter_id | accept_date |
+--------------+-------------+-------------+
| 1            | 2           | 2016/06/03  |
| 1            | 3           | 2016/06/08  |
| 2            | 3           | 2016/06/08  |
| 3            | 4           | 2016/06/09  |
+--------------+-------------+-------------+

```
**Output:** 
```
+----+-----+
| id | num |
+----+-----+
| 3  | 3   |
+----+-----+

```
**Explanation:**  
The person with id 3 is a friend of people 1, 2, and 4, so he has three friends in total, which is the most number than any others.

### Idea
- Combine two columns into one list to find all people who either sent or received friend requests.
```
 SELECT → This command retrieves data from a database

AS → This command renames a column with an alias (temporary name). In most database languages, we can skip the AS keyword and get the same result

UNION ALL → This operator combines the result-set of two or more SELECT statements (every SELECT statement must have the same number/data type/order of columns). It returns all rows from the query and it does not remove duplicate rows between the various SELECT statements
```
- Calculate the number of friends each person has.
```
COUNT() → This function returns the number of rows

Asterisk (*) → This symbol specifies that the query should return all columns of the queried tables
```
- Group the results to show all records related to the same person.
```
GROUP BY → This command groups rows that have the same values into summary rows, typically to perform aggregate functions on them
```
- Arrange the results by the number of friends in descending order.
```
ORDER BY → This command sorts the result-set in ascending (smallest to largest) order by default

DESC → This keyword sorts the records in descending (largest to smallest) order
```
- Show the person with the most friends.
```
LIMIT → This clause specifies the number of records to return
```

## 5. Implementation 

<Tabs>
  <TabItem value="Pandas" label="Pandas" default>
  ```Pandas
 import pandas as pd

def most_friends(request_accepted: pd.DataFrame) -> pd.DataFrame:

    ctr = Counter(chain(request_accepted.requester_id.to_list(),
                        request_accepted. accepter_id.to_list()))
                                                 
    mx= max(ctr, key = lambda x: ctr[x])
  
    return pd.DataFrame({'id':[mx], 'num':[ctr[mx]]})

  ```
  </TabItem>

  <TabItem value="SQL" label="SQL">
  ```SQL
  SELECT id, COUNT(*) AS num 
FROM (
    SELECT requester_id AS id FROM RequestAccepted
    UNION ALL
    SELECT accepter_id FROM RequestAccepted
) AS friends_count
GROUP BY id
ORDER BY num DESC 
LIMIT 1;
  ```
  </TabItem>

</Tabs>

### Complexity Analysis
**Time Complexity:** $O(n)$


**Space Complexity:** $O(u)$ where `N ~ len(request_accepted)` and `U ~ the count of unique ids`.

## 10. References

- [LeetCode - Friend Requests II: Who Has the Most Friends](https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/solutions/3803211/union-all-is-what-you-need-don-t-overcomplicate/)


