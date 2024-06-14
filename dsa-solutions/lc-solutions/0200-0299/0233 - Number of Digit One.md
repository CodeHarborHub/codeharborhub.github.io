---
id: number-of-digit-one
title: Number of Digit One
sidebar_label: 233 Number of Digit One
tags:
- Dynamic Programming
- Java
- Recursion
- Math
description: "This document provides a solution where we count the total number of digit $1$ appearing in all non-negative integers less than or equal to n."
---

## Problem

Given an integer n, count the total number of $digit$ 1 appearing in all non-negative integers less than or equal to n.

### Examples

**Example 1:**

```
Input: n = 13

Output: 6

```
**Example 2:**
```
Input: n = 0

Output: 0

```
### Constraints

- `0 <= n <= 10^9`

---
## Approach
There are four approaches discussed that helps to obtain the solution:

1. **Dynamic Programming Table**:
   
   - Initialize **'count'** to $0$, which will store the total count of $1's$.
     
   - Use **'factor'** to isolate each digit position, starting from the units place and moving to higher places (tens, hundreds, etc.).

3. **Iterative Analysis**:

  - Loop through each digit position using **'factor'**, which starts from $1$ and increases by a factor of $10$ in each iteration.
    
   - For each position defined by **'factor'**, determine:
     
     -  **'lowerNumbers'**: Numbers to the right of the current digit.
     
     -  **'currentDigit'**: The digit at the current position.
    
     -  **'higherNumbers'**: Numbers to the left of the current digit.
        
3. **Count Calculation**:
   
   - If **'currentDigit'** is $0$, then the count of $1's$ contributed by the current digit position comes solely from higher numbers.
     
   - If **'currentDigit'** is $1$, it includes all $1's$ contributed by higher numbers, plus the $1's$ in the lower numbers up to **'lowerNumbers + 1'**.
  
   - If **'currentDigit'** is greater than $1$, it includes all $1's$ contributed by higher numbers and the full set of lower numbers for that digit position.

4. **Result**:
     
   - Return the accumulated **'count'** after processing all digit positions.

## Solution for Number of Digit One

This problem can be solved using dynamic programming. The problem requires to count the total number of digit $1$ appearing in all non-negative integers less than or equal to n.

#### Code in Java
    
 ```java
class Solution {
    public int countDigitOne(int n) {
        if (n <= 0) return 0;
        
        int count = 0;
        for (long factor = 1; factor <= n; factor *= 10) {
            long lowerNumbers = n - (n / factor) * factor;
            long currentDigit = (n / factor) % 10;
            long higherNumbers = n / (factor * 10);
            
            if (currentDigit == 0) {
                count += higherNumbers * factor;
            } else if (currentDigit == 1) {
                count += higherNumbers * factor + lowerNumbers + 1;
            } else {
                count += (higherNumbers + 1) * factor;
            }
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        // Test cases
        System.out.println(sol.countDigitOne(13)); 
        System.out.println(sol.countDigitOne(0));  
    }
}

```

### Complexity Analysis

#### Time Complexity: $O(log_{10} n)$

> **Reason**: The time complexity is $O(log_{10} n)$, because we are processing each digit position from the least significant to the most significant, and the number of digit positions is logarithmic relative to the input size.

#### Space Complexity: $O(1)$

> **Reason**: The space complexity is $O(1)$, because we only use a constant amount of extra space regardless of the input size.

# References

- **LeetCode Problem:** [Number of Digit One](https://leetcode.com/problems/number-of-digit-one/description/)
- **Solution Link:** [Number of Digit One Solution on LeetCode](https://leetcode.com/problems/number-of-digit-one/solutions/)
- **Authors LeetCode Profile:** [Vivek Vardhan](https://leetcode.com/u/vivekvardhan43862/)
