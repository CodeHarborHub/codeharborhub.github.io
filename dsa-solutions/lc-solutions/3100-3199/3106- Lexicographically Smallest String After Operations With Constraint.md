---
id: Lexicographically-Smallest-String-After-Operations-With-Constraint
title: Lexicographically Smallest String After Operations With Constraint
sidebar_label: 3106. Lexicographically Smallest String After Operations With Constraint
tags:
- Java
- Greedy
- String  
description: "This document provides a solution where we Return a string denoting the 
lexicographically smallest
 string t"
---

## Problem

You are given a string `s` and an integer `k`.

Define a function `distance(s1, s2)` between two strings `s1` and `s2` of the same length `n` as:

The **sum** of the **minimum distance** between `s1[i]` and `s2[i]` when the characters from `'a'` to `'z'` are placed in a **cyclic** order, for all `i` in the range `[0, n - 1]`.
For example, `distance("ab", "cd") == 4`, and `distance("a", "z") == 1`.

You can **change** any letter of `s` to **any** other lowercase English letter, **any** number of times.

Return a string denoting the 
lexicographically smallest
string `t` you can get after some changes, such that `distance(s, t) <= k`.

### Examples

**Example 1:**

**Input:** `s = "zbbz"`, `k = 3`

**Output:** "aaaz"

**Explanation:**

Change s to "aaaz". The distance between "zbbz" and "aaaz" is equal to `k = 3`.

**Example 2:**

**Input:** `s = "xaxcd"`, `k = 4`

**Output:** "aawcd"

**Explanation:**

The distance between "xaxcd" and "aawcd" is equal to `k = 4`.


### Constraints

- $1 <= s.length <= 100$
- $0 <= k <= 2000$
- `s` consists only of lowercase English letters.

---

## Approach

## 1. Conversion to Character Array:

char[] `result = s.toCharArray()`;: This line converts the input string s into a character array named result. This array will hold the modified string.

## 2. Iterating Through Characters:

The function uses an outer for loop to iterate through each character i in the original string s.

## 3. Finding the Best Replacement Character:

An inner for loop iterates through all lowercase letters `char c = 'a'; c <= 'z'; c++`.

`Inside the inner loop:`
- **distance(s.charAt(i), c):**
This calculates the distance between the current character s[i] and the candidate replacement character c using a separate distance function (assumed to be defined elsewhere).

- **if `(distance(s.charAt(i), c) <= k):`** This checks if changing the current character to c is allowed within the k limit based on the distance.

**If the distance is less than or equal to k:**
- `result[i] = c`;: The character in the result array at position i is updated with the new character c.
- `k -= distance(s.charAt(i), c)`;: The remaining allowed changes (k) are decremented by the distance used for this replacement.
- break;: The inner loop exits as a suitable replacement has been found within the limit.

## 4. Returning the Modified String:

return new String(result);: This line converts the modified character array result back into a String object and returns it.

## Solution 

#### Code in Java

```java
class Solution {
    public int distance(char s1, char s2) {
        int diff = Math.abs(s1 - s2);
        return Math.min(diff, 26 - diff);
    }
    public String getSmallestString(String s, int k) {
        char[] result = s.toCharArray();
        for (int i = 0; i < s.length(); i++) {
            for (char c = 'a'; c <= 'z'; c++) {
                if (distance(s.charAt(i), c) <= k) {
                    result[i] = c;
                    k -= distance(s.charAt(i), c);
                    break;
                }
            }
        }
        return new String(result);
        
    }
}   
```

### Complexity Analysis

#### Time Complexity: $O(n * k)$

> **Reason**: In the worst case, the inner loop runs completely for every character in the outer loop (if all characters need to be replaced). This leads to a total of n * k iterations.

#### Space Complexity: $O(n)$

> **Reason**: The space complexity of the provided code is dominated by the character array result used to store the modified string.

# References

- **LeetCode Problem:** [Lexicographically Smallest String After Operations With Constraint](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/description/)
- **Solution Link:** [Lexicographically Smallest String After Operations With Constraint on LeetCode](https://leetcode.com/problems/lexicographically-smallest-string-after-operations-with-constraint/solutions/)
