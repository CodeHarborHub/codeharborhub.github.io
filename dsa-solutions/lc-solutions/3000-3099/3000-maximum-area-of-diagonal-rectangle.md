---
id: 3000-maximum-area-of-diagonal-rectangle
title: Maximum area of longest diagonal rectangle (Leetcode)
sidebar_label: 3000-Maximum area of longest diagonal rectangle
description: Solution of Maximum area of longest diagonal rectangle
---


## Problem Description

You are given a 2D 0-indexed integer array dimensions.

For all indices i,`0 <= i < dimensions.length`, dimensions[i][0] represents the length and dimensions[i][1] represents the width of the rectangle i.

Return the area of the rectangle having the longest diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the maximum area.

### Examples

#### Example 1

- **Input:** $dimensions = [[9,3],[8,6]]$
- **Output:** $48$
- **Explanation:** For index = $0$, $\text{length} = 9$ and width = $3$. $\text{Diagonal length} = sqrt(9 \times 9 + 3 \times 3) = sqrt(90) ≈ 9.487$.
  For $\text{index} = 1$, $length = 8$ and $\text{width} = 6$. $\text{Diagonal length} = sqrt(8 \times 8 + 6 \times 6) = sqrt(100) = 10$.
  So, the rectangle at index 1 has a greater diagonal length therefore we return $area = 8 \times 6 = 48..$

#### Example 2

- **Input:** $dimensions = [[3,4],[4,3]]$
- **Output:** $12$
- **Explanation:**$ Length of diagonal is the same for both which is 5, so maximum area = 12$.

### Constraints

- $1 \leq  dimensions.length \leq 100$
- $dimensions[i].length == 2$
- $1 <= dimensions[i][0], dimensions[i][1] <= 100$

### Intuition

The problem requires finding the rectangle with the maximum diagonal length and, in case of a tie, returning the one with the maximum area.
To achieve this, we need to calculate the diagonal length for each rectangle and compare it with the current maximum diagonal length.
If the diagonal length is greater or equal (in case of a tie), we update the maximum diagonal length and check if the area of the current rectangle is greater than the maximum area. If so, we update the maximum area as well.

### Approach

The code uses a loop to iterate through each rectangle in the given dimensions vector.
It calculates the square of the diagonal length for each rectangle and compares it with the previous maximum diagonal length (diag).
If the current rectangle has a longer or equal diagonal length, it updates the maximum area (area) accordingly.
The area variable keeps track of the maximum area among rectangles with the longest diagonal.
Finally, the function returns the maximum area among rectangles with the longest diagonal.

### Solution Code

#### Python

```py
  class Solution:
    def areaOfMaxDiagonal(self, dimensions: List[List[int]]) -> int:
        a,b = max(dimensions, key = lambda x: (x[0]*x[0]+x[1]*x[1], (x[0]*x[1])))
      return a*b
```

#### Java

```java

  public int areaOfMaxDiagonal(int[][] dimensions) {
        int diagSq = 0, area = 0;
        for (int[] d : dimensions) {
            int ds = d[0] * d[0] + d[1] * d[1];
            int ar = d[0] * d[1];
            if (ds > diagSq) {
                area = ar;
                diagSq = ds;
            }
            else if (ds == diagSq && ar > area) area = ar;
        }
        return area;
    }
```

#### C++

```cpp
class Solution {
public:
    int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {

        double max_diagonal = 0;
        int max_area = 0;

        for (const auto& rectangle : dimensions) {
            int length = rectangle[0];
            int width = rectangle[1];

            double diagonal_length = sqrt(pow(length, 2) + pow(width, 2));

            if (diagonal_length > max_diagonal || (diagonal_length == max_diagonal && length * width > max_area)) {
                max_diagonal = diagonal_length;
                max_area = length * width;
            }
        }

        return max_area;

    }
};
```

### Conclusion

At last we can say that we can calculate maximum area of diagonal rectangle using timecomplexity of $o(n)$ and spacecomplexity of $o(1)$ using a simple for loop and some variable
