---
id: search-in-rotated-sorted-array-II
title: Search in Rotated Sorted Array II(LeetCode)
sidebar_label: 0081-Search in Rotated Sorted Array II
tags:
  - Array
  - Binary Search
description: Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
---

## Problem Statement

There is an integer array `nums` sorted in non-decreasing order (not necessarily with distinct values).

Before being passed to your function, `nums` is rotated at an unknown pivot index `k` (`0 <= k < nums.length`) such that the resulting array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]` (0-indexed). For example, `[0,1,2,4,4,4,5,6,6,7]` might be rotated at pivot index 5 and become `[4,5,6,6,7,0,1,2,4,4]`.

Given the array `nums` after the rotation and an integer `target`, return `true` if `target` is in `nums`, or `false` if it is not in `nums`.

You must decrease the overall operation steps as much as possible.

### Examples

**Example 1:**

```plaintext
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
```

**Example 2:**

```plaintext
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
```

### Constraints

- `1 <= nums.length <= 5000`
 `-104 <= nums[i] <= 104`
- `nums` is guaranteed to be rotated at some pivot.
- `-104 <= target <= 104`

## Solution

### Approach 

#### Algorithm

1. Initialization:
* Initialize `left` to 0 and `right` to `nums.size() - 1`.
2. Binary Search Loop:
* While `left` is less than or equal to `right`:
  * Compute `mid` as `(left + right) >> 1`.
  * If `nums[mid]` equals the target, return true.
  * Handle Duplicates: If `nums[left]`, `nums[mid]`, and `nums[right]` are the same, increment `left` and decrement `right`.
  * Check Sorted Halves:
    * If the left half (`nums[left]` to `nums[mid]`) is sorted:
      * If the target is within the range of the left half, adjust `right` to `mid - 1`.
      * Otherwise, adjust `left` to `mid + 1`.
    * Otherwise, the right half (`nums[mid]` to `nums[right]`) must be sorted:
      * If the target is within the range of the right half, adjust `left` to `mid + 1`.
      * Otherwise, adjust `right` to `mid - 1`.
3. Final Check:
* If the loop exits without finding the target, return `false`.

#### Implementation

```C++
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int left = 0, right =  nums.size()-1, mid;
        
        while(left<=right)
        {
            mid = (left + right) >> 1;
            if(nums[mid] == target) return true;

            // the only difference from the first one, trickly case, just updat left and right
            if( (nums[left] == nums[mid]) && (nums[right] == nums[mid]) ) {++left; --right;}

            else if(nums[left] <= nums[mid])
            {
                if( (nums[left]<=target) && (nums[mid] > target) ) right = mid-1;
                else left = mid + 1; 
            }
            else
            {
                if((nums[mid] < target) &&  (nums[right] >= target) ) left = mid+1;
                else right = mid-1;
            }
        }
        return false;
    }
};
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(1)$

### Conclusion

The solution uses a modified binary search to efficiently search for a target value in a rotated sorted array with duplicates. The key steps involve adjusting the search range based on whether the left or right half of the array is sorted, and handling duplicates by narrowing the search range when necessary. The time complexity can degrade to O(n) in the worst case due to duplicates, but the space complexity remains O(1). This approach balances efficiency with the complexity of handling rotated and duplicated elements in the array.
