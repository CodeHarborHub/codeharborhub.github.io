---
id: unique-paths-II
title: Unique Paths II(LeetCode)
sidebar_label: 0063-Unique Paths II
tags:
  - Array
  - Dynamic Programming
  - Matrix
description: There is a robot initially located at the top-left corner. The robot tries to move to the bottom-right corner. Return the number of possible unique paths that the robot can take to reach the bottom-right corner.
---

## Problem Statement

You are given an `m x n` integer array `grid`. There is a robot initially located at the top-left corner (i.e., `grid[0][0]`). The robot tries to move to the bottom-right corner (i.e., `grid[m - 1][n - 1]`). The robot can only move either down or right at any point in time.

An obstacle and space are marked as `1` or `0` respectively in `grid`. A path that the robot takes cannot include any square that is an obstacle.

Return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The testcases are generated so that the answer will be less than or equal to `2 * 109`.

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/a0dd405c-20e8-4f5f-88a4-f39ab1f1bb4e)

```plaintext
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

**Example 2:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/da914756-753c-4bfb-897a-f734807fea8f)

```plaintext
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
```

### Constraints

- `m == obstacleGrid.length`
- `n == obstacleGrid[i].length`
- `1 <= m, n <= 100`
- `obstacleGrid[i][j]` is `0` or `1`.

## Solution

When faced with the problem of finding the number of unique paths in a grid with obstacles, we need an efficient solution that accounts for the presence of obstacles and dynamically updates the number of paths available. Below is the Java solution to solve this problem using dynamic programming.

### Approach 

#### Algorithm

1. Dynamic Programming: We use a 1D array `dp` to keep track of the number of ways to reach each cell in the grid.
2. Initialization: Initialize `dp[0]` to 1, as there is only one way to be at the start if there is no obstacle.
3. Update DP Array: Traverse through each cell in the grid.
* If a cell contains an obstacle (`1`), set `dp[j]` to `0` as it is not reachable.
* Otherwise, update `dp[j]` to include the number of ways to reach the current cell from the left cell (`dp[j - 1]`).
4. Result: The value at `dp[width - 1]` will contain the number of unique paths to the bottom-right corner of the grid.

#### Implementation

```Java
public int uniquePathsWithObstacles(int[][] obstacleGrid) {
    int width = obstacleGrid[0].length;
    int[] dp = new int[width];
    dp[0] = 1;
    for (int[] row : obstacleGrid) {
        for (int j = 0; j < width; j++) {
            if (row[j] == 1)
                dp[j] = 0;
            else if (j > 0)
                dp[j] += dp[j - 1];
        }
    }
    return dp[width - 1];
}
```

### Complexity Analysis

- **Time complexity**: $O(M*N)$ - where m is the number of rows and n is the number of columns. We traverse each cell in the grid once.
- **Space complexity**: $O(N)$ - where n is the number of columns. We use a 1D array dp of size equal to the width of the grid.

### Conclusion

This dynamic programming approach efficiently calculates the number of unique paths in a grid with obstacles by using a 1D array to store the number of ways to reach each cell. This approach ensures that we only use O(n) additional space, making it an optimized solution for this problem.
