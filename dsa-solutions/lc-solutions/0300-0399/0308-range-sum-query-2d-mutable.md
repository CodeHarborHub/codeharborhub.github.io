---
id: range-sum-query-2d-mutable
title: Range Sum Query 2D - Mutable
sidebar_label: 0308-Range-Sum-Query-2D-Mutable
tags: [Segment Tree, 2D Matrix, Hard]
description: Given a 2D matrix, handle multiple queries of the following types - updating the value of a cell and calculating the sum of elements inside a rectangle defined by its upper left and lower right corners.

---


## Problem Statement

Given a 2D matrix `matrix`, handle multiple queries of the following types:

1. **Update** the value of a cell in `matrix`.
2. **Calculate** the sum of the elements inside a rectangle defined by its upper left corner `(row1, col1)` and lower right corner `(row2, col2)`.

Implement the `NumMatrix` class:

- **NumMatrix(int[][] matrix)**: Initializes the object with the integer matrix `matrix`.
- **void update(int row, int col, int val)**: Updates the value of `matrix[row][col]` to be `val`.
- **int sumRegion(int row1, int col1, int row2, int col2)**: Returns the sum of the elements of `matrix` inside the rectangle defined by its upper left corner `(row1, col1)` and lower right corner `(row2, col2)`.

### Examples

**Example 1:**

```plaintext
Input:
["NumMatrix", "sumRegion", "update", "sumRegion"]
[[[[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]], [2, 1, 4, 3], [3, 2, 2], [2, 1, 4, 3]]
Output:
[null, 8, null, 10]
```

**Example 2:**

```plaintext
Input: m = 1, n = 1, positions = [[0,0]]
Output: [1]
```

### Constraints
- m == matrix.length
- n == matrix[i].length
- 1 &lt;= m, n &lt;= 200
- -1000 &lt;= matrix[i][j] &lt;= 1000
- 0 &lt;= row &lt; m
- 0 &lt;= col &lt; n
- -1000 &lt;= val &lt;= 1000
- 0 &lt;= row1 &lt;= row2 &lt; m
- 0 &lt;= col1 &lt;= col2 &lt; n
- At most 5000 calls will be made to sumRegion and update.

### Follow up
Implement a solution with Binary Indexed Tree or Segment Tree.

## Solution

### Approach 

We use Binary Indexed Tree (BIT) to handle the update and sum queries efficiently.

#### Algorithm
- Binary Indexed Tree: Maintain a BIT to manage and update the sums of elements efficiently.
- Update Operation: Update the value in the BIT when a cell value changes.
- Query Operation: Calculate the sum for a given rectangle using the BIT.

#### Python

```py
# segment tree
class Node:
    def __init__(self):
        self.l = 0
        self.r = 0
        self.v = 0

class SegmentTree:
    def __init__(self, nums):
        n = len(nums)
        self.nums = nums
        self.tr = [Node() for _ in range(4 * n)]
        self.build(1, 1, n)

    def build(self, u, l, r):
        self.tr[u].l = l
        self.tr[u].r = r
        if l == r:
            self.tr[u].v = self.nums[l - 1]
            return
        mid = (l + r) >> 1
        self.build(u << 1, l, mid)
        self.build(u << 1 | 1, mid + 1, r)
        self.pushup(u)

    def modify(self, u, x, v):
        if self.tr[u].l == x and self.tr[u].r == x:
            self.tr[u].v = v
            return
        mid = (self.tr[u].l + self.tr[u].r) >> 1
        if x <= mid:
            self.modify(u << 1, x, v)
        else:
            self.modify(u << 1 | 1, x, v)
        self.pushup(u)

    def query(self, u, l, r):
        if self.tr[u].l >= l and self.tr[u].r <= r:
            return self.tr[u].v
        mid = (self.tr[u].l + self.tr[u].r) >> 1
        v = 0
        if l <= mid:
            v += self.query(u << 1, l, r)
        if r > mid:
            v += self.query(u << 1 | 1, l, r)
        return v

    def pushup(self, u):
        self.tr[u].v = self.tr[u << 1].v + self.tr[u << 1 | 1].v

class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        self.trees = [SegmentTree(row) for row in matrix]

    def update(self, row: int, col: int, val: int) -> None:
        tree = self.trees[row]
        tree.modify(1, col + 1, val)

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return sum(self.trees[row].query(1, col1 + 1, col2 + 1) for row in range(row1, row2 + 1))


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# obj.update(row,col,val)
# param_2 = obj.sumRegion(row1,col1,row2,col2)

############
'''
It uses a binary indexed tree (BIT) or Fenwick tree to efficiently update and query sums of submatrices.
The NumMatrix class constructor initializes the BIT and matrix data structure. 
The update method updates the matrix and BIT with the difference in values. 
The sumRegion method computes the sum of a submatrix using prefix sums computed with the BIT. 
The sum method computes a prefix sum in the BIT.


"Fenwick tree" vs "Segment tree"
https://stackoverflow.com/questions/64190332/fenwick-tree-vs-segment-tree

'''

class NumMatrix:
    def __init__(self, matrix: List[List[int]]):
        if not matrix or not matrix[0]:
            self.m, self.n = 0, 0
            return

        self.m, self.n = len(matrix), len(matrix[0])
        self.bit = [[0] * (self.n + 1) for _ in range(self.m + 1)]
        self.matrix = [[0] * self.n for _ in range(self.m)]
        
        for i in range(self.m):
            for j in range(self.n):
                self.update(i, j, matrix[i][j])

    def update(self, row: int, col: int, val: int) -> None:
        diff = val - self.matrix[row][col]
        self.matrix[row][col] = val
        i = row + 1
        while i <= self.m:
            j = col + 1
            while j <= self.n:
                self.bit[i][j] += diff
                j += j & -j
            i += i & -i

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.sum(row2 + 1, col2 + 1) - self.sum(row2 + 1, col1) - self.sum(row1, col2 + 1) + self.sum(row1, col1)

    def sum(self, row: int, col: int) -> int:
        res = 0
        i = row
        while i > 0:
            j = col
            while j > 0:
                res += self.bit[i][j]
                j -= j & -j
            i -= i & -i
        return res

```

