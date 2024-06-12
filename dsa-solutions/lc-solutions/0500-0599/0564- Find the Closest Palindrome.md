---
id: find-the-closest-palindrome
title: Find the Closest Palindrome
sidebar_label: 564 Find the Closest Palindrome
tags:
- Java
- string
- Math
description: "This document provides a solution where we need to find the nearest palindrome to a given number n, the idea is to generate potential palindromic candidates close to n and then determine which one is closest in terms of absolute difference. "
---

## Problem

Given a string $n$ representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return **the smaller one**.

The closest is defined as the absolute difference minimized between two integers.

### Examples

**Example 1:**

```
Input: n = "123"

Output: "121"

```

**Example 2:**

```
Input: n = "1"

Output: "0"

Explanation: 0 and 2 are the closest palindromes but we return the smallest which is 0.

```

### Constraints

- $1 \leq n.length \leq 18$
- $n$ consists of only digits.
- $n$ does not have leading zeros.
- $n$ is representing an integer in the range [1, $10^18$ - 1].

---

## Approach

To solve the problem, we need to understand the nature of the allowed moves:

1. **Generate Candidate Palindromes**:

   - Generate palindromes by reflecting the first half of the number.

   - Create palindromes by incrementing or decrementing the first half of the number.

   - Consider edge cases such as numbers with all $9's$ or all $0's$.

2. **Calculate Distances**:

   - For each candidate palindrome, compute the absolute difference from the original number $n$.

3. **Select the Closest Palindrome**:

   - Among all candidates, select the one with the smallest absolute difference. In case of ties, choose the smaller number.

## Solution for Finding the Closest Palindrome

The given problem involves To find the nearest palindrome to a given number 'n', the idea is to generate potential palindromic candidates close to 'n' and then determine which one is closest in terms of absolute difference.

#### Code in Java

```java
class Solution {
    public String nearestPalindromic(String n) {
        long num = Long.parseLong(n);
        int len = n.length();
        
        // Edge cases for 1, 0, 10, 100, etc.
        long smaller = (long) Math.pow(10, len - 1) - 1;
        long larger = (long) Math.pow(10, len) + 1;
        
        // Middle palindrome by modifying the first half
        long prefix = Long.parseLong(n.substring(0, (len + 1) / 2));
        long candidate1 = createPalindrome(prefix, len % 2 == 0);
        long candidate2 = createPalindrome(prefix - 1, len % 2 == 0);
        long candidate3 = createPalindrome(prefix + 1, len % 2 == 0);
        
        // Collecting all candidates
        long[] candidates = {smaller, larger, candidate1, candidate2, candidate3};
        
        // Finding the nearest palindrome
        long nearest = -1;
        for (long candidate : candidates) {
            if (candidate != num) {
                if (nearest == -1 || Math.abs(candidate - num) < Math.abs(nearest - num) ||
                    (Math.abs(candidate - num) == Math.abs(nearest - num) && candidate < nearest)) {
                    nearest = candidate;
                }
            }
        }
        
        return String.valueOf(nearest);
    }
    
    private long createPalindrome(long prefix, boolean isEvenLength) {
        String strPrefix = String.valueOf(prefix);
        StringBuilder sb = new StringBuilder(strPrefix);
        if (!isEvenLength) {
            sb.setLength(sb.length() - 1);
        }
        return Long.parseLong(strPrefix + sb.reverse().toString());
    }
}

```

### Complexity Analysis

#### Time Complexity: $O(log(n))$

> **Reason**: Time Complexity is $O(log(n))$, Comparing a constant number of candidates (5 in this case) involves checking their absolute differences with the original number.

#### Space Complexity: $O(1)$

> **Reason**: $O(1)$ additional space, excluding the space required to store the input and output since we only use a fixed number of variables.

# References

- **LeetCode Problem:** [Find the Closest Palindrome](https://leetcode.com/problems/find-the-closest-palindrome/description/)
- **Solution Link:** [Find the Closest Palindrome Solution on LeetCode](https://leetcode.com/problems/find-the-closest-palindrome/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
