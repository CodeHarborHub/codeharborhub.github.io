---
id: fibonacci-sequence
title: Fibonacci Sequence using Dynamic Programming
sidebar_label: Fibonacci Sequence
tags: [python, java, c++, javascript, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Fibonacci sequence and its implementation using Dynamic Programming in Python, Java, C++, and JavaScript with detailed explanations and examples.
---  

# Fibonacci Sequence using Dynamic Programming

The Fibonacci sequence is a classic example that can be efficiently solved using dynamic programming. The Fibonacci sequence is defined as:
$[ F(n) = F(n-1) + F(n-2) ]$
with the base cases:
$[ F(0) = 0, F(1) = 1 ]$

## Problem Statement

Given an integer (n), compute the (n)-th Fibonacci number.

### Intuition

The Fibonacci sequence can be computed using a naive recursive approach, but this results in exponential time complexity due to repeated calculations of the same values. Dynamic Programming (DP) offers a more efficient solution by storing previously computed values.

## Naive Recursive Approach
The naive approach to calculating the Fibonacci sequence uses a simple recursive function which calls recursivly and has exponential time complexity.

```python
def fibonacci_recursive(n):
    if n <= 1:
        return n
    return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
```

## Dynamic Programming Approach

Using DP, we store the results of subproblems to avoid redundant computations. This reduces the time complexity to $O(n)$. The dynamic programming (DP) approach solves the problem more efficiently by storing intermediate results to avoid redundant calculations

### Bottom-Up Approach

We iteratively compute the Fibonacci numbers from the bottom up, storing intermediate results.

## Pseudocode for Fibonacci using DP

#### Initialize:

```markdown
dp[0] = 0
dp[1] = 1

Loop from 2 to n:
dp[i] = dp[i-1] + dp[i-2]

return dp[n]
```
## Implementing Fibonacci using DP

### Python Implementation

```python
def fibonacci_dp(n):
    # Base cases
    if n <= 1:
        return n
    
    # Initialize an array to store Fibonacci numbers
    dp = [0] * (n + 1)
    
    # Base values
    dp[0] = 0
    dp[1] = 1
    
    # Calculate Fibonacci numbers from bottom-up
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]
```

### Java Implementation

```java
public class Fibonacci {
    public static int fibonacci_dp(int n) {
        // Base cases
        if (n <= 1) return n;
        
        // Initialize an array to store Fibonacci numbers
        int[] dp = new int[n + 1];
        
        // Base values
        dp[0] = 0;
        dp[1] = 1;
        
        // Calculate Fibonacci numbers from bottom-up
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
    }

    public static void main(String[] args) {
        int n = 10;
        System.out.println("Fibonacci number at position " + n + " is: " + fibonacci_dp(n));
    }
}
```
### C++ Implementation

```cpp
#include <iostream>
using namespace std;

int fibonacci_dp(int n) {
    // Base cases
    if (n <= 1) return n;
    
    // Initialize an array to store Fibonacci numbers
    int dp[n + 1];
    
    // Base values
    dp[0] = 0;
    dp[1] = 1;
    
    // Calculate Fibonacci numbers from bottom-up
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

int main() {
    int n = 10;
    cout << "Fibonacci number at position " << n << " is: " << fibonacci_dp(n) << endl;
    return 0;
}
```

### JavaScript Implementation

```javascript
function fibonacci_dp(n) {
    // Base cases
    if (n <= 1) return n;
    
    // Initialize an array to store Fibonacci numbers
    let dp = new Array(n + 1).fill(0);
    
    // Base values
    dp[0] = 0;
    dp[1] = 1;
    
    // Calculate Fibonacci numbers from bottom-up
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}

let n = 10;
console.log("Fibonacci number at position " + n + " is: " + fibonacci_dp(n));
```

## Complexity Analysis

- Time Complexity: $O(n)$, since we are iterating from 2 to n.
- Space Complexity: $O(n)$, due to the array used for storing intermediate results. This can be optimized to $O(1)$ by only storing the last two values.

## Conclusion

Dynamic programming provides an efficient solution for computing Fibonacci numbers by reducing redundant calculations and storing intermediate results. This technique can be extended to solve other problems with overlapping subproblems and optimal substructure properties.