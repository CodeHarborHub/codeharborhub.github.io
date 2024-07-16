---
id: rising-temperature
title: Rising Temperature
difficulty: Easy
sidebar_label: 0197-Rising-Temperature
tags:
  - SQL
  - LeetCode Easy
---

## Problem Description
Given a `Weather` table, write a SQL query to find all dates' `Id` with higher temperatures compared to its previous dates (yesterday).

Assume the table `Weather` has the following structure:
```plaintext
+---------+------------+------------------+
| Id(INT) | RecordDate(DATE) | Temperature(INT) |
+---------+------------+------------------+
|       1 | 2015-01-01 |               10 |
|       2 | 2015-01-02 |               25 |
|       3 | 2015-01-03 |               20 |
|       4 | 2015-01-04 |               30 |
+---------+------------+------------------+
```

### Example
**Example 1:**
```plaintext
Assume that the `Weather` table has the following content:
+---------+------------+------------------+
| Id(INT) | RecordDate(DATE) | Temperature(INT) |
+---------+------------+------------------+
|       1 | 2015-01-01 |               10 |
|       2 | 2015-01-02 |               25 |
|       3 | 2015-01-03 |               20 |
|       4 | 2015-01-04 |               30 |
+---------+------------+------------------+

For the `Weather` table above, your query should return:
+----+
| Id |
+----+
|  2 |
|  4 |
+----+
```
### Constraints
- The `Weather` table will have at most 10^4 rows.
- The `RecordDate` values are unique.

## Solution Approach

### Approach Overview
To find all dates' `Id` with higher temperatures compared to its previous dates, we need to compare each row with the row corresponding to the previous date.

### Detailed Steps

1. **Join the Table with Itself**:
   - Use a `JOIN` operation to join the `Weather` table with itself, where the `RecordDate` of the first instance is one day after the `RecordDate` of the second instance.

2. **Filter Rows with Higher Temperature**:
   - In the `WHERE` clause, compare the `Temperature` of the joined rows to ensure we only select rows where the current day's temperature is higher than the previous day's temperature.

## Code Examples

### SQL Query
```sql
SELECT w1.Id
FROM Weather w1
JOIN Weather w2
ON DATEDIFF(w1.RecordDate, w2.RecordDate) = 1
WHERE w1.Temperature > w2.Temperature;
```

### Explanation
- `JOIN Weather w2 ON DATEDIFF(w1.RecordDate, w2.RecordDate) = 1`: This joins each row in the `Weather` table with the row from the previous day.
- `WHERE w1.Temperature > w2.Temperature`: This filters the rows to only include those where the temperature is higher than the previous day's temperature.

## Complexity

- **Time Complexity**: `O(n log n)` if indexed properly. The `JOIN` operation on dates can be efficient with indexing on `RecordDate`.
  
- **Space Complexity**: `O(n)`, as we might need additional space for the result set depending on the number of rows that satisfy the condition.
