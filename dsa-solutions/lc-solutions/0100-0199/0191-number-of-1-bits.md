---
id: number-of-1-bits
title: Number of 1 Bits(LeetCode)
sidebar_label: 0191-Number of 1 Bits
tags:
  - Divide & Conquer
  - Bit Manipulation
description: Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).
---

## Problem Statement

Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).

### Examples

**Example 1:**

```plaintext
Input: n = 11
Output: 3
Explanation:
The input binary string 1011 has a total of three set bits.
```

**Example 2:**

```plaintext
Input: n = 128
Output: 1
Explanation:
The input binary string 10000000 has a total of one set bit.
```

**Example 3:**

```plaintext
Input: n = 2147483645
Output: 30
Explanation:
The input binary string 1111111111111111111111111111101 has a total of thirty set bits.
```

### Constraints

- `1 <= n <= 231 - 1`

## Solution

The Hamming weight (or population count) of a binary number is the number of '1' bits in its binary representation. This problem involves calculating the Hamming weight of an integer. The approach uses bitwise operations to efficiently count the number of '1' bits.

### Approach 

#### Algorithm

1. Initialization:
* Initialize a variable `ones` to 0. This will keep track of the number of '1' bits encountered.
2. Bitwise AND Operation:
* Perform a bitwise AND operation between the integer `n` and `1` (i.e., n & 1).
* If the result is 1, it means the least significant bit (LSB) of `n` is 1. Add this result to `ones`.
3. Bit Shift:
* Right shift the bits of n using an unsigned right shift operator (>>>) to check the next bit.
4. Loop Until Zero:
* Continue the above steps until n becomes 0.
5. Return Result:
* Return the value of ones which represents the Hamming weight of the integer.

#### Implementation

```Java
public static int hammingWeight(int n) {
    int ones = 0;
    while (n != 0) {
        ones = ones + (n & 1); // Check if the LSB is 1
        n = n >>> 1; // Right shift by one bit (unsigned)
    }
    return ones;
}
```

### Complexity Analysis

- **Time complexity**: $O(1)$
- **Space complexity**: $O(1)$

### Conclusion

This approach efficiently calculates the Hamming weight of a 32-bit integer using bitwise operations. By using bitwise AND to check each bit and unsigned right shift to move to the next bit, we ensure a time complexity of `O(1)`, making it both fast and space-efficient. This method is particularly useful for low-level bit manipulation tasks and demonstrates a clear understanding of bitwise operations and their application in counting bits.
