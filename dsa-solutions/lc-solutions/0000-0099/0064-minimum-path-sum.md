---
id: minimum-path-sum
title: Minimum Path Sum(LeetCode)
sidebar_label: 0064-Minimum Path Sum
tags:
  - Array
  - Dynamic Programming
  - Matrix
description: Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
---

## Problem Statement

Given a `m x n` `grid` filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/bd64e41b-d13f-4309-992a-2e6e6cae1bad)

```plaintext
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
```

**Example 2:**

```plaintext
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 200`
- `0 <= grid[i][j] <= 200`

## Solution

The problem is to find the minimum path sum from the top-left corner to the bottom-right corner of a grid. You can only move either down or right at any point in time. Each cell in the grid contains a non-negative integer which represents the cost to traverse that cell.

### Approach 

#### Algorithm

1. Initialization:
* Create a 1D array `cur` of size `m` (the number of rows in the grid) to store the minimum path sum for the current column.
* Initialize `cur[0]` to `grid[0][0]` since the starting point is the cost of the top-left cell.
* Fill the first column of `cur` by accumulating the costs of the cells in the first column of the grid.
2. Dynamic Programming:
* Iterate through each column starting from the second column.
* For each column, update the first cell by adding the cost of the current cell to the value of the first cell in `cur` from the previous column.
* For the remaining cells in the column, update each cell by taking the minimum of the value from the left cell and the value from the top cell (stored in `cur`) and adding the cost of the current cell.
3. Result:
* After iterating through the grid, `cur[m-1]` will contain the minimum path sum to reach the bottom-right corner of the grid.

#### Implementation

```C++
class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        vector<int> cur(m, grid[0][0]);
        
        // Initialize the first column
        for (int i = 1; i < m; i++)
            cur[i] = cur[i - 1] + grid[i][0]; 
        
        // Fill the rest of the grid
        for (int j = 1; j < n; j++) {
            cur[0] += grid[0][j]; // Update the top cell of the current column
            for (int i = 1; i < m; i++)
                cur[i] = min(cur[i - 1], cur[i]) + grid[i][j];
        }
        return cur[m - 1];
    }
};
```

### Complexity Analysis

- **Time complexity**: $O(M*N)$ - where `m` is the number of rows and `n` is the number of columns. Each cell in the grid is processed once.
- **Space complexity**: $O(M)$ -  where `m` is the number of rows. We use a single 1D array of size `m` to store the minimum path sums for the current column.

### Conclusion

This dynamic programming solution efficiently computes the minimum path sum in a grid by maintaining only a 1D array to store the current state of the path sums, which significantly optimizes space usage.
