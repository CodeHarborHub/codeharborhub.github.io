---
id: find-first-and-last-position-of-element-in-sorted-array
title: Find First and Last Position of Element in Sorted Array(LeetCode)
sidebar_label: 0034-Find First and Last Position of Element in Sorted Array
tags:
  - Array
  - Binary Search
description: Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
sidebar_position: 34
---

## Problem Statement

Given an array of integers `nums` sorted in non-decreasing order, find the starting and ending position of a given `target` value.

If `target` is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

### Examples

**Example 1:**

```plaintext
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```plaintext
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

**Example 3:**

```plaintext
Input: nums = [], target = 0
Output: [-1,-1]
```

### Constraints

- `0 <= nums.length <= 105`
- `109 <= nums[i] <= 109`
- `nums` is a non-decreasing array.
- `109 <= target <= 109`

## Solution

When solving the problem of finding the starting and ending position of a target value in a sorted array, we can use 
two main approaches: Linear Search (Brute Force) and Binary Search (Optimized). Below, both approaches are explained along with their time and space complexities.

### Approach 1: Linear Search (Brute Force)

#### Explanation:

1. Traverse the array from the beginning to find the first occurrence of the target.
2. Traverse the array from the end to find the last occurrence of the target.
3. Return the indices of the first and last occurrences.

#### Algorithm

1. Initialize `startingPosition` and `endingPosition` to -1.
2. Loop through the array from the beginning to find the first occurrence of the target and set `startingPosition`.
3. Loop through the array from the end to find the last occurrence of the target and set `endingPosition`.
4. Return `{startingPosition, endingPosition}`.

#### Implementation

```C++
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int startingPosition = -1, endingPosition = -1;
        int n = nums.size();
        for(int i = 0; i < n; i++) {
            if(nums[i] == target) {
                startingPosition = i;
                break;
            }
        }
        for(int i = n - 1; i >= 0; i--) {
            if(nums[i] == target) {
                endingPosition = i;
                break;
            }
        }
        return {startingPosition, endingPosition};
    }
};
```

### Complexity Analysis

- **Time complexity**: O(N), where N is the size of the array. In the worst case, we might traverse all elements of the array.
- **Space complexity**: O(1), as we are using a constant amount of extra space.

### Approach 2: Binary Search (Optimized)

#### Explanation:

1. Use binary search to find the lower bound (first occurrence) of the target.
2. Use binary search to find the upper bound (last occurrence) of the target by searching for the target + 1 and subtracting 1 from the result.
3. Check if the target exists in the array and return the indices of the first and last occurrences.

#### Algorithm

1. Define a helper function `lower_bound` to find the first position where the target can be inserted.
2. Use `lower_bound` to find the starting position of the target.
3. Use `lower_bound` to find the position where `target + 1` can be inserted, then subtract 1 to get the ending position.
4. Check if `startingPosition` is within bounds and equals the target.
5. Return `{startingPosition, endingPosition}` if the target is found, otherwise return `{-1, -1}`.

#### Implementation (First Version)

```C++
class Solution {
private:
    int lower_bound(vector<int>& nums, int low, int high, int target) {
        while(low <= high) {
            int mid = (low + high) >> 1;
            if(nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return low;
    }
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;
        int startingPosition = lower_bound(nums, low, high, target);
        int endingPosition = lower_bound(nums, low, high, target + 1) - 1;
        if(startingPosition < nums.size() && nums[startingPosition] == target) {
            return {startingPosition, endingPosition};
        }
        return {-1, -1};
    }
};
```
#### Implementation (Second Version)

```C++
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int startingPosition = lower_bound(nums.begin(), nums.end(), target) - nums.begin();
        int endingPosition = lower_bound(nums.begin(), nums.end(), target + 1) - nums.begin() - 1;
        if(startingPosition < nums.size() && nums[startingPosition] == target) {
            return {startingPosition, endingPosition};
        }
        return {-1, -1};
    }
};
```

### Complexity Analysis

- **Time complexity**: O(log N), where N is the size of the array. We perform binary search, which has a logarithmic time complexity.
- **Space complexity**: O(1), as we are using a constant amount of extra space.

### Conclusion

1. Linear Search is straightforward but less efficient with a time complexity of O(N).
2. Binary Search is more efficient with a time complexity of O(log N), making it suitable for large datasets.
Both approaches provide a clear way to find the starting and ending positions of a target value in a sorted array, with the Binary Search approach being the
optimized solution.
