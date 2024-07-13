---
id: check-if-word-can-be-placed-in-crossword
title: Check if Word Can Be Placed in Crossword
sidebar_label: 2018 Check if Word Can Be Placed in Crossword
tags:
  - Matrix
  - String Matching
  - LeetCode
description: "This is a solution to the Check if Word Can Be Placed in Crossword problem on LeetCode."
sidebar_position: 2018
---

## Problem Description

You are given an m x n matrix `board`, representing the current state of a crossword puzzle. The crossword contains lowercase English letters (from solved words), `' '` to represent any empty cells, and `'#'` to represent any blocked cells.

A word can be placed horizontally (left to right or right to left) or vertically (top to bottom or bottom to top) in the board if:

- It does not occupy a cell containing the character `'#'`.
- The cell each letter is placed in must either be `' '` (empty) or match the letter already on the board.
- There must not be any empty cells `' '` or other lowercase letters directly left or right of the word if the word was placed horizontally.
- There must not be any empty cells `' '` or other lowercase letters directly above or below the word if the word was placed vertically.

Given a string `word`, return `true` if `word` can be placed in `board`, or `false` otherwise.

### Examples

**Example 1:**

```
Input: board = [["#", " ", "#"], [" ", " ", "#"], ["#", "c", " "]], word = "abc"
Output: true
Explanation: The word "abc" can be placed as shown above (top to bottom).
```

**Example 2:**
```
Input: board = [[" ", "#", "a"], [" ", "#", "c"], [" ", "#", "a"]], word = "ac"
Output: false
Explanation: It is impossible to place the word because there will always be a space/letter above or below it.
```

**Example 3:**
```
Input: board = [["#", " ", "#"], [" ", " ", "#"], ["#", " ", "c"]], word = "ca"
Output: true
Explanation: The word "ca" can be placed as shown above (right to left).
```

### Constraints

- `m == board.length`
- `n == board[i].length`
- `1 <= m * n <= 2 * 10^5`
- `board[i][j] will be ' ', '#', or a lowercase English letter.`
- `1 <= word.length <= max(m, n)`
- `word will contain only lowercase English letters.`

### Approach

We will check all possible placements of the word on the board horizontally and vertically, both left-to-right/right-to-left and top-to-bottom/bottom-to-top. For each potential placement, ensure the word fits in the specified direction without any blocking characters `('#')` or conflicting letters. If any valid placement is found, return true; otherwise, return false.

#### C++

``` cpp
bool canPlaceWordHorizontally(const std::vector<std::vector<char>>& board, const std::string& word, int row, int col, bool reverse) {
    int n = board[0].size();
    int m = word.size();

    if (reverse) {
        if (col - m < -1) return false;
        if (col - m >= 0 && board[row][col - m] != '#') return false;
        if (col + 1 < n && board[row][col + 1] != '#') return false;
        for (int i = 0; i < m; ++i) {
            if (board[row][col - i] != ' ' && board[row][col - i] != word[i]) return false;
        }
    } else {
        if (col + m > n) return false;
        if (col + m < n && board[row][col + m] != '#') return false;
        if (col - 1 >= 0 && board[row][col - 1] != '#') return false;
        for (int i = 0; i < m; ++i) {
            if (board[row][col + i] != ' ' && board[row][col + i] != word[i]) return false;
        }
    }

    return true;
}

bool canPlaceWordVertically(const std::vector<std::vector<char>>& board, const std::string& word, int row, int col, bool reverse) {
    int m = board.size();
    int n = word.size();

    if (reverse) {
        if (row - n < -1) return false;
        if (row - n >= 0 && board[row - n][col] != '#') return false;
        if (row + 1 < m && board[row + 1][col] != '#') return false;
        for (int i = 0; i < n; ++i) {
            if (board[row - i][col] != ' ' && board[row - i][col] != word[i]) return false;
        }
    } else {
        if (row + n > m) return false;
        if (row + n < m && board[row + n][col] != '#') return false;
        if (row - 1 >= 0 && board[row - 1][col] != '#') return false;
        for (int i = 0; i < n; ++i) {
            if (board[row + i][col] != ' ' && board[row + i][col] != word[i]) return false;
        }
    }

    return true;
}

bool placeWordInCrossword(std::vector<std::vector<char>>& board, std::string word) {
    int m = board.size();
    int n = board[0].size();

    // Check horizontally
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (canPlaceWordHorizontally(board, word, i, j, false) || canPlaceWordHorizontally(board, word, i, j, true)) {
                return true;
            }
        }
    }

    // Check vertically
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (canPlaceWordVertically(board, word, i, j, false) || canPlaceWordVertically(board, word, i, j, true)) {
                return true;
            }
        }
    }

    return false;
}
```
