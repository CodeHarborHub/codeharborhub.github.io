---
id: unique-paths-iii
title: Unique Paths III
sidebar_label: Unique Paths III
tags: [Backtracking, DFS, Grid, C++, Python, Java]
description: Find the number of unique paths from the starting square to the ending square in a grid, walking over every non-obstacle square exactly once.
---

## Problem Statement

### Problem Description

You are given an `m x n` integer array `grid` where `grid[i][j]` could be:

- `1` representing the starting square. There is exactly one starting square.
- `2` representing the ending square. There is exactly one ending square.
- `0` representing empty squares we can walk over.
- `-1` representing obstacles that we cannot walk over.

Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

### Example

**Example 1:**
```
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
```
**Explanation:** We have the following two paths:

(0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
(0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)


**Example 2:**
```
Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
```
**Explanation:** We have the following four paths:

(0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
(0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
(0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
(0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)


### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 20`
- `1 <= m * n <= 20`
- `-1 <= grid[i][j] <= 2`
- There is exactly one starting cell and one ending cell.

## Solution

### Intuition

To solve this problem, we can use a backtracking approach with Depth-First Search (DFS). We will start from the starting square and try to explore all possible paths to the ending square while ensuring we visit every non-obstacle square exactly once. We will backtrack whenever we hit a dead end or revisit a square.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: $O(4^{m \times n})$, where $m \times n$ is the total number of cells. This is because, in the worst case, we might explore all possible paths.
- **Space Complexity**: $O(m \times n)$, for the recursion stack and the `visited` array.

### Code

#### C++

```cpp
class Solution {
public:
    int uniquePathsIII(vector<vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        int emptySquares = 1; // including the starting point
        int startX, startY;
        
        for (int i = 0; i < rows; ++i) {
            for (int j = 0; j < cols; ++j) {
                if (grid[i][j] == 0) {
                    ++emptySquares;
                } else if (grid[i][j] == 1) {
                    startX = i;
                    startY = j;
                }
            }
        }
        
        return dfs(grid, startX, startY, emptySquares);
    }
    
private:
    int dfs(vector<vector<int>>& grid, int x, int y, int emptySquares) {
        if (x < 0 || x >= grid.size() || y < 0 || y >= grid[0].size() || grid[x][y] == -1) {
            return 0;
        }
        if (grid[x][y] == 2) {
            return emptySquares == 0 ? 1 : 0;
        }
        
        grid[x][y] = -1;
        int paths = dfs(grid, x + 1, y, emptySquares - 1) +
                    dfs(grid, x - 1, y, emptySquares - 1) +
                    dfs(grid, x, y + 1, emptySquares - 1) +
                    dfs(grid, x, y - 1, emptySquares - 1);
        grid[x][y] = 0;
        
        return paths;
    }
};
```

#### Python
```python
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        empty_squares = 1  # including the starting point
        start_x, start_y = 0, 0
        
        for i in range(rows):
            for j in range(cols):
                if grid[i][j] == 0:
                    empty_squares += 1
                elif grid[i][j] == 1:
                    start_x, start_y = i, j
        
        def dfs(x, y, empty_squares):
            if x < 0 or x >= rows or y < 0 or y >= cols or grid[x][y] == -1:
                return 0
            if grid[x][y] == 2:
                return 1 if empty_squares == 0 else 0
            
            grid[x][y] = -1
            paths = (dfs(x + 1, y, empty_squares - 1) +
                     dfs(x - 1, y, empty_squares - 1) +
                     dfs(x, y + 1, empty_squares - 1) +
                     dfs(x, y - 1, empty_squares - 1))
            grid[x][y] = 0
            
            return paths
        
        return dfs(start_x, start_y, empty_squares)
```
#### Java
```java
class Solution {
    public int uniquePathsIII(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        int emptySquares = 1; // including the starting point
        int startX = 0, startY = 0;
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 0) {
                    emptySquares++;
                } else if (grid[i][j] == 1) {
                    startX = i;
                    startY = j;
                }
            }
        }
        
        return dfs(grid, startX, startY, emptySquares);
    }
    
    private int dfs(int[][] grid, int x, int y, int emptySquares) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] == -1) {
            return 0;
        }
        if (grid[x][y] == 2) {
            return emptySquares == 0 ? 1 : 0;
        }
        
        grid[x][y] = -1;
        int paths = dfs(grid, x + 1, y, emptySquares - 1) +
                    dfs(grid, x - 1, y, emptySquares - 1) +
                    dfs(grid, x, y + 1, emptySquares - 1) +
                    dfs(grid, x, y - 1, emptySquares - 1);
        grid[x][y] = 0;
        
        return paths;
    }
}
```
