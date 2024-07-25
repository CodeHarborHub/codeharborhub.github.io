---
id: Maximal-Rectangle
title: Maximal Rectangle
sidebar_label: 085-Maximal Rectangle
tags:
  - algorithms
  - dynamic programming
  - stack
  - matrix
  - binary matrix
  - rectangle
description: This gives the solution for maximal Rectangle problem of leetcode
---

## Problem Description

| Problem Statement                                       | Solution Link                                                              | LeetCode Profile                                        |
| :------------------------------------------------------ | :------------------------------------------------------------------------- | :------------------------------------------------------ |
| [Maximal-Rectangle](https://leetcode.com/problems/Maximal-Rectangle/description/) | [Maximal-Rectangle Solution on LeetCode](https://leetcode.com/problems/Maximal-Rectangle/solutions/) | [Nikita Saini](https://leetcode.com/u/Saini_Nikita/) |

### Problem Description

Given a `rows x cols` binary matrix filled with `0's` and `1's`, find the largest rectangle containing only `1's` and return its area.

### Examples

#### Example 1:
**Input:** `matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]`
**Output:** `6`
**Explanation:** `The maximal rectangle is shown in the above picture.`

#### Example 2:
**Input:** `matrix = [["0"]]`
**Output:** `0`


#### Example 3:
**Input:** `matrix = [["1"]]`
**Output:** `1`


### Constraints

- `rows == matrix.length`
- `cols == matrix[i].length`
- `1 <= rows, cols <= 200`
- `matrix[i][j]` is `'0'` or `'1'`.

## Approach

1. **Transform the Matrix into Histograms**: For each row in the matrix, treat each column as the height of a histogram bar.
2. **Use Histogram Technique**: Apply the largest rectangle in histogram technique for each row.
3. **Dynamic Update**: Update the heights of the histogram bars dynamically while iterating over rows.

### Step-by-Step Algorithm

1. **Initialization**:
   - Create a list `heights` of zeros with a length equal to the number of columns in the matrix.
   
2. **Iterate over Rows**:
   - For each row, update the `heights` where:
     - If `matrix[i][j] == '1'`, increment `heights[j]` by 1.
     - If `matrix[i][j] == '0'`, reset `heights[j]` to 0.
     
3. **Calculate Maximum Rectangle**:
   - For each updated `heights` array, use a stack to find the maximum rectangle area in the histogram.

### Python Solution

```python
def maximalRectangle(matrix):
    if not matrix:
        return 0
    max_area = 0
    heights = [0] * len(matrix[0])
    
    for row in matrix:
        for i in range(len(row)):
            if row[i] == '1':
                heights[i] += 1
            else:
                heights[i] = 0
                
        max_area = max(max_area, largestRectangleArea(heights))
        
    return max_area

def largestRectangleArea(heights):
    stack = []
    max_area = 0
    heights.append(0)
    
    for i in range(len(heights)):
        while stack and heights[i] < heights[stack[-1]]:
            h = heights[stack.pop()]
            w = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, h * w)
        stack.append(i)
        
    heights.pop()
    return max_area
```

### Java Solution
```Java
import java.util.Stack;

class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix.length == 0) return 0;
        int maxArea = 0;
        int[] heights = new int[matrix[0].length];
        
        for (char[] row : matrix) {
            for (int i = 0; i < row.length; i++) {
                heights[i] = row[i] == '1' ? heights[i] + 1 : 0;
            }
            maxArea = Math.max(maxArea, largestRectangleArea(heights));
        }
        
        return maxArea;
    }
    
    private int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int[] h = new int[heights.length + 1];
        System.arraycopy(heights, 0, h, 0, heights.length);
        
        for (int i = 0; i < h.length; i++) {
            while (!stack.isEmpty() && h[i] < h[stack.peek()]) {
                int height = h[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        
        return maxArea;
    }
}
```

### C++ Solution
```cpp
#include <vector>
#include <stack>
#include <algorithm>

class Solution {
public:
    int maximalRectangle(std::vector<std::vector<char>>& matrix) {
        if (matrix.empty()) return 0;
        int maxArea = 0;
        std::vector<int> heights(matrix[0].size(), 0);
        
        for (const auto& row : matrix) {
            for (size_t i = 0; i < row.size(); ++i) {
                heights[i] = row[i] == '1' ? heights[i] + 1 : 0;
            }
            maxArea = std::max(maxArea, largestRectangleArea(heights));
        }
        
        return maxArea;
    }
    
private:
    int largestRectangleArea(const std::vector<int>& heights) {
        std::stack<int> stack;
        int maxArea = 0;
        std::vector<int> h = heights;
        h.push_back(0);
        
        for (size_t i = 0; i < h.size(); ++i) {
            while (!stack.empty() && h[i] < h[stack.top()]) {
                int height = h[stack.top()];
                stack.pop();
                int width = stack.empty() ? i : i - stack.top() - 1;
                maxArea = std::max(maxArea, height * width);
            }
            stack.push(i);
        }
        
        return maxArea;
    }
};
```

### C Solution
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int maximalRectangle(char** matrix, int matrixSize, int* matrixColSize) {
    if (matrixSize == 0) return 0;
    int maxArea = 0;
    int heights[*matrixColSize];
    memset(heights, 0, sizeof(heights));
    
    for (int i = 0; i < matrixSize; i++) {
        for (int j = 0; j < *matrixColSize; j++) {
            heights[j] = matrix[i][j] == '1' ? heights[j] + 1 : 0;
        }
        maxArea = fmax(maxArea, largestRectangleArea(heights, *matrixColSize));
    }
    
    return maxArea;
}

int largestRectangleArea(int* heights, int size) {
    int maxArea = 0;
    int* stack = (int*)malloc((size + 1) * sizeof(int));
    int top = -1;
    heights[size] = 0;
    
    for (int i = 0; i <= size; i++) {
        while (top != -1 && heights[i] < heights[stack[top]]) {
            int height = heights[stack[top--]];
            int width = top == -1 ? i : i - stack[top] - 1;
            maxArea = fmax(maxArea, height * width);
        }
        stack[++top] = i;
    }
    
    free(stack);
    return maxArea;
}
```

### JavaScript Solution
```js
var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;
    let maxArea = 0;
    let heights = new Array(matrix[0].length).fill(0);
    
    for (let row of matrix) {
        for (let i = 0; i < row.length; i++) {
            heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
};

var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0);
    
    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    
    heights.pop();
    return maxArea;
};
```

### Conclusion
This problem combines concepts from dynamic programming and stack-based approaches to efficiently calculate the largest rectangle containing only 1's in a binary matrix. By converting the problem to a series of histogram problems and using an optimized approach to find the largest rectangle in a histogram, we achieve a time-efficient solution.


