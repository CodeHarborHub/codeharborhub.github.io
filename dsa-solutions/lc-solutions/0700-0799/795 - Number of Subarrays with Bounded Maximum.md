---
id: number-of-subarrays-with-bounded-maximum
title: Number of Subarrays with Bounded Maximum
sidebar_label: Number of Subarrays with Bounded Maximum
tags: [Array, Sliding Window, C++, Python, Java]
description: Solve the problem of finding the number of contiguous non-empty subarrays where the maximum element is within a given range.
---

## Problem Statement

### Problem Description

Given an integer array `nums` and two integers `left` and `right`, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range `[left, right]`.

The test cases are generated so that the answer will fit in a 32-bit integer.

### Example

**Example 1:**
```
Input: nums = [2,1,4,3], left = 2, right = 3
Output: 3
```
**Explanation:** There are three subarrays that meet the requirements: [2], [2, 1], [3].


**Example 2:**
```
Input: nums = [2,9,2,5,6], left = 2, right = 8
Output: 7
```

### Constraints

- $1 \leq nums.length \leq 10^5$
- $0 \leq nums[i] \leq 10^9$
- $0 \leq left \leq right \leq 10^9$

## Solution

### Intuition

To solve this problem, we can use a sliding window approach. The idea is to maintain a window of subarrays whose maximum elements are within the given range `[left, right]`. We can keep track of the start and end of this window and count the number of valid subarrays.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: The solution involves a single pass through the array, making the time complexity $O(n)$.
- **Space Complexity**: The space complexity is $O(1)$ since we are using a constant amount of extra space.

### Code

#### C++

```cpp
class Solution {
public:
    int numSubarrayBoundedMax(vector<int>& nums, int left, int right) {
        int count = 0, start = -1, last = -1;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] > right) {
                start = i;
            }
            if (nums[i] >= left) {
                last = i;
            }
            count += last - start;
        }
        return count;
    }
};
```

#### Java
```java
class Solution {
    public int numSubarrayBoundedMax(int[] nums, int left, int right) {
        int count = 0, start = -1, last = -1;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > right) {
                start = i;
            }
            if (nums[i] >= left) {
                last = i;
            }
            count += last - start;
        }
        return count;
    }
}
```
#### Python
```python
class Solution:
    def numSubarrayBoundedMax(self, nums: List[int], left: int, right: int) -> int:
        count = 0
        start = -1
        last = -1
        for i in range(len(nums)):
            if nums[i] > right:
                start = i
            if nums[i] >= left:
                last = i
            count += last - start
        return count
```
