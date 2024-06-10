---
id: matrix-chain-multiplication
title: Matrix Chain Multiplication using Dynamic Programming
sidebar_label: Matrix Chain Multiplication
tags: [python, java, c++, javascript, programming, algorithms, dynamic programming, tutorial, in-depth]
description: In this tutorial, we will learn about the Matrix Chain Multiplication problem and its solution using Dynamic Programming in Python, Java, C++, and JavaScript with detailed explanations and examples.
---

# Matrix Chain Multiplication using Dynamic Programming

Matrix Chain Multiplication is a classic optimization problem that can be solved efficiently using dynamic programming. The goal is to determine the most efficient way to multiply a given sequence of matrices.

## Problem Statement

Given a sequence of matrices, find the optimal way to parenthesize the matrix product such that the total number of scalar multiplications is minimized.

### Intuition

Matrix multiplication is associative, meaning that the order of multiplication can affect the computation cost. Dynamic programming helps by breaking down the problem into subproblems, solving each subproblem just once, and storing the results.

## Dynamic Programming Approach

Using dynamic programming, we build a table `dp` where `dp[i][j]` represents the minimum number of scalar multiplications needed to compute the product of matrices from `i` to `j`.

## Pseudocode for Matrix Chain Multiplication using DP

#### Initialize:

```markdown
for i from 1 to n:
    dp[i][i] = 0

for len from 2 to n:
    for i from 1 to n-len+1:
        j = i+len-1
        dp[i][j] = inf
        for k from i to j-1:
            q = dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j]
            if q < dp[i][j]:
                dp[i][j] = q

return dp[1][n]
```
### Example Output:

Given the matrix dimensions:
- `p = [1, 2, 3, 4]`

The minimum number of multiplications required to multiply the sequence of matrices is `18`.

The matrix dimensions correspond to three matrices:
- A (1x2)
- B (2x3)
- C (3x4)

By following the dynamic programming approach, the optimal way to multiply these matrices requires `18` scalar multiplications. The output is printed as: `Minimum number of multiplications is: 18`

You can verify this by manually checking the optimal parenthesization: `((A * B) * C) requires (1*2*3) + (1*3*4) = 6 + 12 = 18` multiplications.


## Implementing Matrix Chain Multiplication using DP

### Python Implementation

```python
def matrix_chain_order(p):
    n = len(p) - 1  # Number of matrices
    dp = [[0 for _ in range(n)] for _ in range(n)]  # DP table initialization

    # l is the chain length
    for l in range(2, n + 1):  # l=2 means multiplying two matrices at a time
        for i in range(n - l + 1):
            j = i + l - 1
            dp[i][j] = float('inf')  # Initialize with infinity
            for k in range(i, j):
                # q = cost/scalar multiplications
                q = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1]
                if q < dp[i][j]:
                    dp[i][j] = q

    return dp[0][n - 1]  # Minimum cost to multiply all matrices

p = [1, 2, 3, 4]
print("Minimum number of multiplications is:", matrix_chain_order(p))
```

### Java Implementation

```java
public class MatrixChainMultiplication {
    public static int matrixChainOrder(int[] p) {
        int n = p.length - 1;  // Number of matrices
        int[][] dp = new int[n][n];  // DP table initialization

        // l is the chain length
        for (int l = 2; l <= n; l++) {  // l=2 means multiplying two matrices at a time
            for (int i = 0; i < n - l + 1; i++) {
                int j = i + l - 1;
                dp[i][j] = Integer.MAX_VALUE;  // Initialize with infinity
                for (int k = i; k < j; k++) {
                    // q = cost/scalar multiplications
                    int q = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                    if (q < dp[i][j]) {
                        dp[i][j] = q;
                    }
                }
            }
        }

        return dp[0][n - 1];  // Minimum cost to multiply all matrices
    }

    public static void main(String[] args) {
        int[] p = {1, 2, 3, 4};
        System.out.println("Minimum number of multiplications is: " + matrixChainOrder(p));
    }
}

```
### C++ Implementation

```cpp
#include <iostream>
#include <climits>
using namespace std;

int matrixChainOrder(int p[], int n) {
    int dp[n][n];  // DP table initialization

    // l is the chain length
    for (int i = 1; i < n; i++)
        dp[i][i] = 0;  // Cost is zero when multiplying one matrix

    for (int l = 2; l < n; l++) {  // l=2 means multiplying two matrices at a time
        for (int i = 1; i < n - l + 1; i++) {
            int j = i + l - 1;
            dp[i][j] = INT_MAX;  // Initialize with infinity
            for (int k = i; k <= j - 1; k++) {
                // q = cost/scalar multiplications
                int q = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (q < dp[i][j]) {
                    dp[i][j] = q;
                }
            }
        }
    }

    return dp[1][n - 1];  // Minimum cost to multiply all matrices
}

int main() {
    int p[] = {1, 2, 3, 4};
    int n = sizeof(p) / sizeof(p[0]);
    cout << "Minimum number of multiplications is: " << matrixChainOrder(p, n);
    return 0;
}
```

### JavaScript Implementation

```javascript
function matrixChainOrder(p) {
    let n = p.length - 1;  // Number of matrices
    let dp = Array.from({ length: n }, () => Array(n).fill(0));  // DP table initialization

    // l is the chain length
    for (let l = 2; l <= n; l++) {  // l=2 means multiplying two matrices at a time
        for (let i = 0; i < n - l + 1; i++) {
            let j = i + l - 1;
            dp[i][j] = Infinity;  // Initialize with infinity
            for (let k = i; k < j; k++) {
                // q = cost/scalar multiplications
                let q = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                if (q < dp[i][j]) {
                    dp[i][j] = q;
                }
            }
        }
    }

    return dp[0][n - 1];  // Minimum cost to multiply all matrices
}

let p = [1, 2, 3, 4];
console.log("Minimum number of multiplications is:", matrixChainOrder(p));
```

## Complexity Analysis

- Time Complexity: $O(n^3)$, due to the three nested loops.
- Space Complexity: $O(n^2)$, for storing the DP table.

## Conclusion

Dynamic programming provides an efficient solution for the Matrix Chain Multiplication problem by breaking it into subproblems and storing intermediate results. This technique can be extended to solve other problems with overlapping subproblems and optimal substructure properties.