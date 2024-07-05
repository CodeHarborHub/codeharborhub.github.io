---
id: where-will-the-ball-fall
title: Where Will the Ball Fall
sidebar_label: 1706. Where Will the Ball Fall
tags: [Array, Simulation, C++, Python, Java]
description: "This is a solution to the Where Will the Ball Fall problem on LeetCode."
---

## Problem Description

You have a 2-D grid of size m x n representing a box, and you have n balls. The box is open on the top and bottom sides.

Each cell in the box has a diagonal board spanning two corners of the cell that can redirect a ball to the right or to the left.

- A board that redirects the ball to the right spans the top-left corner to the bottom-right corner and is represented in the grid as `1`.
- A board that redirects the ball to the left spans the top-right corner to the bottom-left corner and is represented in the grid as `-1`.
- We drop one ball at the top of each column of the box. Each ball can get stuck in the box or fall out of the bottom. A ball gets stuck if it hits a `"V"` shaped pattern between two boards or if a board redirects the ball into either wall of the box.

Return an array `answer` of size n where `answer[i]` is the column that the ball falls out of at the bottom after dropping the ball from the ith column at the top, or `-1` if the ball gets stuck in the box.

### Examples

**Example 1:**

```
Input: grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]
Output: [1,-1,-1,-1,-1]
Explanation: This example is shown in the photo.
Ball b0 is dropped at column 0 and falls out of the box at column 1.
Ball b1 is dropped at column 1 and will get stuck in the box between column 2 and 3 and row 1.
Ball b2 is dropped at column 2 and will get stuck on the box between column 2 and 3 and row 0.
Ball b3 is dropped at column 3 and will get stuck on the box between column 2 and 3 and row 0.
Ball b4 is dropped at column 4 and will get stuck on the box between column 2 and 3 and row 1.

```

**Example 2:**

```
Input: grid = [[-1]]
Output: [-1]
Explanation: The ball gets stuck against the left wall.

```
**Example 3:**
```
Input: grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]
Output: [0,1,2,3,4,-1]

```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`

## Solution for 1706. Where Will the Ball Fall


### Approach 

We drop the ball at `grid[0][i]`
and track ball position i1, which initlized as i.

An observation is that,
if the ball wants to move from `i1` to `i2`,
we must have the board direction `grid[j][i1] == grid[j][i2]` 

### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```python
           def findBall(self, grid):
        m, n = len(grid), len(grid[0])

        def test(i):
            for j in xrange(m):
                i2 = i + grid[j][i]
                if i2 < 0 or i2 >= n or grid[j][i2] != grid[j][i]:
                    return -1
                i = i2
            return i
        return map(test, range(n))
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```java
          public int[] findBall(int[][] grid) {
        int m = grid.length, n = grid[0].length, res[] = new int[n];
        for (int i = 0; i < n; ++i) {
            int i1 = i, i2;
            for (int j = 0; j < m; ++j) {
                i2 = i1 + grid[j][i1];
                if (i2 < 0 || i2 >= n || grid[j][i2] != grid[j][i1]) {
                    i1 = -1;
                    break;
                }
                i1 = i2;
            }
            res[i] = i1;
        }
        return res;
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@agarwalhimanshugaya"/>
   ```cpp
          vector<int> findBall(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        vector<int> res;
        for (int i = 0; i < n; ++i) {
            int i1 = i, i2;
            for (int j = 0; j < m; ++j) {
                i2 = i1 + grid[j][i1];
                if (i2 < 0 || i2 >= n || grid[j][i2] != grid[j][i1]) {
                    i1 = -1;
                    break;
                }
                i1 = i2;
            }
            res.push_back(i1);
        }
        return res;
    }
    ```
</TabItem>
</Tabs>

### Complexity Analysis

- Time Complexity: $ O(N*M) $
- Space Complexity: $ O(N)$

## References

- **LeetCode Problem**: [Where Will the Ball Fall](https://leetcode.com/problems/where-will-the-ball-fall/description/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/where-will-the-ball-fall/solutions/)
