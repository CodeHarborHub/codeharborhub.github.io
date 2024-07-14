---
id: minimum-moves-to-convert-string
title: Minimum Moves to Convert String
sidebar_label: 2027 Minimum Moves to Convert String
tags:
  - String
  - Leetcode
---

## Problem Description

You are given a string `s` consisting of `n` characters which are either 'X' or 'O'.

A move is defined as selecting three consecutive characters of `s` and converting them to 'O'. Note that if a move is applied to the character 'O', it will stay the same.

Return the minimum number of moves required so that all the characters of `s` are converted to 'O'.

### Examples

**Example 1**

```
Input: s = "XXX"
Output: 1
Explanation: XXX -> OOO
We select all the 3 characters and convert them in one move.
```

**Example 2**

```
Input: s = "XXOX"
Output: 2
Explanation: XXOX -> OOOX -> OOOO
We select the first 3 characters in the first move, and convert them to 'O'.
Then we select the last 3 characters and convert them so that the final string contains all 'O's.
```

**Example 3**

```
Input: s = "OOOO"
Output: 0
Explanation: There are no 'X's in s to convert.
```

### Constraints

- `3 <= s.length <= 1000`
- `Each character `s[i]` is either 'X' or 'O'.`

### Approach

To solve this problem, count the number of 'X' characters in the string `s`. Since each move converts three consecutive 'X' characters to 'O', the minimum number of moves required will be equal to the ceiling of the count of 'X's divided by 3 (`ceil(count_X / 3)`).

#### C++

```cpp
class Solution {
public:
    int minimumMoves(string s) {
        int countX = 0;
        for (char ch : s) {
            if (ch == 'X') {
                countX++;
            }
        }
        return ceil(countX / 3.0);
    }
};
```

