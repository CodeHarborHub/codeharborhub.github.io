---
id: grumpy-bookstore-owner
title: Grumpy Bookstore Owner
level: medium
sidebar_label: Grumpy Bookstore Owner
tags:
  - Array
  - Sliding Window
  - Greedy
  - Java
  - Python
description: "This document provides solutions for the Grumpy Bookstore Owner problem on LeetCode."
---

## Problem Statement

There is a bookstore owner that has a store open for `n` minutes. Every minute, some number of customers enter the store. You are given an integer array `customers` of length `n` where `customers[i]` is the number of customers that enter the store at the start of the `i`th minute and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy. You are given a binary array `grumpy` where `grumpy[i]` is `1` if the bookstore owner is grumpy during the `i`th minute, and is `0` otherwise.

When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for `minutes` consecutive minutes, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

**Example 1:**

Input: `customers = [1,0,1,2,1,1,7,5]`, `grumpy = [0,1,0,1,0,1,0,1]`, `minutes = 3`
Output: `16`

Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

**Example 2:**

Input: `customers = [1]`, `grumpy = [0]`, `minutes = 1`
Output: `1`

**Constraints:**

- `n == customers.length == grumpy.length`
- `1 <= minutes <= n <= 2 * 10^4`
- `0 <= customers[i] <= 1000`
- `grumpy[i]` is either `0` or `1`.

## Solutions

### Intuition

To maximize the number of satisfied customers, we need to:
1. Calculate the number of satisfied customers when the owner is not grumpy.
2. Use a sliding window to determine the best time to apply the secret technique to maximize the number of satisfied customers.

### Approach

1. **Initial Satisfaction Calculation:**
   - Calculate the total number of customers satisfied when the owner is not grumpy.
   - Use a variable `max_satisfied` to keep track of this initial number.

2. **Sliding Window Technique:**
   - Use a sliding window of size `minutes` to determine the best period to use the secret technique.
   - Calculate the additional customers satisfied within this window.
   - Update the maximum number of satisfied customers based on this calculation.

### Implementation

The provided code effectively implements the sliding window approach. Here's the breakdown:

1. **Initial Satisfaction Calculation:**
   - Traverse the `customers` array and add up customers where `grumpy[i]` is `0`.

2. **Sliding Window:**
   - Maintain a running sum of customers within the current window where `grumpy[i]` is `1`.
   - Slide the window across the array and update the maximum satisfied customers.

### Java 

```java
class Solution {
    public int maxSatisfied(int[] customers, int[] grumpy, int minutes) {
        int base = 0;
        int currentWindow = 0;
        int len = customers.length;
        for(int i = 0; i < len; i++) {
            if(grumpy[i] == 0) base += customers[i];
            else if(i < minutes) currentWindow += customers[i];
        } 
        int maxWindow = currentWindow;
        for(int i = minutes; i < len; i++) {
            currentWindow += (customers[i] * grumpy[i]);
            currentWindow -= (customers[i - minutes] * grumpy[i - minutes]);
            maxWindow = Math.max(currentWindow, maxWindow);
        }
        return maxWindow + base;
    }
}

```

### Python

```Python
class Solution:
    def maxSatisfied(self, customers, grumpy, minutes):
        base = 0
        current_window = 0
        length = len(customers)

        for i in range(length):
            if grumpy[i] == 0:
                base += customers[i]
            elif i < minutes:
                current_window += customers[i]

        max_window = current_window

        for i in range(minutes, length):
            current_window += customers[i] * grumpy[i]
            current_window -= customers[i - minutes] * grumpy[i - minutes]
            max_window = max(current_window, max_window)

        return max_window + base
```

###conclusion

Complexity
Time Complexity: $O(n)$
The algorithm iterates through the array twice (once for the initial satisfaction calculation and once for the sliding window), resulting in a linear time complexity.

Space Complexity: $O(1)$
The algorithm uses a constant amount of extra space for variables like satisfied, additional, and maxAdditional.

