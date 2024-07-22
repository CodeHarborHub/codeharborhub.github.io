---
id: rabin-karp
title: Rabin Karp Algorithm Solution
sidebar_label: 0004 - Rabin Karp Algorithm
tags: [Rabin Karp, Substring Search, Algorithm, C++]
description: Efficient solution to the Rabin Karp algorithm problem using C++.
---

## Problem Statement 

### Problem Description

The Rabin Karp algorithm searches for a pattern in a text using a hashing function. It compares the hash value of the pattern with the hash value of substrings of the text. If the hash values match, it performs a further comparison to confirm the match.

### Examples

**Example 1:**

```plaintext
Input: Text = "GEEKS FOR GEEKS", Pattern = "GEEK"
Output: Pattern found at index 0
        Pattern found at index 10
```

**Example 2:**

```plaintext
Input: Text = "ABABDABACDABABCABAB", Pattern = "ABABCABAB"
Output: Pattern found at index 10
```

### Constraints
- The input should be a text and a pattern.
- The algorithm should efficiently handle large texts and multiple pattern searches.

## Solution of Given Problem

### Intuition and Approach

The Rabin Karp algorithm follows these steps:

1. Calculate the hash value of the pattern.
2. Calculate the hash value of the first substring of the text with the same length as the pattern.
3. Slide the pattern over the text one by one and compare the hash value of the current substring of the text with the hash value of the pattern.
4. If the hash values match, perform a further comparison to confirm the match.
5. If the hash values do not match, continue to the next substring.

### Approaches

#### Codes in Different Languages

<Tabs>
  
  <TabItem value="cpp" label="C++" default>
  <SolutionAuthor name="@sjain1909"/>
   ```cpp
#include <bits/stdc++.h>
using namespace std;

#define d 256 

void search(string pat, string txt, int q) {
    int M = pat.length();
    int N = txt.length();
    int i, j;
    int p = 0; 
    int t = 0; 
    int h = 1;

    for (i = 0; i < M - 1; i++)
        h = (h * d) % q;

    for (i = 0; i < M; i++) {
        p = (d * p + pat[i]) % q;
        t = (d * t + txt[i]) % q;
    }

    for (i = 0; i <= N - M; i++) {
        if (p == t) {
            for (j = 0; j < M; j++) {
                if (txt[i + j] != pat[j])
                    break;
            }
            if (j == M)
                cout << "Pattern found at index " << i << endl;
        }
        if (i < N - M) {
            t = (d * (t - txt[i] * h) + txt[i + M]) % q;
            if (t < 0)
                t = (t + q);
        }
    }
}

int main() {
    string txt = "GEEKS FOR GEEKS";
    string pat = "GEEK";
    int q = 101; 
    search(pat, txt, q);
    return 0;
}
   ```
  </TabItem>  
</Tabs>

### Complexity Analysis

- **Time Complexity:** Average case: $O(n + m)$, Worst case: $O(nm)$ (if all characters of the pattern and text are the same).
- **Space Complexity:** $O(1)$.
- Where `n` is the length of the text and `m` is the length of the pattern.

## Video Explanation of Given Problem

        <LiteYouTubeEmbed
          id="video_id"
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
