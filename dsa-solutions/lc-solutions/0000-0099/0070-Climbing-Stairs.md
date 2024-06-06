---
id: climbing-stairs
title: Climbing Stairs (LeetCode)
difficulty: Easy
sidebar_label: 0070-ClimbingStairs
topics:
  - Dynamic Programming
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/climbing-stairs/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/climbing-stairs/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

### Examples

#### Example 1:

- **Input:** `n = 2`
- **Output:** `2`
- **Explanation:** There are two ways to climb to the top:
  1. 1 step + 1 step
  2. 2 steps

#### Example 2:

- **Input:** `n = 3`
- **Output:** `3`
- **Explanation:** There are three ways to climb to the top:
  1. 1 step + 1 step + 1 step
  2. 1 step + 2 steps
  3. 2 steps + 1 step

### Constraints:

- `1 <= n <= 45`

### Approach

To find the number of distinct ways to climb to the top of the staircase, we can use dynamic programming.

1. Initialize an array `dp` of size `n+1` to store the number of distinct ways to reach each step.
2. Set `dp[0] = 1` and `dp[1] = 1` since there's only one way to reach the first step and the second step.
3. Iterate from `2` to `n`, updating `dp[i]` as the sum of `dp[i-1]` and `dp[i-2]`.
4. Finally, return `dp[n]`, which represents the number of distinct ways to reach the `n`-th step.

### Solution Code

#### Python

```
class Solution(object):
    def climbStairs(self, n):
        if n <= 2:
            return n
        dp = [0] * (n + 1)
        dp[1] = 1
        dp[2] = 2

        for i in range(3, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        return dp[n]
```

#### C++

```
class Solution {
public:
    int climbStairs(int n) {
        if (n <= 2) {
            return n;
        }
        vector<int> dp(n + 1);
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; ++i) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
};
```

#### Java

```
class Solution {
    public int climbStairs(int n) {
        if (n <= 2) {
            return n;
        }
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; ++i) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}
```

### Conclusion

The "Climbing Stairs" problem can be efficiently solved using dynamic programming, where the number of distinct ways to reach each step is calculated iteratively. The provided solution code implements this approach in Python, C++, and Java, providing an optimal solution to the problem.