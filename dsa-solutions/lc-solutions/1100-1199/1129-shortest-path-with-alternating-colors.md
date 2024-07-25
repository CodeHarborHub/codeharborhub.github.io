---
id: shortest-path-with-allternating-colors
title:  Shortest-Path-With-Alternating-Colors
sidebar_label: 1129. Shortest-Path-With-Alternating-Colors
tags:
- Breadth-First Search
- Graph
description: "This is a solution to the Shortest-Path-With-Alternating-Colors problem on LeetCode."
---

## Problem Description
You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

You are given two arrays redEdges and blueEdges where:

redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.
### Examples

**Example 1:**
```
Example 1:

Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
Output: [0,1,-1]
```

**Example 2:**
```
Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
Output: [0,1,-1]
```

### Constraints
- `1 <= n <= 100`
- `0 <= redEdges.length, blueEdges.length <= 400`
- `redEdges[i].length == blueEdges[j].length == 2`
- `0 <= ai, bi, uj, vj < n`


## Solution for Shortest Path with Alternating Colors
  
### Approach


#### Implementation
#### Code in Different Languages

<Tabs>
  <TabItem value="Java" label="Java" default>
  <SolutionAuthor name="@mahek0620"/>
   ```java
    
    class Solution {
    public int[] shortestAlternatingPaths(int n, int[][] redEdges, int[][] blueEdges) {
         List<List<Integer>> l1 = new ArrayList<>();
         List<List<Integer>> l2 = new ArrayList<>();
         int[] ans = new int[n];
         Arrays.fill(ans,-1);
         for(int i = 0;i<n;i++){
             l1.add(new ArrayList<Integer>());
             l2.add(new ArrayList<Integer>());
         }
         for(int[] r : redEdges){
             l1.get(r[0]).add(r[1]);
         }
         for(int[] b : blueEdges){
             l2.get(b[0]).add(b[1]);
         }
         int f = 0;
         Queue<Pair<Integer,Integer>> q = new LinkedList<>();
         q.add(new Pair<>(0,0));
         q.add(new Pair<>(0,1));
         boolean[][] visited = new boolean[n][2];
         visited[0][1] = true;
         visited[0][0] = true;
         ans[0] = 0;
         int level = 1;
         while(!q.isEmpty()){
             int sz = q.size();
             System.out.println(sz);
             while(sz-->0){
                 Pair<Integer,Integer> curr = q.poll();
                 int value = curr.getKey();
                 int color = curr.getValue();
                 if(color==0){
                     for(int i : l1.get(value)){
                         if(!visited[i][0]){
                             q.add(new Pair<>(i,1));
                             if(ans[i]==-1)ans[i] = level;
                             visited[i][0] = true;
                         }
                     }
                 }
                 else{
                     for(int i : l2.get(value)){
                        if(!visited[i][1]){
                             q.add(new Pair<>(i,0));
                            if(ans[i]==-1) ans[i] = level;
                             visited[i][1] = true;
                         }
                     }
                 }
             }
             level++;
         }

        return ans;

    }
     }
    ```

  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@mahek0620"/>
   ```python
    
    class Solution:
    def shortestAlternatingPaths(self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]) -> List[int]:
        lst=[-1]*n
        grid=[[] for i in range(n)]
        vr=[-1]*n
        vb=[-1]*n
        for i,j in redEdges:
            grid[i].append((j,True))
        
        for i,j in blueEdges:
            grid[i].append((j,False))

        queue=[(0,0,True),(0,0,False)]
        vb[0]=1
        vr[0]=1
        while queue:
            d,x,flg=queue.pop(0)
            if lst[x]==-1:
                lst[x]=d
            for to,fg2 in grid[x]:
                if flg!=fg2:
                    if (fg2==False and vb[to]==-1):
                        queue.append((d+1,to,fg2))
                        vb[to]=1
                    elif (fg2==True and vr[to]==-1):
                        queue.append((d+1,to,fg2))
                        vr[to]=1
        return lst
            
    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@mahek0620"/>
   ```cpp
    
     class Solution {
    public:
    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& redEdges, vector<vector<int>>& blueEdges) {
        vector<int> adjRed[n], adjBlue[n];
        for(auto it : redEdges){
            adjRed[it[0]].push_back(it[1]);
        }
        for(auto it : blueEdges){
            adjBlue[it[0]].push_back(it[1]);
        }
        set<pair<int, int>> vis;
        vis.insert({0, -1});
        vector<int> ans(n, -1);
        queue<pair<int, pair<int, int>>> q; // node length color
        q.push({0, {0, -1}});
        while(!q.empty()){
            int node = q.front().first;
            int length = q.front().second.first;
            int color = q.front().second.second;
            q.pop();
            if(ans[node] == -1){
                ans[node] = length;
            }
            //RED EDGE
            if(color != 0){
                for(auto it : adjRed[node]){
                    if(vis.find({it, 0}) == vis.end()){
                        vis.insert({it, 0});
                        q.push({it, {length + 1, 0}});
                    }
                }
            }
            //BLUE EDGE
            if(color != 1){
                for(auto it : adjBlue[node]){
                    if(vis.find({it, 1}) == vis.end()){
                        vis.insert({it, 1});
                        q.push({it, {length + 1, 1}});
                    }
                }
            }
        }
        return ans;
    }
        };
    ```

  </TabItem>
</Tabs>


## References

- **LeetCode Problem:** [Shortest Path With Alternating Colors](https://leetcode.com/problems/shortest-path-with-alternating-colors/solutions/5371884/c-easy-solution/)
---

