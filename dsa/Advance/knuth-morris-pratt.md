---
id: knuth-morris-pratt
title: Knuth-Morris-Pratt (KMP) Algorithm
sidebar_label: 0006 - Knuth-Morris-Pratt Algorithm
tags: [KMP, String Matching, Algorithm, C++, Problem Solving]
description: This is a solution for implementing the Knuth-Morris-Pratt (KMP) algorithm for efficient substring searching and pattern matching.
---

## Problem Statement 

### Problem Description

The Knuth-Morris-Pratt (KMP) algorithm is an efficient string searching algorithm that improves the performance of substring searches within a main string. The algorithm preprocesses the pattern to create a partial match table (also known as the "lps" array), which is used to skip unnecessary comparisons during the search process.

### Examples

**Example 1:**

```plaintext
Input: 
Text: "abxabcabcaby"
Pattern: "abcaby"
Output: 
Pattern found at index 6
```

### Constraints

- The length of the text and the pattern can be up to 10^5.

## Solution of Given Problem

### Intuition and Approach

The KMP algorithm follows these steps:

1. Preprocessing the Pattern: Compute the longest proper prefix which is also a suffix (lps) array.
2. Searching the Text: Use the lps array to skip characters in the text while matching the pattern.

### Approaches

#### Codes in Different Languages

<Tabs>
  <TabItem value="cpp" label="C++">
  <SolutionAuthor name="sjain1909"/>
   ```cpp
#include <bits/stdc++.h>
using namespace std;
void computeLPSArray(string& pat, int M, vector<int>& lps) {
    int length = 0;  
    lps[0] = 0;     
    int i = 1;

    while (i < M) {
        if (pat[i] == pat[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length != 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
}

void KMPSearch(string& pat, string& txt) {
    int M = pat.length();
    int N = txt.length();

    vector<int> lps(M);

    computeLPSArray(pat, M, lps);

    int i = 0; 
    int j = 0; 
    while (i < N) {
        if (pat[j] == txt[i]) {
            j++;
            i++;
        }

        if (j == M) {
            cout << "Pattern found at index " << i - j << "\n";
            j = lps[j - 1];
        } else if (i < N && pat[j] != txt[i]) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
}

int main() {
    string txt, pat;
    cout << "Enter the text: ";
    cin >> txt;
    cout << "Enter the pattern: ";
    cin >> pat;

    KMPSearch(pat, txt);

    return 0;
}
    ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity:** $O(N + M)$ where N is the length of the text and M is the length of the pattern.
- **Space Complexity:** $O(M)$ for the lps array.

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
