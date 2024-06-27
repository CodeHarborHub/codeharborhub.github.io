---
id: two-sum-II-input-array-is-sorted
title: Two Sum II - Input Array Is Sorted(LeetCode)
sidebar_label: 0167-Two Sum II - Input Array Is Sorted
tags:
  - Array
  - Two Pointers
  - Binary Search
description: Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
---

## Problem Statement

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index1]` and `numbers[index2]` where `1 <= index1 < index2 <= numbers.length`.

Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

### Examples

**Example 1:**

```plaintext
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

**Example 2:**

```plaintext
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

**Example 3:**

```plaintext
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

### Constraints

- `2 <= numbers.length <= 3 * 104`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in non-decreasing order.
- `-1000 <= target <= 1000`
- The tests are generated such that there is exactly one solution.

## Solution

### Approach 

The approach to this problem leverages the fact that the array is sorted, which allows for a more efficient solution compared to the classic Two Sum problem. By utilizing two pointers, we can efficiently search for the target sum.

Key Observations
1. Smaller sums: Smaller sums can be found towards the left half of the array.
2. Larger sums: Larger sums can be found towards the right half of the array.
With this in mind, we can use two pointers starting at the endpoints of the array and adjust them based on the current sum compared to the target.

#### Algorithm

1. Initialization:
* Set two pointers, l at the beginning of the array and r at the end of the array.
2. Iterate through the array:
* Calculate the sum of the elements at the two pointers.
* If the sum is equal to the target, return the indices.
* If the sum is less than the target, increment the left pointer (l).
* If the sum is greater than the target, decrement the right pointer (r).
3. End Condition:
* The loop continues until the sum of the elements at the two pointers equals the target, ensuring the correct indices are found.

#### Implementation

```Java
public int[] twoSum(int[] nums, int target) {
    int l = 0, r = nums.length - 1;
    
    while (nums[l] + nums[r] != target) {
        if (nums[l] + nums[r] < target) l++;
        else r--;
    }

    return new int[] {l + 1, r + 1}; // Return 1-based indices
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
    * The while loop runs in linear time as each iteration moves one of the pointers closer to the middle of the array.
- **Space complexity**: $O(1)$
    * No extra space is used, making the space complexity constant.

### Conclusion

This solution efficiently finds the two numbers in a sorted array that add up to a given target by using a two-pointer approach. The method leverages the sorted property of the array, ensuring an optimal solution with linear time complexity and constant space complexity. This approach is particularly useful in interviews when dealing with sorted arrays, showcasing an understanding of efficient searching techniques and array manipulation.
