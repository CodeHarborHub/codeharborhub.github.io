---
id: score-of-a-string
title: Score of a string
sidebar_label: 3110-score-of-a-string
tags:
  - Java
  - Greedy
  - String
description: "This document provides a solution of score-of-a-string"
---

## Problem statement:

You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

Return the score of s.

**Example 1:**

Input: s = "hello"
Output: 13

Explanation:
The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be `|104 - 101| + |101 - 108| + |108 - 108| + |108 - 111|` = `3 + 7 + 0 + 3 = 13`.

**Example 2:**

Input: s = "zaz"
Output: 50

Explanation:
The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be `|122 - 97| + |97 - 122|` = `25 + 25` = `50`.

**Constraints:**

    `2 <= s.length <= 100`
    `s consists only of lowercase English letters.`

## Solutions:

### Intuition

**Understanding the Absolute Difference:**
The absolute difference between two characters gives a measure of how far apart they are in terms of their ASCII values.

**Pairwise Comparison:**
For each consecutive pair of characters in the string, calculate the absolute difference of their ASCII values and sum these differences.

### Approach

    1. Initialize:

        - Get the length of the string n.
        - Initialize a result variable res to 0 which will store the cumulative score.
        - Iterate Through the String:

    2. Iterate Through the String:

        - Loop through the string from the first character to the second last character.
        - For each character, calculate the absolute difference between it and the next character.
        - Add this difference to the result variable res.

    3.  Return the Result:

        - After the loop ends, res will contain the total score of the string, which we return.

## code:

<Tabs>
    <TabItem value="cpp" label="C++" default>
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```cpp
      #include <string>
      #include <cmath>
      using namespace std;

      class Solution {
      public:
          int scoreOfString(string s) {
              int score = 0;
              for (int i = 0; i < s.length() - 1; i++) {
                  score += abs(s[i] - s[i + 1]);
              }
              return score;
          }
      };
      ```
    </TabItem>
    <TabItem value="java" label="Java">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```java
      public class Solution {
          public int scoreOfString(String s) {
              int score = 0;
              for (int i = 0; i < s.length() - 1; i++) {
                  score += Math.abs(s.charAt(i) - s.charAt(i + 1));
              }
              return score;
          }
      }
      ```
    </TabItem>
    <TabItem value="python" label="Python">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```python
      class Solution:
          def scoreOfString(self, s: str) -> int:
              score = 0
              for i in range(len(s) - 1):
                  score += abs(ord(s[i]) - ord(s[i + 1]))
              return score
      ```
    </TabItem>
    <TabItem value="c" label="C">
      <SolutionAuthor name="@Ajay-Dhangar"/>
      ```c
      #include <stdio.h>
      #include <stdlib.h>
      #include <string.h>

      int scoreOfString(char* s) {
          int score = 0;
          for (int i = 0; i < strlen(s) - 1; i++) {
              score += abs(s[i] - s[i + 1]);
          }
          return score;
      }

      int main() {
          char s[] = "example";
          printf("Score: %d\n", scoreOfString(s));
          return 0;
      }
      ```
    </TabItem>

</Tabs>

## Complexity

Time complexity: $O(n)$
Space complexity: $O(1)$
