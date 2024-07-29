---
id: find-the-town-judge
title: Find The Town Judge
sidebar_label: 0997 Find The Town Judge
tags:
  - Array
  - Hash Table
  - Graph
  - LeetCode
  - C++
description: "This is a solution to the Find The Town Judge problem on LeetCode."

---

## Problem Description

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.

You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.



### Examples

**Example 1:**

```

Input:  n = 2, trust = [[1,2]]
Output: 2
```

**Example 2:**

```
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
```

**Example 2:**

```
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```

### Constraints

- $1 \leq \text{n} \leq 1000$.
- $1 \leq \text{trust.length} \leq 10^4$.
- $\text{trust[i].length} == 2$.
- $\text{All the pairs of trust are unique}$.


### Approach 

To solve this problem(find the town judge) we simply have find that node which is not connected to anone but everyone is connected to it which means that node will be the town judge because according to the question the town judge trusts nobody but everybody (except for the town judge) trusts the town judge.

#### Code in C++

```cpp
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        vector<vector<int>> adj(n + 1);
        vector<vector<int>> ad(n + 1);
        for (int i = 0; i < trust.size(); i++) {
            adj[t[i][0]].push_back(trust[i][1]);
            ad[t[i][1]].push_back(trust[i][0]);
        }
        for (int i = 1; i <= n; i++) {
            if (adj[i].size() == 0 && ad[i].size()==n-1) {
                return i;
            }
        }
        return -1;
    }
};
```

#### Code in Java

```java
class Solution {
    public int findJudge(int n, int[][] trust) {
        int a[][] = new int[n][2];
        for(int i=0;i<trust.length;i++){
            int f = trust[i][0];
            int l = trust[i][1];
            a[l-1][0]++;
            a[f-1][1]++;
        }
        for(int i = 0; i < a.length; i++){
            int b[] = a[i];
            if(b[0] == n-1 && b[1] == 0)
                return i+1; 
        }
        return -1;      
    }
}

```


