---
id: second-largest-digit-in-a-string
title: Second Largest Digit in a String
sidebar_label: 1796-Second Largest Digit in a String
tags:
  - Leet code
description: "Solution to leetocde 1796"
---

## Problem Statement

Given an alphanumeric string `s`, return the second largest numerical digit that appears in `s`, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

## Examples

### Example 1

**Input:** `s = "dfa12321afd"`  
**Output:** `2`  
**Explanation:** The digits that appear in `s` are [1, 2, 3]. The second largest digit is 2.

### Example 2

**Input:** `s = "abc1111"`  
**Output:** `-1`  
**Explanation:** The digits that appear in `s` are [1]. There is no second largest digit.

## Constraints

- $1 <= s.length <= 500$
- s consists of only lowercase English letters and/or digits.

## Algorithm

1. Extract all unique digits from the string.
2. If the count of unique digits is less than 2, return -1.
3. Convert the digits to integers and sort them in descending order.
4. Return the second largest digit.

## Python Code

```python
class Solution:
    def secondHighest(self, s: str) -> int:
        digits = {char for char in s if char.isdigit()}
        if len(digits) < 2:
            return -1
        sorted_digits = sorted(map(int, digits), reverse=True)
        return sorted_digits[1]
```

## C++ Code

```cpp
#include <string>
#include <set>
#include <algorithm>

class Solution {
public:
    int secondHighest(std::string s) {
        std::set<char> digits;
        for (char ch : s) {
            if (isdigit(ch)) {
                digits.insert(ch);
            }
        }
        if (digits.size() < 2) {
            return -1;
        }
        auto it = digits.rbegin();
        std::advance(it, 1);
        return *it - '0';
    }
};
```

## Java Code

```java
import java.util.Set;
import java.util.TreeSet;

class Solution {
    public int secondHighest(String s) {
        Set<Character> digits = new TreeSet<>();
        for (char ch : s.toCharArray()) {
            if (Character.isDigit(ch)) {
                digits.add(ch);
            }
        }
        if (digits.size() < 2) {
            return -1;
        }
        return Character.getNumericValue(((TreeSet<Character>) digits).lower(((TreeSet<Character>) digits).last()));
    }
}
```

## JavaScript Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let digits = new Set();
  for (let char of s) {
    if (/\d/.test(char)) {
      digits.add(char);
    }
  }
  if (digits.size < 2) {
    return -1;
  }
  let sortedDigits = Array.from(digits)
    .map(Number)
    .sort((a, b) => b - a);
  return sortedDigits[1];
};
```
