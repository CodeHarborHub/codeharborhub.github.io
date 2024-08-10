---
id: transpose-of-matrix
title: Transpose Of Matrix
sidebar_label: Transpose-Of-Matrix
tags:
  - Matrix
  - Data Structure
description: "This tutorial covers the solution to the Transpose of Matrix problem from the GeeksforGeeks."
---
## Problem Description

Write a program to find the transpose of a square matrix of size `N*N`. Transpose of a matrix is obtained by changing rows to columns and columns to rows.

## Examples

**Example 1:**

```
Input:
N = 4
mat[][] = {{1, 1, 1, 1},
           {2, 2, 2, 2}
           {3, 3, 3, 3}
           {4, 4, 4, 4}}
Output: 
{{1, 2, 3, 4},  
 {1, 2, 3, 4}  
 {1, 2, 3, 4}
 {1, 2, 3, 4}} 
```

**Example 2:**

```
Input:
N = 2
mat[][] = {{1, 2},
           {-9, -2}}
Output:
{{1, -9}, 
 {2, -2}}
```

## Your Task
You dont need to read input or print anything. Complete the function transpose() which takes matrix[][] and N as input parameter and finds the transpose of the input matrix. You need to do this in-place. That is you need to update the original matrix with the transpose. 


## Constraints

* `-10^9 <= mat[i][j] <= 10^9`

## Problem Explanation

The task is to traverse the matrix and transpose it.

## Code Implementation

### C++ Solution

```cpp

#include <vector>
#include <algorithm>

std::vector<std::vector<int>> transposeMatrix(const std::vector<std::vector<int>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();
    std::vector<std::vector<int>> transpose(cols, std::vector<int>(rows));
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            transpose[j][i] = matrix[i][j];
        }
    }
    return transpose;
}
```

```java
public static int[][] transposeMatrix(int[][] matrix) {
    int rows = matrix.length;
    int cols = matrix[0].length;
    int[][] transpose = new int[cols][rows];
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            transpose[j][i] = matrix[i][j];
        }
    }
    return transpose;
}


```

```python

def transpose_matrix(matrix):
    return list(zip(*matrix))

```

```javascript
function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

```

## Solution Logic:

1. Create an empty matrix (2D array) to store the transposed matrix.
2. Iterate through the original matrix:
    - For each element in the original matrix, swap its row and column indices to get the corresponding element in the transposed matrix.
    - Assign the value of the original element to the transposed element.
3. Return the transposed matrix.


## Time Complexity

* The time complexity is $O(n*m)$ as  where n is the number of rows in the matrix and m is the number of columns. This is because the solution iterates through each element in the matrix once.


## Space Complexity

* The space complexity of the solution is O(n*m), where n is the number of rows in the matrix and m is the number of columns. This is because the solution creates a new matrix to store the transposed matrix, which has the same size as the original matrix.