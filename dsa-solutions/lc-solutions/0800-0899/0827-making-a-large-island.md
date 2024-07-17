---
id: making-a-large-island
title: Making a Large Island
sidebar_label: 0827-making-a-large-island
tags:
  - Array
  - Dept-First Search
  - Breadth-First Search
  - Union Find
  - Matrix
description: "This is a solution to making a large island problem on LeetCode."
---

## Problem Description

You are given an `n x n` binary matrix `grid`. You are allowed to change **at most one** `0` to be `1`.

Return the size of the largest Island in `grid` after applying this operation.

An **island** is a `4-directionally` connected group of 1s.

### Examples

**Example 1:**

```
Input: grid = [[1,0],[0,1]]
Output: 3
**Explanation:** Change one 0 to 1 and connect two 1s, then we get an island with area = 3.
```

**Example 2:**

```
Input: grid = [[1,1],[1,0]]
Output: 4
**Explanation:** Change the 0 to 1 and make the island bigger, only one island with area = 4.
```

**Example 3:**

```
Input: grid = [[1,1],[1,1]]
Output: 4
**Explanation:** Can't change any 0 to 1, only one island with area = 4.
```

### Constraints

- `n == grid.length`
- `n == grid[i].lengt`
- `1 <= n <= 500.`
- `grid[i][j] is either 0 or 1.`


## Solution for Assign Cookies

### Approach:

Calculate the islands and count and then calculate the largest area possible.
Here is the step-by-step intuition behind the solution:

1- We would be calculating the islands and their respective area and storing them in a hashMap for further reference.

2- This could be done using simple dfs.

3- calculate the largest area possible.

4- Then we will be iterating through all the cells containing water `(0)` and try changing them into land and check all the four sides contains any piece of land. if yes,then we would take the max of it and return. we will also check whether a chink of island is used only once not multiple times.

The provided snippet is a overall overview of MAX AREA OF ISLAND try to solve this problem before attempting this.



## Code in Different Languages

### C++

```cpp
 class Solution {
public:
    int largestIsland(vector<vector<int>>& grid) {
        int n = grid.size();
        int ref = 2, maxArea = -1;
        unordered_map<int, int> mp;

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    int k = find_val(ref, grid, i, j);
                    mp[ref] = k;
                    ref += 1;
                    maxArea = max(maxArea, k);
                }
            }
        }

        mp[0] = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 0) {
                    int sum = 0;
                    unordered_set<int> seen;
                    if (i > 0) seen.insert(grid[i-1][j]);
                    if (j > 0) seen.insert(grid[i][j-1]);
                    if (i < n-1) seen.insert(grid[i+1][j]);
                    if (j < n-1) seen.insert(grid[i][j+1]);
                    for (int val : seen) {
                        sum += mp[val];
                    }
                    maxArea = max(maxArea, sum + 1);
                }
            }
        }
        return maxArea;
    }

    int find_val(int ref, vector<vector<int>>& grid, int i, int j) {
        if (i < 0 || j < 0 || i >= grid.size() || j >= grid[0].size() || grid[i][j] == 0 || grid[i][j] == ref) {
            return 0;
        }
        grid[i][j] = ref;
        return 1 + find_val(ref, grid, i+1, j) + find_val(ref, grid, i-1, j) + find_val(ref, grid, i, j+1) + find_val(ref, grid, i, j-1);
    }
};

```
### Java

```java
class Solution {
    public int largestIsland(int[][] grid) {
        int n=grid.length;
        int ref=2,max=-1;
        HashMap<Integer,Integer> mp=new HashMap<>();

        //MAX AREA OF ISLAND
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]==1) {
                    int k=find_val(ref,grid,i,j);
                    mp.put(ref,k);
                    ref+=1;
                    max=Math.max(max,k);
                }
            }

        //MAX AREA ALONG WITH THE ADDITION OF ONE PIECE OF LAND.
        mp.put(0,0);
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                if(grid[i][j]==0) {
                    int sum=0,left=0,right=0,up=0,down=0;
                    if(i>0){
                        sum+=(int)mp.get(grid[i-1][j]);
                        up=grid[i-1][j];
                    }
                    if(j>0&&grid[i][j-1]!=up) {
                        sum+=(int)mp.get(grid[i][j-1]);
                        left=grid[i][j-1];
                    }
                    if(i<n-1&&grid[i+1][j]!=up&&grid[i+1][j]!=left){
                        sum+=(int)mp.get(grid[i+1][j]);
                        down=grid[i+1][j];
                    }
                    if(j<n-1&& grid[i][j+1]!=up&& grid[i][j+1]!=down&&grid[i][j+1]!=left){
                        sum+=(int)mp.get(grid[i][j+1]);
                    }
                    max=Math.max(max,sum+1);
                }
            }
        }
        return max;
    }
    }

// MAX AREA OF ISLAND
    public static int find_val(int ref,int[][] arr,int i,int j){
        if(i<0||j<0||i>=arr.length||j>=arr[0].length||arr[i][j]==0||arr[i][j]==ref){
            return 0;
        }
        arr[i][j]=ref;
        return 1+((find_val(ref,arr,i+1,j)+find_val(ref,arr,i-1,j)+find_val(ref,arr,i,j+1)+find_val(ref,arr,i,j-1)));
    }
}

```

### Python

```python
class Solution:
    def largestIsland(self, grid: List[List[int]]) -> int:
        def find_val(ref, grid, i, j):
            if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] == 0 or grid[i][j] == ref:
                return 0
            grid[i][j] = ref
            return 1 + (find_val(ref, grid, i+1, j) + find_val(ref, grid, i-1, j) + find_val(ref, grid, i, j+1) + find_val(ref, grid, i, j-1))

        n = len(grid)
        ref = 2
        max_area = -1
        mp = {}

        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    k = find_val(ref, grid, i, j)
                    mp[ref] = k
                    ref += 1
                    max_area = max(max_area, k)

        mp[0] = 0
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 0:
                    sum_area = 0
                    seen = set()
                    if i > 0:
                        seen.add(grid[i-1][j])
                    if j > 0:
                        seen.add(grid[i][j-1])
                    if i < n-1:
                        seen.add(grid[i+1][j])
                    if j < n-1:
                        seen.add(grid[i][j+1])
                    for k in seen:
                        sum_area += mp.get(k, 0)
                    max_area = max(max_area, sum_area + 1)

        return max_area

```

## Complexity Analysis

### Time Complexity: O(n^2)

### Space Complexity: O(n^2)

## References

- **LeetCode Problem**: [ Making a Large Island](https://leetcode.com/problems/making-a-large-island/)

