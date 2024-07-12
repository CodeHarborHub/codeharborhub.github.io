---
id: to-lower-case
title: To Lower Case
sidebar_label: 0709-To Lower Case
tags:
   - String
 
description: "This is a solution to To Lower Case in leetcode"
---

## Problem Description

Given a string  s, return the string after replacing every uppercase letter with the same lowercase letter.


### Examples

**Example 1:**

```
Input: s = "Hello"
Output: "hello"

```
**Example 2:**
```
Input: s = "here"
Output: "here"

 ```
## Complexity Analysis

*** Time Complexity:** $O(n)$

*** Space Complexity:** $O(1)$

### Constraints

- `1 <= s.length <= 100`
-  `s` consists of printable ASCII characters.


### Solution
## Approach
The simple approach is use built in function to convert given string to lower case.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp

class Solution {
public:
    string toLowerCase(string s) {
        for (int i = 0; i < s.size(); ++i) {
            if (s[i] >= 'A' && s[i] <= 'Z') {
                s[i] = s[i] + ('a' - 'A');
            }
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
    public String toLowerCase(String s) {
        return s.toLowerCase();
    }
}

```
</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def toLowerCase(self, s: str) -> str:
       
        return s.lower()
            
        
            

```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [To Lower Case](https://leetcode.com/problems/to-lower-case/solutions/)

- **Solution Link**: [To Lower Case](https://leetcode.com/problems/to-lower-case/post-solution/?submissionId=1183748958)
