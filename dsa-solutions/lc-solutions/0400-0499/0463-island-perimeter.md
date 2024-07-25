---
id: island-perimeter
title: Island Perimeter
sidebar_label: 0463-island-perimeter
tags:
- Array
- Depth first search
- Breadth first search
- Matrix
description: "This is a solution to the Island Perimeter problem on LeetCode."
---

## Problem Description

You are given `row x col` `grid` representing a map where `grid[i][j] = 1` represents land and `grid[i][j] = 0` represents water.

Grid cells are connected horizontally/vertically (not diagonally). The `grid` is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

### Examples

**Example 1:**

```
Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image above.
```

**Example 2:**

```
Input: grid = [[1]]
Output: 4
```

### Constraints

- `row == grid.length`
- `col == grid[i].length`
- `1 <= row, col <= 100`
- `grid[i][j]` is `0` or `1`.
- There is exactly one island in `grid`.


### Approach

#### Intuition

To solve this problem, we need to calculate the total perimeter contributed by each land cell in the grid. Since we're working with a grid that has connected cells horizontally and vertically, each land cell that does not touch another land cell contributes 4 units to the perimeter (as it has four sides).

Here's the intuitive step-by-step approach:

1. Initialize a perimeter count to 0.
2. Iterate through each cell in the grid.
3. If a cell is land (1), increment the perimeter count by 4 (all possible sides of a single cell).
4. Then, check the adjacent cells:
- If there is a land cell to the right (horizontally adjacent), the shared edge does not contribute to the perimeter, so we subtract 2 from the perimeter count (as it removes one edge from each of the two adjacent land cells).
- Similarly, if there is a land cell below (vertically adjacent), subtract 2 for the shared edge.
5. Continue this process for all land cells in the grid.
6. Return the total perimeter count.

This approach works because it dynamically adjusts the perimeter count based on the land cell's adjacency with other land cells, ensuring that shared edges are only counted once.

## Code in Different Languages

<Tabs>
<TabItem value="cpp" label="C++">
  <SolutionAuthor name="@tanyagupta01"/>

```cpp
class Solution {
 public:
  int islandPerimeter(vector<vector<int>>& grid) {
    int islands = 0;
    int neighbors = 0;

    for (int i = 0; i < grid.size(); ++i)
      for (int j = 0; j < grid[0].size(); ++j)
        if (grid[i][j]) {
          ++islands;
          if (i - 1 >= 0 && grid[i - 1][j])
            ++neighbors;
          if (j - 1 >= 0 && grid[i][j - 1])
            ++neighbors;
        }

    return islands * 4 - neighbors * 2;
  }
};
```
</TabItem>
<TabItem value="java" label="Java">
  <SolutionAuthor name="@tanyagupta01"/>

```java
class Solution {
  public int islandPerimeter(int[][] grid) {
    int islands = 0;
    int neighbors = 0;

    for (int i = 0; i < grid.length; ++i)
      for (int j = 0; j < grid[0].length; ++j)
        if (grid[i][j] == 1) {
          ++islands;
          if (i - 1 >= 0 && grid[i - 1][j] == 1)
            ++neighbors;
          if (j - 1 >= 0 && grid[i][j - 1] == 1)
            ++neighbors;
        }

    return islands * 4 - neighbors * 2;
  }
}
```

</TabItem>
<TabItem value="python" label="Python">
  <SolutionAuthor name="@tanyagupta01"/>

```python
class Solution:
  def islandPerimeter(self, grid: List[List[int]]) -> int:
    m = len(grid)
    n = len(grid[0])

    islands = 0
    neighbors = 0

    for i in range(m):
      for j in range(n):
        if grid[i][j] == 1:
          islands += 1
          if i + 1 < m and grid[i + 1][j] == 1:
            neighbors += 1
          if j + 1 < n and grid[i][j + 1] == 1:
            neighbors += 1

    return islands * 4 - neighbors * 2
```
</TabItem>
</Tabs>

## Complexity Analysis

### Time Complexity: O(mn)

### Space Complexity: O(1)

## References

- **LeetCode Problem**: [Island Perimeter](https://leetcode.com/problems/island-perimeter/description/)

- **Solution Link**: [Island Perimeter](https://leetcode.com/problems/island-perimeter/solutions/)
