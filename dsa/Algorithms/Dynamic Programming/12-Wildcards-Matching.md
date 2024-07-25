---
id: wildcards-matching
title: Wildcards Matching using Dynamic Programming
sidebar_label: Wildcards Matching
tags: [python, java, c++, programming, algorithms, dynamic programming, strings, tutorial, in-depth]
description: In this tutorial, we will learn about Wildcards Matching and its solution using Dynamic Programming in Python, Java, and C++ with detailed explanations and examples.
---

# Wildcards Matching using Dynamic Programming

Wildcards Matching is a problem where we determine if a given text matches a pattern that includes wildcard characters. The two common wildcards are `?` which matches any single character, and `*` which matches any sequence of characters (including an empty sequence).

## Problem Statement

Given a text and a pattern with wildcards, determine if the text matches the pattern.

### Intuition

The problem can be efficiently solved using dynamic programming by breaking it down into subproblems. We use a DP table where `dp[i][j]` indicates if the first `i` characters of the text match the first `j` characters of the pattern.

## Dynamic Programming Approach

Using dynamic programming, we fill the table based on the recurrence relations:
- If the pattern character is `*`, it can match zero or more characters.
- If the pattern character is `?` or matches the current text character, update the DP table accordingly.

## Pseudocode for Wildcards Matching using DP

#### Initialize:

```markdown
dp[0][0] = True
for j from 1 to len(pattern):
    if pattern[j-1] == '*':
        dp[0][j] = dp[0][j-1]

for i from 1 to len(text):
    for j from 1 to len(pattern):
        if pattern[j-1] == '*':
            dp[i][j] = dp[i][j-1] or dp[i-1][j]
        elif pattern[j-1] == '?' or pattern[j-1] == text[i-1]:
            dp[i][j] = dp[i-1][j-1]

return dp[len(text)][len(pattern)]
```


### Example Output:

Given the graph:

- `Vertices: {0, 1, 2, 3}`
- `Edges: {(0, 1, 1), (1, 2, 3), (2, 3, 2), (3, 1, -6)}`

The set can be partitioned into two subsets with equal sum.

### Output Explanation:

The shortest distances from the source vertex 0 to all other vertices are:

- `0 -> 1: 1`
- `0 -> 2: 4`
- `0 -> 3: 6`

By following the Bellman-Ford algorithm, the shortest path distances from the source vertex 0 to vertices 1, 2, and 3 are found to be 1, 4, and 6 respectively.

## Implementing Bellman-Ford Algorithm using DP

### Python Implementation

```python
def is_match(text, pattern):
    m, n = len(text), len(pattern)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True

    for j in range(1, n + 1):
        if pattern[j - 1] == '*':
            dp[0][j] = dp[0][j - 1]

    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if pattern[j - 1] == '*':
                dp[i][j] = dp[i][j - 1] or dp[i - 1][j]
            elif pattern[j - 1] == '?' or pattern[j - 1] == text[i - 1]:
                dp[i][j] = dp[i - 1][j - 1]

    return dp[m][n]

text = "abcd"
pattern = "a*d"
print("The text matches the pattern." if is_match(text, pattern) else "The text does not match the pattern.")
```

### Java Implementation

```java
public class WildcardMatching {
    public static boolean isMatch(String text, String pattern) {
        int m = text.length(), n = pattern.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;

        for (int j = 1; j <= n; j++) {
            if (pattern.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 1];
            }
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (pattern.charAt(j - 1) == '*') {
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                } else if (pattern.charAt(j - 1) == '?' || pattern.charAt(j - 1) == text.charAt(i - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {
        String text = "abcd";
        String pattern = "a*d";
        System.out.println("The text matches the pattern." if isMatch(text, pattern) else "The text does not match the pattern.");
    }
}
```
### C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool isMatch(const string& text, const string& pattern) {
    int m = text.size(), n = pattern.size();
    vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
    dp[0][0] = true;

    for (int j = 1; j <= n; j++) {
        if (pattern[j - 1] == '*') {
            dp[0][j] = dp[0][j - 1];
        }
    }

    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (pattern[j - 1] == '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            } else if (pattern[j - 1] == '?' || pattern[j - 1] == text[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
}

int main() {
    string text = "abcd";
    string pattern = "a*d";
    cout << (isMatch(text, pattern) ? "The text matches the pattern." : "The text does not match the pattern.") << endl;
    return 0;
}
```

## Complexity Analysis

- Time Complexity: $O(m \times n)$, where m is the length of the text and n is the length of the pattern.
- Space Complexity: $O(m \times n)$, for storing the DP table.

## Conclusion

Dynamic programming provides an efficient solution for Wildcards Matching by breaking it into subproblems and storing intermediate results. This technique can be extended to solve other pattern matching problems with overlapping subproblems and optimal substructure properties.