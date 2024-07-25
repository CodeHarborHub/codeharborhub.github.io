---
id: Super-Palindromes
title: Super Palindromes
sidebar_label: 0906 - Super Palindromes
tags:
  - hard
  - Palindromes
  - Math
  - Algorithms
---

## Problem Description

A positive integer is a super-palindrome if it is a palindrome, and it is also the square of a palindrome.

Given two positive integers `left` and `right` represented as strings, return the number of super-palindromes in the inclusive range [left, right].

## Examples

**Example 1:**

```
Input: left = "4", right = "1000"
Output: 4
Explanation: 4, 9, 121, and 484 are superpalindromes.
Note that 676 is not a superpalindrome: 26 * 26 = 676, but 26 is not a palindrome.
```

**Example 2:**

```
Input: left = "1", right = "2"
Output: 1
```

## Constraints

```
1 <= left.length, right.length <= 18
left and right consist of only digits.
left and right cannot have leading zeros.
left and right represent integers in the range [1, 10^18 - 1].
left is less than or equal to right.
```

## Solution

### Python

```python
class Solution:
    def superpalindromesInRange(self, left: str, right: str) -> int:
        def is_palindrome(x: str) -> bool:
            return x == x[::-1]

        left, right = int(left), int(right)
        MAGIC = 100000

        count = 0
        for k in range(MAGIC):
            s = str(k)
            t = s + s[-2::-1]
            v = int(t) ** 2
            if v > right:
                break
            if v >= left and is_palindrome(str(v)):
                count += 1

        for k in range(MAGIC):
            s = str(k)
            t = s + s[::-1]
            v = int(t) ** 2
            if v > right:
                break
            if v >= left and is_palindrome(str(v)):
                count += 1

        return count

# Example usage:
solution = Solution()
print(solution.superpalindromesInRange("4", "1000"))  # Output: 4
```

### C++

```cpp
#include <string>
#include <algorithm>

class Solution {
public:
    bool is_palindrome(const std::string &s) {
        return s == std::string(s.rbegin(), s.rend());
    }

    int superpalindromesInRange(std::string left, std::string right) {
        long long L = std::stoll(left);
        long long R = std::stoll(right);
        int MAGIC = 100000;
        int count = 0;

        for (int k = 0; k < MAGIC; ++k) {
            std::string s = std::to_string(k);
            std::string t = s + std::string(s.rbegin() + 1, s.rend());
            long long v = std::stoll(t) * std::stoll(t);
            if (v > R) break;
            if (v >= L && is_palindrome(std::to_string(v))) ++count;
        }

        for (int k = 0; k < MAGIC; ++k) {
            std::string s = std::to_string(k);
            std::string t = s + std::string(s.rbegin(), s.rend());
            long long v = std::stoll(t) * std::stoll(t);
            if (v > R) break;
            if (v >= L && is_palindrome(std::to_string(v))) ++count;
        }

        return count;
    }
};

// Example usage:
int main() {
    Solution solution;
    std::cout << solution.superpalindromesInRange("4", "1000") << std::endl;  // Output: 4
    return 0;
}
```

### Java

```java
class Solution {
    private boolean isPalindrome(String s) {
        return s.equals(new StringBuilder(s).reverse().toString());
    }

    public int superpalindromesInRange(String left, String right) {
        long L = Long.parseLong(left);
        long R = Long.parseLong(right);
        int MAGIC = 100000;
        int count = 0;

        for (int k = 0; k < MAGIC; ++k) {
            String s = Integer.toString(k);
            String t = s + new StringBuilder(s).reverse().substring(1);
            long v = Long.parseLong(t) * Long.parseLong(t);
            if (v > R) break;
            if (v >= L && isPalindrome(Long.toString(v))) ++count;
        }

        for (int k = 0; k < MAGIC; ++k) {
            String s = Integer.toString(k);
            String t = s + new StringBuilder(s).reverse().toString();
            long v = Long.parseLong(t) * Long.parseLong(t);
            if (v > R) break;
            if (v >= L && isPalindrome(Long.toString(v))) ++count;
        }

        return count;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.superpalindromesInRange("4", "1000"));  // Output: 4
    }
}
```

### JavaScript

```javascript
var superpalindromesInRange = function (left, right) {
  const isPalindrome = (s) => s === s.split("").reverse().join("");
  const L = BigInt(left);
  const R = BigInt(right);
  const MAGIC = 100000;
  let count = 0;

  for (let k = 0; k < MAGIC; ++k) {
    let s = k.toString();
    let t = s + s.split("").reverse().slice(1).join("");
    let v = BigInt(t) * BigInt(t);
    if (v > R) break;
    if (v >= L && isPalindrome(v.toString())) count++;
  }

  for (let k = 0; k < MAGIC; ++k) {
    let s = k.toString();
    let t = s + s.split("").reverse().join("");
    let v = BigInt(t) * BigInt(t);
    if (v > R) break;
    if (v >= L && isPalindrome(v.toString())) count++;
  }

  return count;
};

// Example usage:
console.log(superpalindromesInRange("4", "1000")); // Output: 4
```
