---
id: split-array-with-equal-sum
title: Split Array with Equal Sum
sidebar_label: 0548-split-array-with-equal-sum
tags:
- Array
description: "This is a solution to the Number of Provincess problem on LeetCode."
---


## Problem Description

 Given an array with `n` integers, you need to find if there are triplets `(i, j, k)` which satisfies following conditions:

1-  `0 < i, i + 1 < j, j + 1 < k < n - 1`
2-  Sum of subarrays `(0, i - 1), (i + 1, j - 1), (j + 1, k - 1) and (k + 1, n - 1)` should be equal.

where we define that subarray `(L, R)` represents a slice of the original array starting from the element indexed `L` to the element indexed `R`. 

### Examples

**Example 1:**

```
Input: [1,2,1,2,1,2,1]
Output: True
Explanation:
i = 1, j = 3, k = 5.
sum(0, i - 1) = sum(0, 0) = 1
sum(i + 1, j - 1) = sum(2, 2) = 1
sum(j + 1, k - 1) = sum(4, 4) = 1
sum(k + 1, n - 1) = sum(6, 6) = 1

```

**Example 2:**

```
Input: nums = [1,2,1,2,1,2,1,2]
Output: false

```


### Constraints

- `1 <= n <= 2000.`
- Elements in the given array will be in range `[-1,000,000, 1,000,000].`

## Solution for Assign Cookies

### Approach:

1- Initialize `n` as the length of `nums` and `s` as the prefix sum array of size `n + 1`.
2- Populate the prefix sum array `s`.
3- Loop through possible middle split points `j` from `3` to `n - 3`.
4- Use a set comprehension to collect valid prefix sums before `j`.
5- Check if the valid suffix sum exists in the set, ensuring the conditions for splitting are met.

## Code in Different Languages

### C++

```cpp
class Solution {
public:
    bool splitArray(vector<int>& nums) {
        int n = nums.size();
        vector<int> s(n + 1);
        for (int i = 0; i < n; ++i) s[i + 1] = s[i] + nums[i];
        for (int j = 3; j < n - 3; ++j) {
            unordered_set<int> seen;
            for (int i = 1; i < j - 1; ++i)
                if (s[i] == s[j] - s[i + 1])
                    seen.insert(s[i]);
            for (int k = j + 2; k < n - 1; ++k)
                if (s[n] - s[k + 1] == s[k] - s[j + 1] && seen.count(s[n] - s[k + 1]))
                    return true;
        }
        return false;
    }
};


```
### Java

```java
class Solution {
    public boolean splitArray(int[] nums) {
        int n = nums.length;
        int[] s = new int[n + 1];
        for (int i = 0; i < n; ++i) {
            s[i + 1] = s[i] + nums[i];
        }
        for (int j = 3; j < n - 3; ++j) {
            Set<Integer> seen = new HashSet<>();
            for (int i = 1; i < j - 1; ++i) {
                if (s[i] == s[j] - s[i + 1]) {
                    seen.add(s[i]);
                }
            }
            for (int k = j + 2; k < n - 1; ++k) {
                if (s[n] - s[k + 1] == s[k] - s[j + 1] && seen.contains(s[n] - s[k + 1])) {
                    return true;
                }
            }
        }
        return false;
    }
}


```

### Python

```python
class Solution:
    def splitArray(self, nums: List[int]) -> bool:
        n = len(nums)
        s = [0] * (n + 1)
        for i, v in enumerate(nums):
            s[i + 1] = s[i] + v
        for j in range(3, n - 3):
            seen = set()
            for i in range(1, j - 1):
                if s[i] == s[j] - s[i + 1]:
                    seen.add(s[i])
            for k in range(j + 2, n - 1):
                if s[n] - s[k + 1] == s[k] - s[j + 1] and s[n] - s[k + 1] in seen:
                    return True
        return False

```

## Complexity Analysis

### Time Complexity: O(n^2)

### Space Complexity: O(n)

## References

- **LeetCode Problem**: [Split Array with Equal Sum](https://leetcode.com/problems/split-array-with-equal-sum/)

