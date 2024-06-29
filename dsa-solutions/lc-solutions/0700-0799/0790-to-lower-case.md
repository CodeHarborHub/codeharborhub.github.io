---
id: to-lower-case
title: To Lower Case(LeetCode)
sidebar_label: 0790-To Lower Case
tags:
  - String
description: Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
---

## Problem Statement

Given a string `s`, return the string after replacing every uppercase letter with the same lowercase letter.

### Examples

**Example 1:**

```plaintext
Input: s = "Hello"
Output: "hello"
```

**Example 2:**

```plaintext
Input: s = "here"
Output: "here"
```

**Example 3:**

```plaintext
Input: s = "LOVELY"
Output: "lovely"
```

### Constraints

- `1 <= s.length <= 100`
- `s` consists of printable ASCII characters.

## Solution

Converting a string to lowercase is a common operation. We will explore two approaches to achieve this in Java: one using built-in functions and another without using any built-in functions.

### Approach 1: Using Java Built-in Function

#### Algorithm

1. Use the `toLowerCase()` method provided by the Java String class to convert the input string to lowercase.

#### Implementation

```Java
class Solution {
    public String toLowerCase(String s) {
        return s.toLowerCase();
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)$

### Approach 2: Without Using Built-in Function

#### Algorithm

1. Initialize an empty `StringBuilder` to build the result string.
2. Iterate through each character of the input string:
* If the character is an uppercase letter (ASCII value between 65 and 90), convert it to its lowercase equivalent by adding 32 to its ASCII value and append it to the `StringBuilder`.
* If the character is not an uppercase letter, append it as it is to the `StringBuilder`.
3. Convert the `StringBuilder` to a string and return it.
  
#### Implementation 

```Java
class Solution {
    public String toLowerCase(String s) {
        StringBuilder str = new StringBuilder();
        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch >= 'A' && ch <= 'Z') {
                str.append((char) (ch + 32));
            } else {
                str.append(ch);
            }
        }
        return str.toString();
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(N)$

### Conclusion

Both approaches have the same time complexity of O(n) and space complexity of O(n). The built-in function is more concise and easier to understand, while the custom implementation provides a deeper understanding of how character conversion works at the ASCII level. Depending on the requirements and constraints of the task, either approach can be used effectively.
