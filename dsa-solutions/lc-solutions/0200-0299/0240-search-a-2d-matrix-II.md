---

id: search-a-2d-matrix-II
title: Search a 2D Matrix II
difficulty: Medium
sidebar_label: 0240-Search-a-2D-Matrix-II
tags:
  - Binary Search
  - Divide and Conquer
  - LeetCode Medium
---

## Problem Description
Write an efficient algorithm that searches for a target value in an `m x n` integer matrix. The matrix has the following properties:
- Integers in each row are sorted in ascending order from left to right.
- Integers in each column are sorted in ascending order from top to bottom.

### Example
**Example 1:**
![Example Matrix](https://assets.leetcode.com/uploads/2020/11/24/searchgrid2.jpg)
```plaintext
Input: matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], target = 5
Output: true
```

**Example 2:**
![Example Matrix](https://assets.leetcode.com/uploads/2020/11/24/searchgrid.jpg)
```plaintext
Input: matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], target = 20
Output: false
```

### Constraints
- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 300`
- `-10^9 <= matrix[i][j] <= 10^9`
- All the integers in each row and column are sorted in ascending order.

## Solution Approach

### Approach Overview
The matrix has a special property: elements are sorted both row-wise and column-wise. This allows for an efficient search using a modified binary search approach.

### Detailed Steps

1. **Binary Search Start**:
   - Begin with the top-right element of the matrix (`matrix[0][n-1]`). This element acts as a pivot where all elements to its left are smaller, and all elements below it are larger.

2. **Search Mechanism**:
   - Start from the top-right element.
   - If the target is less than the current element, move left (decrease column index).
   - If the target is greater than the current element, move down (increase row index).
   - Repeat this until the target is found or all elements are exhausted.

3. **Algorithm Efficiency**:
   - Each move either reduces the row or column size by `1`, leading to a time complexity of `O(m + n)`, where `m` is the number of rows and `n` is the number of columns.

## Code Examples

### Python
```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        if not matrix or not matrix[0]:
            return False
        
        m, n = len(matrix), len(matrix[0])
        row, col = 0, n - 1
        
        while row < m and col >= 0:
            if matrix[row][col] == target:
                return True
            elif matrix[row][col] < target:
                row += 1
            else:
                col -= 1
        
        return False
```

### C++
```cpp
class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if (matrix.empty() || matrix[0].empty()) {
            return false;
        }
        
        int m = matrix.size();
        int n = matrix[0].size();
        
        int row = 0;
        int col = n - 1;
        
        while (row < m && col >= 0) {
            if (matrix[row][col] == target) {
                return true;
            } else if (matrix[row][col] < target) {
                row++;
            } else {
                col--;
            }
        }
        
        return false;
    }
};
```

### Java
```java
class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }
        
        int m = matrix.length;
        int n = matrix[0].length;
        
        int row = 0, col = n - 1;
        
        while (row < m && col >= 0) {
            if (matrix[row][col] == target) {
                return true;
            } else if (matrix[row][col] < target) {
                row++;
            } else {
                col--;
            }
        }
        
        return false;
    }
}
```

### C
```c
#include <stdbool.h>

bool searchMatrix(int** matrix, int matrixSize, int* matrixColSize, int target){
    if (matrix == NULL || matrixSize == 0 || matrixColSize == NULL || *matrixColSize == 0) {
        return false;
    }
    
    int m = matrixSize;
    int n = *matrixColSize;
    
    int row = 0, col = n - 1;
    
    while (row < m && col >= 0) {
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            col--;
        }
    }
    
    return false;
}
```

## Complexity

- **Time Complexity**: `O(m + n)`, where `m` is the number of rows and `n` is the number of columns in the matrix.
- **Space Complexity**: `O(1)`, as no extra space is used beyond a few integer variables.

