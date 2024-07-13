---
id: Long-Pressed-Name
title: Long Pressed Name
sidebar_label: 0925 - Long Pressed Name
tags:
  - medium
  - Strings
  - Two Pointers
---

## Problem Description

Your friend is typing his name into a keyboard. Sometimes, when typing a character `c`, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard. Return `True` if it is possible that it was your friend's name, with some characters (possibly none) being long pressed.

## Examples

**Example 1:**

```
Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
```

**Example 2:**

```
Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it was not in the typed output.
```

## Constraints

```
1 <= name.length, typed.length <= 1000
name and typed consist of only lowercase English letters.
```

## Solution

### Python

```python
class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        i, j = 0, 0
        while j < len(typed):
            if i < len(name) and name[i] == typed[j]:
                i += 1
            elif j == 0 or typed[j] != typed[j - 1]:
                return False
            j += 1
        return i == len(name)

# Example usage:
solution = Solution()
print(solution.isLongPressedName("alex", "aaleex"))  # Output: true
```

### C++

```cpp
#include <string>
using namespace std;

class Solution {
public:
    bool isLongPressedName(string name, string typed) {
        int i = 0, j = 0;
        while (j < typed.size()) {
            if (i < name.size() && name[i] == typed[j]) {
                i++;
            } else if (j == 0 || typed[j] != typed[j - 1]) {
                return false;
            }
            j++;
        }
        return i == name.size();
    }
};

// Example usage:
int main() {
    Solution solution;
    bool result = solution.isLongPressedName("alex", "aaleex");  // Output: true
    cout << result << endl;
    return 0;
}
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

    public static void main(String[] args) {
        Solution solution = new Solution();
        boolean result = solution.isLongPressedName("alex", "aaleex");  // Output: true
        System.out.println(result);
    }
}
```

### JavaScript

```javascript
var isLongPressedName = function (name, typed) {
  let i = 0,
    j = 0;
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

// Example usage:
console.log(isLongPressedName("alex", "aaleex")); // Output: true
```
