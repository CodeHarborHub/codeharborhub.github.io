---
id: Minesweeper
title: Minesweeper
sidebar_label: Minesweeper 
tags: 
    - matrix
    - recursion
    - BFS
    - game
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Minesweeper](https://leetcode.com/problems/Minesweeper/description/) | [Minesweeper Solution on LeetCode](https://leetcode.com/problems/Minesweeper/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

You are given an m x n char matrix `board` representing a Minesweeper game board. The board consists of the following characters:
- 'M' representing an unrevealed mine,
- 'E' representing an unrevealed empty square,
- 'B' representing a revealed blank square with no adjacent mines,
- Digit ('1' to '8') representing how many mines are adjacent to this revealed square,
- 'X' representing a revealed mine.

You are also given an integer array `click` where `click = [clickr, clickc]` represents the position of the next click among all unrevealed squares ('M' or 'E').

Return the board after revealing this position according to specific rules until no more squares will be revealed.

### Examples
## Example 1
**Input:** `board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]`
**Output:** `[["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]`

## Example 2
**Input:** `board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2]`
**Output:** `[["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]`

## Constraints

- `m == board.length`
- `n == board[i].length`
- `1 <= m, n <= 50`
- `board[i][j]` is one of 'M', 'E', 'B', or a digit from '1' to '8'.
- `click.length == 2`
- `0 <= clickr < m`
- `0 <= clickc < n`
- `board[clickr][clickc]` is either 'M' or 'E'.

## Approach

The approach involves simulating the Minesweeper game board using either Depth-First Search (DFS) or Breadth-First Search (BFS):
1. If the clicked cell is 'M', change it to 'X' and stop (game over).
2. If the clicked cell is 'E' (empty), reveal it:
   - If it has no adjacent mines ('B'), recursively reveal all adjacent 'E' cells.
   - If it has adjacent mines, update it with the count of adjacent mines ('1' to '8').
3. Use BFS or DFS to reveal adjacent cells based on the revealed cell's condition.
4. Continue until no more cells can be revealed.

### Solution in Different Languages
## Solution in Python

```python
def updateBoard(board, click):
    m, n = len(board), len(board[0])
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1), (-1, -1), (-1, 1), (1, -1), (1, 1)]

    def count_adjacent_mines(row, col):
        count = 0
        for dr, dc in directions:
            nr, nc = row + dr, col + dc
            if 0 <= nr < m and 0 <= nc < n and board[nr][nc] == 'M':
                count += 1
        return count

    def dfs(row, col):
        if not (0 <= row < m and 0 <= col < n) or board[row][col] != 'E':
            return
        num_mines = count_adjacent_mines(row, col)
        if num_mines > 0:
            board[row][col] = str(num_mines)
        else:
            board[row][col] = 'B'
            for dr, dc in directions:
                dfs(row + dr, col + dc)

    click_r, click_c = click
    if board[click_r][click_c] == 'M':
        board[click_r][click_c] = 'X'
    else:
        dfs(click_r, click_c)
    return board
```

## Solution in Java

```java
class Solution {
    int[][] dirs = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
    
    public char[][] updateBoard(char[][] board, int[] click) {
        int m = board.length, n = board[0].length;
        int row = click[0], col = click[1];
        
        if (board[row][col] == 'M') {
            board[row][col] = 'X';
        } else {
            dfs(board, row, col);
        }
        
        return board;
    }
    
    private void dfs(char[][] board, int row, int col) {
        int m = board.length, n = board[0].length;
        if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] != 'E') return;
        
        int mines = countAdjacentMines(board, row, col);
        if (mines > 0) {
            board[row][col] = (char) (mines + '0');
        } else {
            board[row][col] = 'B';
            for (int[] dir : dirs) {
                dfs(board, row + dir[0], col + dir[1]);
            }
        }
    }
    
    private int countAdjacentMines(char[][] board, int row, int col) {
        int m = board.length, n = board[0].length;
        int count = 0;
        for (int[] dir : dirs) {
            int r = row + dir[0];
            int c = col + dir[1];
            if (r >= 0 && r < m && c >= 0 && c < n && board[r][c] == 'M') {
                count++;
            }
        }
        return count;
    }
}
```

## Solution in C++

```cpp
class Solution {
public:
    vector<vector<char>> updateBoard(vector<vector<char>>& board, vector<int>& click) {
        int m = board.size(), n = board[0].size();
        vector<vector<int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}, {-1, -1}, {-1, 1}, {1, -1}, {1, 1}};
        
        function<int(int, int)> countAdjacentMines = [&](int row, int col) {
            int count = 0;
            for (auto& dir : directions) {
                int nr = row + dir[0], nc = col + dir[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] == 'M') {
                    count++;
                }
            }
            return count;
        };
        
        function<void(int, int)> dfs = [&](int row, int col) {
            if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] != 'E') return;
            
            int numMines = countAdjacentMines(row, col);
            if (numMines > 0) {
                board[row][col] = '0' + numMines;
            } else {
                board[row][col] = 'B';
                for (auto& dir : directions) {
                    dfs(row + dir[0], col + dir[1]);
                }
            }
        };
        
        int click_r = click[0], click_c = click[1];
        if (board[click_r][click_c] == 'M') {
            board[click_r][click_c] = 'X';
        } else {
            dfs(click_r, click_c);
        }
        
        return board;
    }
};
```

## Solution in JavaScript

```javascript
var updateBoard = function(board, click) {
    const m = board.length, n = board[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
    
    function countAdjacentMines(row, col) {
        let count = 0;
        for (const [dr, dc] of directions) {
            const nr = row + dr, nc = col + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'M') {
                count++;
            }
        }
        return count;
    }
    
    function dfs(row, col) {
        if (row < 0 || row >= m || col < 0 || col >= n || board[row][col] !== 'E') return;
        
        const numMines = countAdjacentMines(row, col);
        if (numMines > 0) {
            board[row][col] = numMines.toString();
        } else {
            board[row][col] = 'B';
            for (const [dr, dc] of directions) {
                dfs(row + dr, col + dc);
            }
        }
    }
    
    const [click_r, click_c] = click;
    if (board[click_r][click_c] === 'M') {
        board[click_r][click_c] = 'X';
    } else {
        dfs(click_r, click_c);
    }
    
    return board;
};
```

## Step-by-Step Algorithm

1. **Initialize Directions**: Define the eight possible directions (including diagonals) for exploring adjacent cells.
2. **Count Adjacent Mines**: Implement a function to count adjacent mines for a given cell.
3. **DFS or BFS**: Use DFS (Depth-

First Search) or BFS (Breadth-First Search) to reveal cells based on the rules of the Minesweeper game.
4. **Edge Cases**: Handle edge cases like clicking on a mine ('M') which ends the game, or revealing adjacent cells recursively until no more can be revealed.

## Conclusion

This solution effectively simulates the Minesweeper game mechanics using recursion (DFS) or iteration (BFS) to reveal cells and update the game board accordingly. By following the rules provided and implementing efficient traversal methods, the solution ensures that all valid scenarios are covered, including game over conditions and successful completion of the game board reveal.
