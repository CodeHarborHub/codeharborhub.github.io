---
id: dfs-of-graph
title: DFS of Graph
sidebar_label: 0022 - DFS of Graph
tags:
  - Easy
  - Graph
  - DFS
  - GeeksforGeeks
  - CPP
  - DSA
description: "This tutorial covers the solution to the DFS of Graph problem from the GeeksforGeeks website, featuring implementations in C++."
---
## Problem Description

You are given a connected undirected graph. Perform a Depth First Traversal of the graph.
Note: Use the recursive approach to find the DFS traversal of the graph starting from the 0th vertex from left to right according to the graph.

## Examples

**Example 1:**

```
Input:
Graph: 
0->1, 0->2, 1->2, 2->0, 2->3, 3->3
Output: 0 1 2 3
Explanation: 
0 is connected to 1, 2.
1 is connected to 2.
2 is connected to 0, 3.
3 is connected to 3.
```

**Example 2:**

```
Input:
Graph: 
0->1, 0->2, 1->2, 2->0, 2->3, 3->3
Output: 0 1 2 3
Explanation: 
0 is connected to 1, 2.
1 is connected to 2.
2 is connected to 0, 3.
3 is connected to 3.
```

## Your Task

You don't need to read input or print anything. Your task is to complete the function `dfsOfGraph()` which takes the number of vertices `V` and an adjacency list `adj` as input parameters and returns a list containing the DFS traversal of the graph starting from the 0th vertex.

Expected Time Complexity: O(V + E)

Expected Auxiliary Space: O(V)

## Constraints

* `1 ≤ V, E ≤ 10^4`

## Problem Explanation

The task is to traverse a given connected undirected graph using Depth First Search (DFS). DFS is a traversal algorithm that starts at a source node and explores as far as possible along each branch before backtracking. This recursive approach uses a stack data structure for its implementation.

## Code Implementation

### C++ Solution

```cpp
//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    // Function to return a list containing the DFS traversal of the graph.
    void dfsUtil(int node, vector<int> adj[], vector<bool>& visited, vector<int>& result) {
        visited[node] = true;
        result.push_back(node);
        
        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                dfsUtil(neighbor, adj, visited, result);
            }
        }
    }
    
    vector<int> dfsOfGraph(int V, vector<int> adj[]) {
        vector<int> result;
        vector<bool> visited(V, false);
        
        dfsUtil(0, adj, visited, result);
        
        return result;
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
            adj[v].push_back(u);
        }
        Solution obj;
        vector<int> ans = obj.dfsOfGraph(V, adj);
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

For the input:
```
Graph: 
0->1, 0->2, 1->2, 2->0, 2->3, 3->3
Output: 0 1 2 3
```
1. Start DFS from node 0.
2. Visit node 1 from node 0.
3. Visit node 2 from node 1.
4. Visit node 3 from node 2.
5. Backtrack to node 2, then to node 1, and finally to node 0.

The result of the traversal is [0, 1, 2, 3].

## Solution Logic:

1. Use a recursive helper function `dfsUtil` to perform DFS starting from a given node.
2. Mark the node as visited and add it to the result list.
3. Recursively visit all unvisited neighbors of the current node.
4. The main function initializes the visited list and starts the DFS from node 0.

## Time Complexity

* The time complexity is $O(V + E)$ where $V$ is the number of vertices and $E$ is the number of edges, as each vertex and edge is visited once.

## Space Complexity

* The auxiliary space complexity is $O(V)$ due to the visited list and the recursive stack.

## References

- **GeeksforGeeks Problem:** [DFS of Graph](https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1?page=2&difficulty=Easy&sortBy=submissions)
- **Solution Author:** [arunimad6yuq](https://www.geeksforgeeks.org/user/arunimad6yuq/)
