---
id: dungeon-game
title: Dungeon Game
sidebar_label: 0174-Dungeon Game
tags: [Dynamic Programming, Matrix]
description: Given a 2D array representing a dungeon, return the minimum initial health required for a knight to reach the bottom-right corner.
---

## Problem Statement

The demons had captured the princess and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of `m x n` rooms laid out in a 2D grid. Our valiant knight was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess.

The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately.

Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight's health (represented by positive integers).

To reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step.

Return the knight's minimum initial health so that he can rescue the princess.

### Examples

**Example 1:**

```plaintext
Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
Output: 7
Explanation: The initial health of the knight must be at least 7 to ensure he can rescue the princess.
```

**Example 2:**

```plaintext
Input: dungeon = [[0]]
Output: 1
```

### Constraints

- `m == dungeon.length`
- `n == dungeon[i].length`
- `1 <= m, n <= 200`
- `-1000 <= dungeon[i][j] <= 1000`

## Solution

### Approach 

To determine the knight's minimum initial health, we will use a dynamic programming approach. We'll start from the bottom-right corner of the dungeon (where the princess is located) and work our way back to the top-left corner.



#### Algorithm

1. Initialization:  
- Create a 2D array `dp` of the same dimensions as the dungeon, where `dp[i][j]` represents the minimum health required to reach the bottom-right corner from cell `(i, j)`.

2. Base Case: 
- The minimum health required at the bottom-right corner is `max(1, 1 - dungeon[m-1][n-1])`.

3. Filling the DP Table:
- Fill the last row and last column of `dp` using the base case logic.
- For the rest of the cells, use the formula:  
`dp[i][j] = max(1, min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j])`
4. Result:
- The value at `dp[0][0]` will be the minimum initial health required for the knight.




#### Implementation

```Java
public class Solution {
    public int calculateMinimumHP(int[][] dungeon) {
        int m = dungeon.length;
        int n = dungeon[0].length;
        int[][] dp = new int[m][n];

        dp[m-1][n-1] = Math.max(1, 1 - dungeon[m-1][n-1]);

        for (int i = m - 2; i >= 0; i--) {
            dp[i][n-1] = Math.max(1, dp[i+1][n-1] - dungeon[i][n-1]);
        }
        for (int j = n - 2; j >= 0; j--) {
            dp[m-1][j] = Math.max(1, dp[m-1][j+1] - dungeon[m-1][j]);
        }

        for (int i = m - 2; i >= 0; i--) {
            for (int j = n - 2; j >= 0; j--) {
                int minHealthOnExit = Math.min(dp[i+1][j], dp[i][j+1]);
                dp[i][j] = Math.max(1, minHealthOnExit - dungeon[i][j]);
            }
        }

        return dp[0][0];
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(m \cdot n)$
    * We fill each cell of the dp array once.

- **Space complexity**: $O(m \cdot n)$
    * We use a 2D array dp of the same dimensions as the dungeon.

### Conclusion

This dynamic programming solution efficiently calculates the minimum initial health required for the knight to rescue the princess. By starting from the bottom-right corner and working backward, we ensure that the knight has enough health to survive each step of the way.