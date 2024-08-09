---
id: number-of-islands-ii
title: Number of Islands II
sidebar_label: 0305-Number-of-Islands-II
tags: [Union-Find, Matrix, Hard]
description: Given a 2D grid map of `m` rows and `n` columns initially filled with water, perform `addLand` operations that turn the water at specific positions into land. Return the number of islands after each operation. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

---

## Problem Statement

You are given an empty 2D binary grid `grid` of size `m x n`. The grid represents a map where `0`s represent water and `1`s represent land. Initially, all the cells of `grid` are water cells (i.e., all the cells are `0`s).

We may perform an `addLand` operation which turns the water at position `(ri, ci)` into land. You are given an array `positions` where `positions[i] = [ri, ci]` is the position `(ri, ci)` at which we should operate the `i`-th operation.

Return an array of integers `answer` where `answer[i]` is the number of islands after turning the cell `(ri, ci)` into a land.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

### Examples

**Example 1:**

```plaintext
Input: m = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1]]
Output: [1,1,2,3]
Explanation:
Initially, the 2D grid is filled with water.
- Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land. We have 1 island.
- Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land. We still have 1 island.
- Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land. We have 2 islands.
- Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land. We have 3 islands.
```

**Example 2:**

```plaintext
Input: m = 1, n = 1, positions = [[0,0]]
Output: [1]
```

### Constraints
- 1 &lt;= m, n, positions.length &lt;= 10^4
- 1 &lt;= m * n &lt;= 10^4
- positions[i].length == 2
- 0 &lt;= ri &lt; m
- 0 &lt;= ci &lt; n

### Follow up
Could you solve it in time complexity $O(k log(mn))$, where k == positions.length?

## Solution

### Approach 

We use Union-Find to keep track of connected components (islands) and perform operations efficiently.

#### Algorithm
- Union-Find Data Structure: Used to manage and merge different islands.
- Add Land Operation: Convert the water at a given position into land and update the number of islands by checking adjacent cells and merging islands as needed.

#### Python

```py
class Solution:
    def numIslands2(self, m: int, n: int, positions: List[List[int]]) -> List[int]:
        def check(i, j):
            return 0 <= i < m and 0 <= j < n and grid[i][j] == 1

        def find(x):
            if p[x] != x:
                p[x] = find(p[x])
            return p[x]

        p = list(range(m * n))
        grid = [[0] * n for _ in range(m)]
        res = []
        cur = 0 # current island count
        for i, j in positions:
            if grid[i][j] == 1: # already counted, same as previous island count
                res.append(cur)
                continue
            grid[i][j] = 1
            cur += 1
            for x, y in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                if check(i + x, j + y) and find(i * n + j) != find((i + x) * n + j + y):
                    p[find(i * n + j)] = find((i + x) * n + j + y)
                    cur -= 1
                    # 1 0 1
                    # 0 1 0
                    # for above, if setting 1st-row 2nd-col 0-to-1
                    # cur will -1 for 3 times
                    # but cur += 1 after grid[i][j] = 1 so cur final result is 1
            res.append(cur)
        return res

############

class UnionFind(object):
  def __init__(self, m, n):
    self.dad = [i for i in range(m * n)]
    self.rank = [0 for _ in range(m * n)]

  def find(self, x):
    if self.dad[x] != x:
      self.dad[x] = self.find(self.dad[x])
    return self.dad[x]

  def union(self, xy): # xy is a tuple (x,y), with x and y value inside
    x, y = map(self.find, xy)
    if x == y:
      return False
    if self.rank[x] > self.rank[y]:
      self.dad[y] = x
    elif self.rank[x] < self.rank[y]:
      self.dad[x] = y
    else:
      self.dad[y] = x # search to the left, to find parent
      self.rank[x] += 1 # now x a parent, so +1 its rank
    return True


class Solution(object):
  def numIslands2(self, m, n, positions):
    """
    :type m: int
    :type n: int
    :type positions: List[List[int]]
    :rtype: List[int]
    """
    uf = UnionFind(m, n)
    ans = 0
    ret = []
    dirs = [(0, -1), (0, 1), (1, 0), (-1, 0)]
    grid = set()
    for i, j in positions:
      ans += 1
      grid |= {(i, j)}
      for di, dj in dirs:
        ni, nj = i + di, j + dj
        if 0 <= ni < m and 0 <= nj < n and (ni, nj) in grid:
          if uf.union((ni * n + nj, i * n + j)):
            ans -= 1
      ret.append(ans)
    return ret


################


class UnionFind:
    def __init__(self, n: int):
        self.p = list(range(n))
        self.size = [1] * n

    def find(self, x: int):
        if self.p[x] != x:
            self.p[x] = self.find(self.p[x])
        return self.p[x]

    def union(self, a: int, b: int) -> bool:
        pa, pb = self.find(a - 1), self.find(b - 1)
        if pa == pb:
            return False
        if self.size[pa] > self.size[pb]:
            self.p[pb] = pa
            self.size[pa] += self.size[pb]
        else:
            self.p[pa] = pb
            self.size[pb] += self.size[pa]
        return True


class Solution:
    def numIslands2(self, m: int, n: int, positions: List[List[int]]) -> List[int]:
        uf = UnionFind(m * n)
        grid = [[0] * n for _ in range(m)]
        ans = []
        dirs = (-1, 0, 1, 0, -1)
        cnt = 0
        for i, j in positions:
            if grid[i][j]:
                ans.append(cnt)
                continue
            grid[i][j] = 1
            cnt += 1
            for a, b in pairwise(dirs):
                x, y = i + a, j + b
                if (
                    0 <= x < m
                    and 0 <= y < n
                    and grid[x][y]
                    and uf.union(i * n + j, x * n + y)
                ):
                    cnt -= 1
            ans.append(cnt)
        return ans

```

