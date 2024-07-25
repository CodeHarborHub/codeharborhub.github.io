---
id: Fraction to Recurring Decimal
title: Fraction to Recurring Decimal(LeetCode)
sidebar_label: 0166-Fraction to Recurring Decimal
tags:
  - Math
  - Hash Table
  - String
description: Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
---

## Problem Statement

Given two integers representing the `numerator` and `denominator` of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

If multiple answers are possible, return any of them.

It is guaranteed that the length of the answer string is less than `10^4` for all the given inputs.

### Examples

**Example 1:**

```plaintext
Input: numerator = 1, denominator = 2
Output: "0.5"
```

**Example 2:**

```plaintext
Input: numerator = 2, denominator = 1
Output: "2"
```

**Example 3:**

```plaintext
Input: numerator = 4, denominator = 333
Output: "0.(012)"
```

### Constraints

- `-231 <= numerator, denominator <= 231 - 1`
- `denominator != 0`

## Solution

### Approach 

#### Algorithm

1. Handle Edge Cases:
* If the numerator is 0, the result is "0".
* Determine the sign of the result by checking if the numerator and denominator have different signs.
2. Convert to Positive Long:
* Use `long` to handle potential overflow and convert the numerator and denominator to their absolute values.
3. Integral Part:
* Compute the integral part of the division and append it to the result string.
4. Fractional Part:
* If there is no remainder after the integral division, return the result as is.
* Otherwise, proceed to calculate the fractional part:
  * Use a `HashMap` to store the remainder and its associated index in the result string.
  * Multiply the remainder by 10 and perform division again.
  * Append the quotient to the result string.
  * Check if the remainder has appeared before using the `HashMap`.
  * If it has, it means the fractional part is repeating. Insert parentheses at the appropriate position.
  * If not, continue the process and store the new remainder with its index in the `HashMap`.

#### Implementation

```Java
import java.util.HashMap;

public class Solution {
    public String fractionToDecimal(int numerator, int denominator) {
        if (numerator == 0) {
            return "0";
        }
        StringBuilder res = new StringBuilder();
        // "+" or "-"
        res.append(((numerator > 0) ^ (denominator > 0)) ? "-" : "");
        long num = Math.abs((long)numerator);
        long den = Math.abs((long)denominator);
        
        // integral part
        res.append(num / den);
        num %= den;
        if (num == 0) {
            return res.toString();
        }
        
        // fractional part
        res.append(".");
        HashMap<Long, Integer> map = new HashMap<>();
        map.put(num, res.length());
        while (num != 0) {
            num *= 10;
            res.append(num / den);
            num %= den;
            if (map.containsKey(num)) {
                int index = map.get(num);
                res.insert(index, "(");
                res.append(")");
                break;
            } else {
                map.put(num, res.length());
            }
        }
        return res.toString();
    }
}
```

### Complexity Analysis

- **Time complexity**: $O(k)$ , here k is the length of the fractional part. The while loop iterates over each digit of the fractional part.
- **Space complexity**: $O(k)$ , where k is the number of unique remainders stored in the HashMap. In the worst case, every remainder before repeating is unique.

### Conclusion

This algorithm effectively converts a fraction to its decimal representation and handles repeating fractional parts by using a HashMap to track remainders and their positions. This ensures that once a repeating sequence is detected, it is enclosed in parentheses. This solution is efficient in terms of both time and space complexity and accounts for potential edge cases such as negative values and overflow.
