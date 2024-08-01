---
id: number-of-accounts-that-did-not-stream
title: Number of Accounts That Did Not Stream
sidebar_label: 2020 Number of Accounts That Did Not Stream
tags:
  - SQL
  - LeetCode
description: "This is a solution to the Number of Accounts That Did Not Stream problem on LeetCode."
sidebar_position: 2020
---

## Problem Description

You are given two tables, `subscriptions` and `streams`.

### Subscriptions Table
| Column Name | Type |
|-------------|------|
| account_id  | int  |
| start_date  | date |
| end_date    | date |

- `account_id` is the primary key column for this table.
- Each row of this table indicates the start and end dates of an account's subscription.
- Note that always `start_date` < `end_date`.

### Streams Table
| Column Name | Type |
|-------------|------|
| session_id  | int  |
| account_id  | int  |
| stream_date | date |

- `session_id` is the primary key column for this table.
- `account_id` is a foreign key from the Subscriptions table.
- Each row of this table contains information about the account and the date associated with a stream session.

Write an SQL query to report the number of accounts that bought a subscription in 2021 but did not have any stream session.

### Example
```

Input:

Subscriptions table:

| account_id | start_date | end_date   |
|------------|------------|------------|
| 9          | 2020-02-18 | 2021-10-30 |
| 3          | 2021-09-21 | 2021-11-13 |
| 11         | 2020-02-28 | 2020-08-18 |
| 13         | 2021-04-20 | 2021-09-22 |
| 4          | 2020-10-26 | 2021-05-08 |
| 5          | 2020-09-11 | 2021-01-17 |

Streams table:

| session_id | account_id | stream_date |
|------------|------------|-------------|
| 14         | 9          | 2020-05-16  |
| 16         | 3          | 2021-10-27  |
| 18         | 11         | 2020-04-29  |
| 17         | 13         | 2021-08-08  |
| 19         | 4          | 2020-12-31  |
| 13         | 5          | 2021-01-05  |

Output

| accounts_count |
|----------------|
| 2              |

Explanation: Users 4 and 9 did not stream in 2021. User 11 did not subscribe in 2021.
```

## Approach 

The SQL query involves filtering subscriptions that started in 2021 and checking which of those accounts did not have any streams in 2021.


#### SQL Query

```sql
WITH SubscriptionsIn2021 AS (
    SELECT account_id
    FROM subscriptions
    WHERE YEAR(start_date) = 2021
),
StreamsIn2021 AS (
    SELECT DISTINCT account_id
    FROM streams
    WHERE YEAR(stream_date) = 2021
)
SELECT COUNT(s.account_id) AS accounts_count
FROM SubscriptionsIn2021 s
LEFT JOIN StreamsIn2021 st
ON s.account_id = st.account_id
WHERE st.account_id IS NULL;
```