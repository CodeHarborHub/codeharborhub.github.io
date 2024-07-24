---
id: convert-a-number-to-hexadecimal
title: Convert a Number to Hexadecimal
sidebar_label: 405-Convert a Number to Hexadecimal
tags:
  - Bit Manipulation
  - Brute Force
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Convert a Number to  Hexadecimal problem on LeetCode."
sidebar_position: 8
---

## Problem Description

Given an integer `num`, return a string representing its hexadecimal representation. For negative integers, the two’s complement method is used.

All the letters in the answer string should be lowercase characters, and there should not be any leading zeros in the answer except for the zero itself.

Note: You are not allowed to use any built-in library method to directly solve this problem.

### Examples

**Example 1:**

```
Input: num = 26
Output: "1a"
```

**Example 2:**

```
Input: num = -1
Output: "ffffffff"
```

### Constraints

- `-2^31 <= num <= 2^31 - 1`

---

## Solution for Convert Integer to Hexadecimal Problem

### Approach: Bit Manipulation

To solve this problem, we convert the integer to its hexadecimal representation by handling one nibble (4 bits) at a time. For negative numbers, the two’s complement is used.

#### Brute Force Approach

1. **Convert Positive Numbers:**
   - Use a loop to repeatedly divide the number by 16, and record the remainder.
   - Use a map to convert the remainder to a hexadecimal character.
   - Concatenate the characters in reverse order to get the final hexadecimal string.

2. **Handle Negative Numbers:**
   - Convert the number to its two's complement representation by adding \(2^{32}\) to the negative number.
   - Apply the same method as for positive numbers.

#### Optimized Approach

- Since we are only dealing with 32 bits, we can use a mask to extract each nibble and convert it to a hexadecimal digit.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
#include <string>

class Solution {
public:
    std::string toHex(int num) {
        if (num == 0) return "0";
        unsigned int n = num;
        std::string hex_chars = "0123456789abcdef";
        std::string hex = "";
        while (n) {
            hex = hex_chars[n & 15] + hex;
            n >>= 4;
        }
        return hex;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public String toHex(int num) {
        if (num == 0) return "0";
        long n = num & 0xFFFFFFFFL;
        StringBuilder hex = new StringBuilder();
        String hexChars = "0123456789abcdef";
        while (n != 0) {
            hex.insert(0, hexChars.charAt((int)(n & 15)));
            n >>>= 4;
        }
        return hex.toString();
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def toHex(self, num: int) -> str:
        if num == 0:
            return "0"
        
        num &= 0xFFFFFFFF  # handle negative numbers
        hex_chars = "0123456789abcdef"
        result = []
        
        while num:
            result.append(hex_chars[num & 15])
            num >>= 4
        
        return ''.join(result[::-1])
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(1)$ because the maximum number of iterations is fixed (8 for 32-bit integers).
- **Space Complexity**: $O(1)$ as the space required does not depend on the input size.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>