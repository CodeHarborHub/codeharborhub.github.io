---
id: maximal-square
title: Maximal Square
sidebar_label: 221 Maximal Square
tags:
- Dynamic Programming
- Java
- Matrix
- Array
description: "This document provides a solution where we find the largest square containing only 1's and return its area."
---

## Problem

You are given an m x n binary $matrix$ filled with 0's and 1's, find the largest square containing only 1's and return its area.

### Examples

**Example 1:**

![image](https://github.com/vivekvardhan2810/codeharborhub.github.io/assets/91594529/4816deda-e3ba-47d4-b6d8-b38dd4fe67e2)

**Input:** matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

**Output:** 4

**Example 2:**

![image](https://github.com/vivekvardhan2810/codeharborhub.github.io/assets/91594529/43f9556f-bdde-4d5c-b8ab-a5807c51cb3c)

**Input:** matrix = [["0","1"],["1","0"]]

**Output:** 1

**Example 3:**

**Input:** matrix = [["0"]]

**Output:** 0

### Constraints

- $m == matrix.length$
- $n == matrix[i].length$
- $1 <= m, n <= 300$
- $matrix[i][j]$ is $0$ or $1$

---
## Approach
There are four approaches discussed that helps to obtain the solution:

1. **Dynamic Programming Table**:
   - Use a 2D DP array **'dp'** where **'dp[i][j]'** represents the side length of the largest square whose bottom-right corner is at position **'(i, j)'**.
     
   - The value of **'dp[i][j]'** is determined by the values of **'dp[i-1][j]'**, **'dp[i][j-1]'**, and **'dp[i-1][j-1]'**.

2. **Transition**:
     
   - If **'matrix[i][j]'** is $1$:
     -  If **'i'** or **'j'** is $0$ (first row or first column), **'dp[i][j]'** is $1$ because the largest square ending there can only be of $size1$.
     
     -  Otherwise, **'dp[i][j]'** is the minimum of **'dp[i-1][j]'**, **'dp[i][j-1]'**, and **'dp[i-1][j-1]'** plus $1$. This is because we can form a larger square only if all three adjacent squares can also form squares of $1's$.
        
3. **Max Side Length**:
   
   - Track the maximum side length of squares found during the iteration.

4. **Result**:
     
   - The area of the largest square is the square of the maximum side length found.

## Solution for Maximal Square

This problem can be solved using dynamic programming. The problem requires to Utilize a DP table where each entry represents the side length of the largest square ending at that position.

#### Code in Java
    
 ```java
class Solution {
    public int maximalSquare(char[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return 0;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;
        int maxSide = 0;

        // Create a DP array to store the size of the largest square ending at each position
        int[][] dp = new int[rows][cols];

        // Fill the DP array
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == '1') {
                    if (i == 0 || j == 0) {
                        // If we're at the first row or first column, the largest square ending here is just 1
                        dp[i][j] = 1;
                    } else {
                        // Otherwise, calculate the size of the square based on the surrounding squares
                        dp[i][j] = Math.min(Math.min(dp[i-1][j], dp[i][j-1]), dp[i-1][j-1]) + 1;
                    }
                    // Update the maximum side length found
                    maxSide = Math.max(maxSide, dp[i][j]);
                }
            }
        }

        // The area of the largest square is side length squared
        return maxSide * maxSide;
    }
}

```

### Complexity Analysis

#### Time Complexity: O($m$ x $n$)

> **Reason**: The algorithm involves iterating through each cell of the matrix once, leading to a time complexity of $𝑂(𝑚 × 𝑛)$, where $𝑚$ is the number of rows and $𝑛$ is the number of columns.

#### Space Complexity: O($m$ × $n$)

> **Reason**: The space complexity is $𝑂(𝑚 × 𝑛)$ due to the additional DP array used. This could be optimized to $O(n)$ by reusing a single row of DP values, but in the given solution, we use a full 2D DP array.

# References

- **LeetCode Problem:** [Maximal Square](https://leetcode.com/problems/maximal-square/description/)
- **Solution Link:** [Maximal Square Solution on LeetCode](https://leetcode.com/problems/maximal-square/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
