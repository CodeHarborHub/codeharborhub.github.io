---
id: reducing-dishes
title: Reducing Dishes
sidebar_label: 1402-Reducing-Dishes
tags:
 - Arrays
 - Dynamic Programming
 - Sorting
 - C++
 - Java
 - Python
description: "This document provides a solution to the Reducing Dishes problem, where we need to maximize the sum of the satisfaction of dishes."
---

## Problem

A chef has collected data on the satisfaction level of his `n` dishes. Chef can cook any dish in 1 unit of time. Each dish takes `1` unit of time to cook.

The chef has a choice to skip or cook the dish. He wants to maximize the sum of the satisfaction he gets from all the dishes he decides to cook. The satisfaction of a dish is defined as the sum of its satisfaction times its cooking time.

Return the maximum sum of satisfaction the chef can obtain.

### Examples

**Example 1:**

Input: satisfaction = [-1,-8,0,5,-9]  
Output: 14  
Explanation: After removing the negative dishes, the remaining dishes are [0, 5].  
              The optimal solution is to cook dish 0 at time 1 (0 * 1 = 0) and cook dish 5 at time 2 (5 * 2 = 10).  
              The total satisfaction is 0 + 10 + 5 = 14.

**Example 2:**

Input: satisfaction = [4,3,2]  
Output: 20  
Explanation: The optimal solution is to cook all dishes in order.  
              The total satisfaction is 4 * 1 + 3 * 2 + 2 * 3 = 20.

**Example 3:**

Input: satisfaction = [-1,-4,-5]  
Output: 0  
Explanation: The chef does not cook any dishes since all the satisfaction levels are negative.

### Constraints

- `n == satisfaction.length`
- `1 <= n <= 500`
- `-10^3 <= satisfaction[i] <= 10^3`

### Approach

To maximize the sum of satisfaction, we can sort the satisfaction array in ascending order. We will then iterate from the end of the sorted list towards the beginning, keeping a running total of the current satisfaction sum. We add to our result only if the current total is positive.

The detailed steps are:

1. Sort the satisfaction array.
2. Initialize `total` and `current` sums to 0.
3. Traverse the array from the end to the beginning, updating `current` sum and checking if adding the current element increases the `total`.
4. Return the maximum `total`.

### Solution

#### Code in Different Languages

### C++ Solution
```cpp
#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

int maxSatisfaction(vector<int>& satisfaction) {
    sort(satisfaction.begin(), satisfaction.end());
    int total = 0, current = 0;
    for (int i = satisfaction.size() - 1; i >= 0; --i) {
        current += satisfaction[i];
        if (current > 0) {
            total += current;
        } else {
            break;
        }
    }
    return total;
}

int main() {
    vector<int> satisfaction = {-1, -8, 0, 5, -9};
    cout << maxSatisfaction(satisfaction) << endl;  // Output: 14
}
```
### Java Solution
```java
import java.util.Arrays;

public class ReducingDishes {
    public static int maxSatisfaction(int[] satisfaction) {
        Arrays.sort(satisfaction);
        int total = 0, current = 0;
        for (int i = satisfaction.length - 1; i >= 0; --i) {
            current += satisfaction[i];
            if (current > 0) {
                total += current;
            } else {
                break;
            }
        }
        return total;
    }

    public static void main(String[] args) {
        int[] satisfaction = {-1, -8, 0, 5, -9};
        System.out.println(maxSatisfaction(satisfaction));  // Output: 14
    }
}
```
### Python Solution

```python
def maxSatisfaction(satisfaction):
    satisfaction.sort()
    total, current = 0, 0
    for i in range(len(satisfaction) - 1, -1, -1):
        current += satisfaction[i]
        if current > 0:
            total += current
        else:
            break
    return total

# Test
satisfaction = [-1, -8, 0, 5, -9]
print(maxSatisfaction(satisfaction))  # Output: 14
```
### Complexity Analysis
**Time Complexity:** O(n log n)

>Reason: Sorting the array takes O(n log n) time, and traversing the array takes O(n) time.

**Space Complexity:** O(1)

>Reason: We use a constant amount of extra space.

This solution sorts the satisfaction array and then iterates through it in reverse to calculate the maximum sum of satisfaction. The time complexity is dominated by the sorting step, and the space complexity is constant.

### References
**LeetCode Problem:** Reducing Dishes