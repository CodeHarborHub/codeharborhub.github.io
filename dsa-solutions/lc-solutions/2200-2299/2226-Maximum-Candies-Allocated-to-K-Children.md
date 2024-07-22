---
id:  Maximum-Candies-Allocated-to-K-Children
title:  Maximum Candies Allocated to K Children
sidebar_label: 2226-Maximum Candies Allocated to K Children
tags:
  - Arrays
  - C++
  - Java
  - Python
description: "This document provides solutions to this problem implemented in C++, Java, and Python."
---

## Problem

You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.

You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can take at most one pile of candies and some piles of candies may go unused.

Return the maximum number of candies each child can get.
### Examples

**Example 1:**

Input: candies = [5,8,6], k = 3
Output: 5
Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.

**Example 2:**

Input: candies = [2,5], k = 11
Output: 0
Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.




### Constraints

- `1 <= candies.length <= 105`
- `1 <= candies[i] <= 107`
- `1 <= k <= 1012`

### Approach

Initialize: Set the search range from 1 to the maximum number of candies in any pile.
Binary Search:
- Calculate the middle value of the current range.
- Check if it's possible to distribute this many candies per child to all k children by dividing the piles.
- Adjust the range based on whether the distribution was possible.
Return Result: The highest feasible value found during the search is the answer.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <vector>
#include <algorithm>
using namespace std;

bool canDistribute(const vector<int>& candies, long long mid, long long k) {
    long long count = 0;
    for (int candy : candies) {
        count += candy / mid;
    }
    return count >= k;
}

int maxCandies(vector<int>& candies, long long k) {
    long long left = 1, right = *max_element(candies.begin(), candies.end());
    while (left <= right) {
        long long mid = left + (right - left) / 2;
        if (canDistribute(candies, mid, k)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

// Example usage:
#include <iostream>
int main() {
    vector<int> candies1 = {5, 8, 6};
    long long k1 = 3;
    cout << maxCandies(candies1, k1) << endl;  // Output: 5

    vector<int> candies2 = {2, 5};
    long long k2 = 11;
    cout << maxCandies(candies2, k2) << endl;  // Output: 0

    return 0;
}



```

### Java Solution

```java
public class MaxCandies {
    public static boolean canDistribute(int[] candies, long mid, long k) {
        long count = 0;
        for (int candy : candies) {
            count += candy / mid;
        }
        return count >= k;
    }

    public static int maxCandies(int[] candies, long k) {
        long left = 1, right = Integer.MIN_VALUE;
        for (int candy : candies) {
            right = Math.max(right, candy);
        }
        
        while (left <= right) {
            long mid = left + (right - left) / 2;
            if (canDistribute(candies, mid, k)) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return (int) right;
    }

    public static void main(String[] args) {
        int[] candies1 = {5, 8, 6};
        long k1 = 3;
        System.out.println(maxCandies(candies1, k1));  // Output: 5

        int[] candies2 = {2, 5};
        long k2 = 11;
        System.out.println(maxCandies(candies2, k2));  // Output: 0
    }
}


```

### Python Solution

```python
def maxCandies(candies, k):
    def canDistribute(mid):
        count = 0
        for candy in candies:
            count += candy // mid
        return count >= k

    left, right = 1, max(candies)
    while left <= right:
        mid = (left + right) // 2
        if canDistribute(mid):
            left = mid + 1
        else:
            right = mid - 1

    return right

# Example usage:
candies1 = [5, 8, 6]
k1 = 3
print(maxCandies(candies1, k1))  # Output: 5

candies2 = [2, 5]
k2 = 11
print(maxCandies(candies2, k2))  # Output: 0



```

### Complexity Analysis

### Time Complexity: $O(n*logm)$

> **Reason**:Binary search runs in O(logm), and each check inside the binary search takes O(n).


### Space Complexity: $O(1)$

> **Reason**: Only a constant amount of extra space is used, regardless of the input size.

