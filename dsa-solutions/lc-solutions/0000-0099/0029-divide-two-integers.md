---
id: divide-two-integers
title: Divide Two Integers (LeetCode)
sidebar_label: 0029-DivideTwoIntegers
description: Divide two integers without using multiplication, division, and mod operator. The integer division should truncate toward zero.
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/divide-two-integers/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/divide-two-integers/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given two integers `dividend` and `divisor`, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing `dividend` by `divisor`.

**Note:** Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [-2^31, 2^31 - 1]. For this problem, if the quotient is strictly greater than 2^31 - 1, then return 2^31 - 1, and if the quotient is strictly less than -2^31, then return -2^31.

### Examples

#### Example 1

- **Input:** `dividend = 10`, `divisor = 3`
- **Output:** `3`
- **Explanation:** 10/3 = 3.33333.. which is truncated to 3.

#### Example 2

- **Input:** `dividend = 7`, `divisor = -3`
- **Output:** `-2`
- **Explanation:** 7/-3 = -2.33333.. which is truncated to -2.

### Constraints

- $-2^31 <= dividend, divisor <= 2^31 - 1$
- $divisor != 0$

### Approach

To divide two integers without using multiplication, division, and mod operator, we can use bit manipulation and subtraction to perform the division operation. 

1. **Handle Edge Cases:**
   - Check for special cases where the dividend is the minimum integer value or the divisor is 1 or -1.

2. **Calculate Sign of Result:**
   - Determine the sign of the result by checking if either the dividend or the divisor is negative.

3. **Perform Division:**
   - Use bit manipulation and subtraction to perform the division operation, iterating until the dividend becomes less than the divisor.
   - Keep track of the number of times subtraction is performed to determine the quotient.

4. **Handle Overflow:**
   - Handle overflow cases where the result is greater than the maximum or less than the minimum integer value.

### Solution Code

#### Python

```py
class Solution:
    def divide(self, dividend, divisor):
        if dividend == 0:
            return 0
        # Handle overflow cases
        if dividend == -2**31 and divisor == -1:
            return 2**31 - 1
        # Determine the sign of the result
        sign = -1 if (dividend < 0) ^ (divisor < 0) else 1

        # Convert dividend and divisor to positive numbers
        dividend = abs(dividend)
        divisor = abs(divisor)
        quotient = 0
        while dividend >= divisor:
            # Count the number of left shifts needed
            shifts = 0
            while dividend >= (divisor << shifts):
                shifts += 1
            # Update dividend and quotient
            dividend -= divisor << (shifts - 1)
            quotient += 1 << (shifts - 1)
        return sign * quotient
```

#### Java

```java
class Solution {
    public int divide(int dividend, int divisor) {
        if (dividend == Integer.MIN_VALUE && divisor == -1)
            return Integer.MAX_VALUE;
        
        int sign = (dividend >= 0) == (divisor >= 0) ? 1 : -1;
        long dvd = Math.abs((long) dividend);
        long dvs = Math.abs((long) divisor);
        
        long quotient = 0;
        while (dvd >= dvs) {
            long temp = dvs, multiple = 1;
            while (dvd >= temp << 1) {
                temp <<= 1;
                multiple <<= 1;
            }
            dvd -= temp;
            quotient += multiple;
        }
        
        return (int) (sign * quotient);
    }
}
```

#### C++

```cpp
class Solution {
public:
    int divide(int dividend, int divisor) {
        if (dividend == INT_MIN && divisor == -1)
            return INT_MAX;
        
        int sign = (dividend >= 0) == (divisor >= 0) ? 1 : -1;
        long dvd = labs(dividend);
        long dvs = labs(divisor);
        
        long quotient = 0;
        while (dvd >= dvs) {
            long temp = dvs, multiple = 1;
            while (dvd >= temp << 1) {
                temp <<= 1;
                multiple <<= 1;
            }
            dvd -= temp;
            quotient += multiple;
        }
        
        return sign * quotient;
    }
};
```

### Conclusion

The above solution effectively divides two integers without using multiplication, division, and mod operators. It utilizes bit manipulation and subtraction to perform the division operation, ensuring that the integer division truncates toward zero as required. This solution handles edge cases such as overflow and returns the correct quotient within the specified range.
