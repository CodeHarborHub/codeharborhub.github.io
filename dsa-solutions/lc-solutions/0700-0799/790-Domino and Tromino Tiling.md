---
id: domino-and-tromino-tiling
title: Domino and Tromino Tiling
sidebar_label: Domino and Tromino Tiling
tags: [Dynamic Programming, Combinatorics, Math, C++, Python, Java]
description: Solve the problem of finding the number of ways to tile a 2 x n board using 2 x 1 dominos and tromino shapes.
---

## Problem Statement

### Problem Description

You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.

Given an integer `n`, return the number of ways to tile a 2 x `n` board. Since the answer may be very large, return it modulo $10^9 + 7$.

In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

### Examples

**Example 1:**
```
Input: n = 3
Output: 5
```
**Explanation:** The five different ways are shown above.


### Constraints

- $1 \leq n \leq 1000$

## Solution

### Intuition

To solve this problem, we can use dynamic programming. Let's define `dp[i]` as the number of ways to tile a 2 x `i` board. The recurrence relation can be derived based on the ways we can place the last tile(s) on the board.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: The solution involves a single loop through the board length `n`, making the time complexity $O(n)$.
- **Space Complexity**: The space complexity is $O(n)$ to store the dynamic programming array.

### Code

#### C++

```cpp
class Solution {
public:
    int numTilings(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        const int MOD = 1e9 + 7;
        vector<long> dp(n + 1);
        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; ++i) {
            dp[i] = (dp[i - 1] + dp[i - 2] + 2 * dp[i - 3]) % MOD;
        }
        return dp[n];
    }
};
```
#### Java

```java
class Solution {
    public int numTilings(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        int MOD = 1000000007;
        long[] dp = new long[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; ++i) {
            dp[i] = (dp[i - 1] + dp[i - 2] + 2 * dp[i - 3]) % MOD;
        }
        return (int) dp[n];
    }
}
```
#### Python
```python
class Solution:
    def numTilings(self, n: int) -> int:
        if n == 1: return 1
        if n == 2: return 2
        MOD = 10**9 + 7
        dp = [0] * (n + 1)
        dp[0] = 1
        dp[1] = 1
        dp[2] = 2
        for i in range(3, n + 1):
            dp[i] = (dp[i - 1] + dp[i - 2] + 2 * dp[i - 3]) % MOD
        return dp[n]
```
