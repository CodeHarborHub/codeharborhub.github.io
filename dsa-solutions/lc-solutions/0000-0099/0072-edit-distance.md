---
id: edit-distance
title: Edit Distance(LeetCode)
sidebar_label: 0072-Edit-Distance
tags:
  - String
  - Dynamic Programming
description: Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
sidebar_position: 72
---

## Problem Statement

Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`.

You have the following three operations permitted on a word:

- Insert a character
- Delete a character
- Replace a character

### Examples

**Example 1:**

```plaintext
Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

**Example 2:**

```plaintext
Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
```

### Constraints

- `0 <= word1.length, word2.length <= 500`
- `word1` and `word2` consist of lowercase English letters.

## Solution

We explore two main approaches: Recursive Dynamic Programming with 
Memoization and Iterative Dynamic Programming with Tabulation.

### Approach 1: Recursive Dynamic Programming (Memoization)
Concept: Store the solutions for each position to avoid redundant calculations.

#### Algorithm

For every index of string S1, we have three options to match that index with string S2, i.e replace the character, remove the character or insert some character at that index. Therefore, we can think in terms of string matching path as we have done already in previous questions.

As there is no uniformity in data, there is no other way to find out than to try out all possible ways. To do so we will need to use recursion.

Steps to memoize a recursize solution:
- Create a dp array of size [n][m]. The size of S1 and S2 are n and m respectively, so the variable i will always lie between ‘0’ and ‘n-1’ and the variable j between ‘0’ and ‘m-1’.
-  We initialize the dp array to -1.
Whenever we want to find the answer to particular parameters (say f(i,j)), we first check whether the answer is already calculated using the dp array(i.e dp[i][j]!= -1 ). If yes, simply return the value from the dp array.
- If not, then we are finding the answer for the given value for the first time, we will use the recursive relation as usual but before returning from the function, we will set dp[i][j] to the solution we get.

#### Implementation

```C++
int editDistanceUtil(string& S1, string& S2, int i, int j, vector<vector<int>>& dp) {
    if (i < 0)
        return j + 1;
    if (j < 0)
        return i + 1;

    if (dp[i][j] != -1)
        return dp[i][j];

    if (S1[i] == S2[j])
        return dp[i][j] = 0 + editDistanceUtil(S1, S2, i - 1, j - 1, dp);

    else
        return dp[i][j] = 1 + min(editDistanceUtil(S1, S2, i - 1, j - 1, dp),
                                  min(editDistanceUtil(S1, S2, i - 1, j, dp),
                                      editDistanceUtil(S1, S2, i, j - 1, dp)));
}

int editDistance(string& S1, string& S2) {
    int n = S1.size();
    int m = S2.size();

    vector<vector<int>> dp(n, vector<int>(m, -1));

    return editDistanceUtil(S1, S2, n - 1, m - 1, dp);
}
```

### Complexity Analysis

- **Time complexity**: O(N*M)
Reason: There are N*M states therefore at max ‘N*M’ new problems will be solved.
- **Space complexity**: O(N*M) + O(N+M)
Reason: We are using a recursion stack space(O(N+M)) and a 2D array ( O(N*M)).

### Approach 2: Iterative Dynamic Programming (Tabulation)

Concept: In the recursive logic, we set the base case to `if(i<0)` and `if(j<0)` but we can’t set the dp array’s index to -1. Therefore a hack for this issue is to shift every index by 1 towards the right.

#### Algorithm

1. First we initialise the dp array of size [n+1][m+1] as zero.
2. Next, we set the base condition (keep in mind 1-based indexing), we set the first column’s value as i and the first row as j( 1-based indexing).
3. Similarly, we will implement the recursive code by keeping in mind the shifting of indexes, therefore S1[i] will be converted to S1[i-1]. Same for S2.
4. At last, we will print dp[N][M] as our answer.required.
   
#### Implementation 

```C++
int editDistance(string& S1, string& S2) {
    int n = S1.size();
    int m = S2.size();

    // Create a DP table to store edit distances
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    // Initialize the first row and column
    for (int i = 0; i <= n; i++) {
        dp[i][0] = i;
    }
    for (int j = 0; j <= m; j++) {
        dp[0][j] = j;
    }

    // Fill in the DP table
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (S1[i - 1] == S2[j - 1]) {
                // If the characters match, no additional cost
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // Minimum of three choices:
                // 1. Replace the character at S1[i-1] with S2[j-1]
                // 2. Delete the character at S1[i-1]
                // 3. Insert the character at S2[j-1] into S1
                dp[i][j] = 1 + min(dp[i - 1][j - 1], min(dp[i - 1][j], dp[i][j - 1]));
            }
        }
    }

    // The value at dp[n][m] contains the edit distance
    return dp[n][m];
}
```

### Complexity Analysis

- **Time complexity**: $O(N \times M)$
Reason: There are two nested loops
- **Space complexity**: $O(N \times M)$
Reason: We are using an external array of size ‘N*M’. Stack Space is eliminated.
