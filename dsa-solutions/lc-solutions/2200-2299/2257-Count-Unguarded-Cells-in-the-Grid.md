---
id: Count-Unguarded-Cells-in-the-Grid
title: Count Unguarded Cells in the Grid
sidebar_label: 2257-Count-Unguarded-Cells-in-the-Grid
tags: 
  - Arrays
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Count Unguarded Cells in the Grid problem on LeetCode."
sidebar_position: 58
---

## Problem Statement 
In this tutorial, we will solve the Count Unguarded Cells in the Grid problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

You are given two integers m and n representing a 0-indexed m x n grid. You are also given two 2D integer arrays guards and walls where guards[i] = [rowi, coli] and walls[j] = [rowj, colj] represent the positions of the ith guard and jth wall respectively.

A guard can see every cell in the four cardinal directions (north, east, south, or west) starting from their position unless obstructed by a wall or another guard. A cell is guarded if there is at least one guard that can see it.

Return the number of unoccupied cells that are not guarded.

### Examples

**Example 1:**
Input: m = 4, n = 6, guards = [[0,0],[1,1],[2,3]], walls = [[0,1],[2,2],[1,4]]
Output: 7
Explanation: The guarded and unguarded cells are shown in red and green respectively in the above diagram.
There are a total of 7 unguarded cells, so we return 7.
**Example 2:**
Input: m = 3, n = 3, guards = [[1,1]], walls = [[0,1],[1,0],[2,1],[1,2]]
Output: 4
Explanation: The unguarded cells are shown in green in the above diagram.
There are a total of 4 unguarded cells, so we return 4.

### Constraints
- `1 <= m, n <= 105`
- `2 <= m * n <= 105`
- `1 <= guards.length, walls.length <= 5 * 104`
- `2 <= guards.length + walls.length <= m * n`
- `guards[i].length == walls[j].length == 2`
- `0 <= rowi, rowj < m`
- `0 <= coli, colj < n`
- `All the positions in guards and walls are unique.`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


Brute Force Approach: Simulates each guard's visibility across the entire grid, marking cells until obstacles are encountered. It then counts unguarded cells.

#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <unordered_set>

using namespace std;

int countUnguarded(int m, int n, vector<vector<int>>& guards, vector<vector<int>>& walls) {
    vector<vector<int>> grid(m, vector<int>(n, 0));
    
    // Mark guards on the grid
    for (auto& guard : guards) {
        grid[guard[0]][guard[1]] = -1;
    }
    
    // Mark walls on the grid
    for (auto& wall : walls) {
        grid[wall[0]][wall[1]] = 1;
    }
    
    // Function to check if a cell is within bounds and unguarded
    auto isUnguarded = [&](int x, int y) -> bool {
        return x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == 0;
    };
    
    // Directions for scanning (north, east, south, west)
    vector<pair<int, int>> directions = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
    
    // Simulate visibility for each guard
    for (auto& guard : guards) {
        int x = guard[0], y = guard[1];
        for (auto& dir : directions) {
            int dx = dir.first, dy = dir.second;
            int nx = x + dx, ny = y + dy;
            while (isUnguarded(nx, ny)) {
                grid[nx][ny] = 1;
                nx += dx;
                ny += dy;
            }
        }
    }
    
    // Count unguarded cells
    int unguardedCount = 0;
    for (int x = 0; x < m; ++x) {
        for (int y = 0; y < n; ++y) {
            if (grid[x][y] == 0) {
                ++unguardedCount;
            }
        }
    }
    
    return unguardedCount;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

class Solution {
    public int countUnguarded(int m, int n, int[][] guards, int[][] walls) {
        int[][] grid = new int[m][n];
        
        // Mark guards on the grid
        for (int[] guard : guards) {
            grid[guard[0]][guard[1]] = -1;
        }
        
        // Mark walls on the grid
        for (int[] wall : walls) {
            grid[wall[0]][wall[1]] = 1;
        }
        
        // Function to check if a cell is within bounds and unguarded
        boolean isUnguarded(int x, int y) {
            return x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == 0;
        }
        
        // Directions for scanning (north, east, south, west)
        int[][] directions = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};
        
        // Simulate visibility for each guard
        for (int[] guard : guards) {
            int x = guard[0], y = guard[1];
            for (int[] dir : directions) {
                int dx = dir[0], dy = dir[1];
                int nx = x + dx, ny = y + dy;
                while (isUnguarded(nx, ny)) {
                    grid[nx][ny] = 1;
                    nx += dx;
                    ny += dy;
                }
            }
        }
        
        // Count unguarded cells
        int unguardedCount = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == 0) {
                    unguardedCount++;
                }
            }
        }
        
        return unguardedCount;
    }
}




