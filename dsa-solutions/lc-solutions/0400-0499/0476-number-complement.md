---
id: number-complement
title: Number Complement
tags:
- Bit Manipulation
description: "This is a solution to the number complement problem on LeetCode."
---

## Problem Description

The complement of an integer is the integer you get when you flip all the `0`'s to `1`'s and all the `1`'s to `0`'s in its binary representation.

For example, The integer `5` is `"101"` in binary and its complement is `"010"` which is the integer `2`.
Given an integer `num`, return its complement.

### Examples

**Example 1:**
```
Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

**Example 2:**

```
Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

### Constraints

- `1 <= num < 231`

#### Intuition
The key to solving this problem lies in understanding bitwise operations. In particular, the XOR operation becomes very useful. XOR, or exclusive or, gives us a 1 bit whenever the bits in the same position of the two numbers are different, and a 0 bit when they are the same.

So, if we XOR the given number with a number that has all bits set to 1, and is of the same length, we will effectively switch all bits of the original number - 0s will become 1s, and 1s will become 0s. This is exactly the complement.

To get a number with all bits set to 1 and of the same length as num, we can use the fact that a power of two, when decreased by 1, will give us a number with all bits set to 1 that is one less in size. For instance, 2^3 is 1000 in binary, and 2^3 - 1 is 0111.

Therefore, we calculate 2 raised to the power of the length of the binary representation of num minus 1. To find the length of the binary representation, we convert num to binary using bin(num), slice off the '0b' prefix with [2:], and then take the len of it. Once we have this number, we can XOR it with num to get the desired complement.



## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
class Solution {
 public:
  int findComplement(long num) {
    for (long i = 1; i <= num; i <<= 1)
      num ^= i;
    return num;
  }
};

```
</TabItem>
<TabItem value="java" label="Java">

```java
class Solution {
  public int findComplement(int num) {
    for (long i = 1; i <= num; i <<= 1)
      num ^= i;
    return num;
  }
}
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: O(32)=O(1)

### Space Complexity: O(1)

## References

- **LeetCode Problem**: [Matchsticks to Square](https://leetcode.com/problems/number-complement/)

- **Solution Link**: [Matchsticks to Square](https://leetcode.com/problems/number-complement/solutions/)
