---
id: score-after-flipping-matrix
title: Score After Flipping Matrix
level: medium
sidebar_label: Score After Flipping Matrix
tags:
  - Array
  - Greedy
  - Matrix
  - Java
description: "This document provides solutions for the Score After Flipping Matrix problem."
---

## Problem Statement

You are given an `m x n` binary matrix `grid`.

A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score after making any number of moves (including zero moves).

**Example 1:**

Input: `grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]`

Output: `39`

Explanation: `0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39`

**Example 2:**

Input: `grid = [[0]]`

Output: `1`

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 20`
- `grid[i][j]` is `0` or `1`.

## Solutions

### Approach

To maximize the score, follow these steps:

1. **Row Flipping:**

   - Ensure that each row starts with a `1` by flipping rows where the first element is `0`.

2. **Column Flipping:**

   - For each column, if the number of `0`s exceeds the number of `1`s, flip the column to maximize the number of `1`s in that column.

3. **Calculate Score:**
   - Convert each row from binary to decimal and sum these values to get the final score.

### Java

```java
class Solution {
    public int matrixScore(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int i = 0, j = 0;

        for (i = 0; i < m; i++) {
            if (grid[i][0] == 0) {
                flipRow(grid, i);
            }
        }

        for (j = 0; j < n; j++) {
            if (searchColZeroes(grid, j) > searchColOnes(grid, j)) {
                flipCol(grid, j);
            }
        }

        int sum = 0;
        for (i = 0; i < grid.length; i++) {
            int count = 0;
            int temp = grid[0].length - 1;
            for (j = 0; j < grid[0].length; j++) {
                count += (int) (grid[i][j] * Math.pow(2, temp--));
            }
            sum += count;
        }
        return sum;
    }

    public int searchColZeroes(int[][] grid, int j) {
        int count = 0;
        for (int temp = 0; temp < grid.length; temp++) {
            if (grid[temp][j] == 0) {
                count++;
            }
        }
        return count;
    }

    public int searchColOnes(int[][] grid, int j) {
        int count = 0;
        for (int temp = 0; temp < grid.length; temp++) {
            if (grid[temp][j] == 1) {
                count++;
            }
        }
        return count;
    }

    public void flipCol(int[][] grid, int j) {
        for (int temp = 0; temp < grid.length; temp++) {
            grid[temp][j] = (grid[temp][j] == 0) ? 1 : 0;
        }
    }

    public void flipRow(int[][] grid, int i) {
        for (int temp = 0; temp < grid[0].length; temp++) {
            grid[i][temp] = (grid[i][temp] == 0) ? 1 : 0;
        }
    }
}
```

### Python

```Python
class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        # Step 1: Ensure all rows start with '1' by flipping rows where grid[i][0] == 0
        for i in range(m):
            if grid[i][0] == 0:
                self.flipRow(grid, i)

        # Step 2: Ensure each column has more '1's than '0's by flipping columns if necessary
        for j in range(n):
            if self.searchColZeroes(grid, j) > self.searchColOnes(grid, j):
                self.flipCol(grid, j)

        # Step 3: Calculate the matrix score
        score = 0
        for i in range(m):
            row_sum = 0
            for j in range(n):
                row_sum += grid[i][j] * (1 << (n - 1 - j))  # Equivalent to grid[i][j] * 2^(n-1-j)
            score += row_sum

        return score

    def searchColZeroes(self, grid: List[List[int]], j: int) -> int:
        count = 0
        for i in range(len(grid)):
            if grid[i][j] == 0:
                count += 1
        return count

    def searchColOnes(self, grid: List[List[int]], j: int) -> int:
        count = 0
        for i in range(len(grid)):
            if grid[i][j] == 1:
                count += 1
        return count

    def flipCol(self, grid: List[List[int]], j: int) -> None:
        for i in range(len(grid)):
            grid[i][j] = 1 - grid[i][j]

    def flipRow(self, grid: List[List[int]], i: int) -> None:
        for j in range(len(grid[0])):
            grid[i][j] = 1 - grid[i][j]

```
