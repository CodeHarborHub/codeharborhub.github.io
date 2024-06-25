---
id: modify-the-matrix
title: Modify the Matrix (LeetCode)
sidebar_label: 3033-ModifyTheMatrix
tags:
  - Matrix
  - Array
description: Modify a matrix by replacing each element with the value -1 with the maximum element in its respective column.
sidebar_position: 3033
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Modify the Matrix](https://leetcode.com/problems/modify-the-matrix/) | [Modify the Matrix Solution on LeetCode](https://leetcode.com/problems/modify-the-matrix/solutions/) | [vaishu_1904](https://leetcode.com/u/vaishu_1904/) |

## Problem Description

Given a 0-indexed m x n integer matrix matrix, create a new 0-indexed matrix called answer. Make answer equal to matrix, then replace each element with the value -1 with the maximum element in its respective column.

Return the matrix answer.

### Example 1

- **Input:** `matrix = [[1,2,-1],[4,-1,6],[7,8,9]]`
- **Output:** `[[1,2,9],[4,8,6],[7,8,9]]`
- **Explanation:** The diagram above shows the elements that are changed (in blue).
  - We replace the value in the cell [1][1] with the maximum value in the column 1, that is 8.
  - We replace the value in the cell [0][2] with the maximum value in the column 2, that is 9.

### Example 2

- **Input:** `matrix = [[3,-1],[5,2]]`
- **Output:** `[[3,2],[5,2]]`
- **Explanation:** The diagram above shows the elements that are changed (in blue).

### Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `2 <= m, n <= 50`
- `-1 <= matrix[i][j] <= 100`
- The input is generated such that each column contains at least one non-negative integer.

## Approach

To solve this problem, we need to replace each occurrence of `-1` in the matrix with the maximum value in its respective column. Here are the steps:

1. Traverse each column of the matrix to find the maximum value.
2. Traverse the matrix again to replace each `-1` with the corresponding column maximum value.

### Solution Code

#### Python

```python
class Solution:
    def modifiedMatrix(self, matrix: List[List[int]]) -> List[List[int]]:
        m, n = len(matrix), len(matrix[0])
        col_max = [max(matrix[i][j] for i in range(m) if matrix[i][j] != -1) for j in range(n)]
        
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == -1:
                    matrix[i][j] = col_max[j]
        
        return matrix
```

#### C++
```c++
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> modifiedMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(), n = matrix[0].size();
        vector<int> colMax(n, INT_MIN);
        
        for (int j = 0; j < n; ++j) {
            for (int i = 0; i < m; ++i) {
                if (matrix[i][j] != -1) {
                    colMax[j] = max(colMax[j], matrix[i][j]);
                }
            }
        }
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (matrix[i][j] == -1) {
                    matrix[i][j] = colMax[j];
                }
            }
        }
        
        return matrix;
    }
};

```

#### Java
```java
class Solution {
    public int[][] modifiedMatrix(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        int[] colMax = new int[n];
        Arrays.fill(colMax, Integer.MIN_VALUE);
        
        for (int j = 0; j < n; ++j) {
            for (int i = 0; i < m; ++i) {
                if (matrix[i][j] != -1) {
                    colMax[j] = Math.max(colMax[j], matrix[i][j]);
                }
            }
        }
        
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (matrix[i][j] == -1) {
                    matrix[i][j] = colMax[j];
                }
            }
        }
        
        return matrix;
    }
}

```

### Conclusion
The solutions traverse the matrix twice to efficiently find the maximum values for each column and 
then replace the -1 values. This approach ensures that the problem is solved in a straightforward 
and efficient manner across different programming languages.