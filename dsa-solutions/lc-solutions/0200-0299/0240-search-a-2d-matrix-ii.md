---
id: search-a-2d-matrix-ii
title: Search a 2D Matrix II Solution
sidebar_label: 0240 - Search a 2D Matrix II
tags:
  - Search a 2D Matrix II
  - Array
  - Binary Search
  - Divide and Conquer
  - Matrix
  - LeetCode
  - JavaScript
  - TypeScript
description: "This is a solution to the Search a 2D Matrix II problem on LeetCode."
sidebar_position: 240
---

In this tutorial, we will solve the Search a 2D Matrix II problem using efficient search techniques. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, and C++.

## Problem Description

Write an efficient algorithm that searches for a value in an `m x n` matrix. This matrix has the following properties:

- Integers in each row are sorted in ascending order from left to right.
- Integers in each column are sorted in ascending order from top to bottom.

### Examples

**Example 1:**

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
- <code>$1 \leq n, m \leq 300$</code>
- <code>$-10^9 \leq \text{matrix[i][j]} \leq 10^9$</code>
- All the integers in each row are sorted in ascending order.
- All the integers in each column are sorted in ascending order.
- <code>$-10^9 \leq target \leq 10^9$</code>

---

## Solution for Search a 2D Matrix II

### Intuition and Approach

To search for a value in this matrix efficiently, we can utilize the properties of the matrix. Since the matrix is sorted both row-wise and column-wise, we can start our search from the top-right corner of the matrix. From here, we have two options:

1. If the target is greater than the current value, move downwards.
2. If the target is less than the current value, move leftwards.

This approach ensures that we eliminate one row or one column in each step, leading to an efficient search.

<Tabs>
 <tabItem value="Greedy Search" label="Greedy Search">

### Approach: Greedy Search

By leveraging the sorted properties of the matrix, we can search for the target value efficiently using a greedy approach. This involves starting from the top-right corner and adjusting our search direction based on the current value.

#### Implementation

```jsx live
function searchMatrix(matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  return false;
}

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 5;
const result = searchMatrix(matrix, target);

return (
  <div>
    <p>
      <b>Input:</b> matrix = [ [1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9,
      16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30] ], target = 5
    </p>
    <p>
      <b>Output:</b> {result ? "true" : "false"}
    </p>
  </div>
);
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryansh-patel"/>
   ```javascript
    function searchMatrix(matrix, target) {
      if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
      let rows = matrix.length;
      let cols = matrix[0].length;
      let row = 0;
      let col = cols - 1;

      while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
          return true;
        } else if (matrix[row][col] > target) {
          col--;
        } else {
          row++;
        }
      }
      return false;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryansh-patel"/>
   ```typescript
    function searchMatrix(matrix: number[][], target: number): boolean {
      if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
      let rows = matrix.length;
      let cols = matrix[0].length;
      let row = 0;
      let col = cols - 1;

      while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
          return true;
        } else if (matrix[row][col] > target) {
          col--;
        } else {
          row++;
        }
      }
      return false;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@aryansh-patel"/>
   ```python
    def searchMatrix(matrix: List[List[int]], target: int) -> bool:
      if not matrix or not matrix[0]:
        return False
      rows = len(matrix)
      cols = len(matrix[0])
      row = 0
      col = cols - 1

      while row < rows and col >= 0:
        if matrix[row][col] == target:
          return True
        elif matrix[row][col] > target:
          col -= 1
        else:
          row += 1

      return False
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryansh-patel"/>
   ```java
    class Solution {
      public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
          return false;
        }
        int rows = matrix.length;
        int cols = matrix[0].length;
        int row = 0;
        int col = cols - 1;

        while (row < rows && col >= 0) {
          if (matrix[row][col] == target) {
            return true;
          } else if (matrix[row][col] > target) {
            col--;
          } else {
            row++;
          }
        }
        return false;
      }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryansh-patel"/>
   ```cpp
    class Solution {
    public:
      bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if (matrix.empty() || matrix[0].empty()) return false;
        int rows = matrix.size();
        int cols = matrix[0].size();
        int row = 0;
        int col = cols - 1;

        while (row < rows && col >= 0) {
          if (matrix[row][col] == target) {
            return true;
          } else if (matrix[row][col] > target) {
            col--;
          } else {
            row++;
          }
        }
        return false;
      }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- **Time Complexity:** $O(m + n)$, where `m` is the number of rows and `n` is the number of columns.
- **Space Complexity:** $O(1)$, as we are not using any additional space.

- The time complexity is linear in terms of the dimensions of the matrix. Each step eliminates either a row or a

column, leading to a linear time complexity of $O(m + n)$.

- The space complexity is constant because we only use a few extra variables regardless of the matrix size.

</tabItem>
</Tabs>

:::tip Note
This solution leverages the matrix's properties to reduce the search space efficiently, making it suitable for large matrices.
:::

---

## Video Explanation of Search a 2D Matrix II

<Tabs>

  <TabItem value="en" label="English">

---

    <Tabs>
      <TabItem value="javascript" label="JavaScript">
        <LiteYouTubeEmbed
          id="mH0X4jxrQjY"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Search a 2D Matrix II Problem Explanation | Search a 2D Matrix II Solution"
          poster="maxresdefault"
          webp
        />
      </TabItem>

      <TabItem value="python" label="Python">
        <LiteYouTubeEmbed
          id="3kw1K8zjghA"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Search a 2D Matrix II Problem Explanation | Search a 2D Matrix II Solution"
          poster="maxresdefault"
          webp
        />
      </TabItem>
      <TabItem value="java" label="Java">
        <LiteYouTubeEmbed
          id="bNkv6eQk3a4"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Search a 2D Matrix II Problem Explanation | Search a 2D Matrix II Solution"
          poster="maxresdefault"
          webp
        />
      </TabItem>
    </Tabs>

  </TabItem>

  <TabItem value="hi" label="Hindi">
        <LiteYouTubeEmbed
          id="lE5aHEc26Ic"
          params="autoplay=1&autohide=1&showinfo=0&rel=0"
          title="Search a 2D Matrix II Problem Explanation | Search a 2D Matrix II Solution"
          poster="maxresdefault"
          webp
        />
  </TabItem>

</Tabs>
