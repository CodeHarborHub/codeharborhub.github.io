---
id: Kth-smallest-amount-with-single-denomination-combination
title: Kth Smallest Amount With Single Denomination Combination
sidebar_label: 3116 Kth Smallest Amount With Single Denomination Combination
tags:
- Java
- Math
- Array
- Binary Search
- Bit Manipulation
- Combinatorics
- Number Theory
description: "This document provides a solution where we Return the $k^th$ smallest amount that can be made using these coins."
---

## Problem

You are given an integer array $coins$ representing coins of different denominations and an integer $k$.

You have an infinite number of coins of each denomination. However, you are **not allowed** to combine coins of different denominations.

Return the $k^{\text{th}}$ smallest amount that can be made using these coins.

### Examples

**Example 1:**

```
Input: coins = [3,6,9], k = 3

Output: 9

Explanation: The given coins can make the following amounts:
Coin 3 produces multiples of 3: 3, 6, 9, 12, 15, etc.
Coin 6 produces multiples of 6: 6, 12, 18, 24, etc.
Coin 9 produces multiples of 9: 9, 18, 27, 36, etc.
All of the coins combined produce: 3, 6, 9, 12, 15, etc.

```
**Example 2:**

```
Input: coins = [5,2], k = 7

Output: 12

Explanation: The given coins can make the following amounts:
Coin 5 produces multiples of 5: 5, 10, 15, 20, etc.
Coin 2 produces multiples of 2: 2, 4, 6, 8, 10, 12, etc.
All of the coins combined produce: 2, 4, 5, 6, 8, 10, 12, 14, 15, etc.

```

### Constraints

- $1 <= coins.length <= 15$
- $1 <= coins[i] <= 25$
- $1 <= k <= 2 * 10^9$
- $coins$  contains pairwise distinct integers.
---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. **Binary Search Initialization**:

   - The main function **'findKthSmallest'** initializes a binary search range (**'left'** and **'right'**).
  
   - The left bound starts from **'k'** and the right bound is set to a large number (**'50000000000L'**) to encompass the possible values.
     
2. **Binary Search Execution**:

   - The binary search iteratively narrows down the range.
     
   - For each midpoint value (**'mid'**), it calculates how many values up to **'mid'** can be formed using the given coins using the helper function **'findKthSmallest'**.
   
3. **Counting Function (findKthSmallest)**:

   - This recursive function employs the inclusion-exclusion principle to count how many numbers up to **'k'** can be formed using the multiples of the coins:
     
   - The function considers each coin and its combinations recursively.
  
   - It uses the greatest common divisor (GCD) to avoid counting duplicate values.
  
   - Depending on whether the current subset of coins being considered has an odd or even number of elements, it either adds or subtracts from the count.

4. **Updating the Search Range**:

   - Based on the count returned by the helper function, the binary search range (left and right) is updated until convergence.
          
## Solution for Kth Smallest Amount With Single Denomination Combination

- The goal is to find the k-th smallest amount that can be made using the given coins without combining different denominations.
 
- It uses a binary search approach combined with a mathematical method (inclusion-exclusion principle) to efficiently determine the k-th smallest amount.

#### Code in Java

```java
import java.math.BigInteger;

class Solution {
    public long findKthSmallest(int[] coins, int k) {
        long left = k, right = 50000000000L;
        while (left < right) {
            long mid = (left + right) / 2;
            if (findKthSmallest(coins, mid, 1, 0, 0) < k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    private long findKthSmallest(int[] coins, long k, long v, int index, int flag) {
        return index < coins.length ? findKthSmallest(coins, k, v, index + 1, flag) + findKthSmallest(coins, k, v * coins[index] / BigInteger.valueOf(v).gcd(BigInteger.valueOf(coins[index])).longValue(), index + 1, flag + 1) : flag > 0 ? flag % 2 > 0 ? k / v : -k / v : 0;
    }
}    
```

### Complexity Analysis

#### Time Complexity: $O(2^n log n)$

> **Reason**: The binary search operates in $O(log n)$. And The inclusion-exclusion calculation involves iterating through subsets of coins, resulting in $O(2^n)$ complexity for the recursive function where n is the number of coins. Overall Time Complexity is $O(2^n log n)$

#### Space Complexity: $O(2^n)$

> **Reason**: The space complexity is $O(2^n)$, Because as it uses The primary space usage comes from the recursion stack of the helper function.

# References

- **LeetCode Problem:** [Kth Smallest Amount With Single Denomination Combination](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/description/)
- **Solution Link:** [Kth Smallest Amount With Single Denomination Combination Solution on LeetCode](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
