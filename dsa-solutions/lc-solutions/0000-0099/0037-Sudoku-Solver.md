---
id: sudoku-solver
title: Sudoku Solver
sidebar_label: 0037-ValidSudoku
tags:
  - Array
  - Hash Table
  - Matrix
  - Backtracking
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Sudoku Solver](https://leetcode.com/problems/sudoku-solver/description/) | [Sudoku Solver Solution on LeetCode](https://leetcode.com/problems/sudoku-solver/solutions/) |  [Debangi Ghosh](https://leetcode.com/u/debangi_29/) |

## Problem Description

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

1. Each of the digits 1-9 must occur exactly once in each row.
2. Each of the digits 1-9 must occur exactly once in each column.
3. Each of the digits 1-9 must occur exactly once in each of the 9 $3 \times 3$ sub-boxes of the grid.

The '.' character indicates empty cells.

 

### Examples

#### Example 1:

**Input**: board = 
```
[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
```

**Output**: 
```
[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
```

**Explanation**: The input board is shown above and the only valid solution is shown below:


### Constraints

- board.length == 9
- board[i].length == 9
- board[i][j] is a digit 1-9 or '.'.
- It is guaranteed that the input board has only one solution.

### Approach

👉 Iterate Through Each Cell: The algorithm iterates through each cell of the Sudoku board

👉 Empty Cell Check: If the current cell is empty (contains ‘.’), the algorithm proceeds to try different numbers (from ‘1’ to ‘9’) in that cell

👉 Number Placement: For each number, the algorithm checks if placing that number in the current cell is valid according to the Sudoku rules (no repetition in the same row, column, or $3 \times 3$ sub-box).

👉 Recursive Exploration: If placing a number is valid, the algorithm sets that number in the cell and recursively explores the next empty cell.

👉 Backtracking: If the recursive exploration leads to an invalid solution, the algorithm backtracks by undoing the choice (resetting the cell to ‘.’) and trying the next number.

👉 Solution Check: The algorithm continues exploring possibilities until a valid solution is found, or it exhaustively searches all possibilities.

### Solution Code

#### Python

```
class Solution:
  def solveSudoku(self, board: List[List[str]]) -> None:
    def isValid(row: int, col: int, c: str) -> bool:
      for i in range(9):
        if board[i][col] == c or \
           board[row][i] == c or \
           board[3 * (row // 3) + i // 3][3 * (col // 3) + i % 3] == c:
          return False
      return True

    def solve(s: int) -> bool:
      if s == 81:
        return True

      i = s // 9
      j = s % 9

      if board[i][j] != '.':
        return solve(s + 1)

      for c in string.digits[1:]:
        if isValid(i, j, c):
          board[i][j] = c
          if solve(s + 1):
            return True
          board[i][j] = '.'

      return False

    solve(0)

```

#### Java

```
class Solution {
  public void solveSudoku(char[][] board) {
    dfs(board, 0);
  }

  private boolean dfs(char[][] board, int s) {
    if (s == 81)
      return true;

    final int i = s / 9;
    final int j = s % 9;

    if (board[i][j] != '.')
      return dfs(board, s + 1);

    for (char c = '1'; c <= '9'; ++c)
      if (isValid(board, i, j, c)) {
        board[i][j] = c;
        if (dfs(board, s + 1))
          return true;
        board[i][j] = '.';
      }

    return false;
  }

  private boolean isValid(char[][] board, int row, int col, char c) {
    for (int i = 0; i < 9; ++i)
      if (board[i][col] == c || board[row][i] == c ||
          board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c)
        return false;
    return true;
  }
}
```

#### C++

```
class Solution {
 public:
  void solveSudoku(vector<vector<char>>& board) {
    solve(board, 0);
  }

 private:
  bool solve(vector<vector<char>>& board, int s) {
    if (s == 81)
      return true;

    const int i = s / 9;
    const int j = s % 9;

    if (board[i][j] != '.')
      return solve(board, s + 1);

    for (char c = '1'; c <= '9'; ++c)
      if (isValid(board, i, j, c)) {
        board[i][j] = c;
        if (solve(board, s + 1))
          return true;
        board[i][j] = '.';
      }

    return false;
  }

  bool isValid(vector<vector<char>>& board, int row, int col, char c) {
    for (int i = 0; i < 9; ++i)
      if (board[i][col] == c || board[row][i] == c ||
          board[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] == c)
        return false;
    return true;
  }
};

```

### Conclusion

✅ Time Complexity:

✔ The solve method uses a backtracking approach to explore the solution space.

✔ In the worst case, the algorithm tries out all possibilities for each empty cell until a valid solution is found or all possibilities are exhausted.

✔ The time complexity of the backtracking algorithm is typically exponential, but in practice, it tends to be much less than the worst case.

✔ The algorithm explores 9 possibilities for each of the 81 cells, resulting in a time complexity of $O(9^m)$, where m represents the number of empty cells.

✅ Space Complexity:

✔ The algorithm uses a recursive approach to explore the solution space.

✔ The recursive stack depth is proportional to the number of empty cells in the Sudoku board.

✔ The space complexity of the backtracking algorithm is typically linear, but in practice, it tends to be much less.

✔ The algorithm explores 9 possibilities for each of the 81 cells, resulting in a space complexity of $O(m)$, where m represents the number of empty cells.

✅ The algorithm solves the Sudoku puzzle by backtracking through the solution space, exploring possibilities until a valid solution is found or all possibilities are exhausted.

✅ The algorithm uses a recursive approach to explore the solution space, setting numbers in empty cells and checking if the placement is valid according to the Sudoku rules.

✅ The algorithm backtracks when an invalid solution is found, undoing the choice and trying the next number.