#### Java

```java
class UnionFind {
    private final int[] p;
    private final int[] size;

    public UnionFind(int n) {
        p = new int[n];
        size = new int[n];
        for (int i = 0; i < n; ++i) {
            p[i] = i;
            size[i] = 1;
        }
    }

    public int find(int x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }

    public boolean union(int a, int b) {
        int pa = find(a), pb = find(b);
        if (pa == pb) {
            return false;
        }
        if (size[pa] > size[pb]) {
            p[pb] = pa;
            size[pa] += size[pb];
        } else {
            p[pa] = pb;
            size[pb] += size[pa];
        }
        return true;
    }
}

class Solution {
    public List<Integer> numIslands2(int m, int n, int[][] positions) {
        int[][] grid = new int[m][n];
        UnionFind uf = new UnionFind(m * n);
        int[] dirs = {-1, 0, 1, 0, -1};
        int cnt = 0;
        List<Integer> ans = new ArrayList<>();
        for (var p : positions) {
            int i = p[0], j = p[1];
            if (grid[i][j] == 1) {
                ans.add(cnt);
                continue;
            }
            grid[i][j] = 1;
            ++cnt;
            for (int k = 0; k < 4; ++k) {
                int x = i + dirs[k], y = j + dirs[k + 1];
                if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == 1
                    && uf.union(i * n + j, x * n + y)) {
                    --cnt;
                }
            }
            ans.add(cnt);
        }
        return ans;
    }
}

```

#### C++

```cpp
class UnionFind {
public:
    UnionFind(int n) {
        p = vector<int>(n);
        size = vector<int>(n, 1);
        iota(p.begin(), p.end(), 0);
    }

    bool unite(int a, int b) {
        int pa = find(a), pb = find(b);
        if (pa == pb) {
            return false;
        }
        if (size[pa] > size[pb]) {
            p[pb] = pa;
            size[pa] += size[pb];
        } else {
            p[pa] = pb;
            size[pb] += size[pa];
        }
        return true;
    }

    int find(int x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }

private:
    vector<int> p, size;
};

class Solution {
public:
    vector<int> numIslands2(int m, int n, vector<vector<int>>& positions) {
        int grid[m][n];
        memset(grid, 0, sizeof(grid));
        UnionFind uf(m * n);
        int dirs[5] = {-1, 0, 1, 0, -1};
        int cnt = 0;
        vector<int> ans;
        for (auto& p : positions) {
            int i = p[0], j = p[1];
            if (grid[i][j]) {
                ans.push_back(cnt);
                continue;
            }
            grid[i][j] = 1;
            ++cnt;
            for (int k = 0; k < 4; ++k) {
                int x = i + dirs[k], y = j + dirs[k + 1];
                if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] && uf.union(i * n + j, x * n + y)) {
                    --cnt;
                }
            }
            ans.push_back(cnt);
        }
        return ans;
    }
};
```

### Complexity Analysis

- **Time Complexity**: $O(k \cdot \log(m \cdot n))$, where $k$ is the length of the `positions` array, and $m$ and $n$ are the dimensions of the grid. This is due to the Union-Find operations with path compression and union by size.

- **Space Complexity**: $O(m \cdot n)$, as we need space for the grid and the Union-Find data structure to manage the connectivity of the cells.
