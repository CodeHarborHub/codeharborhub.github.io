---
id: length-of-last-word
title: Length of Last Word (LeetCode)
difficulty: Easy
sidebar_label: 0058-LengthOfLastWord
topics:
  - String
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/length-of-last-word/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/length-of-last-word/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |


## Problem Description

Given a string `s` consisting of words and spaces, return the length of the last word in the string.

### Examples

#### Example 1

- **Input:** s = "Hello World"
- **Output:** 5
- **Explanation:** The last word is "World" with length 5.

#### Example 2

- **Input:** s = "   fly me   to   the moon  "
- **Output:** 4
- **Explanation:** The last word is "moon" with length 4.

#### Example 3

- **Input:** s = "luffy is still joyboy"
- **Output:** 6
- **Explanation:** The last word is "joyboy" with length 6.

### Constraints

- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces ' '.
- There will be at least one word in `s`.

### Approach

To find the length of the last word in the string `s`, we can follow these steps:

1. Trim any trailing spaces from the string.
2. Initialize a variable `length` to store the length of the last word.
3. Iterate over the string from right to left:
   - When encountering a non-space character, increment `length`.
   - Break the loop when encountering the first space character after a non-space character.
4. Return `length`.

### Solution Code

#### Python

```
class Solution(object):
    def lengthOfLastWord(self, s):
        return len(s.split()[-1])
```

#### C++

```
class Solution {
public:
    int lengthOfLastWord(string s) {
        int length = 0;
        int n = s.length();
        while (n > 0 && s[n - 1] == ' ') {
            n--;  // Trim trailing spaces
        }
        for (int i = n - 1; i >= 0; --i) {
            if (s[i] != ' ') {
                length++;
            } else if (length != 0) {
                break;
            }
        }
        return length;
    }
};
```

#### Java

```
class Solution {
    public int lengthOfLastWord(String s) {
        int length = 0;
        s = s.trim();  // Trim trailing spaces
        for (int i = s.length() - 1; i >= 0; --i) {
            if (s.charAt(i) != ' ') {
                length++;
            } else if (length != 0) {
                break;
            }
        }
        return length;
    }
}
```

### Conclusion

The Length of Last Word problem can be efficiently solved by trimming any trailing spaces from the string and iterating over the string from right to left to find the length of the last word. The provided solution code implements this approach in Python, C++, and Java, providing an optimal solution to the problem.