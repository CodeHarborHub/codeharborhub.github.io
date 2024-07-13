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

**Solution for Kth Largest Element in a Stream**

- `s` consists of printable ASCII characters.


### Solution
## Approach
The simple approach is use built in function to convert given string to lower case.

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
  <SolutionAuthor name="@ImmidiSivani, @Shreyash3087"/>

```java
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