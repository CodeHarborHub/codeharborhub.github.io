---
id: powerof-four
title: Power of Four
sidebar_label: 342-Power of Four
tags:
  - Math
  - Bit Manipulation
  - LeetCode
  - Java
  - Python
  - C++
description: "This is a solution to the Power of Four problem on LeetCode."
sidebar_position: 6
---

## Problem Description

Given an integer `n`, return `true` if it is a power of four. Otherwise, return `false`.

An integer `n` is a power of four if there exists an integer `x` such that `n == 4^x`.

### Examples

**Example 1:**

```
Input: n = 16
Output: true
```

**Example 2:**

```
Input: n = 5
Output: false
```

**Example 3:**

```
Input: n = 1
Output: true
```

### Constraints

- `-2^31 <= n <= 2^31 - 1`



---

## Solution for Power of Four Problem

### Approach 1: Brute Force (Loop/Recursion)

The brute force approach involves repeatedly dividing the number by `4` and checking if it becomes `1`.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    bool isPowerOfFour(int n) {
        if (n < 1) return false;
        while (n % 4 == 0) {
            n /= 4;
        }
        return n == 1;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public boolean isPowerOfFour(int n) {
        if (n < 1) return false;
        while (n % 4 == 0) {
            n /= 4;
        }
        return n == 1;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n < 1:
            return False
        while n % 4 == 0:
            n //= 4
        return n == 1
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(\log n)$, as we keep dividing `n` by `4`.
- **Space Complexity**: $O(1)$, constant space usage.

### Approach 2: Optimized (Bit Manipulation)

The optimized approach checks if `n` is a power of four without loops or recursion. We can use bit manipulation:

1. `n > 0`: Ensure `n` is positive.
2. `n & (n - 1) == 0`: Ensure `n` is a power of two (only one bit set).
3. `(n - 1) % 3 == 0`: Ensure `n` is a power of four (using properties of powers of four).

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@ImmidiSivani"/>

```cpp
class Solution {
public:
    bool isPowerOfFour(int n) {
        return n > 0 && (n & (n - 1)) == 0 && (n - 1) % 3 == 0;
    }
};
```

</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@ImmidiSivani"/>

```java
class Solution {
    public boolean isPowerOfFour(int n) {
        return n > 0 && (n & (n - 1)) == 0 && (n - 1) % 3 == 0;
    }
}
```

</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@ImmidiSivani"/>

```python
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        return n > 0 and (n & (n - 1)) == 0 and (n - 1) % 3 == 0
```

</TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity**: $O(1)$, constant time operations.
- **Space Complexity**: $O(1)$, constant space usage.

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['ImmidiSivani'].map(username => (
 <Author key={username} username={username} />
))}
</div>