---
id: clear-digits
title: Clear Digits
sidebar_label: 3174-Clear Digits
tags:
  - String
  - HashTable
  - Stimulation
  
description: "This is a solution to clear digits in leetcode "
---

## Problem Description

You are given a string s.

Your task is to remove all digits by doing this operation repeatedly:

1. Delete the first digit and the closest non-digit character to its left.
Return the resulting string after removing all digits.
 


### Examples

**Example 1:**

```
Input: s = "abc"
Output: "abc"
Explanation:
There is no digit in the string.

```
**Example 2:**
```
Input: s = "cb34"
Output: ""
Explanation:
First, we apply the operation on s[2], and s becomes "c4".
Then we apply the operation on s[1], and s becomes "".

 

 ```
## Complexity Analysis

*** Time Complexity:** $O(n**2)$

*** Space Complexity:** $O(n)$

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of lowercase English letters and digits.


### Solution
## Approach
To remove all digits from a string, iterate through the string, checking each character. If a digit is found, remove it and reset the index to the beginning of the string to ensure all digits are considered, even those that may shift positions after removal. Continue this process until the end of the string is reached, ensuring all digits are removed. Return the modified string without any digits.
## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@ImmidiSivani"/>

```cpp

class Solution {
public:
    std::string clearDigits(std::string s) {
        for (int i = 0; i < s.length(); ) {
            if (isdigit(s[i])) {
                s.erase(i, 1);
                i = 0;
            } else {
                i++;
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
    public String clearDigits(String s) {
        for(int i=0;i<s.length();){
            char ch=s.charAt(i);
            if(Character.isDigit(ch)){
                s=s.substring(0,i-1)+s.substring(i+1);
                i=0;
            }
            else{
                i++;
            }
            
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
    def clearDigits(self, s: str) -> str:
        i = 0
        while i < len(s):
            if s[i].isdigit():
                s = s[:i] + s[i+1:]
                i = 0
            else:
                i += 1
        return s
```
</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Clear Digits](https://leetcode.com/problems/clear-digits/description/)

- **Solution Link**: [Clear Digits](https://leetcode.com/problems/clear-digits/post-solution/?submissionId=1281655904)
