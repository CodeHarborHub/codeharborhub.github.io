---
id:  Intersection-of-Multiple-Arrays
title:  Intersection of Multiple Arrays
sidebar_label: 2248-Intersection of Multiple Arrays
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.

### Examples

**Example 1:**

Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation: 
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].

**Example 2:**

Input: nums = [[1,2,3],[4,5,6]]
Output: []
Explanation: 
There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].


### Constraints

- `1 <= nums.length <= 1000`
- `1 <= sum(nums[i].length) <= 1000`
- `1 <= nums[i][j] <= 1000`
- `All the values of nums[i] are unique.`

### Approach

To solve the problem of finding integers that are present in each array of a given 2D integer array nums and returning them in ascending order, we can follow these steps:

1.Use a hash set to keep track of the common elements.
2.Initialize the set with the elements of the first array.
3.For each subsequent array, retain only those elements in the set that are also in the current array.
4.Convert the resulting set to a list, sort it, and return.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <unordered_set>
#include <set>
#include <algorithm>

std::vector<int> commonElements(std::vector<std::vector<int>>& nums) {
    std::unordered_set<int> common(nums[0].begin(), nums[0].end());

    for (int i = 1; i < nums.size(); i++) {
        std::unordered_set<int> currentSet(nums[i].begin(), nums[i].end());
        for (auto it = common.begin(); it != common.end();) {
            if (currentSet.find(*it) == currentSet.end()) {
                it = common.erase(it);
            } else {
                ++it;
            }
        }
    }

    std::vector<int> result(common.begin(), common.end());
    std::sort(result.begin(), result.end());
    return result;
}

int main() {
    std::vector<std::vector<int>> nums1 = {{3, 1, 2, 4, 5}, {1, 2, 3, 4}, {3, 4, 5, 6}};
    std::vector<std::vector<int>> nums2 = {{1, 2, 3}, {4, 5, 6}};
    
    auto result1 = commonElements(nums1);
    auto result2 = commonElements(nums2);

    for (int num : result1) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    for (int num : result2) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}



```

### Java Solution

```java
import java.util.*;

public class CommonElements {
    public static List<Integer> commonElements(int[][] nums) {
        Set<Integer> common = new HashSet<>();
        for (int num : nums[0]) {
            common.add(num);
        }
        
        for (int i = 1; i < nums.length; i++) {
            Set<Integer> currentSet = new HashSet<>();
            for (int num : nums[i]) {
                currentSet.add(num);
            }
            common.retainAll(currentSet);
        }
        
        List<Integer> result = new ArrayList<>(common);
        Collections.sort(result);
        return result;
    }

    public static void main(String[] args) {
        int[][] nums1 = {{3, 1, 2, 4, 5}, {1, 2, 3, 4}, {3, 4, 5, 6}};
        int[][] nums2 = {{1, 2, 3}, {4, 5, 6}};
        
        System.out.println(commonElements(nums1)); // Output: [3, 4]
        System.out.println(commonElements(nums2)); // Output: []
    }
}


```

### Python Solution

```python
def common_elements(nums):
    common = set(nums[0])
    
    for arr in nums[1:]:
        common.intersection_update(arr)
    
    result = sorted(common)
    return result

# Example usage
nums1 = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]
nums2 = [[1, 2, 3], [4, 5, 6]]

print(common_elements(nums1))  # Output: [3, 4]
print(common_elements(nums2))  # Output: []


```

### Complexity Analysis

### Time Complexity: $O(n*m)$

> **Reason**:here n is the number of arrays and m is the average length of the arrays. Each intersection operation takes linear time relative to the number of elements.

### Space Complexity: $O(m)$

> **Reason**: the space used by the set to store common elements

