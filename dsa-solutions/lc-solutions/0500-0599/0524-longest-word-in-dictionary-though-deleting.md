---
id: longest-word-in-dictionary-through-deleting
title: Longest Word in Dictionary through Deleting
sidebar_label: 0524-longest-word-in-dictionary-through-deleting
tags:
  - Array
  - Two Pointers
  - String
  - Sorting
  - Java
  - Python
  - C++
description: This is a solution to the longest word in dictionary through deleting problem on LeetCode.
---

## Problem Description

Given a string `s` and a string array `dictionary`, return the longest string in the dictionary that can be formed by deleting some of the given string characters. If there is more than one possible result, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

### Examples

**Example 1:**
Input: s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
Output: "apple"

**Example 2**
Input: s = "abpcplea", dictionary = ["a","b","c"]
Output: "a"

### Constraints

- `1 <= s.length <= 1000`
- `1 <= dictionary.length <= 1000`
- `1 <= dictionary[i].length <= 1000`
- `s` and `dictionary[i]` consist of lowercase English letters.

## Solution

### Intuition

The intuition behind the solution is to use a two-pointer approach that can efficiently validate whether a word from the dictionary is a subsequence of the string s. Here's how we proceed:

- Initialize two pointers, i for the index in the string s and j for the index in the current dictionary word.
- Increment i each time we examine a character in s.
- Increment j only when the characters at i in s and j in the dictionary word match.
  A dictionary word is a subsequence of s if we can traverse through the entire word (i.e., j equals the length of the word) by selectively matching characters in s.
- By iterating through each word in the dictionary and applying the two-pointer technique, we can check which words can be formed. During the process, we also keep track of the longest word that satisfies the condition. If multiple words have the same length, we choose the one with the lowest lexicographical order, which is the same as saying the smallest in alphabetical order.

The check function implements the two-pointer technique, and the outer loop through the dictionary selects the best candidate word according to the above-mentioned criteria.

#### Code in Different Languages

<Tabs>
  <TabItem value="C++" label="C==">

```cpp
//cpp

class Solution {
public:
string findLongestWord(string s, vector<string>& d) {
string ans;

 for (const string& word : d)
   if (isSubsequence(word, s))
     if (word.length() > ans.length() ||
         word.length() == ans.length() && word.compare(ans) < 0)
       ans = word;

 return ans;

}

private:
// Returns true if a is a subsequence of b.
bool isSubsequence(const string& a, const string& b) {
int i = 0;
for (const char c : b)
if (i < a.length() && c == a[i])
++i;
return i == a.length();
};
};

```

  </TabItem>
  <TabItem value="Java" label="Java">

```java
//java

class Solution {
public String findLongestWord(String s, List<String> d) {
 String ans = "";

 for (final String word : d)
   if (isSubsequence(word, s))
     if (word.length() > ans.length() ||
         word.length() == ans.length() && word.compareTo(ans) < 0)
       ans = word;

 return ans;
}

// Returns true if a is a subsequence of b.
private boolean isSubsequence(final String a, final String b) {
 int i = 0;
 for (final char c : b.toCharArray())
   if (i < a.length() && c == a.charAt(i))
     ++i;
 return i == a.length();
}
}

```

</TabItem>
<TabItem value="Python" label="Python">

```python
//python

class Solution:
def findLongestWord(self, s: str, d: List[str]) -> str:
 ans = ''

 for word in d:
   i = 0
   for c in s:
     if i < len(word) and c == word[i]:
       i += 1
   if i == len(word):
     if len(word) > len(ans) or len(word) == len(ans) and word < ans:
       ans = word

 return ans
```

  </TabItem>
</Tabs>

## References

- **LeetCode Problem:** [Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/description/)
- **Solution Link:** [Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/)
