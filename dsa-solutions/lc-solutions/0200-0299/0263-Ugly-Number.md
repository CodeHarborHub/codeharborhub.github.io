---
id: ugly-number
title: Ugly Number
sidebar_label: 0263-Ugly-Number
tags:
 - Math
 - Number Theory
 - C++
 - Java
 - Python
description: "This document provides a solution to the Ugly Number problem, where we need to determine if a number is an ugly number."
---

## Problem

An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer `n`, return `true` if `n` is an ugly number.

### Examples

**Example 1:**

Input: n = 6  
Output: true  
Explanation: 6 = 2 × 3

**Example 2:**

Input: n = 8  
Output: true  
Explanation: 8 = 2 × 2 × 2

**Example 3:**

Input: n = 14  
Output: false  
Explanation: 14 is not an ugly number since it includes the prime factor 7.

**Example 4:**

Input: n = 1  
Output: true  
Explanation: 1 is typically treated as an ugly number.

### Constraints

- `-2^31 <= n <= 2^31 - 1`

### Approach

To determine if a number is an ugly number, we can follow these steps:

1. If `n` is less than or equal to 0, return `false` since ugly numbers are positive.
2. Divide `n` by 2, 3, and 5 as long as it is divisible by these numbers.
3. After performing the above division, if the resulting number is 1, then `n` is an ugly number. Otherwise, it is not.

### Solution

#### Code in Different Languages

### C++ Solution
```cpp
#include <iostream>

using namespace std;

bool isUgly(int n) {
    if (n <= 0) return false;
    while (n % 2 == 0) n /= 2;
    while (n % 3 == 0) n /= 3;
    while (n % 5 == 0) n /= 5;
    return n == 1;
}

int main() {
    int n = 6;
    cout << (isUgly(n) ? "true" : "false") << endl;
}
```
### Java Solution

```java
public class UglyNumber {
    public static boolean isUgly(int n) {
        if (n <= 0) return false;
        while (n % 2 == 0) n /= 2;
        while (n % 3 == 0) n /= 3;
        while (n % 5 == 0) n /= 5;
        return n == 1;
    }

    public static void main(String[] args) {
        int n = 6;
        System.out.println(isUgly(n) ? "true" : "false");
    }
}
```
### Python Solution

```python
def isUgly(n):
    if n <= 0:
        return False
    for i in [2, 3, 5]:
        while n % i == 0:
            n //= i
    return n == 1

n = 6
print(isUgly(n))
```
### Complexity Analysis
**Time Complexity:** O(logN)
>Reason: The division operations will run in logarithmic time relative to the input value n.

**Space Complexity:** O(1)

>Reason: We use a constant amount of extra space.

This solution checks whether a number is an ugly number by continually dividing the number by 2, 3, and 5. If the result is 1, the number is an ugly number. The time complexity is logarithmic, and the space complexity is constant, making it efficient for large input values.

### References
**LeetCode Problem:** Ugly Number
