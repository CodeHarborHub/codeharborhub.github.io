---
id: last-day-where-you-can-still-cross
title: Last Day Where You Can Still Cross
sidebar_label: Last Day Where You Can Still Cross
tags: [Binary Matrix, BFS, Union Find, Binary Search, C++, Python, Java]
description: Find the last day where it is possible to walk from the top to the bottom of a binary matrix by only walking on land cells.
---

## Problem Statement

### Problem Description

There is a 1-based binary matrix where `0` represents land and `1` represents water. You are given integers `row` and `col` representing the number of rows and columns in the matrix, respectively.

Initially on day `0`, the entire matrix is land. However, each day a new cell becomes flooded with water. You are given a 1-based 2D array `cells`, where `cells[i] = [ri, ci]` represents that on the `i`th day, the cell on the `ri`th row and `ci`th column (1-based coordinates) will be covered with water (i.e., changed to `1`).

You want to find the last day that it is possible to walk from the top to the bottom by only walking on land cells. You can start from any cell in the top row and end at any cell in the bottom row. You can only travel in the four cardinal directions (left, right, up, and down).

Return the last day where it is possible to walk from the top to the bottom by only walking on land cells.

### Example

**Example 1:**
```
Input: row = 2, col = 2, cells = [[1,1],[2,1],[1,2],[2,2]]
Output: 2
```
**Explanation:** The above image depicts how the matrix changes each day starting from day 0.
The last day where it is possible to cross from top to bottom is on day 2.


### Constraints

- `2 <= row, col <= 2 \times 10^4`
- All the values of `cells` are unique.

## Solution

### Intuition

To solve this problem, we can use binary search combined with a BFS (Breadth-First Search) to determine the latest possible day where a valid path exists from the top to the bottom of the matrix. The key idea is to simulate the flooding process in reverse and check if a path exists using BFS.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: $O((row \times col) \cdot \log(row \times col))$, due to the binary search combined with BFS traversal.
- **Space Complexity**: $O(row \times col)$, for the matrix and auxiliary space used in BFS.

### Code

#### C++

```cpp
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

class Solution {
public:
    int latestDayToCross(int row, int col, vector<vector<int>>& cells) {
        vector<vector<int>> grid(row, vector<int>(col, 0));
        int left = 0, right = cells.size() - 1;
        
        auto canCross = [&](int day) -> bool {
            vector<vector<int>> tempGrid = grid;
            for (int i = 0; i <= day; ++i) {
                int r = cells[i][0] - 1, c = cells[i][1] - 1;
                tempGrid[r][c] = 1;
            }
            
            vector<vector<bool>> visited(row, vector<bool>(col, false));
            queue<pair<int, int>> q;
            
            for (int c = 0; c < col; ++c) {
                if (tempGrid[0][c] == 0) {
                    q.push({0, c});
                    visited[0][c] = true;
                }
            }
            
            while (!q.empty()) {
                auto [r, c] = q.front();
                q.pop();
                
                if (r == row - 1) return true;
                
                for (const auto& [dr, dc] : vector<pair<int, int>>{{1, 0}, {-1, 0}, {0, 1}, {0, -1}}) {
                    int nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < row && nc >= 0 && nc < col && !visited[nr][nc] && tempGrid[nr][nc] == 0) {
                        visited[nr][nc] = true;
                        q.push({nr, nc});
                    }
                }
            }
            return false;
        };
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (canCross(mid)) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return right;
    }
};
```
