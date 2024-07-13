---
id: minimum-number-of-visited-cells-in-a-grid
title: Minimum Number of Visited Cells in a Grid
sidebar_label: 2617. Minimum Number of Visited Cells in a Grid
tags:
- Array
- Binary Search
- Greedy
description: "Solution to Leetcode 2617. Minimum Number of Visited Cells in a Grid"
---

## Problem Description

You are given a 0-indexed m x n integer matrix grid. Your initial position is at the top-left cell (0, 0).

Starting from the cell (i, j), you can move to one of the following cells:

- Cells (i, k) with j &lt; k &lt;= grid[i][j] + j (rightward movement), or
- Cells (k, j) with i &lt; k &lt;= grid[i][j] + i (downward movement).

Return the minimum number of cells you need to visit to reach the bottom-right cell (m - 1, n - 1). If there is no valid path, return -1.
 
### Examples

**Example 1:**

```
Input: grid = [[3,4,2,1],[4,2,3,1],[2,1,0,0],[2,4,0,0]]
Output: 4
Explanation: The image above shows one of the paths that visits exactly 4 cells.
```

**Example 2:**

```
Input: grid = [[3,4,2,1],[4,2,1,1],[2,1,1,0],[3,4,1,0]]
Output: 3
Explanation: The image above shows one of the paths that visits exactly 3 cells.

```



### Constraints
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 10^5`
- `0 <= grid[i][j] < m * n`
- `grid[m - 1][n - 1] == 0`

### Approach 
This code is using the breadth-first search algorithm to find the minimum number of cells that need to be visited to reach from the top-left cell of a given grid to the bottom-right cell. To avoid iterating over the entire grid again and again, it uses a Set/TreeSet/SortedList data structure to keep track of the visited nodes in the horizontal and vertical directions. This enables efficient iteration over the subset of cells that haven't been visited yet.

During the for loop, the irange method of the SortedList object is used to iterate over the subset of cells that haven't been visited yet. Specifically, for the s0 list, it iterates over the columns that haven't been visited yet and are within the range of (j+1, min(j+1+grid[i][j], n) - 1). Similarly, for the s1 list, it iterates over the rows that haven't been visited yet and are within the range of (i+1, min(i+1+grid[i][j], m) - 1). This results in significant speed-ups when the grid is large or the values of grid[i][j] are large.

### Complexity

Time complexity: $O(mn * log(max(m, n)))$

Space complexity: $O(mn)$

### Solution

#### Code in Different Languages

#### C++

 ```cpp
int minimumVisitedCells(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    vector<set<int>> s0(m), s1(n);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            s0[i].insert(j);
            s1[j].insert(i);
        }
    }
    queue<vector<int>> q;
    q.push({0, 0, 1});

    while (!q.empty()) {
        auto cell = q.front(); q.pop();
        int i = cell[0], j = cell[1], d = cell[2];
        if (i == m - 1 && j == n - 1) return d;

        auto it = s0[i].lower_bound(j + 1);
        while (it != s0[i].end() && *it <= j + grid[i][j]) {
            q.push({i, *it, d + 1});
            s1[*it].erase(i);
            s0[i].erase(it++);
        }
        it = s1[j].lower_bound(i + 1);
        while (it != s1[j].end() && *it <= i + grid[i][j]) {
            q.push({*it, j, d + 1});
            s0[*it].erase(j);
            s1[j].erase(it++);
        }
    }
    return -1;
}
 ```

#### JAVA

```java
public int minimumVisitedCells(int[][] grid) {
    int m = grid.length, n = grid[0].length;
    TreeSet<Integer>[] s0 = new TreeSet[m], s1 = new TreeSet[n];
    for (int i = 0; i < m; i++) {
        s0[i] = new TreeSet<>();
        for (int j = 0; j < n; j++)
            s0[i].add(j);
    }
    for (int j = 0; j < n; j++) {
        s1[j] = new TreeSet<>();
        for (int i = 0; i < m; i++) 
            s1[j].add(i);
    }
    Queue<int[]> q = new LinkedList<>();
    q.offer(new int[]{0, 0, 1});

    while (!q.isEmpty()) {
        int[] cell = q.poll();
        int i = cell[0], j = cell[1], d = cell[2];
        if (i == m - 1 && j == n - 1) return d;

        Integer k = s0[i].ceiling(j+1);
        while (k != null && k <= j + grid[i][j]) {
            q.offer(new int[]{i, k.intValue(), d + 1});
            s0[i].remove(k);
            s1[k.intValue()].remove(i);
            k = s0[i].ceiling(j + 1);
        }
        k = s1[j].ceiling(i+1);
        while (k != null && k <= i + grid[i][j]) {
            q.offer(new int[]{k.intValue(), j, d + 1});
            s1[j].remove(k);
            s0[k.intValue()].remove(j);
            k = s1[j].ceiling(i + 1);
        }
    }
    return -1;
}
```

#### PYTHON

```python
from sortedcontainers import SortedList
class Solution:
    def minimumVisitedCells(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        s0 = [SortedList(range(n)) for _ in range(m)]
        s1 = [SortedList(range(m)) for _ in range(n)]
        q = deque([(0, 0, 1)])

        while q:
            i, j, d = q.popleft()
            if (i, j) == (m-1, n-1):
                return d
            for k in list(s0[i].irange(j+1, min(j+1+grid[i][j], n) - 1)):
                q.append((i, k, d+1))
                s0[i].remove(k)
                s1[k].remove(i)
            for k in list(s1[j].irange(i+1, min(i+1+grid[i][j], m) - 1)):
                q.append((k, j, d+1))
                s1[j].remove(k)
                s0[k].remove(j)
        return -1
```



### Complexity Analysis

- Time Complexity: $O(mn * log(max(m, n)))$

- Space Complexity: $O(mn)$

### References

- **LeetCode Problem**: Minimum Number of Visited Cells in a Grid
