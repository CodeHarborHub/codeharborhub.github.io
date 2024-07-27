---
id: super-palindromes
title: Super Palindromes
sidebar_label: Super Palindromes
tags:
  - Palindrome
  - Math
---

## Problem Description

| Problem Statement                                                                 | Solution Link                                                                                        | LeetCode Profile                                     |
| :-------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| [Super Palindromes](https://leetcode.com/problems/super-palindromes/description/) | [Super Palindromes Solution on LeetCode](https://leetcode.com/problems/super-palindromes/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

Let's say a positive integer is a super-palindrome if it is a palindrome, and it is also the square of a palindrome.

Given two positive integers `left` and `right` represented as strings, return the number of super-palindromes integers in the inclusive range `[left, right]`.

### Examples

**Example 1:**

**Input:** `left = "4" right = "1000"`
**Output:** `4`
**Explanation:** `4, 9, 121, and 484 are super-palindromes. Note that 676 is not a super-palindrome: 26 * 26 = 676, but 26 is not a palindrome.`

**Example 2:**

**Input:** `left = "1" right = "2"`
**Output:** `1`

### Constraints

- `1 <= left.length, right.length <= 18`
- `left` and `right` consist of only digits.
- `left` and `right` cannot have leading zeros.
- `left` and `right` represent integers in the range `[1, 10^18 - 1]`.
- `left` is less than or equal to `right`.

## Approach

To solve this problem, we need to:

1. **Generate Palindromes:** Generate all palindromes that are within the possible square roots of the range `[left, right]`.
2. **Square Palindromes:** For each generated palindrome, compute its square and check if it is a palindrome.
3. **Count Super-Palindromes:** Count how many of these squared palindromes fall within the given range `[left, right]`.

## Solution

### Python

```python
import math

def is_palindrome(s):
    return s == s[::-1]

def super_palindromes(left, right):
    left, right = int(left), int(right)
    count = 0
    limit = int(math.sqrt(right)) + 1

    for i in range(1, limit):
        s = str(i)
        pal = s + s[::-1]
        num = int(pal) ** 2
        if num > right:
            break
        if num >= left and is_palindrome(str(num)):
            count += 1

        pal = s + s[-2::-1]
        num = int(pal) ** 2
        if num > right:
            break
        if num >= left and is_palindrome(str(num)):
            count += 1

    return count
```

### Java

```java
public class SuperPalindromes {
    private static boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            if (s.charAt(left) != s.charAt(right)) return false;
            left++;
            right--;
        }
        return true;
    }

    public static int superPalindromes(String left, String right) {
        long l = Long.parseLong(left), r = Long.parseLong(right);
        int count = 0;
        long limit = (long) Math.sqrt(r) + 1;

        for (long i = 1; i < limit; i++) {
            String s = Long.toString(i);
            String pal1 = s + new StringBuilder(s).reverse().toString();
            long num1 = Long.parseLong(pal1) * Long.parseLong(pal1);
            if (num1 > r) break;
            if (num1 >= l && isPalindrome(Long.toString(num1))) count++;

            String pal2 = s + new StringBuilder(s.substring(0, s.length() - 1)).reverse().toString();
            long num2 = Long.parseLong(pal2) * Long.parseLong(pal2);
            if (num2 > r) break;
            if (num2 >= l && isPalindrome(Long.toString(num2))) count++;
        }

        return count;
    }
}
```

### C++

```cpp
#include <cmath>
#include <string>
#include <algorithm>

bool isPalindrome(const std::string& s) {
    return std::equal(s.begin(), s.begin() + s.size() / 2, s.rbegin());
}

int superPalindromes(std::string left, std::string right) {
    long long l = std::stoll(left), r = std::stoll(right);
    int count = 0;
    long long limit = static_cast<long long>(std::sqrt(r)) + 1;

    for (long long i = 1; i < limit; i++) {
        std::string s = std::to_string(i);
        std::string pal1 = s + std::string(s.rbegin(), s.rend());
        long long num1 = std::stoll(pal1) * std::stoll(pal1);
        if (num1 > r) break;
        if (num1 >= l && isPalindrome(std::to_string(num1))) count++;

        std::string pal2 = s + std::string(s.rbegin() + 1, s.rend());
        long long num2 = std::stoll(pal2) * std::stoll(pal2);
        if (num2 > r) break;
        if (num2 >= l && isPalindrome(std::to_string(num2))) count++;
    }

    return count;
}
```

### C

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <math.h>

bool isPalindrome(char* s) {
    int len = strlen(s);
    for (int i = 0; i < len / 2; i++) {
        if (s[i] != s[len - i - 1]) return false;
    }
    return true;
}

int superPalindromes(char* left, char* right) {
    long long l = atoll(left), r = atoll(right);
    int count = 0;
    long long limit = (long long) sqrt(r) + 1;

    char s[20], pal[40];
    for (long long i = 1; i < limit; i++) {
        sprintf(s, "%lld", i);
        int len = strlen(s);

        // Palindrome of even length
        snprintf(pal, 40, "%s%s", s, strrev(strdup(s)));
        long long num1 = atoll(pal) * atoll(pal);
        if (num1 > r) break;
        if (num1 >= l && isPalindrome(ltoa(num1, pal, 10))) count++;

        // Palindrome of odd length
        snprintf(pal, 40, "%s%s", s, strrev(strdup(s) + 1));
        long long num2 = atoll(pal) * atoll(pal);
        if (num2 > r) break;
        if (num2 >= l && isPalindrome(ltoa(num2, pal, 10))) count++;
    }

    return count;
}
```

### JavaScript

```javascript
function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

function superPalindromes(left, right) {
  let l = BigInt(left),
    r = BigInt(right);
  let count = 0;
  let limit = BigInt(Math.sqrt(Number(r))) + BigInt(1);

  for (let i = BigInt(1); i < limit; i++) {
    let s = i.toString();
    let pal1 = s + s.split("").reverse().join("");
    let num1 = BigInt(pal1) ** BigInt(2);
    if (num1 > r) break;
    if (num1 >= l && isPalindrome(num1.toString())) count++;

    let pal2 = s + s.slice(0, -1).split("").reverse().join("");
    let num2 = BigInt(pal2) ** BigInt(2);
    if (num2 > r) break;
    if (num2 >= l && isPalindrome(num2.toString())) count++;
  }

  return count;
}
```

## Step-by-Step Algorithm

1. **Generate Palindromes:**
   - Iterate through possible values of `i` from 1 to the square root of the right boundary.
   - Construct palindromes by concatenating `s` with its reverse and with its reverse minus the last character.
2. **Square Palindromes:**

   - Compute the square of each palindrome.
   - Check if the squared value is within the range `[left, right]`.

3. **Check for Super-Palindromes:**

   - Verify if the squared palindrome is also a palindrome.

4. **Count and Return:**
   - Count valid super-palindromes and return the count.

## Conclusion

The problem of finding super-palindromes can be efficiently solved by generating palindromes and checking their squares for the required properties. This approach ensures that we only work within the necessary range and use string manipulations to identify palindromic numbers, which is both effective and computationally feasible.
