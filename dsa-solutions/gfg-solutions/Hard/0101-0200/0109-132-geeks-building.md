---
id: 132-geeks-building
title: 132-Geeks-Building (Geeks for Geeks)
sidebar_label: 132-Geeks-Building
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the 132-Geeks-Building problem on Geeks for Geeks."
---

## Problem Description

There are N buildings in Linear Land. They appear in a linear line one after the other and their heights are given in the array arr[]. Geek wants to select three buildings in Linear Land and remodel them as recreational spots. The third of the selected building must be taller than the first and shorter than the second.

## Examples

**Example 1:**
**Input:**` N = 6 ,  arr[] = {4, 7, 11, 5, 13, 2}`
**Output:** True
**Explanation:** `[4, 7, 5]` fits the condition. 

**Example 2**
**Input:** `N = 4 , arr[] = {11, 11, 12, 9}`
**Output:** False
**Explanation:** No 3 buildings fit the given condition. 

## Your Task

You don't need to read input or print anything. Complete the function recreationalSpot() which takes the array arr[] and its size N as input parameters and returns a boolean value based on whether his building selection was successful or not.
Note: The generated output will be "True" or "False".

Expected Time Complexity:  $O(N)$.
Expected Auxiliary Space: $O(N)$.

## Constraints

- `1 ≤ N ≤ 104`
- `1 ≤ arr[i] ≤ 105`

## Problem Explanation

Here's the step-by-step breakdown of the 132-Geeks-Building process:

Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

Return true if there is a 132 pattern in nums, otherwise, return false.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        stack, third = [], float('-inf')
        
        for num in reversed(nums):
            if num < third:
                return True
            while stack and stack[-1] < num:
                third = stack.pop()
            stack.append(num)
        return False
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
class Solution {
public:
    bool find132pattern(vector<int>& nums) {
        stack<int> s;
        int third = INT_MIN;

        for (int i = nums.size() - 1; i >= 0; i--) {
            if (nums[i] < third) return true;
            while (!s.empty() && s.top() < nums[i]) {
                third = s.top();
                s.pop();
            }
            s.push(nums[i]);
        }
        return false;
    }
};
  ```
  </TabItem>
</Tabs>

## Solution Logic

**Initialization:** Declare a stack s to keep track of potential nums[j] and nums[k] values.
Initialize an integer third to INT_MIN to represent nums[k] in the 132 pattern.

**Iterate Backwards:** Iterate through the array nums from right to left (from the last element to the first).
This reverse iteration helps in maintaining the order i < j < k since we are essentially finding potential nums[k] values first and then checking for a valid nums[i].

**Check for Valid Pattern:** For each element nums[i], check if nums[i] is less than third. If this condition is true, it indicates a valid 132 pattern because nums[i] < nums[k] where nums[k] = third.
If nums[i] < third, return true.

**Update the Third Element:** If the stack is not empty and the top element of the stack is less than the current nums[i], pop elements from the stack and update third with the popped elements.
This step ensures that third always holds the maximum possible value of nums[k] which is less than some previous nums[j].

**Push Current Element onto Stack:** Push the current element nums[i] onto the stack.
This maintains the potential candidates for nums[j] in future iterations.

**Return Result:** If the loop completes without finding any valid 132 pattern, return false.

## Time Complexity

 $O(N)$.

## Space Complexity

 $O(N)$.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/132-geeky-buildings--141631/1)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/132-pattern/solutions/4107421/99-35-stack-left-approach-binary-search/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
