---
id: complement-of-base-10-integer
title: Complement of Base 10 Integer
sidebar_label: 1009-Complement of  Base 10 Integer
tags:
  - Bit Manipulation
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Complement of Base 10 Integer problem on LeetCode."
sidebar_position: 15
---

## Problem Description

The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2. Given an integer `n`, return its complement.

### Examples

**Example 1:**

```
Input: n = 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.
```

**Example 2:**

```
Input: n = 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.
```

**Example 3:**

```
Input: n = 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
```

### Constraints

- `0 <= n < 10^9`

---

## Solution for Complement of Integer Problem

To solve this problem, we need to flip all bits of the binary representation of the given integer `n`.

### Approach

1. **Brute Force:**
   - Convert the integer to its binary string representation.
   - Flip each bit and convert the binary string back to an integer.

2. **Optimized Approach:**
   - Find the number of bits in the binary representation of `n`.
   - Create a mask with the same number of bits set to 1.
   - XOR `n` with the mask to get the complement.

### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    int bitwiseComplement(int n) {
        if (n == 0) return 1;
        int mask = 1;
        while (mask < n) {
            mask = (mask << 1) | 1;
        }
        return n ^ mask;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public int bitwiseComplement(int n) {
        if (n == 0) return 1;
        int mask = 1;
        while (mask < n) {
            mask = (mask << 1) | 1;
        }
        return n ^ mask;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def bitwiseComplement(self, n: int) -> int:
        if n == 0:
            return 1
        mask = 1
        while mask < n:
            mask = (mask << 1) | 1
        return n ^ mask
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(log n)$, where `n` is the given integer. This is because we are iterating through the bits of `n`.
- **Space Complexity**: $O(1)$, as we are using a constant amount of extra space.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>
```
