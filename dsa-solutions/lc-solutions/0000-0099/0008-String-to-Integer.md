---
id: string-to-integer
title: String to Integer(LeetCode)
sidebar_label: 0008-String to Integer
tags: 
    - String
    - Math
description: Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
sidebar_position: 8
---

## Problem Statement

Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer.

The algorithm for `myAtoi(string s)` is as follows:

1. **Whitespace:** Ignore any leading whitespace (" ").
2. **Signedness:** Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
3. **Conversion:** Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
4. **Rounding:** If the integer is out of the 32-bit signed integer range [-2^31, 2^31 - 1], then round the integer to remain in the range. Specifically, integers less than -2^31 should be rounded to -2^31, and integers greater than 2^31 - 1 should be rounded to 2^31 - 1.
5. Return the integer as the final result.

### Examples

**Example 1:**

```
Input: s = "42"
Output: 42
```

**Example 2:**

```
Input: s = " -042"
Output: -42
```

**Example 3:**

```
Input: s = "1337c0d3"
Output: 1337
```

**Example 4:**

```
Input: s = "0-1"
Output: 0
```

**Example 5:**

```
Input: s = "words and 987"
Output: 0
```

### Constraints

- 0 < s.length < 200
- s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

## Solution

### Approach

#### Intuition

The function should iterate through the string, handling leading whitespaces, signs, and valid digits. It should accumulate the numerical value while checking for overflow conditions.

#### Algorithm

1. **Handling Empty String:**
   - If `s.length() == 0`, return 0 as there's no numerical content.
   
2. **Skipping Leading Whitespaces:**
   - Iterate through characters (`s.charAt(i)`) as long as they are whitespaces (' ') and the index `i` is within the string bounds. This skips any leading whitespaces before the potential number.
   
3. **Handling Optional Sign:**
   - Check if the first non-whitespace character (`s.charAt(i)`) is a sign ('-' or '+').
   - If it's a minus sign, set the `sign` variable to -1 to indicate a negative number.
   
4. **Converting Digits:**
   - Iterate through characters as long as they are valid digits (between '0' and '9') and the index `i` is within the string bounds.
   - Convert the current character (assumed to be a digit) to its corresponding integer value by subtracting the ASCII value of '0'.
   
5. **Overflow Handling:**
   - Check for potential overflow situations for positive numbers:
     - Compare the current accumulated value (`ans`) with the maximum integer value (`max`) divided by 10 (considering the next digit) and the remainder (`max % 10`).
     - If `ans` is already greater than the maximum divided by 10, or if `ans` is equal to the maximum divided by 10 and the current digit is greater than the remainder, it signifies overflow.
   - In case of overflow, return the maximum positive value if the sign is positive, or the minimum negative value if the sign is negative.
   
6. **Returning the Result:**
   - After processing all valid digits, multiply the final `ans` by the `sign` (1 for positive, -1 for negative) and return it as the converted integer value.

### Code

#### Java Implementation

```java
class Solution {
    public int myAtoi(String s) {
        int ans = 0;
        int i = 0;
        int sign = 1;
        int max = Integer.MAX_VALUE;
        int min = Integer.MIN_VALUE;
        if (s.length() == 0) {
            return 0;
        }
        while (i < s.length() && s.charAt(i) == ' ') {
            i++;
        }
        if (i < s.length() && (s.charAt(i) == '-' || s.charAt(i) == '+')) {
            if (s.charAt(i) == '-') {
                sign = -1;
            }
            i++;
        }
        while (i < s.length() && s.charAt(i) - '0' <= 9 && s.charAt(i) - '0' >= 0) {
            int digit = s.charAt(i) - '0';
            if (ans > max / 10 || (ans == max / 10 && digit > max % 10)) {
                return (sign == 1) ? max : min;
            }
            ans = ans * 10 + digit;
            i++;
        }
        return ans * sign;
    }
}
```

### Complexity Analysis

- **Time Complexity**: $O(n)$, where n is the length of the string `s`.
- **Space Complexity**: $O(1)$, due to the constant number of variables used.

## Conclusion

We have successfully implemented the `myAtoi` function to convert a string to a 32-bit signed integer. The solution handles leading whitespaces, signs, valid digits, and overflow conditions efficiently, providing a robust string-to-interger(atoi)

```