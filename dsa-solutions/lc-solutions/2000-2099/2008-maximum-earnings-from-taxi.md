---
id: maximum-earnings-from-taxi
title: Maximum Earnings From Taxi
sidebar_label: 2008 Maximum Earnings From Taxi
tags:
  - Array
  - Dynamic Programming
  - Greedy
  - LeetCode
description: "This is a solution to the Maximum Earnings From Taxi problem on LeetCode."
sidebar_position: 2008
---

## Problem Description

There are `n` points on a road labeled from 1 to `n` in the direction you are going. You want to drive from point 1 to point `n` to make money by picking up passengers. You cannot change the direction of the taxi.

Passengers are represented by a 0-indexed 2D integer array `rides`, where `rides[i] = [starti, endi, tipi]` denotes the `i-th` passenger requesting a ride from point `starti` to point `endi` and is willing to give a `tipi` dollar tip.

For each passenger you pick up, you earn `endi - starti + tipi` dollars. You may only drive at most one passenger at a time.

Given `n` and `rides`, return the maximum number of dollars you can earn by picking up passengers optimally.

## Examples

**Example 1:**

```
Input: n = 5, rides = [[2,5,4],[1,5,1]]
Output: 7
Explanation: We can pick up passenger 0 to earn 5 - 2 + 4 = 7 dollars.

```

**Example 2:**

```
Input: n = 20, rides = [[1,6,1],[3,10,2],[10,12,3],[11,12,2],[12,15,2],[13,18,1]]
Output: 20
Explanation: We will pick up the following passengers:

Drive passenger 1 from point 3 to point 10 for a profit of 10 - 3 + 2 = 9 dollars.
Drive passenger 2 from point 10 to point 12 for a profit of 12 - 10 + 3 = 5 dollars.
Drive passenger 5 from point 13 to point 18 for a profit of 18 - 13 + 1 = 6 dollars.
We earn 9 + 5 + 6 = 20 dollars in total.
```

## Constraints

- `1 <= n <= 10^5`
- `1 <= rides.length <= 3 * 10^4`
- `rides[i].length == 3`
- `1 <= starti < endi <= n`
- `1 <= tipi <= 10^5`

## Approach

To solve this problem efficiently:
1. Sort the `rides` array based on the end points `endi`. If two rides end at the same point, sort by their start points `starti`.
2. Use dynamic programming (DP) to compute the maximum earnings up to each endpoint `endi`:
   - Initialize a DP array `dp` where `dp[i]` represents the maximum earnings up to point `i`.
   - Iterate through each ride and update `dp[endi]` with the maximum earnings considering picking up the ride or not.
3. Traverse the `dp` array to find the maximum earnings possible by the endpoint `n`.

This approach ensures efficiency by leveraging sorting and dynamic programming to compute the optimal solution.

#### C++ Solution

```cpp
class Solution {
public:
    long long maxTaxiEarnings(int n, vector<vector<int>>& rides) {
        sort(rides.begin(), rides.end(), [](const vector<int>& a, const vector<int>& b) {
            if (a[1] == b[1]) {
                return a[0] < b[0];
            }
            return a[1] < b[1];
        });
        
        vector<long long> dp(n + 1);
        int j = 0;
        long long maxProfit = 0;
        
        for (int i = 1; i <= n; ++i) {
            dp[i] = dp[i - 1];
            while (j < rides.size() && rides[j][1] == i) {
                int start = rides[j][0];
                int end = rides[j][1];
                int tip = rides[j][2];
                long long profit = end - start + tip;
                dp[end] = max(dp[end], dp[start] + profit);
                ++j;
            }
            maxProfit = max(maxProfit, dp[i]);
        }
        
        return maxProfit;
    }
};
```
