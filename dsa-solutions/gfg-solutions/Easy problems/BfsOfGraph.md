---
id: bfs-of-graph
title: BFS of Graph
sidebar_label: 0020 - BFS of Graph
tags:
  - Easy
  - Graph
  - BFS
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the BFS of Graph problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description

Given a directed graph. The task is to do Breadth First Traversal of this graph starting from 0. One can move from node `u` to node `v` only if there's an edge from `u` to `v`. Find the BFS traversal of the graph starting from the 0th vertex, from left to right according to the input graph. Also, you should only take nodes directly or indirectly connected from Node 0 in consideration.

## Examples

**Example 1:**

```
Input:
V = 5, E = 4
Edges: [(0, 1), (0, 2), (1, 3), (2, 4)]
Output: [0, 1, 2, 3, 4]
Explanation: The BFS starting from node 0 will visit nodes in the order 0, 1, 2, 3, 4.
```

**Example 2:**

```
Input:
V = 3, E = 2
Edges: [(0, 1), (1, 2)]
Output: [0, 1, 2]
Explanation: The BFS starting from node 0 will visit nodes in the order 0, 1, 2.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `bfsOfGraph()` which takes the number of vertices `V` and the adjacency list of the graph as input parameters and returns a list containing the BFS traversal of the graph starting from the 0th vertex.

Expected Time Complexity: $O(V + E)$

Expected Auxiliary Space: $O(V)$

## Constraints

* `1 ≤ V, E ≤ 10^4`

## Problem Explanation

The task is to perform Breadth-First Search (BFS) on the given graph starting from vertex 0. BFS is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph) and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

## Code Implementation

### C++ Solution

```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    // Function to return Breadth First Traversal of given graph.
    vector<int> bfsOfGraph(int V, vector<int> adj[]) {
        vector<int> bfs;  // to store the BFS traversal
        vector<bool> visited(V, false);  // to keep track of visited nodes
        
        queue<int> q;
        q.push(0);
        visited[0] = true;

        while (!q.empty()) {
            int node = q.front();
            q.pop();
            bfs.push_back(node);

            for (auto it : adj[node]) {
                if (!visited[it]) {
                    q.push(it);
                    visited[it] = true;
                }
            }
        }

        return bfs;
    }
};

//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int V, E;
        cin >> V >> E;

        vector<int> adj[V];

        for (int i = 0; i < E; i++) {
            int u, v;
            cin >> u >> v;
            adj[u].push_back(v);
        }
        
        Solution obj;
        vector<int> ans = obj.bfsOfGraph(V, adj);
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << " ";
        }
        cout << endl;
    }
    return 0;
}
// } Driver Code Ends
```

## Example Walkthrough

**Example 1:**

For the input graph:
```
V = 5, E = 4
Edges: [(0, 1), (0, 2), (1, 3), (2, 4)]
```
1. Starting from node 0, we visit nodes 1 and 2.
2. From node 1, we visit node 3.
3. From node 2, we visit node 4.
4. Hence, the BFS traversal is [0, 1, 2, 3, 4].

**Example 2:**

For the input graph:
```
V = 3, E = 2
Edges: [(0, 1), (1, 2)]
```
1. Starting from node 0, we visit node 1.
2. From node 1, we visit node 2.
3. Hence, the BFS traversal is [0, 1, 2].

## Solution Logic:

1. Use a queue to keep track of nodes to be visited.
2. Use a boolean array to keep track of visited nodes.
3. Start from node 0, mark it as visited, and push it into the queue.
4. While the queue is not empty:
    - Pop a node from the queue.
    - Add it to the BFS result.
    - Push all its unvisited adjacent nodes into the queue and mark them as visited.
5. Return the BFS traversal.

## Time Complexity

* The time complexity is $O(V + E)$ because each vertex and each edge is processed once.

## Space Complexity

* The auxiliary space complexity is $O(V)$ due to the storage of the visited array and the queue used in the algorithm.

## References

- **GeeksforGeeks Problem:** [BFS of Graph](https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1?page=1&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
