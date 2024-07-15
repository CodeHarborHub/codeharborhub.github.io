---
id: long-pressed-name
title: Long Pressed Name
sidebar_label: Long Pressed Name
tags: 
    - strings
    - two-pointers
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Long Pressed Name](https://leetcode.com/problems/long-pressed-name/description/) | [Long Pressed Name Solution on LeetCode](https://leetcode.com/problems/Long-Pressed-Name/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

Your friend is typing his name into a keyboard. Sometimes, when typing a character `c`, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. Return `True` if it is possible that it was your friend's name, with some characters (possibly none) being long pressed.

### Example 1

**Input:** `name = "alex" typed = "aaleex"`
**Output:** `true`

**Explanation:**
`'a' and 'e' in 'alex' were long pressed.`

### Example 2

**Input:** `name = "saeed" typed = "ssaaedd"`
**Output:** `false`

**Explanation:**
`'e' must have been pressed twice, but it was not in the typed output.`

### Constraints

- `1 <= name.length, typed.length <= 1000`
- `name` and `typed` consist of only lowercase English letters.

## Approach

We can solve this problem using a two-pointer technique. We'll use two pointers to traverse both the `name` and `typed` strings. We'll compare characters at both pointers and handle long presses by ensuring the characters in `typed` match the corresponding characters in `name` in the correct order.

## Solution

### Python

```python
def isLongPressedName(name: str, typed: str) -> bool:
    i, j = 0, 0
    while j < len(typed):
        if i < len(name) and name[i] == typed[j]:
            i += 1
        elif j == 0 or typed[j] != typed[j - 1]:
            return False
        j += 1
    return i == len(name)
```

### Java

```java
class Solution {
    public boolean isLongPressedName(String name, String typed) {
        int i = 0, j = 0;
        while (j < typed.length()) {
            if (i < name.length() && name.charAt(i) == typed.charAt(j)) {
                i++;
            } else if (j == 0 || typed.charAt(j) != typed.charAt(j - 1)) {
                return false;
            }
            j++;
        }
        return i == name.length();
    }
}
```

### C++

```cpp
class Solution {
public:
    bool isLongPressedName(string name, string typed) {
        int i = 0, j = 0;
        while (j < typed.length()) {
            if (i < name.length() && name[i] == typed[j]) {
                i++;
            } else if (j == 0 || typed[j] != typed[j - 1]) {
                return false;
            }
            j++;
        }
        return i == name.length();
    }
};
```

### C

```c
bool isLongPressedName(char * name, char * typed){
    int i = 0, j = 0;
    while (typed[j] != '\0') {
        if (name[i] != '\0' && name[i] == typed[j]) {
            i++;
        } else if (j == 0 || typed[j] != typed[j - 1]) {
            return false;
        }
        j++;
    }
    return name[i] == '\0';
}
```

### JavaScript

```javascript
var isLongPressedName = function(name, typed) {
    let i = 0, j = 0;
    while (j < typed.length) {
        if (i < name.length && name[i] === typed[j]) {
            i++;
        } else if (j === 0 || typed[j] !== typed[j - 1]) {
            return false;
        }
        j++;
    }
    return i === name.length;
};
```

## Step-by-Step Algorithm

1. Initialize two pointers, `i` for `name` and `j` for `typed`, both set to 0.
2. Iterate through `typed` using pointer `j`.
3. If `name[i]` matches `typed[j]`, increment both `i` and `j`.
4. If `name[i]` does not match `typed[j]` and `typed[j]` is not a long press of `typed[j-1]`, return `False`.
5. Increment `j` in all cases.
6. After the loop, check if all characters in `name` were matched (`i == name.length`). Return `True` if they were, otherwise return `False`.

## Conclusion

This approach efficiently checks whether the `typed` string can be derived from the `name` string considering possible long presses. The two-pointer technique ensures that we traverse both strings in linear time, making the solution optimal and easy to understand.