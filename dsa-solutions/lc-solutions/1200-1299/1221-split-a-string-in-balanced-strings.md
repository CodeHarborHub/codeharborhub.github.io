---
id: split-a-string-in-balanced-strings
title: Split a String in balanced Strings
sidebar_label: 1221. Split a String in Balanced Strings
tags:
- String
- Greedy
- Counting
description: "Solution to Leetcode 1221. Split a String in Balanced Strings"
---

## Problem Description

**Balanced** strings are those that have an equal quantity of `'L'` and `'R'` characters.

Given a balanced **string** `s`, split it into some number of substrings such that:

- Each substring is balanced.

Return the **maximum** number of balanced strings you can obtain.
 
### Examples

**Example 1:**

```
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
```

**Example 2:**

```
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced.

```

**Example 3:**

```
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".


```



### Constraints
- `2 <= s.length <= 1000`
- `s[i] is either 'L' or 'R'.`
- `s is a balanced string.`

### Approach 

The provided code solves the problem of splitting a string into the maximum number of balanced substrings. A balanced substring is defined as a substring that has an equal number of 'L' and 'R' characters. Here's a step-by-step approach to how the code works:

### Steps:

1. **Initialize Counters**:
   - `count` is initialized to 0 and will be used to count the number of balanced substrings.
   - `ch` is initialized to 0 and will be used to keep track of the balance between 'R' and 'L' characters.

2. **Iterate Through the String**:
   - The code loops through each character of the input string `s` using a `for` loop.

3. **Update Balance Counter**:
   - Inside the loop, for each character:
     - If the character is 'R', increment the `ch` counter.
     - If the character is 'L', decrement the `ch` counter.
   - This way, `ch` keeps track of the balance:
     - Positive values of `ch` indicate more 'R's than 'L's.
     - Negative values of `ch` indicate more 'L's than 'R's.
     - A `ch` value of 0 indicates an equal number of 'R' and 'L' characters up to that point.

4. **Check for Balanced Substring**:
   - After updating `ch`, the code checks if `ch` is 0.
   - If `ch` is 0, it means that the substring from the last balanced point (or from the start if it's the first balanced substring) to the current position is balanced.
   - Increment the `count` counter each time a balanced substring is found.

5. **Return the Result**:
   - After the loop completes, `count` will hold the total number of balanced substrings in the input string `s`.
   - The function returns the value of `count`.

### Example Walkthrough
Let's consider the string `s = "RLRRLLRLRL"`:

- Initialize: `count = 0`, `ch = 0`
- Loop through each character:
  - 'R' -> `ch = 1`
  - 'L' -> `ch = 0` (balanced substring found, `count = 1`)
  - 'R' -> `ch = 1`
  - 'R' -> `ch = 2`
  - 'L' -> `ch = 1`
  - 'L' -> `ch = 0` (balanced substring found, `count = 2`)
  - 'R' -> `ch = 1`
  - 'L' -> `ch = 0` (balanced substring found, `count = 3`)
  - 'R' -> `ch = 1`
  - 'L' -> `ch = 0` (balanced substring found, `count = 4`)

The final `count` is 4, which is the number of balanced substrings in the input string.


### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    int balancedStringSplit(string s) {
        int count = 0;
        int ch = 0;
        for (char c : s) {
            if (c == 'R') {
                ch++;
            } else {
                ch--;
            }
            if (ch == 0) {
                count++;
            }
        }
        return count;
    }
};

 ```

#### PYTHON

```python
    def balancedStringSplit(s: str) -> int:
    count = 0
    ch = 0
    for char in s:
        if char == 'R':
            ch += 1
        else:
            ch -= 1
        if ch == 0:
            count += 1
    return count

```



### Complexity Analysis

- **Time Complexity**: O(n)
  - The algorithm iterates through each character in the input string exactly once, resulting in a linear time complexity relative to the length of the string \( n \).

- **Space Complexity**: O(1)
  - The algorithm uses a fixed amount of extra space (for the `count` and `ch` variables), regardless of the input size, resulting in constant space complexity.


### References

- **LeetCode Problem**: Split a String in balanced Strings
