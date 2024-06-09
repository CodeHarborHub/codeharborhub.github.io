---
id: longest-increasing-path-in-a-matrix
title: Longest Increasing Path in a Matrix
sidebar_label: 0329 - Longest Increasing Path in a Matrix
tags:
- Array
- Dynamic Programming
- Depth-First Search
- Breadth-First Search
- Graph
- Topological Sort
- Memoization
- Matrix
description: "This is a solution to the Longest Increasing Path in a Matrix problem on LeetCode."
---

## Problem Description

Given an m x n integers matrix, return the length of the longest increasing path in matrix.
From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

### Examples

**Example 1:**

```
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].

```

**Example 2:**

```Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.

```
**Example 3:**
```
Input: matrix = [[1]]
Output: 1
```

### Constraints

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 200 `
- `0 <= matrix[i][j] <= 2^31 - 1`

## Solution for Longest Increasing Path in a Matrix Problem

  
### Approach 1: Brute Force

#### Intuition
The brute force approach for solving the longest increasing path in a matrix involves exploring every possible path starting from each cell in the matrix without using any form of memoization or dynamic programming to cache intermediate results. This means the algorithm will re-compute the length of paths multiple times for overlapping subproblems, leading to increased time complexity.
<Tabs>
  <TabItem value="Brute Force" label="Brute Force">

#### Implementation

```jsx live
function longestIncreasingPathWrapper(arr) {
    function isValid(row, col, i, j) {
        return i < row && i >= 0 && j < col && j >= 0;
    }

    function solve(arr, i, j, dp, delRow, delCol) {
        if (dp[i][j] !== -1) {
            return dp[i][j];
        }
        let ans = 1;
        for (let k = 0; k < 4; k++) {
            const newRow = delRow[k] + i;
            const newCol = delCol[k] + j;

            if (isValid(arr.length, arr[0].length, newRow, newCol) && arr[newRow][newCol] > arr[i][j]) {
                ans = Math.max(ans, 1 + solve(arr, newRow, newCol, dp, delRow, delCol));
            }
        }

        dp[i][j] = ans;
        return ans;
    }

    function calculateLongestIncreasingPath(arr) {
        const rows = arr.length;
        const cols = arr[0].length;
        const dp = Array.from({ length: rows }, () => Array(cols).fill(-1));
        const delRow = [0, 1, 0, -1];
        const delCol = [1, 0, -1, 0];

        let ans = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                ans = Math.max(ans, solve(arr, i, j, dp, delRow, delCol));
            }
        }

        return ans;
    }

  const input = [[9,9,4],[6,6,8],[2,1,1]]
  const output = calculateLongestIncreasingPath(input)
  return (
    <div>
      <p>
        <b>Input: </b>{ JSON.stringify(input)}
      </p>
      <p>
        <b>Output:</b> {output.toString()}
      </p>
    </div>
  );
}
```

#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
const delRow = [0, 1, 0, -1];
const delCol = [1, 0, -1, 0];

const isValid = (row, col, i, j) => {
    return i < row && i >= 0 && j < col && j >= 0;
};

const solve = (arr, i, j, prev) => {
    let ans = 1; // Initial path length is 1 (the cell itself)
    for (let k = 0; k < 4; k++) {
        const newRow = delRow[k] + i;
        const newCol = delCol[k] + j;

        // Check if the new cell is within bounds and its value is greater than the current cell value
        if (isValid(arr.length, arr[0].length, newRow, newCol) && arr[newRow][newCol] > prev) {
            // Recursively compute the path length from the new cell
            ans = Math.max(ans, 1 + solve(arr, newRow, newCol, arr[newRow][newCol]));
        }
    }
    return ans;
};

const longestIncreasingPath = (arr) => {
    let ans = 0;
    // Iterate over all cells in the matrix
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            // Compute the longest increasing path starting from cell (i, j)
            ans = Math.max(ans, solve(arr, i, j, arr[i][j] - 1));
        }
    }
    return ans;
};
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
const delRow: number[] = [0, 1, 0, -1];
const delCol: number[] = [1, 0, -1, 0];

const isValid = (row: number, col: number, i: number, j: number): boolean => {
    return i < row && i >= 0 && j < col && j >= 0;
};

const solve = (arr: number[][], i: number, j: number, prev: number): number => {
    let ans: number = 1; // Initial path length is 1 (the cell itself)
    for (let k = 0; k < 4; k++) {
        const newRow: number = delRow[k] + i;
        const newCol: number = delCol[k] + j;

        // Check if the new cell is within bounds and its value is greater than the current cell value
        if (isValid(arr.length, arr[0].length, newRow, newCol) && arr[newRow][newCol] > prev) {
            // Recursively compute the path length from the new cell
            ans = Math.max(ans, 1 + solve(arr, newRow, newCol, arr[newRow][newCol]));
        }
    }
    return ans;
};

const longestIncreasingPath = (arr: number[][]): number => {
    let ans: number = 0;
    // Iterate over all cells in the matrix
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            // Compute the longest increasing path starting from cell (i, j)
            ans = Math.max(ans, solve(arr, i, j, arr[i][j] - 1));
        }
    }
    return ans;
};

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   def is_valid(row, col, i, j):
    return i < row and i >= 0 and j < col and j >= 0

def solve(arr, i, j, prev):
    del_row = [0, 1, 0, -1]
    del_col = [1, 0, -1, 0]
    ans = 1  # Initial path length is 1 (the cell itself)
    for k in range(4):
        new_row = del_row[k] + i
        new_col = del_col[k] + j

        # Check if the new cell is within bounds and its value is greater than the current cell value
        if is_valid(len(arr), len(arr[0]), new_row, new_col) and arr[new_row][new_col] > prev:
            # Recursively compute the path length from the new cell
            ans = max(ans, 1 + solve(arr, new_row, new_col, arr[new_row][new_col]))
    return ans

def longest_increasing_path(arr):
    ans = 0
    # Iterate over all cells in the matrix
    for i in range(len(arr)):
        for j in range(len(arr[0])):
            # Compute the longest increasing path starting from cell (i, j)
            ans = max(ans, solve(arr, i, j, arr[i][j] - 1))
    return ans


    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
    import java.util.Arrays;

class Solution {
    private static final int[] delRow = {0, 1, 0, -1};
    private static final int[] delCol = {1, 0, -1, 0};

    private boolean isValid(int row, int col, int i, int j) {
        return i < row && i >= 0 && j < col && j >= 0;
    }

    private int solve(int[][] arr, int i, int j, int prev) {
        int ans = 1; // Initial path length is 1 (the cell itself)
        for (int k = 0; k < 4; k++) {
            int newRow = delRow[k] + i;
            int newCol = delCol[k] + j;

            // Check if the new cell is within bounds and its value is greater than the current cell value
            if (isValid(arr.length, arr[0].length, newRow, newCol) && arr[newRow][newCol] > prev) {
                // Recursively compute the path length from the new cell
                ans = Math.max(ans, 1 + solve(arr, newRow, newCol, arr[newRow][newCol]));
            }
        }
        return ans;
    }

    public int longestIncreasingPath(int[][] arr) {
        int ans = 0;
        // Iterate over all cells in the matrix
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                // Compute the longest increasing path starting from cell (i, j)
                ans = Math.max(ans, solve(arr, i, j, arr[i][j] - 1));
            }
        }
        return ans;
    }
}
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
    class Solution {
public:
    int delRow[4] = {0, 1, 0, -1};
    int delCol[4] = {1, 0, -1, 0};

    bool isValid(int row, int col, int i, int j) {
        return i < row && i >= 0 && j < col && j >= 0;
    }

    int solve(vector<vector<int>>& arr, int i, int j, int prev) {
        int ans = 1; // Initial path length is 1 (the cell itself)
        for (int k = 0; k < 4; k++) {
            int newRow = delRow[k] + i;
            int newCol = delCol[k] + j;

            // Check if the new cell is within bounds and its value is greater than the current cell value
            if (isValid(arr.size(), arr[0].size(), newRow, newCol) &&
                arr[newRow][newCol] > prev) {
                // Recursively compute the path length from the new cell
                ans = max(ans, 1 + solve(arr, newRow, newCol, arr[newRow][newCol]));
            }
        }
        return ans;
    }

    int longestIncreasingPath(vector<vector<int>>& arr) {
        int ans = 0;
        // Iterate over all cells in the matrix
        for (int i = 0; i < arr.size(); i++) {
            for (int j = 0; j < arr[0].size(); j++) {
                // Compute the longest increasing path starting from cell (i, j)
                ans = max(ans, solve(arr, i, j, arr[i][j] - 1));
            }
        }
        return ans;
    }
};

    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: the time complexity is ( M x N ) ^ 2 for brute force because from each M X N points we traverse M X N cells
- Space Complexity: O(1)


### Optimized Approach - Memoization
#### Intuition
    - Instead of recursively exploring all possible paths from each cell in the matrix, we can store and reuse intermediate results using dynamic programming.
    
    - By caching the lengths of the longest increasing paths starting from each cell, we can avoid redundant computations and dramatically reduce the time complexity.

<Tabs>
<TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
  class Solution {
public:
    int delRow[4] = {0, 1, 0, -1};
    int delCol[4] = {1, 0, -1, 0};
    
    bool isValid(int row, int col, int i, int j) {
        return i < row && i >= 0 && j < col && j >= 0;
    }
    
    int solve(vector<vector<int>>& arr, int i, int j, vector<vector<int>>& dp) {
        if (dp[i][j] != -1) {
            return dp[i][j];
        }
        int ans = 1;
        for (int k = 0; k < 4; k++) {
            int newRow = delRow[k] + i;
            int newCol = delCol[k] + j;

            if (isValid(arr.size(), arr[0].size(), newRow, newCol) && arr[newRow][newCol] > arr[i][j]) {
                ans = max(ans, 1 + solve(arr, newRow, newCol, dp));
            }
        }
        
        dp[i][j] = ans;
        return ans;
    }
    
    int longestIncreasingPath(vector<vector<int>>& arr) {
        int rows = arr.size();
        int cols = arr[0].size();
        vector<vector<int>> dp(rows, vector<int>(cols, -1));
        
        int ans = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                ans = max(ans, solve(arr, i, j, dp));
            }
        }
        
        return ans;
    }
};
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis
- Time Complexity: the time complexity is ( M x N )  for dp solution because from each M X N points because we are storing the the solution for particular cell in the dp array.
- Space Complexity: O(M x N)

### Using Topological Sort
#### Intuition
 - We regard a cell in the matrix as a node,a directed edge from node x to node y if x and y are adjacent and x's value < y's value
  Then a graph is formed.
  No cycles can exist in the graph, i.e. a DAG is formed.
  The problem becomes to get the longest path in the DAG.
  Topological sort can iterate the vertices of a DAG in the linear ordering.
  Using Kahn's algorithm(BFS) to implement topological sort while counting the levels can give us the longest chain of nodes in the DAG.


  <Tabs>
<TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
 class Solution {
    vector<vector<int>> directions = {{1, 0}, {0, 1}, {-1, 0}, {0, -1}};
    int rows, cols, longest = 0;
public:
    int longestIncreasingPath(vector<vector<int>>& matrix) {
        rows = matrix.size();
        // Empty
        if(!rows) return 0;
        cols = matrix[0].size();
        // Matrix corresponding to Indegree count
        vector<vector<int>> Indegree(rows, vector<int>(cols));
        // Source nodes of increasing paths
        queue<pair<int, int>> q;
        
        for(int i = 0; i < rows; i++){
            for(int j = 0; j < cols; j++){
                for(auto &d: directions){
                    int x = i + d[0];
                    int y = j + d[1];
                    // OUT OF BOUNDS CHECK
                    if(x >= 0 && x < rows && y >= 0 && y < cols){
                        // Increasing Path (end)
                        if(matrix[x][y] < matrix[i][j]) Indegree[i][j]++;
                    }
                }
                // Increasing Path (start)
                if(!Indegree[i][j]) q.push({i, j});
            }
        }
        // BFS
        while(!q.empty()){
            int size = q.size();
            while(size--){
                pair<int,int> current = q.front();    // Current matrix cell
                q.pop();
                // Explore neigbhors
                for(auto &d: directions){
                    int x = current.first + d[0];
                    int y = current.second + d[1];
                    // OUT OF BOUNDS CHECK
                    if(x >= 0 && x < rows && y >= 0 && y < cols){
                      // "Erase" current cell and move onto next level
                        if(matrix[x][y] > matrix[current.first][current.second] && --Indegree[x][y] == 0)
                            q.push({x,y});
                    }
                }
            }
            longest++;
        }
        return longest;
    }
};
    ```

  </TabItem>
</Tabs>

</TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/description/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solution)

