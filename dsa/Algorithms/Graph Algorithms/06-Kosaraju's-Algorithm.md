---
id: kosaraju-algorithm
title: Kosaraju's Algorithm
sidebar_label: 06 - Kosaraju's Algorithm
tags:
  - Graph Algorithms
  - Strongly Connected Components
  - DSA
  - Python
  - C++
  - Java
description: "This page explains Kosaraju's Algorithm for finding the no of strongly connected component in a graph."
---

# Kosaraju's Algorithm

## 1.Strongly Connected Component(SCC)?

A component is called a Strongly Connected Component(SCC) only if for every possible pair of vertices (u, v) inside that component, u is reachable from v and v is reachable from u.

## What is Kosaraju's Algorithm?

To find the strongly connected components of a given directed graph, we are going to use Kosaraju’s Algorithm.

Before understanding the algorithm, we are going to discuss the thought process behind it. If we start DFS from node 0 for the following graph, we will end up visiting all the nodes. So, it is impossible to differentiate between different SCCs.
Now, we need to think in a different way. We can convert the above graph into the following illustration:

By definition, within each SCC, every node is reachable. So, if we start DFS from a node of SCC1 we can visit all the nodes in SCC1 and via edge e1 we can reach SCC2. Similarly, we can travel from SCC2 to SCC3 via e2 and SCC3 to SCC4 via e3. Thus all the nodes of the graph become reachable.

But if we reverse the edges e1, e2, and e3, the graph will look like the following:

Now in this graph, if we start DFS from node 0 it will visit only the nodes of SCC1. Similarly, if we start from node 3 it will visit only the nodes of SCC2. Thus, by reversing the SCC-connecting edges, the adjacent SCCs become unreachable. Now, the DFS will work in such a way, that in one DFS call we can only visit the nodes of a particular SCC. So, the number of DFS calls will represent the number of SCCs.

Until now, we have successfully found out the process of getting the number of SCCs. But here, comes a new problem i.e. if we do not know the SCCs, how the edges will be reversed? To solve this problem, we will simply try to reverse all the edges of the graph like the following:

If we carefully observe, the nodes within an SCC are reachable from each one to everyone even if we reverse the edges of the SCC. So, the SCCs will have no effect on reversing the edges. Thus we can fulfill our intention of reversing the SCC-connecting edge without affecting the SCCs.

Now, the question might be like, if node 0 is located in SCC4 and we start DFS from node 0, again we will visit all the SCCs at once even after reversing the edges. This is where the starting time and the finishing time concept will come in.

Now, we have a clear intuition about reversing edges before we move on to the starting and the finishing time concept in the algorithm part.

## 2. Algorithm for Kosaraju's Algorithm

- Sort all the nodes according to their finishing time:
- To sort all the nodes according to their finishing time, we will start DFS from node 0 and while backtracking in the DFS call we will store the nodes in a stack data structure. The nodes in the last SCC will finish first and will be stored in the last of the stack. After the DFS gets completed for all the nodes, the stack will be storing all the nodes in the sorted order of their finishing time.
- Reverse all the edges of the entire graph:
- Now, we will create another adjacency list and store the information of the graph in a reversed   manner.
- Perform the DFS and count the no. of different DFS calls to get the no. of SCC:
  - Now, we will start DFS from the node which is on the top of the stack and continue until the stack becomes empty. For each individual DFS call, we will increment the counter variable by 1. 
  - We will get the number of SCCs by just counting the number of individual DFS calls as in each individual DFS call, all the nodes of a particular SCC get visited.
- Finally, we will get the number of SCCs in the counter variable. If we want to store the SCCs as 
  well, we need to store the nodes in some array during each individual DFS call in step 3.



## 4. Problem Description

 Given a Directed Graph with V vertices `(Numbered from 0 to V-1)` and E edges, Find the number of strongly connected components in the graph.

## 5. Examples

Example graph:

```
      0    1    2    3  4
    ---------------------
 0 | 0    0    1    1   0 
 1 | 1    0    0    0   0
 2 | 0    1    0    0   0
 3 | 0    0    0    0   1
 4 | 0    0    0    0   0

 Result: 3
```

## 6. Constraints

- The graph must be connected and directed.

## 7. Implementation

### Prim's Algorithm

