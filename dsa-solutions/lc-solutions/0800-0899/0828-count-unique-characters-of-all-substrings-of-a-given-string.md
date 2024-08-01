---
id: count-unique-characters-of-all-substrings-of-a-given-string
title: Count Unique Characters of all Substrings of a given String.
sidebar_label: 0828-count-unique-characters-of-all-substrings-of-a-given-string
tags:
  - Harsh Table
  - String
  - Dynamic Programming
description: "This is a solution to count unique characters of all substrings of a given-string problem on LeetCode."
---

## Problem Description

Let's define a function `countUniqueChars(s)` that returns the number of unique characters in `s`.

- For example, calling `countUniqueChars(s)` if `s = "LEETCODE"` then 
  `"L"`, `"T"`, `"C"`, `"O"`, `"D"` are the unique characters since they appear only once in `s`, therefore `countUniqueChars(s)` = 5.

Given a string s, return the sum of `countUniqueChars(t)` where t is a substring of `s`. The test cases are generated such that the answer fits in a `32-bit integer`.

Notice that some substrings can be repeated so in this case you have to count the repeated ones too.

### Examples

**Example 1:**

```
Input: s = "ABC"
Output: 10
**Explanation:** Change one 0 to 1 and connect two 1s, then we get an island with area = 3All possible substrings are: "A","B","C","AB","BC" and "ABC".
Every substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10.
```

**Example 2:**

```
Input:s = "ABA"
Output: 8
**Explanation:** The same as example 1, except countUniqueChars("ABA") = 1.
```

**Example 3:**

```
Input:  s = "LEETCODE"
Output: 92
```

### Constraints

- `1 <= s.length <= 10^5`
- `s consists of uppercase English letters only.`


## Solution for Assign Cookies

### Approach:

Let's think about how a character can be found as a unique character.

Think about string `"XAXAXXAX"` and focus on making the second `"A"` a unique character.
We can take `"XA(XAXX)AX"` and between `"()"` is our substring.
We can see here, to make the second "A" counted as a uniq character, we need to:

 1-  insert `"("` somewhere between the first and second `A`
 2-  insert `")"` somewhere between the second and third `A`

For step 1 we have `"A(XA"` and `"AX(A"`, 2 possibility.
For step 2 we have `"A)XXA"`, `"AX)XA"` and `"AXX)A"`, 3 possibilities.

So there are in total 2 * 3 = 6 ways to make the second A a unique character in a substring.
In other words, there are only 6 substring, in which this A contribute 1 point as unique string.

Instead of counting all unique characters and struggling with all possible substrings,
we can count for every char in S, how many ways to be found as a unique char.
We count and sum, and it will be out answer.



## Code in Different Languages

### C++

```cpp
     int uniqueLetterString(string S) {
        int index[26][2], res = 0, N = S.length(), mod = pow(10, 9) + 7;
        memset(index, -1, sizeof(int) * 52);
        for (int i = 0; i < N; ++i) {
            int c = S[i] - 'A';
            res = (res + (i - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
            index[c][0] = index[c][1];
            index[c][1] = i;
        }
        for (int c = 0; c < 26; ++c)
            res = (res + (N - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
        return res;
    }


```
### Java

```java
    public int uniqueLetterString(String S) {
        int[][] index = new int[26][2];
        for (int i = 0; i < 26; ++i) Arrays.fill(index[i], -1);
        int res = 0, N = S.length(), mod = (int)Math.pow(10, 9) + 7;
        for (int i = 0; i < N; ++i) {
            int c = S.charAt(i) - 'A';
            res = (res + (i - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
            index[c] = new int[] {index[c][1], i};
        }
        for (int c = 0; c < 26; ++c)
            res = (res + (N - index[c][1]) * (index[c][1] - index[c][0]) % mod) % mod;
        return res;
    }


```

### Python

```python
    def uniqueLetterString(self, S):
        index = {c: [-1, -1] for c in ascii_uppercase}
        res = 0
        for i, c in enumerate(S):
            k, j = index[c]
            res += (i - j) * (j - k)
            index[c] = [j, i]
        for c in index:
            k, j = index[c]
            res += (len(S) - j) * (j - k)
        return res % (10**9 + 7)
```

## Complexity Analysis

### Time Complexity: O(N)

### Space Complexity: O(1)

## References

- **LeetCode Problem**: [Count Unique Characters of all Substrings of a given String.](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/)

