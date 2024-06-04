---
id: valid-palindrome
title: Valid Palindrome Solution
sidebar_label: 0125 Valid Palindrome
tags:
  - String
  - Two Pointers
  - LeetCode
  - Java
  - Python
description: "This is a solution to the Valid Palindrome problem on LeetCode."
---

## Problem Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

### Examples

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

### Constraints

- $ (1 <= s.length <= 2 * 10^5) $
- `s` consists only of printable ASCII characters.

---

## Solution for Valid Palindrome Problem

### Approach

This code is an implementation of a solution to determine if a given string is a palindrome. A string is considered a palindrome if it reads the same forwards and backwards, ignoring spaces, punctuation, and letter casing.

The approach used in this solution is a two-pointer technique, where two pointers are maintained, one at the start of the string and the other at the end of the string. The two pointers move towards each other until they meet in the middle of the string.

At each iteration of the while loop, the characters pointed to by the start and last pointers are checked. If either of the characters is not a letter or digit (e.g., a space or punctuation), the pointer is moved one step to the right (for start) or one step to the left (for last) until a letter or digit is found.

If both characters are letters or digits, they are converted to lowercase and compared. If they are not equal, the function returns false, as the string is not a palindrome. If they are equal, both pointers are moved one step to the right and left, respectively.

The while loop continues until the start pointer is greater than the last pointer, indicating that all the characters have been checked and that the string is a palindrome. The function then returns true.

### Complexity

- Time Complexity: O(n), where n is the length of the string. This is because, in the worst case, all characters in the string need to be checked once, so the number of operations is proportional to the length of the string.
- Space Complexity: O(1), as no additional data structures are used, and only a constant amount of memory is required for the start and last pointers and a few variables.

### Code

#### Java

```java
class Solution {
    public boolean isPalindrome(String s) {
        if (s.isEmpty()) {
            return true;
        }
        int start = 0;
        int last = s.length() - 1;
        while(start <= last) {
            char currFirst = s.charAt(start);
            char currLast = s.charAt(last);
            if (!Character.isLetterOrDigit(currFirst)) {
                start++;
            } else if (!Character.isLetterOrDigit(currLast)) {
                last--;
            } else {
                if (Character.toLowerCase(currFirst) != Character.toLowerCase(currLast)) {
                    return false;
                }
                start++;
                last--;
            }
        }
        return true;
    }
}
```

#### Python

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        if not s:
            return True
        start = 0
        last = len(s) - 1
        while start <= last:
            curr_first = s[start]
            curr_last = s[last]
            if not curr_first.isalnum():
                start += 1
            elif not curr_last.isalnum():
                last -= 1
            else:
                if curr_first.lower() != curr_last.lower():
                    return False
                start += 1
                last -= 1
        return True
```

---

## References

- **LeetCode Problem**: [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)
- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/valid-palindrome/solution/)