---
id: Maximum-Score-of-a-Node-Sequence
title:  Maximum-Score-of-a-Node-Sequence
sidebar_label: 2242-Maximum-Score-of-a-Node-Sequence
tags:
  - Arrays
  - graph 
  - sorting
  - Enumeration
description: "This document provides solutions to this problem implemented in Java, and Python."
---

## Problem

There is an undirected graph with n nodes, numbered from 0 to n - 1.

You are given a 0-indexed integer array scores of length n where scores[i] denotes the score of node i. You are also given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.

A node sequence is valid if it meets the following conditions:

There is an edge connecting every pair of adjacent nodes in the sequence.
No node appears more than once in the sequence.
The score of a node sequence is defined as the sum of the scores of the nodes in the sequence.

Return the maximum score of a valid node sequence with a length of 4. If no such sequence exists, return -1.

### Examples

**Example 1:**

Input: scores = [5,2,9,8,4], edges = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
Output: 24
Explanation: The figure above shows the graph and the chosen node sequence [0,1,2,3].
The score of the node sequence is 5 + 2 + 9 + 8 = 24.
It can be shown that no other node sequence has a score of more than 24.
Note that the sequences [3,1,2,0] and [1,0,2,3] are also valid and have a score of 24.
The sequence [0,3,2,4] is not valid since no edge connects nodes 0 and 3.
### Constraints

- `banknotesCount.length == 5`
- `0 <= banknotesCount[i] <= 109`
- `1 <= amount <= 109`

### Solution

#### Code in Different Languages

### Java Solution

```java
    public int maximumScore(int[] A, int[][] edges) {
        int n = A.length;
        PriorityQueue<Integer>[] q = new PriorityQueue[n];
        for (int i = 0; i < n; i++)
            q[i] = new PriorityQueue<>((a, b) -> A[a] - A[b]);
        for (int[] e : edges) {
            q[e[0]].offer(e[1]);
            q[e[1]].offer(e[0]);
            if (q[e[0]].size() > 3) q[e[0]].poll();
            if (q[e[1]].size() > 3) q[e[1]].poll();
        }
        int res = -1;
        for (int[] edge : edges)
            for (int i : q[edge[0]])
                for (int j : q[edge[1]])
                    if (i != j && i != edge[1] && j != edge[0])
                        res = Math.max(res, A[i] + A[j] + A[edge[0]] + A[edge[1]]);  
        return res;
    }


```

### Python Solution

```python
    def maximumScore(self, A, edges):
        n = len(A)
        G = [[] for i in range(n)]
        for i,j in edges:
            G[i].append([A[j], j])
            G[j].append([A[i], i])
        for i in range(n):
            G[i] = nlargest(3, G[i])
            
        res = -1
        for i,j  in edges:
            for vii, ii in G[i]:
                for vjj, jj in G[j]:
                    if ii != jj and ii != j and j != ii:
                        res = max(res, vii + vjj + A[i] + A[j])
        return res

```

### Complexity Analysis

### Time Complexity: $O(1)$

> **Reason**:Both deposit and withdraw operations are $O(1)$, assuming a fixed number of denominations.

### Space Complexity: $O(1)$

> **Reason**: for the fixed-size array or deque used to store banknote counts.
