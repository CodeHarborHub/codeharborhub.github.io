---
id: Reverse-Bits
title: Reverse-Bits
sidebar_label: Reverse Bits
tags: 
    - Bit Manipulation 
    - Integer Manipulation
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Reverse-Bits](https://leetcode.com/problems/Reverse-Bits/description/) | [Reverse-Bits Solution on LeetCode](https://leetcode.com/problems/Reverse-Bits/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |


## Problem Description

Reverse the bits of a given 32-bit unsigned integer.

### Note

In some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.

In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 below, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

### Examples

**Example 1:**

Input: `n = 00000010100101000001111010011100`  
Output: `964176192` (Binary: `00111001011110000010100101000000`)  
Explanation: The input binary string `00000010100101000001111010011100` represents the unsigned integer `43261596`, so return `964176192` which its binary representation is `00111001011110000010100101000000`.

**Example 2:**

Input: `n = 11111111111111111111111111111101`  
Output: `3221225471` (Binary: `10111111111111111111111111111111`)  
Explanation: The input binary string `11111111111111111111111111111101` represents the unsigned integer `4294967293`, so return `3221225471` which its binary representation is `10111111111111111111111111111111`.

### Constraints

- The input must be a binary string of length 32.

## Approach

To reverse the bits of a 32-bit unsigned integer, we can use bit manipulation. We will:

1. Initialize a variable to hold the result.
2. Iterate through each bit of the input number.
3. For each bit, shift the result left by one position and add the current bit.
4. Shift the input number right by one position.
5. Continue until all 32 bits are processed.

## Solution

### Step-by-Step Algorithm

1. Initialize the result to 0.
2. For each of the 32 bits:
   1. Left shift the result by 1 bit.
   2. Add the least significant bit (LSB) of `n` to the result.
   3. Right shift `n` by 1 bit.
3. Return the result.

### Python

```python
class Solution:
    def reverseBits(self, n: int) -> int:
        result = 0
        for i in range(32):
            result = (result << 1) | (n & 1)
            n >>= 1
        return result
```

### Java
```java
public class Solution {
    public int reverseBits(int n) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            result = (result << 1) | (n & 1);
            n >>= 1;
        }
        return result;
    }
}
```

### C++
```cpp
class Solution {
public:
    uint32_t reverseBits(uint32_t n) {
        uint32_t result = 0;
        for (int i = 0; i < 32; i++) {
            result = (result << 1) | (n & 1);
            n >>= 1;
        }
        return result;
    }
};
```

### C
```c
uint32_t reverseBits(uint32_t n) {
    uint32_t result = 0;
    for (int i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result;
}
```

### JavaScript
```js
var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result >>> 0;
};
```

### Conclusion
The bit manipulation technique efficiently reverses the bits of a 32-bit unsigned integer. The key steps involve shifting and masking bits appropriately within a loop that iterates exactly 32 times. This approach ensures that the solution is both time-efficient and space-efficient, with a time complexity of O(1) and a space complexity of O(1).
