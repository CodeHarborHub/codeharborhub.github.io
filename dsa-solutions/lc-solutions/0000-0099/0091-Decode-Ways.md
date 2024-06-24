---
id: decode-ways
title: Decode Ways
sidebar_label: 0091 - Decode Ways
tags:
  - dyp
  - Leetcode

description: "This is a solution to the Decode Ways on LeetCode."
---

## Problem Statement

A message containing letters from A-Z can be encoded into numbers using the following mapping:

```
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
```

To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.

### Examples

**Example 1:**

```
Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
```

**Example 2:**

```
Input: s = "226"
Output: 3
Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

**Example 3:**

```
Input: s = "06"
Output: 0
Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").
```

### Constraints:

- $1 <= s.length <= 100$
- s contains only digits and may contain leading zero(s).

### Algorithm

1. If the string `s` is empty or starts with '0', return 0 as it cannot be decoded.
2. Initialize a `dyp` array where `dyp[i]` represents the number of ways to decode the substring `s[0:i]`.
3. Set `dyp[0]` to 1 (base case for the empty string).
4. Set `dyp[1]` based on the first character of the string (1 if the first character is not '0', otherwise 0).
5. Iterate through the string from the second character to the end:
   - For each character, check if it forms a valid single-digit number (between '1' and '9'). If it does, add `dyp[i-1]` to `dyp[i]`.
   - Check if the two-digit number formed with the previous character is valid (between "10" and "26"). If it does, add `dyp[i-2]` to `dyp[i]`.
6. The result is in `dyp[n]`, where `n` is the length of the string.

### Pseudocode

```
function decode(s):
    if s is empty or s[0] is '0':
        return 0

    n = length of s
    dyp = array of size (n + 1) initialized to 0
    dyp[0] = 1
    dyp[1] = 1 if s[0] != '0' else 0

    for i from 2 to n:
        if s[i-1] != '0':
            dyp[i] += dyp[i-1]

        twodigit = integer value of s[i-2:i]
        if 10 <= twodigit <= 26:
            dyp[i] += dyp[i-2]

    return dyp[n]
```

### Python

```python
class Solution:
    def decode(self, s: str) -> int:
        if not s or s[0] == '0':
            return 0

        n = len(s)
        dyp = [0] * (n + 1)
        dyp[0] = 1
        dyp[1] = 1 if s[0] != '0' else 0

        for i in range(2, n + 1):
            if s[i - 1] != '0':
                dyp[i] += dyp[i - 1]

            twodigit = int(s[i - 2:i])
            if 10 <= twodigit <= 26:
                dyp[i] += dyp[i - 2]

        return dyp[n]
```

### C++

```cpp
class Solution {
public:
    int decode(string s) {
        if (s.empty() || s[0] == '0') return 0;

        int n = s.size();
        vector<int> dyp(n + 1, 0);
        dyp[0] = 1;
        dyp[1] = s[0] != '0' ? 1 : 0;

        for (int i = 2; i <= n; ++i) {
            if (s[i - 1] != '0') {
                dyp[i] += dyp[i - 1];
            }

            int twodigit = stoi(s.substr(i - 2, 2));
            if (10 <= twodigit && twodigit <= 26) {
                dyp[i] += dyp[i - 2];
            }
        }

        return dyp[n];
    }
};

```

### Java

```java
class Solution {
    public int decode(String s) {
        if (s == null || s.length() == 0 || s.charAt(0) == '0') {
            return 0;
        }

        int n = s.length();
        int[] dyp = new int[n + 1];
        dyp[0] = 1;
        dyp[1] = s.charAt(0) != '0' ? 1 : 0;

        for (int i = 2; i <= n; ++i) {
            if (s.charAt(i - 1) != '0') {
                dyp[i] += dyp[i - 1];
            }

            int twoDigit = Integer.parseInt(s.substring(i - 2, i));
            if (10 <= twoDigit && twoDigit <= 26) {
                dyp[i] += dyp[i - 2];
            }
        }

        return dyp[n];
    }
}
```

### JavaScript

```javascript
var decode = function (s) {
  if (!s || s[0] === "0") return 0;

  let n = s.length;
  let dyp = new Array(n + 1).fill(0);
  dyp[0] = 1;
  dyp[1] = s[0] !== "0" ? 1 : 0;

  for (let i = 2; i <= n; i++) {
    if (s[i - 1] !== "0") {
      dyp[i] += dyp[i - 1];
    }

    let twoDigit = parseInt(s.substring(i - 2, i), 10);
    if (10 <= twoDigit && twoDigit <= 26) {
      dyp[i] += dyp[i - 2];
    }
  }

  return dyp[n];
};
```
