---
id: game-play-analysis-iv
title: Game Play Analysis IV
sidebar_label: 0550-game-play-analysis-iv
tags:
  - Database

description: "This is a solution to game-play-analysis-iv problem on LeetCode."
---

## Problem Description

Table: `Activity`

```
+--------------+---------+
| Column Name  | Type    |
+--------------+---------+
| player_id    | int     |
| device_id    | int     |
| event_date   | date    |
| games_played | int     |
+--------------+---------+
```

`(player_id, event_date)` is the primary key (combination of `columns` with unique values) of this table.
This table shows the activity of `players` of some games.
Each `row` is a record of a player who logged in and played a number of games `(possibly 0)` before logging out on someday using some device.


Write a solution to report the fraction of players that logged in again on the day after the day they first logged in, rounded to `2 decimal` places. In other words, you need to count the number of players that logged in for at least `two consecutive` days starting from their first login date, then `divide` that number by the total number of `players`.

The result format is in the following example.

### Examples

**Example 1:**

```
Input: 
Activity table:
+-----------+-----------+------------+--------------+
| player_id | device_id | event_date | games_played |
+-----------+-----------+------------+--------------+
| 1         | 2         | 2016-03-01 | 5            |
| 1         | 2         | 2016-03-02 | 6            |
| 2         | 3         | 2017-06-25 | 1            |
| 3         | 1         | 2016-03-02 | 0            |
| 3         | 4         | 2018-07-03 | 5            |
+-----------+-----------+------------+--------------+
Output: 
+-----------+
| fraction  |
+-----------+
| 0.33      |
+-----------+
Explanation: 
Only the player with id 1 logged back in after the first day he had logged in so the answer is 1/3 = 0.33

```


## Solution for Game Play Analysis IV

### Approach:

1- Use a Common Table Expression (CTE) to calculate and store the first
   login date for each player.
2- Join the original Activity table with the CTE on player_id to access
   both the login events and the first login date.
3- Use the DATEDIFF function to check if the event date is exactly one 
   day after the first login date.
4- Aggregate Results: Sum up the cases where the condition is true and
   divide by the total number of unique players to get the desired
   fraction. Round the result to two decimal places.


## Code in Different Languages

### MySQL

```MySQL
# Write your MySQL query statement below

# First, let's store the first login date of each player.
WITH temp AS (
    SELECT player_id, MIN(event_date) AS first_login_date
    FROM Activity 
    GROUP BY player_id
)

# Calculate the fraction of players who logged in exactly one day after their first login.
SELECT 
    ROUND(
        SUM(DATEDIFF(a.event_date, t.first_login_date) = 1) / COUNT(DISTINCT a.player_id), 2
    ) AS fraction
FROM Activity a
JOIN temp t ON a.player_id = t.player_id;

```
### Pandas

```pandas
import pandas as pd

def gameplay_analysis(activity: pd.DataFrame) -> pd.DataFrame:
      activity["first"] = activity.groupby("player_id").event_date.transform(min)
      activity_2nd_day = activity.loc[activity["first"] + pd.DateOffset(1) == activity["event_date"]]
      return pd.DataFrame({"fraction":[round(len(activity_2nd_day) / activity.player_id.nunique(),2)]})

```



## Complexity Analysis

### Time Complexity: O(n)
**Reason**: where n is the number of rows in the Activity table. This is because the query processes each row in the Activity table to calculate the first login date and checks the date difference for each login event.

### Space Complexity: O(n)
**Reason**: The space complexity is O(n), where n is the number of players, because the CTE temp will store the first login date for each player.

## References

- **LeetCode Problem**: [Game Play Analysis IV](https://leetcode.com/problems/game-play-analysis-iv/)

