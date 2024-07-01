---
id: height-checker
title: Height Checker
sidebar_label: 1051-height-checker
tags:
- Array
- Sorting
- Counting Sort
description: "Given an array heights, return the number of indices where heights[i] != expected[i]."
---

## Problem Description

A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array `expected` where `expected[i]` is the expected height of the ith student in line.

You are given an integer array `heights` representing the current order that the students are standing in. Each `heights[i]` is the height of the ith student in line (0-indexed).

Return the number of indices where `heights[i]` != `expected[i]`.

### Examples

**Example 1:**
```
Input: heights = [1,1,4,2,1,3]  
Output: 3  
Explanation: 
heights:  [1,1,4,2,1,3]  
expected: [1,1,1,2,3,4]  
Indices 2, 4, and 5 do not match.
```
**Example 2:**
```
Input: heights = [5,1,2,3,4]  
Output: 5  
Explanation: 
heights:  [5,1,2,3,4]  
expected: [1,2,3,4,5]  
All indices do not match.
```
**Example 3:**
```
Input: heights = [1,2,3,4,5]  
Output: 0  
Explanation: 
heights:  [1,2,3,4,5]  
expected: [1,2,3,4,5]  
All indices match.
```
### Constraints

- `1 <= heights.length <= 100`
- `1 <= heights[i] <= 100`

## Approach

To determine the number of indices where the elements in the `heights` array do not match the elements in the `expected` array, we can follow these steps:

1. Create a copy of the `heights` array and sort it to get the `expected` array.
2. Compare the `heights` array with the `expected` array and count the number of mismatched indices.

### Solution

#### Java Solution

```java
import java.util.Arrays;

class Solution {
    public int heightChecker(int[] heights) {
        int[] exp = new int[heights.length];
        int count = 0;
        for(int i = 0; i < heights.length; i++) {
            exp[i] = heights[i];
        }
        Arrays.sort(exp);
        for(int i = 0; i < heights.length; i++) {
            if(heights[i] != exp[i]) {
                count++;
            }
        }
        return count;
    }
}
```

#### C++ Solution

```cpp
#include <vector>
#include <algorithm>

class Solution {
public:
    int heightChecker(std::vector<int>& heights) {
        std::vector<int> exp = heights;
        std::sort(exp.begin(), exp.end());
        int count = 0;
        for (int i = 0; i < heights.size(); ++i) {
            if (heights[i] != exp[i]) {
                count++;
            }
        }
        return count;
    }
};
```

#### Python Solution

```python
class Solution:
    def heightChecker(self, heights: List[int]) -> int:
        exp = sorted(heights)
        count = 0
        for i in range(len(heights)):
            if heights[i] != exp[i]:
                count += 1
        return count
```

### Complexity Analysis

**Time Complexity:** O(n log n)  
> The time complexity is dominated by the sorting step, which takes O(n log n) time.

**Space Complexity:** O(n)  
> We use additional space to store the sorted `expected` array.

### References
**LeetCode Problem:** [Height Checker](https://leetcode.com/problems/height-checker/)
