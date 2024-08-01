---
id: guess-number-higher-or-lower-II
title: Guess Number Higher or Lower II
sidebar_label: 0375-Guess Number Higher or Lower II
tags:
  - DP
  - Leet code
description: "Solution to leetocde 375"
---

## Problem Description

We are playing the Guessing Game. The game will work as follows:

I pick a number between 1 and n.
You guess a number.
If you guess the right number, you win the game.
If you guess the wrong number, then I will tell you whether the number I picked is higher or lower, and you will continue guessing.
Every time you guess a wrong number x, you will pay x dollars. If you run out of money, you lose the game.
Given a particular n, return the minimum amount of money you need to guarantee a win regardless of what number I pick.

## Examples:

**Example 1:**

```
Input: n = 10
Output: 16
Explanation: The winning strategy is as follows:
- The range is [1,10]. Guess 7.
    - If this is my number, your total is $0. Otherwise, you pay $7.
    - If my number is higher, the range is [8,10]. Guess 9.
        - If this is my number, your total is $7. Otherwise, you pay $9.
        - If my number is higher, it must be 10. Guess 10. Your total is $7 + $9 = $16.
        - If my number is lower, it must be 8. Guess 8. Your total is $7 + $9 = $16.
    - If my number is lower, the range is [1,6]. Guess 3.
        - If this is my number, your total is $7. Otherwise, you pay $3.
        - If my number is higher, the range is [4,6]. Guess 5.
            - If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $5.
            - If my number is higher, it must be 6. Guess 6. Your total is $7 + $3 + $5 = $15.
            - If my number is lower, it must be 4. Guess 4. Your total is $7 + $3 + $5 = $15.
        - If my number is lower, the range is [1,2]. Guess 1.
            - If this is my number, your total is $7 + $3 = $10. Otherwise, you pay $1.
            - If my number is higher, it must be 2. Guess 2. Your total is $7 + $3 + $1 = $11.
The worst case in all these scenarios is that you pay $16. Hence, you only need $16 to guarantee a win.
```

**Example 2:**

```
Input: n = 1
Output: 0
Explanation: There is only one possible number, so you can guess 1 and not have to pay anything.
```

**Example 3:**

```
Input: n = 2
Output: 1
Explanation: There are two possible numbers, 1 and 2.
- Guess 1.
    - If this is my number, your total is $0. Otherwise, you pay $1.
    - If my number is higher, it must be 2. Guess 2. Your total is $1.
The worst case is that you pay $1.
```

## Constraints:

- $1 <= n <= 200$

### Algorithm Explanation

1. **Dynamic Programming Table Setup**:

   - We create a 2D DP array `dp` where `dp[start][end]` represents the minimum amount of money required to guarantee a win if the number is between `start` and `end`.

2. **Base Case**:

   - If `start == end`, no money is needed because we have only one number to guess. So `dp[start][end] = 0`.

3. **Filling the DP Table**:

   - We fill the table for ranges starting from the largest range down to the smallest.
   - For each range `[start, end]`, we consider every possible guess `i` within that range.
   - The cost for a guess `i` is `i` plus the maximum of the costs of the two resulting subranges `[start, i-1]` and `[i+1, end]` (since we are guaranteed a win, we must consider the worst-case scenario).
   - We choose the guess that minimizes this maximum cost.

4. **Result**:
   - The result is stored in `dp[1][n]` which represents the minimum amount of money needed to guarantee a win when guessing a number between 1 and `n`.

### C++ Code

```cpp
class Solution {
public:
    int getMoneyAmount(int n) {
        vector<vector<int>> dp(n + 2, vector<int>(n + 2, 0));

        for (int start = n; start >= 1; --start) {
            for (int end = start + 1; end <= n; ++end) {
                int mini = INT_MAX;
                for (int i = start; i <= end; ++i) {
                    int leftRange = dp[start][i - 1];
                    int rightRange = dp[i + 1][end];
                    int cost = i + max(leftRange, rightRange);
                    mini = min(mini, cost);
                }
                dp[start][end] = mini;
            }
        }
        return dp[1][n];
    }
};
```

### Python Code

```python
class Solution:
    def getMoneyAmount(self, n: int) -> int:
        dp = [[0] * (n + 2) for _ in range(n + 2)]

        for start in range(n, 0, -1):
            for end in range(start + 1, n + 1):
                mini = float('inf')
                for i in range(start, end + 1):
                    leftRange = dp[start][i - 1]
                    rightRange = dp[i + 1][end]
                    cost = i + max(leftRange, rightRange)
                    mini = min(mini, cost)
                dp[start][end] = mini

        return dp[1][n]
```

### Java Code

```java
class Solution {
    public int getMoneyAmount(int n) {
        int[][] dp = new int[n + 2][n + 2];

        for (int start = n; start >= 1; start--) {
            for (int end = start + 1; end <= n; end++) {
                int mini = Integer.MAX_VALUE;
                for (int i = start; i <= end; i++) {
                    int leftRange = dp[start][i - 1];
                    int rightRange = dp[i + 1][end];
                    int cost = i + Math.max(leftRange, rightRange);
                    mini = Math.min(mini, cost);
                }
                dp[start][end] = mini;
            }
        }
        return dp[1][n];
    }
}
```

### JavaScript Code

```javascript
var getMoneyAmount = function (n) {
  const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

  for (let start = n; start >= 1; start--) {
    for (let end = start + 1; end <= n; end++) {
      let mini = Infinity;
      for (let i = start; i <= end; i++) {
        let leftRange = dp[start][i - 1];
        let rightRange = dp[i + 1][end];
        let cost = i + Math.max(leftRange, rightRange);
        mini = Math.min(mini, cost);
      }
      dp[start][end] = mini;
    }
  }
  return dp[1][n];
};
```
