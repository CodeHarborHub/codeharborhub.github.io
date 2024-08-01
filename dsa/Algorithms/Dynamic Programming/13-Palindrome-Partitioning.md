---
id: palindrome-partitioning
title: Palindrome Partitioning
sidebar_label: Palindrome Partitioning
tags: [python, java, c++, programming, algorithms, dynamic programming, strings, tutorial, in-depth]
description: In this tutorial, we will learn about the Palindrome Partitioning problem and its solution using Dynamic Programming in Python, Java, and C++ with detailed explanations and examples.
---

# Palindrome Partitioning

The Palindrome Partitioning problem involves partitioning a given string such that every substring of the partition is a palindrome. We aim to find the minimum number of cuts needed for a palindrome partitioning of the string.

## Problem Statement

Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return the minimum cuts needed for a palindrome partitioning of `s`.

### Intuition

To solve this problem, we use dynamic programming. We maintain an array `dp` where `dp[i]` represents the minimum number of cuts needed for a palindrome partitioning of the substring `s[0:i+1]`.

## Dynamic Programming Approach

We use a 2D boolean array `isPalindrome` to keep track of whether a substring `s[i:j+1]` is a palindrome. Then we build the `dp` array using the `isPalindrome` array.

## Pseudocode for Palindrome Partitioning using DP

#### Initialize:

```markdown
dp = [0] * len(s)
for i in range(len(s)):
    min_cut = i
    for j in range(i + 1):
        if s[j:i+1] is a palindrome:
            min_cut = 0 if j == 0 else min(min_cut, dp[j-1] + 1)
    dp[i] = min_cut
return dp[-1]
```

### Example Output:

Given the string:

- `s = "aab"`

The minimum cuts needed for a palindrome partitioning is `1`.

### Output Explanation:

We can partition the string as `"aa" | "b"`, which requires `1` cut.

## Implementing Palindrome Partitioning using DP

### Python Implementation

```python
class Solution:
    def minCut(self, s: str) -> int:
        n = len(s)
        dp = [0] * n
        is_palindrome = [[False] * n for _ in range(n)]
        
        for i in range(n):
            min_cut = i
            for j in range(i + 1):
                if s[j] == s[i] and (i - j <= 2 or is_palindrome[j + 1][i - 1]):
                    is_palindrome[j][i] = True
                    min_cut = 0 if j == 0 else min(min_cut, dp[j - 1] + 1)
            dp[i] = min_cut
        
        return dp[-1]

s = "aab"
solution = Solution()
print(solution.minCut(s))  # Output: 1
```

### Java Implementation

```java
class Solution {
    public int minCut(String s) {
        int n = s.length();
        int[] dp = new int[n];
        boolean[][] isPalindrome = new boolean[n][n];

        for (int i = 0; i < n; i++) {
            int minCut = i;
            for (int j = 0; j <= i; j++) {
                if (s.charAt(j) == s.charAt(i) && (i - j <= 2 || isPalindrome[j + 1][i - 1])) {
                    isPalindrome[j][i] = true;
                    minCut = j == 0 ? 0 : Math.min(minCut, dp[j - 1] + 1);
                }
            }
            dp[i] = minCut;
        }

        return dp[n - 1];
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String s = "aab";
        System.out.println(solution.minCut(s));  // Output: 1
    }
}
```
### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minCut(string s) {
        int n = s.length();
        vector<int> dp(n, 0);
        vector<vector<bool>> isPalindrome(n, vector<bool>(n, false));

        for (int i = 0; i < n; i++) {
            int minCut = i;
            for (int j = 0; j <= i; j++) {
                if (s[j] == s[i] && (i - j <= 2 || isPalindrome[j + 1][i - 1])) {
                    isPalindrome[j][i] = true;
                    minCut = j == 0 ? 0 : min(minCut, dp[j - 1] + 1);
                }
            }
            dp[i] = minCut;
        }

        return dp[n - 1];
    }
};

int main() {
    Solution solution;
    string s = "aab";
    cout << solution.minCut(s) << endl;  // Output: 1
    return 0;
}
```

## Complexity Analysis

- Time Complexity: $O(n^2)$, where n is the length of the string.
- Space Complexity: $O(n^2)$, for storing the isPalindrome array.

## Conclusion

The Palindrome Partitioning problem can be efficiently solved using dynamic programming. The provided implementations in Python, Java, and C++ demonstrate how to find the minimum cuts needed for a palindrome partitioning of a given string.