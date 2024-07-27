---
id: row-with-maximum-ones
title: Row With Maximum Ones
sidebar_label: 2643. Row With Maximum Ones
tags:
- Array
- Matrix
description: "Solution to Leetcode 2643. Row With Maximum Ones"
---

## Problem Description

Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

Return an array containing the index of the row, and the number of ones in it.
 
### Examples

**Example 1:**

```
Input: mat = [[0,1],[1,0]]
Output: [0,1]
Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1].
```

**Example 2:**

```
Input: mat = [[0,0,0],[0,1,1]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].
```



### Constraints
- `m == mat.length` 
- `n == mat[i].length` 
- `1 <= m, n <= 100`
- `mat[i][j] is either 0 or 1`

### Approach 
- To count the number of ones in a row, we simply iterate over all elements of the row and add up the ones.

- Finally, we return the index of the row with the maximum count of ones, along with the count itself, as a vector of two integers. If there are multiple rows with the maximum count, we return the one with the smallest row number, which is the first one encountered in the loop.

### Complexity

Time complexity: $O(n*m)$

Space complexity: $O(1)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
class Solution {
public:
    vector<int> rowAndMaximumOnes(vector<vector<int>>& mat) {
        int m = mat.size();
        int n = mat[0].size();
        int maxCount = 0;
        int maxRow = 0;
        for (int i = 0; i < m; i++) {
            int count = 0;
            for (int j = 0; j < n; j++) {
                count += mat[i][j];
            }
            if (count > maxCount) {
                maxCount = count;
                maxRow = i;
            }
        }
        return {maxRow, maxCount};
    }
};
 ```

#### JAVA

```java
class Solution {
    public int[] rowAndMaximumOnes(int[][] mat) {
        int max=0,index=0;
        for(int i=0;i<mat.length;i++)
        {
            int val=0;
            for(int j=0;j<mat[0].length;j++)
            {
                if(mat[i][j]==1)
                {
                    val++;
                }
            }
            if(val>max)
            {
                index=i;
                max=val;
            }
        }
        return new int[]{index,max};
    }
}
```

#### PYTHON

```python
class Solution:
    def rowAndMaximumOnes(self, mat: List[List[int]]) -> List[int]:    
        ones = 0 
        index = 0
        for it, row in enumerate(mat):
            c = row.count(1)
            if ones < c:
                ones = c
                index = it
        
        return [index,ones]
```



### Complexity Analysis

- Time Complexity: $O(n*m)$

- Space Complexity: $O(1)$

### References

- **LeetCode Problem**: Row With Maximum Ones
