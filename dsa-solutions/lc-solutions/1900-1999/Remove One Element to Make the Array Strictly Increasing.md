---
id: remove-one-element-to-make-array-strictly-increasing
title: Remove One Element to Make the Array Strictly Increasing
sidebar_label: Remove One Element to Make Array Strictly Increasing
tags: [Array, Greedy, C++, Python, Java]
description: Solve the problem of determining whether an array can be made strictly increasing by removing exactly one element.
---

## Problem Statement

### Problem Description

Given a 0-indexed integer array `nums`, return `true` if it can be made strictly increasing after removing exactly one element, or `false` otherwise. If the array is already strictly increasing, return `true`.

The array `nums` is strictly increasing if `nums[i - 1] &lt; nums[i]` for each index `1 &lt;= i &lt; nums.length`.

### Example

**Example 1:**

```
Input: nums = [1, 2, 10, 5, 7]
Output: true
```
**Explanation:** By removing 10 at index 2 from nums, it becomes [1, 2, 5, 7].
[1, 2, 5, 7] is strictly increasing, so return true.


**Example 2:**
```
Input: nums = [2, 3, 1, 2]
Output: false
```
**Explanation:**
[3, 1, 2] is the result of removing the element at index 0.
[2, 1, 2] is the result of removing the element at index 1.
[2, 3, 2] is the result of removing the element at index 2.
[2, 3, 1] is the result of removing the element at index 3.
No resulting array is strictly increasing, so return false.


### Constraints

- 2 &lt;= `nums.length` &lt;= 1000
- 1 &lt;= `nums[i]` &lt;= 1000

## Solution

### Intuition

To solve this problem, we can use a greedy approach by iterating through the array and checking if there are any elements that violate the strictly increasing condition. If we find such an element, we can attempt to remove either the current element or the previous element and check if the resulting array (excluding that element) is strictly increasing. If any such removal results in a strictly increasing array, we return `true`. Otherwise, we return `false`.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: 
  - The solution involves a single pass through the array and a few constant-time checks, resulting in an overall time complexity of $O(n)$, where `n` is the length of the array.
  
- **Space Complexity**:
  - The space complexity is $O(1)$ as we are only using a fixed amount of extra space for variables.

### Code

#### C++

```cpp
class Solution {
public:
    bool canBeIncreasing(vector<int>& nums) {
        int count = 0;
        for (int i = 1; i < nums.size(); ++i) {
            if (nums[i] <= nums[i - 1]) {
                count++;
                if (count > 1) return false;
                if (i > 1 && nums[i] <= nums[i - 2] && i < nums.size() - 1 && nums[i + 1] <= nums[i - 1])
                    return false;
            }
        }
        return true;
    }
};
```

#### Python
```python
class Solution:
    def canBeIncreasing(self, nums: List[int]) -> bool:
        count = 0
        for i in range(1, len(nums)):
            if nums[i] <= nums[i - 1]:
                count += 1
                if count > 1:
                    return False
                if i > 1 and nums[i] <= nums[i - 2] and i < len(nums) - 1 and nums[i + 1] <= nums[i - 1]:
                    return False
        return True
```

#### Java
```java
class Solution {
    public boolean canBeIncreasing(int[] nums) {
        int count = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] <= nums[i - 1]) {
                count++;
                if (count > 1) {
                    return false;
                }
                if (i > 1 && nums[i] <= nums[i - 2] && i < nums.length - 1 && nums[i + 1] <= nums[i - 1]) {
                    return false;
                }
            }
        }
        return true;
    }
}
```
