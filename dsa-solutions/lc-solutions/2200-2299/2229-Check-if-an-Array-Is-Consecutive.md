---
id:  Check-if-an-Array-Is-Consecutive
title:  Check if an Array Is Consecutive
sidebar_label: 2229- Check if an Array Is Consecutive
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given an array of integers. You need to determine if the elements of the array form a consecutive sequence. A sequence is considered consecutive if each number appears exactly once and the difference between the maximum and minimum number in the array is equal to the length of the array minus one.

### Examples

**Example 1:**

Input: `[4, 2, 3, 5, 1]`
Output: `true`
Explanation: The array `[4, 2, 3, 5, 1]` contains all numbers from 1 to 5 without any missing elements. The difference between the maximum (5) and minimum (1) is 4, which equals the length of the array minus one.

**Example 2:**

Input: `[7, 6, 5, 8, 9]`
Output: `true`
Explanation: The array `[7, 6, 5, 8, 9]` contains all numbers from 5 to 9 without any missing elements. The difference between the maximum (9) and minimum (5) is 4, which equals the length of the array minus one.

**Example 3"**

Input: `[1, 2, 4, 5]`
Output: `false`
Explanation: The array `[1, 2, 4, 5]` is not consecutive because the number 3 is missing. The difference between the maximum (5) and minimum (1) is 4, but the length of the array is only 4, so it's not consecutive.


### Constraints

- The array contains distinct integers.
- The length of the array is between 1 and 100,000.

### Approach

To determine if an array is consecutive, follow these steps:

- Find the minimum and maximum values in the array.
- Check if the difference between the maximum and minimum values is equal to the length of the array minus one.
- Use a set to check for uniqueness and presence of all elements between the minimum and maximum values.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <algorithm>
#include <limits.h>

bool isConsecutive(const std::vector<int>& arr) {
    if (arr.empty()) return false;
    int minVal = INT_MAX;
    int maxVal = INT_MIN;
    std::unordered_set<int> uniqueElements;

    for (int num : arr) {
        if (num < minVal) minVal = num;
        if (num > maxVal) maxVal = num;
        uniqueElements.insert(num);
    }

    return (maxVal - minVal == arr.size() - 1) && (uniqueElements.size() == arr.size());
}

int main() {
    std::vector<int> arr1 = {4, 2, 3, 5, 1};
    std::vector<int> arr2 = {1, 2, 4, 5};
    std::cout << (isConsecutive(arr1) ? "true" : "false") << std::endl;  // Output: true
    std::cout << (isConsecutive(arr2) ? "false" : "true") << std::endl;  // Output: false
    return 0;
}


```

### Java Solution

```java
import java.util.HashSet;
import java.util.Set;

public class ConsecutiveArrayCheck {
    public static boolean isConsecutive(int[] arr) {
        if (arr.length == 0) return false;
        int minVal = Integer.MAX_VALUE;
        int maxVal = Integer.MIN_VALUE;
        Set<Integer> uniqueElements = new HashSet<>();
        
        for (int num : arr) {
            if (num < minVal) minVal = num;
            if (num > maxVal) maxVal = num;
            uniqueElements.add(num);
        }
        
        return (maxVal - minVal == arr.length - 1) && (uniqueElements.size() == arr.length);
    }

    // Example usage
    public static void main(String[] args) {
        int[] arr1 = {4, 2, 3, 5, 1};
        int[] arr2 = {1, 2, 4, 5};
        System.out.println(isConsecutive(arr1));  // Output: true
        System.out.println(isConsecutive(arr2));  // Output: false
    }
}

```

### Python Solution

```python
def is_consecutive(arr):
    if not arr:
        return False
    min_val = min(arr)
    max_val = max(arr)
    if max_val - min_val != len(arr) - 1:
        return False
    return len(set(arr)) == len(arr)

# Example usage
print(is_consecutive([4, 2, 3, 5, 1]))  # Output: True
print(is_consecutive([1, 2, 4, 5]))     # Output: False


```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**:for finding the minimum and maximum ,converting the list to a set and checking its length 


### Space Complexity: $O(n)$

> **Reason**: for using a set to store unique elements of the array.


