---
id: number-of-islands
title: Number of Islands
sidebar_label: 0200 - Number of Islands
tags:
  - Graph
  - Depth-First-Search
  - Breadth-First-Search
  - C++
  - Java
  - Python
description: "This is a solution to the Number of Island problem on LeetCode."
---

In this page, we will solve the Number of Islands problem using Two different approaches: Breadth First Search (BFS) and Depth First Search (DFS) technique. We will provide the implementation of the solution in C++, Python, Java.

## Problem Description

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Examples

**Example 1:**

```plaintext
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

**Example 2:**

```plaintext
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j] is '0' or '1'.`

---

## Solution for Number of Islands Problem

### Intuition and Approach

This solution employs a Breadth-First Search (BFS) and Depth First Search (DFS) approach to traverse the grid, identifying islands by exploring contiguous land cells Eight Directionally. It marks visited cells to avoid redundant exploration and counts the number of separate island formations encountered.

<Tabs>
<tabItem value="Breadth First Search" label="Breadth First Search">
  
### Approach 1: Breadth First Search (BFS)

The breadth-first search (BFS) algorithm to traverse through the grid and identify connected components, a count variable to keep track of the number of islands found after that we initializes a 2D vector called vis to mark visited cells in the grid.
For each unvisited cell (grid[row][col] == '1' and vis[row][col] == 0), it increments the count and invokes the bfs function to explore the island further.
Inside bfs, it marks the current cell as visited and pushes it onto a queue. It then enters a while loop where it queues cells from the queue and explores their neighboring cells. For each neighboring cell that meets the criteria of being within bounds, containing '1', and not visited yet, it marks it as visited and enqueues it for further exploration.The loop continues until the queue is empty, indicating that the entire island has been explored.
After exploring all cells in the grid, we returns the count of islands found.

#### Codes in Different Languages

<Tabs>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryan-1309"/>
   ```cpp

        class Solution {
    public:
        void bfs(int row, int col,int m, int n, vector<vector<char>>& grid,vector<vector<int>>& vis){

            vis[row][col]=1;

            queue<pair<int,int>> q;
            q.push({row,col});

            while(!q.empty()){
                int row=q.front().first;
                int col=q.front().second;
                q.pop();

                for(int deltarow=-1;deltarow<=1;deltarow++){
                    for(int deltacol=-1;deltacol<=1;deltacol++){
                        int nrow=row+deltarow;     //neighbour_row
                        int ncol=col+deltacol;     //neighbour_col

                        if((abs(deltarow-deltacol)==1) && nrow>=0 && nrow<n && ncol>=0 && ncol<m &&
                                    grid[nrow][ncol]=='1' && vis[nrow][ncol]==0){
                            vis[nrow][ncol]=1;
                            q.push({nrow,ncol});
                        }
                    }
                }

            }
        }
        int numIslands(vector<vector<char>>& grid) {
            int n=grid.size();
            int m=grid[0].size();
            int count=0;

            vector<vector<int>> vis(n,vector<int>(m,0));

            for(int row=0;row<n;row++){
                for(int col=0;col<m;col++){
                    if(!vis[row][col] && grid[row][col]=='1'){
                        count++;
                        bfs(row,col,m,n,grid,vis);
                    }
                }
            }
            return count;
        }
    };
    ```
  </TabItem>
  <TabItem value="Python" label="Python"> 
  <SolutionAuthor name="@aryan-1309"/>
   ```python

    from collections import deque

    class Solution:
        def bfs(self, row, col, m, n, grid, vis):
            vis[row][col] = 1

            q = deque([(row, col)])

            while q:
                row, col = q.popleft()

                for deltarow in range(-1, 2):
                    for deltacol in range(-1, 2):
                        nrow = row + deltarow  # neighbour_row
                        ncol = col + deltacol  # neighbour_col

                        if (abs(deltarow - deltacol) == 1 and 0 <= nrow < n and 0 <= ncol < m and
                                grid[nrow][ncol] == '1' and vis[nrow][ncol] == 0):
                            vis[nrow][ncol] = 1
                            q.append((nrow, ncol))

    def numIslands(self, grid):
        n = len(grid)
        m = len(grid[0])
        count = 0

        vis = [[0] * m for _ in range(n)]

        for row in range(n):
            for col in range(m):
                if not vis[row][col] and grid[row][col] == '1':
                    count += 1
                    self.bfs(row, col, m, n, grid, vis)

        return count
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java

        class pair
    {
        int row;
        int col;
        pair(int row,int col)
        {
            this.row=row;
            this.col=col;
        }
    }
    class Solution {
        public boolean isValid(int i,int j,int m,int n)
        {
            return i>=0 && i<m && j>=0 && j<n;
        }
        public void bfs(int r,int c,char [][]grid,boolean visited[][])
        {
            visited[r][c]=true;
            Queue<pair> q=new LinkedList<>();
            int m=grid.length,n=grid[0].length;
            q.offer(new pair(r,c));
            while(!q.isEmpty())
            {
                pair top=q.poll();
                int row=top.row;
                int col=top.col;
                if(isValid(row-1,col,m,n))
                {
                    if(grid[row-1][col]=='1' &&!visited[row-1][col])
                    {
                        visited[row-1][col]=true;
                        q.offer(new pair(row-1,col));
                    }
                }
                if(isValid(row+1,col,m,n))
                {
                    if(grid[row+1][col]=='1' &&!visited[row+1][col])
                    {
                        visited[row+1][col]=true;
                        q.offer(new pair(row+1,col));
                    }
                }
                if(isValid(row,col-1,m,n))
                {
                    if(grid[row][col-1]=='1' &&!visited[row][col-1])
                    {
                        visited[row][col-1]=true;
                        q.offer(new pair(row,col-1));
                    }
                }
                if(isValid(row,col+1,m,n))
                {
                    if(grid[row][col+1]=='1' &&!visited[row][col+1])
                    {
                        visited[row][col+1]=true;
                        q.offer(new pair(row,col+1));
                    }
                }
            }
        }
        public int numIslands(char[][] grid) {
            int i,j,m=grid.length,n=grid[0].length;
            boolean visited[][]=new boolean[m][n];
            int count=0;
            for(i=0;i<m;i++)
            {
                for(j=0;j<n;j++)
                {
                    if(!visited[i][j] && grid[i][j]=='1')
                    {
                        count++;
                        bfs(i,j,grid,visited);
                    }
                }
            }
            System.out.println(x);
            return count;
        }
    }
    ```

  </TabItem>  
</Tabs>

#### Complexity Analysis

- Time Complexity: $$O(M*N)$$
- Space Complexity: $$O(M*N)$$
- Where `M` is the row of the grid.
- Where `N` is the col of the grid.

</tabItem>
<tabItem value="Depth First Search" label="Depth First Search">

### Approach 2: Depth First Search (DFS)

In Depth First Search (DFS) algorithm to find number of islands in a grid by initializes a 2D vector vis to keep track of visited cells. It iterates through each cell of the grid and if it's not visited and contains '1', it starts a dfs function call from that cell. During DFS, it marks visited cells and explores neighboring cells recursively. Each time a new island is found, the count is incremented. Finally, the method returns the count of islands in the grid.

#### Code in Different Languages

<Tabs>
  
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@aryan-1309"/>
   ```cpp
        class Solution {
    public:
        void dfs(vector<vector<char>>& grid, vector<vector<int>>& vis, int row, int col, int m, int n){
            vis[row][col] = 1;

            int dr[4] = {+1,0,-1,0};
            int dc[4] = {0,+1,0,-1};

            for(int i=0 ; i<4 ; i++){
                int nrow = row + dr[i];
                int ncol = col + dc[i];
                if(nrow>=0 && nrow<m && ncol>=0 && ncol<n && !vis[nrow][ncol] && grid[nrow][ncol]=='1'){
                    dfs(grid,vis,nrow,ncol,m,n);
                }
            }
        }
        int numIslands(vector<vector<char>>& grid) {

            int m = grid.size();
            int n = grid[0].size();
            int cnt = 0;
            vector<vector<int>> vis(m,vector<int>(n,0));

            for(int row=0 ; row<m ; row++){
                for(int col=0 ; col<n ; col++){
                    if(!vis[row][col] && grid[row][col]=='1'){
                        dfs(grid,vis,row,col,m,n);
                        cnt++;
                    }
                }
            }

            return cnt;
        }
    };
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@aryan-1309"/>
   ```python
    class Solution(object):
    def dfs(self, grid, vis, row, col, m, n):
        vis[row][col] = 1

        dr = [+1, 0, -1, 0]
        dc = [0, +1, 0, -1]

        for i in range(4):
            nrow = row + dr[i]
            ncol = col + dc[i]
            if 0 <= nrow < m and 0 <= ncol < n and not vis[nrow][ncol] and grid[nrow][ncol] == '1':
                self.dfs(grid, vis, nrow, ncol, m, n)
    def numIslands(self, grid):
        m = len(grid)
        n = len(grid[0])
        cnt = 0
        vis = [[0] * n for _ in range(m)]

        for row in range(m):
            for col in range(n):
                if not vis[row][col] and grid[row][col] == '1':
                    self.dfs(grid, vis, row, col, m, n)
                    cnt += 1

        return cnt
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@aryan-1309"/>
   ```java
    class Solution {
        public void dfs(char[][] grid, int[][] vis, int row, int col, int m, int n) {
            vis[row][col] = 1;

            int[] dr = {+1, 0, -1, 0};
            int[] dc = {0, +1, 0, -1};

            for (int i = 0; i < 4; i++) {
                int nrow = row + dr[i];
                int ncol = col + dc[i];
                if (nrow >= 0 && nrow < m && ncol >= 0 && ncol < n && vis[nrow][ncol] == 0 && grid[nrow][ncol] == '1') {
                    dfs(grid, vis, nrow, ncol, m, n);
                }
            }
        }

        public int numIslands(char[][] grid) {
            int m = grid.length;
            int n = grid[0].length;
            int cnt = 0;
            int[][] vis = new int[m][n];

            for (int row = 0; row < m; row++) {
                for (int col = 0; col < n; col++) {
                    if (vis[row][col] == 0 && grid[row][col] == '1') {
                        dfs(grid, vis, row, col, m, n);
                        cnt++;
                    }
                }
            }

            return cnt;
        }
    }
    ```

  </TabItem>
</Tabs> 



#### Complexity Analysis

- Time Complexity: $$O(M*N)$$
- Space Complexity: $$O(M*N)$$
- Where `M` is the row of the grid.
- Where `N` is the col of the grid.

</tabItem>
</Tabs>

## References

- **LeetCode Problem:** [LeetCode Problem](https://leetcode.com/problems/number-of-islands/)
- **Solution Link:** [Number of Islands Solution on LeetCode](https://leetcode.com/problems/number-of-islands/submissions/1236284776/)
