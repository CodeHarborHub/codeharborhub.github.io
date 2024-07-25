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
| [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/description/) | [Valid Sudoku Solution on LeetCode](https://leetcode.com/problems/valid-sudoku/description/) |  [Abhishikta Ray](https://leetcode.com/u/Abhishikta03/) |

## Problem Description

Determine if a $9 \times 9$ Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

- Each row must contain the digits 1-9 without repetition.
- Each column must contain the digits 1-9 without repetition.
- Each of the nine  $3 \times 3$ sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

### Examples

#### Example 1:

**Input**: board = 
```
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
```
**Output**: true
#### Example 2:

- **Input:** board = 
```
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
```
**Output:**  false

**Explanation**: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left $3 \times 3$ sub-box, it is invalid.


### Constraints

- board.length == 9
- board[i].length == 9
- board[i][j] is a digit 1-9 or '.'.

### Approach

✔ HashSet Initialization: The algorithm uses a HashSet (seen) to keep track of unique elements encountered during the traversal of the Sudoku board.

✔ Traversing the Board: The algorithm uses nested loops to iterate through each cell of the 9x9 Sudoku board.

✔ Checking Rows, Columns, and Sub-boxes
👉 For each non-empty cell (cell value not equal to ‘.’), the algorithm checks if the current digit is already present in the same row, column, or $3 \times 3$ sub-box using HashSet operations.

👉 Unique string representations are used to identify rows, columns, and sub-boxes. (don’t worry, will explain it 😊)

✔ Returning Validity:

👉 If all the checks pass for a given cell, the digit is added to the HashSet to mark it as seen.

👉 The traversal continues until all cells have been processed.

👉 If any violation is detected during the traversal (i.e., a digit is repeated in a row, column, or sub-box), the function returns false, indicating that the Sudoku board is not valid.

👉 If the traversal completes without encountering any violations, the function returns true. That’s mean Sudolu board is valid.

### Solution Code

#### Python

```
class Solution(object):
    def isValidSudoku(self, board):
        res = []
        for i in range(9):
            for j in range(9):
                element = board[i][j]
                if element != '.':
                    res += [(i, element), (element, j), (i // 3, j // 3, element)]
        return len(res) == len(set(res))

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
        unordered_set<char> rows[9];
        unordered_set<char> cols[9];
        unordered_set<char> boxes[9];

        for (int r = 0; r < 9; ++r) {
            for (int c = 0; c < 9; ++c) {
                if (board[r][c] == '.') {
                    continue;
                }

                char value = board[r][c];
                int boxIndex = (r / 3) * 3 + (c / 3);

                if (rows[r].count(value) || cols[c].count(value) || boxes[boxIndex].count(value)) {
                    return false;
                }

                rows[r].insert(value);
                cols[c].insert(value);
                boxes[boxIndex].insert(value);
            }
        }

        return true;        
    }
};
```

### Conclusion

The above solution efficiently finds if the sudoku configuration is valid or not in $O(1)$ time complexity.
