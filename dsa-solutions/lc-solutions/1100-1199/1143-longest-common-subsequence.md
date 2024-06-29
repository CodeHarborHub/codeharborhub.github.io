---
id: longest common subsequence
title: longest common subsequence
sidebar_label: 1143-longest common subsequence
tags:
- Recursion
- Dynamic Programming
- Java
- Cpp
- Python
description: "Given two strings , return the longest common subsequence ."
---

## Problem

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

### Examples

**Example 1:**

**Input:** text1 = "abcde", text2 = "ace" 
**Output:** 3  
**Explanation:** The longest common subsequence is "ace" and its length is 3.

**Example 2:**

**Input:** text1 = "abc", text2 = "abc"
**Output:** 3
**Explanation:** The longest common subsequence is "abc" and its length is 3.

### Constraints

- `1 <= text1.length, text2.length <= 1000`
 - `text1` and `text2` consist of only lowercase English characters.



---

## Approach

To count the length of the longest common subsequence , will make 2 pointers pointing at the end of the two texts then will compare the characters at that index whether it is same or not then if not equal then decrement both otherwise return the max when decrementing both the pointers one by one.

### Steps:

1. Create a 2D table dp of size (m+1) x (n+1), where m and n are the lengths of the two input strings. Initialize all elements in the table to -1, which will serve as a flag to indicate that no result has been stored yet.

2. Fill the Memoization Table

Iterate through the table and fill it with the results of subproblems. For each cell dp[i][j], consider the following cases:

If i or j is 0, the longest common subsequence is 0 (since one of the strings is empty).
If the current characters at positions i-1 and j-1 in the two strings are the same, then the longest common subsequence is one more than the longest common subsequence of the substrings up to i-1 and j-1.
Otherwise, the longest common subsequence is the maximum of the longest common subsequences of the substrings up to i-1 and j, and the substrings up to i and j-1.
3. Read the Memoization Table

The value at dp[m][n] represents the length of the longest common subsequence. You can use this value to construct the actual subsequence by tracing back the table from dp[m][n] to dp[0][0].

4. Construct the Longest Common Subsequence

To construct the longest common subsequence, start from the bottom-right corner of the table and move diagonally up-left if the current characters match, or move up or left if they don’t. When you reach a cell with a value of -1, stop and backtrack to the previous cell.

### Solution

#### Java Solution

```java
import java.util.Arrays;
 
class Solution {
 
    static final int maximum = 1000;
 
    static int lcs(String X, String Y, int m, int n, int dp[][]) {
        if (m == 0 || n == 0) {
            return 0;
        }
  
        if (dp[m - 1][n - 1] != -1) {
            return dp[m - 1][n - 1];
        }
 
        if (X.charAt(m - 1) == Y.charAt(n - 1)) {
 
            dp[m - 1][n - 1] = 1 + lcs(X, Y, m - 1, n - 1, dp);
 
            return dp[m - 1][n - 1];
        } else {
 
            dp[m - 1][n - 1] = Math.max(lcs(X, Y, m, n - 1, dp),
                    lcs(X, Y, m - 1, n, dp));
 
            return dp[m - 1][n - 1];
        }
    }
}
 
```
### C++ Solution

```cpp
#include <bits/stdc++.h>
using namespace std;
 
const int maximum = 1000;
int lcs(string X, string Y, int m, int n, int dp[][maximum])
{
    if (m == 0 || n == 0)
        return 0;

    if (dp[m - 1][n - 1] != -1)
        return dp[m - 1][n - 1];
 
    if (X[m - 1] == Y[n - 1]) {
 
        dp[m - 1][n - 1] = 1 + lcs(X, Y, m - 1, n - 1, dp);
 
        return dp[m - 1][n - 1];
    }
    else {
 
        dp[m - 1][n - 1] = max(lcs(X, Y, m, n - 1, dp),
                               lcs(X, Y, m - 1, n, dp));
 
        return dp[m - 1][n - 1];
    }
}
```
### Python Solution

```python
maximum = 1000
def lcs(X, Y, m, n, dp):

    if (m == 0 or n == 0):
        return 0
 
    if (dp[m - 1][n - 1] != -1):
        return dp[m - 1][n - 1]
 
    if (X[m - 1] == Y[n - 1]):
 
        dp[m - 1][n - 1] = 1 + lcs(X, Y, m - 1, n - 1, dp)
 
        return dp[m - 1][n - 1]
 
    else :
 
        dp[m - 1][n - 1] = max(lcs(X, Y, m, n - 1, dp),
                               lcs(X, Y, m - 1, n, dp))
 
        return dp[m - 1][n - 1]
```

### Complexity Analysis
**Time Complexity:** O(m * n)
>where n and m are lengths of the first and second string respectively. 

**Space Complexity:** O(n*m)
>Reason: We are using the extra space in the form of dp array.

### References
**LeetCode Problem:** Longest Common Subsequence