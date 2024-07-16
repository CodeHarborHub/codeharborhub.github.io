---
id: is-graph-bipartite
title: 785. Is Graph Bipartite?
sidebar_label:  785. Is Graph Bipartite?
tags:
- Graph
- BFS
- DFS


description: "This is a solution to the 785. Is Graph Bipartite? problem on LeetCode."
---

## Problem Description
There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

There are no self-edges (graph[u] does not contain u).
There are no parallel edges (graph[u] does not contain duplicate values).
If v is in graph[u], then u is in graph[v] (the graph is undirected).
The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.
A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.

Return true if and only if it is bipartite.
 ### Examples
**Example 1:**
```
Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
Output: false
Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.
```

### Constraints
- `graph.length == n`
- `1 <= n <= 100`
- `0 <= graph[u].length < n`
- `0 <= graph[u][i] <= n - 1`
- `graph[u] does not contain u.`
- `All the values of graph[u] are unique.`
- `If graph[u] contains v, then graph[v] contains u.`

## Solution for  785. Is Graph Bipartite?

<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
         function dfs(graph, node, colors, color) {
            colors[node] = color;
            for (const neighbor of graph[node]) {
                if (colors[neighbor] === color) {
                return false;
                }
                if (!colors[neighbor]) {
                if (!dfs(graph, neighbor, colors, -color)) {
                    return false;
                }
                }
            }
            return true;
            }

            isBipartite = function(graph) {
            const n = graph.length;
            const colors = new Array(n).fill(0);  
            for (let i = 0; i < n; i++) {
                if (!colors[i]) {
                if (!dfs(graph, i, colors, 1)) {
                    return false;
                }
                }
            }
            return true;
            }
      const input =[[1,2,3],[0,2],[0,1,3],[0,2]]
      const output = isBipartite(input)
      return (
        <div>
          <p>
            <b>Input: </b>
            {JSON.stringify(input)}
          </p>
          <p>
            <b>Output:</b> {output.toString()}
          </p>
        </div>
      );
    }
    ```

    #### Complexity Analysis

    - Time Complexity: $O(n) $ 
    - Space Complexity: $ O(n)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   from typing import List
from collections import deque

class Solution:
    def isBipartite(self, gr: List[List[int]]) -> bool:
        n = len(gr)
        colour = [0] * n

        for node in range(n):
            if colour[node] != 0:
                continue

            q = deque()
            q.append(node)
            colour[node] = 1

            while q:
                cur = q.popleft()

                for ne in gr[cur]:
                    if colour[ne] == 0:
                        colour[ne] = -colour[cur]
                        q.append(ne)
                    elif colour[ne] != -colour[cur]:
                        return False

        return True
    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.ArrayDeque;
import java.util.Queue;

class Solution {
    public boolean isBipartite(int[][] gr) {
        int n = gr.length;
        int[] colour = new int[n];

        for (int node = 0; node < n; node++) {
            if (colour[node] != 0) {
                continue;
            }

            Queue<Integer> q = new ArrayDeque<>();
            q.add(node);
            colour[node] = 1;

            while (!q.isEmpty()) {
                int cur = q.poll();

                for (int ne : gr[cur]) {
                    if (colour[ne] == 0) {
                        colour[ne] = -colour[cur];
                        q.add(ne);
                    } else if (colour[ne] != -colour[cur]) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}
    ```


  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
 class Solution {
	public:
		bool check(int start,vector<vector<int>>& adj,vector<int>& color){
			queue<int>q;
			color[start]=0;
			q.push(start);
			while(!q.empty()){
				int prev=q.front();
				q.pop();
				for(auto curr: adj[prev]){
					if(color[curr]==-1){
						color[curr]=!color[prev];
						q.push(curr);
					}
					else if(color[curr]==color[prev]) return false;
				}
			}
			return true;
		}

		bool isBipartite(vector<vector<int>>& adj) {
			int n=adj.size();
			vector<int> color(n,-1);
			for(int i=0;i<n;i++){
				if(color[i]==-1 && !check(i,adj,color)) return false; 
			}
			return true;
		}
	};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/is-graph-bipartite/)

