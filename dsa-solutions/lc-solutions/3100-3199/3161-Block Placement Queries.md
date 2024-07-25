---
id: fenwick-tree-solution
level: Hard
title: Fenwick Tree Solution
sidebar_label: Fenwick Tree Solution
tags:
- Fenwick Tree
- Data Structure
- C++
- Java
- Python
description: "This document provides solutions to a problem using the Fenwick Tree (Binary Indexed Tree) data structure, implemented in C++, Java, and Python."
---

## Problem 
The problem requires efficiently processing a series of queries that involve updating and retrieving maximum values within a range. The solution uses the Fenwick Tree (Binary Indexed Tree) data structure to achieve this efficiently.

## Solution
A Fenwick Tree is used to keep track of the maximum values in the range. Each query is processed in constant or logarithmic time, making the solution efficient for large inputs.

### Fenwick Tree Structure
The Fenwick Tree is implemented with the following methods:
- `update(int i, int val)`: Updates the tree with the value `val` at index `i`.
- `get(int i)`: Retrieves the maximum value from the start to index `i`.

### Steps:
1. **Initialization**: Initialize the Fenwick Tree and a sorted set to keep track of obstacles.
2. **Update Queries**: Process update queries to add obstacles.
3. **Compute Intervals**: Compute intervals between obstacles and update the tree.
4. **Result Queries**: Process result queries to check if the interval length is sufficient.

## Code in Different Languages

### C++
```cpp
#include <iostream>
#include <vector>
#include <set>
#include <algorithm>

using namespace std;

class FenwickTree {
 public:
  FenwickTree(int n) : vals(n + 1) {}

  void update(int i, int val) {
    while (i < vals.size()) {
      vals[i] = max(vals[i], val);
      i += lowbit(i);
    }
  }

  int get(int i) const {
    int res = 0;
    while (i > 0) {
      res = max(res, vals[i]);
      i -= lowbit(i);
    }
    return res;
  }

 private:
  vector<int> vals;

  static int lowbit(int i) {
    return i & -i;
  }
};

class Solution {
 public:
  vector<bool> getResults(vector<vector<int>>& queries) {
    const int n = min(50000, static_cast<int>(queries.size()) * 3);
    vector<bool> ans;
    FenwickTree tree(n + 1);
    set<int> obstacles{0, n};  // sentinel values

    for (const vector<int>& query : queries) {
      const int type = query[0];
      if (type == 1) {
        const int x = query[1];
        obstacles.insert(x);
      }
    }

    for (auto it = obstacles.begin(); std::next(it) != obstacles.end(); ++it) {
      const int x1 = *it;
      const int x2 = *std::next(it);
      tree.update(x2, x2 - x1);
    }

    for (int i = queries.size() - 1; i >= 0; --i) {
      const int type = queries[i][0];
      const int x = queries[i][1];
      if (type == 1) {
        const auto it = obstacles.find(x);
        if (next(it) != obstacles.end())  // x is not the last element.
          tree.update(*next(it), *next(it) - *prev(it));
        obstacles.erase(it);
      } else {
        const int sz = queries[i][2];
        const auto it = obstacles.upper_bound(x);
        const int prev = *std::prev(it);
        ans.push_back(tree.get(prev) >= sz || x - prev >= sz);
      }
    }

    return {ans.rbegin(), ans.rend()};
  }
};
```
### Java
```java
import java.util.*;

class FenwickTree {
  private int[] vals;

  public FenwickTree(int n) {
    vals = new int[n + 1];
  }

  public void update(int i, int val) {
    while (i < vals.length) {
      vals[i] = Math.max(vals[i], val);
      i += lowbit(i);
    }
  }

  public int get(int i) {
    int res = 0;
    while (i > 0) {
      res = Math.max(res, vals[i]);
      i -= lowbit(i);
    }
    return res;
  }

  private static int lowbit(int i) {
    return i & -i;
  }
}

class Solution {
  public List<Boolean> getResults(int[][] queries) {
    final int n = Math.min(50000, queries.length * 3);
    List<Boolean> ans = new ArrayList<>();
    FenwickTree tree = new FenwickTree(n + 1);
    TreeSet<Integer> obstacles = new TreeSet<>(Arrays.asList(0, n)); // sentinel values

    for (int[] query : queries) {
      final int type = query[0];
      if (type == 1) {
        final int x = query[1];
        obstacles.add(x);
      }
    }

    Iterator<Integer> it = obstacles.iterator();
    int x1 = it.next();
    while (it.hasNext()) {
      final int x2 = it.next();
      tree.update(x2, x2 - x1);
      x1 = x2;
    }

    for (int i = queries.length - 1; i >= 0; --i) {
      final int type = queries[i][0];
      final int x = queries[i][1];
      if (type == 1) {
        final Integer next = obstacles.higher(x);
        final Integer prev = obstacles.lower(x);
        if (next != null)
          tree.update(next, next - prev);
        obstacles.remove(x);
      } else {
        final int sz = queries[i][2];
        final int prev = obstacles.floor(x);
        ans.add(tree.get(prev) >= sz || x - prev >= sz);
      }
    }

    Collections.reverse(ans);
    return ans;
  }
}
```
### Python
```python
from sortedcontainers import SortedList
from typing import List
import itertools

class FenwickTree:
  def __init__(self, n: int):
    self.vals = [0] * (n + 1)

  def update(self, i: int, val: int) -> None:
    while i < len(self.vals):
      self.vals[i] = max(self.vals[i], val)
      i += FenwickTree.lowtree(i)

  def get(self, i: int) -> int:
    res = 0
    while i > 0:
      res = max(res, self.vals[i])
      i -= FenwickTree.lowtree(i)
    return res

  @staticmethod
  def lowtree(i: int) -> int:
    return i & -i

class Solution:
  def getResults(self, queries: List[List[int]]) -> List[bool]:
    n = min(50000, len(queries) * 3)
    ans = []
    tree = FenwickTree(n + 1)
    obstacles = SortedList([0, n])  # sentinel values

    for query in queries:
      type = query[0]
      if type == 1:
        x = query[1]
        obstacles.add(x)

    for x1, x2 in itertools.pairwise(obstacles):
      tree.update(x2, x2 - x1)

    for query in reversed(queries):
      type = query[0]
      x = query[1]
      if type == 1:
        i = obstacles.index(x)
        next = obstacles[i + 1]
        prev = obstacles[i - 1]
        obstacles.remove(x)
        tree.update(next, next - prev)
      else:
        sz = query[2]
        i = obstacles.bisect_right(x)
        prev = obstacles[i - 1]
        ans.append(tree.get(prev) >= sz or x - prev >= sz)

    return ans[::-1]
```

# Complexity Analysis
## Time Complexity: $O(log N)$ for update and get methods.
### Reason: Each update or get operation involves a logarithmic number of steps due to the nature of the Fenwick Tree.
# Space Complexity: $O(N)$
### Reason: We store values in the Fenwick Tree and maintain a sorted list of obstacles.
