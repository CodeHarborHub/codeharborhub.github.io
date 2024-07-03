---
id: determine-if-string-halves-are-alike
title: Determine if String Halves Are Alike
sidebar_label: 1704. Determine if String Halves Are Alike
tags:
- String
- Counting
- Python
- Java
description: "This is a solution to the Determine if String Halves Are Alike problem on LeetCode."
---

## Problem Description

You are given a string `s` of even length. Split this string into two halves of equal lengths, and let `a` be the first half and `b` be the second half.

Two strings are alike if they have the same number of vowels `('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U')`. Notice that `s` contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

### Examples

**Example 1:**

```
Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
```

**Example 2:**

```
Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
```

### Constraints

- `2 <= s.length <= 1000`
- `s.length is even`

## Solution for 1704. Determine if String Halves Are Alike 

### Approach 

1. Define a helper function `count_vowels` to count the number of vowels in a given string.
2. Compute the length of the input string and find the midpoint.
3. Split the string into two halves: the first half `(first_half)` and the second half `(second_half)`.
4. Use the `count_vowels` function to count the vowels in both halves.
5. Compare the counts of vowels in both halves. If they are equal, return `True`; otherwise, return `False`.

## Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@YourUsername"/>
  
  ```python
  class Solution:
      def halvesAreAlike(self, s: str) -> bool:
          def count_vowels(string):
              vowels = set('aeiouAEIOU')
              return sum(1 for char in string if char in vowels)

          length = len(s)
          mid_point = length // 2

          first_half = s[:mid_point]
          second_half = s[mid_point:]

          return count_vowels(first_half) == count_vowels(second_half)
  ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@YourUsername"/>
  
  ```java
  import java.util.HashSet;
  import java.util.Set;

  public class Solution {
      public boolean halvesAreAlike(String s) {
          Set<Character> vowels = new HashSet<>();
          vowels.add('a'); vowels.add('e'); vowels.add('i'); vowels.add('o'); vowels.add('u');
          vowels.add('A'); vowels.add('E'); vowels.add('I'); vowels.add('O'); vowels.add('U');

          int length = s.length();
          int midPoint = length / 2;

          String firstHalf = s.substring(0, midPoint);
          String secondHalf = s.substring(midPoint);

          return countVowels(firstHalf, vowels) == countVowels(secondHalf, vowels);
      }

      private int countVowels(String str, Set<Character> vowels) {
          int count = 0;
          for (char c : str.toCharArray()) {
              if (vowels.contains(c)) {
                  count++;
              }
          }
          return count;
      }
  }
  ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@YourUsername"/>
  
  ```cpp
  #include <bits/stdc++.h>
  using namespace std;

  class Solution {
  public:
      bool halvesAreAlike(string s) {
          auto countVowels = [](const string& str) {
              unordered_set<char> vowels{'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'};
              int count = 0;
              for (char c : str) {
                  if (vowels.count(c) > 0) {
                      count++;
                  }
              }
              return count;
          };

          int length = s.length();
          int midPoint = length / 2;

          string firstHalf = s.substr(0, midPoint);
          string secondHalf = s.substr(midPoint);

          return countVowels(firstHalf) == countVowels(secondHalf);
      }
  };
  ```

  </TabItem>
</Tabs>

## Complexity Analysis

- **Time Complexity:** $O(N)$ 
- **Space Complexity:** $O(1)$

## References

- **LeetCode Problem:** [Determine if String Halves Are Alike](https://leetcode.com/problems/determine-if-string-halves-are-alike/description/)
- **Solution Link:** [LeetCode Solution](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/)
