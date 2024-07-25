---
id: k-similar-strings
title: K-Similar Strings
sidebar_label: 854-  K-Similar Strings
tags:
  - Array
  - String
  - Breadth First Search
description: Determine the minimum number of adjacent letter swaps needed to transform string s1 into string s2, given that s1 and s2 are anagrams.
sidebar_position: 0854
---

## Problem Description

Strings s1 and s2 are `k-similar (for some non-negative integer k)` if we can swap the positions of two letters in s1 exactly k times so that the resulting string equals s2.

Given two anagrams s1 and s2, return the smallest k for which s1 and s2 are `k-similar`.

### Example 1

- **Input:** `s1 = "ab", s2 = "ba"`
- **Output:** `1`
- **Explanation:** `The two string are 1-similar because we can use one swap to change s1 to s2: "ab" --> "ba"`

### Constraints

- `1 <= s1.length <= 20`
- `s2.length == s1.length`

## Approach

This approach recursively finds the minimum number of swaps needed to transform string a into string b. It first aligns characters that are already perfectly matched, then recursively explores all possible swaps for mismatched characters, choosing the swap that results in the least additional swaps needed. The swap function is used to interchange characters, and checkAllOptions explores all possible swaps to find the optimal sequence.
#### Java

```Java
class Solution {
    public int kSimilarity(String a, String b) {
        int ans = 0;
        char[] achars = a.toCharArray();
        char[] bchars = b.toCharArray();
        ans += getAllPerfectMatches(achars, bchars);
        for (int i = 0; i < achars.length; i++) {
            if (achars[i] == bchars[i]) {
                continue;
            }
            return ans + checkAllOptions(achars, bchars, i, b);
        }
        return ans;
    }
    private int checkAllOptions(char[] achars, char[] bchars, int i, String b) {
        int ans = Integer.MAX_VALUE;
        for (int j = i + 1; j < achars.length; j++) {
            if (achars[j] == bchars[i] && achars[j] != bchars[j]) {
                swap(achars, i, j);
                ans = Math.min(ans, 1 + kSimilarity(new String(achars), b));
                swap(achars, i, j);
            }
        }
        return ans;
    }
    private int getAllPerfectMatches(char[] achars, char[] bchars) {
        int ans = 0;
        for (int i = 0; i < achars.length; i++) {
            if (achars[i] == bchars[i]) {
                continue;
            }
            for (int j = i + 1; j < achars.length; j++) {
                if (achars[j] == bchars[i] && bchars[j] == achars[i]) {
                    swap(achars, i, j);
                    ans++;
                    break;
                }
            }
        }
        return ans;
    }
    private void swap(char[] a, int i, int j) {
        char temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}

```

- Time Complexity
  The time complexity is $o(n)$.

- Space Complexity
  The space complexity is $O(1)$.
