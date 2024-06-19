---
id: set-matrix-zeros
title: Set Matrix Zeros
difficulty: Medium
sidebar_label: 0073-SetMatrixZeros
tags:
  - Array
  - Hash Table
  - Matrix
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Set Matrix Zeros](https://leetcode.com/problems/set-matrix-zeroes/description/) | [Set Matrix Zeros Solution on LeetCode](https://leetcode.com/problems/set-matrix-zeroes/solutions/) |  [Leetcode Profile](https://leetcode.com/u/debangi_29/) |

## Problem Description

Given an $m \times n$ integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

### Examples

#### Example 1:

**Input**: 
```
Matrix = [[1,1,1],[1,0,1],[1,1,1]]
```

**Output**: 
```
[[1,0,1],[0,0,0],[1,0,1]]
```

#### Example 2:
**Input**: 
```
matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
```

**Output**:
```
[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```


### Constraints

- $m = \text {matrix.length}$
- $n = \text {matrix[0].length}$
- $1 \leq m, n \leq 200$
- $-2^{31} \leq \text {matrix[i][j]} \leq 2^{31} - 1$

### Approach

The steps are as follows:

- First, we will traverse the matrix and mark the proper cells of 1st row and 1st column with 0 accordingly. The marking will be like this: if cell(i, j) contains 0, we will mark the i-th row i.e. matrix[i][0] with 0 and we will mark j-th column i.e. matrix[0][j] with 0.
If i is 0, we will mark matrix[0][0] with 0 but if j is 0, we will mark the col0 variable with 0 instead of marking matrix[0][0] again.

- After step 1 is completed, we will modify the cells from (1,1) to (n-1, m-1) using the values from the 1st row, 1st column, and col0 variable.
We will not modify the 1st row and 1st column of the matrix here as the modification of the rest of the matrix(i.e. From (1,1) to (n-1, m-1)) is dependent on that row and column.

- Finally, we will change the 1st row and column using the values from matrix[0][0] and col0 variable. Here also we will change the row first and then the column.
If matrix[0][0] = 0, we will change all the elements from the cell (0,1) to (0, m-1), to 0.
If col0 = 0, we will change all the elements from the cell (0,0) to (n-1, 0), to 0.

### Solution Code

#### Python

```
class Solution:
  def setZeroes(self, matrix: List[List[int]]) -> None:
    m = len(matrix)
    n = len(matrix[0])
    shouldFillFirstRow = 0 in matrix[0]
    shouldFillFirstCol = 0 in list(zip(*matrix))[0]

    # Store the information in the first row and the first column.
    for i in range(1, m):
      for j in range(1, n):
        if matrix[i][j] == 0:
          matrix[i][0] = 0
          matrix[0][j] = 0

    # Fill 0s for the matrix except the first row and the first column.
    for i in range(1, m):
      for j in range(1, n):
        if matrix[i][0] == 0 or matrix[0][j] == 0:
          matrix[i][j] = 0

    # Fill 0s for the first row if needed.
    if shouldFillFirstRow:
      matrix[0] = [0] * n

    # Fill 0s for the first column if needed.
    if shouldFillFirstCol:
      for row in matrix:
        row[0] = 0

```

#### Java

```
class Solution {
  public void setZeroes(int[][] matrix) {
    final int m = matrix.length;
    final int n = matrix[0].length;
    boolean shouldFillFirstRow = false;
    boolean shouldFillFirstCol = false;

    for (int j = 0; j < n; ++j)
      if (matrix[0][j] == 0) {
        shouldFillFirstRow = true;
        break;
      }

    for (int i = 0; i < m; ++i)
      if (matrix[i][0] == 0) {
        shouldFillFirstCol = true;
        break;
      }

    // Store the information in the first row and the first column.
    for (int i = 1; i < m; ++i)
      for (int j = 1; j < n; ++j)
        if (matrix[i][j] == 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }

    // Fill 0s for the matrix except the first row and the first column.
    for (int i = 1; i < m; ++i)
      for (int j = 1; j < n; ++j)
        if (matrix[i][0] == 0 || matrix[0][j] == 0)
          matrix[i][j] = 0;

    // Fill 0s for the first row if needed.
    if (shouldFillFirstRow)
      for (int j = 0; j < n; ++j)
        matrix[0][j] = 0;

    // Fill 0s for the first column if needed.
    if (shouldFillFirstCol)
      for (int i = 0; i < m; ++i)
        matrix[i][0] = 0;
  }
}
```

#### C++

```
class Solution {
 public:
  void setZeroes(vector<vector<int>>& matrix) {
    const int m = matrix.size();
    const int n = matrix[0].size();
    bool shouldFillFirstRow = false;
    bool shouldFillFirstCol = false;

    for (int j = 0; j < n; ++j)
      if (matrix[0][j] == 0) {
        shouldFillFirstRow = true;
        break;
      }

    for (int i = 0; i < m; ++i)
      if (matrix[i][0] == 0) {
        shouldFillFirstCol = true;
        break;
      }

    // Store the information in the first row and the first column.
    for (int i = 1; i < m; ++i)
      for (int j = 1; j < n; ++j)
        if (matrix[i][j] == 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }

    // Fill 0s for the matrix except the first row and the first column.
    for (int i = 1; i < m; ++i)
      for (int j = 1; j < n; ++j)
        if (matrix[i][0] == 0 || matrix[0][j] == 0)
          matrix[i][j] = 0;

    // Fill 0s for the first row if needed.
    if (shouldFillFirstRow)
      for (int j = 0; j < n; ++j)
        matrix[0][j] = 0;

    // Fill 0s for the first column if needed.
    if (shouldFillFirstCol)
      for (int i = 0; i < m; ++i)
        matrix[i][0] = 0;
  }
};

```

### Conclusion

- Time Complexity: $O(2*(N*M))$, where N = no. of rows in the matrix and M = no. of columns in the matrix.

  Reason: In this approach, we are also traversing the entire matrix 2 times and each traversal is taking $O(N*M)$ time complexity.

- Space Complexity: $O(1)$ as we are not using any extra space.
