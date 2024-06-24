---
id: bitwise-and-of-numbers-range
title: Bitwise AND of Numbers Range
sidebar_label: 201 Bitwise AND of Numbers Range
tags:
- Bit Manipulation
- C++
- Python
- Java
description: "This document provides a solution where we return the bitwise AND of all numbers in a given range."
---

## Problem

Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

### Examples

**Example 1:**

```
Input: left = 5, right = 7

Output: 4

```
**Example 2:**
```
Input: left = 0, right = 0

Output: 0

```
**Example 3:**
```
Input: left = 1, right = 2147483647

Output: 0

```

### Constraints

- `0 <= left <= right <= 2^31 - 1`

---

### Intuition
The problem is asking to find the bitwise AND of all numbers in a range. The first thing that comes to mind is that the bitwise AND of a number with a larger number will always be less than or equal to the number. This is because the AND operation can only unset bits, not set them. Therefore, the result will be the common prefix of the binary representations of the left and right numbers, with the rest of the bits set to zero.

## Approach

**Simple Bit Manipulation:**

The approach is to right shift both the left and right numbers until they become equal. This is equivalent to finding the common prefix of their binary representations. The number of times we need to right shift is the number of trailing zeros in the result. Then we left shift the common prefix by this count to get the result.

- Let's understand this with a simple example. Suppose we have `left =` 5 and `right = 7`. If we write these numbers in binary (the language computers understand), we get `101` for `5` and `111` for `7`.

- Now, we need to find the bitwise AND of all numbers from `5` to `7`. In binary, that's like saying `101 AND 110 AND 111`. The result of this operation is `100`.

- Our approach is to keep shifting both `5` and `7` to the right until they become the same number. This is like finding the common part of their binary representations. In our case, we shift `5` and `7` to the right once, and we get `2` and `3` respectively. They're not the same, so we shift again. Now we get `1` and `1`. They're the same, so we stop. We've shifted twice.

- The number of times we shift is the number of zeros at the end of our result. In our case, the result `100` has two zeros at the end, which is the same as the number of times we shifted.

- Finally, we shift our common number (`1`) to the left the same number of times we shifted right before. In our case, we shift `1` to the left twice and get `100`, which is our result.


#### Code in Java
    
 ```java
class Solution {
    public int rangeBitwiseAnd(int left, int right) {
        int cnt = 0;
        while (left != right) {
            left >>= 1;
            right >>= 1;
            cnt++;
        }
        return (left << cnt);
    }
}
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        int left = 5;
        int right = 7;
        System.out.println("Bitwise AND of range [" + left + ", " + right + "] is " + solution.rangeBitwiseAnd(left, right));
    }
}

```

#### Code in C++

 ```cpp
#include <iostream>
using namespace std;

class Solution {
public:
    int rangeBitwiseAnd(int left, int right) {
        int count = 0;

        while (left != right) {
            left >>= 1;
            right >>= 1;
            count++;
        }

        return (left << count);
    }
};

int main() {
    Solution solution;
    int left = 5;
    int right = 7;
    cout << "Bitwise AND of range [" << left << ", " << right << "] is " << solution.rangeBitwiseAnd(left, right) << endl;
    return 0;
}
```

#### Code in Python

 ```py
class Solution:
    def rangeBitwiseAnd(self, left: int, right: int) -> int:
        cnt = 0
        while left != right:
            left >>= 1
            right >>= 1
            cnt += 1
        return left << cnt

if __name__ == "__main__":
    solution = Solution()
    left = 5
    right = 7
    print(f"Bitwise AND of range [{left}, {right}] is {solution.rangeBitwiseAnd(left, right)}")
```

### Complexity Analysis

#### Time Complexity: $O(log n)$

> **Reason**: This is because in each iteration of the while loop, the numbers `left` and `right` are divided by `2` (right-shifted by 1 bit), which is equivalent to halving the numbers. Thus, the number of iterations required to make `left` equal to `right` is proportional to the number of bits in the binary representation of n, which is 
$O(log n)$.

#### Space Complexity: $O(1)$

> **Reason**: The space complexity is $O(1)$, because we only use a constant amount of extra space regardless of the input size.

# References

- **LeetCode Problem:** [Number of Digit One](https://leetcode.com/problems/bitwise-and-of-numbers-range/description/)
- **Solution Link:** [Number of Digit One Solution on LeetCode](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/sidkul712/)
