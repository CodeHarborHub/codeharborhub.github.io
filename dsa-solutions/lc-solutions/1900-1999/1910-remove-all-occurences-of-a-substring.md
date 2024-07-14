---
id: remove-all-occurences-of-a-substring
title: Remove All Occurences of a Substring
sidebar_label: 1910-Remove All Occurences of a Substring
tags:
  - String
  
description: "This is a solution to  Remove All Occurences of a Substring in leetcode "
---

## Problem Description

Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

1. Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.

A substring is a contiguous sequence of characters in a string.


### Examples

**Example 1:**

```
Input: s = "daabcbaabcbc", part = "abc"
Output: "dab"
Explanation: The following operations are done:
- s = "daabcbaabcbc", remove "abc" starting at index 2, so s = "dabaabcbc".
- s = "dabaabcbc", remove "abc" starting at index 4, so s = "dababc".
- s = "dababc", remove "abc" starting at index 3, so s = "dab".
Now s has no occurrences of "abc".

```
**Example 2:**
```
Input: s = "axxxxyyyyb", part = "xy"
Output: "ab"
Explanation: The following operations are done:
- s = "axxxxyyyyb", remove "xy" starting at index 4 so s = "axxxyyyb".
- s = "axxxyyyb", remove "xy" starting at index 3 so s = "axxyyb".
- s = "axxyyb", remove "xy" starting at index 2 so s = "axyb".
- s = "axyb", remove "xy" starting at index 1 so s = "ab".
Now s has no occurrences of "xy".
 
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- `1 <= s.length <= 1000`
- `1 <= part.length <= 1000`
-  `s`​​​​​​ and `part` consists of lowercase English letters.


### Solution
## Approach
To solve the problem of removing all occurrences of the substring part from the string s, we use an iterative approach. We repeatedly search for the leftmost occurrence of part within s and remove it. This process continues until part no longer appears in s.

We start by initializing our search at the beginning of the string. In each iteration, we find the first occurrence of part using a search function (like find in C++ or the in operator in Python). Once we locate part, we remove it by slicing the string to exclude the found substring. We then reset our search position to the start of the modified string to ensure all overlapping occurrences are also removed. The process is repeated until the string s no longer contains the substring part. Finally, we return the modified string s.

This approach guarantees that all instances of part are removed, even if they overlap, ensuring the final string is free of the specified substring.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp

class Solution {
public:
    std::string removeOccurrences(std::string s, std::string part) {
        size_t pos = 0;
        while ((pos = s.find(part)) != std::string::npos) {
            s.erase(pos, part.length());
        }
        return s;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String removeOccurrences(String s, String part) {
        for(int i=0;i<=s.length()-part.length();){
            String ch=s.substring(i,i+part.length());
            if(ch.equals(part)){
            s=s.substring(0,i)+s.substring(i+part.length());
            //s=s.replace(ch,"");
            i=0;}
            else
            i++;
        }

        return s;
    }
}
```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        while part in s:
            s = s.replace(part, "", 1)
        return s
```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Remove All Occurences of a Substring](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/)

- **Solution Link**: [Remove All Occurences of a Substring](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/post-solution/?submissionId=1230096138)
