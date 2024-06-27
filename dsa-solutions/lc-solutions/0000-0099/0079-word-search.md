---
id: word-search
title: Word Search(LeetCode)
sidebar_label: 0079-Word Search
tags:
  - Array
  - String
  - Backtracking
  - Matrix
description: Given an m x n grid of characters board and a string word, return true if word exists in the grid.
---

## Problem Statement

Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/dc23f6be-e216-4ad1-89bc-178cf3039262)

```plaintext
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
```

**Example 2:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/c3905a94-2a40-4dee-a4bf-42b77ba2b91a)

```plaintext
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
```

**Example 3:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/c56f9ea3-8247-484b-943a-0c38ea32465c)

```plaintext
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
```

### Constraints

- `m == board.length`
- `n = board[i].length`
- `1 <= m, n <= 6`
- `1 <= word.length <= 15`
- `board` and `word` consists of only lowercase and uppercase English letters.

## Solution

### Approach 

#### Algorithm

1. Initialization:
* Convert the input word to a character array `w`.
* Iterate through each cell in the board using nested loops.
2. Recursive Search:
* For each cell in the board, call the recursive function `exist`.
* The recursive function `exist` takes parameters: the board, current cell coordinates `(y, x)`, the word array, and the current index `i` in the word array.
* Base cases:
  * If `i` equals the length of the word, return `true` (all characters are matched).
  * If the current cell `(y, x)` is out of bounds or does not match the current character in the word array, return `false`.
* Mark the current cell as visited by toggling the 8th bit using `board[y][x] ^= 256`.
* Recursively check all four possible directions (right, left, down, up) from the current cell.
* After the recursive calls, unmark the current cell by toggling the 8th bit again using `board[y][x] ^= 256`.
* Return `true` if any of the recursive calls return `true`, indicating that the word exists in the board starting from the current cell.
3. Return Result:
* Return `true` if the word is found starting from any cell, otherwise return `false`.

#### Implementation

```Java
public boolean exist(char[][] board, String word) {
    char[] w = word.toCharArray();
    for (int y=0; y<board.length; y++) {
    	for (int x=0; x<board[y].length; x++) {
    		if (exist(board, y, x, w, 0)) return true;
    	}
    }
    return false;
}

private boolean exist(char[][] board, int y, int x, char[] word, int i) {
	if (i == word.length) return true;
	if (y<0 || x<0 || y == board.length || x == board[y].length) return false;
	if (board[y][x] != word[i]) return false;
	board[y][x] ^= 256;
	boolean exist = exist(board, y, x+1, word, i+1)
		|| exist(board, y, x-1, word, i+1)
		|| exist(board, y+1, x, word, i+1)
		|| exist(board, y-1, x, word, i+1);
	board[y][x] ^= 256;
	return exist;
}
```

### Complexity Analysis

- **Time complexity**: $O(N.3^L)$ 
  * N is the number of cells in the board (i.e., board.length * board[0].length).
  * L is the length of the word.
  * Each cell can be a starting point, and from each cell, we explore up to 3 directions (since we cannot revisit the previous cell, reducing from 4 to 3).

- **Space complexity**: O(L)
  * The recursion stack can go up to a depth of L, which is the length of the word.
  * No additional data structures are used that grow with input size (in-place modification of the board is used).

### Conclusion

This recursive solution effectively finds the word in the board by exploring all possible paths and backtracking when a path does not lead to the solution. By marking cells with a bitmask, it avoids using additional memory for visited states, making the algorithm space-efficient. The time complexity reflects the worst-case scenario of exploring all possible paths, while the space complexity is primarily driven by the depth of the recursion stack. This approach is both time and space-efficient, making it suitable for large boards and words.
