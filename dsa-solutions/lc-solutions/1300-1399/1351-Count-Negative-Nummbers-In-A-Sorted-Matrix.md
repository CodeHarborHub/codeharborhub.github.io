---
id: count-negative-in-a-sorted-matrix
title:  Count Negative Numbers in a Sorted Matrix
sidebar_label: 1351-Count-Negative-Nummbers-In-A-Sorted-Matrix.
tags:
  - Array
  - Binary Search
  - Matrix

description: The problem no. is 1351. The Problem is Count Negative Numbers in a Sorted Matrix.
---

## Problem Description
Given a `m x n` matrix `grid` which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in `grid`.


### Example

**Example 1:**


```
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
```
**Example 2:**
```
Input: grid = [[3,2],[1,0]]
Output: 0
```
### Constraints

- `0 <= num <= 106`

## Solution Approach

### Intuition:

To efficiently determine the Count Negative Numbers in a Sorted Matrix
## Solution Implementation

### Code In Different Languages:

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```javascript
    
class Solution {
    countNegatives(grid) {
        let m = grid.length;
        let n = grid[0].length;
        let cnt = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] < 0) cnt++;
            }
        }
        return cnt;
    }
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@Ishitamukherjee2004"/> 
   ```typescript
    class Solution {
    countNegatives(grid: number[][]): number {
        let m = grid.length;
        let n = grid[0].length;
        let cnt = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] < 0) cnt++;
            }
        }
        return cnt;
    }
}



    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```python
    class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        cnt = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] < 0:
                    cnt += 1
        return cnt



    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```java
    public class Solution {
    public int countNegatives(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int cnt = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] < 0) cnt++;
            }
        }
        return cnt;
    }
}


    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@Ishitamukherjee2004"/>
   ```cpp
class Solution {
public:
    int countNegatives(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        int cnt = 0;
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if(grid[i][j]<0) cnt++;
            }
        }
        return cnt;
    }
};

```
</TabItem> 
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(m*n)$$
- Space Complexity: $$O(1)$$
- The time complexity is $$O(log(n))$$ where m and n are the number of rows and columns in the grid, respectively. This is because the algorithm iterates over each element in the grid once.
- The space complexity is $$O(1)$$ because we are not using any extra space.