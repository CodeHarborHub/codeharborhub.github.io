---
id: n-queens-ll
title: N Queens-2
difficulty: Hard
sidebar_label: 0052-N-queens-2
topics:
  - Array
  - Divide and Conquer
companies:
  - ""
description: |
  The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
---



## Problem Description

The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

### Examples

#### Example 1
- **Input:** n = 4
- **Output:** 2
- **Explanation:** TThere are two distinct solutions to the 4-queens puzzle as shown.


#### Example 2

- **Input:** n=1
- **Output:** 1

### Constraints

- `1 <= n <= 9`



### Approach to Solve the N-Queens Problem

#### Problem Overview

The N-Queens problem requires placing N queens on an N×N chessboard such that no two queens threaten each other. A queen can attack any piece that lies in the same row, column, or diagonal.

### Approach Explanation

#### Base Cases Handling

- **If `n == 1`**: Directly return `1` because there is only one way to place a queen on a 1x1 board.
- **If `n <= 3`**: Return `0` because for `n = 2` and `n = 3`, no valid placement of queens exists.

#### Initialization

- Initialize three boolean arrays (`col`, `dig`, `crdig`) to track columns and diagonals:
  - `col[i]`: Tracks whether column `i` is occupied by a queen.
  - `dig[j]`: Tracks whether diagonal \( j \) (from top-left to bottom-right) is occupied by a queen.
  - `crdig[k]`: Tracks whether diagonal \( k \) (from top-right to bottom-left) is occupied by a queen.
- These arrays efficiently check if a queen can be placed at a specific position on the board without conflicting with other queens.

#### Backtracking Function (`backTrack`)

- **Parameters**: `backTrack` takes `n` (board size) and `lvl` (current level/row being considered).
- **Base Case**: If `lvl == n`, all rows from `0` to `n-1` have queens placed successfully. Increment the `ans` counter (total number of valid solutions) and return.
- **Recursive Backtracking**:
  - Iterate through each column (`i`) of the current row (`lvl`).
  - Check if placing a queen at position `(lvl, i)` is valid:
    - Ensure `col[i]`, `dig[lvl + i]`, and `crdig[lvl - i + n - 1]` are all `false`.
    - If valid, mark these positions as occupied (`true`), recursively call `backTrack` for the next row (`lvl + 1`), and then backtrack by marking these positions as unoccupied (`false`).

#### Constraints Application

- The arrays `col`, `dig`, and `crdig` are crucial for quickly determining if a position is under attack by any previously placed queens, thereby minimizing unnecessary checks and improving efficiency.

#### Counting Solutions

- After all recursive calls from `backTrack` return, `ans` contains the total number of distinct solutions found.



### Complexity Analysis
#### Time Complexity
The time complexity of the algorithm is \( O(n^n) \).

#### Space Complexity
The space complexity of the algorithm is \( O(n) \).



### Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name=""/>

```cpp
class Solution {
public:
    int totalNQueens(int n) {
        if (n == 1)
            return 1;
        if (n <= 3)
            return 0;
        col = vector<bool> (n, false);
        dig = vector<bool> (2*n - 1, false);
        crdig = vector<bool> (2*n - 1, false);

        backTrack(n, 0);
        return ans;
    }
private:
    int ans;
    vector<bool> col;
    vector<bool> dig;
    vector<bool> crdig;

    void backTrack(int n, int lvl) {
        if (lvl == n) {
            ans++;
            return;
        }
        int toAdd = n - 1;
        for (int i = 0; i < n; i++) {
            if (!col[i] && !dig[lvl + i] && !crdig[lvl - i + toAdd]) {
                col[i] = dig[lvl + i] = crdig[lvl - i + toAdd] = true;
                backTrack(n, lvl + 1);
                col[i] = dig[lvl + i] = crdig[lvl - i + toAdd] = false;
            }
        }

    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name=""/>

```java
class Solution {
    public int totalNQueens(int n) {
        return this.helper(new boolean[n * 2], new boolean[n * 2], new boolean[n], 0, n);
    }

    private int helper(final boolean[] diag1, final boolean[] diag2, final boolean[] col, final int row, final int n) {
        if(row == n)
            return 1;

        int result = 0;

        for(int i = 0; i < n; ++i) {
            if(!diag1[row + i] && !diag2[n - row + i] && !col[i]) {
                diag1[row + i] = true;
                diag2[n - row + i] = true;
                col[i] = true;

                result += this.helper(diag1, diag2, col, row + 1, n);

                diag1[row + i] = false;
                diag2[n - row + i] = false;
                col[i] = false;
            }
        }

        return result;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name=""/>

```python
class Solution:
    def totalNQueens(self, n: int) -> int:
        rows = [0 for _ in range(n)]
        ldiags = [0 for _ in range(2 * n + 1)]
        rdiags = [0 for _ in range(2 * n + 1)]
        total = 0

        def backtrack(i, j_range=None):
            nonlocal rows
            nonlocal ldiags
            nonlocal rdiags
            nonlocal total

            for j in range(*j_range) if j_range else range(n):
                if not (
                    rows[j] or rdiags[(r := i + j)] or ldiags[(l := i - j + n - 1)]
                ):
                    if i + 1 == n:
                        total += 1
                    else:
                        rows[j] = 1
                        ldiags[l] = 1
                        rdiags[r] = 1
                        backtrack(i + 1)
                        rows[j] = 0
                        ldiags[l] = 0
                        rdiags[r] = 0

        backtrack(0, (0, n // 2))
        total *= 2
        if n % 2:
            backtrack(0, (n // 2, n // 2 + 1))

        return total
```
</TabItem>
</Tabs>



## References

- **LeetCode Problem**: [N - Queens-2](https://leetcode.com/problems/cherry-pickup/description/)

- **Solution Link**: [N- Queens-2](https://leetcode.com/problems/n-queens-ii/solutions/5205950/beats-100-c-backtracking/)
