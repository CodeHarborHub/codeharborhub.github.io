---
id: range-sum-query-2d-immutable
title: Range Sum Query 2D - Immutable (LeetCode)
sidebar_label: 0304-RangeSumQuery2DImmutable
---

## Problem Description

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Merge Two Sorted Lists](https://leetcode.com/problems/range-sum-query-2d-immutable/) | [Merge Two Sorted Lists Solution on LeetCode](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/) |  [VijayShankerSharma](https://leetcode.com/u/darkknight648/) |

## Problem Description

Given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Implement the NumMatrix class:

- NumMatrix(int[][] matrix): Initializes the object with the integer matrix matrix.
- int sumRegion(int row1, int col1, int row2, int col2): Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

You must design an algorithm where sumRegion works in $O(1)$ time complexity.

### Example

#### Example 1:

**Input:**
["NumMatrix", "sumRegion", "sumRegion", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1,5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [1, 1, 2, 2], [1, 2, 2, 4]]

**Output:**
[null, 8, 11, 12]

**Explanation:**
NumMatrix numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3); // return 8 (i.e sum of the red rectangle)
numMatrix.sumRegion(1, 1, 2, 2); // return 11 (i.e sum of the green rectangle)
numMatrix.sumRegion(1, 2, 2, 4); // return 12 (i.e sum of the blue rectangle)

### Constraints

- $m == \text{matrix.length}$
- $n == \text{matrix[i].length}$
- $1 <= m, n <= 200$
- $-10^4 <= \text{matrix[i][j]} <= 10^4$
- $0 <= \text{row1} <= \text{row2} < m$
- $0 <= \text{col1} <= \text{col2} < n$
- At most $10^4$ calls will be made to sumRegion.

## Approach

To achieve $O(1)$ time complexity for sumRegion, we can precompute the cumulative sum matrix. The cumulative sum matrix cumSum stores the sum of elements from (0, 0) to (i, j) in the original matrix.

### Implementation Steps:

1. Initialize a 2D array cumSum of the same dimensions as the input matrix.
2. Initialize the first row and column of cumSum:
   - cumSum[0][0] = matrix[0][0]
   - For the first row, cumSum[0][j] = cumSum[0][j-1] + matrix[0][j]
   - For the first column, cumSum[i][0] = cumSum[i-1][0] + matrix[i][0]
3. Populate the rest of cumSum using the formula:
   - cumSum[i][j] = cumSum[i-1][j] + cumSum[i][j-1] - cumSum[i-1][j-1] + matrix[i][j]
4. To calculate the sum between (row1, col1) and (row2, col2):
   - Get the sums from cumSum at (row2, col2), (row1-1, col2), (row2, col1-1), and (row1-1, col1-1).
   - Subtract the sum at (row1-1, col2) and (row2, col1-1), and add the sum at (row1-1, col1-1) to get the sum of the required region.

## Solution Code

#### Python

```py
class NumMatrix:
    def __init__(self, matrix):
        if not matrix or not matrix[0]:
            self.dp = None
            return
        
        m, n = len(matrix), len(matrix[0])
        self.dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Calculate cumulative sums
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                self.dp[i][j] = matrix[i - 1][j - 1] + self.dp[i - 1][j] + self.dp[i][j - 1] - self.dp[i - 1][j - 1]

    def sumRegion(self, row1, col1, row2, col2):
        if not self.dp:
            return 0
        
        return self.dp[row2 + 1][col2 + 1] - self.dp[row1][col2 + 1] - self.dp[row2 + 1][col1] + self.dp[row1][col1]
```

#### Java

```java
class NumMatrix {
    int[][] cumulativeSum;

    public NumMatrix(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            cumulativeSum = new int[1][1];
            return;
        }
        int m = matrix.length;
        int n = matrix[0].length;
        cumulativeSum = new int[m + 1][n + 1];
        
        // Calculate cumulative sums
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                cumulativeSum[i][j] = matrix[i - 1][j - 1] +
                                      cumulativeSum[i - 1][j] +
                                      cumulativeSum[i][j - 1] -
                                      cumulativeSum[i - 1][j - 1];
            }
        }
    }
    public int sumRegion(int row1, int col1, int row2, int col2) {
        return cumulativeSum[row2 + 1][col2 + 1] -
               cumulativeSum[row1][col2 + 1] -
               cumulativeSum[row2 + 1][col1] +
               cumulativeSum[row1][col1];
    }
}

```

#### C++

```cpp
#include <vector>

class NumMatrix {
private:
    std::vector<std::vector<int>> cumulativeSum;

public:
    NumMatrix(std::vector<std::vector<int>>& matrix) {
        if (matrix.empty() || matrix[0].empty()) {
            cumulativeSum = {{0}};
            return;
        }  
        int m = matrix.size();
        int n = matrix[0].size();
        cumulativeSum = std::vector<std::vector<int>>(m + 1, std::vector<int>(n + 1, 0));    
        // Calculate cumulative sums
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                cumulativeSum[i][j] = matrix[i - 1][j - 1] +
                                      cumulativeSum[i - 1][j] +
                                      cumulativeSum[i][j - 1] -
                                      cumulativeSum[i - 1][j - 1];
            }
        }
    }
    int sumRegion(int row1, int col1, int row2, int col2) {
        return cumulativeSum[row2 + 1][col2 + 1] -
               cumulativeSum[row1][col2 + 1] -
               cumulativeSum[row2 + 1][col1] +
               cumulativeSum[row1][col1];
    }
};
```

## Conclusion

The "Range Sum Query 2D - Immutable" problem can be efficiently solved using a precomputed cumulative sum matrix. By computing the cumulative sum of elements up to each index in the matrix, we can handle multiple queries of summing elements inside a rectangular region in $O(1)$ time complexity. The provided solution code implements this approach in Python, Java, and C++, providing an optimal solution to the problem.