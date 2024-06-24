---
id: ugly-number-II
title: Ugly Number II
sidebar_label: 0264-Ugly-Number-II
tags:
 - Math
 - Number Theory
 - Dynamic Programming
 - Heap
 - C++
 - Java
 - Python
description: "This document provides a solution to the Ugly Number II problem, where we need to find the nth ugly number."
---

## Problem

An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5. Given an integer `n`, return the `n`-th ugly number.

### Examples

**Example 1:**

Input: n = 10  
Output: 12  
Explanation: The sequence of ugly numbers is [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, ...], and the 10th ugly number is 12.

**Example 2:**

Input: n = 1  
Output: 1  
Explanation: 1 is typically treated as an ugly number.

### Constraints

- `1 <= n <= 1690`

### Approach

To solve this problem, we can use a dynamic programming approach to generate ugly numbers in sequence:

1. Initialize an array `ugly_numbers` to store the first `n` ugly numbers.
2. Use three pointers (i2, i3, i5) to track the indices for multiples of 2, 3, and 5 respectively.
3. Start with the first ugly number `1` and iteratively compute the next ugly number by taking the minimum of the next multiples of 2, 3, and 5.
4. Update the corresponding pointer and move to the next position in the `ugly_numbers` array.
5. Repeat until we have generated `n` ugly numbers.

### Solution

#### Code in Different Languages

### C++ Solution
```cpp
#include <iostream>
#include <vector>

using namespace std;

int nthUglyNumber(int n) {
    vector<int> ugly_numbers(n);
    ugly_numbers[0] = 1;
    int i2 = 0, i3 = 0, i5 = 0;
    int next_multiple_of_2 = 2;
    int next_multiple_of_3 = 3;
    int next_multiple_of_5 = 5;
    
    for (int i = 1; i < n; i++) {
        int next_ugly = min(next_multiple_of_2, min(next_multiple_of_3, next_multiple_of_5));
        ugly_numbers[i] = next_ugly;
        
        if (next_ugly == next_multiple_of_2) {
            i2++;
            next_multiple_of_2 = ugly_numbers[i2] * 2;
        }
        if (next_ugly == next_multiple_of_3) {
            i3++;
            next_multiple_of_3 = ugly_numbers[i3] * 3;
        }
        if (next_ugly == next_multiple_of_5) {
            i5++;
            next_multiple_of_5 = ugly_numbers[i5] * 5;
        }
    }
    
    return ugly_numbers[n - 1];
}

int main() {
    int n = 10;
    cout << nthUglyNumber(n) << endl;  // Output: 12
}
```
### Java Solution
```java
public class UglyNumberII {
    public static int nthUglyNumber(int n) {
        int[] ugly_numbers = new int[n];
        ugly_numbers[0] = 1;
        int i2 = 0, i3 = 0, i5 = 0;
        int next_multiple_of_2 = 2;
        int next_multiple_of_3 = 3;
        int next_multiple_of_5 = 5;
        
        for (int i = 1; i < n; i++) {
            int next_ugly = Math.min(next_multiple_of_2, Math.min(next_multiple_of_3, next_multiple_of_5));
            ugly_numbers[i] = next_ugly;
            
            if (next_ugly == next_multiple_of_2) {
                i2++;
                next_multiple_of_2 = ugly_numbers[i2] * 2;
            }
            if (next_ugly == next_multiple_of_3) {
                i3++;
                next_multiple_of_3 = ugly_numbers[i3] * 3;
            }
            if (next_ugly == next_multiple_of_5) {
                i5++;
                next_multiple_of_5 = ugly_numbers[i5] * 5;
            }
        }
        
        return ugly_numbers[n - 1];
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println(nthUglyNumber(n));  // Output: 12
    }
}
```
### Python Solution

```python
def nthUglyNumber(n):
    ugly_numbers = [0] * n
    ugly_numbers[0] = 1
    i2 = i3 = i5 = 0
    next_multiple_of_2 = 2
    next_multiple_of_3 = 3
    next_multiple_of_5 = 5
    
    for i in range(1, n):
        next_ugly = min(next_multiple_of_2, next_multiple_of_3, next_multiple_of_5)
        ugly_numbers[i] = next_ugly
        
        if next_ugly == next_multiple_of_2:
            i2 += 1
            next_multiple_of_2 = ugly_numbers[i2] * 2
        if next_ugly == next_multiple_of_3:
            i3 += 1
            next_multiple_of_3 = ugly_numbers[i3] * 3
        if next_ugly == next_multiple_of_5:
            i5 += 1
            next_multiple_of_5 = ugly_numbers[i5] * 5
    
    return ugly_numbers[n - 1]

n = 10
print(nthUglyNumber(n))  # Output: 12
```
### Complexity Analysis
**Time Complexity:** O(n)

>Reason: We iterate through the sequence of ugly numbers up to n.

**Space Complexity:** O(n)

>Reason: We use an array to store the first n ugly numbers.

This solution efficiently finds the n-th ugly number by generating the sequence of ugly numbers using a dynamic programming approach with three pointers for multiples of 2, 3, and 5.

### References
**LeetCode Problem:** Ugly Number II


