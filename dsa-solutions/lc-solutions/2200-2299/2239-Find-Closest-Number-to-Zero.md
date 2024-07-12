---
id:  Find-Closest-Number-to-Zero
title:  Find Closest Number to Zero
sidebar_label: 2239-Find Closest Number to Zero
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

 

### Examples

**Example 1:**

Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.

**Example 2:**

Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.




### Constraints

- 1 &lt;= n &lt;= 1000
- 105 &lt;= nums[i] &lt;= 105

### Approach
Iterate through the array and keep track of the number with the smallest absolute value (closest to zero). If two numbers have the same absolute value, the larger number is preferred.


### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int closestToZero(vector<int>& nums) {
    int closest = nums[0];
    for (int i = 1; i < nums.size(); ++i) {
        if (abs(nums[i]) < abs(closest) || (abs(nums[i]) == abs(closest) && nums[i] > closest)) {
            closest = nums[i];
        }
    }
    return closest;
}

int main() {
    vector<int> nums = {-4, -2, 1, 4, 8};
    int result = closestToZero(nums);
    cout << "Output: " << result << endl;  // Output: 1
    
    vector<int> nums2 = {2, -1, 1};
    int result2 = closestToZero(nums2);
    cout << "Output: " << result2 << endl;  // Output: 1
    
    return 0;
}

```

### Java Solution

```java
import java.util.Arrays;

public class ClosestToZero {
    public static int closestToZero(int[] nums) {
        int closest = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (Math.abs(nums[i]) < Math.abs(closest) || (Math.abs(nums[i]) == Math.abs(closest) && nums[i] > closest)) {
                closest = nums[i];
            }
        }
        return closest;
    }
    
    public static void main(String[] args) {
        int[] nums1 = {-4, -2, 1, 4, 8};
        System.out.println("Output: " + closestToZero(nums1));  // Output: 1
        
        int[] nums2 = {2, -1, 1};
        System.out.println("Output: " + closestToZero(nums2));  // Output: 1
    }
}


```

### Python Solution

```python
def closest_to_zero(nums):
    closest = nums[0]
    for num in nums[1:]:
        if abs(num) < abs(closest) or (abs(num) == abs(closest) and num > closest):
            closest = num
    return closest

# Example usage:
nums1 = [-4, -2, 1, 4, 8]
print("Output:", closest_to_zero(nums1))  # Output: 1

nums2 = [2, -1, 1]
print("Output:", closest_to_zero(nums2))  # Output: 1



```

### Complexity Analysis

### Time Complexity: $O(n)$

> **Reason**:Iteration through the array where n is the length of the array.

### Space Complexity: $O(n)$

> **Reason**: for storing elements of the array.


