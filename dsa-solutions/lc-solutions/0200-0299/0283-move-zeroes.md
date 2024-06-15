---
id: move-zeroes
title: Move Zeroes(LeetCode)
sidebar_label: 0283-Move Zeroes
tags:
  - Array
  - Two Pointers
description: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
---

## Problem Statement

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

### Examples

**Example 1:**

```plaintext
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```plaintext
Input: nums = [0]
Output: [0]
```

### Constraints

- `1 <= nums.length <= 104`
- `231 <= nums[i] <= 231 - 1`

## Solution

### Explanation
The algorithm employs a two-pointer approach with a `slow` pointer and a `fast` pointer to achieve this task efficiently.

1. Initialization:
* Initialize the `slow` pointer to 0. The `slow` pointer will track the position to place the next non-zero element.
* The `fast` pointer will traverse the entire array.
2. Traversal:
* Iterate through the array using the `fast` pointer.
* For each element:
  * If `nums[fast]` is not zero and `nums[slow]` is zero, swap the elements at the `slow` and `fast` pointers.
  * Increment the `slow` pointer if it points to a non-zero element.
3. Swapping:
* This swapping ensures that all non-zero elements are moved to the front of the array, and the zeros are moved to the back.

### Algorithm

1. Initialize the `slow` pointer to 0.
2. Iterate through the array with the `fast` pointer from index 0 to the end of the array:
* If `nums[fast]` is not zero and `nums[slow]` is zero:
  * Swap `nums[slow]` and `nums[fast]`.
* If `nums[slow]` is not zero, increment the `slow` pointer.

### Implementation

```Python
class Solution:
    def moveZeroes(self, nums: list) -> None:
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != 0 and nums[slow] == 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]

            # wait while we find a non-zero element to
            # swap with you
            if nums[slow] != 0:
                slow += 1
```

### Complexity Analysis

- **Time complexity**: O(n), where n is the number of elements in the array. Each element is processed once by the `fast` pointer.
- **Space complexity**: O(1), as the operations are performed in-place without using extra space.

### Conclusion

This approach ensures that all the zeros in the array are moved to the end while maintaining the order of the non-zero elements. The in-place operations guarantee an O(1) space complexity, and each element is processed only once, resulting in an O(n) time complexity. This solution is optimal and efficient for the given problem.