```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def countUnguarded(m, n, guards, walls):
    grid = [[0] * n for _ in range(m)]
    
    # Mark guards on the grid
    for x, y in guards:
        grid[x][y] = -1
    
    # Mark walls on the grid
    for x, y in walls:
        grid[x][y] = 1
    
    # Function to check if a cell is within bounds and unguarded
    def isUnguarded(x, y):
        return 0 <= x < m and 0 <= y < n and grid[x][y] == 0
    
    # Directions for scanning (north, east, south, west)
    directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    
    # Simulate visibility for each guard
    for x, y in guards:
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            while isUnguarded(nx, ny):
                grid[nx][ny] = 1
                nx += dx
                ny += dy
    
    # Count unguarded cells
    unguarded_count = sum(grid[x][y] == 0 for x in range(m) for y in range(n))
    
    return unguarded_count

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O((g+w)*(n+m))$
- Space Complexity: $O(n*m)$
- where:g is the number of guards,w is the number of walls,n is the number of rows in the grid,m is the number of columns in the grid.
- The time complexity is  $O((g+w)*(n+m))$ .This complexity arises because each guard potentially scans in all four cardinal directions, and each scan operation could traverse up to n or m cells.
-  Additional space may be required for storing guards' and walls' positions, but this is typically bounded by O(g + w), where g is the number of guards and w is the number of walls.

</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

Optimized Approach: Uses sets to efficiently track guarded cells and avoid redundant calculations, resulting in a more optimized solution by leveraging direct visibility calculations.

#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <vector>
#include <unordered_set>

using namespace std;

int countUnguarded(int m, int n, vector<vector<int>>& guards, vector<vector<int>>& walls) {
    unordered_set<string> guardSet;
    unordered_set<string> wallSet;
    unordered_set<string> guardedSet;
    
    // Populate guard set
    for (auto& guard : guards) {
        guardSet.insert(to_string(guard[0]) + "," + to_string(guard[1]));
    }
    
    // Populate wall set
    for (auto& wall : walls) {
        wallSet.insert(to_string(wall[0]) + "," + to_string(wall[1]));
    }
    
    // Directions for scanning (north, east, south, west)
    vector<pair<int, int>> directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    
    // Function to check if a position is within bounds and not obstructed
    auto isValid = [&](int x, int y) -> bool {
        string key = to_string(x) + "," + to_string(y);
        return x >= 0 && x < m && y >= 0 && y < n && !wallSet.count(key);
    };
    
    // Calculate guarded cells
    for (auto& guard : guards) {
        int x = guard[0], y = guard[1];
        for (auto& dir : directions) {
            int dx = dir.first, dy = dir.second;
            int nx = x + dx, ny = y + dy;
            while (isValid(nx, ny)) {
                guardedSet.insert(to_string(nx) + "," + to_string(ny));
                nx += dx;
                ny += dy;
            }
        }
    }
    
    // Total number of cells
    int totalCells = m * n;
    
    // Count unguarded cells
    int unguardedCount = totalCells - guardedSet.size() - wallSet.size();
    
    return unguardedCount;
}

```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
import java.util.*;

class Solution {
    public int countUnguardedCells(int m, int n, int[][] guards, int[][] walls) {
        Set<String> guardSet = new HashSet<>();
        Set<String> wallSet = new HashSet<>();
        Set<String> guardedSet = new HashSet<>();

        // Populate guard set
        for (int[] guard : guards) {
            guardSet.add(Arrays.toString(guard));
        }

        // Populate wall set
        for (int[] wall : walls) {
            wallSet.add(Arrays.toString(wall));
        }

        // Function to check if a position is within grid bounds
        boolean isValid(int row, int col) {
            return row >= 0 && row < m && col >= 0 && col < n;
        }

        // Directions: north, east, south, west
        int[][] directions = { {-1, 0}, {0, 1}, {1, 0}, {0, -1} };

        // Calculate visibility and mark guarded cells
        for (int[] guard : guards) {
            int r = guard[0];
            int c = guard[1];
            for (int[] dir : directions) {
                int nr = r + dir[0];
                int nc = c + dir[1];
                while (isValid(nr, nc) && !wallSet.contains(Arrays.toString(new int[]{nr, nc}))) {
                    guardedSet.add(Arrays.toString(new int[]{nr, nc}));
                    nr += dir[0];
                    nc += dir[1];
                }
            }
        }

        // Count unguarded cells
        int unguardedCount = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                String pos = Arrays.toString(new int[]{i, j});
                if (!guardSet.contains(pos) && !guardedSet.contains(pos)) {
                    unguardedCount++;
                }
            }
        }

        return unguardedCount;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        // Example usage:
        int m1 = 4, n1 = 6;
        int[][] guards1 = { {0, 0}, {1, 1}, {2, 3} };
        int[][] walls1 = { {0, 1}, {2, 2}, {1, 4} };
        System.out.println(sol.countUnguardedCells(m1, n1, guards1, walls1)); // Output: 7

        int m2 = 3, n2 = 3;
        int[][] guards2 = { {1, 1} };
        int[][] walls2 = { {0, 1}, {1, 0}, {2, 1}, {1, 2} };
        System.out.println(sol.countUnguardedCells(m2, n2, guards2, walls2)); // Output: 4
    }
}

```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
def countUnguarded(m, n, guards, walls):
    guard_set = set(tuple(g) for g in guards)
    wall_set = set(tuple(w) for w in walls)
    guarded_set = set()
    
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # north, south, west, east
    
    # Function to check if a position is within bounds and not obstructed
    def is_valid(x, y):
        return 0 <= x < m and 0 <= y < n and (x, y) not in wall_set
    
    # Calculate guarded cells
    for x, y in guards:
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            while is_valid(nx, ny):
                guarded_set.add((nx, ny))
                nx += dx
                ny += dy
    
    # Total number of cells
    total_cells = m * n
    
    # Count unguarded cells
    unguarded_count = total_cells - len(guarded_set) - len(wall_set)
    
    return unguarded_count

```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(g*(m+n))$
- Space Complexity: $O(g+w+g*(m+n)+m*n)$
- g: Number of guards ,m: Number of rows in the grid
 ,n: Number of columns in the grid,w: Number of walls
- The time complexity is $O(n + m)$ because we iterate through both strings once.
- The space complexity is $O(n + m)$ because we store the result in a new string.
- This approach is efficient and straightforward.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>
