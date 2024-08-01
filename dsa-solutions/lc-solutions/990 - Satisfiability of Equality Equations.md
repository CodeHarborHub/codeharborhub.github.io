---
id: satisfiability-of-equality-equations
title: Satisfiability of Equality Equations
sidebar_label: Satisfiability of Equality Equations
tags: [Graph, Union Find, Array, String, C++, Python, Java]
description: Determine if it is possible to assign integers to variable names to satisfy all given equality and inequality equations.
---

## Problem Statement

### Problem Description

You are given an array of strings `equations` that represent relationships between variables where each string `equations[i]` is of length 4 and takes one of two different forms: `"xi==yi"` or `"xi!=yi"`. Here, `xi` and `yi` are lowercase letters (not necessarily different) that represent one-letter variable names.

Return `true` if it is possible to assign integers to variable names so as to satisfy all the given equations, or `false` otherwise.

### Example

**Example 1:**
```
Input: equations = ["a==b","b!=a"]
Output: false
```
**Explanation:** If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second. There is no way to assign the variables to satisfy both equations.


### Constraints

- $1 \leq \text{equations.length} \leq 500$
- `equations[i].length == 4`
- `equations[i][0]` is a lowercase letter.
- `equations[i][1]` is either `'='` or `'!'`.
- `equations[i][2]` is `'='`.
- `equations[i][3]` is a lowercase letter.

## Solution

### Intuition

The problem can be solved using Union-Find (Disjoint Set Union) data structure. The idea is to first process all equality equations to form connected components (sets of variables that must be equal). Then, we check all inequality equations to ensure that no two variables in an inequality equation belong to the same connected component.

### Time Complexity and Space Complexity Analysis

- **Time Complexity**: $O(n \log n)$, where $n$ is the number of equations. The Union-Find operations (union and find) are almost constant time due to path compression and union by rank.
- **Space Complexity**: $O(1)$, aside from the space used for storing the equations and Union-Find data structure.

### Code

#### C++

```cpp
class Solution {
public:
    bool equationsPossible(vector<string>& equations) {
        vector<int> parent(26);
        iota(parent.begin(), parent.end(), 0);
        
        function<int(int)> find = [&](int x) {
            return parent[x] == x ? x : parent[x] = find(parent[x]);
        };
        
        for (const auto& eq : equations) {
            if (eq[1] == '=') {
                parent[find(eq[0] - 'a')] = find(eq[3] - 'a');
            }
        }
        
        for (const auto& eq : equations) {
            if (eq[1] == '!' && find(eq[0] - 'a') == find(eq[3] - 'a')) {
                return false;
            }
        }
```
#### Python
```python
class Solution:
    def equationsPossible(self, equations: List[str]) -> bool:
        parent = list(range(26))
        
        def find(x):
            if parent[x] != x:
                parent[x] = find(parent[x])
            return parent[x]
        
        for eq in equations:
            if eq[1] == '=':
                parent[find(ord(eq[0]) - ord('a'))] = find(ord(eq[3]) - ord('a'))
        
        for eq in equations:
            if eq[1] == '!' and find(ord(eq[0]) - ord('a')) == find(ord(eq[3]) - ord('a')):
                return False
        
        return True
```
#### Java
```java
class Solution {
    public boolean equationsPossible(String[] equations) {
        int[] parent = new int[26];
        for (int i = 0; i < 26; ++i) {
            parent[i] = i;
        }
        
        for (String eq : equations) {
            if (eq.charAt(1) == '=') {
                parent[find(parent, eq.charAt(0) - 'a')] = find(parent, eq.charAt(3) - 'a');
            }
        }
        
        for (String eq : equations) {
            if (eq.charAt(1) == '!' && find(parent, eq.charAt(0) - 'a') == find(parent, eq.charAt(3) - 'a')) {
                return false;
            }
        }
        
        return true;
    }
    
    private int find(int[] parent, int x) {
        if (parent[x] != x) {
            parent[x] = find(parent, parent[x]);
        }
        return parent[x];
    }
}
```
        
        return true;
    }
};
