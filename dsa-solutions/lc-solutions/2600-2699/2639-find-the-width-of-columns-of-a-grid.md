---
id: find-the-width-of-columns-of-a-grid
title: Find the Width of Columns of a Grid
sidebar_label: 2639. Find the Width of Columns of a Grid
tags:
- Array
- Matrix
description: "Solution to Leetcode 2639. Find the Width of Columns of a Grid"
---

## Problem Description

You are given a 0-indexed m x n integer matrix grid. The width of a column is the maximum length of its integers.

For example, if grid = [[-10], [3], [12]], the width of the only column is 3 since -10 is of length 3.
Return an integer array ans of size n where ans[i] is the width of the ith column.

The length of an integer x with len digits is equal to len if x is non-negative, and len + 1 otherwise.
 
### Examples

**Example 1:**

```
Input: grid = [[1],[22],[333]]
Output: [3]
Explanation: In the 0th column, 333 is of length 3.
```

**Example 2:**

```
Input: grid = [[-15,1,3],[15,7,12],[5,6,-2]]
Output: [3,1,2]
Explanation: 
In the 0th column, only -15 is of length 3.
In the 1st column, all integers are of length 1. 
In the 2nd column, both 12 and -2 are of length 2.

```



### Constraints
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `(-10^9) <= grid[r][c] <= 10^9`

### Approach 
- To find the maximum length of any number we can just convert it to a string and find it length.
- In this way, we can easily find the maximum width of each column.

### Complexity

Time complexity: $O(n*n)$

Space complexity: $O(1)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    vector<int> findColumnWidth(vector<vector<int>>& grid) {
        int m = grid.size(), n = grid[0].size();
        vector<int> ans(n);
    
        for(int j=0; j<n; j++){
            int l=0;
            for(int i=0; i<m; i++){
                l = max(l, int(to_string(grid[i][j]).size()));
            }
            ans[j] = l;
        }
        return ans;
    }
};
 ```

#### JAVA

```java
class Solution {
    public int[] findColumnWidth(int[][] grid) {
        int m=grid.length,n=grid[0].length;
        int ans[]=new int[n];
        for(int i=0;i<n;i++)
        {
            int max=0;
            for(int j=0;j<m;j++)
            {
                max=Math.max(max,String.valueOf(grid[j][i]).length());
            }
            ans[i]=max;
        }
        return ans;
    }
}
```

#### PYTHON

```python
def findColumnWidth(self, A: List[List[int]]) -> List[int]:
    return [max(len(str(a)) for a in r) for r in zip(*A)]
```



### Complexity Analysis

- Time Complexity: $O(n*m)$

- Space Complexity: $O(1)$

### References

- **LeetCode Problem**: Find the Width of Columns of a Grid
