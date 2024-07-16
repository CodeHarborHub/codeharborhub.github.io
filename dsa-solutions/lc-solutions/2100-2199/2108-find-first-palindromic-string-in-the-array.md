---
id: find-first-palindromic-string-in-the-array
title: Find First Palindromic String in the Array
sidebar_label: 2108-Find First Palindromic String in the Array
tags:
  - Array
  - Two Pointers
  - String
  
description: "This is a solution to the Find First Palindromic String in the Array in leetcode"
---

## Problem Description

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

A string is palindromic if it reads the same forward and backward.

 
 

### Examples

**Example 1:**

```
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.

```
**Example 2:**
```
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
 
 ```
## Complexity Analysis

*** Time Complexity:** $O(1)$

*** Space Complexity:** $O(1)$

### Constraints

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists only of lowercase English letters.




### Solution
## Approach
The approach involves iterating through each word in the list and checking if it is a palindrome by comparing it to its reverse. If a palindrome is found, it is returned immediately. If no palindromes are found after checking all the words, an empty string is returned. This ensures the first palindrome in the list is identified efficiently.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    std::string firstPalindrome(const std::vector<std::string>& words) {
        for (const std::string& word : words) {
            if (isPalindrome(word)) {
                return word;
            }
        }
        return "";
    }

private:
    bool isPalindrome(const std::string& word) {
        int left = 0;
        int right = word.size() - 1;
        while (left < right) {
            if (word[left] != word[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String firstPalindrome(String[] words) {
        for (String word : words) {
            if (isPalindrome(word)) {
                return word;
            }
        }
        return "";
    }

    private boolean isPalindrome(String word) {
        int left = 0;
        int right = word.length() - 1;
        while (left < right) {
            if (word.charAt(left) != word.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for i in words:
            if i==i[::-1]:
                return i
        return ""


```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Find First Palindromic String in the Array](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/)

- **Solution Link**: [Find First Palindromic String in the Array](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/post-solution/?submissionId=1215484481)
