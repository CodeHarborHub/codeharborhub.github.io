---
id: maximum-safeness-factor-of-a-path
title: Maximum Safeness Factor of a Path
sidebar_label: Maximum Safeness Factor of a Path
tags:
  - Grid
  - Pathfinding
  - BFS
  - Dijkstra
description: "This is a solution to the Maximum Safeness Factor of a Path problem."
---

## Problem Description

You are given a 0-indexed 2D matrix `grid` of size `n x n`, where:

- `grid[r][c] = 1` represents a cell containing a thief.
- `grid[r][c] = 0` represents an empty cell.

You are initially positioned at cell `(0, 0)`. In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

The safeness factor of a path on the grid is defined as the minimum Manhattan distance from any cell in the path to any thief in the grid.

Return the maximum safeness factor of all paths leading to cell `(n - 1, n - 1)`.

An adjacent cell of cell `(r, c)` is one of the cells `(r, c + 1)`, `(r, c - 1)`, `(r + 1, c)`, and `(r - 1, c)` if it exists.

The Manhattan distance between two cells `(a, b)` and `(x, y)` is equal to `|a - x| + |b - y|`, where `|val|` denotes the absolute value of `val`.

### Examples

**Example 1:**

```
Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 0
Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
```

**Example 2:**

```
Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.
```

**Example 3:**

```
Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
- The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.
```

### Constraints

- The number of nodes in the grid is in the range `[1, 400]`.
- `grid[i][j]` is either 0 or 1.
- There is at least one thief in the grid.

### Approach

To solve this problem, we will first use a multi-source Breadth-First Search (BFS) to calculate the minimum distance from each cell to the nearest thief. Then, we will use a modified Dijkstra's algorithm to find the path from `(0, 0)` to `(n - 1, n - 1)` that maximizes the minimum safeness factor.

#### Code in Python

```python
import heapq
from collections import deque

class Solution:
    def maximumSafenessFactor(self, grid):
        n = len(grid)
        
        # Step 1: Calculate distance to nearest thief for each cell using multi-source BFS
        distance = [[float('inf')] * n for _ in range(n)]
        q = deque()
        
        # Initialize the BFS queue with all thieves' positions
        for r in range(n):
            for c in range(n):
                if grid[r][c] == 1:
                    q.append((r, c))
                    distance[r][c] = 0
        
        # Directions for moving up, down, left, and right
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        
        while q:
            r, c = q.popleft()
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n and distance[nr][nc] == float('inf'):
                    distance[nr][nc] = distance[r][c] + 1
                    q.append((nr, nc))
        
        # Step 2: Use modified Dijkstra's algorithm to find the path with the maximum safeness factor
        max_heap = [(-distance[0][0], 0, 0)]  # Max-heap (negative distance to simulate max-heap in python)
        visited = set()
        
        while max_heap:
            min_dist, r, c = heapq.heappop(max_heap)
            min_dist = -min_dist  # Convert back to positive
            
            if (r, c) == (n-1, n-1):
                return min_dist
            
            if (r, c) in visited:
                continue
            visited.add((r, c))
            
            for dr, dc in directions:
                nr, nc = r + dr, c + dc
                if 0 <= nr < n and 0 <= nc < n and (nr, nc) not in visited:
                    heapq.heappush(max_heap, (-min(distance[nr][nc], min_dist), nr, nc))
        
        return 0  # Fallback, though problem guarantees a path

# Example test cases
sol = Solution()
grid1 = [[1,0,0],[0,0,0],[0,0,1]]
print(sol.maximumSafenessFactor(grid1))  # Output: 0

grid2 = [[0,0,1],[0,0,0],[0,0,0]]
print(sol.maximumSafenessFactor(grid2))  # Output: 2

grid3 = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
print(sol.maximumSafenessFactor(grid3))  # Output: 2
```
```
