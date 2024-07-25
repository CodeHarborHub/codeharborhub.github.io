---
id: find-minimum-in-rotated-sorted-array
title: Find Minimum in Rotated Sorted Array(LeetCode)
sidebar_label: 0153-Find Minimum in Rotated Sorted Array
tags:
  - Array
  - Binary Search
description: Given the sorted rotated array nums of unique elements, return the minimum element of this array.
---

## Problem Statement

Suppose an array of length `n` sorted in ascending order is rotated between `1` and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become:

`[4,5,6,7,0,1,2]` if it was rotated 4 times.
`[0,1,2,4,5,6,7]` if it was rotated 7 times.
Notice that rotating an array `[a[0], a[1], a[2], ..., a[n-1]]` 1 time results in the array `[a[n-1], a[0], a[1], a[2], ..., a[n-2]]`.

Given the sorted rotated array `nums` of unique elements, return the minimum element of this array.

You must write an algorithm that runs in `O(log n) time`.

### Examples

**Example 1:**

```plaintext
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
```

**Example 2:**

```plaintext
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
```

**Example 3:**

```plaintext
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
```

### Constraints

- `n == nums.length`
- `1 <= n <= 5000`
- `-5000 <= nums[i] <= 5000`
- All the integers of `nums` are unique.
- `nums` is sorted and rotated between `1` and `n` times.

## Solution

This problem aims to find the minimum element in a rotated sorted array. The provided solution uses a binary search approach to efficiently find the minimum element.

### Approach

#### Algorithm

1. Initialize two pointers, `low` at the beginning of the array and `high` at the end of the array.
2. Use a `while` loop with the condition `low < high`:
* Calculate the middle index `mid` as `low + (high - low) / 2`.
* Compare the element at index `mid` with the element at index `high`.
* If `num[mid] < num[high]`, it means the minimum element is in the left part, so update `high = mid`.
* If `num[mid] > num[high]`, it means the minimum element is in the right part, so update `low = mid + 1`.
3. When the `while` loop ends, low will be pointing to the minimum element, so return `num[low]`.

#### Implementation

```C++
class Solution {
public:
    int findMin(vector<int> &num) {
        int low = 0, high = num.size() - 1;
        // loop invariant: 1. low < high
        //                 2. mid != high and thus A[mid] != A[high] (no duplicate exists)
        //                 3. minimum is between [low, high]
        // The proof that the loop will exit: after each iteration either the 'high' decreases
        // or the 'low' increases, so the interval [low, high] will always shrink.
        while (low < high) {
            auto mid = low + (high - low) / 2;
            if (num[mid] < num[high])
                // the mininum is in the left part
                high = mid;
            else if (num[mid] > num[high])
                // the mininum is in the right part
                low = mid + 1;
        }

        return num[low];
    }
};
```

### Complexity Analysis

- **Time complexity**: O(log n)
- **Space complexity**: O(1)

### Conclusion

This algorithm effectively finds the minimum element in a rotated sorted array by using binary search. It maintains the loop invariant that the minimum is between the `low` and `high` indices, and ensures the interval `[low, high]` shrinks in each iteration. This solution is efficient and provides a clear way to handle such problems.
