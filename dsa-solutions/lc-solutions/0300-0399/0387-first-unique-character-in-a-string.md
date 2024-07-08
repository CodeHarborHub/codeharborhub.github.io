---
id: first unique character in a string
title: First Unique Character in a String
sidebar_label: 0387-First Unique Character in a String
tags:
  - HashTable
  - String
  - Queue
  - Counting
description: "This is a solution to the first unique character in a string in leetcode"
---

## Problem Description

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

### Examples

**Example 1:**

```
Input: s = "leetcode"
Output: 0
```
**Example 2:**
```
Input: s = "loveleetcode"
Output: 2
 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(n)$

### Constraints

- `1 <= s.length <= 105`
- `s`consists of only lowercase English letters.



### Solution
## Approach
To solve the problem of finding the first unique character in a string, we need to implement a strategy that efficiently counts character occurrences and identifies the first non-repeating character. The process begins by initializing a data structure to keep track of character counts. This could be a dictionary in Python, an array in Java, or an unordered_map in C++. The first step involves iterating through the string to populate this data structure with the count of each character. For each character encountered, we either increment its count if it already exists in the data structure or add it with an initial count of one. After constructing the character count data structure, we proceed to identify the first unique character. This requires a second iteration through the string, during which we check each character's count in the data structure. The first character with a count of one is our answer, and we return its index. If the entire string is processed without finding a unique character, we return -1 to indicate that no such character exists. This approach ensures that the solution is both efficient and straightforward, utilizing two passes through the string—one for counting and one for finding the first unique character.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <string>
#include <unordered_map>

class Solution {
public:
    int firstUniqChar(std::string s) {
        std::unordered_map<char, int> charCount;
        
        for (char c : s) {
            charCount[c]++;
        }
        
        for (int i = 0; i < s.length(); i++) {
            if (charCount[s[i]] == 1) {
                return i;
            }
        }
        
        return -1;
    }
};


```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int firstUniqChar(String s) {
        
        int[] count = new int[26];
        
        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }
        for (int i = 0; i < s.length(); i++) {
            if (count[s.charAt(i) - 'a'] == 1) {
                return i;
            }
        }
        
        return -1;
    }
}


```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def firstUniqChar(self, s: str) -> int:
       dic={}
       for i in s:
           if i in dic:
               dic[i]+=1
           else:
               dic[i]=1
       for i in range(len(s)):
           if dic[s[i]]==1:
               return i
       return -1


```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/description/)

- **Solution Link**: [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/post-solution/?submissionId=1183734593)
