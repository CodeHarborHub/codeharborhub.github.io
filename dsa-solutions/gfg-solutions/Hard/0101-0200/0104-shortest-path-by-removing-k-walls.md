---
id: shortest-path-by-removing-k-walls
title: Shortest path by removing K walls (Geeks for Geeks)
sidebar_label: Shortest path by removing K walls
tags:
  - Intermediate
  - Geeks for Geeks
  - CPP
  - Python
  - DSA
description: "This is a solution to the Shortest path by removing K walls problem on Geeks for Geeks."
---

## Problem Description

Given a 2-D binary matrix of size n*m, where 0 represents an empty space while 1 represents a wall you cannot walk through. You are also given an integer k.
You can walk up, down, left, or right. Given that you can remove up to k walls, return the minimum number of steps to walk from the top left corner (0, 0) to the bottom right corner (n-1, m-1).
Note: If there is no way to walk from the top left corner to the bottom right corner, return -1.


## Examples

**Example 1:**

**Input:** `n = 3, m = 3, k = 1, mat = {{0, 0, 0}, {0, 0, 1}, {0, 1, 0}}`
**Output:** 4
**Explanation:** We can remove any one of the walls and
reach the bottom in 4 moves.  

**Example 2 :**
**Input:** `n = 2, m = 2, k = 0, mat[] = {{0, 1},{1, 0}}`
**Output:** -1
**Explanation:** There's no way of reaching the bottom corner without removing any walls.

## Your Task

The task is to complete the function shotestPath() which takes three integers n, m, and k and also a matrix of size n*m as input and returns the minimum number of steps to walk from the top left corner to the bottom right corner.

Expected Time Complexity:  $ O(n*m*k).$.
Expected Auxiliary Space: $ O(n*m*k).$.

## Constraints

- `1 ≤ n,m ≤ 50`
- `0 ≤ k ≤ n*m`
- Top left and bottom right corners doesn't have `1`

## Problem Explanation

Here's the step-by-step breakdown of the Scrambled String process:

**Initialization:**
1. Start from the top-left corner (0, 0) of the matrix.
2. Use a priority queue initialized with (0, 0, 0, 0), where:
    - 0: Number of steps taken.
    - 0: Row index of the starting position (0, 0).
    - 0: Column index of the starting position (0, 0).
    - 0: Number of walls removed so far.
3.Use a 2-D array min_steps to track the minimum number of steps to reach each cell (i, j) with up to k walls removed.

**Breadth-First Search (BFS) with Priority Queue:**

1. Pop the cell with the minimum steps from the priority queue.
2. Explore all four possible directions (up, down, left, right).
3. For each valid move:
    - Calculate the new position (new_row, new_col).
    - If the new position is within bounds and is an empty space (0):
        - Calculate the new number of walls removed new_walls_removed.
        - If new_walls_removed is less than or equal to k and the new number of steps is less than min_steps[new_row][new_col], update min_steps[new_row][new_col] and push (new_steps, new_row, new_col, new_walls_removed) into the priority queue.

**Check Destination:**

1. If reaching the bottom-right corner (n-1, m-1), return the number of steps taken.

**Completion:**

1. If the priority queue is empty and the bottom-right corner (n-1, m-1) has not been reached, return -1 indicating no path exists.
**Edge Cases:**

1. Handle cases where the matrix dimensions n and m are 1 specially, as you only need to check if the single cell (0, 0) is reachable and if it's a valid destination.

### Code Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```python
class Solution:
    def shortestPath(self, grid: List[List[int]], k: int) -> int:
        M, N = len(grid), len(grid[0])
                
        q = [(0, 0, k)]
        visited = set()
        steps = 0
        while q:
            newq = []
            for i, j, k in q:
                # If it's the last cell; return the number of steps.
                if i == M-1 and j == N-1:
                    return steps

                # If the cell is already visited; do nothing.
                if (i, j, k) in visited:
                    continue

                # Mark the cell as visited.
                visited.add((i, j, k))

                # Right
                if j < N-1:
                    if grid[i][j+1] == 0:
                        newq.append((i, j+1, k))
                    elif k > 0:
                        newq.append((i, j+1, k-1))

                # Down
                if i < M-1:
                    if grid[i+1][j] == 0:
                        newq.append((i+1, j, k))
                    elif k > 0:
                        newq.append((i+1, j, k-1))
                        
                # Left
                if j > 0:
                    if grid[i][j-1] == 0:
                        newq.append((i, j-1, k))
                    elif k > 0:
                        newq.append((i, j-1, k-1))

                # Up
                if i > 0:
                    if grid[i-1][j] == 0:
                        newq.append((i-1, j, k))
                    elif k > 0:
                        newq.append((i-1, j, k-1))

            q = newq
            steps += 1
            
        return -1
  ```
  </TabItem>

  <TabItem value="C++" label="C++" default>
  <SolutionAuthor name="@ngmuraqrdd"/>
  ```cpp
class Solution 
{
public:
    int shortestPath(vector<vector<int>>& grid, int k) 
    {
        int m = grid.size(), n = grid[0].size();
        if (k >= m + n - 2) return m + n - 2;
        
        deque<vector<int>> dq;
        dq.push_back({0,0,k,0});
        set<vector<int>> seen;
        
        vector<pair<int,int>> dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

        while (!dq.empty())
        {
            vector<int> p = dq.front(); dq.pop_front();
            int i = p[0], j = p[1], k = p[2], s = p[3];
            if (i == m-1 && j == n-1) return s;
            
            for (auto d : dirs)
            {
                int ii = i + d.first, jj = j + d.second;
                if (0 <= ii && ii < m && 0 <= jj && jj < n && k >= grid[ii][jj])
                {
                    vector<int> step = {ii, jj, k-grid[ii][jj]};
                    if (seen.count(step) == 0) 
                    {
                        seen.insert(step);
                        step.push_back(s+1);
                        dq.push_back(step);
                    }
                }
            }
        }
        
        return -1;
    }
};
  ```
  </TabItem>
</Tabs>

## Solution Logic

**1.Base Cases:**If the lengths of the two strings are not equal, they cannot be scrambled forms of each other, so return false.
If the two strings are identical, they are trivially scrambled forms of each other, so return true.
If the length of the string is 1 and the strings are not equal, return false.
**2.Memoization:** Use a map mp to store already solved subproblems to avoid redundant computations.
The key for the map is a combination of the two strings, represented as s1 + " " + s2.
**3.Recursive Check:** Iterate over possible split points of the strings.
For each split point, there are two cases to consider:
1.Without swapping:
Compare the left part of s1 with the left part of s2 and the right part of s1 with the right part of s2.
2.With swapping:
Compare the left part of s1 with the right part of s2 and the right part of s1 with the left part of s2.
**4.Return Result:** If either of the conditions (with or without swapping) is satisfied, return true.
If none of the conditions are satisfied after checking all possible split points, store the result as false in the memoization map and return false.1.

## Time Complexity

 $O(N2)$.

## Space Complexity

 $O(N2)$.

## Resources

- **GFG Problem:** [GFG Problem](https://www.geeksforgeeks.org/problems/shortest-path-by-removing-k-walls/1)
- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/description/)
- **Author's Geeks for Geeks Profile:**  | [DaminiChachane](https://leetcode.com/u/divcxl15/) |

This format ensures that all necessary details about the problem and its solution are clearly presented and easy to follow.
