---
id: majority-element-II
title: Majority Element II
sidebar_label: 0229-Majority-Element-II
tags:
- Arrays
- Counting
- C++
- Java
- Python
description: "This document provides a solution to the Majority Element II problem, where we need to find all elements that appear more than ⌊ n/3 ⌋ times."
---

## Problem

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

### Examples

**Example 1:**

Input: nums = [3,2,3]  
Output: [3]

**Example 2:**

Input: nums = [1]  
Output: [1]

**Example 3:**

Input: nums = [1,2]  
Output: [1,2]

### Constraints

- `1 <= nums.length <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`
### Approach

To solve this problem, we can use the Boyer-Moore Voting Algorithm, which efficiently finds the majority elements in linear time and constant space. The algorithm can be summarized in the following steps:

1. **First Pass**:
   - Use two counters and two candidate variables to identify the potential majority elements.
   - Iterate through the array, updating the candidates and their counts accordingly.

2. **Second Pass**:
   - Verify the candidates by counting their occurrences in the array.

### Solution

#### Code in Different Languages

### C++ Solution
```cpp
#include <vector>
#include <iostream>

using namespace std;

vector<int> majorityElement(vector<int>& nums) {
    int n = nums.size();
    if (n == 0) return {};
    
    int candidate1 = 0, candidate2 = 1, count1 = 0, count2 = 0;
    
    // First pass to find potential candidates
    for (int num : nums) {
        if (num == candidate1) {
            count1++;
        } else if (num == candidate2) {
            count2++;
        } else if (count1 == 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 == 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    
    // Second pass to confirm the candidates
    count1 = count2 = 0;
    for (int num : nums) {
        if (num == candidate1) count1++;
        if (num == candidate2) count2++;
    }
    
    vector<int> result;
    if (count1 > n / 3) result.push_back(candidate1);
    if (count2 > n / 3) result.push_back(candidate2);
    
    return result;
}

int main() {
    vector<int> nums = {3,2,3};
    vector<int> result = majorityElement(nums);
    for (int num : result) {
        cout << num << " ";
    }
}
```
### Java Solution
```java
import java.util.*;

public class MajorityElementII {
    public static List<Integer> majorityElement(int[] nums) {
        int n = nums.length;
        if (n == 0) return Collections.emptyList();
        
        int candidate1 = 0, candidate2 = 1, count1 = 0, count2 = 0;
        
        // First pass to find potential candidates
        for (int num : nums) {
            if (num == candidate1) {
                count1++;
            } else if (num == candidate2) {
                count2++;
            } else if (count1 == 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 == 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }
        
        // Second pass to confirm the candidates
        count1 = count2 = 0;
        for (int num : nums) {
            if (num == candidate1) count1++;
            if (num == candidate2) count2++;
        }
        
        List<Integer> result = new ArrayList<>();
        if (count1 > n / 3) result.add(candidate1);
        if (count2 > n / 3) result.add(candidate2);
        
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 3};
        List<Integer> result = majorityElement(nums);
        System.out.println(result);
    }
}
```
### Python Solution

```python
def majorityElement(nums):
    n = len(nums)
    if n == 0:
        return []
    
    candidate1, candidate2, count1, count2 = 0, 1, 0, 0
    
    # First pass to find potential candidates
    for num in nums:
        if num == candidate1:
            count1 += 1
        elif num == candidate2:
            count2 += 1
        elif count1 == 0:
            candidate1 = num
            count1 = 1
        elif count2 == 0:
            candidate2 = num
            count2 = 1
        else:
            count1 -= 1
            count2 -= 1
    
    # Second pass to confirm the candidates
    count1, count2 = 0, 0
    for num in nums:
        if num == candidate1:
            count1 += 1
        elif num == candidate2:
            count2 += 1
    
    result = []
    if count1 > n / 3:
        result.append(candidate1)
    if count2 > n / 3:
        result.append(candidate2)
    
    return result

nums = [3, 2, 3]
print(majorityElement(nums))
```

### Complexity Analysis

### Time Complexity: O(N)
>Reason: We perform two passes through the array, each requiring linear time.

**Space Complexity:** O(1)
>Reason: We use a constant amount of extra space for counters and candidates.

>This solution efficiently finds all elements that appear more than ⌊ n/3 ⌋ times using the Boyer-Moore Voting Algorithm. The time complexity is linear, and the space complexity is constant, making it suitable for large input sizes.

#### References
**LeetCode Problem:** Majority Element II
**Authors GeeksforGeeks Profile:** Vipul lakum
