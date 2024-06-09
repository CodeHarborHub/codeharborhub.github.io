---
id: longest-common-subsequence
title: Longest Common Subsequence (LCS) using Dynamic Programming
sidebar_label: Longest Common Subsequence (LCS)
tags: [python, java, c++, javascript, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Longest Common Subsequence (LCS) problem and its implementation using Dynamic Programming in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Longest Common Subsequence (LCS) using Dynamic Programming

The Longest Common Subsequence (LCS) problem is a classic dynamic programming problem that finds the longest subsequence common to two sequences.

## Problem Statement

Given two sequences (X and Y), find the length of the longest common subsequence.

### Intuition

The LCS problem can be efficiently solved using dynamic programming. We can build a table to store the lengths of the longest common subsequences for various prefixes of the input sequences.

## Naive Recursive Approach

The naive recursive approach to solving the LCS problem has exponential time complexity and is not efficient for large inputs.

```python
def lcs_recursive(X, Y, m, n):
    if m == 0 or n == 0:
        return 0
    elif X[m - 1] == Y[n - 1]:
        return 1 + lcs_recursive(X, Y, m - 1, n - 1)
    else:
        return max(lcs_recursive(X, Y, m, n - 1), lcs_recursive(X, Y, m - 1, n))
```

## Dynamic Programming Approach

Using dynamic programming, we can efficiently solve the LCS problem by building a table and filling it iteratively.

### Bottom-Up Approach

We iteratively fill the table to find the length of the longest common subsequence.

## Pseudocode for LCS using DP

#### Initialize:

```markdown
Let m be the length of sequence X
Let n be the length of sequence Y

Create a table dp[m + 1][n + 1] to store lengths of LCS

Loop from 0 to m:
    Set dp[i][0] = 0

Loop from 0 to n:
    Set dp[0][j] = 0

Loop from 1 to m:
    Loop from 1 to n:
        If X[i-1] == Y[j-1]:
            dp[i][j] = dp[i-1][j-1] + 1
        Else:
            dp[i][j] = max(dp[i-1][j], dp[i][j-1])

Return dp[m][n] which represents the length of the LCS

```
### Example Output:
Given the input sequences:
- `X = "AGGTAB"`
- `Y = "GXTXAYB"`

The length of the Longest Common Subsequence (LCS) between `X` and `Y` is `4`.

### Output Explanation:
The Longest Common Subsequence (LCS) between `X` and `Y` is "GTAB", which has a length of `4`.

You can verify this by manually checking the common subsequences:

- "G", "G", "G", "A", "A", "B"
- "G", "G", "T", "A", "A", "B"
- "G", "X", "T", "A", "A", "B"
- "A", "G", "T", "A", "A", "B"
- "A", "X", "T", "A", "A", "B"
- "A", "G", "X", "A", "A", "B"
- "A", "G", "T", "X", "A", "B"
- "A", "G", "T", "A", "X", "B"
- "A", "G", "T", "A", "A", "X"

Out of these, "GTAB" is the longest common subsequence with a length of `4`, hence the output.

## Implementing LCS using DP

### Python Implementation

```python
def lcs_dp(X, Y):
    # Get lengths of input sequences
    m, n = len(X), len(Y)
    
    # Initialize a table to store lengths of LCS
    dp = [[0] * (n + 1) for _ in range(m + 1)]

    # Iterate through the sequences to fill the table
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            # If characters match, increment LCS length
            if X[i - 1] == Y[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                # Otherwise, take the maximum of previous LCS lengths
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

    # Return the length of LCS
    return dp[m][n]

```

### Java Implementation

```java
public class LCS {
    public static int lcs_dp(String X, String Y) {
        // Get lengths of input sequences
        int m = X.length();
        int n = Y.length();
        
        // Initialize a table to store lengths of LCS
        int[][] dp = new int[m + 1][n + 1];

        // Iterate through the sequences to fill the table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // If characters match, increment LCS length
                if (X.charAt(i - 1) == Y.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else
                    // Otherwise, take the maximum of previous LCS lengths
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        // Return the length of LCS
        return dp[m][n];
    }

    public static void main(String[] args) {
        // Example usage
        String X = "AGGTAB";
        String Y = "GXTXAYB";
        System.out.println("Length of LCS: " + lcs_dp(X, Y));
    }
}
```
### C++ Implementation

```cpp
#include <iostream>
#include <string>
using namespace std;

int lcs_dp(string X, string Y) {
    // Get lengths of input sequences
    int m = X.length();
    int n = Y.length();
    
    // Initialize a table to store lengths of LCS
    int dp[m + 1][n + 1];

    // Iterate through the sequences to fill the table
    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
            // Base case: if either sequence is empty, LCS length is 0
            if (i == 0 || j == 0)
                dp[i][j] = 0;
            // If characters match, increment LCS length
            else if (X[i - 1] == Y[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                // Otherwise, take the maximum of previous LCS lengths
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // Return the length of LCS
    return dp[m][n];
}

int main() {
    // Example usage
    string X = "AGGTAB";
    string Y = "GXTXAYB";
    cout << "Length of LCS: " << lcs_dp(X, Y) << endl;
    return 0;
}
```

### JavaScript Implementation

```javascript
function lcs_dp(X, Y) {
    // Get lengths of input sequences
    const m = X.length;
    const n = Y.length;
    
    // Initialize a table to store lengths of LCS
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));

    // Iterate through the sequences to fill the table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If characters match, increment LCS length
            if (X[i - 1] === Y[j - 1])
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                // Otherwise, take the maximum of previous LCS lengths
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    // Return the length of LCS
    return dp[m][n];
}

// Example usage
const X = "AGGTAB";
const Y = "GXTXAYB";
console.log("Length of LCS: " + lcs_dp(X, Y));
```

## Complexity Analysis

- Time Complexity: $O(m \times n)$, where m and n are the lengths of the input sequences X and Y, respectively.
- Space Complexity: $O(m \times n)$, due to the table used for dynamic programming.

## Conclusion

Dynamic programming provides an efficient solution for finding the longest common subsequence between two sequences by storing intermediate results and avoiding redundant calculations. This approach significantly reduces the time complexity compared to the naive recursive approach.
