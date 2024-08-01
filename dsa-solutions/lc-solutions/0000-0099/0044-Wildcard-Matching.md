---
id: wildcard-matching
title: Wildcard Matching (LeetCode Problem - solution)
sidebar_label: 44 Wildcard Matching
tags:
  - Array
  - strings
description: Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where.
sidebar_position: 44
---

## Problem Statement

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for `'?'` and `'*'` where:

- `'?'` Matches any single character.
- `'*'` Matches any sequence of characters (including the empty sequence).

The matching should cover the entire input string (not partial).

## Examples

### Example 1

```plaintext
Input: s = "aa", p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

### Example 2

```plaintext
Input: s = "aa", p = "*"
Output: true
Explanation: '*' matches any sequence.
```

### Example 3

```plaintext
Input: s = "cb", p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
```

## Constraints

- <code>$0 \leq \text{s.length}, \text{p.length} \leq 2000$</code>
- `s` contains only lowercase English letters.
- `p` contains only lowercase English letters, `'?'` or `'*'`.
- It is guaranteed for each appearance of the character `'*'` there will be a previous valid character to match.

---

## Solution

The problem can be solved using dynamic programming. We can create a 2D array `dp` of size `n+1` x `m+1` where `n` is the length of the string `s` and `m` is the length of the pattern `p`. The value of `dp[i][j]` will be `true` if the first `i` characters of the string `s` match the first `j` characters of the pattern `p`.

The base case will be `dp[0][0] = true` as an empty string matches an empty pattern. The value of `dp[i][0]` will be `false` as an empty pattern cannot match a non-empty string. The value of `dp[0][j]` will be `true` if the pattern `p` consists of only `*` characters.

For each cell `dp[i][j]`, we will check the following conditions:

1. If the $i^{th}$ character of the string `s` matches the $j^{th}$ character of the pattern `p` or the $j^{th}$ character of the pattern `p` is `?`, then `dp[i][j] = dp[i-1][j-1]`.
2. If the $j^{th}$ character of the pattern `p` is `*`, then `dp[i][j] = dp[i-1][j] || dp[i][j-1]`.

Finally, the value of `dp[n][m]` will be the answer.

<Tabs>
  <TabItem value="JavaScript"  label="JavaScript" default>
  <SolutionAuthor name="@ajay-dhangar"/>
   ```js
    /**
     * @param {string} s
     * @param {string} p
     * @return {boolean}
     */

    var isMatch = function(s, p) {
        let n = s.length;
        let m = p.length;
        let dp = new Array(n+1).fill(false).map(() => new Array(m+1).fill(false));
        dp[0][0] = true;

        for (let j = 1; j <= m; j++) {
            if (p[j-1] === '*') {
                dp[0][j] = dp[0][j-1];
            }
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (s[i-1] === p[j-1] || p[j-1] === '?') {
                    dp[i][j] = dp[i-1][j-1];
                } else if (p[j-1] === '*') {
                    dp[i][j] = dp[i-1][j] || dp[i][j-1];
                }
            }
        }

        return dp[n][m];
    };
   ```
  </TabItem>

  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@ajay-dhangar"/>
   ```python
    def isMatch(s: str, p: str) -> bool:
        n, m = len(s), len(p)
        dp = [[False] * (m+1) for _ in range(n+1)]
        dp[0][0] = True

        for j in range(1, m+1):
            if p[j-1] == '*':
                dp[0][j] = dp[0][j-1]

        for i in range(1, n+1):
            for j in range(1, m+1):
                if s[i-1] == p[j-1] or p[j-1] == '?':
                    dp[i][j] = dp[i-1][j-1]
                elif p[j-1] == '*':
                    dp[i][j] = dp[i-1][j] or dp[i][j-1]

        return dp[n][m]
   ```
  </TabItem>

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@amit-shukla"/>
   ```java
    class Solution {
        public boolean isMatch(String s, String p) {
            int n = s.length();
            int m = p.length();
            boolean[][] dp = new boolean[n+1][m+1];
            dp[0][0] = true;

            for (int j = 1; j <= m; j++) {
                if (p.charAt(j-1) == '*') {
                    dp[0][j] = dp[0][j-1];
                }
            }

            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= m; j++) {
                    if (s.charAt(i-1) == p.charAt(j-1) || p.charAt(j-1) == '?') {
                        dp[i][j] = dp[i-1][j-1];
                    } else if (p.charAt(j-1) == '*') {
                        dp[i][j] = dp[i-1][j] || dp[i][j-1];
                    }
                }
            }

            return dp[n][m];
        }
    }
   ```
  </TabItem>

</Tabs>

## Complexity Analysis

The time complexity for the above approach is $O(n \times m)$ where `n` is the length of the string `s` and `m` is the length of the pattern `p`.

The space complexity is $O(n \times m)$ as we are using a 2D array of size `n+1` x `m+1`.

## Video Content For Better Understanding

<LiteYouTubeEmbed
    id="3ZDZ-N0EPV0"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="Wildcard Matching - LeetCode"
    poster="maxresdefault"
    webp />

## Related Problems

- [Regular Expression Matching (LeetCode)](https://leetcode.com/problems/regular-expression-matching/)
- [Longest Common Subsequence (LeetCode)](https://leetcode.com/problems/longest-common-subsequence/)
- [Longest Common Subsequence (GeeksForGeeks)](https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/)

## References

- [LeetCode](https://leetcode.com/problems/wildcard-matching/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/wildcard-pattern-matching/)


---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ajay-dhangar', 'SadafKausar2025'].map(username => (
    <Author key={username} username={username} />
))}
</div>