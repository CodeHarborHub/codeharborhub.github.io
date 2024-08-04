---
id: Min-falling-path-sum-in-a-Triangle
title: Min falling path sum in a Triangle
sidebar_label: 120-Min falling path sum in a Triangle
tags:
- Recursion
- Dynamic Programming
- Java
- Cpp
- Python
description: "Given a triangular type matrix we need to return the minimum sum for reaching the bottom from the top . in each step we can either move down or diagonally right"
---

## Problem

Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

### Examples

**Example 1:**

**Input:** triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
**Output:** 11
**Explanation:** The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).

**Example 2:**

**Input:** triangle = [[-10]]
**Output:** -10

### Constraints

- `1 <= triangle.length <= 200`
- `triangle[0].length == 1`
- `triangle[i].length == triangle[i - 1].length + 1`
- `-104 <= triangle[i][j] <= 104`


---

## Approach

 Memoization – Starting from the top node, traverse recursively with each node, till the pathsum of that node is calculated. And then store the result in an array. But this will take O(N^2) space to maintain the array.

### Steps:

Step 1: Initialize the Memoization Table

Create a 2D array dp of size n x n, where n is the number of rows in the triangle. Initialize all elements in dp to INT_MAX (or a large negative number) except for the first row, which is set to the corresponding elements in the input triangle.

Step 2: Fill the Memoization Table

Iterate through each cell in the triangle, starting from the second row. For each cell (i, j), calculate the minimum sum of the falling path that ends at this cell by considering the two possible paths:

Directly below: (i+1, j)
Diagonally right: (i+1, j+1)
Update dp[i][j] with the minimum sum of these three paths.

Step 3: Return the Minimum Falling Path Sum

The minimum falling path sum is the minimum value in the last row of the dp table.
### Solution

#### Java Solution

```java
class Solution {
    public int minimumTotal(List<List<Integer>> triangle) {
        int n = triangle.size();
        int[][] dp = new int[n][n];
        
        // Initialize the dp array with a large value
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dp[i][j] = Integer.MAX_VALUE;
            }
        }
        // Recursive function with memoization
        return f(triangle, 0, 0, dp);
    }
    private int f(List<List<Integer>> triangle, int i, int j, int[][] dp) {
        int n = triangle.size();
        if (i == n - 1) {
            return triangle.get(i).get(j);
        }
        if (dp[i][j] != Integer.MAX_VALUE) {
            return dp[i][j];
        }
        int down = triangle.get(i).get(j) + f(triangle, i + 1, j, dp);
        int diag = triangle.get(i).get(j) + f(triangle, i + 1, j + 1, dp);
        dp[i][j] = Math.min(down, diag);
        return dp[i][j];
    }
    public static void main(String[] args) {
        Solution solution = new Solution();
        List<List<Integer>> triangle = new ArrayList<>();
        triangle.add(List.of(2));
        triangle.add(List.of(3, 4));
        triangle.add(List.of(6, 5, 7));
        triangle.add(List.of(4, 1, 8, 3));
        System.out.println(solution.minimumTotal(triangle)); // Output: 11
    }
}


```
### C++ Solution

```cpp
class Solution {
public:
    int minimumTotal(vector<vector<int>>& triangle) {
        int n = triangle.size();
        vector<vector<int>> dp(n, vector<int>(n, INT_MAX));

        function<int(int, int)> f = [&](int i, int j) -> int {
            if (i == n - 1) {
                return triangle[i][j];
            }
            if (dp[i][j] != INT_MAX) {
                return dp[i][j];
            }
            int down = triangle[i][j] + f(i + 1, j);
            int diag = triangle[i][j] + f(i + 1, j + 1);
            return dp[i][j] = min(down, diag);
        };

        return f(0, 0);
    }
};
 
```
### Python Solution

```python
class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)
        dp = [[float('inf')] * n for _ in range(n)]

        def f(i: int, j: int) -> int:
            if i == n - 1:
                return triangle[i][j]
            if dp[i][j] != float('inf'):
                return dp[i][j]
            down = triangle[i][j] + f(i + 1, j)
            diag = triangle[i][j] + f(i + 1, j + 1)
            dp[i][j] = min(down, diag)
            return dp[i][j]

        return f(0, 0)
```
### javascript Solution

```javascript
var minimumTotal = function(triangle) {

    let n = triangle.length;
    let dp = Array(n).fill(Number.MAX_VALUE).map(()=> Array(n).fill(Number.MAX_VALUE));
    //let min = Number.MAX_VALUE;
    function f(i, j){

        if(i == n-1){return triangle[i][j];}
        if(dp[i][j] != Number.MAX_VALUE) return dp[i][j];
        let down = triangle[i][j] + f(i+1, j);
        
        let diag = triangle[i][j] + f(i+1, j+1);
        return dp[i][j] = Math.min(down, diag);
    }
    return f(0, 0);
};
```
### Complexity Analysis
**Time Complexity:** O(n * m)
>where n and m are no of rows and no of columns respectively. 

**Space Complexity:** O(n*n)
>Reason: We are using the extra space in the form of dp array.

### References
**LeetCode Problem:** Min falling path sum in a triangle
