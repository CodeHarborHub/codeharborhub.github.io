---
id: orderly-queue
title: Orderly Queue
sidebar_label: 899-  Orderly Queue
tags:
  - Math
  - String
  - Sorting
description: Given a string s and an integer k, return the lexicographically smallest string that can be formed by repeatedly moving one of the first k characters of s to the end of the string.
sidebar_position: 0899
---

## Problem Description

You are given a string s and an integer k. You can choose one of the first k letters of s and append it at the end of the string.

Return the lexicographically smallest string you could have after applying the mentioned step any number of moves.

### Example 1

- **Input:** `s = "cba", k = 1`
- **Output:** `"acb"`
- **Explanation:** `In the first move, we move the 1st character 'c' to the end, obtaining the string "bac".
In the second move, we move the 1st character 'b' to the end, obtaining the final result "acb".`

### Constraints

- `1 <= k <= s.length <= 1000`

## Approach

This solution first counts the frequency of each character in the string s. If `k > 1`, it simply returns the lexicographically smallest permutation by sorting the characters. If `k == 1`, it generates all possible rotations of the string and returns the lexicographically smallest one.

#### Java

```Java
class Solution {
    public String orderlyQueue(String s, int k) {
        int[] countChar = new int[26];
        int length = s.length();
        for(int i = 0 ; i < length ; ++i) {
            countChar[s.charAt(i) - 'a']++;
        }
        if(k > 1) {
            StringBuilder sb = new StringBuilder();
            for(int i = 0 ; i < 26 ; ++i) {
                int appearance = countChar[i];
                char c = (char)('a' + i);
                for(int r = 0 ; r < appearance ; ++r) {
                    sb.append(c);
                }
            }
            return sb.toString();
        }
        char startChar = 'a';
        for(int i = 0 ; i < 26 ; ++i) {
            if(countChar[i] > 0) {
                startChar = (char)('a' + i);
                break;
            }
        }
        List<String> beginWithStartChar = new ArrayList<>();
        for(int i = 0 ; i < length ; ++i) {
            if(s.charAt(i) == startChar) {
                beginWithStartChar.add(s.substring(i) + s.substring(0, i));
            }
        }
        String min = beginWithStartChar.get(0);
        for(String strBeginWithStartChar : beginWithStartChar) {
            if(strBeginWithStartChar.compareTo(min) < 0) min = strBeginWithStartChar;
        }
        return min;
    }
}
```

- Time Complexity
  The time complexity is $o(n)$.

- Space Complexity
  The space complexity is $O(n)$.
