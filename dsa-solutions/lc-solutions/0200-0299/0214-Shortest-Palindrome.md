---
id: shortest-palindrome
title: Shortest Palindrome
sidebar_label: 0214 Shortest Palindrome
tags:
- String
- KMP Algorithm
- C++
- Java
- Python
description: "This document provides a solution to finding the shortest palindrome by adding characters in front of the given string."
---

## Problem
Given a string `s`, you can convert it to a palindrome by adding characters in front of it. Return the shortest palindrome you can find by performing this transformation.

### Example 1:
Input: s = "aacecaaa"  
Output: "aaacecaaa"

### Example 2:
Input: s = "abcd"  
Output: "dcbabcd"

### Constraints:
- $0 \leq \text{s.length} \leq 5 \times 10^4$
- s consists of lowercase English letters only.

## Solution
To solve this problem efficiently, we can leverage the KMP (Knuth-Morris-Pratt) algorithm to find the longest prefix of the reversed string that matches the suffix of the original string. This allows us to determine the shortest palindrome.

### Steps:
1. Reverse the string `s` to get `rev_s`.
2. Construct a new string `new_s = s + "#" + rev_s`.
3. Compute the KMP table (prefix function) for `new_s` to find the longest prefix which is also a suffix.
4. The length of this longest prefix gives us the length of characters from `rev_s` that we need to prepend to `s` to form the shortest palindrome.

#### Code in Different Languages

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@mahek0620"/>
   ```python

    class Solution(object):
    def shortestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if not s:
            return ""
        
        # Step 1: Reverse the string
        rev_s = s[::-1]
        
        # Step 2: Combine s and rev_s with a separator
        new_s = s + "#" + rev_s
        
        # Step 3: Compute KMP table (prefix function) for new_s
        n = len(new_s)
        kmp = [0] * n
        
        for i in range(1, n):
            j = kmp[i - 1]
            while j > 0 and new_s[i] != new_s[j]:
                j = kmp[j - 1]
            if new_s[i] == new_s[j]:
                j += 1
            kmp[i] = j
        
        # Step 4: Calculate the overlap length
        overlap = kmp[-1]
        
        # Step 5: Form the result palindrome
        return rev_s[:len(s) - overlap] + s

    ```
  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@mahek0620"/>
   ```java
    
    class Solution {
    public String shortestPalindrome(String s) {
        String rev_s = new StringBuilder(s).reverse().toString();
        
        // Form the new string to check
        String new_s = s + "#" + rev_s;
        int n = new_s.length();
        
        // Compute the KMP table (prefix function)
        int[] kmp = new int[n];
        for (int i = 1, j = 0; i < n; ++i) {
            while (j > 0 && new_s.charAt(i) != new_s.charAt(j)) {
                j = kmp[j - 1];
            }
            if (new_s.charAt(i) == new_s.charAt(j)) {
                ++j;
            }
            kmp[i] = j;
        }
        
        // The length of the longest prefix which is also suffix
        int overlap = kmp[n - 1];
        
        // Construct the result
        return rev_s.substring(0, rev_s.length() - overlap) + s;
    }
    }

    ```
  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
   
    #include <string>
    #include <vector>

    using namespace std;

    class Solution {
    public:
    string shortestPalindrome(string s) {
        string rev_s = s;
        reverse(rev_s.begin(), rev_s.end());
        
        // Form the new string to check
        string new_s = s + "#" + rev_s;
        int n = new_s.size();
        
        // Compute the KMP table (prefix function)
        vector<int> kmp(n, 0);
        for (int i = 1, j = 0; i < n; ++i) {
            while (j > 0 && new_s[i] != new_s[j]) {
                j = kmp[j - 1];
            }
            if (new_s[i] == new_s[j]) {
                ++j;
            }
            kmp[i] = j;
        }
        
        // The length of the longest prefix which is also suffix
        int overlap = kmp[n - 1];
        
        // Construct the result
        return rev_s.substr(0, rev_s.size() - overlap) + s;
    }
    };

    ```

  </TabItem>
</Tabs>


## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/shortest-palindrome/)
- **Solution Link:** [Shortest Palindrome Solution on LeetCode](https://leetcode.com/problems/shortest-palindrome/solutions/)
- **Authors GeeksforGeeks Profile:** [Mahek Patel](https://leetcode.com/u/mahekrpatel611/)
