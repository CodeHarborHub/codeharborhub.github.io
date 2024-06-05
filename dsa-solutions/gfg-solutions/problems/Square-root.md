---
id: Find-the-square-root
title: Find the Square Root (Geeks for Geeks)
sidebar_label: Find the Square Root
tags:
  - Beginner
  - Math
  - Binary Search
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Find the Square Root problem on Geeks for Geeks."
---

## Problem Description

Given an integer x, find the square root of x. If x is not a perfect square, then return the floor value of √x.

## Examples

**Example 1:**
```
Input: x = 4
Output: 2
```

**Example 2:**
```
Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we want the floor value, it is 2.
```

## Your Task

Your task is to complete the function `sqrt()`, which takes an integer x as an argument and returns the floor value of its square root.

Expected Time Complexity: $O(log x)$.
Expected Auxiliary Space: $O(1)$.

## Constraints

- $0 <= x <= 10^9$

## Problem Explanation

Here's the step-by-step breakdown of finding the square root:

1. **Initialize low and high**: Initialize two variables, low and high, to 0 and x, respectively.
2. **Binary Search**: Perform binary search within the range [0, x].
3. **Calculate mid**: Calculate the mid-point of the range.
4. **Check square**: If mid*mid is equal to x, return mid. If mid*mid is less than x, move to the right half. Otherwise, move to the left half.
5. **Return floor value**: Continue until the range is exhausted. The low value will give the floor of the square root.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  def sqrt(x):
      if x == 0 or x == 1:
          return x
      
      low, high = 0, x
      while low <= high:
          mid = (low + high) // 2
          
          # If mid is the perfect square root
          if mid * mid == x:
              return mid
          
          # Since we need floor, we update answer when mid*mid is less than x
          if mid * mid < x:
              low = mid + 1
              ans = mid
          else:
              high = mid - 1
      return ans
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  using namespace std;

  int sqrt(int x) {
      if (x == 0 || x == 1) return x;

      int low = 0, high = x, ans = 0;
      while (low <= high) {
          int mid = low + (high - low) / 2;
          
          // If mid is the perfect square root
          if (mid*mid == x)
              return mid;
          
          // Since we need floor, we update answer when mid*mid is less than x
          if (mid*mid < x) {
              low = mid + 1;
              ans = mid;
          } else {
              high = mid - 1;
          }
      }
      return ans;
  }
  ```
  </TabItem>
</Tabs>

## Solution Logic

1. **Initialize low and high**: Set low to 0 and high to x.
2. **Binary Search**: Use a binary search approach to find the square root.
3. **Calculate mid**: Compute the mid-point of the current range.
4. **Check square**: If mid squared equals x, return mid. If mid squared is less than x, search the right half. Otherwise, search the left half.
5. **Return floor value**: Continue the search until low exceeds high. Return the latest computed mid that satisfies the condition as the floor of the square root.

## Time Complexity

$O(log x)$, where x is the input number. The binary search approach reduces the search space logarithmically.

## Space Complexity

$O(1)$, constant space complexity. The algorithm uses a fixed amount of extra space regardless of the input size.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/square-root-of-an-integer/)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/sqrtx/)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.