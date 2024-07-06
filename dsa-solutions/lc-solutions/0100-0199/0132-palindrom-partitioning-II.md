---
id: palindrom-partitioning-II
title: Palindrom Partitioning -II
sidebar_label: 0132-Palindrom partitioning -II
tags:
  - string
  - DP
  - BackTracking
description: "This is a solution to the Palindrom Partitioning -II problem on LeetCode."
---

## Problem Description
Given a string s, partition s such that every 
substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

 
### Examples

**Example 1:**
```
Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
```

**Example 2:**
```
Input: s = "a"
Output: 0
```
**Example 3:**
```
Input: s = "ab"
Output: 1
```

### Constraints

- `1 <= s.length <= 2000`
- s consists of lowercase English letters only.

---


## Approach to Min Cut for Palindrome Partitioning

The `minCut` function solves the problem of determining the minimum number of cuts needed to partition a string such that every substring is a palindrome. The approach uses dynamic programming to achieve this efficiently.

### Approach

1. **Palindrome Check with DP Table:**
   - A 2D DP table, `isPaldp`, is used where `isPaldp[s][e]` indicates whether the substring from index `s` to `e` is a palindrome.
   - A recursive function `isPal` checks if a substring is a palindrome by comparing the characters at the current indices and checking the palindrome status of the inner substring.

2. **Precompute Palindrome Substrings:**
   - Iterate over all possible substrings of the input string `s` and populate the `isPaldp` table using the `isPal` function.

3. **Dynamic Programming for Minimum Cuts:**
   - An array `dp` is used where `dp[i]` represents the minimum number of cuts needed for the substring starting at index `i` to the end of the string.
   - Initialize `dp[n]` to `0` because no cuts are needed for an empty substring.
   - Iterate backwards from the end of the string, and for each position, compute the minimum cuts required by checking all substrings starting from that position that are palindromes.

4. **Result Computation:**
   - The final result is `dp[0] - 1` because `dp[0]` includes an extra cut for the initial partition.




#### Code in Different Languages

### C++
```c++
class Solution {
public:
    bool isPal(string& str, int s, int e, vector<vector<int>>& isPaldp) {
        if (s >= e) return true; // Correct base case for palindrome check

        if (isPaldp[s][e] != -1) return isPaldp[s][e];

        if (str[s] == str[e]) {
            return isPaldp[s][e] = isPal(str, s + 1, e - 1, isPaldp);
        } else {
            return isPaldp[s][e] = false;
        }
    }

    int minCut(string s) {
        int n = s.size();
        vector<int> dp(n + 1, INT_MAX); // Initialize with INT_MAX for min comparison
        vector<vector<int>> isPaldp(n, vector<int>(n, -1));

        // Precompute the palindrome status
        for (int i = 0; i < n; ++i) {
            for (int j = i; j < n; ++j) {
                isPal(s, i, j, isPaldp);
            }
        }

        dp[n] = 0; // No cuts needed for an empty substring

        for (int i = n - 1; i >= 0; --i) {
            int cuts = INT_MAX;
            for (int j = i; j < n; ++j) {
                if (isPaldp[i][j]) {
                    cuts = min(cuts, 1 + dp[j + 1]);
                }
            }
            dp[i] = cuts;
        }

        return dp[0] - 1;
    }
};
```

### Pyhton 
```java
// Approach - 0 Recursion
class Solution {
    public int minCut(String str) {
        
        int n = str.length();
        return f(0, n, str) - 1;
    }
    boolean isPalindrome(int i, int j, String s) {

        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) return false;
            i++;
            j--;
        }
        return true;
    }

    int f(int i, int n, String str) {
        // Base case:
        if (i == n) return 0;

        int minCost = Integer.MAX_VALUE;
        // String[i...j]
        for (int j = i; j < n; j++) {
            if (isPalindrome(i, j, str)) {
                int cost = 1 + f(j + 1, n, str);
                minCost = Math.min(minCost, cost);
            }
        }
        return minCost;
    }
}
```


### Complexity

- **Time Complexity:** O(n^2), where `n` is the length of the string. This is due to the palindrome checks and the nested loops for computing the minimum cuts.
- **Space Complexity:** O(n^2), due to the 2D DP table for storing palindrome statuses.

### Example

For the string `"aab"`, the function computes the minimum cuts required to partition the string into palindromic substrings. For `"aab"`, the optimal partitioning is `"a" | "a" | "b"`, resulting in 2 cuts.


