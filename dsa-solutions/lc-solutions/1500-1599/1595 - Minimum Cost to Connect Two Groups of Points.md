---
id: Minimum Cost to Connect Two Groups of Points
title: Minimum Cost to Connect Two Groups of Points
sidebar_label: 1595 Minimum Cost to Connect Two Groups of Points
tags:
- Dynamic Programming
- Bit Manipulation
- Java
- Bitmask
- Matrix
- Array
description: "This document provides a solution where we return the minimum cost to connect the two groups."
---
## Problem

You are given two groups of points where the first group has $size1$ points, the second group has $size2$ points, and $size1 >= size2$.

The cost of the connection between any two points are given in an $size1$ x $size2$ matrix where cost[i][j] is the cost of connecting point i of the first group and point j of the second group. The groups are connected if each point in both groups is connected to one or more points in the opposite group. In other words, each point in the first group must be connected to at least one point in the second group, and each point in the second group must be connected to at least one point in the first group.

### Examples

**Example 1:**

![image](https://github.com/CodeHarborHub/codeharborhub.github.io/assets/91594529/bb9cc0a0-5c28-444d-a0cb-d0753998c6c0)

**Input:** cost = [[15, 96], [36, 2]]

**Output:** 17

**Explanation:** The optimal way of connecting the groups is:

1--A

2--B

This results in a total cost of 17.

**Example 2:**

![image](https://github.com/CodeHarborHub/codeharborhub.github.io/assets/91594529/d956087d-3ffc-4a13-9144-83bf585bee88)

**Input:** cost = [[1, 3, 5], [4, 1, 1], [1, 5, 3]]

**Output:** 4

**Explanation:** The optimal way of connecting the groups is:

1--A

2--B

2--C

3--A

This results in a total cost of 4.

**Example 3:**

**Input:** cost = [[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]

**Output:** 10

### Constraints

- $size1 == cost.length$
- $size2 == cost[i].length$
- $1 <= size1,size2 <= 12$
- $size1 >= size2$
- $0 <= cost[i][j] <= 100$

---
## Approach
There are four approaches discussed that helps to obtain the solution:

1. **Define the Problem**:
   - We are given two groups of points with a cost matrix representing the connection cost between each pair of points from the two groups.
     
   - We need to ensure that every point in both groups is connected to at least one point in the other group.

2. **Dynamic Programming with Memoization**:
   - Use dynamic programming (DP) with memoization to avoid redundant calculations.
     
   - Define a recursive function **'dfs(cost, i, mask, memo)'** where:
     -  **i** is the current index in the first group.
     -  Mask is a bitmask representing the subset of points in the second group that have been connected.
     -  memo is a memoization table to store intermediate results.    

3. **Recursive Strategy**:
   - For each point in the first group, attempt to connect it to every point in the second group, updating the bitmask accordingly.
     
   - Once all points in the first group are processed, ensure that all points in the second group are connected by calculating the minimum additional cost for any remaining points.

   - Use memoization to store and reuse results of subproblems to improve efficiency.

4. **Base and Transition**:
   - **Base Case:** If all points in the first group are processed (i == $size1$), calculate the cost to connect any remaining points in the second group that have not been connected.
     
   - **Transition:** For each point in the second group, update the bitmask and recursively calculate the minimum cost.

## Solution for Minimum Cost to Connect Two Groups of Points

This problem can be solved using dynamic programming. The problem requires connecting two groups of points such that each point in the first group is connected to at least one point in the second group and vice versa, with the goal of minimizing the total connection cost. This problem can be approached as a minimum cost bipartite matching problem with additional constraints.

#### Code in Java
    
 ```java
 import java.util.*;
 import java.util.Arrays;

    class Solution {
    public int connectTwoGroups(List<List<Integer>> cost) {
        int size1 = cost.size();
        int size2 = cost.get(0).size();
        
        // Memoization table
        int[][] memo = new int[size1][1 << size2];
        for (int i = 0; i < size1; i++) {
            Arrays.fill(memo[i], -1);
        }
        
        return dfs(cost, 0, 0, memo);
    }
    
    private int dfs(List<List<Integer>> cost, int i, int mask, int[][] memo) {
        int size1 = cost.size();
        int size2 = cost.get(0).size();
        
        if (i == size1) {
            int remainingCost = 0;
            for (int j = 0; j < size2; j++) {
                if ((mask & (1 << j)) == 0) {
                    int minCost = Integer.MAX_VALUE;
                    for (int k = 0; k < size1; k++) {
                        minCost = Math.min(minCost, cost.get(k).get(j));
                    }
                    remainingCost += minCost;
                }
            }
            return remainingCost;
        }
        
        if (memo[i][mask] != -1) {
            return memo[i][mask];
        }
        
        int minCost = Integer.MAX_VALUE;
        for (int j = 0; j < size2; j++) {
            minCost = Math.min(minCost, cost.get(i).get(j) + dfs(cost, i + 1, mask | (1 << j), memo));
        }
        
        memo[i][mask] = minCost;
        return minCost;
    }
}

```

### Complexity Analysis

#### Time Complexity: O($size1$ × $2^size2$ x $size2$)

> **Reason**: There are $'size 1'$ points in the first group, and each point can potentially connect to any subset of the $'size2'$ points in the second group, leading to $'2^size2'$ possible states for the bitmask. For each state, we iterate over all points in the second group, hence the additional factor of $'size2'$

#### Space Complexity: O($size1$ × $2^size2$)

> **Reason**: Additional space is used for the recursion stack, which is O($size1$).

# References

- **LeetCode Problem:** [Minimum Cost to Connect Two Groups of Points](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/description/)
- **Solution Link:** [Minimum Cost to Connect Two Groups of Points Solution on LeetCode](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
