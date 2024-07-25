---
id: travelling-salesperson-problem
title: Travelling-Salesperson-Problem (Geeks for Geeks)
sidebar_label: Travelling Salesperson Problem
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Travelling-Salesperson-Problem  on Geeks for Geeks."
---

## Problem Description

Given an array of strings words, return the smallest string that contains each string in words as a substring. If there are multiple valid strings of the smallest length, return any of them.
You may assume that no string in words is a substring of another string in words.
Given a matrix cost of size n where cost[i][j] denotes the cost of moving from city i to city j. Your task is to complete a tour from city 0 (0-based index) to all other cities such that you visit each city exactly once and then at the end come back to city 0 at minimum cost.

## Examples

**Example:**

Consider the following graph:

**Input:** `cost = {{0,111},{112,0}}`
**Output:** 223
**Explanation:** We can visit `0->1->0` and 

```
Input: `cost = {{0,111},{112,0}}`
Output: 223
Explanation: We can visit 0->1->0 and 
cost = 111 + 112.
```

## Your Task

You don't need to read or print anything. Your task is to complete the function total_cost() which takes cost as the input parameter and returns the total cost to visit each city exactly once starting from city 0 and again coming back to city 0.
Expected Time Complexity:  $O(2n * n2)$.
Expected Auxiliary Space: $O(2n * n)$.

## Constraints
- $1 \leq n \leq 20$
- $1 \leq \text{cost[i][j]} \leq (103)$

## Problem Explanation

Here's the step-by-step breakdown of the Travelling Salesperson process:

**Step 1 :** Given a list of cities and the distances between each pair of cities, the task is to find the shortest possible route that visits each city exactly once and returns to the origin city.

**Step 2 :** Key Characteristics:
Input: A set of n cities. A distance matrix D where D[i][j] represents the distance between city i and city j.
Output: The shortest possible route (a permutation of the cities) that starts and ends at the same city and visits each city exactly once.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/> 
  ```python
  class Solution:
    def shortestSuperstring(self, words: List[str]) -> str:
        def getMinSuffix(w1, w2):
            n = min(len(w1), len(w2))
            for i in range(n, 0, -1):
                if w1[-i:] == w2[:i]:
                    return w2[i:]
            return w2
        n = len(words)
        suffix = defaultdict(dict)
        for i in range(n):
            for j in range(n):
                suffix[i][j] = getMinSuffix(words[i], words[j])
        dp = [['']*n for _ in range(1<<n)]
        for i in range(1, 1<<n):
            indexes = [j for j in range(n) if i&(1<<j)]
            for j in indexes:
                i2 = i&~(1<<j)
                strs = [dp[i2][j2]+suffix[j2][j] for j2 in indexes if j2 != j]
                dp[i][j] = min(strs, key=len) if strs else words[j]
        return min(dp[-1], key=len)
  ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  class Solution {
   public:
    string shortestSuperstring(vector<string>& A) {
        int dp[4096][12] = {0};
        int failure[12][20] = {0};
        int cost[12][12] = {0};
        int trace_table[4096][12] = {0};
        const int sz = A.size();
        const int dp_sz = 1 << sz;
        
        for (int i = 0; i < sz; i++) {
            const int str_sz = A[i].size();
            
            failure[i][0] = -1;
            
            for (int j = 1, k = -1; j < str_sz; j++) {
                while (k >= 0 && A[i][k + 1] != A[i][j])
                    k = failure[i][k];
                
                if (A[i][k + 1] == A[i][j]) k++;
                
                failure[i][j] = k;
            }
        }
        for (int i = 0; i < sz; i++) {
            const int i_sz = A[i].size();
            
            for (int j = 0; j < sz; j++) {
                if (i != j) {
                    const int j_sz = A[j].size();
                    int h = -1;
                
                    for (int k = 0; k < j_sz; k++) {
                        while (h >= 0 && A[i][h + 1] != A[j][k])
                            h = failure[i][h];
                        
                        if (A[i][h + 1] == A[j][k])
                            h++;
                    }
                    cost[j][i] = i_sz - h - 1;
                }
            }
        }
        for (int i = 0; i < sz; i++)
            dp[1 << i][i] = A[i].size();
        
        for (int state = 1; state < dp_sz; state++) {
            for (int t1 = state, b1 = t1 & (-t1); t1 ; t1 ^= b1 , b1 = t1 & (-t1)) {
                const int state1 = state ^ b1;
                const int i = __builtin_ctz(b1);
                const int i_sz = A[i].size();
                
                for (int t2 = state1, b2 = t2 & (-t2); t2; t2 ^= b2, b2 = t2 & (-t2)) {    
                    const int j = __builtin_ctz(b2);
                    const int tmp = dp[state1][j] + cost[j][i];
                    
                    if (!dp[state][i] || tmp < dp[state][i]) {
                        dp[state][i] = tmp;
                        trace_table[state][i] = j;
                    }
                }
            }
        }
        const auto& last = dp[dp_sz - 1];
        string res;
        int i = std::distance(last, std::min_element(last, last + sz));
        
        for (int state = dp_sz - 1, j = trace_table[state][i]; state & (state - 1); state ^= (1 << i), i = j, j = trace_table[state][i])
            res = A[i].substr(A[i].size() - cost[j][i]) + res;
        
        return A[i] + res;
    }
  };
  ```

  </TabItem>
</Tabs>

## Solution Logic

**1.Helper Function:**  getMinSuffix(w1, w2): This function calculates the minimum suffix of w2 that can be appended to w1 to create the shortest possible concatenation of w1 and w2 while overlapping the end of w1 with the start of w2. It checks from the longest possible overlap down to the shortest and returns the suffix of w2 that doesn't overlap.
**2.Suffix Dictionary:**  suffix is a nested dictionary where suffix[i][j] stores the minimum suffix of words[j] that can be appended to words[i]. This pre-computation helps in efficiently constructing the superstring later.
**3.Dynamic Programming (DP) Array:**  dp is a 2D list where dp[mask][i] represents the shortest superstring that can be formed using the set of words represented by mask, ending with the i-th word. mask is a bitmask representing the set of words included in the current superstring. For example, if n = 3 and mask = 5 (binary 101), it indicates that the 0th and 2nd words are included in the current set.
**4.DP Initialization and Iteration:** The outer loop iterates over all possible bitmasks from 1 to $2^n - 1$. For each bitmask, the inner loop iterates over all possible ending words j.For each ending word j, the algorithm finds the best possible previous word j2 in the current set (excluding j) and constructs the superstring by appending the precomputed suffix.
**5.Result Extraction:** After filling the DP table, the algorithm finds the shortest superstring from `dp[(1 << n) - 1][i]` for all i from 0 to n-1. The bitmask `(1 << n) - 1` represents the set containing all words.
**5.Result Extraction:** After filling the DP table, the algorithm finds the shortest superstring from `dp[(1 << n) - 1][i]` for all i from 0 to n-1. The bitmask `(1 << n) - 1` represents the set containing all words.

## Time Complexity

$O(2n * n2)$.

## Space Complexity

$O(2n * n)$.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/traveling-salesman-problem-tsp-implementation/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |
This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
Footer
