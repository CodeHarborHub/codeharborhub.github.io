---
id: matrix-diagonal-sum
title: Matrix Diagonal Sum Solution
sidebar_label: 1572-Matrix-Diagonal-Sum
tags:
  - Matrix Diagonal Sum
  - Array
  - LeetCode
  - Python
  - JavaScript
  - TypeScript
  - Java
  - C++
description: "This is a solution to the Matrix Diagonal Sum problem on LeetCode."
---

In this page, we will solve the Matrix Diagonal Sum problem using multiple approaches. We will provide the implementation of the solution in Python, JavaScript, TypeScript, Java, and C++.

## Problem Description

Given a square matrix `mat`, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

### Examples

**Example 1:**

```plaintext
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
```

**Example 2:**

```plaintext
Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8
Explanation: Diagonals sum: 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 8
```

### Constraints

- $n == mat.length == mat[i].length$
- $1 <= n <= 100$
- $1 <= mat[i][j] <= 100$

---

## Solution for Matrix Diagonal Sum Problem

### Intuition and Approach

We can solve this problem by iterating over the matrix and summing up the elements on both diagonals.

<Tabs>
 <tabItem value="Iterative Approach" label="Iterative Approach">

### Approach: Iterative

In this approach, we iterate through the matrix and add elements from the primary diagonal and the secondary diagonal.

