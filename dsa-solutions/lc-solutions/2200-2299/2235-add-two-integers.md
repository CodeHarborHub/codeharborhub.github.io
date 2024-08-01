---
id: add-two-integers
title: Add Two Integers
sidebar_label: 2255 - Add Two Integers
tags: 
    - Functions
    - Arguments
description: Given two integers `num1` and `num2`, return the **sum** of the two integers.
sidebar_position: 2235
---

## Problem Statement
Given two integers `num1` and `num2`, return the **sum** of the two integers.

### Examples

**Example 1:**

```
Input: num1 = 12, num2 = 5
Output: 17
Explination: num1 is 12, num2 is 5, and their sum is 12 + 5 = 17, so 17 is returned.
```

**Example 2:**

```
Input: num1 = -10, num2 = 4
Output: -6
Explination: num1 + num2 = -6, so -6 is returned.
```



### Constraints

- `-100 <= num1, num2 <= 100`

## Solution

#### C++ Implementation

```cpp
class Solution {
public:
    int sum(int num1, int num2) {
       return num1 + num2;
     }
};
```

#### Python Implementation

```python
class Solution:
    def sum(self, num1: int, num2: int) -> int:
        return num1 + num2
```

#### Java Implementation

```java
class Solution {
    public int sum(int num1, int num2) {
        return num1 + num2;
    }
}
```

#### JavaScript Implementation

```javascript
    var sum = function(num1, num2) {
      return num1 + num2;
};
```

#### TypeScript Implementation

```typescript
    function sum(num1: number, num2: number): number {
         return num1 + num2;
};
```

### Conclusion

These implementations handle the addition of two integers and return their sum. The examples provided also show how to use each function. The problem is straightforward and has a constant time complexity of 𝑂(1) for each implementation.
