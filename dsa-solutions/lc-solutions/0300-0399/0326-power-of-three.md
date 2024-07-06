---
id: power-of-three
title: Power of Three (LeetCode)
sidebar_label: 0326-PowerOfThree
---

## Problem Description

| Problem Statement | Solution Link |
| :---------------- | :------------ |
| [Power of Three](https://leetcode.com/problems/power-of-three/) | [Power of Three Solution on LeetCode](https://leetcode.com/problems/power-of-three/solutions/) |

## Problem Description

Given an integer `n`, return `true` if it is a power of three. Otherwise, return `false`.

An integer `n` is a power of three if there exists an integer `x` such that `n == 3^x`.

### Examples

#### Example 1:

- **Input:** n = 27
- **Output:** true

#### Example 2:

- **Input:** n = 0
- **Output:** false

#### Example 3:

- **Input:** n = 9
- **Output:** true

#### Example 4:

- **Input:** n = 45
- **Output:** false

### Constraints:

- $-2^{31} <= n <= 2^{31} - 1$

## Approach

We can solve this problem by iterating and multiplying a variable starting from 3 until it exceeds or equals `n`. If at any point it equals `n`, we return `true`. If we exceed `n` without finding an exact match, we return `false`.

## Solution Code

#### C++

```cpp
class Solution {
public:
    bool isPowerOfThree(int n) {
        if(n == 1) {
            return true;
        }
        for(long long i = 3; i <= n; i *= 3) {
            if(i == n) {
                return true;
            }
        }
        return false;
    }
};
```

#### Python

```python
class Solution:
    def isPowerOfThree(self, n: int) -> bool:
        if n == 1:
            return True
        i = 3
        while i <= n:
            if i == n:
                return True
            i *= 3
        return False
```

#### Java

```java
class Solution {
    public boolean isPowerOfThree(int n) {
        if (n == 1) {
            return true;
        }
        for (long i = 3; i <= n; i *= 3) {
            if (i == n) {
                return true;
            }
        }
        return false;
    }
}
```

#### JavaScript

```javascript
var isPowerOfThree = function(n) {
    if (n === 1) {
        return true;
    }
    for (let i = 3; i <= n; i *= 3) {
        if (i === n) {
            return true;
        }
    }
    return false;
};
```

## Conclusion

The "Power of Three" problem can be solved by iteratively checking powers of three. The provided solutions in C++, Python, Java, and JavaScript efficiently implement this approach, ensuring correct results within the given constraints.
