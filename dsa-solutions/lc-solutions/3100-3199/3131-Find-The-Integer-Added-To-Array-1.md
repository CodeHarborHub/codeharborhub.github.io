---
id: find-integer-added-to-array
title: Find the Integer Added to Array I (LeetCode)
sidebar_label: 3131-FindIntegerAddedToArray
tags:
  - Array
  - Math
description: Given two arrays of equal length, nums1 and nums2, find the integer that has been added to each element of nums1 to obtain nums2.
sidebar_position: 3131
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Find the Integer Added to Array I](https://leetcode.com/problems/find-the-integer-added-to-array-i/) | [Find the Integer Added to Array I Solution on LeetCode](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given two arrays of equal length, `nums1` and `nums2`.

Each element in `nums1` has been increased (or decreased in the case of negative) by an integer, represented by the variable `x`.

As a result, `nums1` becomes equal to `nums2`. Two arrays are considered equal when they contain the same integers with the same frequencies.

Return the integer `x`.

### Example 1

- **Input:** `nums1 = [2, 6, 4], nums2 = [9, 7, 5]`
- **Output:** `3`
- **Explanation:** The integer added to each element of `nums1` is `3`.

### Example 2

- **Input:** `nums1 = [10], nums2 = [5]`
- **Output:** `-5`
- **Explanation:** The integer added to each element of `nums1` is `-5`.

### Example 3

- **Input:** `nums1 = [1, 1, 1, 1], nums2 = [1, 1, 1, 1]`
- **Output:** `0`
- **Explanation:** The integer added to each element of `nums1` is `0`.

### Constraints

- `1 <= nums1.length == nums2.length <= 100`
- `0 <= nums1[i], nums2[i] <= 1000`
- The test cases are generated in a way that there is an integer `x` such that `nums1` can become equal to `nums2` by adding `x` to each element of `nums1`.

## Approach

To find the integer `x` that was added to each element of `nums1` to obtain `nums2`, we can use the following approach:

1. Iterate through the arrays `nums1` and `nums2`.
2. Calculate the difference `x` for the first pair of elements from `nums1` and `nums2`.
3. Ensure that the calculated `x` is consistent for all elements.

### Solution Code

#### Python

```python
def find_integer_added_to_array(nums1, nums2):
    if len(nums1) != len(nums2):
        return None  # Inconsistent input lengths
    
    x = nums2[0] - nums1[0]
    
    for i in range(1, len(nums1)):
        if nums2[i] - nums1[i] != x:
            return None  # Inconsistent difference found
    
    return x
```

#### C++

```c++
#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    int findIntegerAddedToArray(vector<int>& nums1, vector<int>& nums2) {
        if (nums1.size() != nums2.size()) {
            return INT_MIN;  // Inconsistent input lengths
        }
        
        int x = nums2[0] - nums1[0];
        
        for (size_t i = 1; i < nums1.size(); ++i) {
            if (nums2[i] - nums1[i] != x) {
                return INT_MIN;  // Inconsistent difference found
            }
        }
        
        return x;
    }
};

```

#### Java

```java
class Solution {
    public Integer findIntegerAddedToArray(int[] nums1, int[] nums2) {
        if (nums1.length != nums2.length) {
            return null;  // Inconsistent input lengths
        }
        
        int x = nums2[0] - nums1[0];
        
        for (int i = 1; i < nums1.length; i++) {
            if (nums2[i] - nums1[i] != x) {
                return null;  // Inconsistent difference found
            }
        }
        
        return x;
    }
```
#### Conclusion
The above solutions determine the integer x that was added to each element of nums1 to obtain nums2. 
By ensuring consistency across the entire array, we validate the difference and return the result. 
Adjustments for different languages and edge cases ensure robustness across various inputs.
