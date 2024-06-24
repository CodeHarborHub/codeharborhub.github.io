---
id: jump-game-II
title: Jump Game II(LeetCode)
sidebar_label: 0045-Jump-Game-II
tags:
  - Array
  - Dynamic Programming
  - Greedy
description: You are given a 0-indexed array of integers nums of length `n`. Return the minimum number of jumps to reach `nums[n - 1]`.
sidebar_position: 45
---

## Problem Statement

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at `nums[i]`, you can jump to any `nums[i + j]` where:

- `0 <= j <= nums[i]` and
- `i + j < n`
Return the minimum number of jumps to reach `nums[n - 1]`. The test cases are generated such that you can reach `nums[n - 1]`.

### Examples

**Example 1:**

```plaintext
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```plaintext
Input: nums = [2,3,0,1,4]
Output: 2
```

### Constraints

- `1 <= nums.length <= 104`
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`.

## Solution

In this problem, we aim to find the minimum number of jumps required to reach the end of the array, starting from the first element. We explore three main approaches: Recursive Dynamic Programming with 
Memoization, Iterative Dynamic Programming with Tabulation, and a Greedy BFS approach.

### Approach 1: Recursive Dynamic Programming (Memoization)
Concept: Store the solutions for each position to avoid redundant calculations.

#### Algorithm

1. Initialize `dp` array with a large value to indicate uncomputed positions.
2. Call the recursive function `solve` starting from position 0.
3. In `solve`:
* If the position is at or beyond the end, return 0.
* If `dp[pos]` is already computed, return its value.
* Explore all possible jumps from the current position.
* Store and return the minimum jumps required.

#### Implementation

```C++
int jump(vector<int>& nums) {
    vector<int> dp(size(nums), 10001); 
    return solve(nums, dp, 0);
}

int solve(vector<int>& nums, vector<int>& dp, int pos) {
    if(pos >= size(nums) - 1) return 0; 
    if(dp[pos] != 10001) return dp[pos];
    for(int j = 1; j <= nums[pos]; j++)
        dp[pos] = min(dp[pos], 1 + solve(nums, dp, pos + j));        
    return dp[pos];
}
```

### Complexity Analysis

- **Time complexity**: O(N^2)
- **Space complexity**: O(N)

### Approach 2: Iterative Dynamic Programming (Tabulation)

Concept: Start from the last index and iteratively compute the minimum jumps required for each position.

#### Algorithm

1. Initialize `dp` array with large values and set `dp[n-1]` to 0.
2. Iterate from the second last index to the start.
3. For each index, explore all possible jumps and store the minimum jumps required.
   
#### Implementation 

```C++
int jump(vector<int>& nums) {
    int n = size(nums);
    vector<int> dp(n, 10001);
    dp[n - 1] = 0;  
    for(int i = n - 2; i >= 0; i--) 
        for(int jumpLen = 1; jumpLen <= nums[i]; jumpLen++) 
            dp[i] = min(dp[i], 1 + dp[min(n - 1, i + jumpLen)]);
    return dp[0];
}
```

### Complexity Analysis

- **Time complexity**: O(N^2)
- **Space complexity**: O(N)

### Approach 3: Greedy BFS

Concept: Use two pointers to track the furthest reachable position 
and the currently furthest reached position. Update the jump count when moving to a new level.

#### Algorithm

1. Initialize `maxReachable`, `lastJumpedPos`, and `jumps`.
2. Iterate over the array until the lastJumpedPos reaches or exceeds the last index.
3. Update `maxReachable` with the furthest position reachable from the current index.
4. When `i` equals `lastJumpedPos`, move to `maxReachable` and increment jumps.
   
#### Implementation 

```C++
int jump(vector<int>& nums) {
    int n = size(nums), i = 0, maxReachable = 0, lastJumpedPos = 0, jumps = 0;
    while(lastJumpedPos < n - 1) {
        maxReachable = max(maxReachable, i + nums[i]);
        if(i == lastJumpedPos) {
            lastJumpedPos = maxReachable;
            jumps++;
        }
        i++;
    }
    return jumps;
}
```

### Complexity Analysis

- **Time complexity**: O(N)
- **Space complexity**: O(1)

### Conclusion

1. Recursive DP with Memoization: Efficiently avoids redundant calculations but has higher time complexity.
2. Iterative DP with Tabulation: Iteratively solves for each position but has quadratic time complexity.
3. Greedy BFS: Provides the most optimal solution with linear time complexity and constant space, making it the best approach for this problem.
