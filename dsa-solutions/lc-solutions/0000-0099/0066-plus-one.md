---
id: plus-one
title: Plus One (LeetCode)
difficulty: Easy
sidebar_label: 0066-PlusOne
topics:
  - Array
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/plus-one/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/plus-one/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

### Examples

#### Example 1

- **Input:** digits = [1,2,3]
- **Output:** [1,2,4]
- **Explanation:** The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4].

#### Example 2

- **Input:** digits = [4,3,2,1]
- **Output:** [4,3,2,2]
- **Explanation:** The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322. Thus, the result should be [4,3,2,2].

#### Example 3

- **Input:** digits = [9]
- **Output:** [1,0]
- **Explanation:** The array represents the integer 9. Incrementing by one gives 9 + 1 = 10. Thus, the result should be [1,0].

### Constraints

- `1 <= digits.length <= 100`
- `0 <= digits[i] <= 9`
- `digits` does not contain any leading 0's.

### Approach

To increment the large integer represented by the `digits` array, we can follow these steps:

1. Start from the least significant digit.
2. Increment the last digit by 1.
3. If the last digit becomes 10 after incrementing, set it to 0 and carry over 1 to the next digit.
4. Repeat this process until there's no carry left or we reach the most significant digit.
5. If there's a carry left after processing all digits, insert it at the beginning of the `digits` array.

### Solution Code

#### Python

```
class Solution(object):
    def plusOne(self, digits):
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0
        return [1] + digits
```

#### C++

```
class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int n = digits.size();
        int carry = 1;
        for (int i = n - 1; i >= 0; --i) {
            digits[i] += carry;
            carry = digits[i] / 10;
            digits[i] %= 10;
        }
        if (carry) {
            digits.insert(digits.begin(), carry);
        }
        return digits;
    }
};
```

#### Java

```
class Solution {
    public int[] plusOne(int[] digits) {
        int n = digits.length;
        int carry = 1;
        for (int i = n - 1; i >= 0; --i) {
            digits[i] += carry;
            carry = digits[i] / 10;
            digits[i] %= 10;
        }
        if (carry != 0) {
            int[] result = new int[n + 1];
            result[0] = carry;
            for (int i = 1; i < n + 1; ++i) {
                result[i] = digits[i - 1];
            }
            return result;
        }
        return digits;
    }
}
```

### Conclusion

The "Plus One" problem can be efficiently solved by incrementing the large integer represented by the digits array by one. The provided solution code implements this approach in Python, C++, and Java, providing an optimal solution to the problem.