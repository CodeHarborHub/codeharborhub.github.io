---
id: add-strings
title: Add Strings
sidebar_label: 415-Add Strings
tags:
  - String Manipulation
  - Simulation
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Add Strings problem on LeetCode."
sidebar_position: 10
---

## Problem Description

Given two non-negative integers, `num1` and `num2`, represented as strings, return the sum of `num1` and `num2` as a string.

You must solve the problem without using any built-in library for handling large integers (such as `BigInteger`). You must also not convert the inputs to integers directly.

### Examples

**Example 1:**

```
Input: num1 = "11", num2 = "123"
Output: "134"
```

**Example 2:**

```
Input: num1 = "456", num2 = "77"
Output: "533"
```

**Example 3:**

```
Input: num1 = "0", num2 = "0"
Output: "0"
```

### Constraints

- `1 <= num1.length, num2.length <= 10^4`
- `num1` and `num2` consist of only digits.
- `num1` and `num2` don't have any leading zeros except for the zero itself.

---

## Solution for Add Strings Problem

To solve this problem, we simulate the addition of two numbers digit by digit from right to left, similar to how we perform addition manually.

### Approach: Simulation of Digit-by-Digit Addition

1. **Initialize Variables:**
   - `i` and `j` to point to the last characters of `num1` and `num2`.
   - `carry` to store the carry-over value during addition.
   - `result` to store the result in reverse order.

2. **Add Digits from Right to Left:**
   - Loop until all digits from both numbers and the carry are processed.
   - For each step, add the corresponding digits from `num1` and `num2` and the `carry`.
   - Calculate the new `carry` and the digit to be added to the result.
   - Append the result digit to the `result` list.

3. **Handle Carry:**
   - If there's any remaining carry after the loop, append it to the `result`.

4. **Return Result:**
   - Reverse the `result` list and join the digits to form the final string.

#### Brute Force Approach

1. Convert each string to an integer.
2. Add the two integers.
3. Convert the sum back to a string.

This approach, while simple, is not allowed as per the problem constraints.

#### Optimized Approach

The optimized approach uses the manual digit-by-digit addition described above.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    string addStrings(string num1, string num2) {
        int i = num1.size() - 1, j = num2.size() - 1, carry = 0;
        string result = "";
        
        while (i >= 0 || j >= 0 || carry) {
            int sum = carry;
            if (i >= 0) sum += num1[i--] - '0';
            if (j >= 0) sum += num2[j--] - '0';
            carry = sum / 10;
            result += (sum % 10) + '0';
        }
        
        reverse(result.begin(), result.end());
        return result;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String addStrings(String num1, String num2) {
        StringBuilder result = new StringBuilder();
        int carry = 0, i = num1.length() - 1, j = num2.length() - 1;
        
        while (i >= 0 || j >= 0 || carry != 0) {
            int sum = carry;
            if (i >= 0) sum += num1.charAt(i--) - '0';
            if (j >= 0) sum += num2.charAt(j--) - '0';
            result.append(sum % 10);
            carry = sum / 10;
        }
        
        return result.reverse().toString();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        i, j = len(num1) - 1, len(num2) - 1
        carry = 0
        result = []
        
        while i >= 0 or j >= 0 or carry:
            sum_val = carry
            if i >= 0:
                sum_val += ord(num1[i]) - ord('0')
                i -= 1
            if j >= 0:
                sum_val += ord(num2[j]) - ord('0')
                j -= 1
            carry, digit = divmod(sum_val, 10)
            result.append(str(digit))
        
        return ''.join(result[::-1])
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(max(n, m))$, where `n` and `m` are the lengths of `num1` and `num2`.
- **Space Complexity**: $O(max(n, m))$ for storing the result.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>