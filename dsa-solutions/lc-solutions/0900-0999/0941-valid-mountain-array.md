---
id: valid-mountain-array
title: Valid Mountain Array
level: easy
sidebar_label: Valid Mountain Array
tags:
  - Array
description: "This document provides a solution for the Valid Mountain Array problem."
---

## Problem Statement

Given an array of integers `arr`, return `true` if and only if it is a valid mountain array.

Recall that `arr` is a mountain array if and only if:

- `arr.length >= 3`
- There exists some `i` with `0 < i < arr.length - 1` such that:
  - `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]`
  - `arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`

**Example 1:**

Input: `arr = [2, 1]`

Output: `false`

**Example 2:**

Input: `arr = [3, 5, 5]`

Output: `false`

**Example 3:**

Input: `arr = [0, 3, 2, 1]`

Output: `true`

**Constraints:**

- `1 <= arr.length <= 10^4`
- `0 <= arr[i] <= 10^4`

## Solutions

### Approach

To determine if the given array is a valid mountain array, follow these steps:

1. **Initial Check**: Ensure the length of the array is at least 3.
2. **Increasing Phase**: Traverse the array from the start, checking if each element is less than the next one.
3. **Peak Check**: If the peak is at the beginning or end of the array, it's not a valid mountain.
4. **Decreasing Phase**: Continue traversing from the peak, checking if each element is greater than the next one.
5. **Final Check**: Ensure that the entire array was traversed.

### Java

```java
class Solution {
    public boolean validMountainArray(int[] arr) {
        int len = arr.length;
        if (len < 3) {
            return false;
        }

        boolean flag = true;
        for (int i = 0; i < len - 1; i++) {
            if (arr[i] == arr[i + 1]) {
                return false;
            }
            if (flag && arr[i + 1] < arr[i]) {
                if (i == 0) return false;
                flag = false;
            }
            if (!flag && arr[i] < arr[i + 1]) {
                return false;
            }
        }
        if (flag) {
            return false;
        }
        return true;
    }
}

```

### Python

```Python
class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        length = len(arr)
        if length < 3:
            return False

        flag = True
        for i in range(length - 1):
            if arr[i] == arr[i + 1]:
                return False
            if flag and arr[i + 1] < arr[i]:
                if i == 0:
                    return False
                flag = False
            if not flag and arr[i] < arr[i + 1]:
                return False

        if flag:
            return False

        return True
```
