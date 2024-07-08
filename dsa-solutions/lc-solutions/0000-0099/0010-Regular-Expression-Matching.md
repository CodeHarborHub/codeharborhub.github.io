---
id: regular-expression-matching
title: Regular Expression Matching (LeetCode)
sidebar_label: 0010 - Regular Expression Matching
tags: 
  - String
  - Dynamic Programming
  - Recursion
description: Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where '.' matches any single character and '*' matches zero or more of the preceding element.
sidebar_position: 10
---

## Problem Description

Given an input string `s` and a pattern `p`, implement regular expression matching with support for '.' and '*' where:

- '.' Matches any single character.
- '*' Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

### Examples

**Example 1:**

```
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input: s = "aa", p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input: s = "ab", p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

### Constraints

- 1 < s.length < 20
- 1 < p.length < 20
- `s` contains osnly lowercase English letters.
- `p` contains only lowercase English letters, '.', and '*'.
- It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

## Solution

### Approach 1: Recursion

#### Intuition

If there were no Kleene stars (the * wildcard character for regular expressions), the problem would be easier - we simply check from left to right if each character of the text matches the pattern.

When a star is present, we may need to check many different suffixes of the text and see if they match the rest of the pattern. A recursive solution is a straightforward way to represent this relationship.

#### Algorithm

Without a Kleene star, our solution would look like this:

```python
def match(text, pattern):
    if not pattern:
        return not text
    first_match = bool(text) and pattern[0] in {text[0], "."}
    return first_match and match(text[1:], pattern[1:])
```

If a star is present in the pattern, it will be in the second position `pattern[1]`. Then, we may ignore this part of the pattern, or delete a matching character in the text. If we have a match on the remaining strings after any of these operations, then the initial inputs matched.

#### Code (Java)

```java
class Solution {
    public boolean isMatch(String text, String pattern) {
        if (pattern.isEmpty()) return text.isEmpty();
        boolean first_match =
            (!text.isEmpty() &&
                (pattern.charAt(0) == text.charAt(0) ||
                    pattern.charAt(0) == '.'));

        if (pattern.length() >= 2 && pattern.charAt(1) == '*') {
            return (
                isMatch(text, pattern.substring(2)) ||
                (first_match && isMatch(text.substring(1), pattern))
            );
        } else {
            return (
                first_match && isMatch(text.substring(1), pattern.substring(1))
            );
        }
    }
}
```

#### Code (Python)

```python
class Solution:
    def isMatch(self, text: str, pattern: str) -> bool:
        if not pattern:
            return not text

        first_match = bool(text) and pattern[0] in {text[0], "."}

        if len(pattern) >= 2 and pattern[1] == "*":
            return (
                self.isMatch(text, pattern[2:])
                or first_match
                and self.isMatch(text[1:], pattern)
            )
        else:
            return first_match and self.isMatch(text[1:], pattern[1:])
```

### Approach 2: Dynamic Programming

#### Intuition

As the problem has an optimal substructure, it is natural to cache intermediate results. We ask the question `dp(i, j)`: does `text[i:]` and `pattern[j:]` match? We can describe our answer in terms of answers to questions involving smaller strings.

#### Top-Down Variation (Java)

```java
enum Result {
    TRUE,
    FALSE,
}

class Solution {
    Result[][] memo;

    public boolean isMatch(String text, String pattern) {
        memo = new Result[text.length() + 1][pattern.length() + 1];
        return dp(0, 0, text, pattern);
    }

    public boolean dp(int i, int j, String text, String pattern) {
        if (memo[i][j] != null) {
            return memo[i][j] == Result.TRUE;
        }
        boolean ans;
        if (j == pattern.length()) {
            ans = i == text.length();
        } else {
            boolean first_match =
                (i < text.length() &&
                    (pattern.charAt(j) == text.charAt(i) ||
                        pattern.charAt(j) == '.'));

            if (j + 1 < pattern.length() && pattern.charAt(j + 1) == '*') {
                ans = (dp(i, j + 2, text, pattern) ||
                    (first_match && dp(i + 1, j, text, pattern)));
            } else {
                ans = first_match && dp(i + 1, j + 1, text, pattern);
            }
        }
        memo[i][j] = ans ? Result.TRUE : Result.FALSE;
        return ans;
    }
}
```

#### Bottom-Up Variation (Java)

```java
class Solution {
    public boolean isMatch(String text, String pattern) {
        boolean[][] dp = new boolean[text.length() + 1][pattern.length() + 1];
        dp[text.length()][pattern.length()] = true;

        for (int i = text.length(); i >= 0; i--) {
            for (int j = pattern.length() - 1; j >= 0; j--) {
                boolean first_match =
                    (i < text.length() &&
                        (pattern.charAt(j) == text.charAt(i) ||
                            pattern.charAt(j) == '.'));
                if (j + 1 < pattern.length() && pattern.charAt(j + 1) == '*') {
                    dp[i][j] = dp[i][j + 2] || (first_match && dp[i + 1][j]);
                } else {
                    dp[i][j] = first_match && dp[i + 1][j + 1];
                }
            }
        }
        return dp[0][0];
    }
}
```

#### Code (Python)

```python
class Solution:
    def isMatch(self, text: str, pattern: str) -> bool:
        memo = {}

        def dp(i: int, j: int) -> bool:
            if (i, j) not in memo:
                if j == len(pattern):
                    ans = i == len(text)
                else:
                    first_match = i < len(text) and pattern[j] in {text[i], "."}
                    if j + 1 < len(pattern) and pattern[j + 1] == "*":
                        ans = dp(i, j + 2) or first_match and dp(i + 1, j)
                    else:
                        ans = first_match and dp(i + 1, j + 1)

                memo[i, j] = ans
            return memo[i, j]

        return dp(0, 0)
```
Complexity Analysis
Time Complexity
Let T, P be the lengths of the text and the pattern respectively. The work for every call to dp(i, j) for i=0,...,T; j=0,...,P is done once, and it is $O(1)$ work. Hence, the time complexity is $O(TP)$.

Space Complexity
The only memory we use is the $O(TP)$ boolean entries in our cache. Hence, the space complexity is $O(TP)$


Now, just as you asked, the last part should include the summary and links to the problem, solution, and profile. Let's add that:

## Summary

This problem involves implementing regular expression matching with support for '.' and '*', where '.' matches any single character and '*' matches zero or more of the preceding element. Two approaches are commonly used to solve this problem:

1. **Recursion**: This approach involves a straightforward recursive solution. If there were no Kleene stars, checking from left to right if each character of the text matches the pattern would suffice. When a star is present, we may need to check many different suffixes of the text and see if they match the rest of the pattern.

2. **Dynamic Programming**: As the problem has an optimal substructure, we can use dynamic programming to cache intermediate results. We can describe our answer in terms of answers to questions involving smaller strings.


