---

id: search-in-a-binary-search-tree
title:   Minimum Time to Visit Disappearing Nodes
sidebar_label: 3112. Minimum Time to Visit Disappearing Nodes

tags:
- Medium
- graph
- shortest path

description: "This is a solution to the Minimum Time to Visit Disappearing Nodes problem."
---


## Problem Description

There is an undirected graph of `n` nodes. You are given a 2D array `edges`, where `edges[i] = [ui, vi, lengthi]` describes an edge between node `ui` and node `vi` with a traversal time of `lengthi` units.

Additionally, you are given an array `disappear`, where `disappear[i]` denotes the time when the node `i` disappears from the graph and you won't be able to visit it.

Notice that the graph might be disconnected and might contain multiple edges.

Return the array `answer`, with `answer[i]` denoting the minimum units of time required to reach node `i` from node `0`. If node `i` is unreachable from node `0` then `answer[i]` is `-1`.

### Example

**Example 1:**

```
Input: n = 3, edges = [[0,1,2],[1,2,1],[0,2,4]], disappear = [1,1,5]
Output: [0,-1,4]

Explanation:

We are starting our journey from node 0, and our goal is to find the minimum time required to reach each node before it disappears.

For node 0, we don't need any time as it is our starting point.
For node 1, we need at least 2 units of time to traverse edges[0]. Unfortunately, it disappears at that moment, so we won't be able to visit it.
For node 2, we need at least 4 units of time to traverse edges[2].
```

**Example 2:**

```
Input: n = 3, edges = [[0,1,2],[1,2,1],[0,2,4]], disappear = [1,3,5]
Output: [0,2,3]

Explanation:

We are starting our journey from node 0, and our goal is to find the minimum time required to reach each node before it disappears.

For node 0, we don't need any time as it is the starting point.
For node 1, we need at least 2 units of time to traverse edges[0].
For node 2, we need at least 3 units of time to traverse edges[0] and edges[1].
```

**Example 3:**

```
Input: n = 2, edges = [[0,1,1]], disappear = [1,1]
Output: [0,-1]

Explanation:

Exactly when we reach node 1, it disappears.
```

### Constraints

- `1 <= n <= 5 * 10^4`
- `0 <= edges.length <= 10^5`
- `edges[i] == [ui, vi, lengthi]`
- `0 <= ui, vi <= n - 1`
- `1 <= lengthi <= 10^5`
- `disappear.length == n`
- `1 <= disappear[i] <= 10^5`

## Solution Approach

### Intuition

To find the minimum time required to reach each node from node 0 before it disappears, we can use Dijkstra's algorithm. We need to adjust the algorithm to take into account the disappear times of each node.

### Algorithm

1. **Graph Representation**: Use an adjacency list to represent the graph.
2. **Priority Queue**: Use a priority queue to implement Dijkstra's algorithm.
3. **Dijkstra's Algorithm**:
   - Initialize the distance to node 0 as 0 and all other nodes as infinity.
   - Use a priority queue to process nodes based on the minimum distance.
   - For each node, check its neighbors and update their distances if a shorter path is found.
   - If the time to reach a node is greater than or equal to its disappear time, mark it as unreachable.
4. **Result**: Return the distances, marking nodes as `-1` if they are unreachable.

### Complexity

- Time Complexity: $O((E + V) \log V)$, where E is the number of edges and V is the number of vertices.
- Space Complexity: $O(E + V)$ for storing the graph and distances.

## Solution Implementation

### Code(Java) 
```java


public class MinimumTimeToVisitDisappearingNodes {
    public int[] minimumTime(int n, int[][] edges, int[] disappear) {
        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            graph.get(edge[0]).add(new int[]{edge[1], edge[2]});
            graph.get(edge[1]).add(new int[]{edge[0], edge[2]});
        }

        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[0] = 0;
        
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        pq.add(new int[]{0, 0});
        
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int node = curr[0];
            int time = curr[1];
            
            if (time >= disappear[node]) continue;
            
            for (int[] neighbor : graph.get(node)) {
                int newTime = time + neighbor[1];
                if (newTime < dist[neighbor[0]] && newTime < disappear[neighbor[0]]) {
                    dist[neighbor[0]] = newTime;
                    pq.add(new int[]{neighbor[0], newTime});
                }
            }
        }
        
        for (int i = 0; i < n; i++) {
            if (dist[i] == Integer.MAX_VALUE) {
                dist[i] = -1;
            }
        }
        
        return dist;
    }
}

```


### Code (C++)
```cpp


using namespace std;

vector<int> minimumTime(int n, vector<vector<int>>& edges, vector<int>& disappear) {
    vector<vector<pair<int, int>>> graph(n);
    for (const auto& edge : edges) {
        graph[edge[0]].emplace_back(edge[1], edge[2]);
        graph[edge[1]].emplace_back(edge[0], edge[2]);
    }

    vector<int> dist(n, INT_MAX);
    dist[0] = 0;
    
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.emplace(0, 0);
    
    while (!pq.empty()) {
        auto [time, node] = pq.top();
        pq.pop();
        
        if (time >= disappear[node]) continue;
        
        for (const auto& [neighbor, length] : graph[node]) {
            int newTime = time + length;
            if (newTime < dist[neighbor] && newTime < disappear[neighbor]) {
                dist[neighbor] = newTime;
                pq.emplace(newTime, neighbor);
            }
        }
    }
    
    for (int& d : dist) {
        if (d == INT_MAX) {
            d = -1;
        }
    }
    
    return dist;
}


```


### Code (Python):

```python
import heapq

def minimumTime(n, edges, disappear):
    graph = [[] for _ in range(n)]
    for u, v, length in edges:
        graph[u].append((v, length))
        graph[v].append((u, length))

    pq = [(0, 0)]  # (time, node)
    dist = [float('inf')] * n
    dist[0] = 0
    
    while pq:
        time, node = heapq.heappop(pq)
        
        if time >= disappear[node]:
            continue
        
        for neighbor, length in graph[node]:
            new_time = time + length
            if new_time < dist[neighbor] and new_time < disappear[neighbor]:
                dist[neighbor] = new_time
                heapq.heappush(pq, (new_time, neighbor))
    
    return [d if d != float('inf') else -1 for d in dist]
```
