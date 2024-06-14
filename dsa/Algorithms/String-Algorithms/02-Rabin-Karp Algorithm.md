---
id: Rabin-Karp
title: Rabin-Karp Algorithm (Geeks for Geeks)
sidebar_label: Rabin-Karp
tags:
  - Intermediate
  - String Matching Algorithms
  - Geeks for Geeks
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Rabin-Karp algorithm problem on Geeks for Geeks."
---

## 1. What is the Rabin-Karp Algorithm?

The Rabin-Karp algorithm is a string-searching algorithm that uses hashing to find an exact match of a pattern string within a text string. It is particularly effective when dealing with multiple pattern searches in the same text.

## 2. Algorithm for Rabin-Karp

1. Compute the hash value of the pattern.
2. Compute the hash value of the first window of text.
3. Slide the pattern over the text one character at a time, updating the hash value.
4. Compare the hash values, and if they match, check the actual substring to ensure there is no hash collision.

## 3. How does the Rabin-Karp Algorithm work?

- The algorithm uses a hash function to convert the current substring of text and the pattern into numerical values.
- By sliding the pattern over the text, the hash value of the current substring is updated efficiently using a rolling hash technique.
- When the hash values of the pattern and the current substring match, a detailed comparison is done to confirm the match.

## Difference Between KMP and Rabin-Karp

Table format for the differences between KMP and Rabin-Karp algorithms:

| **Criteria**        | **KMP Algorithm**                                                                              | **Rabin-Karp Algorithm**                                                            |
|---------------------|-----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| **Approach**        | Uses the LPS (Longest Prefix Suffix) array to skip comparisons.                                | Uses hashing to compare the pattern with substrings of the text.                    |
| **Time Complexity** | O(N + M): Preprocessing O(M), Searching O(N).                                                  | Average: O(N + M), Worst: O(N * M) due to hash collisions.                          |
| **Space Complexity**| O(M) for the LPS array.                                                                        | O(1) for rolling hash calculation.                                                  |
| **Use Case**        | Best for patterns and texts with many repeated sub-patterns.                                   | Suitable for multiple pattern searches in a single text.                            |
| **Advantages**      | No hash collisions; guarantees linear time complexity.                                         | Efficient average performance; good for multiple patterns.                          |
| **Disadvantages**   | Complex to implement due to the LPS array construction.                                        | Performance can degrade to O(N * M) due to hash collisions.                         |



## 4. Problem Description

Given a text string and a pattern string, implement the Rabin-Karp algorithm to find all occurrences of the pattern in the text.

## 5. Examples

**Example 1:**
```
Input: text = "GEEKS FOR GEEKS", pattern = "GEEK"
Output: Pattern found at index 0, Pattern found at index 10
```

**Example 2:**
```
Input: text = "ABABDABACDABABCABAB", pattern = "ABAB"
Output: Pattern found at index 0, Pattern found at index 10, Pattern found at index 12
```

**Explanation of Example 1:**
- The pattern "GEEK" is found in the text "GEEKS FOR GEEKS" starting from index 0 and index 10.

## 6. Constraints

- $The text and pattern can contain any number of characters.$
- $All characters are ASCII characters.$

## 7. Implementation

<Tabs>
  <TabItem value="Pyhon" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
  d = 256
  q = 101

  def search(pat, txt):
      M = len(pat)
      N = len(txt)
      i = 0
      j = 0
      p = 0
      t = 0
      h = 1

      for i in range(M-1):
          h = (h * d) % q

      for i in range(M):
          p = (d * p + ord(pat[i])) % q
          t = (d * t + ord(txt[i])) % q

      for i in range(N - M + 1):
          if p == t:
              for j in range(M):
                  if txt[i + j] != pat[j]:
                      break

              j += 1
              if j == M:
                  print("Pattern found at index " + str(i))

          if i < N - M:
              t = (d * (t - ord(txt[i]) * h) + ord(txt[i + M])) % q
              if t < 0:
                  t = t + q

  # Example usage:
  text = "GEEKS FOR GEEKS"
  pattern = "GEEK"
  search(pattern, text)
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
  #include <iostream>
  #include <string>
  using namespace std;

  #define d 256

  void search(string pat, string txt, int q) {
      int M = pat.size();
      int N = txt.size();
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
              if ( t < 0)
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

  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```java
  public class RabinKarp {
      public final static int d = 256;

      static void search(String pat, String txt, int q) {
          int M = pat.length();
          int N = txt.length();
          int i, j;
          int p = 0;
          int t = 0;
          int h = 1;

          for (i = 0; i < M - 1; i++)
              h = (h * d) % q;

          for (i = 0; i < M; i++) {
              p = (d * p + pat.charAt(i)) % q;
              t = (d * t + txt.charAt(i)) % q;
          }

          for (i = 0; i <= N - M; i++) {
              if (p == t) {
                  for (j = 0; j < M; j++) {
                      if (txt.charAt(i + j) != pat.charAt(j))
                          break;
                  }
                  if (j == M)
                      System.out.println("Pattern found at index " + i);
              }
              if (i < N - M) {
                  t = (d * (t - txt.charAt(i) * h) + txt.charAt(i + M)) % q;
                  if (t < 0)
                      t = (t + q);
              }
          }
      }

      public static void main(String[] args) {
          String txt = "GEEKS FOR GEEKS";
          String pat = "GEEK";
          int q = 101;
          search(pat, txt, q);
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```javascript
  const d = 256;
  const q = 101;

  function search(pat, txt) {
      let M = pat.length;
      let N = txt.length;
      let i, j;
      let p = 0;
      let t = 0;
      let h = 1;

      for (i = 0; i < M - 1; i++)
          h = (h * d) % q;

      for (i = 0; i < M; i++) {
          p = (d * p + pat.charCodeAt(i)) % q;
          t = (d * t + txt.charCodeAt(i)) % q;
      }

      for (i = 0; i <= N - M; i++) {
          if (p == t) {
              for (j = 0; j < M; j++) {
                  if (txt.charAt(i + j) !== pat.charAt(j))
                      break;
              }
              if (j == M)
                  console.log("Pattern found at index " + i);
          }
          if (i < N - M) {
              t = (d * (t - txt.charCodeAt(i) * h) + txt.charCodeAt(i + M)) % q;
              if (t < 0)
                  t = (t + q);
          }
      }
  }

  // Example usage:
  const text = "GEEKS FOR GEEKS";
  const pattern = "GEEK";
  search(pattern, text);
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity**:
  - Average and Best Case: $O(N + M)$
  - Worst Case: $O(N * M)$ (due to hash collisions)

- **Space Complexity**: $O(1)$ for the rolling hash calculation.

## 9. Advantages and Disadvantages

**Advantages:**
- Efficient on average with good hash functions.
- Suitable for multiple pattern searches in a single text.

**Disadvantages

:**
- Hash collisions can degrade performance to $O(N * M)$.
- Requires a good hash function to minimize collisions.

## 10. References

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/rabin-karp/problem)
- **Author's Geeks for Geeks Profile:** [MuraliDharan](https://www.geeksforgeeks.org/user/ngmuraqrdd/)