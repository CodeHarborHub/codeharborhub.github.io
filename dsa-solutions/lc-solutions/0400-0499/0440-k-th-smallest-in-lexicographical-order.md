---
id: k-th-smallest-in-lexicographical-order
title: K-th Smallest in Lexicographical Order
sidebar_label: 0440 - k-th-smallest-in-lexicographical-order
tags:
  - Trie
description: "Return the kth lexicographically smallest integer."
---

## Problem Description

Given two integers `n` and `k`, return the kth lexicographically smallest integer in the range `[1, n]`.

### Examples

**Example 1:**

```
Input: n = 13, k = 2
Output: 10
Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.
```

**Example 2:**

```
Input: n = 1, k = 1
Output: 1

```

### Constraints

- `1 <= k <= n <= 10^9`


## Solution for K-th Smallest in Lexicographical Order.

### Approach 
Iterating through potential prefixes (result, result*10, etc.), counting numbers within each prefix range that fall within [1, n], and adjusting the prefix based on whether the count meets or exceeds k, ensuring the retrieval of the k-th lexicographical number efficiently.

#### Intuition
Lexicographical order means dictionary order. For any number result, numbers prefixed by result are essentially the numbers starting from result up to the next increment of `result`.

#### Algorithm

1. Calculate the number of numbers that prefix with result.
Numbers prefixed by result are the union of the following intervals:
[result, result+1)
[result*10, (result+1)*10 )
[result*100, (result+1)*100 )
...
But they also shall belong to [1, n]
Therefore, we can easily calculate the number of elements prefixed by result.

2. Search the next prefix, or search more detailedly.
   If the number of numbers that prefixed by result is smaller than the remaining k, we do not need to consider the numbers prefixed by result any more, and march to the next prefix: result+1;
   Otherwise, we need to search more detailedly, by appending another digit to the prefix. Such search shall start with result*10.


## Code in Different Languages

### C++

```cpp
class Solution {
public:
    int findKthNumber(int n, int k)
    {
        int result = 1;
        for(--k; k > 0; )
        {
            // calculate #|{result, result*, result**, result***, ...}|
            int count = 0;
            for (long long first = static_cast<long long>(result), last = first + 1;
                first <= n; // the interval is not empty
                first *= 10, last *= 10) // increase a digit
            {
                // valid interval = [first, last) union [first, n]
                count += static_cast<int>((min(n + 1LL, last) - first)); // add the length of interval
            }
            
            if (k >= count)
            {   // skip {result, result*, result**, result***, ...}
                // increase the current prefix
                ++result;
                k -= count;
            }
            else
            {   // not able to skip all of {result, result*, result**, result***, ...}
                // search more detailedly
                result *= 10;
                --k;
            }
        }
        return result;
    }
};


```
### JAVA
```java 
  public class Solution {
    public int findKthNumber(int n, int k) {
        int result = 1;
        k--; // adjust k to be zero-indexed
        while (k > 0) {
            int count = 0;
            long first = result;
            long last = first + 1;
            while (first <= n) {
                count += Math.min(n + 1, last) - first; // add the length of interval
                first *= 10;
                last *= 10;
            }
            if (k >= count) {
                // Skip all numbers starting with 'result'
                result++;
                k -= count;
            } else {
                // Move to the next level of prefix
                result *= 10;
                k--;
            }
        }
        return result;
    }
}
```

### PYTHON
```python
class Solution(object):
    def findKthNumber(self, n, k):
        result = 1;
        k -= 1
        while k > 0:
            count = 0
            interval = [result, result+1]
            while interval[0] <= n:
                count += (min(n+1, interval[1]) - interval[0])
                interval = [10*interval[0], 10*interval[1]]
            
            if k >= count:
                result += 1
                k -= count
            else:
                result *= 10
                k -= 1
        return result
```

## Complexity Analysis

### Time Complexity: $O((logn)^2)$

> **Reason**: Here, logn is the number of digits in n, and it is also the number of replications of appending zero to search detailedly. Each such appending introduces the increasement of prefix at most 10 times, and each increasement may require O(logn) time to calculate the number of numbers that prefixed by the `result`.

### Space Complexity: $O(1)$

## References

- **LeetCode Problem**: [K-th Smallest in Lexicographical Order](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description/)
