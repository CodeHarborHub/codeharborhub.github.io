---
id: beautiful-arrangement
title: Beautiful Arrangement
sidebar_label: 0526-Beautiful-Arrangement
tags:
- Array
- Dynamic Programming
- Bit Manipulation
- Backtracking
description: solution to the leetcode problem beautiful arrrangement.
---

## Problem

Suppose you have `n` integers labeled `1` through `n`. A permutation of those `n` integers `perm` (1-indexed) is considered a beautiful arrangement if for every `i` (`1 <= i <= n`), either of the following is true:

- `perm[i]` is divisible by `i`.
- `i` is divisible by `perm[i]`.

Given an integer `n`, return the number of the beautiful arrangements that you can construct.

### Examples

**Example 1:**

Input: `n = 2`  
Output: `2`  
Explanation:  
The first beautiful arrangement is `[1,2]`:
- `perm[1] = 1` is divisible by `i = 1`
- `perm[2] = 2` is divisible by `i = 2`

The second beautiful arrangement is `[2,1]`:
- `perm[1] = 2` is divisible by `i = 1`
- `i = 2` is divisible by `perm[2] = 1`

**Example 2:**

Input: `n = 1`  
Output: `1`  

### Constraints:

- $1 <= n <= 15$
---

## Solution

```cpp
class Solution {
public:
    void solve(vector<int>& nums, int n, int& ans, int cur_num){
        // base case
        if (cur_num >= n + 1) {
            ans++;
            return;
        }

        // recursive relation
        for (int j = 1; j <= n; j++) {
            if (nums[j] == 0 && (cur_num % j == 0 || j % cur_num == 0)) {
                nums[j] = cur_num;
                solve(nums, n, ans, cur_num + 1);
                // backtracking
                nums[j] = 0;
            }
        }
    }

    int countArrangement(int n) {
        vector<int> nums(n + 1);
        int ans = 0, ind = 1;
        solve(nums, n, ans, ind);
        return ans;
    }
};
```

```java
class Solution {
    public void solve(int[] nums, int n, int[] ans, int curNum) {
        // base case
        if (curNum >= n + 1) {
            ans[0]++;
            return;
        }

        // recursive relation
        for (int j = 1; j <= n; j++) {
            if (nums[j] == 0 && (curNum % j == 0 || j % curNum == 0)) {
                nums[j] = curNum;
                solve(nums, n, ans, curNum + 1);
                // backtracking
                nums[j] = 0;
            }
        }
    }

    public int countArrangement(int n) {
        int[] nums = new int[n + 1];
        int[] ans = new int[1];
        int ind = 1;
        solve(nums, n, ans, ind);
        return ans[0];
    }
}
```

```python
class Solution:
    def solve(self, nums, n, ans, cur_num):
        # base case
        if cur_num >= n + 1:
            ans[0] += 1
            return

        # recursive relation
        for j in range(1, n + 1):
            if nums[j] == 0 and (cur_num % j == 0 or j % cur_num == 0):
                nums[j] = cur_num
                self.solve(nums, n, ans, cur_num + 1)
                # backtracking
                nums[j] = 0

    def countArrangement(self, n):
        nums = [0] * (n + 1)
        ans = [0]
        cur_num = 1
        self.solve(nums, n, ans, cur_num)
        return ans[0]
```

### Complexity Analysis

- **Time Complexity:** $O(N!)$
- **Space Complexity:** $O(N)$
