---
id: rotting-oranges
title: Rotting Oranges
sidebar_label: 0994 - Rotting-Oranges 
tags:
  - Dfs
  - Bfs
  - Matrix
  - JavaScript
  - TypeScript
description: "This is a solution to the Two Sum problem on LeetCode."
---

In this page, we will solve the Rotting Oranges problem using two different approaches: Breadth First Search and Depth First Search technique. We will provide the implementation of the solution in JavaScript, TypeScript, Python, Java, C++, and more.

## Problem Description

You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

### Examples

**Example 1:**

```plaintext
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
```

**Example 2:**

```plaintext
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
```

**Example 3:**

```plaintext
Input: grid = [[0,2]]
Output: 0
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 10`
- grid[i][j] is 0, 1, or 2.



---

## Solution for Rotting Oranges Problem

### Intuition and Approach

The idea is that for each rotten orange, we will find how many fresh oranges there are in its 4 directions. If we find any fresh orange we will make it into a rotten orange. One rotten orange can rotten up to 4 fresh oranges present in its 4 directions. For this problem, First we will be using the BFS ( Breadth-First Search ) technique and Then will be using the DFS ( Depth-First Search ) technique.

<Tabs>
 <tabItem value="Breadth First Search" label="Breadth First Search">
  
### Approach 1: Breadth First Search

First of all we will create a Queue data structure to store coordinate of Rotten Oranges

    We will also have variables as:

Total_oranges - It will store total number of oranges in the grid ( Rotten + Fresh )
Count - It will store the total number of oranges rotten by us . 
Total_time - total time taken to rotten.
-> After this, we will traverse the whole grid and count the total number of oranges in the grid and store it in Total_oranges. Then we will also push the rotten oranges in the Queue data structure as well.

-> Now while our queue is not empty,  we will pick up each Rotten Orange and check in all its 4 directions whether a Fresh orange is present or not. If it is present we will make it rotten and push it in our queue data structure and pop out the Rotten Orange which we took up as its work is done now.

-> Also we will keep track of the count of rotten oranges we are getting.

-> If we rotten some oranges, then obviously our queue will not be empty. In that case, we will increase our total time. This goes on until our queue becomes empty. 

-> After it becomes empty, We will check whether the total number of oranges initially is equal to the current count of oranges. If yes, we will return the total time taken, else will return -1 because some fresh oranges are still left and can’t be made rotten.

