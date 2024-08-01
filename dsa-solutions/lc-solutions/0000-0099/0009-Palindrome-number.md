---
id: palindrome-number
title: Palindrome Number (LeetCode)
sidebar_label: 0009 - Palindrome Number
tags: 
  - Math
  - Palindrome
description: Given an integer x, return true if x is a palindrome, and false otherwise.
sidebar_position: 9
---

## Problem Statement

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

### Examples

**Example 1:**

```
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**

```
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

### Constraints

- -2^31 < x < 2^31 - 1

## Solution

### Approach 1: Reversing the Entire Number

#### Intuition

The intuition behind this approach is to reverse the entire input number and check if the reversed number is equal to the original number. If they are the same, then the number is a palindrome.

#### Algorithm

1. **Handling Special Cases:**
   - If `x` is negative, return `false`, as negative numbers cannot be palindromes.
2. **Reversing the Number:**
   - Initialize two variables: `reversed` and `temp`.
   - Enter a loop that continues until `temp` becomes zero:
     - Inside the loop:
       - Extract the last digit of `temp` using modulo `%` and store it in `digit`.
       - Reverse the number by multiplying `reversed` by 10 and adding the extracted `digit`.
       - Divide `temp` by 10 to remove the last digit and move to the next iteration.
3. **Comparison:**
   - Compare the reversed value `reversed` with the original input value `x`.
   - If they are equal, return `true`; otherwise, return `false`.

#### Code (C++)

```cpp
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        long long reversed = 0;
        long long temp = x;

        while (temp != 0) {
            int digit = temp % 10;
            reversed = reversed * 10 + digit;
            temp /= 10;
        }

        return (reversed == x);
    }
};
```

#### Code (Java)

```java
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        long reversed = 0;
        long temp = x;

        while (temp != 0) {
            int digit = (int) (temp % 10);
            reversed = reversed * 10 + digit;
            temp /= 10;
        }

        return (reversed == x);
    }
}
```

#### Code (Python)

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        reversed_num = 0
        temp = x

        while temp != 0:
            digit = temp % 10
            reversed_num = reversed_num * 10 + digit
            temp //= 10

        return reversed_num == x
```

### Approach 2: Reversing Half of the Number

#### Intuition

Instead of reversing the entire number, we can reverse only the last half of the number. This approach is more efficient in terms of time complexity and memory usage.

#### Algorithm

1. **Handling Special Cases:**
   - If `x` is negative or ends with a zero, return `false`.
2. **Reversing the Second Half:**
   - Initialize two variables: `reversed` and `original`.
   - Enter a loop that continues until the first half of the digits (represented by `x`) becomes less than or equal to the reversed second half (`reversed`):
     - Inside the loop:
       - Extract the last digit of `x` using modulo `%` and add it to the `reversed` variable after multiplying it by 10 (shifting the existing digits to the left).
       - Divide `x` by 10 to remove the last digit and move towards the center of the number.
3. **Comparison:**
   - Compare the first half of the digits (`x`) with the reversed second half (`reversed`) to determine if the number is a palindrome:
     - For an even number of digits, compare `x` with `reversed`.
     - For an odd number of digits, compare `x` with `reversed / 10` (ignoring the middle digit).
   - If the comparison holds true, return `true`; otherwise, return `false`.

#### Code (C++)

```cpp
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }

        int reversed = 0;
        int original = x;

        while (x > reversed) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }

        return (x == reversed) || (x == reversed / 10);
    }
};
```

#### Code (Java)

```java
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }

        int reversed = 0;
        int original = x;

        while (x > reversed) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }

        return (x == reversed) || (x == reversed / 10);
    }
}
```

#### Code (Python)

```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x != 0 and x % 10 == 0):
            return False

        reversed_num = 0
        original = x

        while x > reversed_num:
            reversed_num = reversed_num * 10 + x % 10
            x //= 10

        return x == reversed_num or x == reversed_num // 10
```

## Complexity Analysis

### Approach 1: Reversing the Entire Number

- **Time Complexity**: $O(log10(x))$, where x is the input number.
- **Space Complexity**: $O(1)$.

### Approach 2: Reversing Half of the Number

- **Time Complexity**: $O(log10(x))$, where x is the input number.
- **Space Complexity**: $O(1)$.

## Conclusion

We have explored two approaches to determine whether an integer is a palindrome. Both approaches provide efficient solutions, with the second approach being slightly more optimized in terms of time and space complexity. These solutions offer different perspectives on how