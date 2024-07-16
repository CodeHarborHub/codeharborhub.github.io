---
id: maximum-of-minimum-values-in-all-subarrays
title: Maximum of Minimum Values in All Subarrays
sidebar_label: 1950-maximum-of-minimum-values-in-all-subarrays
tags:
- Stack
- Array
- Monotonic Stack
description: "This document provides solutions for maximum of minimum values in all subarrays."
---

## Problem

You are given an integer array nums of size n. You are asked to solve n queries for each integer `i` in the range `0 <= i < n`.

To solve the ith query:

  1- Find the minimum value in each possible subarray of size `i + 1` of
     the array nums.
  2-  Find the maximum of those minimum values. This maximum is the
      answer to the query.

Return a `0-indexed` integer array ans of size n such that `ans[i]` is the answer to the `ith query`.

A subarray is a contiguous sequence of elements in an array.

### Examples

**Example 1:**

`Input: nums = [0,1,2,4]
Output: [4,2,1,0]
Explanation:
i=0:
- The subarrays of size 1 are [0], [1], [2], [4]. The minimum values are 0, 1, 2, 4.
- The maximum of the minimum values is 4.
i=1:
- The subarrays of size 2 are [0,1], [1,2], [2,4]. The minimum values are 0, 1, 2.
- The maximum of the minimum values is 2.
i=2:
- The subarrays of size 3 are [0,1,2], [1,2,4]. The minimum values are 0, 1.
- The maximum of the minimum values is 1.
i=3:
- There is one subarray of size 4, which is [0,1,2,4]. The minimum value is 0.
- There is only one value, so the maximum is 0.`

**Example 2:**

`Input: nums = [10,20,50,10]
Output: [50,20,10,10]
Explanation:
i=0:
- The subarrays of size 1 are [10], [20], [50], [10]. The minimum values are 10, 20, 50, 10.
- The maximum of the minimum values is 50.
i=1:
- The subarrays of size 2 are [10,20], [20,50], [50,10]. The minimum values are 10, 20, 10.
- The maximum of the minimum values is 20.
i=2:
- The subarrays of size 3 are [10,20,50], [20,50,10]. The minimum values are 10, 10.
- The maximum of the minimum values is 10.
i=3:
- There is one subarray of size 4, which is [10,20,50,10]. The minimum value is 10.
- There is only one value, so the maximum is 10.`

### Constraints

- `n == nums.length`
- `1 <= n <= 10^5`
- `0 <= nums[i] <= 109`.

---

## Approach

The implementation of the solution involves a single pass algorithm using the concept of Monotonic Stacks for finding the next smaller elements on both left and right sides for each element in the input array nums. This is essential in determining the maximum minimum for different subarray sizes.

Here's a step-by-step walkthrough of the solution:

    Initialize two arrays left and right with lengths equal to that of nums. Set all values in left to -1 and in right to n, where n is the size of nums. Also, create an empty list stk to be used as our Monotonic Stack.

    Iterate through nums from left to right (using index i):
        Pop elements from the stack stk while the top of the stack is greater than or equal to the current element nums[i].
        If stk is not empty after popping elements, it means stk[-1] is the previous smaller element's index, which we assign to left[i].
        Push the current index i onto stk, indicating that we are considering nums[i] for the next elements' previous smaller check.

    Reset the stack stk and perform a similar process from right to left (using a decreasing index i):
        Pop elements while the top of the stack is greater than or equal to nums[i].
        If stk is not empty after the popping process, the top element of stk is the next smaller element's index, which we assign to right[i].
        Push the current index i onto stk.

    After constructing left and right arrays, initialize the answer array ans with zeros, with the same size as nums.

    For every index i in nums, calculate the width m as the number of subarrays where nums[i] is the minimum by right[i] - left[i] - 1, and update ans[m - 1] with the maximum of its current value and nums[i].

    Iterate through ans in reverse (starting from second to last element), making sure each ans[i] is at least as large as ans[i + 1]. This step ensures the answers are correct and handle the case where a smaller subarray may have the same maximum minimum as a larger subarray.


## Solution for Maximum of Minimum Values in All Subarrays

### Java Solution

