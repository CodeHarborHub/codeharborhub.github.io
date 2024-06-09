---
id: valid-sudoku
title: Valid Sudoku
difficulty: Medium
sidebar_label: 0036-ValidSudoku
tags:
  - Array
  - Hash Table
  - Matrix
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/) | [Valid Sudoku Solution on LeetCode](https://leetcode.com/problems/valid-sudoku/solutions/) |  [Debangi Ghosh](https://leetcode.com/u/debangi_29/) |

## Problem Description

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

- Each row must contain the digits 1-9 without repetition.
- Each column must contain the digits 1-9 without repetition.
- Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

### Examples

#### Example 1:

**Input**: board = 
<br>
[["5","3",".",".","7",".",".",".","."]<br>
,["6",".",".","1","9","5",".",".","."]<br>
,[".","9","8",".",".",".",".","6","."]<br>
,["8",".",".",".","6",".",".",".","3"]<br>
,["4",".",".","8",".","3",".",".","1"]<br>
,["7",".",".",".","2",".",".",".","6"]<br>
,[".","6",".",".",".",".","2","8","."]<br>
,[".",".",".","4","1","9",".",".","5"]<br>
,[".",".",".",".","8",".",".","7","9"]]<br>

**Output**: true
#### Example 2:

- **Input:** board = 
<br>
[["8","3",".",".","7",".",".",".","."]<br>
,["6",".",".","1","9","5",".",".","."]<br>
,[".","9","8",".",".",".",".","6","."]<br>
,["8",".",".",".","6",".",".",".","3"]<br>
,["4",".",".","8",".","3",".",".","1"]<br>
,["7",".",".",".","2",".",".",".","6"]<br>
,[".","6",".",".",".",".","2","8","."]<br>
,[".",".",".","4","1","9",".",".","5"]<br>
,[".",".",".",".","8",".",".","7","9"]]<br>

**Output:**  false
<br>

**Explanation**: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


### Constraints

- board.length == 9
- board[i].length == 9
- board[i][j] is a digit 1-9 or '.'.

### Approach

✔ HashSet Initialization: The algorithm uses a HashSet (seen) to keep track of unique elements encountered during the traversal of the Sudoku board.

✔ Traversing the Board: The algorithm uses nested loops to iterate through each cell of the 9x9 Sudoku board.

✔ Checking Rows, Columns, and Sub-boxes
👉 For each non-empty cell (cell value not equal to ‘.’), the algorithm checks if the current digit is already present in the same row, column, or 3x3 sub-box using HashSet operations.

👉 Unique string representations are used to identify rows, columns, and sub-boxes. (don’t worry, will explain it 😊)

✔ Returning Validity:

👉 If all the checks pass for a given cell, the digit is added to the HashSet to mark it as seen.

👉 The traversal continues until all cells have been processed.

👉 If any violation is detected during the traversal (i.e., a digit is repeated in a row, column, or sub-box), the function returns false, indicating that the Sudoku board is not valid.

👉 If the traversal completes without encountering any violations, the function returns true. That’s mean Sudolu board is valid.

### Solution Code

#### Python

```
class Solution:
  def isValidSudoku(self, board: List[List[str]]) -> bool:
    seen = set()

    for i in range(9):
      for j in range(9):
        c = board[i][j]
        if c == '.':
          continue
        if c + '@row ' + str(i) in seen or \
           c + '@col ' + str(j) in seen or \
           c + '@box ' + str(i // 3) + str(j // 3) in seen:
          return False
        seen.add(c + '@row ' + str(i))
        seen.add(c + '@col ' + str(j))
        seen.add(c + '@box ' + str(i // 3) + str(j // 3))

    return True

```

#### Java

```
class Solution {
  public boolean isValidSudoku(char[][] board) {
    Set<String> seen = new HashSet<>();

    for (int i = 0; i < 9; ++i)
      for (int j = 0; j < 9; ++j) {
        if (board[i][j] == '.')
          continue;
        final char c = board[i][j];
        if (!seen.add(c + "@row" + i) || //
            !seen.add(c + "@col" + j) || //
            !seen.add(c + "@box" + i / 3 + j / 3))
          return false;
      }

    return true;
  }
}
```

#### C++

```
class Solution {
 public:
  bool isValidSudoku(vector<vector<char>>& board) {
    unordered_set<string> seen;

    for (int i = 0; i < 9; ++i)
      for (int j = 0; j < 9; ++j) {
        if (board[i][j] == '.')
          continue;
        const string c(1, board[i][j]);
        if (!seen.insert(c + "@row" + to_string(i)).second ||
            !seen.insert(c + "@col" + to_string(j)).second ||
            !seen.insert(c + "@box" + to_string(i / 3) + to_string(j / 3))
                 .second)
          return false;
      }

    return true;
  }
};
```

### Conclusion

The above solution efficiently finds if the sudoku configuration is valid or not in $O(1)$ time complexity.
