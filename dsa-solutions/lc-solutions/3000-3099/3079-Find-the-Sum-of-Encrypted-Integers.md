---
id: find-the-sum-of-encrypted-integers
title: Find the Sum of Encrypted Integers (LeetCode)
sidebar_label: 3079-FindTheSumOfEncryptedIntegers
tags:
  - Array
  - Math
description: Calculate the sum of encrypted integers by replacing each digit in the integer with the largest digit in the integer.
sidebar_position: 3079
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Find the Sum of Encrypted Integers](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/) | [Find the Sum of Encrypted Integers Solution on LeetCode](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

You are given an integer array `nums` containing positive integers. We define a function `encrypt` such that `encrypt(x)` replaces every digit in `x` with the largest digit in `x`. For example, `encrypt(523) = 555` and `encrypt(213) = 333`.

Return the sum of encrypted elements.

### Example 1

- **Input:** `nums = [1,2,3]`
- **Output:** `6`
- **Explanation:** The encrypted elements are `[1,2,3]`. The sum of encrypted elements is `1 + 2 + 3 = 6`.

### Example 2

- **Input:** `nums = [10,21,31]`
- **Output:** `66`
- **Explanation:** The encrypted elements are `[11,22,33]`. The sum of encrypted elements is `11 + 22 + 33 = 66`.

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 1000`

## Approach

To solve this problem, follow these steps:

1. Define the `encrypt` function that takes an integer `x` and returns an integer where every digit of `x` is replaced by the largest digit in `x`.
2. For each integer in `nums`, apply the `encrypt` function.
3. Calculate the sum of all encrypted integers.
4. Return the sum.

### Solution Code

#### Python

```python
class Solution:
    def findTheSumOfEncryptedIntegers(self, nums: List[int]) -> int:
        def encrypt(x: int) -> int:
            max_digit = max(str(x))
            return int(max_digit * len(str(x)))
        
        return sum(encrypt(num) for num in nums)
```

#### C++

```c++
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    int findTheSumOfEncryptedIntegers(vector<int>& nums) {
        auto encrypt = [](int x) {
            string s = to_string(x);
            char max_digit = *max_element(s.begin(), s.end());
            return stoi(string(s.size(), max_digit));
        };
        
        int sum = 0;
        for (int num : nums) {
            sum += encrypt(num);
        }
        return sum;
    }
};

```

#### Java

```java
class Solution {
    public int findTheSumOfEncryptedIntegers(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += encrypt(num);
        }
        return sum;
    }
    
    private int encrypt(int x) {
        char[] digits = Integer.toString(x).toCharArray();
        char maxDigit = '0';
        for (char digit : digits) {
            if (digit > maxDigit) {
                maxDigit = digit;
            }
        }
        return Integer.parseInt(new String(new char[digits.length]).replace('\0', maxDigit));
    }
}

```

### Conclusion
The solutions provided demonstrate how to encrypt each integer by replacing its digits with the 
largest digit found in the integer, and then summing these encrypted integers. This approach ensures 
the problem is solved efficiently across different programming languages.