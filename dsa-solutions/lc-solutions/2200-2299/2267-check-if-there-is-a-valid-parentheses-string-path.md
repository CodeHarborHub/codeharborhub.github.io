---
id: check-if-there-is-a-valid-parenthesis-string-path
title: Check If there is a Valid Parenthesis String Path
sidebar_label: 2267-Check If there is a Valid Parenthesis String Path
tags:
  - Valid Parentheses Path
  - Brute Force
  - Optimized
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Valid Parentheses Path problem on LeetCode."
sidebar_position: 2
---

In this tutorial, we will solve the Valid Parentheses Path problem using two different approaches: brute force and optimized. We will provide the implementation of the solution in C++, Java, and Python.

## Problem Description

Given an m x n matrix of parentheses grid, a valid parentheses string path in the grid is a path satisfying all of the following conditions:

- The path starts from the upper left cell (0, 0).
- The path ends at the bottom-right cell (m - 1, n - 1).
- The path only ever moves down or right.
- The resulting parentheses string formed by the path is valid.

Return true if there exists a valid parentheses string path in the grid. Otherwise, return false.

### Examples

**Example 1:**

```
Input: grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
Output: true
Explanation: The above diagram shows two possible paths that form valid parentheses strings.
The first path shown results in the valid parentheses string "()(())".
The second path shown results in the valid parentheses string "((()))".
Note that there may be other valid parentheses string paths.
```

**Example 2:**

```
Input: grid = [[")",")"],["(","("]]
Output: false
Explanation: The two possible paths form the parentheses strings "))(" and ")((". Since neither of them are valid parentheses strings, we return false.

```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `grid[i][j]` is either '(' or ')'.

---

## Solution for Valid Parentheses Path Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized approach. The brute force approach directly explores all possible paths, while the optimized approach uses dynamic programming to efficiently check valid paths.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1: Brute Force (Naive)

The brute force approach recursively explores all possible paths from the top-left to the bottom-right cell, ensuring the parentheses string remains valid.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    bool isValidPath(vector<vector<char>>& grid, int i, int j, int balance) {
        if (i >= grid.size() || j >= grid[0].size() || balance < 0) return false;
        balance += (grid[i][j] == '(') ? 1 : -1;
        if (i == grid.size() - 1 && j == grid[0].size() - 1) return balance == 0;
        return isValidPath(grid, i + 1, j, balance) || isValidPath(grid, i, j + 1, balance);
    }
    
    bool hasValidPath(vector<vector<char>>& grid) {
        return isValidPath(grid, 0, 0, 0);
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public boolean isValidPath(char[][] grid, int i, int j, int balance) {
        if (i >= grid.length || j >= grid[0].length || balance < 0) return false;
        balance += (grid[i][j] == '(') ? 1 : -1;
        if (i == grid.length - 1 && j == grid[0].length - 1) return balance == 0;
        return isValidPath(grid, i + 1, j, balance) || isValidPath(grid, i, j + 1, balance);
    }
    
    public boolean hasValidPath(char[][] grid) {
        return isValidPath(grid, 0, 0, 0);
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def isValidPath(self, grid: List[List[str]], i: int, j: int, balance: int) -> bool:
        if i >= len(grid) or j >= len(grid[0]) or balance < 0:
            return False
        balance += 1 if grid[i][j] == '(' else -1
        if i == len(grid) - 1 and j == len(grid[0]) - 1:
            return balance == 0
        return self.isValidPath(grid, i + 1, j, balance) or self.isValidPath(grid, i, j + 1, balance)
    
    def hasValidPath(self, grid: List[List[str]]) -> bool:
        return self.isValidPath(grid, 0, 0, 0)
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: Exponential due to exploring all paths.
- Space Complexity: Exponential due to recursive call stack.
- The brute force approach is inefficient for larger grids.

</tabItem>
<tabItem value="Optimized" label="Optimized">

### Approach 2: Optimized Approach

The optimized approach uses dynamic programming to track valid paths with different balances at each cell. This significantly reduces redundant calculations.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    bool hasValidPath(vector<vector<char>>& grid) {
        int m = grid.size(), n = grid[0].size();
        if (grid[0][0] == ')') return false;
        vector<vector<vector<bool>>> dp(m, vector<vector<bool>>(n, vector<bool>(m + n, false)));
        dp[0][0][1] = true;
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                for (int k = 0; k <= m + n; ++k) {
                    if (dp[i][j][k]) {
                        if (i + 1 < m) {
                            int new_balance = k + (grid[i + 1][j] == '(' ? 1 : -1);
                            if (new_balance >= 0 && new_balance <= m + n) {
                                dp[i + 1][j][new_balance] = true;
                            }
                        }
                        if (j + 1 < n) {
                            int new_balance = k + (grid[i][j + 1] == '(' ? 1 : -1);
                            if (new_balance >= 0 && new_balance <= m + n) {
                                dp[i][j + 1][new_balance] = true;
                            }
                        }
                    }
                }
            }
        }
        
        return dp[m - 1][n - 1][0];
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public boolean hasValidPath(char[][] grid) {
        int m = grid.length, n = grid[0].length;
        if (grid[0][0] == ')') return false;
        boolean[][][] dp = new boolean[m][n][m + n];
        dp[0][0][1] = true;
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                for (int k = 0; k <= m + n; ++k) {
                    if (dp[i][j][k]) {
                        if (i + 1 < m) {
                            int new_balance = k + (grid[i + 1][j] == '(' ? 1 : -1);
                            if (new_balance >= 0 && new_balance <= m + n) {
                                dp[i + 1][j][new_balance] = true;
                            }
                        }
                        if (j + 1 < n) {
                            int new_balance = k + (grid[i][j + 1] == '(' ? 1 : -1);
                            if (new_balance >= 0 && new_balance <= m + n) {
                                dp[i][j + 1][new_balance] = true;
                            }
                        }
                    }
                }
            }
        }
        
        return dp[m - 1][n - 1][0];
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def hasValidPath(self, grid: List[List[str]]) -> bool:
        m, n = len(grid), len(grid[0])
        if grid[0][0] == ')':
            return False
        dp = [[[False] * (m + n) for _ in range(n)] for _ in range(m)]
        dp[0][0][1] = True
        
        for i in range(m):
            for j in range(n):
                for k in range(m + n):
                    if dp[i][j][k]:
                        if i + 1 < m:
                            new_balance = k + (1 if grid[i + 1][j] == '(' else -1)
                            if 0 <= new_balance <= m + n:
                                dp[i + 1][j][new_balance] = True
                        if j + 1 < n:
                            new_balance = k + (1 if grid[i][j + 1] == '(' else -1)
                            if 0 <= new_balance <= m + n:
                                dp[i][j + 1][new_balance] = True
        
        return dp[m - 1][n - 1][0]
```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O( (m + n))$
- Space Complexity: $O( (m + n))$
- Where `m` is the number of rows and `n` is the number of columns.
- The optimized approach efficiently tracks valid paths using dynamic programming.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>