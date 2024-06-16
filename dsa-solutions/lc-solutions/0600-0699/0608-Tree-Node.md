---
id: tree-node
title: Tree Node
sidebar_label: 0608-Tree-Node
tags:
- Database
description: "SQL Schema: Given a table with nodes, write an SQL query to find all nodes which are the only child nodes."
---

## Problem

Given a table `Tree`, write an SQL query to find all nodes which are the only child nodes.

The `Tree` table contains these columns:

- `id`: integer
- `p_id`: integer (parent id)

### Examples

**Example:**

**Input:**  
Tree table:
```
+----+------+
| id | p_id |
+----+------+
| 1 | null  |
| 2 | 1     |
| 3 | 1     |
| 4 | 2     |
| 5 | 2     |
| 6 | 3     |
| 7 | 4     |
| 8 | 5     |
+----+------+
```
**Output:** 
```
+----+
| id |
+----+
| 6  |
| 7  |
| 8  |
+----+
```
Explanation: Nodes `6`, `7`, and `8` are the only child nodes.

### Constraints

- `id` is the primary key column for this table.
- Each row of this table contains information about the `id` of a node and the `id` of its parent node.

---

## Approach

To solve this problem, we need to find nodes that have no siblings. In other words, we need to find nodes where there is only one child per parent. 

### Steps:

1. Count the number of children for each parent.
2. Select the nodes where the parent has exactly one child.

### Solution

#### SQL

```sql
SELECT 
    id
FROM 
    Tree
WHERE 
    p_id IN (
        SELECT 
            p_id 
        FROM 
            Tree 
        GROUP BY 
            p_id 
        HAVING 
            COUNT(*) = 1
    );
```
### Explanation
1) The subquery selects p_id values from the Tree table and groups them by p_id. It then uses the HAVING clause to filter groups with a count of exactly one, meaning those p_id values with only one child.

2) The outer query then selects the id values where the p_id matches the ones returned by the subquery, which ensures that we get nodes that are the only child nodes.

### Complexity Analysis
**Time Complexity:** O(n log n)
>Reason: The complexity primarily comes from the grouping and counting operations. Depending on the database system, this can vary, but in general, it is expected to be O(n log n).

**Space Complexity:** O(n)
>Reason: The space complexity is mainly due to the storage of intermediate results, which can be linear in the size of the input.

###  References
**LeetCode Problem:** Tree Node