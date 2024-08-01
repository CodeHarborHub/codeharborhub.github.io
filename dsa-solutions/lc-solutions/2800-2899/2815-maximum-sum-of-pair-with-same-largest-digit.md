---
id: maximum-sum-of-pair-with-same-largest-digit
title: Maximum Sum of a Pair with the Same Largest Digit
sidebar_label: Maximum Sum of a Pair with the Same Largest Digit
tags:
  - Array
  - LeetCode
  - Python
description: "This is a solution to the Maximum Sum of a Pair with the Same Largest Digit problem."
---

## Problem Description

You are given an integer array `nums`. You have to find the maximum sum of a pair of numbers from `nums` such that the largest digit in both numbers is equal.

For example, 2373 is made up of three distinct digits: 2, 3, and 7, where 7 is the largest among them.

Return the maximum sum or -1 if no such pair exists.

### Examples

**Example 1:**

```
Input: nums = [112,131,411]
Output: -1
Explanation: Each number's largest digit in order is [2, 3, 4]. No pairs have the same largest digit.
```

**Example 2:**

```
Input: nums = [2536, 1613, 3366, 162]
Output: 5902
Explanation: All the numbers have 6 as their largest digit, so the answer is 2536 + 3366 = 5902.
```

**Example 3:**

```
Input: nums = [51, 71, 17, 24, 42]
Output: 88
Explanation: The largest digits are [5, 7, 7, 4, 4]. We have two pairs: 71 + 17 = 88 and 24 + 42 = 66. The maximum sum is 88.
```

### Constraints

- The number of elements in `nums` is in the range `[2, 100]`.
- Each number in `nums` is a positive integer with value in the range `[1, 10^4]`.

### Approach

To solve this problem, we will:
1. Determine the largest digit for each number in the array.
2. Group numbers based on their largest digit.
3. For each group, find the pair with the maximum sum if the group contains at least two numbers.
4. Return the highest sum found or -1 if no valid pair exists.

#### Code in Python

```python
class Solution:
    def maxSum(self, nums):
        from collections import defaultdict

        def largest_digit(num):
            return max(int(d) for d in str(num))

        digit_to_numbers = defaultdict(list)

        for num in nums:
            ld = largest_digit(num)
            digit_to_numbers[ld].append(num)

        max_sum = -1

        for numbers in digit_to_numbers.values():
            if len(numbers) > 1:
                numbers.sort(reverse=True)
                max_sum = max(max_sum, numbers[0] + numbers[1])

        return max_sum

```

### Explanation

1. **Helper Function `largest_digit(num)`**: This function identifies the largest digit in a given number by converting it to a string and finding the maximum digit.
2. **Grouping Numbers**: We use a `defaultdict` to group numbers by their largest digit.
3. **Finding the Maximum Sum**: We sort each group and check for pairs, computing the sum of the two largest numbers in each group. We track the maximum sum encountered.
4. **Result**: The function returns the highest sum of pairs or -1 if no such pairs exist.

This approach ensures efficient calculation of the required maximum sum while handling the constraints effectively.
