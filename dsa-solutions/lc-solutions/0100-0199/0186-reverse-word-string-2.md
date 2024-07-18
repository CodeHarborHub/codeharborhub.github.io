---
id: reverse-words-in-string-II
title: Reverse words in string -II
sidebar_label: 0186-Reverse words in string -II
tags:
- strings
description: "Given an input string , reverse the string word by word. 

"
---

## Problem Description
Given a character array s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.

Your code must solve the problem in-place, i.e. without allocating extra space.
### Examples

**Example 1:**
```
Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]

```

***Example:2***
```
Input: s = ["a"]
Output: ["a"]
```


#### Constraints
- `1 <= s.length <= 105`
- `s[i] `is an English letter (uppercase or lowercase), digit, or space ' '.
- There is at least one word in s.
- s does not contain leading or trailing spaces.
- All the words in s are guaranteed to be separated by a single space.


### Approach

- Here's a step-by-step explanation of the approach in simple terms:

#### Helper Function reverse:

- A helper function reverse is defined to reverse a section of the list in-place. It takes the list s and two indices i and j and swaps elements at these indices moving towards the center until i is no longer less than j.


#### Initial Setup:

- The function starts by initializing three variables: i, j, and n.
- i keeps track of the start of the current word.
- j is used to iterate through the list.
- n is the length of the list.
- Reverse Each Word Individually:

The function iterates through the list using j.
When a space (' ') is encountered, it means the end of a word has been found.
The reverse function is called to reverse the characters in the word from index i to j-1.
After reversing the word, i is set to j+1 to start tracking the next word.
If the end of the list is reached (j == n-1), the last word is reversed by calling reverse from index i to j.

#### Reverse the Entire List:

- After all individual words are reversed, the entire list is reversed by calling the reverse function from index 0 to n-1.
By reversing each word individually and then reversing the entire list, the words end up in the correct reversed order.




### Solution

#### Java

```Java
class Solution {
    public void reverseWords(char[] s) {
        int n = s.length;
        for (int i = 0, j = 0; j < n; ++j) {
            if (s[j] == ' ') {
                reverse(s, i, j - 1);
                i = j + 1;
            } else if (j == n - 1) {
                reverse(s, i, j);
            }
        }
        reverse(s, 0, n - 1);
    }

    private void reverse(char[] s, int i, int j) {
        for (; i < j; ++i, --j) {
            char t = s[i];
            s[i] = s[j];
            s[j] = t;
        }
    }
}
```

#### PYthon
```python
class Solution:
    def reverseWords(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """

        def reverse(s, i, j):
            while i < j:
                s[i], s[j] = s[j], s[i]
                i += 1
                j -= 1

        i, j, n = 0, 0, len(s)
        while j < n:
            if s[j] == ' ':
                reverse(s, i, j - 1)
                i = j + 1
            elif j == n - 1:
                reverse(s, i, j)
            j += 1
        reverse(s, 0, n - 1)
```


### Complexity analysis
- Time Complexity: $𝑂(n)$
- Space Complexity: $O(1)$