<Tabs>
  <TabItem value="Python" label="Python" default>
  ```python
  import heapq

  def prim(graph):
      min_heap = []
      visited = set()
      MST = []
      start_vertex = list(graph.keys())[0]
      visited.add(start_vertex)
      for neighbor, weight in graph[start_vertex]:
          heapq.heappush(min_heap, (weight, start_vertex, neighbor))
      while min_heap:
          weight, src, dest = heapq.heappop(min_heap)
          if dest not in visited:
              visited.add(dest)
              MST.append((src, dest, weight))
              for neighbor, weight in graph[dest]:
                  if neighbor not in visited:
                      heapq.heappush(min_heap, (weight, dest, neighbor))
      return MST
  ```
  </TabItem>

  <TabItem value="java" label="java">
  ```java
  import java.io.*;
import java.util.*;



//User function Template for Java


class Solution {
    private void dfs(int node, int []vis, ArrayList<ArrayList<Integer>> adj,
                     Stack<Integer> st) {
        vis[node] = 1;
        for (Integer it : adj.get(node)) {
            if (vis[it] == 0) {
                dfs(it, vis, adj, st);
            }
        }
        st.push(node);
    }
    private void dfs3(int node, int[] vis, ArrayList<ArrayList<Integer>> adjT) {
        vis[node] = 1;
        for (Integer it : adjT.get(node)) {
            if (vis[it] == 0) {
                dfs3(it, vis, adjT);
            }
        }
    }
    //Function to find number of strongly connected components in the graph.
    public int kosaraju(int V, ArrayList<ArrayList<Integer>> adj) {
        int[] vis = new int[V];
        Stack<Integer> st = new Stack<Integer>();
        for (int i = 0; i < V; i++) {
            if (vis[i] == 0) {
                dfs(i, vis, adj, st);
            }
        }

        ArrayList<ArrayList<Integer>> adjT = new ArrayList<ArrayList<Integer>>();
        for (int i = 0; i < V; i++) {
            adjT.add(new ArrayList<Integer>());
        }
        for (int i = 0; i < V; i++) {
            vis[i] = 0;
            for (Integer it : adj.get(i)) {
                // i -> it
                // it -> i
                adjT.get(it).add(i);
            }
        }
        int scc = 0;
        while (!st.isEmpty()) {
            int node = st.peek();
            st.pop();
            if (vis[node] == 0) {
                scc++;
                dfs3(node, vis, adjT);
            }
        }
        return scc;
    }
}

class Main {
    public static void main (String[] args) {
        int n = 5;
        int[][] edges = {
            {1, 0}, {0, 2},
            {2, 1}, {0, 3},
            {3, 4}
        };
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<Integer>());
        }
        for (int i = 0; i < n; i++) {
            adj.get(edges[i][0]).add(edges[i][1]);
        }
        Solution obj = new Solution();
        int ans = obj.kosaraju(n, adj);
        System.out.println("The number of strongly connected components is: " + ans);
    }
}
  ```
  </TabItem>

  <TabItem value="C++" label="C++">
  ```cpp
  #include <bits/stdc++.h>
using namespace std;




class Solution
{
private:
    void dfs(int node, vector<int> &vis, vector<int> adj[],
             stack<int> &st) {
        vis[node] = 1;
        for (auto it : adj[node]) {
            if (!vis[it]) {
                dfs(it, vis, adj, st);
            }
        }

        st.push(node);
    }
private:
    void dfs3(int node, vector<int> &vis, vector<int> adjT[]) {
        vis[node] = 1;
        for (auto it : adjT[node]) {
            if (!vis[it]) {
                dfs3(it, vis, adjT);
            }
        }
    }
public:
    //Function to find number of strongly connected components in the graph.
    int kosaraju(int V, vector<int> adj[])
    {
        vector<int> vis(V, 0);
        stack<int> st;
        for (int i = 0; i < V; i++) {
            if (!vis[i]) {
                dfs(i, vis, adj, st);
            }
        }

        vector<int> adjT[V];
        for (int i = 0; i < V; i++) {
            vis[i] = 0;
            for (auto it : adj[i]) {
                // i -> it
                // it -> i
                adjT[it].push_back(i);
            }
        }
        int scc = 0;
        while (!st.empty()) {
            int node = st.top();
            st.pop();
            if (!vis[node]) {
                scc++;
                dfs3(node, vis, adjT);
            }
        }
        return scc;
    }
};

int main() {

    int n = 5;
    int edges[5][2] = {
        {1, 0}, {0, 2},
        {2, 1}, {0, 3},
        {3, 4}
    };
    vector<int> adj[n];
    for (int i = 0; i < n; i++) {
        adj[edges[i][0]].push_back(edges[i][1]);
    }
    Solution obj;
    int ans = obj.kosaraju(n, adj);
    cout << "The number of strongly connected components is: " << ans << endl;
    return 0;
}
  ```
   </TabItem>

</Tabs>

## 8. Complexity Analysis

- **Time Complexity:**  `O(V+E) + $O(V+E) + O(V+E) ~ O(V+E)` , where `V = no. of vertices`, `E = no. of edges`. The first step is a simple DFS, so the first term is `O(V+E)`. The second step of reversing the graph and the third step, containing DFS again, will take $O(V+E)$ each.
- **Space Complexity:** $O(V)$+$O(V)$+$O(V+E)$, where `V = no. of vertices`, `E = no. of edges`. Two $O(V)$ for the visited array and the stack we have used. $O(V+E)$ space for the reversed adjacent list.


## 10. References

- [GeeksforGeeks - Prim's Algorithm](https://takeuforward.org/graph/strongly-connected-components-kosarajus-algorithm-g-54/)