```java
public class Solution {

    public int[] findMaximums(int[] nums) {

        int n = nums.length;

        // Initialize arrays to keep track of the left and right boundaries

        int[] leftBoundaries = new int[n];

        int[] rightBoundaries = new int[n];

        // Fill the arrays with initial values indicating no boundary found yet

        Arrays.fill(leftBoundaries, -1);

        Arrays.fill(rightBoundaries, n);
        // Stack to keep track of indices for which we haven't found a smaller number yet

        Deque<Integer> stack = new ArrayDeque<>();
        // Iterating from left to right to compute left boundaries

        for (int i = 0; i < n; ++i) {

            // Pop elements from the stack that are greater or equal to the current element

            while (!stack.isEmpty() && nums[stack.peek()] >= nums[i]) {

                stack.pop();

            }

            // If stack is not empty, the current top is the closest left smaller element

            if (!stack.isEmpty()) {

                leftBoundaries[i] = stack.peek();

            }

            // Push the current index onto the stack

            stack.push(i);

        }
        // Clear the stack for the next iteration

        stack.clear();

        // Iterating from right to left to compute right boundaries

        for (int i = n - 1; i >= 0; --i) {

            // Pop elements from the stack that are greater or equal to the current element

            while (!stack.isEmpty() && nums[stack.peek()] >= nums[i]) {

                stack.pop();

            }

            // If stack is not empty, the current top is the closest right smaller element

            if (!stack.isEmpty()) {

                rightBoundaries[i] = stack.peek();

            }

            // Push the current index onto the stack

            stack.push(i);

        }

      

        // Initialize the result array

        int[] result = new int[n];

        // Find the maximum value for every possible window size

        for (int i = 0; i < n; ++i) {

            int windowSize = rightBoundaries[i] - leftBoundaries[i] - 1;

            result[windowSize - 1] = Math.max(result[windowSize - 1], nums[i]);

        }

        // Iterate to ensure each element represents the maximum for window size >= i+1

        for (int i = n - 2; i >= 0; --i) {

            result[i] = Math.max(result[i], result[i + 1]);

        }

        // Return the filled in result array

        return result;

    }

}
```
### C++ solution

```cpp
#include <vector>
#include <stack>
using std::vector;
using std::stack;
using std::max;
class Solution {
public:

    // Function to find the maximums of subarrays of all possible sizes

    vector<int> findMaximums(vector<int>& nums) {

        int n = nums.size();
        // Vectors to store indices of previous and next smaller elements

        vector<int> left(n, -1);

        vector<int> right(n, n);

        // Stack to keep track of indices as we search for smaller elements

        stack<int> stk;
        // Calculate the previous smaller element for each element in nums

        for (int i = 0; i < n; ++i) {

            // Pop elements from the stack until the current element is greater

            while (!stk.empty() && nums[stk.top()] >= nums[i]) {

                stk.pop();

            }

            // If the stack isn't empty, set the left bound

            if (!stk.empty()) {

                left[i] = stk.top();

            }

            // Push the current index onto the stack

            stk.push(i);

        }
        // Clear the stack to reuse it for the next smaller elements on the right

        stk = stack<int>();
        // Calculate the next smaller element for each element in nums
        for (int i = n - 1; i >= 0; --i) {

            // Pop elements from the stack until the current element is greater

            while (!stk.empty() && nums[stk.top()] >= nums[i]) {

                stk.pop();

            }

            // If the stack isn't empty, set the right bound

            if (!stk.empty()) {

                right[i] = stk.top();

            }

            // Push the current index onto the stack

            stk.push(i);

        }
        // Vector to store the maximums of subarrays of all possible sizes

        vector<int> maxSubarraySizes(n);
             // Find the maximum element seen for each subarray size

        for (int i = 0; i < n; ++i) {

            // Calculate the size of the largest window that the current element can be the minimum

            int windowSize = right[i] - left[i] - 1;

            // Update the maximum value for this window size if the current element is larger

            maxSubarraySizes[windowSize - 1] = max(maxSubarraySizes[windowSize - 1], nums[i]);

        }
        // Ensure the maximum value for each size is at least as large as for the size above

        for (int i = n - 2; i >= 0; --i) {

            maxSubarraySizes[i] = max(maxSubarraySizes[i], maxSubarraySizes[i + 1]);

        }
        // Return the vector of maximums

        return maxSubarraySizes;

    }

};

```
### Python Solution

```python
from typing import List
class Solution:

    def findMaximums(self, nums: List[int]) -> List[int]:

        n = len(nums)

        # Initialize the left boundary for each element's minimum window

        left_boundaries = [-1] * n

        # Initialize the right boundary for each element's minimum window

        right_boundaries = [n] * n

        stack = []
        # Determine the previous less element for each number in nums

        for index, value in enumerate(nums):

            # Pop elements from the stack if the current value is less or equal

            while stack and nums[stack[-1]] >= value:

                stack.pop()

            # Set the left boundary if there is a previous less element

            if stack:

                left_boundaries[index] = stack[-1]

            stack.append(index)
        # Reset the stack for determining next less element

        stack = []
        # Determine the next less element for each number in nums

        for index in range(n - 1, -1, -1):

            # Pop elements from the stack if the current number is less or equal

            while stack and nums[stack[-1]] >= nums[index]:

                stack.pop()

            # Set the right boundary if there is a next less element

            if stack:

                right_boundaries[index] = stack[-1]

            stack.append(index)
        # Initialize the result array to store the maximums for each window size

        results = [0] * n

        # Update results array with the maximum values for each window size

        for index in range(n):

            window_size = right_boundaries[index] - left_boundaries[index] - 1

            results[window_size - 1] = max(results[window_size - 1], nums[index])

        # Propagate the maximums for larger window sizes

        for index in range(n - 2, -1, -1):

            results[index] = max(results[index], results[index + 1]) 

        return results
```
### Complexity Analysis
**Time Complexity:** O(n)

**Space Complexity:** O(n)

### References
**LeetCode Problem:** Maximum of Minimum Values in All Subarrays


