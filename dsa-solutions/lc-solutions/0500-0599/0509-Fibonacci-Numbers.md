---
id: Fibonacci-Numbers
title: Fibonacci-Numbers
sidebar_label: Fibonacci-Numbers
tags: 
    - Fibonacci
    - Dynamic Programming
    - Recursion
    - Algorithms
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Fibonacci-Numbers](https://leetcode.com/problems/Fibonacci-Numbers/description/) | [Fibonacci-Numbers Solution on LeetCode](https://leetcode.com/problems/Fibonacci-Numbers/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

## Problem Description

The Fibonacci numbers, commonly denoted F(n), form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2) for n &gt; 1

Given an integer n, calculate F(n).

### Examples

### Example 1
**Input:** `n = 2`
**Output:** `1`
**Explanation:** `F(2) = F(1) + F(0) = 1 + 0 = 1.`

### Example 2
**Input:** `n = 3`
**Output:** `2`
**Explanation:** `F(3) = F(2) + F(1) = 1 + 1 = 2.`

### Example 3
**Input:** `n = 4`
**Output:** `3`
**Explanation:** `F(4) = F(3) + F(2) = 2 + 1 = 3.`

## Constraints

- `0 <= n <= 30`

## Approach

There are several approaches to solve the Fibonacci problem:
1. **Recursive Approach**: Simple but inefficient due to redundant calculations.
2. **Iterative Approach**: Efficient using a loop to build up the Fibonacci sequence.
3. **Dynamic Programming Approach**: Efficiently store computed results to avoid redundant calculations.

## Solution in different languages

### Solution in Python
```python
def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    
    prev1, prev2 = 0, 1
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev1, prev2 = prev2, current
    
    return prev2

# Example usage:
n = 4
print(fibonacci(n))  # Output: 3
```

### Solution in Java

```java
public class Solution {
    public int fibonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }
        
        int prev1 = 0, prev2 = 1;
        for (int i = 2; i <= n; i++) {
            int current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current;
        }
        
        return prev2;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int n = 4;
        System.out.println(solution.fibonacci(n));  // Output: 3
    }
}
```

### Solution in C++

```cpp
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    
    int prev1 = 0, prev2 = 1;
    for (int i = 2; i <= n; i++) {
        int current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    
    return prev2;
}

int main() {
    int n = 4;
    cout << fibonacci(n) << endl;  // Output: 3
    return 0;
}
```

### Solution in C

```c
#include <stdio.h>

int fibonacci(int n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    }
    
    int prev1 = 0, prev2 = 1;
    for (int i = 2; i <= n; i++) {
        int current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    
    return prev2;
}

int main() {
    int n = 4;
    printf("%d\n", fibonacci(n));  // Output: 3
    return 0;
}
```

### Solution in JavaScript

```javascript
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    
    let prev1 = 0, prev2 = 1;
    for (let i = 2; i <= n; i++) {
        let current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    
    return prev2;
}

// Example usage:
let n = 4;
console.log(fibonacci(n));  // Output: 3
```

## Step-by-Step Algorithm

1. **Base Cases**:
   - If \( n = 0 \), return 0.
   - If \( n = 1 \), return 1.
   
2. **Iterative Calculation**:
   - Initialize `prev1` to 0 and `prev2` to 1.
   - Iterate from 2 to n:
     - Calculate `current` as `prev1 + prev2`.
     - Update `prev1` to `prev2` and `prev2` to `current`.
   - After the loop, `prev2` contains the Fibonacci number for \( n \).

## Conclusion

The Fibonacci sequence can be efficiently computed using iterative or dynamic programming approaches to avoid redundant calculations. These methods provide a clear improvement over the naive recursive approach, especially for larger values of \( n \). The iterative approach is straightforward and runs in \( O(n) \) time complexity with \( O(1) \) space complexity, making it suitable for the given constraints \( 0 \leq n \leq 30 \).
