---
id: Happy-Number
title: Happy Number
sidebar_label: Happy Number
tags: 
    - Math
    - Hash Table
    - Two Pointers
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Happy-Number](https://leetcode.com/problems/Happy-Number/description/) | [Happy-Number Solution on LeetCode](https://leetcode.com/problems/Happy-Number/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

A happy number is a number defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.

Given a positive integer `n`, determine if it is a happy number.

### Example 1:

Input: `n = 19`
Output: `true`
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

### Example 2:

Input: `n = 2`
Output: `false`
Explanation:
$2^2 = 4$
$4^2 = 16$
$1^2 + 6^2 = 37$
$3^2 + 7^2 = 58$
$5^2 + 8^2 = 89$
$8^2 + 9^2 = 145$
$1^2 + 4^2 + 5^2 = 42$
$4^2 + 2^2 = 20$
$2^2 + 0^2 = 4$ (cycle repeats endlessly)

## Constraints

- `1 <= n <= 2^31 - 1`

## Approach

To determine if a number `n` is a happy number:
1. Use a set to keep track of numbers seen during the process to detect cycles.
2. Repeat the process of replacing `n` by the sum of the squares of its digits until `n` becomes 1 or a cycle is detected (a number repeats).
3. If `n` becomes 1, return true; otherwise, return false.

## Solution in Python

```python
def isHappy(n: int) -> bool:
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = sum(int(digit)**2 for digit in str(n))
    return n == 1
```

## Solution in Java
```java
import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean isHappy(int n) {
        Set<Integer> seen = new HashSet<>();
        while (n != 1 && !seen.contains(n)) {
            seen.add(n);
            int sum = 0;
            while (n > 0) {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            n = sum;
        }
        return n == 1;
    }
}
```

## Solution in C++
```cpp
class Solution {
public:
    bool isHappy(int n) {
        unordered_set<int> seen;
        while (n != 1 && seen.find(n) == seen.end()) {
            seen.insert(n);
            int sum = 0;
            while (n > 0) {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            n = sum;
        }
        return n == 1;
    }
};
```

## Solution in C
```c
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

bool isHappy(int n) {
    int seen[1000] = {0};
    while (n != 1 && !seen[n]) {
        seen[n] = 1;
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        n = sum;
    }
    return n == 1;
}
```

## Solution in JavaScript
```js
var isHappy = function(n) {
    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = String(n).split('').reduce((sum, digit) => sum + digit * digit, 0);
    }
    return n === 1;
};
```

## Step-By_Step Algorithm
1. Initialize an empty set `seen` to keep track of numbers encountered.
2. While `n` is not 1 and `n` is not in `seen`:
    - Add `n` to `seen`.
    - Compute the sum of the squares of its digits for `n`.
    - Update `n` to this computed sum.
3. Check if `n` equals 1. If yes, return true (it is a happy number). If no, return false (it is not a happy number).

## Conclusion
The provided solutions use a similar approach to solve the happy number problem across different programming languages. They efficiently detect cycles and determine if a number eventually leads to 1 or loops endlessly. The use of a set ensures that the algorithm runs in linear time relative to the number of digits in `n`, making it suitable for the given constraints.
