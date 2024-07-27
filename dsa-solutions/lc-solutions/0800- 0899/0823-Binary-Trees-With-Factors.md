---
id: binary-trees-with-factors
title: Binary Trees With Factors
sidebar_label: 0823-Binary-Trees-With-Factors
tags:
 - Dynamic Programming
 - Trees
 - Hashing
 - C++
 - Java
 - Python
description: "This document provides a solution to the Binary Trees With Factors problem, where we need to count the number of binary trees that can be formed with a given array of integers such that each node's value is the product of its children's values."
---

## Problem

Given an array of unique integers, `arr`, where each integer `arr[i]` is greater than 1, we need to return the number of binary trees we can make. Each non-leaf node's value should be equal to the product of its children's values.

The answer may be too large, so return it modulo `10^9 + 7`.

### Examples

**Example 1:**

Input: arr = [2, 4]  
Output: 3  
Explanation: We can make these trees: [2], [4], [4, 2, 2]

**Example 2:**

Input: arr = [2, 4, 5, 10]  
Output: 7  
Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2]

### Constraints

- `1 <= arr.length <= 1000`
- `2 <= arr[i] <= 10^9`
- All the values of `arr` are unique.

### Approach

To solve this problem, we can use dynamic programming and a hash map to store the number of trees that can be formed with each value as the root. The steps are as follows:

1. Sort the array to ensure that we consider smaller values first.
2. Use a hash map to store the number of ways to form a tree with each value.
3. Iterate through each value in the sorted array, and for each value, iterate through all previously seen values. If the current value can be divided by one of the previously seen values, and the result is also in the array, update the count of trees for the current value.

### Solution

#### Code in Different Languages

### C++ Solution
```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    int numFactoredBinaryTrees(vector<int>& arr) {
        sort(arr.begin(), arr.end());
        unordered_map<int, long> dp;
        long result = 0, mod = 1e9 + 7;
        
        for (int i = 0; i < arr.size(); ++i) {
            dp[arr[i]] = 1;
            for (int j = 0; j < i; ++j) {
                if (arr[i] % arr[j] == 0 && dp.count(arr[i] / arr[j])) {
                    dp[arr[i]] = (dp[arr[i]] + dp[arr[j]] * dp[arr[i] / arr[j]]) % mod;
                }
            }
            result = (result + dp[arr[i]]) % mod;
        }
        
        return result;
    }
};
```
### Java Solution

```java
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Solution {
    public int numFactoredBinaryTrees(int[] arr) {
        Arrays.sort(arr);
        Map<Integer, Long> dp = new HashMap<>();
        long result = 0, mod = 1_000_000_007;
        
        for (int i = 0; i < arr.length; ++i) {
            dp.put(arr[i], 1L);
            for (int j = 0; j < i; ++j) {
                if (arr[i] % arr[j] == 0 && dp.containsKey(arr[i] / arr[j])) {
                    dp.put(arr[i], (dp.get(arr[i]) + dp.get(arr[j]) * dp.get(arr[i] / arr[j])) % mod);
                }
            }
            result = (result + dp.get(arr[i])) % mod;
        }
        
        return (int) result;
    }
}
```
### Python Solution

```python
def numFactoredBinaryTrees(arr):
    arr.sort()
    dp = {}
    mod = 10**9 + 7
    
    for num in arr:
        dp[num] = 1
        for prev in dp:
            if num % prev == 0 and num // prev in dp:
                dp[num] = (dp[num] + dp[prev] * dp[num // prev]) % mod
    
    return sum(dp.values()) % mod

# Test
arr = [2, 4, 5, 10]
print(numFactoredBinaryTrees(arr))  # Output: 7
```

### Complexity Analysis
**Time Complexity:** O(n^2)

>Reason: We use two nested loops to check pairs of numbers and update the count of trees.

**Space Complexity:** O(n)

>Reason: We use a dictionary to store the number of ways to form a tree with each value.

This solution efficiently counts the number of binary trees that can be formed using the given array by utilizing dynamic programming and a hash map. The time complexity is quadratic, and the space complexity is linear, making it suitable for the problem constraints.

### References
**LeetCode Problem:** Binary Trees With Factors

