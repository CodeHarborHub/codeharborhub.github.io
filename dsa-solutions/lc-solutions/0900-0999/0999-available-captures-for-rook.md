---
id: Available-Captures-for-Rook
title: Available Captures for Rook
sidebar_label: 0999 - Available Captures for Rook
tags:
  - easy
  - array
  - matrix
---


## Problem Description

You are given an 8 x 8 matrix representing a chessboard. There is exactly one white rook represented by 'R', some number of white bishops 'B', and some number of black pawns 'p'. Empty squares are represented by '.'.

A rook can move any number of squares horizontally or vertically (up, down, left, right) until it reaches another piece or the edge of the board. A rook is attacking a pawn if it can move to the pawn's square in one move.

Note: A rook cannot move through other pieces, such as bishops or pawns. This means a rook cannot attack a pawn if there is another piece blocking the path.

Return the number of pawns the white rook is attacking.

## Examples

**Example 1:**

```
Input:
board = [[".",".",".",".",".",".",".","."],
         [".",".",".","p",".",".",".","."],
         [".",".",".","R",".",".",".","p"],
         [".",".",".",".",".",".",".","."],
         [".",".",".",".",".",".",".","."],
         [".",".",".","p",".",".",".","."],
         [".",".",".",".",".",".",".","."],
         [".",".",".",".",".",".",".","."]]

Output: 3
```

**Example 2:**

```
Input:
board = [[".",".",".",".",".",".","."],
         [".","p","p","p","p","p",".","."],
         [".","p","p","B","p","p",".","."],
         [".","p","B","R","B","p",".","."],
         [".","p","p","B","p","p",".","."],
         [".","p","p","p","p","p",".","."],
         [".",".",".",".",".",".",".","."],
         [".",".",".",".",".",".",".","."]]

Output: 0
```

**Example 3:**

```
Input:
board = [[".",".",".",".",".",".",".","."],
         [".",".",".","p",".",".",".","."],
         [".",".",".","p",".",".",".","."],
         ["p","p",".","R",".","p","B","."],
         [".",".",".",".",".",".",".","."],
         [".",".",".","B",".",".",".","."],
         [".",".",".","p",".",".",".","."],
         [".",".",".",".",".",".",".","."]]

Output: 3
```

## Constraints

- board.length == 8
- board[i].length == 8
- board[i][j] is either 'R', '.', 'B', or 'p'
- There is exactly one cell with board[i][j] == 'R'

## Solution

### Python

```python
def numRookCaptures(board):
    def capture(board, x, y, dx, dy):
        while 0 <= x < 8 and 0 <= y < 8:
            if board[x][y] == 'B':
                return 0
            if board[x][y] == 'p':
                return 1
            x, y = x + dx, y + dy
        return 0

    for i in range(8):
        for j in range(8):
            if board[i][j] == 'R':
                return (capture(board, i, j, -1, 0) + capture(board, i, j, 1, 0) +
                        capture(board, i, j, 0, -1) + capture(board, i, j, 0, 1))

# Example usage:
board = [[".",".",".",".",".",".",".","."],
         [".",".",".","p",".",".",".","."],
         [".",".",".","R",".",".",".","p"],
         [".",".",".",".",".",".",".","."],
         [".",".",".",".",".",".",".","."],
         [".",".",".","p",".",".",".","."],
         [".",".",".",".",".",".",".","."],
         [".",".",".",".",".",".",".","."]]
print(numRookCaptures(board))  # Output: 3
```

### C++

```cpp
class Solution {
public:
    int numRookCaptures(vector<vector<char>>& board) {
        int x, y;
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (board[i][j] == 'R') {
                    x = i;
                    y = j;
                    break;
                }
            }
        }
        return capture(board, x, y, -1, 0) + capture(board, x, y, 1, 0) +
               capture(board, x, y, 0, -1) + capture(board, x, y, 0, 1);
    }

    int capture(vector<vector<char>>& board, int x, int y, int dx, int dy) {
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            if (board[x][y] == 'B') return 0;
            if (board[x][y] == 'p') return 1;
            x += dx;
            y += dy;
        }
        return 0;
    }
};
```

### Java

```java
class Solution {
    public int numRookCaptures(char[][] board) {
        int x = -1, y = -1;
        for (int i = 0; i < 8; i++) {
            for (int j = 0; j < 8; j++) {
                if (board[i][j] == 'R') {
                    x = i;
                    y = j;
                    break;
                }
            }
        }
        return capture(board, x, y, -1, 0) + capture(board, x, y, 1, 0) +
               capture(board, x, y, 0, -1) + capture(board, x, y, 0, 1);
    }

    private int capture(char[][] board, int x, int y, int dx, int dy) {
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            if (board[x][y] == 'B') return 0;
            if (board[x][y] == 'p') return 1;
            x += dx;
            y += dy;
        }
        return 0;
    }
}
```

### JavaScript

```javascript
var numRookCaptures = function (board) {
  let x, y;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        x = i;
        y = j;
        break;
      }
    }
  }

  return (
    capture(board, x, y, -1, 0) +
    capture(board, x, y, 1, 0) +
    capture(board, x, y, 0, -1) +
    capture(board, x, y, 0, 1)
  );
};

function capture(board, x, y, dx, dy) {
  while (x >= 0 && x < 8 && y >= 0 && y < 8) {
    if (board[x][y] === "B") return 0;
    if (board[x][y] === "p") return 1;
    x += dx;
    y += dy;
  }
  return 0;
}
```
