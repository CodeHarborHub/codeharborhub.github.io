---
id: surrounded-regions
title: Surrounded Regions
sidebar_label: 0130-Surrounded Regions
tags:
  - Depth first search
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Surrounded Regions problem on LeetCode."
---

## Problem Description

You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.

 
### Examples

**Example 1:**

```
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:
![alt](https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg)
In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

```

**Example 2:**
```
Input: board = [["X"]]

Output: [["X"]]
```

### Constraints

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 200`
- `board[i][j] is 'X' or 'O'`

---

## Solution for Candy Distribution Problem
### Intuition

Imagine your grid is a big, cozy blanket filled with 'O's and 'X's. The 'O's are like cozy spots, and the 'X's are the spots you don't want to sit on. Your mission, should you choose to accept it, is to find all the cozy spots that are surrounded by 'X's on all four sides and turn them into 'X's too, so no one gets fooled by a fake cozy spot! But wait, if a cozy spot is on the edge of the blanket, it’s safe, because it’s connected to the great beyond (or the edge, whatever works).

### Approach

Here’s how you tackle this:

1. **Edge Patrol**: First, you check all the cozy spots ('O's) on the edges of the blanket. If you find an 'O' on the edge, you mark it as part of the Safe Cozy Spot Coalition™️ by changing it temporarily to another character, say a '#'.
2. **DFS Adventure**: For each 'O' on the edge, embark on a Depth-First Search (DFS) to find all connected 'O's and mark them as safe too.
3. **Sweeping Change**: After marking all the safe 'O's with '#', go through the entire blanket. Turn all the remaining 'O's into 'X's because they are fake cozy spots. Then, turn all the '#' back into 'O's because they are genuinely safe.




#### Code in Different Languages

### C++
```c++
class Solution {
public:
    vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    void dfs(int row, int col, vector<vector<char>>& board, vector<vector<int>>& visited){
        int n = board.size();
        int m = board[0].size();
            
        board[row][col] = '#';
        visited[row][col] = 1;

        for (auto dir : directions) {
            int nrow = row + dir.first;
            int ncol = col + dir.second;

            if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m &&
                board[nrow][ncol] == 'O' && !visited[nrow][ncol]) {
                dfs(nrow, ncol, board, visited);
            }
        }
    }

    void solve(vector<vector<char>>& board) {
        int n = board.size();
        int m = board[0].size();

        vector<vector<int>> visited(n, vector<int>(m, 0));

        
        for(int row = 0; row < n; row++) {
            if(board[row][0] == 'O' && !visited[row][0]) {
                dfs(row, 0, board, visited);
            }
            if(board[row][m-1] == 'O' && !visited[row][m-1]) {
                dfs(row, m-1, board, visited);
            }
        }

        for(int col = 0; col < m; col++) {
            if(board[0][col] == 'O' && !visited[0][col]) {
                dfs(0, col, board, visited);
            }
            if(board[n-1][col] == 'O' && !visited[n-1][col]) {
                dfs(n-1, col, board, visited);
            }
        }

        
        for(int row = 0; row < n; row++) {
            for(int col = 0; col < m; col++) {
                if(board[row][col] == 'O'){
                    board[row][col] = 'X';
                }
                else if(board[row][col] == '#'){
                    board[row][col] = 'O';
                }
            }
        }
    }
};
```

### Pyhton 
```python
from collections import deque

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        
        o = "O"
        
        n = len(board) 
        m = len(board[0])

        Q = deque()
        
        for i in range(n):
            if board[i][0] == o:
                Q.append((i,0))
            if board[i][m-1] == o:
                Q.append((i, m-1))
                
        for j in range(m):
            if board[0][j] == o:
                Q.append((0,j))
            if board[n-1][j] == o:
                Q.append((n-1, j))
                
        def inBounds(i,j):
            return (0 <= i < n) and (0 <= j < m)
                
        while Q:
            i,j = Q.popleft()
            board[i][j] = "#"
            
            for ii, jj in [(i+1, j), (i-1, j), (i, j+1), (i, j-1)]:
                if not inBounds(ii, jj):
                    continue
                if board[ii][jj] != o:
                    continue
                Q.append((ii,jj))
                board[ii][jj] = '#'
            
        for i in range(n):
            for j in range(m):
                if board[i][j] == o:
                    board[i][j] = 'X'
                elif board[i][j] == '#':
                    board[i][j] = o
```



### Complexity

- **Time complexity**: O(n * m), where n is the number of rows and m is the number of columns. We might have to visit every cell.
- **Space complexity**: O(n * m) for the visited matrix, and the call stack in DFS might go as deep as O(n * m) in the worst case.