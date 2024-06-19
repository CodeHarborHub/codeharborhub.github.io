---
id: longest-increasing-subsequence
title: Longest Increasing Subsequence (LIS) using Dynamic Programming
sidebar_label: Longest Increasing Subsequence (LIS)
tags: [python, java, c++, javascript, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Longest Increasing Subsequence (LIS) problem and its implementation using Dynamic Programming in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Longest Increasing Subsequence (LIS) using Dynamic Programming

The Longest Increasing Subsequence (LIS) problem is a classic dynamic programming problem that finds the length of the longest subsequence in an array such that all elements of the subsequence are sorted in increasing order.

## Problem Statement

Given an array of integers, find the length of the longest increasing subsequence.

### Intuition

The LIS problem can be efficiently solved using dynamic programming. We can build a table to store the lengths of the longest increasing subsequences for various prefixes of the input array.

## Dynamic Programming Approach

Using dynamic programming, we can efficiently solve the LIS problem by building a table and filling it iteratively.

### Bottom-Up Approach

We iteratively fill the table to find the length of the longest increasing subsequence.

## Pseudocode for LIS using DP

#### Initialize:

```markdown
Let n be the length of the input array nums

Create an array dp of size n and initialize it with 1s (since each element is a subsequence of length 1)

Loop from 1 to n:
    Loop from 0 to i:
        If nums[i] > nums[j]:
            Update dp[i] to maximum of dp[i] and dp[j] + 1

Return the maximum value in dp which represents the length of the LIS

```

### Example Output:
Given the input array: `nums = [10, 9, 2, 5, 3, 7, 101, 18]`
The length of the Longest Increasing Subsequence (LIS) in `nums` is `4`.

### Output Explanation:

The Longest Increasing Subsequence (LIS) in `nums` is `[2, 3, 7, 101]`, which has a length of `4`.

You can verify this by manually checking the increasing subsequences:

- [10, 101]
- [9, 101]
- [2, 5, 7, 101]
- [2, 3, 7, 101]

Out of these, `[2, 3, 7, 101]` is the longest increasing subsequence with a length of `4`, hence the output.

## Implementing LIS using DP

### Python Implementation

```python
def lis_dp(nums):
    # Get length of input array
    n = len(nums)
    
    # Initialize an array to store lengths of LIS
    dp = [1] * n

    # Iterate through the array to fill the table
    for i in range(1, n):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)

    # Return the maximum value in dp which represents the length of the LIS
    return max(dp)
```

### Java Implementation

```java
public class LIS {
    public static int lis_dp(int[] nums) {
        // Get length of input array
        int n = nums.length;
        
        // Initialize an array to store lengths of LIS
        int[] dp = new int[n];
        Arrays.fill(dp, 1);

        // Iterate through the array to fill the table
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j])
                    dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }

        // Return the maximum value in dp which represents the length of the LIS
        return Arrays.stream(dp).max().getAsInt();
    }

    public static void main(String[] args) {
        // Example usage
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println("Length of LIS: " + lis_dp(nums));
    }
}
```
### C++ Implementation

```cpp
#include <iostream>
#include <vector>
using namespace std;

int lis_dp(vector<int>& nums) {
    // Get length of input array
    int n = nums.size();
    
    // Initialize an array to store lengths of LIS
    vector<int> dp(n, 1);

    // Iterate through the array to fill the table
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                dp[i] = max(dp[i], dp[j] + 1);
        }
    }

    // Return the maximum value in dp which represents the length of the LIS
    return *max_element(dp.begin(), dp.end());
}

int main() {
    // Example usage
    vector<int> nums = {10, 9, 2, 5, 3, 7, 101, 18};
    cout << "Length of LIS: " << lis_dp(nums) << endl;
    return 0;
}
```

### JavaScript Implementation

```javascript
function lis_dp(nums) {
    // Get length of input array
    const n = nums.length;
    
    // Initialize an array to store lengths of LIS
    const dp = new Array(n).fill(1);

    // Iterate through the array to fill the table
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }

    // Return the maximum value in dp which represents the length of the LIS
    return Math.max(...dp);
}

// Example usage
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log("Length of LIS: " + lis_dp(nums));
```

### Complexity Analysis

- Time Complexity: $O(n^2)$, where n is the length of the input array `nums`. We iterate through the array twice to fill the table, each taking $O(n)$ time.
- Space Complexity: $O(n)$, where n is the length of the input array `nums`. We use an additional array of length n to store lengths of LIS.

### Conclusion

Dynamic programming provides an efficient solution for finding the length of the Longest Increasing Subsequence (LIS) in an array. By iteratively filling a table and storing intermediate results, we can achieve a time complexity of \( O(n^2) \), significantly better than the naive recursive approach. This approach allows us to efficiently solve the LIS problem for large input arrays.