#### Codes in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryan-1309"/>
   ```javascript
    function twoSum(nums, target) {
    var orangesRotting = function(grid) {
     let fresh = 0,
            rott = 0,
            m = grid.length,
            n = grid[0].length;
        const q = [];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2) {
                    q.push([i, j]);
                }

                if (grid[i][j] === 1) fresh++;
            }
        }

        if (fresh === 0) return 0;

        console.log(fresh);

        const dr = [1, 0, -1, 0];
        const dc = [0, 1, 0, -1];
        let cnt = -1;

        while (q.length > 0) {
            let size = q.length;
            while (size--) {
                const [x, y] = q.shift();
                for (let i = 0; i < 4; i++) {
                    const row = x + dr[i];
                    const col = y + dc[i];

                    if (
                        row >= 0 &&
                        row < m &&
                        col >= 0 &&
                        col < n &&
                        grid[row][col] === 1
                    ) {
                        q.push([row, col]);
                        grid[row][col] = 2;
                        rott++;
                    }
                }
            }
            cnt++;
        }

        console.log(rott);

        return fresh === rott ? cnt : -1;
    };
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryan-1309"/> 
   ```typescript
    function orangesRotting(grid: number[][]): number {
    let fresh = 0,
            rott = 0,
            m = grid.length,
            n = grid[0].length;
        const q: [number, number][] = [];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 2) {
                    q.push([i, j]);
                }

                if (grid[i][j] === 1) fresh++;
            }
        }

        if (fresh === 0) return 0;

        let dr = [+1, 0, -1, 0];
        let dc = [0, +1, 0, -1];
        let cnt = -1;

        while (q.length > 0) {
            let size = q.length;
            while (size--) {
                let [x, y] = q.shift()!;
                for (let i = 0; i < 4; i++) {
                    let row = x + dr[i];
                    let col = y + dc[i];

                    if (
                        row >= 0 &&
                        row < m &&
                        col >= 0 &&
                        col < n &&
                        grid[row][col] === 1
                    ) {
                        q.push([row, col]);
                        grid[row][col] = 2;
                        rott++;
                    }
                }
            }
            cnt++;
        }

        return fresh === rott ? cnt : -1;
    };
    ```

  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@aryan-1309"/>
   ```python
    from collections import deque

    class Solution(object):
    def orangesRotting(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        fresh = 0
        rott = 0
        m = len(grid)
        n = len(grid[0])
        q = deque()

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    q.append((i, j))
                if grid[i][j] == 1:
                    fresh += 1

        if fresh == 0:
            return 0

        dr = [1, 0, -1, 0]
        dc = [0, 1, 0, -1]
        cnt = -1

        while q:
            size = len(q)
            while size > 0:
                x, y = q.popleft()

                for i in range(4):
                    row = x + dr[i]
                    col = y + dc[i]

                    if 0 <= row < m and 0 <= col < n and grid[row][col] == 1:
                        q.append((row, col))
                        grid[row][col] = 2
                        rott += 1
                size -= 1
            cnt += 1 

        return cnt if fresh == rott else -1

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java
    import java.util.LinkedList;
    import java.util.Queue;

    class Solution {
        public int orangesRotting(int[][] grid) {
            int fresh = 0, rott = 0, m = grid.length, n = grid[0].length;
            Queue<int[]> q = new LinkedList<>();

            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (grid[i][j] == 2) {
                        q.add(new int[]{i, j});
                    }

                    if (grid[i][j] == 1) fresh++;
                }
            }

            if (fresh == 0) return 0;

            int[] dr = {+1, 0, -1, 0};
            int[] dc = {0, +1, 0, -1};
            int cnt = -1;

            while (!q.isEmpty()) {
                int size = q.size();
                while (size-- > 0) {
                    int[] curr = q.poll();
                    int x = curr[0];
                    int y = curr[1];

                    for (int i = 0; i < 4; i++) {
                        int row = x + dr[i];
                        int col = y + dc[i];

                        if (row >= 0 && row < m && col >= 0 && col < n && grid[row][col] == 1) {
                            q.add(new int[]{row, col});
                            grid[row][col] = 2;
                            rott++;
                        }
                    }
                }
                cnt++;
            }

            return fresh == rott ? cnt : -1;
        }
    }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryan-1309"/>
   ```cpp
    class Solution {
    public:
        int orangesRotting(vector<vector<int>>& grid) {
            
            int fresh=0, rott=0, m=grid.size(), n=grid[0].size();
            queue<pair<int,int>> q;

            for(int i=0 ; i<m ; i++){
                for(int j=0 ; j<n ; j++){
                    if(grid[i][j]==2){
                        q.push({i,j});
                    }

                    if(grid[i][j]==1) fresh++;
                }
            }

            if(fresh==0) return 0;

            cout<< fresh << endl;
            
            int dr[4] = {+1,0,-1,0};
            int dc[4] = {0,+1,0,-1};
            int cnt = -1;

            while(!q.empty()){
                int size = q.size();
                while(size--){
                int x = q.front().first;
                int y = q.front().second;
                q.pop();

                for(int i=0 ; i<4 ; i++){
                    int row = x + dr[i];
                    int col = y + dc[i];

                    if(row>=0 && row<m && col>=0 && col<n && grid[row][col]==1){
                        q.push({row,col});
                        grid[row][col] = 2;
                        rott++;
                    }
                }
                }
                cnt++; 
            }

            cout << rott ;

            return fresh==rott ? cnt : -1;
        }
    };
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(m*n)$$
- Space Complexity: $$O(m*n)$$
- Where `m` is the number of rows of the input matrix `grid`.
- Where `n` is the number of columns of the input matrix `grid`.



</tabItem>
<tabItem value="Depth First Search" label="Depth First Search">

### Approach 2: Depth First Search
 
In Depth-First Search (DFS) strategy to traverse the grid, starting from each initially rotten orange ('2') and propagating the rot to adjacent fresh oranges.
The algorithm marks each fresh orange it encounters with the time taken for rotting. After completing the DFS traversal for all initially rotten oranges, it checks for any remaining fresh oranges. If there are any, it returns -1 to signify that it's impossible to rot all oranges; otherwise, it returns the maximum time taken for rotting minus 2, as the initial time is set to 2. The underlying intuition involves simulating the rotting process by spreading the rot from initially rotten oranges to adjacent fresh ones, updating the time at each step until all reachable oranges are marked as rotten.



#### Code in Different Languages

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
  <SolutionAuthor name="@aryan-1309"/>
   ```javascript
    var orangesRotting = function(grid) {
    function dfs(grid, i, j, time) {
        const m = grid.length;
        const n = grid[0].length;
        // base case
        if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === 0 || 
            (grid[i][j] > 1 && grid[i][j] < time)) return;
        
        grid[i][j] = time;
        dfs(grid, i + 1, j, time + 1);
        dfs(grid, i - 1, j, time + 1);
        dfs(grid, i, j + 1, time + 1);
        dfs(grid, i, j - 1, time + 1);
    }

    let time = 2;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2)
                dfs(grid, i, j, time);
        }
    }
    
    for (const row of grid) {
        for (const cell of row) {
            if (cell === 1) return -1;
            time = Math.max(time, cell);
        }
    }
    return time - 2;
   };
    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@aryan-1309"/>
   ```typescript
    function orangesRotting(grid: number[][]): number {
    function dfs(grid: number[][], i: number, j: number, time: number): void {
        const m = grid.length;
        const n = grid[0].length;
        // base case
        if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === 0 || 
            (grid[i][j] > 1 && grid[i][j] < time)) return;
        
        grid[i][j] = time;
        dfs(grid, i + 1, j, time + 1);
        dfs(grid, i - 1, j, time + 1);
        dfs(grid, i, j + 1, time + 1);
        dfs(grid, i, j - 1, time + 1);
    }

    let time = 2;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2)
                dfs(grid, i, j, time);
        }
    }
    
    for (const row of grid) {
        for (const cell of row) {
            if (cell === 1) return -1;
            time = Math.max(time, cell);
        }
    }
    return time - 2;
   }

    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@aryan-1309"/>
   ```python
    class Solution(object):
    def dfs(self, grid, i, j, time):
        m = len(grid)
        n = len(grid[0])
        # base case
        if i >= m or j >= n or i < 0 or j < 0 or grid[i][j] == 0 or \
                (grid[i][j] > 1 and grid[i][j] < time):
            return

        grid[i][j] = time
        self.dfs(grid, i + 1, j, time + 1)
        self.dfs(grid, i - 1, j, time + 1)
        self.dfs(grid, i, j + 1, time + 1)
        self.dfs(grid, i, j - 1, time + 1)

    def orangesRotting(self, grid):

        time = 2

        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 2:
                    self.dfs(grid, i, j, time)

        for i in grid:
            for j in i:
                if j == 1:
                    return -1
                time = max(time, j)
        return time - 2

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java
    class Solution {
        public void dfs(int[][] grid, int i, int j, int time) {
            int m = grid.length;
            int n = grid[0].length;
            // base case
            if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] == 0 ||
                    (grid[i][j] > 1 && grid[i][j] < time)) return;

            grid[i][j] = time;
            dfs(grid, i + 1, j, time + 1);
            dfs(grid, i - 1, j, time + 1);
            dfs(grid, i, j + 1, time + 1);
            dfs(grid, i, j - 1, time + 1);
        }

        public int orangesRotting(int[][] grid) {
            int time = 2;

            for (int i = 0; i < grid.length; i++) {
                for (int j = 0; j < grid[0].length; j++) {
                    if (grid[i][j] == 2)
                        dfs(grid, i, j, time);
                }
            }

            for (int[] i : grid) {
                for (int j : i) {
                    if (j == 1) return -1;
                    time = Math.max(time, j);
                }
            }
            return time - 2;
        }
   }
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryan-1309"/>
   ```cpp
    class Solution {
    public:
        void dfs(vector<vector<int>> &grid, int i, int j, int time){
            int m = grid.size();
            int n = grid[0].size();
            // base case
            if(i>=m || j>=n || i<0 || j<0 || grid[i][j]==0 || 
                (grid[i][j]>1 && grid[i][j]<time)) return;
            
            grid[i][j] = time;
            dfs(grid, i+1, j, time+1);
            dfs(grid, i-1, j, time+1);
            dfs(grid, i, j+1, time+1);
            dfs(grid, i, j-1, time+1);
        }
        int orangesRotting(vector<vector<int>>& grid) {
            int time=2;

            for(int i=0; i<grid.size(); i++){
                for(int j=0; j<grid[0].size(); j++){
                    if(grid[i][j] == 2)
                    dfs(grid, i, j, time);
                }
            }
            
            for(auto i: grid){
                for(auto j: i){
                    if(j==1) return -1;
                    time = max(time, j);
                }
            }
            return time-2;
        }
    };
    ```

  </TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(m*n)$$
- Space Complexity: $$O(m*n)$$
- Where `m` is the number of rows of the input matrix `grid`.
- Where `n` is the number of columns of the input matrix `grid`.


</tabItem>
</Tabs>


## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/rotting-oranges/description/)
- **Solution Link:** [Two Sum Solution on LeetCode](https://leetcode.com/problems/rotting-oranges/solutions/239659/dfs-bfs-clean-code/)
