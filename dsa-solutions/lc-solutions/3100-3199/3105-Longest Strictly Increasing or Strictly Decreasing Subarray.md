---
id: longest-strictly-subarray
title: Longest Strictly Increasing or Strictly Decreasing Subarray 
sidebar_label: 3105-LongestStrictlySubarray
tags:
  - Array
  - Dynamic Programming
description: Return the length of the longest subarray of nums which is either strictly increasing or strictly decreasing.
sidebar_position: 3105
---

## Problem Description

You are given an array of integers `nums`. Return the length of the longest subarray of `nums` which is either strictly increasing or strictly decreasing.

### Example 1

- **Input:** `nums = [1,4,3,3,2]`
- **Output:** `2`
- **Explanation:**
  - The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].
  - The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].
  - Hence, we return 2.

### Example 2

- **Input:** `nums = [3,3,3,3]`
- **Output:** `1`
- **Explanation:**
  - The strictly increasing subarrays of nums are [3], [3], [3], and [3].
  - The strictly decreasing subarrays of nums are [3], [3], [3], and [3].
  - Hence, we return 1.

### Example 3

- **Input:** `nums = [3,2,1]`
- **Output:** `3`
- **Explanation:**
  - The strictly increasing subarrays of nums are [3], [2], and [1].
  - The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].
  - Hence, we return 3.

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Approach

To solve this problem, we can use a dynamic programming approach:

1. **Dynamic Programming Array**:
   - Use two arrays `inc` and `dec` to store the lengths of the longest strictly increasing and strictly decreasing subarrays ending at each index `i` in `nums`.
   - Traverse through the array from left to right to populate `inc`.
   - Traverse through the array from right to left to populate `dec`.
   - The maximum value from `inc` and `dec` arrays will give us the length of the longest subarray that is either strictly increasing or strictly decreasing.

### Solution Code

#### Python

```python
class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 1:
            return n
        
        inc = [1] * n  # Length of longest strictly increasing subarray ending at index i
        dec = [1] * n  # Length of longest strictly decreasing subarray ending at index i
        
        # Fill inc array
        for i in range(1, n):
            if nums[i] > nums[i - 1]:
                inc[i] = inc[i - 1] + 1
        
        # Fill dec array
        for i in range(n - 2, -1, -1):
            if nums[i] > nums[i + 1]:
                dec[i] = dec[i + 1] + 1
        
        # Find the maximum length of strictly increasing or strictly decreasing subarray
        max_len = 1  # At least a single element subarray is valid
        for i in range(n):
            max_len = max(max_len, inc[i], dec[i])
        
        return max_len
```

#### C++

```c++
class Solution {
public:
    int longestMonotonicSubarray(vector<int>& nums) {
        int n = nums.size();
        if (n <= 1) {
            return n;
        }
        
        vector<int> inc(n, 1); // Length of longest strictly increasing subarray ending at index i
        vector<int> dec(n, 1); // Length of longest strictly decreasing subarray ending at index i
        
        // Fill inc array
        for (int i = 1; i < n; i++) {
            if (nums[i] > nums[i - 1]) {
                inc[i] = inc[i - 1] + 1;
            }
        }
        
        // Fill dec array
        for (int i = n - 2; i >= 0; i--) {
            if (nums[i] > nums[i + 1]) {
                dec[i] = dec[i + 1] + 1;
            }
        }
        
        // Find the maximum length of strictly increasing or strictly decreasing subarray
        int maxLen = 1; // At least a single element subarray is valid
        for (int i = 0; i < n; i++) {
            maxLen = max(maxLen, max(inc[i], dec[i]));
        }
        
        return maxLen;
    }
};

```

#### Java

```java
class Solution {
    public int longestMonotonicSubarray(int[] nums) {
        int n = nums.length;
        if (n <= 1) {
            return n;
        }
        
        int[] inc = new int[n]; // Length of longest strictly increasing subarray ending at index i
        int[] dec = new int[n]; // Length of longest strictly decreasing subarray ending at index i
        
        // Fill inc array
        Arrays.fill(inc, 1);
        for (int i = 1; i < n; i++) {
            if (nums[i] > nums[i - 1]) {
                inc[i] = inc[i - 1] + 1;
            }
        }
        
        // Fill dec array
        Arrays.fill(dec, 1);
        for (int i = n - 2; i >= 0; i--) {
            if (nums[i] > nums[i + 1]) {
                dec[i] = dec[i + 1] + 1;
            }
        }
        
        // Find the maximum length of strictly increasing or strictly decreasing subarray
        int maxLen = 1; // At least a single element subarray is valid
        for (int i = 0; i < n; i++) {
            maxLen = Math.max(maxLen, Math.max(inc[i], dec[i]));
        }
        
        return maxLen;
    }
}

```

### Comclusion
The above solutions use dynamic programming to find the length of the longest subarray in nums that 
is either strictly increasing or strictly decreasing. They ensure efficient computation within the 
given constraints, providing robust solutions across different inputs.