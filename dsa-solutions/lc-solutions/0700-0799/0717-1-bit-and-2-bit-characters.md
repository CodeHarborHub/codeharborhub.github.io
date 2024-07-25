---
id: 1-bit-and-2-bit-characters
title: 1-bit and 2-bit Characters
sidebar_label: 0717 - 1-bit and 2-bit Characters
tags:
  - Array
  - Greedy
  - Bit Manipulation
description: "This is a solution to the 1-bit and 2-bit Characters problem on LeetCode."
---

## Problem Description

We have two special characters:

- The first character can be represented by one bit `0`.
- The second character can be represented by two bits (`10` or `11`).

Given a binary array `bits` that ends with `0`, return `true` if the last character must be a one-bit character.

### Examples

**Example 1:**

```
Input: bits = [1,0,0]
Output: true
Explanation: The only way to decode it is two-bit character and one-bit character.
So the last character is one-bit character.
```

**Example 2:**

```
Input: bits = [1,1,1,0]
Output: false
Explanation: The only way to decode it is two-bit character and two-bit character.
So the last character is not one-bit character.
```

### Constraints

- `1 <= bits.length <= 1000`
- `bits[i]` is either `0` or `1`.

## Solution for 1-bit and 2-bit Characters

### Approach 1: Increment Pointer

#### Intuition and Algorithm

When reading from the i-th position, if `bits[i] == 0`, the next character must have 1 bit; else if `bits[i] == 1`, the next character must have 2 bits. We increment our read-pointer `i` to the start of the next character appropriately. At the end, if our pointer is at `bits.length - 1`, then the last character must have a size of 1 bit.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    bool isOneBitCharacter(vector<int>& bits) {
        int i = 0;
        while (i < bits.size() - 1) {
            i += bits[i] + 1;
        }
        return i == bits.size() - 1;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        int i = 0;
        while (i < bits.length - 1) {
            i += bits[i] + 1;
        }
        return i == bits.length - 1;
    }
}

```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def isOneBitCharacter(self, bits):
        i = 0
        while i < len(bits) - 1:
            i += bits[i] + 1
        return i == len(bits) - 1
        
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**: `N` is the length of `bits`.

### Space Complexity: $O(1)$

> **Reason**: the space used by `i`.

### Approach 2: Greedy

#### Intuition and Algorithm

The second-last `0` must be the end of a character (or, the beginning of the array if it doesn't exist). Looking from that position forward, the array `bits` takes the form `[1, 1, ..., 1, 0]` where there are zero or more `1`'s present in total. It is easy to show that the answer is `true` if and only if there is an even number of ones present.

In our algorithm, we will find the second last zero by performing a linear scan from the right. We present two slightly different approaches below.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@Shreyash3087"/>

```cpp
class Solution {
public:
    bool isOneBitCharacter(vector<int>& bits) {
        int i = bits.size() - 2;
        while (i >= 0 && bits[i] > 0) {
            i--;
        }
        return (bits.size() - i) % 2 == 0;
    }
};

```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@Shreyash3087"/>

```java
class Solution {
    public boolean isOneBitCharacter(int[] bits) {
        int i = bits.length - 2;
        while (i >= 0 && bits[i] > 0) {
            i--;
        }
        return (bits.length - i) % 2 == 0;
    }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@Shreyash3087"/>

```python
class Solution(object):
    def isOneBitCharacter(self, bits):
        parity = bits.pop()
        while bits and bits.pop(): parity ^= 1
        return parity == 0
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: $O(N)$

> **Reason**: `N` is the length of `bits`.

### Space Complexity: $O(1)$

> **Reason**: the space used by `parity` (or `i`).

## References

- **LeetCode Problem**: [1-bit and 2-bit Characters](https://leetcode.com/problems/1-bit-and-2-bit-characters/description/)

- **Solution Link**: [1-bit and 2-bit Characters](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/)

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['shreyash3087'].map(username => (
 <Author key={username} username={username} />
))}
</div>