---
id: total-appeal-of-a-string
title: Total Appeal of a String
sidebar_label: 2262-Total-Appeal-of-a-String
tags:
  - Strings
  - Dynamic Programming
  - C++
  - Java
  - Python
description: "This document provides a solution to the Total Appeal of a String problem, where we need to calculate the total appeal of all substrings of a given string."
---

## Problem

The appeal of a string is the number of distinct characters found in the string. For example, the appeal of "abbca" is 3 because it has 3 distinct characters: 'a', 'b', and 'c'.

Given a string `s`, return the total appeal of all of its substrings.

### Examples

**Example 1:**

Input: s = "abbca"
Output: 28
Explanation: The following are the substrings of "abbca":

- "a" has an appeal of 1.
- "b" has an appeal of 1.
- "b" has an appeal of 1.
- "c" has an appeal of 1.
- "a" has an appeal of 1.
- "ab" has an appeal of 2.
- "bb" has an appeal of 1.
- "bc" has an appeal of 2.
- "ca" has an appeal of 2.
- "abb" has an appeal of 2.
- "bbc" has an appeal of 2.
- "bca" has an appeal of 3.
- "abbc" has an appeal of 3.
- "bbca" has an appeal of 3.
- "abbca" has an appeal of 3.
  The total appeal is 1 + 1 + 1 + 1 + 1 + 2 + 1 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 = 28.

**Example 2:**

Input: s = "code"
Output: 20
Explanation: The following are the substrings of "code":

- "c" has an appeal of 1.
- "o" has an appeal of 1.
- "d" has an appeal of 1.
- "e" has an appeal of 1.
- "co" has an appeal of 2.
- "od" has an appeal of 2.
- "de" has an appeal of 2.
- "cod" has an appeal of 3.
- "ode" has an appeal of 3.
- "code" has an appeal of 4.
  The total appeal is 1 + 1 + 1 + 1 + 2 + 2 + 2 + 3 + 3 + 4 = 20.

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists of lowercase English letters.

### Approach

To solve this problem, we need to calculate the total appeal of all substrings. The key idea is to use dynamic programming and track the last occurrence of each character. For each character in the string, we compute its contribution to the total appeal based on its position and previous occurrences.

Detailed steps:

1. Initialize an array `last_occurrence` to store the last occurrence index of each character.
2. Traverse the string and for each character, compute its contribution to the total appeal based on its last occurrence.
3. Update the last occurrence of the character to the current position.

### Solution

#### Code in Different Languages

### C++ Solution

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>

using namespace std;

long long appealSum(string s) {
    vector<int> last_occurrence(26, -1);
    long long total_appeal = 0, current_appeal = 0;

    for (int i = 0; i < s.size(); ++i) {
        current_appeal += i - last_occurrence[s[i] - 'a'];
        total_appeal += current_appeal;
        last_occurrence[s[i] - 'a'] = i;
    }

    return total_appeal;
}

int main() {
    string s = "abbca";
    cout << appealSum(s) << endl;  // Output: 28
}
```

### Java Solution

```java
import java.util.*;

public class TotalAppealOfString {
    public long appealSum(String s) {
        int[] last_occurrence = new int[26];
        Arrays.fill(last_occurrence, -1);
        long total_appeal = 0, current_appeal = 0;

        for (int i = 0; i < s.length(); ++i) {
            current_appeal += i - last_occurrence[s.charAt(i) - 'a'];
            total_appeal += current_appeal;
            last_occurrence[s.charAt(i) - 'a'] = i;
        }

        return total_appeal;
    }

    public static void main(String[] args) {
        TotalAppealOfString solution = new TotalAppealOfString();
        String s = "abbca";
        System.out.println(solution.appealSum(s));  // Output: 28
    }
}
```

### Python Solution

```python
def appealSum(s: str) -> int:
    last_occurrence = [-1] * 26
    total_appeal = 0
    current_appeal = 0

    for i, char in enumerate(s):
        current_appeal += i - last_occurrence[ord(char) - ord('a')]
        total_appeal += current_appeal
        last_occurrence[ord(char) - ord('a')] = i

    return total_appeal

# Test
s = "abbca"
print(appealSum(s))  # Output: 28
```

### Complexity Analysis

**Time Complexity:** O(n)

> Reason: We traverse the string once, and each operation inside the loop takes constant time.

**Space Complexity:** O(1)

> Reason: We use a fixed array of size 26 to store the last occurrences of each character.

This solution calculates the total appeal of all substrings by efficiently tracking the last occurrence of each character and computing their contributions. The time complexity is linear, and the space complexity is constant, making it suitable for large input sizes.

### References

**LeetCode Problem:** Total Appeal of a String
