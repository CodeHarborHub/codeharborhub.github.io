---
id: kth-ancestor-of-a-tree node
title: Kth Ancestor of a Tree Node
sidebar_label: 1483 Kth Ancestor of a Tree Node
tags:
- Java
- Binary Search
- Dynamic Programming
- Tree
- Depth-First Search
- Breadth-First Search
- Design
description: "This document provides a solution where we Find the kth ancestor of a given node."
---

## Problem

You are given a tree with $n$ nodes numbered from $0$ to $n - 1$ in the form of a parent array parent where $parent[i]$ is the parent of $i^{\text{th}}$ node. The root of the tree is node $0$. Find the $k^{\text{th}}$ ancestor of a given node.

The $k^{\text{th}}$ ancestor of a tree node is the $k^{\text{th}}$ node in the path from that node to the root node.

Implement the $TreeAncestor$ class:

- $TreeAncestor(int n, int[] parent)$ Initializes the object with the number of nodes in the tree and the parent array.
  
- $int getKthAncestor(int node, int k)$ return the $k^{\text{th}}$ ancestor of the given node node. If there is no such ancestor, return $-1$.

### Examples

**Example 1:**

![image](https://github.com/vivekvardhan2810/codeharborhub.github.io/assets/91594529/c96383bd-e0bb-494d-8112-226686ab1832)

**Input:** ["TreeAncestor", "getKthAncestor", "getKthAncestor", "getKthAncestor"]
[[7, [-1, 0, 0, 1, 1, 2, 2]], [3, 1], [5, 2], [6, 3]]

**Output:** [null, 1, 0, -1]

**Explanation:**

TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);

treeAncestor.getKthAncestor(3, 1); // returns 1 which is the parent of 3

treeAncestor.getKthAncestor(5, 2); // returns 0 which is the grandparent of 5

treeAncestor.getKthAncestor(6, 3); // returns -1 because there is no such ancestor

### Constraints

- $1 <= k <= n <= 5 * 10^4$
- $parent.length == n$
- $parent[0] == -1$
- $0 <= parent[i] < n$ for all $0 < i < n$
- $0 <= node < n$
- There will be at most $5 * 10^4$ queries.
---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. **Binary Lifting Setup**:

   - Calculate the maximum power of 2 needed, which is $\log_2(n)$. This represents the maximum number of jumps we need to consider.
  
   - Create a 2D array **'dp'** where **'dp[i][j]'** represents the $2^j$-th ancestor of node i.
     
2. **Preprocessing**:

   - Initialize **'dp[i][0]'** with the parent of node i.
     
   - Fill in the rest of the **'dp'** table using dynamic programming. For each power j, compute **'dp[i][j]'** using **'dp[i][j-1]'**. Specifically, **'dp[i][j]'** is $2^j$-th ancestor of node i, which is the $2^j-1$-th ancestor of node i.
   
3. **Query Processing**:

   - For each query to find the 𝑘-th ancestor of a node, use the binary representation of 𝑘. For each bit that is set in 𝑘, jump accordingly using the **'dp'** table.
     
   - If at any point the ancestor becomes $'-1'$, return $'-1'$.
     
## Solution for Kth Ancestor of a Tree Node

- The goal is to find the $k^{\text{th}}$ ancestor of a node efficiently. A naive approach would involve iterating up the tree one node at a time, which would be too slow for large values of k. Instead, we use a technique called "binary lifting".
 
- Binary lifting allows us to jump in powers of two, which significantly speeds up the process. By preprocessing the tree, we can answer each query in logarithmic time.

#### Code in Java

```java
import java.util.*;

class TreeAncestor {
    private int[][] dp;
    private int maxPower;

    public TreeAncestor(int n, int[] parent) {
        maxPower = (int) (Math.log(n) / Math.log(2)) + 1;
        dp = new int[n][maxPower];
        
        for (int i = 0; i < n; i++) {
            dp[i][0] = parent[i];
        }
        
        for (int j = 1; j < maxPower; j++) {
            for (int i = 0; i < n; i++) {
                int midAncestor = dp[i][j - 1];
                if (midAncestor != -1) {
                    dp[i][j] = dp[midAncestor][j - 1];
                } else {
                    dp[i][j] = -1;
                }
            }
        }
    }

    public int getKthAncestor(int node, int k) {
        for (int j = 0; j < maxPower; j++) {
            if ((k & (1 << j)) > 0) {
                node = dp[node][j];
                if (node == -1) {
                    return -1;
                }
            }
        }
        return node;
    }

    public static void main(String[] args) {
        TreeAncestor treeAncestor = new TreeAncestor(7, new int[]{-1, 0, 0, 1, 1, 2, 2});
        System.out.println(treeAncestor.getKthAncestor(3, 1)); // returns 1
        System.out.println(treeAncestor.getKthAncestor(5, 2)); // returns 0
        System.out.println(treeAncestor.getKthAncestor(6, 3)); // returns -1
    }
}    
```

### Complexity Analysis

#### Time Complexity: $O(n log n)$

> **Reason**: Initializing the dp array requires iterating through all nodes for each power of 2 up to log𝑛, where as coming to query it involves checking up to log 𝑛 bits in the binary representation of 𝑘 and making jumps accordingly.

#### Space Complexity: $O(log n)$

> **Reason**: The space complexity is $O(log n)$, The **'dp'** table requires 𝑛 × log𝑛, where 𝑛 is the number of nodes and log𝑛 is the maximum power of 2 we consider.

# References

- **LeetCode Problem:** [Kth Ancestor of a Tree Node](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/description/)
- **Solution Link:** [Kth Ancestor of a Tree Node Solution on LeetCode](https://leetcode.com/problems/kth-ancestor-of-a-tree-node/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
