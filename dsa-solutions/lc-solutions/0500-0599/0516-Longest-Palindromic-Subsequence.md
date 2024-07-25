---
id: longest-palindromic-subsequence
title: Longest Palindromic Subsequence
sidebar_label: 0516-Longest-Palindromic-Subsequence
tags:
- Dynamic Programming
- String
description: "Given a string s, find the longest palindromic subsequence's length in s."
---

## Problem

Given a string `s`, find the longest palindromic subsequence's length in `s`.

A **subsequence** is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

### Examples

**Example 1:**

**Input:** `s = "bbbab"`  
**Output:** `4`  
**Explanation:** One possible longest palindromic subsequence is "bbbb".

**Example 2:**

**Input:** `s = "cbbd"`  
**Output:** `2`  
**Explanation:** One possible longest palindromic subsequence is "bb".

### Constraints

- `1 <= s.length <= 1000`
- `s` consists only of lowercase English letters.

---

## Approach

To solve this problem, we can use dynamic programming. We will create a 2D array `dp` where `dp[i][j]` represents the length of the longest palindromic subsequence in the substring `s[i:j+1]`.

### Steps:

1. Initialize a 2D array `dp` of size `n x n` where `n` is the length of the string `s`. Set all elements to 0.
2. For each single character, set `dp[i][i] = 1` because a single character is a palindrome of length 1.
3. Fill the `dp` array in a bottom-up manner:
   - For each substring length `l` from 2 to `n`:
     - For each starting index `i` from 0 to `n-l`:
       - Set `j = i + l - 1`.
       - If `s[i] == s[j]`, then `dp[i][j] = dp[i+1][j-1] + 2`.
       - Otherwise, `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`.
4. The result will be `dp[0][n-1]`, the length of the longest palindromic subsequence in the entire string.

### Solution

#### Java Solution

```java
class Solution {
    public int longestPalindromeSubseq(String s) {
        int n = s.length();
        int[][] dp = new int[n][n];
        
        for (int i = n - 1; i >= 0; i--) {
            dp[i][i] = 1;
            for (int j = i + 1; j < n; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[0][n - 1];
    }
}
```
#### C++ Solution 

```cpp
class Solution {
public:
    int longestPalindromeSubseq(string s) {
        int n = s.length();
        vector<vector<int>> dp(n, vector<int>(n, 0));
        
        for (int i = n - 1; i >= 0; i--) {
            dp[i][i] = 1;
            for (int j = i + 1; j < n; j++) {
                if (s[i] == s[j]) {
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                } else {
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[0][n - 1];
    }
};
```
#### Python Solution

```python
class Solution:
    def longestPalindromeSubseq(self, s: str) -> int:
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        
        for i in range(n - 1, -1, -1):
            dp[i][i] = 1
            for j in range(i + 1, n):
                if s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1] + 2
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
        
        return dp[0][n - 1]
```
### Complexity Analysis
**Time Complexity:** O(n^2)
>Reason: We are filling an n x n table, and each cell takes constant time to compute.

**Space Complexity:** O(n^2)
>Reason: We use a 2D array dp of size n x n to store the intermediate results.

### References
**LeetCode Problem:** Longest Palindromic Subsequence