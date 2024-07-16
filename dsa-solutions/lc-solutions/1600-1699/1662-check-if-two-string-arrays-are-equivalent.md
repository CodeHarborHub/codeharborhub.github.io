---
id: check-if-two-string-arrays-are-equivalent
title: Check If Two String Arrays are Equivalent
sidebar_label: 1662-Check If Two String Arrays are Equivalent
tags:
  - Array
  
description: "This is a solution to the Check If Two String Arrays are Equivalent in a string in leetcode"
---

## Problem Description

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

### Examples

**Example 1:**

```
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
```
**Example 2:**
```
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
 
 ```
## Complexity Analysis

*** Time Complexity:** $O(word1.length+word2.length)$

*** Space Complexity:** $O(1)$

### Constraints

- `1 <= word1.length, word2.length <= 103`
- `1 <= word1[i].length, word2[i].length <= 103`
- `1 <= sum(word1[i].length), sum(word2[i].length) <= 103`



### Solution
## Approach

To determine if two arrays of strings are equivalent by concatenating their elements, the approach involves combining the elements of each array into single strings and then comparing these resulting strings. Specifically, for each input array, iterate through its elements and concatenate them into one continuous string. Once both arrays are fully concatenated, compare the two resulting strings for equality. If they are identical, the function returns true; otherwise, it returns false. This method ensures that the order and content of the strings are preserved and accurately compared.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    bool arrayStringsAreEqual(std::vector<std::string>& word1, std::vector<std::string>& word2) {
        std::string s1 = "";
        std::string s2 = "";
        for(const std::string& ch1 : word1) {
            s1 += ch1;
        }
        for(const std::string& ch2 : word2) {
            s2 += ch2;
        }
        return s1 == s2;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        String s1="";
        String s2="";
        for(String ch1:word1)
        s1+=ch1;
        for(String ch2:word2)
        s2+=ch2;
        return s1.equals(s2);
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        s1 = "".join(word1)
        s2 = "".join(word2)
        return s1 == s2

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/)

- **Solution Link**: [Check If Two String Arrays are Equivalent](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/post-solution/?submissionId=1234733608)
