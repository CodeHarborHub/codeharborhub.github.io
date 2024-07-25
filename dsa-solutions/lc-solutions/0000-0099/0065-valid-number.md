---
id: valid-number
title: Valid Number(LeetCode)
sidebar_label: 0065-Valid Number
tags:
  - String
description: Given a string s, return whether s is a valid number.
---

## Problem Statement

Given a string `s`, return whether `s` is a valid number.

For example, all the following are valid numbers: `"2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"`, while the following are not valid numbers: `"abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"`.

Formally, a valid number is defined using one of the following definitions:

1. An integer number followed by an optional exponent.
2. A decimal number followed by an optional exponent.
An integer number is defined with an optional sign `'-'` or `'+'` followed by digits.

A decimal number is defined with an optional sign `'-'` or `'+'` followed by one of the following definitions:

1. Digits followed by a dot `'.'`.
2. Digits followed by a dot `'.'` followed by digits.
3. A dot `'.'` followed by digits.
An exponent is defined with an exponent notation `'e'` or `'E'` followed by an integer number.

The digits are defined as one or more digits.

### Examples

**Example 1:**

```plaintext
Input: s = "0"
Output: true
```

**Example 2:**

```plaintext
Input: s = "e"
Output: false
```

**Example 3:**

```plaintext
Input: s = "."
Output: false
```

### Constraints

- `1 <= s.length <= 20`
- `s` consists of only English letters (both uppercase and lowercase), digits (`0-9`), plus `'+'`, minus `'-'`, or dot `'.'`.

## Solution

### Approach 

#### Algorithm

1. Trim the Input String: Remove leading and trailing whitespace using `s.trim()`.
2. Initialize Flags:
* `pointSeen`: Tracks if a decimal point has been encountered.
* `eSeen`: Tracks if an exponent 'e' has been encountered.
* `numberSeen`: Tracks if at least one digit has been encountered.
* `numberAfterE`: Tracks if at least one digit exists after an 'e'.
3. Iterate Over Each Character:
* If the character is a digit (`0-9`), set `numberSeen` and `numberAfterE` to `true`.
* If the character is a decimal point (`.`), ensure no 'e' or previous decimal point has been seen.
* If the character is an exponent (`e`), ensure no previous 'e' has been seen and that at least one digit has been encountered before it. Set numberAfterE to false.
* If the character is a sign (`+` or `-`), ensure it appears at the beginning or immediately after an 'e'.
* If any other character is encountered, return `false`.
4. Final Check: Ensure that at least one digit has been encountered (`numberSeen` is `true`) and if an 'e' was encountered, ensure there is at least one digit after it (`numberAfterE` is `true`).

#### Implementation

```Java
public boolean isNumber(String s) {
    s = s.trim();
    
    boolean pointSeen = false;
    boolean eSeen = false;
    boolean numberSeen = false;
    boolean numberAfterE = true;
    for(int i=0; i<s.length(); i++) {
        if('0' <= s.charAt(i) && s.charAt(i) <= '9') {
            numberSeen = true;
            numberAfterE = true;
        } else if(s.charAt(i) == '.') {
            if(eSeen || pointSeen) {
                return false;
            }
            pointSeen = true;
        } else if(s.charAt(i) == 'e') {
            if(eSeen || !numberSeen) {
                return false;
            }
            numberAfterE = false;
            eSeen = true;
        } else if(s.charAt(i) == '-' || s.charAt(i) == '+') {
            if(i != 0 && s.charAt(i-1) != 'e') {
                return false;
            }
        } else {
            return false;
        }
    }
    
    return numberSeen && numberAfterE;
}
```

### Complexity Analysis

- **Time complexity**: $O(N)$
- **Space complexity**: $O(1)$

### Conclusion

The solution effectively validates if a string represents a valid number by processing it in a single pass and using flags to ensure the correct format. The key checks include ensuring correct placement of decimal points, exponents, and signs, as well as ensuring the presence of digits both before and after an exponent if present. This approach is efficient with a linear time complexity and constant space complexity.
