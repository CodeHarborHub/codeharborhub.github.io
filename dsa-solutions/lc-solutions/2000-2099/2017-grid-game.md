---
id: grid-game
title: Grid Game
sidebar_label: 2017 Grid Game
tags:
  - Array
  - Dynamic Programming
  - Game Theory
description: "This is a solution to the Grid Game problem where two robots play optimally on a 2D grid."
sidebar_position: 2017
---

### Problem Description

You are given a `0-indexed 2D array` `grid` of size `2 x n`, where `grid[r][c]` represents the number of points at position `(r, c)` on the matrix. Two robots initially start at `(0, 0)` and want to reach `(1, n-1)`. Each robot may only move to the right `((r, c) to (r, c + 1)) `or down `((r, c) `to `(r + 1, c))`.

At the start of the game, the first robot moves from` (0, 0) to (1, n-1)`, collecting all the points from the cells on its path. For all cells` (r, c)` traversed on the path, `grid[r][c]` is set to `0`. Then, the second robot moves from `(0, 0) to (1, n-1)`, collecting the points on its path. Note that their paths may intersect with one another.

The first robot wants to minimize the number of points collected by the second robot. In contrast, the second robot wants to maximize the number of points it collects. If both robots play optimally, return the number of points collected by the second robot.

### Examples

**Example 1:**

```
Input: `grid = [[2,5,4],[1,5,1]]`
Output: `4`
Explanation: 
- The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
- The cells visited by the first robot are set to 0.
- The second robot will collect 0 + 0 + 4 + 0 = 4 points.
```

**Example 2:**

```
Input: `grid = [[3,3,1],[8,5,2]]`
Output: `4`
Explanation: 
- The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
- The cells visited by the first robot are set to 0.
- The second robot will collect 0 + 3 + 1 + 0 = 4 points.
```

**Example 3:**
```
Input: `grid = [[1,3,1,15],[1,3,3,1]]`
Output: `7`
Explanation: 
- The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
- The cells visited by the first robot are set to 0.
- The second robot will collect 0 + 1 + 3 + 3 + 0 = 7 points.
```

### Approach

In solving the problem, we employ two dynamic programming arrays, `dp1` and `dp2`. `dp1[j]` tracks the maximum points collected by the first robot as it moves across the grid from left to right, starting at `(0, 0)`. Simultaneously, `dp2[j]` records the maximum points collected by the second robot moving from right to left, starting at `(0, n-1)`. The approach ensures optimal play: after `dp1` is computed, `dp2` is filled backwards while calculating the maximum points `max_points` that the second robot can collect after the first has minimized its score.

#### C++

``` cpp
class Solution {
public:
    long long gridGame(vector<vector<int>>& grid) {
        int n = grid[0].size();
        
        // Initialize dp arrays
        vector<long long> dp1(n), dp2(n);
        
        // Initialize dp1
        dp1[0] = grid[0][0];
        for (int j = 1; j < n; ++j) {
            dp1[j] = dp1[j - 1] + grid[0][j];
        }
        
        // Initialize dp2
        dp2[n - 1] = grid[1][n - 1];
        for (int j = n - 2; j >= 0; --j) {
            dp2[j] = dp2[j + 1] + grid[1][j];
        }
        
        // Find maximum points for the second robot
        long long max_points = LLONG_MAX;
        for (int j = 0; j < n; ++j) {
            max_points = min(max_points, max(dp1[j], (j > 0 ? dp2[j - 1] : LLONG_MAX)));
        }
        
        return max_points;
    }
};

```



