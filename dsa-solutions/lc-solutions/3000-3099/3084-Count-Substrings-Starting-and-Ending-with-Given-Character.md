---
id: count-substrings-starting-and-ending-with-given-character
title: Count Substrings Starting and Ending with Given Character (LeetCode)
sidebar_label: 3084-CountSubstringsStartingAndEndingWithGivenCharacter
tags:
  - String
  - Sliding Window
description: Return the total number of substrings of a string that start and end with a given character.
sidebar_position: 3084
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Count Substrings Starting and Ending with Given Character](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/) | [Count Substrings Starting and Ending with Given Character Solution on LeetCode](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given a string `s` and a character `c`. Return the total number of substrings of `s` that start and end with `c`.

### Example 1

- **Input:** `s = "abada"`, `c = "a"`
- **Output:** `6`
- **Explanation:** Substrings starting and ending with "a" are: "a", "ada", "a", "ada", "a", "ada".

### Example 2

- **Input:** `s = "zzz"`, `c = "z"`
- **Output:** `6`
- **Explanation:** There are a total of 6 substrings in `s` and all start and end with "z".

### Constraints

- `1 <= s.length <= 10^5`
- `s` and `c` consist only of lowercase English letters.

## Approach

To solve this problem, we can iterate through the string and track the positions of the character `c`. For each occurrence of `c`, we can count the number of valid substrings that start and end with `c` using the positions tracked so far. Here's the approach:

1. **Tracking Positions**:
   - Use a list to store the indices of the occurrences of `c`.

2. **Counting Substrings**:
   - For each occurrence of `c`, calculate the number of valid substrings that can be formed with the previously recorded positions.

### Solution Code

#### Python

```python
class Solution:
    def countSubstrings(self, s: str, c: str) -> int:
        positions = []
        count = 0
        
        for i in range(len(s)):
            if s[i] == c:
                positions.append(i)
                count += len(positions)
        
        return count
```

#### C++
```c++
class Solution {
public:
    int countSubstrings(string s, char c) {
        int count = 0;
        int positions = 0;
        
        for (int i = 0; i < s.length(); ++i) {
            if (s[i] == c) {
                ++positions;
                count += positions;
            }
        }
        
        return count;
    }
};
```

#### Java
```java
class Solution {
    public int countSubstrings(String s, char c) {
        int count = 0;
        int positions = 0;
        
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c) {
                positions++;
                count += positions;
            }
        }
        
        return count;
    }
}
```

### Conclusion
The provided solutions use a single-pass approach to count the substrings starting and ending with 
the given character efficiently. Adjustments for different languages and edge cases are handled to 
ensure robustness across different inputs.