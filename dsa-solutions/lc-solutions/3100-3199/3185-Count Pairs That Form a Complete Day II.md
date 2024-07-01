---
id: 3185-Count-Pairs-That-Form-a-Complete-Day-II
title: Count Pairs That Form a Complete Day II
sidebar_label: Count Pairs That Form a Complete Day II
tags:
  - Bit Manipulation
  - C++
  - Java
  - Python
description: "This document provides solutions for finding the maximum total reward using dynamic programming and bit manipulation, implemented in C++, Java, and Python."
---

## Problem

Given an integer array hours representing times in hours, return an integer denoting the number of pairs i, j where i < j and hours[i] + hours[j] forms a complete day.
A complete day is defined as a time duration that is an exact multiple of 24 hours.
For example, 1 day is 24 hours, 2 days is 48 hours, 3 days is 72 hours, and so on.

## Solution

Use hours % 24 to get the remainder of each hour value when divided by 24. Then, calculate the complement of the remainder by subtracting it from 24.

## Code in Different Languages

### Python

```python
class Solution:
    def countCompleteDayPairs(self, h: List[int]) -> int:
        rc = [0] * 24
        count = 0
        for hour in h:
            r = hour % 24
            c = (24 - r) % 24
            count += rc[c]
            rc[r] += 1
        return count
```

# Complexity Analysis

## Time Complexity:

$O(n \times k)$, where hour is the number of reward values and k is the maximum possible reward value. Sorting the reward values takes O(n log n) time, and each bit manipulation operation is efficient.

## Space Complexity:

$O(n log n)$
Reason: hours % 24 will have at most 24 different values, so the size of the rc array is constant.
