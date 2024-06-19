---
id: Interleaving-Strings
title: Interleaving Strings
sidebar_label: Interleaving Strings
tags: 
    - Dynamic Programming
    - Strings
    - Interleaving String
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Interleaving-Strings](https://leetcode.com/problems/Interleaving-Strings/description/) | [Interleaving-Strings Solution on LeetCode](https://leetcode.com/problems/Interleaving-Strings/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

Given strings `s1`, `s2`, and `s3`, determine whether `s3` is formed by an interleaving of `s1` and `s2`.

An interleaving of two strings `s` and `t` is a configuration where `s` and `t` are divided into `n` and `m` substrings respectively, such that:

- `s = s1 + s2 + ... + sn`
- `t = t1 + t2 + ... + tm`
- `|n - m| <= 1`

The interleaving is `s1 + t1 + s2 + t2 + s3 + t3 + ...` or `t1 + s1 + t2 + s2 + t3 + s3 + ...`.

**Note:** `a + b` is the concatenation of strings `a` and `b`.

### Examples

#### Example 1:

**Input:** `s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"`
**Output:** `true`
**Explanation:** 
One way to obtain `s3` is:
Split `s1` into `s1 = "aa" + "bc" + "c"`, and `s2` into `s2 = "dbbc" + "a"`.
Interleaving the two splits, we get `"aa" + "dbbc" + "bc" + "a" + "c" = "aadbbcbcac"`.
Since `s3` can be obtained by interleaving `s1` and `s2`, we return `true`.

#### Example 2:

**Input:** `s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"`
**Output:** `false`
**Explanation:** 
Notice how it is impossible to interleave `s2` with any other string to obtain `s3`.

#### Example 3:

**Input:** `s1 = "", s2 = "", s3 = ""`
**Output:** `true`


### Constraints
- $0 \leq \text{s1.length}, \text{s2.length} \leq 100$
- $0 \leq \text{s3.length} \leq 200$
- $\text{s1}$, $\text{s2}$, and $\text{s3}$ consist of lowercase English letters.$

## Approach

To determine if `s3` is an interleaving of `s1` and `s2`, we can use dynamic programming. We define a 2D boolean DP array `dp` where `dp[i][j]` represents whether `s3[0:i+j]` can be formed by interleaving `s1[0:i]` and `s2[0:j]`.

### Step-by-Step Algorithm

1. Initialize a 2D DP array `dp` of size `(len(s1) + 1) x (len(s2) + 1)`.
2. `dp[0][0]` is `True` because an empty `s3` can be formed by interleaving two empty strings.
3. Fill the first row and column of `dp`:
   - `dp[i][0]` is `True` if `s1[:i]` matches `s3[:i]`.
   - `dp[0][j]` is `True` if `s2[:j]` matches `s3[:j]`.
4. Fill the rest of the `dp` array:
   - `dp[i][j]` is `True` if either of the following is `True`:
     - `dp[i-1][j]` is `True` and `s1[i-1] == s3[i+j-1]`
     - `dp[i][j-1]` is `True` and `s2[j-1] == s3[i+j-1]`
5. The result is `dp[len(s1)][len(s2)]`.

## Solution in Python

```python
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        if len(s1) + len(s2) != len(s3):
            return False
        
        dp = [[False] * (len(s2) + 1) for _ in range(len(s1) + 1)]
        dp[0][0] = True
        
        for i in range(1, len(s1) + 1):
            dp[i][0] = dp[i-1][0] and s1[i-1] == s3[i-1]
        
        for j in range(1, len(s2) + 1):
            dp[0][j] = dp[0][j-1] and s2[j-1] == s3[j-1]
        
        for i in range(1, len(s1) + 1):
            for j in range(1, len(s2) + 1):
                dp[i][j] = (dp[i-1][j] and s1[i-1] == s3[i+j-1]) or (dp[i][j-1] and s2[j-1] == s3[i+j-1])
        
        return dp[len(s1)][len(s2)]
```

## Solution in Java
```java
class Solution {
    public boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }
        
        boolean[][] dp = new boolean[s1.length() + 1][s2.length() + 1];
        dp[0][0] = true;
        
        for (int i = 1; i <= s1.length(); i++) {
            dp[i][0] = dp[i-1][0] && s1.charAt(i-1) == s3.charAt(i-1);
        }
        
        for (int j = 1; j <= s2.length(); j++) {
            dp[0][j] = dp[0][j-1] && s2.charAt(j-1) == s3.charAt(j-1);
        }
        
        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                dp[i][j] = (dp[i-1][j] && s1.charAt(i-1) == s3.charAt(i+j-1)) || (dp[i][j-1] && s2.charAt(j-1) == s3.charAt(i+j-1));
            }
        }
        
        return dp[s1.length()][s2.length()];
    }
}
```

## Solution in C++
```cpp
class Solution {
public:
    bool isInterleave(string s1, string s2, string s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }
        
        vector<vector<bool>> dp(s1.length() + 1, vector<bool>(s2.length() + 1, false));
        dp[0][0] = true;
        
        for (int i = 1; i <= s1.length(); i++) {
            dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1];
        }
        
        for (int j = 1; j <= s2.length(); j++) {
            dp[0][j] = dp[0][j-1] && s2[j-1] == s3[j-1];
        }
        
        for (int i = 1; i <= s1.length(); i++) {
            for (int j = 1; j <= s2.length(); j++) {
                dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] == s3[i+j-1]);
            }
        }
        
        return dp[s1.length()][s2.length()];
    }
};
```

## Solution in C
```c
#include <stdbool.h>
#include <string.h>

bool isInterleave(char* s1, char* s2, char* s3) {
    int len1 = strlen(s1), len2 = strlen(s2), len3 = strlen(s3);
    if (len1 + len2 != len3) {
        return false;
    }
    
    bool dp[len1 + 1][len2 + 1];
    memset(dp, false, sizeof(dp));
    dp[0][0] = true;
    
    for (int i = 1; i <= len1; i++) {
        dp[i][0] = dp[i-1][0] && s1[i-1] == s3[i-1];
    }
    
    for (int j = 1; j <= len2; j++) {
        dp[0][j] = dp[0][j-1] && s2[j-1] == s3[j-1];
    }
    
    for (int i = 1; i <= len1; i++) {
        for (int j = 1; j <= len2; j++) {
            dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] == s3[i+j-1]);
        }
    }
    
    return dp[len1][len2];
}
```

## Solution in JavaScript
```js
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    
    const dp = Array(s1.length + 1).fill(false).map(() => Array(s2.length + 1).fill(false));
    dp[0][0] = true;
    
    for (let i = 1; i <= s1.length; i++) {
        dp[i][0] = dp[i-1][0] && s1[i-1] === s3[i-1];
    }
    
    for (let j = 1; j <= s2.length; j++) {
        dp[0][j] = dp[0][j-1] && s2[j-1] === s3[j-1];
    }
    
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            dp[i][j] = (dp[i-1][j] && s1[i-1] === s3[i+j-1]) || (dp[i][j-1] && s2[j-1] === s3[i+j-1]);
        }
    }
    
    return dp[s1.length][s2.length];
};
```

## Conclusion
By utilizing dynamic programming, we can efficiently determine whether a given string `s3` is an interleaving of two other strings `s1` and `s2`. This approach ensures that we consider all possible ways to form `s3` from `s1` and `s2` while adhering to the interleaving constraints.
