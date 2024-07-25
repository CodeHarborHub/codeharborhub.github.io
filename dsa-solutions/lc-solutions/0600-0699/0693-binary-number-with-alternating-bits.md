---
id: binary-number-with-alternating-bits
title: Binary Number with Alternating Bits
sidebar_label: 0693 - Binary Number with Alternating Bits
tags:
  - Bit Manipulation
  - String
  - Bitmask
description: "This is a solution to the Binary Number with Alternating Bits problem on LeetCode."
---

## Problem Description

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

### Examples

**Example 1:**

```
Input: n = 5
Output: true
Explanation: The binary representation of 5 is: 101
```

**Example 2:**

```
Input: n = 7
Output: false
Explanation: The binary representation of 7 is: 111.
```

### Constraints

- $$1 \leq n \leq 2^{31} - 1$$

## Solution for Binary Number with Alternating Bits

### Approach 1: Convert to String
#### Intuition and Algorithm

Let's convert the given number into a string of binary digits. Then, we should simply check that no two adjacent digits are the same.

## Code in Different Languages

<Tabs>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public boolean hasAlternatingBits(int n) {
        String bits = Integer.toBinaryString(n);
        for (int i = 0; i < bits.length() - 1; i++) {
            if (bits.charAt(i) == bits.charAt(i+1)) {
                return false;
            }
        }
        return true;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def hasAlternatingBits(self, n):
        bits = bin(n)
        return all(bits[i] != bits[i+1]
                   for i in xrange(len(bits) - 1))
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(1)$

> **Reason**:  For arbitrary inputs, we do $O(w)$ work, where w is the number of bits in `n`. However, $w \leq 32$.

### Space Complexity: $O(1)$

> **Reason**: or alternatively $O(w)$.

### Approach 2: Divide By Two
#### Algorithm

We can get the last bit and the rest of the bits via `n % 2` and `n // 2` operations. Let's remember `cur`, the last bit of `n`. If the last bit ever equals the last bit of the remaining, then two adjacent bits have the same value, and the answer is `False`. Otherwise, the answer is `True`.

Also note that instead of `n % 2` and `n // 2`, we could have used operators `n & 1` and `n >>= 1` instead.

## Code in Different Languages

<Tabs>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public boolean hasAlternatingBits(int n) {
        int cur = n % 2;
        n /= 2;
        while (n > 0) {
            if (cur == n % 2) return false;
            cur = n % 2;
            n /= 2;
        }
        return true;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def hasAlternatingBits(self, n):
        n, cur = divmod(n, 2)
        while n:
            if cur == n % 2: return False
            n, cur = divmod(n, 2)
        return True
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(1)$

> **Reason**:  For arbitrary inputs, we do $O(w)$ work, where w is the number of bits in n. However, $w \leq 32$.

### Space Complexity: $O(1)$

> **Reason**: constant space is used.

## References

- **LeetCode Problem**: [Binary Number with Alternating Bits](https://leetcode.com/problems/binary-number-with-alternating-bits/description/)

- **Solution Link**: [Binary Number with Alternating Bits](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>