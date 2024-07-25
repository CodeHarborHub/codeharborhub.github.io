# Recursive Matrix Search Algorithm

## Overview

Recursive Matrix Search is an algorithm designed to search for a target element in a 2D matrix. It uses a recursive approach to divide and conquer the search space, similar to binary search but applied in a matrix context.

## Algorithm Steps

1. **Initialization**:
   - Start from the top-left corner of the matrix.
   - Define boundaries: `left`, `right`, `top`, and `bottom`.

2. **Recursive Search**:
   - Divide the matrix into sub-matrices recursively.
   - Compare the middle element of the current sub-matrix with the target.
   - If the middle element matches the target, return its coordinates.
   - If the target is less than the middle element, search the sub-matrix to the left or above recursively.
   - If the target is greater than the middle element, search the sub-matrix to the right or below recursively.
   
3. **Base Case**:
   - If the boundaries (`left`, `right`, `top`, `bottom`) converge or cross over (indicating no more search space), terminate the recursion.

4. **Complexity**:
   - Time Complexity: \( O(\log(n)) \) in the average case, where \( n \) is the total number of elements in the matrix. This is achieved due to the divide-and-conquer nature of the search.
   - Space Complexity: \( O(\log(n)) \) due to the recursive calls on the call stack.

## Example

Given a 2D matrix:

matrix = [
[1, 4, 7, 11, 15],
[2, 5, 8, 12, 19],
[3, 6, 9, 16, 22],
[10, 13, 14, 17, 24],
[18, 21, 23, 26, 30]
]

target = 14

Using Recursive Matrix Search:

- Start from the top-left corner: `matrix[0][0]`.
- Check against the target `14`.
- Recursive steps narrow down the search until the target is found or deemed absent.

## Implementation Note

The algorithm can be implemented in various programming languages using a recursive function that navigates through the matrix based on comparisons with the target element.

```python
def recursive_matrix_search(matrix, target, left, right, top, bottom):
    if left > right or top > bottom:
        return None
    
    mid_row = (top + bottom) // 2
    mid_col = (left + right) // 2
    
    mid_element = matrix[mid_row][mid_col]
    if mid_element == target:
        return (mid_row, mid_col)
    elif mid_element > target:
        # Search in top-left and bottom sub-matrices
        result = recursive_matrix_search(matrix, target, left, mid_col-1, top, bottom)
        if result is None:
            result = recursive_matrix_search(matrix, target, left, right, top, mid_row-1)
        return result
    else:
        # Search in top-right and bottom sub-matrices
        result = recursive_matrix_search(matrix, target, mid_col+1, right, top, bottom)
        if result is None:
            result = recursive_matrix_search(matrix, target, left, right, mid_row+1, bottom)
        return result
```

# Example usage:
matrix = [
  [1,  4,  7,  11, 15],
  [2,  5,  8,  12, 19],
  [3,  6,  9,  16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
target = 14

# Initial search starts from top-left corner (0, 0) to (4, 4)
```
result = recursive_matrix_search(matrix, target, 0, len(matrix[0])-1, 0, len(matrix)-1)
if result:
    print(f"Target {target} found at position: {result}")
else:
    print(f"Target {target} not found in the matrix")

```

This algorithm uniquely combines the concepts of binary search with matrix traversal using recursion, offering efficient search capabilities in 2D matrices.
