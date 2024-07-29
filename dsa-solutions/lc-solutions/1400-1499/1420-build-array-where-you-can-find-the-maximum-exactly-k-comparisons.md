---
id: build-array-where-you-can-find-the-maximum-exactly-k-comparisons
title: 1420. Build Array Where You Can Find The Maximum Exactly K Comparisons
sidebar_label: 1420-build-array-where-you-can-find-the-maximum-exactly-k-comparisons
description: "This document provides solutions for leetcode problem 1420."
---

## Intuition
The problem involves finding the number of ways to create an array of length n with elements from 1 to m such that the sum of the elements is equal to k. This can be approached as a dynamic programming problem where you consider each position in the array and each possible value for that position. The intuition here is to use recursion with memoization to keep track of the number of ways to achieve the desired sum while exploring different choices.

## Approach
We define a function `solve` that takes several parameters:

1. If `searchCost` exceeds k, we return 0 as it's not a valid way to achieve the desired sum.
2. If we have reached the end of the array (n == index), we check if `searchCost` is equal to k. If it is, we return 1 (valid way), otherwise, we return 0 (not a valid way).
3. We check if we have already computed the result for the current state (index, searchCost, maxi) in the dp table. If yes, we return the memoized result.
4. We initialize `temp` to 0, which will be used to accumulate the number of valid ways.
5. We loop through all possible values from 1 to m for the current position.
6. If the current value is greater than `maxi`, we recursively call `solve` with `index + 1`, `searchCost + 1`, and the new maximum value `i`.
7. If the current value is not greater than `maxi`, we call `solve` with `index + 1`, `searchCost`, and the current maximum value `maxi`.
8. We accumulate the results in `temp`.

## Complexity
Time complexity: The time complexity depends on the number of subproblems, which is O(n * k * m^2) in the worst case.

Space complexity: The space complexity is determined by the size of the dp table, which is O(n * k * m) to store intermediate results.

```cpp
class Solution {
public:
    int mod = 1e9 + 7;
    int solve(int index, int searchCost, int maxi, int n, int m, int k, vector<vector<vector<int>>> &dp)
    {
        if (searchCost > k)
            return 0;

        if (n == index)
        {
            if (searchCost == k)
                return 1;
            return 0;
        }
        if (dp[index][searchCost][maxi] != -1)
            return dp[index][searchCost][maxi];

        int temp = 0;
        for (int i = 1; i <= m; i++)
        {
            if (i > maxi)
                temp = (temp + solve(index + 1, searchCost + 1, i, n, m, k, dp)) % mod;
            else
                temp = (temp + solve(index + 1, searchCost, maxi, n, m, k, dp)) % mod;
        }
        return dp[index][searchCost][maxi] = temp;
    }

    int numOfArrays(int n, int m, int k)
    {
        vector<vector<vector<int>>> dp(n + 1, vector<vector<int>>(k + 1, vector<int>(m + 1, -1)));
        return solve(0, 0, 0, n, m, k, dp);
    }
};
```
