---
id: ugly-number-III
title: Ugly Number III
sidebar_label: 1201. Ugly Number III
tags:
- Math
- Binary Search
- Combinatorics
- Number Theory
description: "Solution to Leetcode 1201. Ugly Number III"
---

## Problem Description

An ugly number is a positive integer that is divisible by a, b, or c.

Given four integers n, a, b, and c, return the nth ugly number.
 
### Examples

**Example 1:**

```
Input: n = 3, a = 2, b = 3, c = 5
Output: 4
Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.
```

**Example 2:**

```
Input: n = 4, a = 2, b = 3, c = 4
Output: 6
Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.

```



### Constraints
- `1 <= n, a, b, c <= 10^9`
- `1 <= a * b * c <= 10^18`

### Approach 
The idea is, we search for the smallest K such that the number of numbers divisible by a or b or c in [1, K] is exactly N.

We know the number of numbers divisible by x in [1, K] is K div x (or K // x, in Python).
The number of numbers divisible by a or b or c in [1, K]:
= #(divisible by a) + #(divisible by b) + #(divisible by c) - #(divisible by a, b) - #(divisible by (b, c)) - #(divisible by a, c) + #(divisible by a, b, c)
= (K//a + K// b + K//c) - (K//lcm(a,b) + K//lcm(b, c) + K//lcm(c, a)) + K//lcm(a, b, c)

where lcm is lowest common multiplier of the inside numeric arguments.

Time Complexity: Note that the time complexity of computing lcm or gcd is O(log N). Thus, the overall time complexity is O((logN)^2)

### Complexity

Time complexity: $O((logN)^2)$
Space complexity: $O(1)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
typedef long long ll;
#define MAX_ANS 2e9 

class Solution {
public:
    int nthUglyNumber(int n, int a, int b, int c) {
        int left = 0, right = MAX_ANS, result = 0;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (count(mid, a, b, c) >= n) { 
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return result;
    }
    int count(ll num, ll a, ll b, ll c) {
        return (int)(num / a + num / b + num / c
            - num / lcm(a, b)
            - num / lcm(b, c)
            - num / lcm(a, c)
            + num / (lcm(a, lcm(b, c))));
    }
    ll gcd(ll a, ll b) {
        if (a == 0) return b;
        return gcd(b % a, a);
    }
    ll lcm(ll a, ll b) {
        return a * b / gcd(a, b);
    }
};
 ```

#### PYTHON

```python
    def nthUglyNumber(self, n: int, a: int, b: int, c: int) -> int:
        def lcm(a, b):
            prod = a*b
            if a < b:
                a, b = b, a
            while b > 0:
                a = a % b
                a, b = b, a
            return prod//a
        def count(k):
            #how many numbers divisible by a or b or c in [1, k]
            na = k // a
            nb = k // b
            nc = k // c
            nab = k // lcm(a, b)
            nac = k // lcm(a, c)
            nbc = k // lcm(b, c)
            nabc = k // lcm(lcm(a, b), c)
            return na + nb + nc - nab - nac - nbc + nabc
        l, r = 0, 2*10**9
        while l <= r:
            mid = l + (r - l)//2
            if count(mid) >= n:
                if count(mid) == n and (mid % a == 0 or mid % b == 0 or mid % c == 0):
                    return mid
                r = mid - 1
            else:
                l = mid + 1
        return l
```



### Complexity Analysis

- Time Complexity: $O((logN)^2)$ 

- Space Complexity: $O(1)$ 

### References

- **LeetCode Problem**: Ugly Number III