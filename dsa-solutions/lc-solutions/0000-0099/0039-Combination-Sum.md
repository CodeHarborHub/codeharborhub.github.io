---
id: combination-sum
title: Combination Sum(LeetCode)
sidebar_label: 0039-Combination Sum
tags:
  - Array
  - Backtracking
description: Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.
sidebar_position: 39
---

## Problem Statement

Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers 
sum to `target`. You may return the combinations in any order.

The same number may be chosen from `candidates` an unlimited number of times. Two combinations are unique if the 
frequency
 of at least one of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that sum up to `target` is less than `150` combinations for the given input.

### Examples

**Example 1:**

```plaintext
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
```

**Example 2:**

```plaintext
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

**Example 3:**

```plaintext
Input: candidates = [2], target = 1
Output: []
```

### Constraints

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of `candidates` are distinct.
- `1 <= target <= 40`

## Solution

The Combination Sum problem involves finding all unique combinations in a list of candidates where the candidate numbers sum to a given target. Each number in the list may be used an 
unlimited number of times. Below, we discuss three approaches to solve this problem: DFS (Backtracking), Dynamic Programming (Slow), and Dynamic Programming (Fast).

### Approach 1: DFS (Backtracking)

#### Explanation:

1. Use a recursive function to explore all possible combinations.
2. Track the current combination (`cur`) and its sum (`cur_sum`).
3. If `cur_sum` exceeds the target, backtrack.
4. If `cur_sum` equals the target, add the current combination to the result list.

#### Algorithm

1. Initialize an empty list `ans` to store the results.
2. Define a recursive function `dfs(cur, cur_sum, idx)` to explore combinations.
3. In `dfs`, if `cur_sum` exceeds the target, return.
4. If `cur_sum` equals the target, add `cur` to `ans` and return.
5. Loop through candidates starting from `idx`, and recursively call `dfs` with updated `cur` and `cur_sum`.
6. Start the DFS with an empty combination, a sum of 0, and starting index 0.
7. Return the list `ans`.

#### Implementation

```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        ans = []
        n = len(candidates)
        def dfs(cur, cur_sum, idx):
            if cur_sum > target: return
            if cur_sum == target: 
                ans.append(cur)
                return
            for i in range(idx, n):
                dfs(cur + [candidates[i]], cur_sum + candidates[i], i)
        dfs([], 0, 0)
        return ans
```

### Complexity Analysis

- **Time complexity**: O(N^(M/min_cand + 1)), where N is the number of candidates, M is the target, and min_cand is the
   smallest candidate.
- **Space complexity**: O(M/min_cand), as the recursion depth can go up to the target divided by the smallest
  candidate.

### Approach 2: Dynamic Programming (Slow)

#### Explanation:

1. Use a list `dp` where `dp[i]` contains combinations that sum up to `i`.
2. Build the `dp` list by iterating through all possible sums up to the target.
3. For each sum, update the combinations by considering each candidate.

#### Algorithm

1. Create a dictionary `idx_d` to map each candidate to its index.
2. Initialize a list `dp` with empty lists for all sums from 0 to the target.
3. For each sum `i` from 1 to the target:
* Iterate through all previous sums `j` from 0 to `i-1`.
* For each combination in `dp[j]`, update combinations in `dp[i]`.
* Add combinations directly from candidates if they equal `i`.
4. Return the list `dp[-1]`.
  
#### Implementation

```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        idx_d = {val: idx for idx, val in enumerate(candidates)}
        n = len(candidates)
        dp = [[] for _ in range(target + 1)]
        for i in range(1, target + 1):
            for j in range(i):
                for comb in dp[j]:
                    start_idx = idx_d[comb[-1]]
                    for val in candidates[start_idx:]:
                        if val + j == i:
                            dp[i].append(comb + [val])
            for candidate in candidates:
                if candidate == i:
                    dp[i].append([candidate])
        return dp[-1]
```

### Complexity Analysis

- **Time complexity**: O(MMM*N), where N is the number of candidates and M is the target.
- **Space complexity**: O(M*M), due to the storage of combinations for each sum up to the target.
  
### Approach 3: Dynamic Programming (Fast)

#### Explanation:

1. Use a list `dp` where `dp[i]` contains combinations that sum up to `i`.
2. For each candidate, update the combinations for all possible sums up to the target.

#### Algorithm

1. Initialize a list `dp` with empty lists for all sums from 0 to the target.
2. For each candidate `c`:
3. For each sum `i` from `c` to the target:
* If `i` equals `c`, add `[c]` to `dp[i]`.
* For each combination in `dp[i - c]`, add `comb + [c]` to `dp[i]`.
4. Return the list `dp[-1]`.

#### Implementation

```python
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        dp = [[] for _ in range(target + 1)]
        for c in candidates:
            for i in range(c, target + 1):
                if i == c:
                    dp[i].append([c])
                for comb in dp[i - c]:
                    dp[i].append(comb + [c])
        return dp[-1]
```

### Complexity Analysis

- **Time complexity**: O(MMN), where N is the number of candidates and M is the target.
- **Space complexity**: O(M*M), due to the storage of combinations for each sum up to the target.

### Conclusion

In solving the Combination Sum problem:

1. DFS (Backtracking) is simple and intuitive but can be slow for large inputs due to its exponential time complexity.
2. Dynamic Programming (Slow) uses a structured approach but has higher time complexity (O(MMM*N)) and memory usage.
3. Dynamic Programming (Fast) is more efficient (O(MMN)), making it suitable for larger inputs, though it still uses significant memory.

Choose DFS (Backtracking) for smaller datasets, DP (Slow) for a structured approach within manageable limits, and DP (Fast) for larger datasets where efficiency is critical.
