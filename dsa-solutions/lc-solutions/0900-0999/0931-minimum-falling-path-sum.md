---
id: minimum-falling-path-sum
title: Minimum Falling Path Sum
sidebar_label: 0931- Minimum Falling Path Sum
tags:
  - Leet code
description: "Solution to leetocde 931"
---

## Problem Statement

Given an `n x n` array of integers matrix, return the minimum sum of any falling path through matrix.

A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position `(row, col) `will be `(row + 1, col - 1)`, `(row + 1, col)`, or` (row + 1, col + 1)`.

### Example 1

**Input:**

```
matrix = [[2, 1, 3],
          [6, 5, 4],
          [7, 8, 9]]
```

**Output:**

```
13
```

**Explanation:**
There are two falling paths with a minimum sum as shown.

### Example 2

**Input:**

```
matrix = [[-19, 57],
          [-40, -5]]
```

**Output:**

```
-59
```

**Explanation:**
The falling path with a minimum sum is shown.

### Constraints

- $n == matrix.length == matrix[i].length$
- $1 <= n <= 100$
- $-100 <= matrix[i][j] <= 100$

## Algorithm

To solve this problem, we use dynamic programming. The idea is to keep a `dp` array where `dp[i][j]` represents the minimum sum of a falling path reaching the element at `matrix[i][j]`.

1. **Initialize the DP table**:

   - Create a 2D list `dp` with the same dimensions as `matrix`.
   - Initialize the first row of `dp` with the first row of `matrix` since the falling path can start from any element in the first row.

2. **Fill the DP table**:

   - For each element `matrix[i][j]` in the subsequent rows:
     - Calculate the minimum sum path to reach `matrix[i][j]` from the previous row:
       - If `j > 0`, consider the element from the top-left diagonal `dp[i-1][j-1]`.
       - Consider the element directly above `dp[i-1][j]`.
       - If `j < n-1`, consider the element from the top-right diagonal `dp[i-1][j+1]`.
     - Update `dp[i][j]` with the minimum of these values plus `matrix[i][j]`.

3. **Find the minimum falling path sum**:
   - The minimum sum of any falling path will be the minimum value in the last row of `dp`.

### Pseudocode

```
function minFallingPathSum(matrix):
    h = length of matrix
    if h == 0:
        return 0
    w = length of matrix[0]
    dp = 2D list of size h x w initialized to infinity
    dp[-1] = matrix[-1]

    for i from h-2 to 0:
        for j from 0 to w-1:
            dp[i][j] = matrix[i][j] + min(
                dp[i+1][j],
                dp[i+1][j-1] if j > 0 else infinity,
                dp[i+1][j+1] if j < w-1 else infinity
            )

    return min(dp[0])
```

## Python Code

```python
from typing import List

class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        h = len(matrix)
        if h == 0:
            return 0
        w = len(matrix)
        dp = [[float('inf')] * w for _ in range(h)]
        dp[-1] = matrix[-1]

        for i in range(h-2, -1, -1):
            for j in range(w):
                dp[i][j] = matrix[i][j] + min(
                    dp[i+1][j],
                    dp[i+1][j-1] if j > 0 else float("inf"),
                    dp[i+1][j+1] if j < w-1 else float("inf")
                )
        return min(dp[0])
```

## Java Code

```java
class Solution {
    public int minFallingPathSum(int[][] matrix) {
        int h = matrix.length;
        if (h == 0) {
            return 0;
        }
        int w = matrix[0].length;
        int[][] dp = new int[h][w];
        for (int j = 0; j < w; j++) {
            dp[h-1][j] = matrix[h-1][j];
        }

        for (int i = h - 2; i >= 0; i--) {
            for (int j = 0; j < w; j++) {
                int down = dp[i+1][j];
                int downLeft = (j > 0) ? dp[i+1][j-1] : Integer.MAX_VALUE;
                int downRight = (j < w-1) ? dp[i+1][j+1] : Integer.MAX_VALUE;
                dp[i][j] = matrix[i][j] + Math.min(down, Math.min(downLeft, downRight));
            }
        }
        int minPathSum = Integer.MAX_VALUE;
        for (int j = 0; j < w; j++) {
            minPathSum = Math.min(minPathSum, dp[0][j]);
        }
        return minPathSum;
    }
}
```

## C++ Code

```cpp
class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
        int h = matrix.size();
        if (h == 0) {
            return 0;
        }
        int w = matrix[0].size();
        vector<vector<int>> dp(h, vector<int>(w, INT_MAX));
        dp[h-1] = matrix[h-1];

        for (int i = h - 2; i >= 0; --i) {
            for (int j = 0; j < w; ++j) {
                int down = dp[i+1][j];
                int downLeft = (j > 0) ? dp[i+1][j-1] : INT_MAX;
                int downRight = (j < w-1) ? dp[i+1][j+1] : INT_MAX;
                dp[i][j] = matrix[i][j] + min(down, min(downLeft, downRight));
            }
        }
        return *min_element(dp[0].begin(), dp[0].end());
    }
};
```

## JavaScript Code

```javascript
var minFallingPathSum = function (matrix) {
  let h = matrix.length;
  if (h === 0) {
    return 0;
  }
  let w = matrix[0].length;
  let dp = Array.from({ length: h }, () => Array(w).fill(Infinity));
  dp[h - 1] = [...matrix[h - 1]];

  for (let i = h - 2; i >= 0; i--) {
    for (let j = 0; j < w; j++) {
      dp[i][j] =
        matrix[i][j] +
        Math.min(
          dp[i + 1][j],
          j > 0 ? dp[i + 1][j - 1] : Infinity,
          j < w - 1 ? dp[i + 1][j + 1] : Infinity
        );
    }
  }
  return Math.min(...dp[0]);
};
```
