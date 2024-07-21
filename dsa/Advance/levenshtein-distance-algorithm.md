---
id: levenshtein-distance
title: Levenshtein Distance Algorithm
sidebar_label: 0007 - Levenshtein Distance Algorithm
tags: [Levenshtein Distance, String Matching, Algorithm, C++, Problem Solving]
description: This is a solution for implementing the Levenshtein Distance Algorithm for measuring the difference between two sequences.
---

## Problem Statement 

### Problem Description

The Levenshtein Distance algorithm calculates the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one string into another. It is widely used in applications like spell checking, DNA sequencing, and natural language processing.

### Examples

**Example 1:**

```plaintext
Input: 
String1: "kitten"
String2: "sitting"
Output: 
3
Explanation: The Levenshtein Distance between "kitten" and "sitting" is 3 (kitten -> sitten -> sittin -> sitting).
```

### Constraints
- The length of both strings can be up to 10^3.

## Solution of Given Problem

### Intuition and Approach

The Levenshtein Distance algorithm uses dynamic programming to efficiently compute the edit distance between two strings. It constructs a matrix where the cell at position (i, j) contains the Levenshtein Distance between the first i characters of the first string and the first j characters of the second string.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sjain1909"/>
   ```cpp
    #include <bits/stdc++.h>
    using namespace std;

    int levenshteinDistance(const string& str1, const string& str2) {
    int len1 = str1.size();
    int len2 = str2.size();
    vector<vector<int>> dp(len1 + 1, vector<int>(len2 + 1));

    for (int i = 0; i <= len1; ++i) {
        for (int j = 0; j <= len2; ++j) {
            if (i == 0) {
                dp[i][j] = j;
            } else if (j == 0) {
                dp[i][j] = i;
            } else if (str1[i - 1] == str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});
            }
        }
    }

    return dp[len1][len2];
}

int main() {
    string str1, str2;
    cout << "Enter the first string: ";
    cin >> str1;
    cout << "Enter the second string: ";
    cin >> str2;

    int distance = levenshteinDistance(str1, str2);
    cout << "The Levenshtein Distance between \"" << str1 << "\" and \"" << str2 << "\" is " << distance << ".\n";

    return 0;
}
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(N * M)$ where N is the length of the first string and M is the length of the second string.
- **Space Complexity:** $O(N * M)$ for the dynamic programming matrix.

## Video Explanation of Given Problem

    <LiteYouTubeEmbed
      id="obWXjtg0L64"
      params="autoplay=1&autohide=1&showinfo=0&rel=0"
      title="Problem Explanation | Solution | Approach"
      poster="maxresdefault"
      webp 
    />
---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['sjain1909'].map(username => (
 <Author key={username} username={username} />
))}
</div>
