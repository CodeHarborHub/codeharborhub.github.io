---
id: miminum-add-to-make-parentheses-valid
title: Minimum Add to Make Parentheses Valid
sidebar_label: 0921 - Minimum Add to Make Parentheses Valid
tags:
  - Leetcode
---

## Problem Statement

A parentheses string is valid if and only if:

- It is the empty string,
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

You are given a parentheses string `s`. In one move, you can insert a parenthesis at any position of the string.

For example, if `s = "()))"`, you can insert an opening parenthesis to be `"(()))"` or a closing parenthesis to be "`())))"`.
Return the minimum number of moves required to make `s` valid.

## Examples

### Example 1

**Input:** `s = "())"`  
**Output:** `1`

### Example 2

**Input:** `s = "((("`  
**Output:** `3`

## Constraints

- $1 <= s.length <= 1000$
- s[i] is either '(' or ')'.

## Algorithm

1. Initialize two counters, `open` and `close`, to keep track of the number of unmatched opening and closing parentheses.
2. Iterate through the string `s`.
3. For each character:
   - If it is an opening parenthesis `'('`, increment the `open` counter.
   - If it is a closing parenthesis `')'`:
     - If the `open` counter is greater than 0, decrement the `open` counter (indicating a match with an opening parenthesis).
     - Otherwise, increment the `close` counter (indicating an unmatched closing parenthesis).
4. The minimum number of moves required to make the string valid is the sum of `open` and `close`.

## C++ Code

```cpp
class Solution {
public:
    int minAddToMakeValid(string s) {
        int open = 0, close = 0;
        for (char str : s) {
            if (str == '(') {
                open++;
            } else if (open == 0) {
                close++;
            } else {
                open--;
            }
        }
        return open + close;
    }
};
```

## Python Code

```python
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        open_count = 0
        close_count = 0

        for char in s:
            if char == '(':
                open_count += 1
            elif open_count == 0:
                close_count += 1
            else:
                open_count -= 1

        return open_count + close_count
```

## Java Code

```java
class Solution {
    public int minAddToMakeValid(String s) {
        int open = 0, close = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                open++;
            } else if (open == 0) {
                close++;
            } else {
                open--;
            }
        }
        return open + close;
    }
}
```

## JavaScript Code

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let open = 0,
    close = 0;
  for (let char of s) {
    if (char === "(") {
      open++;
    } else if (open === 0) {
      close++;
    } else {
      open--;
    }
  }
  return open + close;
};
```
