---
id:  Find-All-K-Distant-Indices-in-an-Array
title:  Find All K-Distant Indices in an Array
sidebar_label: 2200 Find All K-Distant Indices in an Array
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides a solution where we will be returning an array in increasing order , satisfying the condition given"
---

## Problem

You are given a 0-indexed integer array nums and two integers key and k. A k-distant index is an index i of nums for which there exists at least one index j such that |i - j| &lt; = k and nums[j] == key.

Return a list of all k-distant indices sorted in increasing order.

### Examples

**Example 1:**

Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1
Output: [1,2,3,4,5,6]
Explanation: Here, nums[2] == key and nums[5] == key.
- For index 0, |0 - 2| &gt; k and |0 - 5| &gt; k, so there is no j where |0 - j| &lt; = k and nums[j] == key. Thus, 0 is not a k-distant index.
- For index 1, |1 - 2| &lt; = k and nums[2] == key, so 1 is a k-distant index.
- For index 2, |2 - 2| &lt; = k and nums[2] == key, so 2 is a k-distant index.
- For index 3, |3 - 2| &lt; = k and nums[2] == key, so 3 is a k-distant index.
- For index 4, |4 - 5| &lt; = k and nums[5] == key, so 4 is a k-distant index.
- For index 5, |5 - 5| &lt; = k and nums[5] == key, so 5 is a k-distant index.
- For index 6, |6 - 5| &lt; = k and nums[5] == key, so 6 is a k-distant index.
Thus, we return [1,2,3,4,5,6] which is sorted in increasing order. 

**Example 2:**

Input: nums = [2,2,2,2,2], key = 2, k = 2
Output: [0,1,2,3,4]
Explanation: For all indices i in nums, there exists some index j such that |i - j| &lt; = k and nums[j] == key, so every index is a k-distant index. 
Hence, we return [0,1,2,3,4].

### Constraints

- 1 &lt; = nums.length &lt; 1000
- 1 &lt; nums[i] &lt; 1000
- key is an integer from the array nums.
- 1 &lt; k &lt; nums.length

### Approach

1.Identify all indices where the value in the array equals the key.
2.For each key index, mark all indices within the distance k as k-distant.
3.Collect all unique k-distant indices and sort them in increasing order.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <set>
#include <algorithm>

std::vector<int> findKDistantIndices(std::vector<int>& nums, int key, int k) {
    std::vector<int> key_indices;
    for (int i = 0; i < nums.size(); ++i) {
        if (nums[i] == key) {
            key_indices.push_back(i);
        }
    }

    std::set<int> k_distant_indices;
    for (int key_index : key_indices) {
        int start = std::max(0, key_index - k);
        int end = std::min((int)nums.size() - 1, key_index + k);
        for (int i = start; i <= end; ++i) {
            k_distant_indices.insert(i);
        }
    }

    return std::vector<int>(k_distant_indices.begin(), k_distant_indices.end());
}

int main() {
    std::vector<int> nums = {3, 4, 9, 1, 3, 9, 5};
    int key = 9;
    int k = 1;
    std::vector<int> result = findKDistantIndices(nums, key, k);

    for (int index : result) {
        std::cout << index << " ";
    }
    // Output: 1 2 3 4 5 6
    return 0;
}

```

### Java Solution

```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.Collections;

public class Main {
    public static List<Integer> findKDistantIndices(int[] nums, int key, int k) {
        List<Integer> keyIndices = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == key) {
                keyIndices.add(i);
            }
        }

        Set<Integer> kDistantIndices = new HashSet<>();
        for (int keyIndex : keyIndices) {
            int start = Math.max(0, keyIndex - k);
            int end = Math.min(nums.length - 1, keyIndex + k);
            for (int i = start; i <= end; i++) {
                kDistantIndices.add(i);
            }
        }

        List<Integer> result = new ArrayList<>(kDistantIndices);
        Collections.sort(result);
        return result;
    }

    public static void main(String[] args) {
        int[] nums = {3, 4, 9, 1, 3, 9, 5};
        int key = 9;
        int k = 1;
        List<Integer> result = findKDistantIndices(nums, key, k);
        
        for (int index : result) {
            System.out.print(index + " ");
        }
        // Output: [1, 2, 3, 4, 5, 6]
    }
}

```

### Python Solution

```python
def find_k_distant_indices(nums, key, k):
    key_indices = [i for i, num in enumerate(nums) if num == key]
    k_distant_indices = set()
    
    for key_index in key_indices:
        start = max(0, key_index - k)
        end = min(len(nums) - 1, key_index + k)
        for i in range(start, end + 1):
            k_distant_indices.add(i)
    
    return sorted(k_distant_indices)

# Example usage:
nums = [3, 4, 9, 1, 3, 9, 5]
key = 9
k = 1
print(find_k_distant_indices(nums, key, k))  # Output: [1, 2, 3, 4, 5, 6]

```

### Complexity Analysis

### Time Complexity: $O(nlogn)$

> **Reason**: for identifying key indices , marking k-distinct indices and for sorting
### Space Complexity: $O(n)$

> **Reason**: for storing key indices, k-distant indices and for sorting.



### References

**LeetCode Problem:** Find All K-Distant Indices in an Array
