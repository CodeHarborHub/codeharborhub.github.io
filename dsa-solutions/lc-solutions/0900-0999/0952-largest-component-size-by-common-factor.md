---
id: largest-component-size-by-common-factor
title: Largest Component Size by Common Factor
sidebar_label: 0952 - Largest Component Size by Common Factor
tags:
  - Array
  - Hash Table
  - Number Theory
  - Math
  - Union Find
description: "This is a solution to the Largest Component Size by Common Factor problem on LeetCode."
---

## Problem Description

You are given an integer array of unique positive integers `A`. Consider the following graph:
* There are `A.length` nodes, labelled `A[0]` to `A[A.length - 1]`;
* There is an edge between `A[i]` and `A[j]` if and only if `A[i]` and `A[j]` share a common factor greater than `1`.

Return the size of the largest connected component in the graph.

### Examples

**Example 1:**

```
Input: [4,6,15,35]
Output: 4
```
**Example 2:**

```
Input: [20,50,9,63]
Output: 2
```

**Example 3:**

```
Input: [2,3,6,7,4,12,21,39]
Output: 8
```

### Constraints
* `1 <= A.length <= 20000`
* `1 <= A[i] <= 100000`
* All the values of nums are **unique**.

## Solution for largest-component-size-by-common-factor

### Approach: Union each number with all of its factors

#### Intuition:
The problem aims to find the largest connected component in an array where two elements are connected if they share a common factor greater than 1. 

1. **Union-Find Data Structure**: Disjoint Set Union helps in efficiently managing and merging sets. The key operations are Find (to find the representative of a set) and Union (to merge two sets).

2. For each element in the array, find its factors and union the element with its factors. This way, all elements with common factors are connected.

3. After processing all elements, count the size of each connected component and find the most frequent parent.

### Code in Different Languages

#### C++

```cpp
#include <vector>
#include <unordered_map>
#include <cmath>
#include <algorithm>
using namespace std;

class DSU {
public:
  DSU(int n): p_(n) {
    for (int i = 0; i < n; ++i)
      p_[i] = i;
  }
  
  void Union(int x, int y) {
    p_[Find(x)] = p_[Find(y)];
  }
  
  int Find(int x) {
    if (p_[x] != x) p_[x] = Find(p_[x]);
    return p_[x];
  }
private:
  vector<int> p_;
};

class Solution {
public:
  int largestComponentSize(vector<int>& A) {    
    int n = *max_element(begin(A), end(A));
    DSU dsu(n + 1);
    for (int a : A) {
      int t = sqrt(a);
      for (int k = 2; k <= t; ++k)
        if (a % k == 0) {
          dsu.Union(a, k);
          dsu.Union(a, a / k);
        }
    }
    unordered_map<int, int> c;
    int ans = 1;
    for (int a : A)
      ans = max(ans, ++c[dsu.Find(a)]);    
    return ans;
  }
};
```

#### Java

```java
class Solution {
    private int[] uf;
    
    public int largestComponentSize(int[] A) {
        if(A == null || A.length == 0) return 0;
        int max = A[0];
        for(int i = 1; i < A.length; i++) max = Math.max(max, A[i]);
        this.uf = new int[max + 1];
        for(int i = 0; i < uf.length; i++) this.uf[i] = i;
        // For every number, find their factor and add to uf.
        for(int i = 0; i < A.length; i++){
            for(int j = 2; j <= (int)Math.sqrt(A[i]); j++){
                if(A[i] % j == 0){
                    union(A[i], j);
                    union(A[i], A[i] / j);
                }
            }
        }
        Map<Integer, Integer> map = new HashMap<>();
        int res = 1;
        for(int i = 0; i < A.length; i++){
            int root = find(A[i]);
            int cur = map.containsKey(root) ? map.get(root): 0;
            map.put(root, ++cur);
            res = Math.max(res, cur);
        }
        return res;
    }
    
    private void union(int i, int j){
        int p = find(i);
        int q = find(j);
        uf[p] = q;
    }
    
    private int find(int j){
        if(uf[j] != j){
            uf[j] = find(uf[j]);
        }
        return uf[j];
    }
}
```

#### Python

```python
from collections import defaultdict
import math

class Solution:
    def largestComponentSize(self, A):
        p = list(range(max(A) + 1))

        def find(x):
            while p[x] != x:
                p[x] = p[p[x]]
                x = p[x]
            return x

        def union(x, y):
            p[find(x)] = find(y)

        for a in A:
            for k in range(2, int(math.sqrt(a)) + 1):
                if a % k == 0:
                    union(a, k)
                    union(a, a // k)
        return max(collections.Counter(find(a) for a in A).values())

# Example usage:
solution = Solution()
print(solution.largestComponentSize([4,6,15,35]))  # Output: 4
print(solution.largestComponentSize([20,50,9,63]))  # Output: 2
print(solution.largestComponentSize([2,3,6,7,4,12,21,39]))  # Output: 8
```

### Complexity Analysis

#### Time Complexity: $O(\sum \sqrt{A[i]})$

> **Reason**: For each element A[i], the algorithm checks up to $ \sqrt{A[i]} $ possible factors to perform union operations.

#### Space Complexity: $O(max(A))$

> **Reason**: The Union-Find data structure requires space proportional to the maximum value in the array.

## References

- **LeetCode Problem**: [Largest Component Size by Common Factor](https://leetcode.com/problems/largest-component-size-by-common-factor/)
