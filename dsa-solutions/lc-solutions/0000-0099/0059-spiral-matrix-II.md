---
id: spiral-matrix-II
title: Spiral Matrix II(LeetCode)
sidebar_label: 0059-Spiral Matrix II
tags:
  - Array
  - Matric
  - Simulation
description: Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
---

## Problem Statement

Given a positive integer `n`, generate an `n x n` matrix filled with elements from `1` to `n2` in spiral order.

### Examples

**Example 1:**

![image](https://github.com/PradnyaGaitonde/codeharborhub.github.io/assets/116059908/946cfd25-b503-4cce-8d8d-b8dca3f91631)

```plaintext
Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
```

**Example 2:**

```plaintext
Input: n = 1
Output: [[1]]
```

### Constraints

- `1 <= n <= 20`

## Solution

Generating a spiral matrix is an interesting problem that involves filling a matrix in a spiral order. Here, we will discuss three solutions: building the matrix inside-out using two different approaches and walking the spiral path.

### Approach 1: Build it Inside-Out

#### Algorithm

1. Initialize an empty list `A` and set `lo` to `n*n + 1`.
2. While `lo > 1`:
* Calculate `lo` and `hi`.
* Add a new row of numbers ranging from `lo` to `hi` to `A`.
* Rotate `A` clockwise by using `zip` and list slicing.
3. Return the constructed matrix `A`.

#### Implementation

```Python
def generateMatrix(self, n):
    A, lo = [], n*n+1
    while lo > 1:
        lo, hi = lo - len(A), lo
        A = [range(lo, hi)] + list(zip(*A[::-1]))
    return A
```

### Complexity Analysis

- **Time complexity**: $O(N^2)$
- **Space complexity**: $O(N^2)$

### Approach 2: Ugly Inside-Out

#### Algorithm

1. Initialize `A` with a single element `n*n`.
2. While the first element of `A` is greater than 1:
* Add a new row of numbers from `A[0][0] - len(A)` to `A[0][0]`.
* Rotate `A` clockwise by using `zip` and list slicing.
3. Return `A` multiplied by `(n > 0)` to handle the `n=0` case.
  
#### Implementation 

```Python
def generateMatrix(self, n):
    A = [[n*n]]
    while A[0][0] > 1:
        A = [range(A[0][0] - len(A), A[0][0])] + list(zip(*A[::-1]))
    return A * (n > 0)

```

### Complexity Analysis

- **Time complexity**: $O(N^2)$
- **Space complexity**: $O(N^2)$
  
### Approach 3: Walk the Spiral

#### Algorithm

1. Initialize the matrix `A` with zeros.
2. Set the initial position and direction.
3. For each number from 1 to `n*n`:
* Fill the current cell with the current number.
* Check if the next cell in the current direction is out of bounds or already filled.
* If so, change the direction.
* Move to the next cell.
4. Return the filled matrix `A`.

#### Implementation 

```Python
def generateMatrix(self, n):
    A = [[0] * n for _ in range(n)]
    i, j, di, dj = 0, 0, 0, 1
    for k in range(n*n):
        A[i][j] = k + 1
        if A[(i + di) % n][(j + dj) % n]:
            di, dj = dj, -di
        i += di
        j += dj
    return A
```

### Complexity Analysis

- **Time complexity**: $O(N^2)$
- **Space complexity**: $O(N^2)$

### Conclusion

All three solutions effectively generate a spiral matrix, with varying approaches and code readability. The inside-out solutions (Solutions 1 and 2) leverage matrix rotation and range operations, while the spiral walk solution (Solution 3) explicitly manages the matrix and directions to fill the numbers. Each approach has its own merits and can be chosen based on preference for readability and code complexity.