#### Java

```java
class BinaryIndexedTree {
    private int n;
    private int[] c;

    public BinaryIndexedTree(int n) {
        this.n = n;
        c = new int[n + 1];
    }

    public void update(int x, int delta) {
        while (x <= n) {
            c[x] += delta;
            x += lowbit(x);
        }
    }

    public int query(int x) {
        int s = 0;
        while (x > 0) {
            s += c[x];
            x -= lowbit(x);
        }
        return s;
    }

    public static int lowbit(int x) {
        return x & -x;
    }
}

class NumMatrix {
    private BinaryIndexedTree[] trees;

    public NumMatrix(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        trees = new BinaryIndexedTree[m];
        for (int i = 0; i < m; ++i) {
            BinaryIndexedTree tree = new BinaryIndexedTree(n);
            for (int j = 0; j < n; ++j) {
                tree.update(j + 1, matrix[i][j]);
            }
            trees[i] = tree;
        }
    }

    public void update(int row, int col, int val) {
        BinaryIndexedTree tree = trees[row];
        int prev = tree.query(col + 1) - tree.query(col);
        tree.update(col + 1, val - prev);
    }

    public int sumRegion(int row1, int col1, int row2, int col2) {
        int s = 0;
        for (int i = row1; i <= row2; ++i) {
            BinaryIndexedTree tree = trees[i];
            s += tree.query(col2 + 1) - tree.query(col1);
        }
        return s;
    }
}

```

#### C++

```cpp
class BinaryIndexedTree {
public:
    int n;
    vector<int> c;

    BinaryIndexedTree(int _n)
        : n(_n)
        , c(_n + 1) {}

    void update(int x, int delta) {
        while (x <= n) {
            c[x] += delta;
            x += lowbit(x);
        }
    }

    int query(int x) {
        int s = 0;
        while (x > 0) {
            s += c[x];
            x -= lowbit(x);
        }
        return s;
    }

    int lowbit(int x) {
        return x & -x;
    }
};

class NumMatrix {
public:
    vector<BinaryIndexedTree*> trees;

    NumMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size();
        int n = matrix[0].size();
        trees.resize(m);
        for (int i = 0; i < m; ++i) {
            BinaryIndexedTree* tree = new BinaryIndexedTree(n);
            for (int j = 0; j < n; ++j) {
                tree->update(j + 1, matrix[i][j]);
            }
            trees[i] = tree;
        }
    }

    void update(int row, int col, int val) {
        BinaryIndexedTree* tree = trees[row];
        int prev = tree->query(col + 1) - tree->query(col);
        tree->update(col + 1, val - prev);
    }

    int sumRegion(int row1, int col1, int row2, int col2) {
        int s = 0;
        for (int i = row1; i <= row2; ++i) {
            BinaryIndexedTree* tree = trees[i];
            s += tree->query(col2 + 1) - tree->query(col1);
        }
        return s;
    }
};

```

### Complexity Analysis

- **Time Complexity**: $O(\log m \cdot \log n)$ for both update and sumRegion operations, where $m$ and $n$ are the dimensions of the matrix.
- **Space Complexity**: $O(m \cdot n)$ for storing the BITs and matrix.
