---
id: Min falling path sum in a Triangle
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
import java.util.Arrays;

class GFG {
 
  public static int helper(int A[][], int i, int j, int dp[][])
  {
    if (i == A.length) {
      return 0;
    }
    if (dp[i][j] != -1) return dp[i][j];    
    return dp[i][j] = A[i][j] + Math.min(helper(A, i+1, j, dp), helper(A, i+1, j + 1, dp));
  }
 
  public static int minSumPath(int A[][]) {
    int n = A.length;
 
    int dp[][] = new int[n][n];
    for(int[] row : dp)
      Arrays.fill(row,-1);
 
    return helper(A, 0, 0, dp) ;
  } 
}


```
### C++ Solution

```cpp
#include <bits/stdc++.h>
using namespace std;

int helper(vector<vector<int>>& A, int i, int j, vector<vector<int>>& dp){
    // Base Case  
    if(i == A.size() ){
      return 0 ;
    }
   
   // To avoid solving overlapping subproblem
   if(dp[i][j] != -1){
     return dp[i][j] ;
   }
   
 
    // Add current to the minimum  of the next paths 
    // and store it in dp matrix
    return dp[i][j] = A[i][j] + min(helper(A, i+1,j, dp), helper(A,i+1, j+1, dp)) ;
     
     
}
 
 
int minSumPath(vector<vector<int>>& A) { 
    int n = A.size() ;
    // Initializating of dp matrix
    vector<vector<int>> dp(n, vector<int>(n, -1) ) ;
    // calling helper function
    return helper(A, 0, 0, dp) ;
}
 
```
### Python Solution

```python
class Solution:

    def helper(A, i, j, dp):
   
    # Base Case  
    if(i == len(A)):
        return 0
   
    # To avoid solving overlapping subproblem
    if(dp[i][j] != -1):
        return dp[i][j]
   
    # Add current to the minimum  of the next paths 
    # and store it in dp matrix
    dp[i][j] = A[i][j] + min(helper(A, i+1,j, dp), helper(A,i+1, j+1, dp))
    return dp[i][j]
 
def minSumPath(A):
    n = len(A)
     
    # Initializating of dp matrix
    dp = [[-1]*n]*n
 
    # calling helper function
    return helper(A, 0, 0, dp)
 
# Driver program to test above functions 
A = [ [ 2 ],[ 3, 9 ],[ 1, 6, 7 ] ]
print(minSumPath(A))
```

### Complexity Analysis
**Time Complexity:** O(n * m)
>where n and m are no of rows and no of columns respectively. 

**Space Complexity:** O(n*n)
>Reason: We are using the extra space in the form of dp array.

### References
**LeetCode Problem:** Min falling path sum in a triangle