---
id: delete-operations-for-2-strings
title: delete operations for 2 strings
sidebar_label: 583-delete operations for 2 strings
tags:
- Recursion
- Dynamic Programming
- Java
- Cpp
- Python
description: "Given two strings , return the min no of steps in which you can make one string to another."
---

## Problem

Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

### Examples

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"
**Output:** 2
**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

**Example 2:**

**Input:** word1 = "leetcode", word2 = "etco"
**Output:** 4

### Constraints

- `1 <= word1.length, word2.length <= 500`
 - `word1` and `word2` consist of only lowercase English characters.



---

## Approach

In this we will try to find the longest common subsequence among them , then subtract the sum of the length of both the strings from the length of the lcs multiply by 2.

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

5. Calculation of the final ans

To calculate the final ans we have to subtract the twice the length of the lcs from the sum of the length of both the strings.

### Solution

#### Java Solution

```java
import java.util.Arrays;

class Solution {

    public int longest(String s , String t , int ind1 , int ind2 , int [][]dp){
      if(ind1 <0 || ind2<0) return 0;
        if(dp[ind1][ind2]!=-1) return dp[ind1][ind2];
        if(s.charAt(ind1)== t.charAt(ind2)) return dp[ind1][ind2] = 1 + longest(s , t ,ind1-1 , ind2-1 , dp);
        else return dp[ind1][ind2] = Math.max(longest(s ,t,  ind1-1 , ind2 , dp) , longest(s ,t , ind1 , ind2-1 , dp));
    }
    public int minDistance(String word1, String word2) {
          int n = word1.length();
          int m = word2.length();

        int dp[][] = new int[n][m];
        for(int i[] : dp){
            Arrays.fill(i,-1);
        }
        int len = longest( word1 , word2, n-1 , m-1 , dp);
      return (n+m) - 2*len;
    }
}


```
### C++ Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int longest(string s, string t, int ind1, int ind2, vector<vector<int>>& dp) {
        if (ind1 < 0 || ind2 < 0) return 0;
        if (dp[ind1][ind2] != -1) return dp[ind1][ind2];
        if (s[ind1] == t[ind2]) {
            dp[ind1][ind2] = 1 + longest(s, t, ind1 - 1, ind2 - 1, dp);
        } else {
            dp[ind1][ind2] = max(longest(s, t, ind1 - 1, ind2, dp), longest(s, t, ind1, ind2 - 1, dp));
        }
        return dp[ind1][ind2];
    }

    int minDistance(string word1, string word2) {
        int n = word1.length();
        int m = word2.length();
        vector<vector<int>> dp(n, vector<int>(m, -1));
        int length = longest(word1, word2, n - 1, m - 1, dp);
        return (n + m) - 2 * length;
    }
};
```
### Python Solution

```python
class Solution:

    def longest(self, s, t, ind1, ind2, dp):
        if ind1 < 0 or ind2 < 0:
            return 0
        if dp[ind1][ind2] != -1:
            return dp[ind1][ind2]
        if s[ind1] == t[ind2]:
            dp[ind1][ind2] = 1 + self.longest(s, t, ind1 - 1, ind2 - 1, dp)
        else:
            dp[ind1][ind2] = max(self.longest(s, t, ind1 - 1, ind2, dp), self.longest(s, t, ind1, ind2 - 1, dp))
        return dp[ind1][ind2]

    def minDistance(self, word1, word2):
        n = len(word1)
        m = len(word2)
        dp = [[-1] * m for _ in range(n)]
        length = self.longest(word1, word2, n - 1, m - 1, dp)
        return (n + m) - 2 * length
```

### Complexity Analysis
**Time Complexity:** O(m * n)
>where n and m are lengths of the first and second string respectively. 

**Space Complexity:** O(n*m)
>Reason: We are using the extra space in the form of dp array.

### References
**LeetCode Problem:** Delete operations for 2 strings