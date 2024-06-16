---
id: spiral-matrix
title: Spiral Matrix
sidebar_label: 0054-Spiral-Matrix
tags:
- Array
- Matrix
- Simulation
- C++
- Java
- Python
description: "This document provides a solution to the Spiral Matrix problem, where the goal is to traverse a matrix in spiral order."
---

## Problem

Given an `m x n` matrix, return all elements of the matrix in spiral order.

### Example 1:

Input:
matrix = [
[ 1, 2, 3 ],
[ 4, 5, 6 ],
[ 7, 8, 9 ]
]

Output:
[1, 2, 3, 6, 9, 8, 7, 4, 5]

### Example 2:

Input:
matrix = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]
]

Output:
[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

### Constraints:

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 10`
- `-100 <= matrix[i][j] <= 100`

## Solution

To solve this problem, we need to simulate the traversal of the matrix in spiral order. We can define four boundaries to keep track of the rows and columns that we have already traversed: `top`, `bottom`, `left`, and `right`. We start at the top-left corner and move in the following order:

1. Traverse from left to right.
2. Traverse downwards.
3. Traverse from right to left.
4. Traverse upwards.

We continue this process while adjusting the boundaries until all elements have been traversed.

### Step-by-Step Approach

1. Initialize `top`, `bottom`, `left`, and `right` boundaries.
2. Use a loop to traverse the matrix until all elements are visited:
   - Traverse from left to right within the `top` boundary and increment `top`.
   - Traverse downwards within the `right` boundary and decrement `right`.
   - Traverse from right to left within the `bottom` boundary and decrement `bottom`.
   - Traverse upwards within the `left` boundary and increment `left`.

### Code in Different Languages

### C++ Solution

```cpp

#include <vector>
using namespace std;

vector<int> spiralOrder(vector<vector<int>>& matrix) {
    if (matrix.empty()) return {};

    int m = matrix.size(), n = matrix[0].size();
    vector<int> result;
    int top = 0, bottom = m - 1;
    int left = 0, right = n - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (int i = left; i <= right; ++i) {
            result.push_back(matrix[top][i]);
        }
        ++top;

        // Traverse downwards
        for (int i = top; i <= bottom; ++i) {
            result.push_back(matrix[i][right]);
        }
        --right;

        if (top <= bottom) {
            // Traverse from right to left
            for (int i = right; i >= left; --i) {
                result.push_back(matrix[bottom][i]);
            }
            --bottom;
        }

        if (left <= right) {
            // Traverse upwards
            for (int i = bottom; i >= top; --i) {
                result.push_back(matrix[i][left]);
            }
            ++left;
        }
    }

    return result;
}

int main() {
    vector<vector<int>> matrix = {
        {1, 2, 3, 4},
        {5, 6, 7, 8},
        {9, 10, 11, 12}
    };
    vector<int> result = spiralOrder(matrix);
    for (int num : result) {
        cout << num << " ";
    }
    return 0;
}
</TabItem>
```
### JAVA Solution
```java
import java.util.ArrayList;
import java.util.List;

public class SpiralMatrix {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if (matrix.length == 0) return result;

        int top = 0, bottom = matrix.length - 1;
        int left = 0, right = matrix[0].length - 1;

        while (top <= bottom && left <= right) {
            for (int i = left; i <= right; i++) {
                result.add(matrix[top][i]);
            }
            top++;

            for (int i = top; i <= bottom; i++) {
                result.add(matrix[i][right]);
            }
            right--;

            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    result.add(matrix[bottom][i]);
                }
                bottom--;
            }

            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    result.add(matrix[i][left]);
                }
                left++;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        SpiralMatrix sm = new SpiralMatrix();
        int[][] matrix = {
            {1, 2, 3, 4},
            {5, 6, 7, 8},
            {9, 10, 11, 12}
        };
        System.out.println(sm.spiralOrder(matrix)); // Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
    }
}

```
### Python Solution

```python
  def spiralOrder(matrix):
    if not matrix:
        return []

    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1

    while top <= bottom and left <= right:
        # Traverse from left to right
        for i in range(left, right + 1):
            result.append(matrix[top][i])
        top += 1

        # Traverse downwards
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1

        if top <= bottom:
            # Traverse from right to left
            for i in range(right, left - 1, -1):
                result.append(matrix[bottom][i])
            bottom -= 1

        if left <= right:
            # Traverse upwards
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1

    return result

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
print(spiralOrder(matrix))  # Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

```

###  Complexity Analysis
#### Time Complexity: O(m * n)
>Reason: We visit every element in the matrix exactly once.

**Space Complexity:** O(1)
>Reason: We only use a fixed amount of extra space, regardless of the input size.
### References
**LeetCode Problem:** Spiral Matrix


