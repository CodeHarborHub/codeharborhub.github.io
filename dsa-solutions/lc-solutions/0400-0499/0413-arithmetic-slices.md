---
id: arithmetic-slices
title: Arithmetic Slices (LeetCode)
sidebar_label: 0413-Arithmetic Slices
tags:
  - Array
  - Dynamic Programming
description: Given an integer array nums, return the number of arithmetic subarrays of nums.
sidebar_position: 0413
---

## Problem Description

An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.
- For example, `[1,3,5,7,9]`, `[7,7,7,7]`, and `[3,-1,-5,-9]` are arithmetic sequences.

Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

### Example 1

- **Input:** `nums = [1,2,3,4]`
- **Output:** `3`
- **Explanation:** We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.

### Example 2

- **Input:** ` nums = [1]`
- **Output:** `0`

### Constraints

- `1 <= nums.length <= 5000`
- `-1000 <= nums[i] <= 1000`

## Approach
- 1. Initialize Variables: Before looping through the nums, we initialize the ans variable to 0. This variable will accumulate the total count of arithmetic subarrays. We also initialize a cnt variable to 0; it keeps track of consecutive pairs with the same difference. The d variable, which holds the current common difference between pairs, is set to a number outside the valid range (3000) to handle the edge case at the beginning of the array.

- 2. Loop through pairwise(nums): We iterate over each pair (a, b) in pairwise(nums). Here, a and b represent consecutive elements in nums.

- 3. Check the Difference and Update Counter: We compare the difference b - a with the current d. If they're equal, increment cnt by 1, because this extends the current arithmetic subarray sequence by one element. If they're different, update d to the new difference b - a and reset cnt to 0, because we're starting to count a new set of arithmetic subarrays.

- 4. Update the Answer: Add the current cnt to ans in each iteration. By adding cnt, we're accounting for all the new arithmetic subarrays that end at the current element b. The reason adding cnt works is that for each extension of an arithmetic subarray by one element, we introduce exactly cnt new subarrays where cnt is the count of previous consecutive elements that were part of such subarrays.

- 5. Return Result: After the loop completes, ans represents the total number of arithmetic subarrays in nums, which is then returned as the final answer.

### Solution Code

#### Python

```python
from itertools import pairwise

class Solution:
    def numberOfArithmeticSlices(self, nums: List[int]) -> int:
        total_slices = 0 
        current_sequence_length = 0 
        previous_difference = 3000
        for current_num, next_num in pairwise(nums):
            current_difference = next_num - current_num
            if current_difference == previous_difference:
                current_sequence_length += 1
            else:
                previous_difference = current_difference
                current_sequence_length = 0
            total_slices += current_sequence_length
        return total_slices
```

#### C++
```c++
class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& nums) {
        int totalSlices = 0;  
        int currentStreak = 0; 
        int previousDifference = 3000; 
        for (int i = 0; i < nums.size() - 1; ++i) { 
            int currentDifference = nums[i + 1] - nums[i]; 
            if (currentDifference == previousDifference) {
                ++currentStreak;
            } else {
                previousDifference = currentDifference;
                currentStreak = 0;
            }
            totalSlices += currentStreak; 
        }
        return totalSlices; 
    }
};

```

#### Java
```Java
class Solution {
    public int numberOfArithmeticSlices(int[] nums) {
        int arithmeticSliceCount = 0;  
        int currentSliceLength = 0;   
        int difference = 3000;       
        for (int i = 0; i < nums.length - 1; ++i) {
            if (nums[i + 1] - nums[i] == difference) {
                ++currentSliceLength;
            } else {
                difference = nums[i + 1] - nums[i];
                currentSliceLength = 0;
            }
            arithmeticSliceCount += currentSliceLength;
        }
        return arithmeticSliceCount;
    }
}
        
```




#### Conclusion
- Time Complexity
The time complexity is o(n).

- Space Complexity
The space complexity is O(1).
