---
id: search-insert-position
title: Search Insert Position
difficulty: Easy
sidebar_label: 0035-SearchInsertPosition
tags:
  - Array
  - Binary Search
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/search-insert-position/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/search-insert-position/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given a sorted array `nums` of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

### Examples

#### Example 1:

- **Input:** 
  - `nums = [1,3,5,6]`
  - `target = 5`
- **Output:** `2`

#### Example 2:

- **Input:** 
  - `nums = [1,3,5,6]`
  - `target = 2`
- **Output:** `1`

#### Example 3:

- **Input:** 
  - `nums = [1,3,5,6]`
  - `target = 7`
- **Output:** `4`

### Constraints

- `1 <= `nums.length` <= 10^4`
- `-10^4 <= `nums[i]` <= 10^4`
- `nums` contains distinct values sorted in ascending order.
- `-10^4 <= `target` <= 10^4`

### Approach

To solve the problem with O(log n) runtime complexity, we can use binary search to find the insertion position of the target value.

1. **Binary Search:**
   - Start with low = 0 and high = length of `nums` - 1.
   - While `low <= high`, compute mid as (low + high) / 2.
   - If the target value is equal to the value at index mid, return mid.
   - If the target value is less than the value at index mid, set high = mid - 1.
   - If the target value is greater than the value at index mid, set low = mid + 1.
   - After the loop, if the target value is not found, return low (or high + 1).

### Solution Code

#### Python

```
class Solution(object):
    def searchInsert(self, nums, target):
        left, right = 0, len(nums) - 1
        
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
                
        return left

```

#### Java

```
class Solution {
    public int searchInsert(int[] nums, int target) {
        int low = 0, high = nums.length - 1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return low;
    }
}
```

#### C++

```
class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;
        
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        
        return low;
    }
};
```

### Conclusion

The above solution efficiently finds the insertion position of a target value in a sorted array using binary search. It achieves a runtime complexity of O(log n), providing an optimal solution to the problem.
