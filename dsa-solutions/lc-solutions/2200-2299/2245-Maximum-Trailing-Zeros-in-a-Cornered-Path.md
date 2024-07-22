---
id:  Maximum-Trailing-Zeros-in-a-Cornered-Path
title:  Maximum Trailing Zeros in a Cornered Path
sidebar_label: 2245-Maximum Trailing Zeros in a Cornered Path
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a 2D integer array grid of size m x n, where each cell contains a positive integer.

A cornered path is defined as a set of adjacent cells with at most one turn. More specifically, the path should exclusively move either horizontally or vertically up to the turn (if there is one), without returning to a previously visited cell. After the turn, the path will then move exclusively in the alternate direction: move vertically if it moved horizontally, and vice versa, also without returning to a previously visited cell.

The product of a path is defined as the product of all the values in the path.

Return the maximum number of trailing zeros in the product of a cornered path found in grid.

### Examples

**Example 1:**

Input: grid = [[23,17,15,3,20],[8,1,20,27,11],[9,4,6,2,21],[40,9,1,10,6],[22,7,4,5,3]]
Output: 3
Explanation: The grid on the left shows a valid cornered path.
It has a product of 15 * 20 * 6 * 1 * 10 = 18000 which has 3 trailing zeros.
It can be shown that this is the maximum trailing zeros in the product of a cornered path.

The grid in the middle is not a cornered path as it has more than one turn.
The grid on the right is not a cornered path as it requires a return to a previously visited cell.

**Example 2:**

Input: grid = [[4,3,2],[7,6,1],[8,8,8]]
Output: 0
Explanation: The grid is shown in the figure above.
There are no cornered paths in the grid that result in a product with a trailing zero.


### Constraints

- `m == grid.length`
- `n == grid[i].length`
- ` 1 <= m, n <= 105`
- `1 <= m * n <= 105`
- `1 <= grid[i][j] <= 1000`

### Approach

To find the maximum number of trailing zeros in the product of a cornered path in a grid, we can follow these steps:

Precompute Factors: Calculate the number of 2's and 5's (factors that contribute to trailing zeros) in each cell.
Prefix Sum Arrays: Use prefix sums to quickly compute the number of 2's and 5's in any subarray of the grid.
Evaluate Paths: For each possible turn (L-shape), evaluate all possible paths and compute the product's trailing zeros using the precomputed prefix sums.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <vector>
#include <algorithm>

using namespace std;

int countFactors(int x, int p) {
    int count = 0;
    while (x % p == 0) {
        x /= p;
        count++;
    }
    return count;
}

int maxTrailingZeros(vector<vector<int>>& grid) {
    int m = grid.size();
    int n = grid[0].size();
    vector<vector<int>> prefix_2(m + 1, vector<int>(n + 1, 0));
    vector<vector<int>> prefix_5(m + 1, vector<int>(n + 1, 0));

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            int num_2 = countFactors(grid[i][j], 2);
            int num_5 = countFactors(grid[i][j], 5);
            prefix_2[i + 1][j + 1] = prefix_2[i + 1][j] + prefix_2[i][j + 1] - prefix_2[i][j] + num_2;
            prefix_5[i + 1][j + 1] = prefix_5[i + 1][j] + prefix_5[i][j + 1] - prefix_5[i][j] + num_5;
        }
    }

    int max_trailing_zeros = 0;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            for (int k = i; k < m; k++) {
                for (int l = j; l < n; l++) {
                    if (j < n - 1 && i < m - 1) {
                        int total_2 = prefix_2[i + 1][l + 1] - prefix_2[i + 1][j] + prefix_2[k + 1][l + 1] - prefix_2[i + 1][l + 1];
                        int total_5 = prefix_5[i + 1][l + 1] - prefix_5[i + 1][j] + prefix_5[k + 1][l + 1] - prefix_5[i + 1][l + 1];
                        max_trailing_zeros = max(max_trailing_zeros, min(total_2, total_5));
                    }

                    if (j < n - 1 && i < m - 1) {
                        int total_2 = prefix_2[k + 1][j + 1] - prefix_2[i][j + 1] + prefix_2[k + 1][l + 1] - prefix_2[k + 1][j + 1];
                        int total_5 = prefix_5[k + 1][j + 1] - prefix_5[i][j + 1] + prefix_5[k + 1][l + 1] - prefix_5[k + 1][j + 1];
                        max_trailing_zeros = max(max_trailing_zeros, min(total_2, total_5));
                    }
                }
            }
        }
    }

    return max_trailing_zeros;
}


```

### Java Solution

```java
import java.util.*;

