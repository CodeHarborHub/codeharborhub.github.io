---
id: minimum-cost-to-cut-a-stick
title: Minimum Cost to Cut a Stick
sidebar_label: 1547 - Minimum Cost to Cut a Stick
tags: [Dynamic Programming, Array, C++]
description: Solve the problem of finding the minimum cost to cut a stick into smaller pieces at specified positions, using dynamic programming.
---

## Problem Statement

### Problem Description

Given a wooden stick of length `n` units. The stick is labeled from 0 to `n`. For example, a stick of length 6 is labeled as follows:
```
0 - 1 - 2 - 3 - 4 - 5 - 6
```

- Given an integer array `cuts` where `cuts[i]` denotes a position you should perform a cut at.

- You should perform the cuts in order, but you can change the order of the cuts as you wish.

- The cost of one cut is the length of the stick to be cut. The total cost is the sum of costs of all cuts. When you cut a stick, it will be split into two smaller sticks (i.e., the sum of their lengths is the length of the stick before the cut).

- Return the minimum total cost of the cuts.

### Example

**Example 1:**
```
Input:
n = 7, cuts = [1, 3, 4, 5]

Output:
16
```

**Explanation:**

- Using cuts order = [1, 3, 4, 5] as in the input leads to the following scenario:

- The first cut is done to a rod of length 7 so the cost is 7.

- The second cut is done to a rod of length 6 (i.e., the second part of the first cut), the third is done to a rod of length 4 and the last cut is to a rod of length 3.

- The total cost is 7 + 6 + 4 + 3 = 20.

- Rearranging the cuts to be [3, 5, 1, 4] for example will lead to a scenario with total cost = 16 (as shown in the example photo 7 + 4 + 3 + 2 = 16).


### Constraints

- 2 &lt;= `n` &lt;= 10^6
- 1 &lt;= `cuts.length` &lt;= min(`n` - 1, 100)
- 1 &lt;= `cuts[i]` &lt;= `n` - 1
- All the integers in the `cuts` array are distinct.

## Solution

### Intuition 

- Sort the cuts in ascending order.
- Use dynamic programming to minimize the cost of cuts.
- Define `dp[i][j]` as the minimum cost to cut the stick between cuts[i-1] and cuts[j-1].
- Use a bottom-up approach to solve the subproblems and combine them to get the final result.

### Time Complexity and Space Complexity Analysis

- **Initialization**:
  - Sorting the cuts array takes $O(m log m)$ time, where m is the number of cuts.
  - Initializing the `dp` array takes $O(m^3)$ time.
  - Overall initialization time complexity is $O(m log m + m^2)$.

- **DP Table Calculation**:
  - Filling the `dp` table involves iterating over all possible subintervals and calculating the minimum cost for each subinterval using nested loops.
  - This takes $O(m^3)$ time in the worst case.

- **Overall Time Complexity**:
  - The overall time complexity is $O(m^3)$.

- **Space Complexity**:
  - The `dp` table requires $O(m^2)$ space.
  - The space complexity is $O(m^2)$.

### Code

#### C++

```cpp
class Solution {
public:
    int minCost(int n, std::vector<int>& cuts) {
        std::sort(cuts.begin(), cuts.end());
        int m = cuts.size();
        std::vector<std::vector<int>> dp(m + 2, std::vector<int>(m + 2, 0));

        for (int l = 2; l <= m + 1; l++) {
            for (int i = 0; i + l <= m + 1; i++) {
                int j = i + l;
                dp[i][j] = INT_MAX;
                for (int k = i + 1; k < j; k++) {
                    dp[i][j] = std::min(dp[i][j], dp[i][k] + dp[k][j]);
                }
                int left = (i == 0) ? 0 : cuts[i - 1];
                int right = (j == m + 1) ? n : cuts[j - 1];
                dp[i][j] += right - left;
            }
        }

        return dp[0][m + 1];
    }
};
```
