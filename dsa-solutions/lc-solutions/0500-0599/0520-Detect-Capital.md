---
id: Detect-Capital
title: Detect Capital
sidebar_label: Detect Capital
tags:
  - String
  - Validation
  - Easy
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Detect-Capital](https://leetcode.com/problems/Detect-Capital/description/) | [Detect-Capital Solution on LeetCode](https://leetcode.com/problems/Detect-Capital/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

We define the usage of capitals in a word to be right when one of the following cases holds:
1. All letters in this word are capitals, like "USA".
2. All letters in this word are not capitals, like "leetcode".
3. Only the first letter in this word is capital, like "Google".

Given a string `word`, return `true` if the usage of capitals in it is right.

### Examples

#### Example 1:
- **Input:** `word = "USA"`
- **Output:** `true`

#### Example 2:
- **Input:** `word = "FlaG"`
- **Output:** `false`

### Constraints

- `1 <= word.length <= 100`
- `word` consists of lowercase and uppercase English letters.

## Approach

To solve this problem, we can use straightforward checks to verify if the word meets any of the three defined conditions for the correct usage of capitals.

1. **Check if all letters are capitals:** Use the `isupper()` method.
2. **Check if all letters are not capitals:** Use the `islower()` method.
3. **Check if only the first letter is capital:** Use slicing and the `isupper()` method for the first character and the `islower()` method for the rest.

If any of these conditions are satisfied, return `true`; otherwise, return `false`.

## Step-by-Step Algorithm

1. If the entire word is uppercase, return `true`.
2. If the entire word is lowercase, return `true`.
3. If only the first character is uppercase and the rest are lowercase, return `true`.
4. Otherwise, return `false`.

## Solution

### Python
```python
def detectCapitalUse(word: str) -> bool:
    if word.isupper() or word.islower() or (word[0].isupper() and word[1:].islower()):
        return True
    return False
```

### Java
```java
public class DetectCapital {
    public boolean detectCapitalUse(String word) {
        if (word.equals(word.toUpperCase()) || 
            word.equals(word.toLowerCase()) || 
            (Character.isUpperCase(word.charAt(0)) && word.substring(1).equals(word.substring(1).toLowerCase()))) {
            return true;
        }
        return false;
    }
}
```

### C++
```cpp
class Solution {
public:
    bool detectCapitalUse(string word) {
        if (all_of(word.begin(), word.end(), ::isupper) ||
            all_of(word.begin(), word.end(), ::islower) ||
            (isupper(word[0]) && all_of(word.begin() + 1, word.end(), ::islower))) {
            return true;
        }
        return false;
    }
};
```

### C
```c
#include <stdbool.h>
#include <ctype.h>
#include <string.h>

bool detectCapitalUse(char* word) {
    int len = strlen(word);
    bool isAllUpper = true, isAllLower = true, isCapitalized = true;

    if (!isupper(word[0])) isCapitalized = false;

    for (int i = 0; i < len; ++i) {
        if (!isupper(word[i])) isAllUpper = false;
        if (!islower(word[i])) isAllLower = false;
        if (i > 0 && !islower(word[i])) isCapitalized = false;
    }

    return isAllUpper || isAllLower || isCapitalized;
}
```

### JavaScript
```javascript
function detectCapitalUse(word) {
    if (word === word.toUpperCase() || 
        word === word.toLowerCase() || 
        (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase())) {
        return true;
    }
    return false;
}
```

## Conclusion

The given problem can be efficiently solved by checking for three specific conditions of capitalization. The solutions provided in Python, Java, C++, C, and JavaScript utilize string methods to determine if the word meets the criteria for correct usage of capitals. Each approach ensures that the solution is both concise and readable, with a time complexity of O(n), where n is the length of the word.