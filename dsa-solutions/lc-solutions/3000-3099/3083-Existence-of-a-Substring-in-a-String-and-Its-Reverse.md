---
id: existence-of-substring-in-string-and-reverse
title: Existence of a Substring in a String and Its Reverse (LeetCode)
sidebar_label: 3083-ExistenceOfSubstringInStringAndReverse
tags:
  - String
  - Two Pointers
description: Check if any substring of length 2 in a string is also present in its reverse.
sidebar_position: 3083
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Existence of a Substring in a String and Its Reverse](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/) | [Existence of a Substring in a String and Its Reverse Solution on LeetCode](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

Given a string `s`, find any substring of length 2 which is also present in the reverse of `s`.

Return `true` if such a substring exists, and `false` otherwise.

### Example 1

- **Input:** `s = "leetcode"`
- **Output:** `true`
- **Explanation:** Substring "ee" is of length 2 which is also present in reverse(s) == "edocteel".

### Example 2

- **Input:** `s = "abcba"`
- **Output:** `true`
- **Explanation:** All of the substrings of length 2 "ab", "bc", "cb", "ba" are also present in reverse(s) == "abcba".

### Example 3

- **Input:** `s = "abcd"`
- **Output:** `false`
- **Explanation:** There is no substring of length 2 in `s`, which is also present in the reverse of `s`.

### Constraints

- `1 <= s.length <= 100`
- `s` consists only of lowercase English letters.

## Approach

To solve this problem, we can use a set to keep track of all substrings of length 2 in the original string `s` and check if any of these substrings exist in the reverse of `s`.

1. **Generate Substrings**:
   - Iterate through the string and generate all substrings of length 2.
   - Store these substrings in a set.

2. **Check in Reverse**:
   - Generate the reverse of the string.
   - Iterate through the reversed string and check if any substring of length 2 exists in the set.

### Solution Code

#### Python

```python
class Solution:
    def existsInReverse(self, s: str) -> bool:
        substrings = set()
        
        for i in range(len(s) - 1):
            substrings.add(s[i:i+2])
        
        reversed_s = s[::-1]
        
        for i in range(len(reversed_s) - 1):
            if reversed_s[i:i+2] in substrings:
                return true
        
        return false
```

#### C++
```c++
#include <unordered_set>
#include <string>
#include <algorithm>

class Solution {
public:
    bool existsInReverse(string s) {
        unordered_set<string> substrings;
        
        for (int i = 0; i < s.length() - 1; ++i) {
            substrings.insert(s.substr(i, 2));
        }
        
        reverse(s.begin(), s.end());
        
        for (int i = 0; i < s.length() - 1; ++i) {
            if (substrings.find(s.substr(i, 2)) != substrings.end()) {
                return true;
            }
        }
        
        return false;
    }
};

```

#### Java
```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean existsInReverse(String s) {
        Set<String> substrings = new HashSet<>();
        
        for (int i = 0; i < s.length() - 1; i++) {
            substrings.add(s.substring(i, i + 2));
        }
        
        String reversedS = new StringBuilder(s).reverse().toString();
        
        for (int i = 0; i < reversedS.length() - 1; i++) {
            if (substrings.contains(reversedS.substring(i, i + 2))) {
                return true;
            }
        }
        
        return false;
    }
}

```

### Conclusion
The provided solutions use a set to store substrings of length 2 and check if these substrings exist 
in the reverse of the string. This approach ensures efficient checking and handles edge cases 
effectively. Adjustments for different languages and constraints are handled to ensure robustness 
across different inputs.