---
id: Spiral-Matrix-Search
title: Spiral Matrix Search
sidebar_label: Spiral Matrix Search
tags:
  - Advanced
  - Search Algorithms
  - Matrix
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Spiral Matrix Search problem."
---

## What is Spiral Matrix Search?

Spiral Matrix Search is a search algorithm designed to search for a target element in a 2D matrix by traversing the matrix in a spiral order. The traversal starts from the top-left corner and proceeds in a spiral (clockwise) fashion until the entire matrix is covered or the target element is found.

## Algorithm Steps

1. **Initialization**:
   - Start from the top-left corner of the matrix.
   - Define boundaries: `top`, `bottom`, `left`, and `right`.

2. **Spiral Traversal**:
   - Move from left to right across the topmost untraversed row.
   - Move from top to bottom down the rightmost untraversed column.
   - Move from right to left across the bottommost untraversed row.
   - Move from bottom to top up the leftmost untraversed column.
   - Adjust the boundaries accordingly after each move.

3. **Check Element**:
   - At each position during the traversal, check if the current element matches the target.
   - If a match is found, return the coordinates of the target element.

4. **End Condition**:
   - The traversal continues until the entire matrix is covered or the target element is found.

## Complexity Analysis

- **Time Complexity**: \( O(n) \) where \( n \) is the total number of elements in the matrix. Each element is visited exactly once.
- **Space Complexity**: \( O(1) \) as no extra space is used other than variables for traversal and boundaries.

## Example

Given a 2D matrix:

matrix = [
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]
]

target = 7


Using Spiral Matrix Search:

- Start from the top-left corner: `matrix[0][0]`.
- Traverse in a spiral order until the target `7` is found.

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
def spiral_matrix_search(matrix, target):
    if not matrix or not matrix[0]:
        return None
    
    rows, cols = len(matrix), len(matrix[0])
    top, bottom, left, right = 0, rows - 1, 0, cols - 1
    
    while top <= bottom and left <= right:
        # Traverse from left to right
        for col in range(left, right + 1):
            if matrix[top][col] == target:
                return (top, col)
        top += 1
        
        # Traverse from top to bottom
        for row in range(top, bottom + 1):
            if matrix[row][right] == target:
                return (row, right)
        right -= 1
        
        # Traverse from right to left
        if top <= bottom:
            for col in range(right, left - 1, -1):
                if matrix[bottom][col] == target:
                    return (bottom, col)
            bottom -= 1
        
        # Traverse from bottom to top
        if left <= right:
            for row in range(bottom, top - 1, -1):
                if matrix[row][left] == target:
                    return (row, left)
            left += 1
    
    return None

# Example usage:
matrix = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9,  10, 11, 12],
  [13, 14, 15, 16]
]
target = 7

result = spiral_matrix_search(matrix, target)
if result:
    print(f"Target {target} found at position: {result}")
else:
    print(f"Target {target} not found in the matrix")
```

 </TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>

std::pair<int, int> spiral_matrix_search(std::vector<std::vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return {-1, -1};
    
    int rows = matrix.size();
    int cols = matrix[0].size();
    int top = 0, bottom = rows - 1;
    int left = 0, right = cols - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (int col = left; col <= right; ++col) {
            if (matrix[top][col] == target) return {top, col};
        }
        top++;
        
        // Traverse from top to bottom
        for (int row = top; row <= bottom; ++row) {
            if (matrix[row][right] == target) return {row, right};
        }
        right--;
        
        // Traverse from right to left
        if (top <= bottom) {
            for (int col = right; col >= left; --col) {
                if (matrix[bottom][col] == target) return {bottom, col};
            }
            bottom--;
        }
        
        // Traverse from bottom to top
        if (left <= right) {
            for (int row = bottom; row >= top; --row) {
                if (matrix[row][left] == target) return {row, left};
            }
            left++;
        }
    }
    
    return {-1, -1};
}

int main() {
    std::vector<std::vector<int>> matrix = {
        {1,  2,  3,  4},
        {5,  6,  7,  8},
        {9,  10, 11, 12},
        {13, 14, 15, 16}
    };
    int target = 7;
    
    std::pair<int, int> result = spiral_matrix_search(matrix, target);
    if (result.first != -1) {
        std::cout << "Target " << target << " found at position: (" << result.first << ", " << result.second << ")\n";
    } else {
        std::cout << "Target " << target << " not found in the matrix\n";
    }
    return 0;
}
```

  </TabItem>
</Tabs>

# Conclusion
The Spiral Matrix Search algorithm is an efficient way to traverse a 2D matrix in a spiral order to find a target element. It ensures each element is visited exactly once, maintaining a linear time complexity and constant space complexity.
