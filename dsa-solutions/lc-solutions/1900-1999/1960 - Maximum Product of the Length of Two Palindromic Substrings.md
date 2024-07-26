---
id: maximum-product-of-length-of-two-palindromic-substrings
title: Maximum Product of the Length of Two Palindromic Substrings
sidebar_label: Maximum Product of the Length of Two Palindromic Substrings
tags: [String, Palindrome, C++, Python, Java]
description: Solve the problem of finding the maximum product of the lengths of two non-intersecting palindromic substrings in a given string.
---

## Problem Statement

### Problem Description

You are given a 0-indexed string `s` and are tasked with finding two non-intersecting palindromic substrings of odd length such that the product of their lengths is maximized.

More formally, you want to choose four integers `i, j, k, l` such that $0 \leq i \leq j < k \leq l \lt s.length$ and both the substrings `s[i...j]` and `s[k...l]` are palindromes and have odd lengths. `s[i...j]` denotes a substring from index `i` to index `j` inclusive.

Return the maximum possible product of the lengths of the two non-intersecting palindromic substrings.

A palindrome is a string that is the same forward and backward. A substring is a contiguous sequence of characters in a string.

### Example

**Example 1:**
```
Input: s = "ababbb"
Output: 9
```
**Explanation:** Substrings "aba" and "bbb" are palindromes with odd length. product = 3 * 3 = 9.


### Constraints

- $2 \leq s.length \leq 10^5$
- `s` consists of lowercase English letters.

## Solution

### Intuition

To solve this problem, we can use dynamic programming and a sliding window approach to find all possible palindromic substrings of odd length. By iterating through the string, we can determine the longest palindromic substring ending at each position and the longest palindromic substring starting at each position. Then, we calculate the maximum product of the lengths of two non-intersecting palindromic substrings.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: The solution involves a linear scan of the string and dynamic programming updates, making the time complexity $O(n)$.
- **Space Complexity**: The space complexity is $O(n)$ due to the storage required for dynamic programming arrays.

### Code

#### C++

```java
class Solution {
    public int maxProduct(String s) {
        int n = s.length();
        int[] left = new int[n];
        int[] right = new int[n];

        // Calculate longest palindromic substring length ending at each index
        int l = 0, r = -1;
        for (int i = 0; i < n; i++) {
            if (i > r) {
                l = r = i;
                while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
                    l--;
                    r++;
                }
                left[i] = r - l - 1;
            } else {
                int k = (r - i) / 2;
                if (left[i - k] / 2 + i < r) {
                    left[i] = left[i - k];
                } else {
                    l = i - (r - i);
                    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
                        l--;
                        r++;
                    }
                    left[i] = r - l - 1;
                }
            }
        }

        // Calculate longest palindromic substring length starting at each index
        l = n - 1;
        r = n;
        for (int i = n - 1; i >= 0; i--) {
            if (i < l) {
                l = r = i;
                while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
                    l--;
                    r++;
                }
                right[i] = r - l - 1;
            } else {
                int k = (i - l) / 2;
                if (right[i + k] / 2 + i > l) {
                    right[i] = right[i + k];
                } else {
                    l = i + (i - l);
                    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
                        l--;
                        r++;
                    }
                    right[i] = r - l - 1;
                }
            }
        }

        // Calculate the maximum product
```

```cpp
class Solution {
public:
    int maxProduct(string s) {
        int n = s.size();
        vector<int> left(n, 0), right(n, 0);

        // Calculate longest palindromic substring length ending at each index
        for (int i = 0, l = 0, r = -1; i < n; i++) {
            if (i > r) {
                l = r = i;
                while (l >= 0 && r < n && s[l] == s[r]) l--, r++;
                left[i] = r - l - 1;
            } else {
                int k = (r - i) / 2;
                if (left[i - k] / 2 + i < r) {
                    left[i] = left[i - k];
                } else {
                    l = i - (r - i);
                    while (l >= 0 && r < n && s[l] == s[r]) l--, r++;
                    left[i] = r - l - 1;
                }
            }
        }

        // Calculate longest palindromic substring length starting at each index
        for (int i = n - 1, l = n - 1, r = n; i >= 0; i--) {
            if (i < l) {
                l = r = i;
                while (l >= 0 && r < n && s[l] == s[r]) l--, r++;
                right[i] = r - l - 1;
            } else {
                int k = (i - l) / 2;
                if (right[i + k] / 2 + i > l) {
                    right[i] = right[i + k];
                } else {
                    l = i + (i - l);
                    while (l >= 0 && r < n && s[l] == s[r]) l--, r++;
                    right[i] = r - l - 1;
                }
            }
        }

        // Calculate the maximum product
        int maxProduct = 0;
        for (int i = 0; i < n - 1; i++) {
            maxProduct = max(maxProduct, (left[i] / 2) * (right[i + 1] / 2));
        }
        return maxProduct;
    }
};
```
#### Python
```python
class Solution:
    def maxProduct(self, s: str) -> int:
        n = len(s)
        left = [0] * n
        right = [0] * n

        # Calculate longest palindromic substring length ending at each index
        l, r = 0, -1
        for i in range(n):
            if i > r:
                l, r = i, i
                while l >= 0 and r < n and s[l] == s[r]:
                    l -= 1
                    r += 1
                left[i] = r - l - 1
            else:
                k = (r - i) // 2
                if left[i - k] // 2 + i < r:
                    left[i] = left[i - k]
                else:
                    l = i - (r - i)
                    while l >= 0 and r < n and s[l] == s[r]:
                        l -= 1
                        r += 1
                    left[i] = r - l - 1

        # Calculate longest palindromic substring length starting at each index
        l, r = n - 1, n
        for i in range(n - 1, -1, -1):
            if i < l:
                l, r = i, i
                while l >= 0 and r < n and s[l] == s[r]:
                    l -= 1
                    r += 1
                right[i] = r - l - 1
            else:
                k = (i - l) // 2
                if right[i + k] // 2 + i > l:
                    right[i] = right[i + k]
                else:
                    l = i + (i - l)
                    while l >= 0 and r < n and s[l] == s[r]:
                        l -= 1
                        r += 1
                    right[i] = r - l - 1

        # Calculate the maximum product
        maxProduct = 0
        for i in range(n - 1):
            maxProduct = max(maxProduct, (left[i] // 2) * (right[i + 1] // 2))
        return maxProduct
```
