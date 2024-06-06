---
id: search-in-rotated-sorted-array
title: Search in Rotated Sorted Array (LeetCode)
sidebar_label: 0033-SearchInRotatedSortedArray
description: Search for a target element in a rotated sorted array with distinct values using an algorithm with O(log n) runtime complexity.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/search-in-rotated-sorted-array/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (`0 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed)`.

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with $O(log n)$ runtime complexity.

### Examples

#### Example 1

- **Input:** nums = [4,5,6,7,0,1,2], target = 0
- **Output:** 4
- **Explanation:** 0 is located at index 4 in the rotated sorted array [4,5,6,7,0,1,2].

#### Example 2

- **Input:** nums = [4,5,6,7,0,1,2], target = 3
- **Output:** -1
- **Explanation:** 3 is not in nums, so return -1.

#### Example 3

- **Input:** nums = [1], target = 0
- **Output:** -1
- **Explanation:** 0 is not in nums, so return -1.

### Constraints

- $v1 <= nums.length <= 5000$
- $-10^4 <= nums[i] <= 10^4$
- All values of $nums$ are unique.
- nums is an ascending array that is possibly rotated.
- $-10^4 <= target <= 10^4$

### Approach

To search for a target element in a rotated sorted array with distinct values with $O(log n)$ runtime complexity, we can use the binary search algorithm.

1. **Find the Pivot Point:**
   - Perform binary search to find the pivot element, which is the smallest element in the array. This element divides the array into two sorted subarrays.

2. **Perform Binary Search:**
   - Based on the pivot element, determine which half of the array the target might be in.
   - Perform binary search in the appropriate half to find the target element.

### Solution Code

#### Python

```py
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[left] <= nums[mid]:
                if nums[left] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[right]:
                    left = mid + 1
                else:
                    right = mid - 1
        return -1
```

#### Java

```java
class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid] == target)
                return mid;
            else if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid])
                    right = mid - 1;
                else
                    left = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[right])
                    left = mid + 1;
                else
                    right = mid - 1;
            }
        }
        return -1;
    }
}
```

#### C++

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int left = 0, right = nums.size() - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (nums[mid] == target)
                return mid;
            else if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid])
                    right = mid - 1;
                else
                    left = mid + 1;
            } else {
                if (nums[mid] < target && target <= nums[right])
                    left = mid + 1;
                else
                    right = mid - 1;
            }
        }
        return -1;
    }
};
```

### Conclusion

The above solution effectively searches for a target element in a rotated sorted array with distinct values using the binary search algorithm with $O(log n)$ runtime complexity. It handles all edge cases and constraints specified in the problem statement.