class Solution {
    public int maxTrailingZeros(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;

        int[][] prefix_2 = new int[m + 1][n + 1];
        int[][] prefix_5 = new int[m + 1][n + 1];

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int num_2 = countFactors(grid[i][j], 2);
                int num_5 = countFactors(grid[i][j], 5);
                prefix_2[i + 1][j + 1] = prefix_2[i + 1][j] + prefix_2[i][j + 1] - prefix_2[i][j] + num_2;
                prefix_5[i + 1][j + 1] = prefix_5[i + 1][j] + prefix_5[i][j + 1] - prefix_5[i][j] + num_5;
            }
        }

        int max_trailing_zeros = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = i; k < m; k++) {
                    for (int l = j; l < n; l++) {
                        if (j < n - 1 && i < m - 1) {
                            int total_2 = prefix_2[i + 1][l + 1] - prefix_2[i + 1][j] + prefix_2[k + 1][l + 1] - prefix_2[i + 1][l + 1];
                            int total_5 = prefix_5[i + 1][l + 1] - prefix_5[i + 1][j] + prefix_5[k + 1][l + 1] - prefix_5[i + 1][l + 1];
                            max_trailing_zeros = Math.max(max_trailing_zeros, Math.min(total_2, total_5));
                        }

                        if (j < n - 1 && i < m - 1) {
                            int total_2 = prefix_2[k + 1][j + 1] - prefix_2[i][j + 1] + prefix_2[k + 1][l + 1] - prefix_2[k + 1][j + 1];
                            int total_5 = prefix_5[k + 1][j + 1] - prefix_5[i][j + 1] + prefix_5[k + 1][l + 1] - prefix_5[k + 1][j + 1];
                            max_trailing_zeros = Math.max(max_trailing_zeros, Math.min(total_2, total_5));
                        }
                    }
                }
            }
        }

        return max_trailing_zeros;
    }

    private int countFactors(int x, int p) {
        int count = 0;
        while (x % p == 0) {
            x /= p;
            count++;
        }
        return count;
    }
}

```

### Python Solution

```python
def maxTrailingZeros(grid):
    m, n = len(grid), len(grid[0])

    def count_factors(x, p):
        count = 0
        while x % p == 0:
            x //= p
            count += 1
        return count

    # Initialize prefix sums
    prefix_2 = [[0] * (n + 1) for _ in range(m + 1)]
    prefix_5 = [[0] * (n + 1) for _ in range(m + 1)]

    for i in range(m):
        for j in range(n):
            num_2 = count_factors(grid[i][j], 2)
            num_5 = count_factors(grid[i][j], 5)
            prefix_2[i + 1][j + 1] = prefix_2[i + 1][j] + prefix_2[i][j + 1] - prefix_2[i][j] + num_2
            prefix_5[i + 1][j + 1] = prefix_5[i + 1][j] + prefix_5[i][j + 1] - prefix_5[i][j] + num_5

    max_trailing_zeros = 0

    # Evaluate all possible cornered paths
    for i in range(m):
        for j in range(n):
            for k in range(i, m):
                for l in range(j, n):
                    # Horizontal then vertical (right then down)
                    if j < n - 1 and i < m - 1:
                        total_2 = prefix_2[i + 1][l + 1] - prefix_2[i + 1][j] + prefix_2[k + 1][l + 1] - prefix_2[i + 1][l + 1]
                        total_5 = prefix_5[i + 1][l + 1] - prefix_5[i + 1][j] + prefix_5[k + 1][l + 1] - prefix_5[i + 1][l + 1]
                        max_trailing_zeros = max(max_trailing_zeros, min(total_2, total_5))

                    # Vertical then horizontal (down then right)
                    if j < n - 1 and i < m - 1:
                        total_2 = prefix_2[k + 1][j + 1] - prefix_2[i][j + 1] + prefix_2[k + 1][l + 1] - prefix_2[k + 1][j + 1]
                        total_5 = prefix_5[k + 1][j + 1] - prefix_5[i][j + 1] + prefix_5[k + 1][l + 1] - prefix_5[k + 1][j + 1]
                        max_trailing_zeros = max(max_trailing_zeros, min(total_2, total_5))

    return max_trailing_zeros

# Example usage
grid = [[23, 17, 15, 3, 20], [8, 1, 20, 27, 11], [9, 4, 6, 2, 21], [40, 9, 1, 10, 6], [22, 7, 4, 5, 3]]
print(maxTrailingZeros(grid))  # Output: 3



```

### Complexity Analysis

### Time Complexity: $O((m*n)^2)$

> **Reason**:for factor counting ,prefix sum calculation and for evaluating paths.

### Space Complexity: $O(m*n)$

> **Reason**: for using a prefix sum array