#### Implementation
```jsx live
function matrixDiagonalSum() {
  const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const diagonalSum = function(mat) {
    let sum = 0;
    const n = mat.length;
    for (let i = 0; i < n; i++) {
      sum += mat[i][i]; // Primary diagonal
      if (i !== n - 1 - i) { // Exclude middle element for odd-sized matrix
        sum += mat[i][n - 1 - i]; // Secondary diagonal
      }
    }
    return sum;
  };

  const result = diagonalSum(mat);
  return (
    <div>
      <p>
        <b>Input:</b> mat = {JSON.stringify(mat)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function diagonalSum(mat) {
      let sum = 0;
      const n = mat.length;
      for (let i = 0; i < n; i++) {
        sum += mat[i][i]; // Primary diagonal
        if (i !== n - 1 - i) { // Exclude middle element for odd-sized matrix
          sum += mat[i][n - 1 - i]; // Secondary diagonal
        }
      }
      return sum;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/> 
   ```typescript
    function diagonalSum(mat: number[][]): number {
      let sum = 0;
      const n = mat.length;
      for (let i = 0; i < n; i++) {
        sum += mat[i][i]; // Primary diagonal
        if (i !== n - 1 - i) { // Exclude middle element for odd-sized matrix
          sum += mat[i][n - 1 - i]; // Secondary diagonal
        }
      }
      return sum;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def diagonalSum(self, mat: List[List[int]]) -> int:
            diagonal_sum = 0
            n = len(mat)
            for i in range(n):
                diagonal_sum += mat[i][i] # Primary diagonal
                if i != n - 1 - i: # Exclude middle element for odd-sized matrix
                    diagonal_sum += mat[i][n - 1 - i] # Secondary diagonal
            return diagonal_sum
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int diagonalSum(int[][] mat) {
            int sum = 0;
            int n = mat.length;
            for (int i = 0; i < n; i++) {
                sum += mat[i][i]; // Primary diagonal
                if (i != n - 1 - i) { // Exclude middle element for odd-sized matrix
                    sum += mat[i][n - 1 - i]; // Secondary diagonal
                }
            }
            return sum;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int diagonalSum(vector<vector<int>>& mat) {
            int sum = 0;
            int n = mat.size();
            for (int i = 0; i < n; i++) {
                sum += mat[i][i]; // Primary diagonal
                if (i != n - 1 - i) { // Exclude middle element for odd-sized matrix
                    sum += mat[i][n - 1 - i]; // Secondary diagonal
                }
            }
            return sum;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- Where `n` is the size of the square matrix `mat`.
- The time complexity is linear because we iterate through the matrix only once.
- The space complexity is constant as we use only a few variables irrespective of the size of the input.

</tabItem>
<tabItem value="Optimized Approach" label="Optimized Approach">

### Approach: Optimized

In this approach, we optimize the previous solution by iterating only once through the matrix. We use two pointers to traverse both diagonals simultaneously.

#### Implementation

```jsx live
function matrixDiagonalSum() {
  const mat = [


    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  const diagonalSum = function(mat) {
    let sum = 0;
    const n = mat.length;
    for (let i = 0, j = n - 1; i < n; i++, j--) {
      sum += mat[i][i]; // Primary diagonal
      if (i !== j) { // Exclude middle element for odd-sized matrix
        sum += mat[i][j]; // Secondary diagonal
      }
    }
    return sum;
  };

  const result = diagonalSum(mat);
  return (
    <div>
      <p>
        <b>Input:</b> mat = {JSON.stringify(mat)}
      </p>
      <p>
        <b>Output:</b> {result}
      </p>
    </div>
  );
}
```

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@manishh12"/>
   ```javascript
    function diagonalSum(mat) {
      let sum = 0;
      const n = mat.length;
      for (let i = 0, j = n - 1; i < n; i++, j--) {
        sum += mat[i][i]; // Primary diagonal
        if (i !== j) { // Exclude middle element for odd-sized matrix
          sum += mat[i][j]; // Secondary diagonal
        }
      }
      return sum;
    }
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@manishh12"/> 
   ```typescript
    function diagonalSum(mat: number[][]): number {
      let sum = 0;
      const n = mat.length;
      for (let i = 0, j = n - 1; i < n; i++, j--) {
        sum += mat[i][i]; // Primary diagonal
        if (i !== j) { // Exclude middle element for odd-sized matrix
          sum += mat[i][j]; // Secondary diagonal
        }
      }
      return sum;
    }
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@manishh12"/>
   ```python
    class Solution:
        def diagonalSum(self, mat: List[List[int]]) -> int:
            diagonal_sum = 0
            n = len(mat)
            for i in range(n):
                diagonal_sum += mat[i][i] # Primary diagonal
                if i != n - 1 - i: # Exclude middle element for odd-sized matrix
                    diagonal_sum += mat[i][n - 1 - i] # Secondary diagonal
            return diagonal_sum
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@manishh12"/>
   ```java
    class Solution {
        public int diagonalSum(int[][] mat) {
            int sum = 0;
            int n = mat.length;
            for (int i = 0, j = n - 1; i < n; i++, j--) {
                sum += mat[i][i]; // Primary diagonal
                if (i != j) { // Exclude middle element for odd-sized matrix
                    sum += mat[i][j]; // Secondary diagonal
                }
            }
            return sum;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@manishh12"/>
   ```cpp
    class Solution {
    public:
        int diagonalSum(vector<vector<int>>& mat) {
            int sum = 0;
            int n = mat.size();
            for (int i = 0, j = n - 1; i < n; i++, j--) {
                sum += mat[i][i]; // Primary diagonal
                if (i != j) { // Exclude middle element for odd-sized matrix
                    sum += mat[i][j]; // Secondary diagonal
                }
            }
            return sum;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(n)$$
- Space Complexity: $$O(1)$$
- Where `n` is the size of the square matrix `mat`.
- The time complexity is linear because we iterate through the matrix only once.
- The space complexity is constant as we use only a few variables irrespective of the size of the input.

</tabItem>
</Tabs>

:::tip Note

By using these approaches, we can efficiently solve the Matrix Diagonal Sum problem for the given constraints.

:::
## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/matrix-diagonal-sum/)
- **Solution Link:** [Matrix Diagonal Sum Solution on LeetCode](https://leetcode.com/problems/matrix-diagonal-sum/discuss/809393/Python-3-O(n)-solution-explained)
- **Authors LeetCode Profile:** [Manish Kumar Gupta](https://leetcode.com/_manishh12/)

