---
id: add-binary
title: Add Binary (LeetCode)
difficulty: Easy
sidebar_label: 0067-AddBinary
topics:
  - Math
  - String
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/add-binary/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/add-binary/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given two binary strings `a` and `b`, return their sum as a binary string.

### Examples

#### Example 1:

- **Input:** `a = "11"`, `b = "1"`
- **Output:** `"100"`
- **Explanation:** The sum of binary strings `11` and `1` is `100`.

#### Example 2:

- **Input:** `a = "1010"`, `b = "1011"`
- **Output:** `"10101"`
- **Explanation:** The sum of binary strings `1010` and `1011` is `10101`.

### Constraints:

- `1 <= a.length, b.length <= 10^4`
- `a` and `b` consist only of `'0'` or `'1'` characters.
- Each string does not contain leading zeros except for the zero itself.

### Approach

To add two binary strings `a` and `b`, we can follow these steps:

1. Initialize variables `result` and `carry` to store the result and carry, respectively.
2. Start from the last digit of both strings and move towards the beginning.
3. Add the corresponding digits from `a` and `b` along with the carry and update the result accordingly.
4. If the sum exceeds 1, set the carry to 1; otherwise, set it to 0.
5. After processing all digits, if there's still a carry left, append it to the result.
6. Reverse the result string to get the final sum.

### Solution Code

#### Python

```
class Solution(object):
    def addBinary(self, a, b):
        return bin(int(a, 2) + int(b, 2))[2:]
```

#### C++

```
class Solution {
public:
    string addBinary(string a, string b) {
        string result;
        int carry = 0;
        int i = a.length() - 1, j = b.length() - 1;
        
        while (i >= 0 || j >= 0) {
            int digit_a = (i >= 0) ? a[i] - '0' : 0;
            int digit_b = (j >= 0) ? b[j] - '0' : 0;
            int current_sum = digit_a + digit_b + carry;
            result = to_string(current_sum % 2) + result;
            carry = current_sum / 2;
            i--;
            j--;
        }
        
        if (carry) {
            result = "1" + result;
        }
        
        return result;
    }
};
```

#### Java

```
class Solution {
    public String addBinary(String a, String b) {
        StringBuilder result = new StringBuilder();
        int carry = 0;
        int i = a.length() - 1, j = b.length() - 1;
        
        while (i >= 0 || j >= 0) {
            int digit_a = (i >= 0) ? a.charAt(i) - '0' : 0;
            int digit_b = (j >= 0) ? b.charAt(j) - '0' : 0;
            int current_sum = digit_a + digit_b + carry;
            result.insert(0, current_sum % 2);
            carry = current_sum / 2;
            i--;
            j--;
        }
        
        if (carry == 1) {
            result.insert(0, '1');
        }
        
        return result.toString();
    }
}
```

### Conclusion

The "Add Binary" problem can be efficiently solved by adding two binary strings digit by digit and considering the carry. The provided solution code implements this approach in Python, C++, and Java, providing an optimal solution to the problem.