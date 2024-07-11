---
id: to-lower-case
title: To Lower Case
sidebar_label: 0709 - To Lower Case
tags:
  - String
description: "This is a solution to the To Lower Case problem on LeetCode."
---

## Problem Description

Given a string `s`, return the string after replacing every uppercase letter with the same lowercase letter.

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

### Constraints

- `1 <= s.length <= 100`
- `s` consists of printable ASCII characters.

## Solution for Kth Largest Element in a Stream

### Approach


To convert a string to lowercase in any programming language, you can follow a simple approach. Begin by initializing an empty string or buffer to store the converted characters. Then, iterate through each character of the input string. For each character:

- Check if it is an uppercase letter.
- If it is, convert it to lowercase using the language-specific function or method provided (e.g., tolower() in C/C++, toLowerCase() in JavaScript, str.lower() in Python).
- Append the converted or unchanged character to the result string or buffer.
- Once all characters have been processed, the result string or buffer will contain the input string in lowercase.
- This method efficiently converts the string to lowercase while maintaining the integrity of non-alphabetical characters and preserving the order of characters in the original string.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    string toLowerCase(string s) {
        string result;
        for (char c : s) {
            if (c >= 'A' && c <= 'Z') {
                result += (char)(c + 32);
            } else {
                result += c;
            }
        }
        return result;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public String toLowerCase(String s) {
         StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (c >= 'A' && c <= 'Z') {
                sb.append((char)(c + 32)); 
            } else {
                sb.append(c); 
            }
        }
        return sb.toString();
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
 class Solution:
    def toLowerCase(self, s: str) -> str:
        result = []
        for c in s:
            if 'A' <= c <= 'Z':
                result.append(chr(ord(c) + 32))
            else:
                result.append(c)
        return ''.join(result)
  
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity:
> The toLowerCase method iterates through each character `c` in the input string `s`.
The iteration involves a single pass through the string, so the time complexity is `O(n)`, where `n` is the length of the input string `s`.
Within each iteration, checking if `c` is an uppercase letter ('A' to 'Z') and converting it involves constant time operations (ord(c), chr()), which do not change the overall time complexity.
Therefore, the time complexity of the toLowerCase method is O(n).

### Space Complexity: $O(N)$

The method uses a list result to store the characters of the resulting lowercase string.
Initially, an empty list result is created, which takes constant space.
The space used by result grows as it accumulates characters from the input string s.
Since the list result holds at most n characters (where n is the length of s), the space complexity is O(n).
Therefore, the space complexity of the toLowerCase method is O(n).

## References

- **LeetCode Problem**: [Kth Largest Element in a Stream](https://leetcode.com/problems/to-lower-case/description/)
