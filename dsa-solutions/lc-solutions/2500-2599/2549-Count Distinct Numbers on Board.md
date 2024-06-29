---
id: count-distinct-numbers-on-board
title: Count Distinct Numbers on Board
sidebar_label: 2544 Count Distinct Numbers on Board
tags:
  - Array
  - Hash Table
  - LeetCode
  - C++
description: "This is a solution to the Count Distinct Numbers on Board problem on LeetCode."
---

## Problem Description

You are given a positive integer n, that is initially placed on a board. Every day, for 109 days, you perform the following procedure:

For each number x present on the board, find all numbers `1 <= i <= n` such that x % i == 1.
Then, place those numbers on the board.
Return the number of distinct integers present on the board after 109 days have elapsed.

### Examples

**Example 1:**

```

Input: n = 5
Output: 4
Explanation: Initially, 5 is present on the board.

```

**Example 2:**

```
Input: n = 3
Output: 2
Explanation:
Since 3 % 2 == 1, 2 will be added to the board.
```

### Constraints

- `1 <= n <= 100`

### Approach

Since every operation on the number n on the desktop will also cause the number n-1 to appear on the desktop, the final numbers on the desktop are [2,...n], that is, n-1 numbers.

The time complexity is $O(n)$, and the space complexity is $O(n)$. Here, $n$ is the given number.

#### Python3

```python
class Solution:
    def distinctIntegers(self, n: int) -> int:
        return max(1, n - 1)
```

#### Java

```java
class Solution {
    public int distinctIntegers(int n) {
        return Math.max(1, n - 1);
    }
}
```

#### C++

```cpp
class Solution {
public:
    int distinctIntegers(int n) {
        return max(1, n - 1);
    }
};
```

#### Go

```go
func distinctIntegers(n int) int {
	return max(1, n-1)
}
```

#### TypeScript

```ts
function distinctIntegers(n: number): number {
  return Math.max(1, n - 1);
}
```
