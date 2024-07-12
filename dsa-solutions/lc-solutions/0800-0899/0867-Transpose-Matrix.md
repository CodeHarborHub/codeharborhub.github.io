---
id: transpose-matrix
title: Transpose Matrix
sidebar_label: 867-Transpose-Matrix
tags:
  - Araay
  - Matrix
  - Simulation

---

## Problem Description
Given a 2D integer array `matrix`, return the transpose of `matrix`.


### Example

**Example 1:**

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
```

**Example 2:**
```
Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
```

### Constraints

- `1 <= m * n <= 105`

## Solution Approach

### Intuition:

To efficiently determine the transpose of the matrix


## Solution Implementation

### Code (C++):

```cpp
class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        vector<vector<int>> ans(n, vector<int>(m));
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                ans[j][i]=matrix[i][j];
            }
        }
        return ans;
    }
};

```