---
id: permutation-difference-between-two-string
title: Permutation-Difference-Between-Two-String (LeetCode)
sidebar_label: 3146-permutation-difference-between-two-string
tags:
  - Dynamic Programming
  - Geometry
  - Sorting
  - Sliding Window
description: this discription is for the solution of permutation-difference-between-two-string
sidebar_position: 3146
---

## Problem Statement:

You are given two strings `s` and `t` such that every character occurs at most once in `s` and `t` is a permutation of `s`.

The permutation difference between `s` and `t` is defined as the sum of the absolute difference between the index of the occurrence of each character in `s` and the index of the occurrence of the same character in `t`.

Return the permutation difference between `s` and `t`.

**Example 1:**

Input: s = "abc", t = "bac"
Output: 2

Explanation:

1. For `s = "abc"` and `t = "bac"`, the permutation difference of `s` and `t` is equal to the sum of:

2. The absolute difference between the index of the occurrence of "a" in `s` and the index of the occurrence of "a" in `t`.

3. The absolute difference between the index of the occurrence of "b" in `s` and the index of the occurrence of "b" in `t``.

4. The absolute difference between the index of the occurrence of "c" in `s` and the index of the occurrence of "c" in `t`.

5. That is, the permutation difference between s and t is equal to `|0 - 1| + |2 - 2| + |1 - 0| = 2`.

**Example 2:**

Input: s = "abcde", t = "edbac"
Output: 12

Explanation: The permutation difference between s and t is equal to `|0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12.`

**Constraints:**

        `1 <= s.length <= 26`
        `Each character occurs at most once in s`.
        `t is a permutation of s.`
        `s consists only of lowercase English letters.`

## Solutions:

### Intuition

To solve this problem, we need to determine the **"distance"** between the characters of the string t in terms of their positions in the string s. Specifically, for each character in t, we calculate the absolute difference between its position in s and its position in t, and then sum up these differences.

### Approach

**Initialization:** Start with a variable sum to accumulate the total difference.

**Iteration:** Loop through each character in the string t.

**Calculation:**
a. Find the index of the current character in the string s.
b. Calculate the absolute difference between this index and the current index in t.
c. Add this difference to the sum.

**Return Result:** After processing all characters, return the accumulated sum.

## code:

<Tabs>
    <TabItem value="typescript" label="TypeScript" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```typescript
      function findPermutationDifference(s: string, t: string): number {
          let sum: number = 0;
          for (let i = 0; i < t.length; i++) {
              sum += Math.abs(s.indexOf(t.charAt(i)) - i);
          }
          return sum;
      }
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      public class Solution {
          public int findPermutationDifference(String s, String t) {
              int sum = 0;
              for (int i = 0; i < t.length(); i++) {
                  sum += Math.abs(s.indexOf(t.charAt(i)) - i);
              }
              return sum;
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      class Solution:
          def findPermutationDifference(self, s: str, t: str) -> int:
              sum_diff = 0
              for i in range(len(t)):
                  sum_diff += abs(s.index(t[i]) - i)
              return sum_diff
      ```
    </TabItem>
    <TabItem value="csharp" label="C#">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```csharp
      public class Solution {
          public int FindPermutationDifference(string s, string t) {
              int sum = 0;
              for (int i = 0; i < t.Length; i++) {
                  sum += Math.Abs(s.IndexOf(t[i]) - i);
              }
              return sum;
          }
      }
      ```
    </TabItem>
    <TabItem value="cpp" label="C++">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <string>
      #include <cmath>

      class Solution {
      public:
          int findPermutationDifference(const std::string& s, const std::string& t) {
              int sum = 0;
              for (int i = 0; i < t.size(); ++i) {
                  sum += std::abs(s.find(t[i]) - i);
              }
              return sum;
          }
      };
      ```
    </TabItem>
    <TabItem value="go" label="Go">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```go
      package main

      import (
          "math"
          "strings"
      )

      func findPermutationDifference(s string, t string) int {
          sum := 0
          for i := 0; i < len(t); i++ {
              sum += int(math.Abs(float64(strings.IndexByte(s, t[i]) - i)))
          }
          return sum
      }
      ```
    </TabItem>
    <TabItem value="rust" label="Rust">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```rust
      pub fn find_permutation_difference(s: &str, t: &str) -> i32 {
          let mut sum = 0;
          for (i, c) in t.chars().enumerate() {
              sum += (s.find(c).unwrap() as i32 - i as i32).abs();
          }
          sum
      }
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>
      #include <math.h>

      int findPermutationDifference(char* s, char* t) {
          int sum = 0;
          for (int i = 0; i < strlen(t); i++) {
              char* pos = strchr(s, t[i]);
              if (pos) {
                  sum += abs((int)(pos - s) - i);
              }
          }
          return sum;
      }
      ```
    </TabItem>

</Tabs>

## Complexity

**Time complexity:** $O(n∗m)$ ,where n is the length of t and m is the average length to search in s.

**Space complexity:** The space complexity is $O(1)$, since we are only using a constant amount of extra space for the variable sum.

## video lecture:

<LiteYouTubeEmbed
    id="KAp0L-pPn5g"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    title="CodeHarborHub permutation-difference-between-two-string"
    poster="maxresdefault"
    webp />
