---
id: check-if-point-is-reachable
title: Check if Point is Reachable
sidebar_label: 2543 Check if Point is Reachable
tags:
  - Number Theory
  - Java
  - gcd
  - Math
description: "This document provides a solution where we need to reach the point (targetX, targetY) using a finite number of steps."
---

## Problem

There exists an infinitely large grid. You are currently at point $(1, 1)$, and you need to reach the point $(targetX, targetY)$ using a finite number of steps.

In one Step, you can move from point $(x, y)$ to any one of the following points:

- $(x, y - x)$

- $(x - y, y)$

- $(2 * x, y)$

- $(x, 2 * y)$

Given two integers $targetX$ and $targetY$ representing the X-coordinate and Y-coordinate of your final position, return $true$ if you can reach the point from $(1, 1)$ using some number of steps, and $false$ otherwise.

### Examples

**Example 1:**

```
Input: targetX = 6, targetY = 9

Output: false

Explanation: It is impossible to reach (6,9) from (1,1) using any sequence of moves, so false is returned.

```

**Example 2:**

```
Input: targetX = 4, targetY = 7

Output: true

Explanation: You can follow the path (1,1) -> (1,2) -> (1,4) -> (1,8) -> (1,7) -> (2,7) -> (4,7).

```

### Constraints

- `1 <= targetX, targetY <= 10^9`

---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. $(x, y - x)$

2. $(x - y, y)$

3. $(2 * x, y)$

4. $(x, 2 * y)$

These moves suggest that if we can reach a certain point **'(x, y)'**, we can generate other points by specific transformations. By analyzing the moves:

- The first two moves involve subtraction, reducing one coordinate.

- The last two moves involve multiplication by $2$.

We can reverse the logic to check whether we can reach $(1, 1)$ from $(targetX, targetY)$. This reversal involves:

- Checking if $targetX$ or $targetY$ can be divided by $2$ (to reverse the multiplication).

- Checking if one coordinate can be reduced by subtracting the other.

By reversing the operations, we trace the problem back to whether $(targetX, targetY)$ can be reduced to $(1, 1)$.

The key insight here is that we only need to check if **'gcd(targetX, targetY)'** is a power of $2$. This is because if both $targetX$ and $targetY$ share a common factor other than $2$, it won't be possible to reach $(1, 1)$.

## Solution for Check if Point is Reachable

The given problem involves reaching a target point $(targetX, targetY)$ from the starting point $(1, 1)$ using a set of allowed moves. The challenge is to determine whether it's possible to reach the target using these moves.

#### Code in Java

```java
class Solution {
 public boolean isReachable(int targetX, int targetY) {
   return Integer.bitCount(gcd(targetX, targetY)) == 1;
 }

 private int gcd(int a, int b) {
   return b == 0 ? a : gcd(b, a % b);
 }
}

```

### Complexity Analysis

#### Time Complexity: $O(log(min(targetX, targetY)))$

> **Reason**: Calculating the gcd of two numbers takes $O(log(min(targetX, targetY)))$ time using the Euclidean algorithm.

#### Space Complexity: $O(1)$

> **Reason**: The space complexity is $O(1)$ since we are using a constant amount of extra space for computation (ignoring the space used by the recursive stack of the gcd function, which is logarithmic in terms of the depth of the recursion).

# References

- **LeetCode Problem:** [Check if Point is Reachable](https://leetcode.com/problems/check-if-point-is-reachable/description/)
- **Solution Link:** [Check if Point is Reachable Solution on LeetCode](https://leetcode.com/problems/check-if-point-is-reachable/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
