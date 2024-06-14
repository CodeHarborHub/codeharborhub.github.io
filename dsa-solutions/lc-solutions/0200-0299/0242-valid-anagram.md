---
id: valid-anagram
title: Valid Anagram
sidebar_label: 0242 Valid Anagram
tags:
  - String
  - Hash Table
  - Sorting
  - LeetCode
  - Python
  - Java
  - C++
description: "This is a solution to the Valid Anagram problem on LeetCode."
---

## Problem Description

Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Examples

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false
```

### Constraints

- $1 <= s.length, t.length <= 5 * 10^4$
- s and t consist of lowercase English letters.

## Solution for Valid Anagram Problem

### Approach

To determine if two strings `s` and `t` are anagrams, we can use the following approach:

1. **Character Counting**: Count the occurrences of each character in both strings using arrays of size 26 (since there are 26 lowercase letters).
2. **Comparison**: Compare the two arrays. If they are identical, then `t` is an anagram of `s`.

### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@mahek0620"/>
   ```python

    class Solution:
        def isAnagram(self, s: str, t: str) -> bool:
            if len(s) != len(t):
                return False

            # Initialize arrays to count occurrences of each character
            count_s = [0] * 26
            count_t = [0] * 26

            # Count occurrences of each character in s
            for char in s:
                count_s[ord(char) - ord('a')] += 1

            # Count occurrences of each character in t
            for char in t:
                count_t[ord(char) - ord('a')] += 1

            # Compare the two arrays
            return count_s == count_t
    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    
    class Solution {
        public boolean isAnagram(String s, String t) {
            if (s.length() != t.length()) {
                return false;
            }

            // Initialize arrays to count occurrences of each character
            int[] count_s = new int[26];
            int[] count_t = new int[26];

            // Count occurrences of each character in s
            for (char ch : s.toCharArray()) {
                count_s[ch - 'a']++;
            }

            // Count occurrences of each character in t
            for (char ch : t.toCharArray()) {
                count_t[ch - 'a']++;
            }

            // Compare the two arrays
            return Arrays.equals(count_s, count_t);
        }
    }
    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
   
    #include <vector>
    using namespace std;

    class Solution {
    public:
        bool isAnagram(string s, string t) {
            if (s.length() != t.length()) {
                return false;
            }

            // Initialize arrays to count occurrences of each character
            vector<int> count_s(26, 0);
            vector<int> count_t(26, 0);

            // Count occurrences of each character in s
            for (char ch : s) {
                count_s[ch - 'a']++;
            }

            // Count occurrences of each character in t
            for (char ch : t) {
                count_t[ch - 'a']++;
            }

            // Compare the two arrays
            return count_s == count_t;
        }
    };
    ```

  </TabItem>
</Tabs>

### Complexity Analysis

- **Time complexity**: O(n), where n is the length of the strings `s` and `t`. We iterate through both strings once to count characters and compare counts, which are both O(n).
- **Space complexity**: O(1) for the fixed-size arrays in Python and O(26) = O(1) for arrays in Java and C++, since there are only 26 lowercase letters.

## References

- **LeetCode Problem:** [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
- **Solution Link:** [Valid Anagram Solution on LeetCode](https://leetcode.com/problems/valid-anagram/solution/)
- **Author's GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
