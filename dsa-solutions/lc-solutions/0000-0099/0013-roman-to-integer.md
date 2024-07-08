---
id: roman-to-integer
title: Roman to Integer (LeetCode)
sidebar_label: 0013 - Roman to Integer
tags:
    - Hash Table
    - Math
    - String
description: Convert a given Roman numeral to an integer using specific rules for the Roman numeral system.
sidebar_position: 13
---

## Problem Statement

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D`, and `M`.

| Symbol | Value |
| :----- | :---- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example, 2 is written as `II` in Roman numeral, just two ones added together. 12 is written as `XII`, which is simply X + II. The number 27 is written as `XXVII`, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five, we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a Roman numeral, convert it to an integer.

### Examples

**Example 1:**

- **Input**: `s = "III"`
- **Output**: `3`
- **Explanation**: III = 3.

**Example 2:**

- **Input**: `s = "LVIII"`
- **Output**: `58`
- **Explanation**: L = 50, V= 5, III = 3.

**Example 3:**

- **Input**: `s = "MCMXCIV"`
- **Output**: `1994`
- **Explanation**: M = 1000, CM = 900, XC = 90, and IV = 4.

### Constraints

- `1 <= s.length <= 15`
- `s` contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that `s` is a valid Roman numeral in the range [1, 3999].

## Solution

### Approach

#### Intuition

The key intuition is that in Roman numerals, when a smaller value appears before a larger value, it represents subtraction, while when a smaller value appears after or equal to a larger value, it represents addition.

#### Explanation

The unordered map `m` is created and initialized with mappings between Roman numeral characters and their corresponding integer values. For example, 'I' is mapped to 1, 'V' to 5, 'X' to 10, and so on.

The variable `ans` is initialized to 0. This variable will accumulate the final integer value of the Roman numeral string.

The for loop iterates over each character in the input string `s`.

For example, for the string "IX":
- When `i` is 0, the current character `s[i]` is 'I'. Since there is a next character ('X'), and the value of 'I' (1) is less than the value of 'X' (10), the condition `m[s[i]] < m[s[i+1]]` is true. In this case, we subtract the value of the current character from `ans`.
- When `i` is 1, the current character `s[i]` is 'X'. This is the last character in the string, so there is no next character to compare. In this case, we add the value of the current character to `ans`.

For the string "XI":
- When `i` is 0, the current character `s[i]` is 'X'. Since there is a next character ('I'), and the value of 'X' (10) is greater than the value of 'I' (1), the condition `m[s[i]] < m[s[i+1]]` is false. In this case, we add the value of the current character to `ans`.
- When `i` is 1, the current character `s[i]` is 'I'. This is the last character in the string, so there is no next character to compare. In this case, we add the value of the current character to `ans`.

After the for loop, the accumulated value in `ans` represents the integer conversion of the Roman numeral string, and it is returned as the result.

### Code

#### C++ Implementation

```cpp
class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char, int> m = {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        
        int ans = 0;
        for (int i = 0; i < s.length(); i++) {
            if (i < s.length() - 1 && m[s[i]] < m[s[i+1]]) {
                ans -= m[s[i]];
            } else {
                ans += m[s[i]];
            }
        }
        return ans;
    }
};
```

#### Java Implementation

```java
class Solution {
    public int romanToInt(String s) {
        Map<Character, Integer> m = new HashMap<>();
        m.put('I', 1);
        m.put('V', 5);
        m.put('X', 10);
        m.put('L', 50);
        m.put('C', 100);
        m.put('D', 500);
        m.put('M', 1000);
        
        int ans = 0;
        for (int i = 0; i < s.length(); i++) {
            if (i < s.length() - 1 && m.get(s.charAt(i)) < m.get(s.charAt(i+1))) {
                ans -= m.get(s.charAt(i));
            } else {
                ans += m.get(s.charAt(i));
            }
        }
        return ans;
    }
}
```

#### Python Implementation

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        m = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        ans = 0
        for i in range(len(s)):
            if i < len(s) - 1 and m[s[i]] < m[s[i+1]]:
                ans -= m[s[i]]
            else:
                ans += m[s[i]]
        
        return ans
```

### Complexity Analysis

- **Time Complexity**: $O(n)$ - The algorithm iterates through each character in the input string once, where `n` is the length of the string.
- **Space Complexity**: $O(1)$ - The amount of extra space used is constant, determined by the fixed size of the `m` map.

## Conclusion

The provided solutions efficiently convert a Roman numeral to an integer by iterating through the characters and using a map to handle the conversion based on the rules of the Roman numeral system. This approach ensures that the conversion adheres to the rules while maintaining linear time complexity and constant space complexity.

