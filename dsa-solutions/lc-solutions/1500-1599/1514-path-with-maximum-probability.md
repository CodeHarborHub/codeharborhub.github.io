---
id: path-with-maximum-probability
title: Path with Maximum Probability
sidebar_label: 1514 - Path with Maximum Probability
tags:
- Array
- Graph
- Heap (Priority Queue)
- Shortest Path
description: "This is a solution to the  Path with Maximum Probability problem on LeetCode."
---

## Problem Description
You are given an undirected weighted graph of n nodes (0-indexed), represented by an edge list where `edges[i] = [a, b]` is an undirected edge connecting the nodes a and b with a probability of success of traversing that edge succProb[i].

Given two nodes start and end, find the path with the maximum probability of success to go from start to end and return its success probability.

If there is no path from start to end, return 0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.

### Examples
**Example 1:**
![image](https://assets.leetcode.com/uploads/2019/09/20/1558_ex1.png)
```
Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
Output: 0.25000
Explanation: There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.

```

**Example 2:**
![image](https://assets.leetcode.com/uploads/2019/09/20/1558_ex2.png)

```
Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
Output: 0.30000
```

### Constraints
- `2 <= n <= 10^4`
- `0 <= start, end < n`
- `start != end`
- `0 <= a, b < n`
- `a != b`
- `0 <= succProb.length == edges.length <= 2*10^4`
- `0 <= succProb[i] <= 1`
- `There is at most one edge between every two nodes.`
## Solution for Path with Maximum Probability Problem
### Approach 
#### Main Intuition
The main intuition behind this code is similar to Dijkstra's algorithm for finding the shortest path, but instead of minimizing distances, it maximizes probabilities. The idea is to iteratively explore the most probable paths using a priority queue to always expand the most promising node (the node with the highest probability of being part of the maximum probability path to the end node).

#### Graph Representation:

- The graph is represented using an adjacency list. Each node has a list of pairs, where each pair consists of an adjacent node and the probability of successfully traversing the edge to that node.
#### Input Parsing:

- The number of nodes (n) and the edges along with their respective probabilities (edges and succProb) are given as input.
- The start and end nodes are also provided.
#### Building the Graph:

- A vector of vectors of pairs (adj) is created to store the adjacency list.
- For each edge, two entries are added to the adjacency list to ensure the graph is undirected. Each entry contains the adjacent node and the probability of traversing that edge.
#### Probability Initialization:

- A prob vector is initialized to store the maximum probability of reaching each node from the start node. It is initialized to 0.0 for all nodes.
- The probability of reaching the start node from itself is set to 1.0 (prob[start] = 1.0).
#### Priority Queue for Processing Nodes:

- A priority queue (pq) is used to process nodes. This queue helps in processing nodes in the order of their probabilities (although the current implementation uses a max-heap for integer priorities, which is not correct and should use a min-heap for probabilities).
#### Dijkstra-like Algorithm:

- The algorithm processes nodes from the priority queue. For each node, it checks all its adjacent nodes.
- For each adjacent node, it calculates the probability of reaching it through the current node (prob[node] * probab).
- If this new probability is higher than the currently known probability for the adjacent node, it updates the probability and pushes the adjacent node into the priority queue.
#### Result:

- After processing all reachable nodes, the maximum probability to reach the end node is found in prob[end].
<Tabs>
  <TabItem value="Solution" label="Solution">

    #### Implementation
    ```jsx live
    function Solution(arr) {
  var maxProbability = function(n, edges, succProb, start, end) {
        const p = Array(n).fill(0);
        const graph = p.reduce((m, _, i) => m.set(i, []), new Map());
        edges.forEach(([u, v], i) => {
            graph.get(u).push([v, succProb[i]]);
            graph.get(v).push([u, succProb[i]]);
        });
        
        const queue = [[start, 1]];
        p[start] = 1;
        
        for (let [node, currP] of queue) {   
            for (let [adj, nextP] of graph.get(node)) {
            if (currP * nextP > p[adj]) {
                p[adj] = currP * nextP;
                queue.push([adj, p[adj]]);
            }
            }
        }
        
        return p[end];
    };
      const input = [[0,1],[1,2],[0,2]]
      const n = 3
      const succProb = [0.5,0.5,0.2]
      const start=0;
      const end =2
      const output = maxProbability(n, input , succProb,start , end)
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

    - Time Complexity: $O(edges*log(n)) $ 
    - Space Complexity: $ O(n)$

   ## Code in Different Languages
   <Tabs>
  <TabItem value="JavaScript" label="JavaScript">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```javascript
   function maxProbability(n, edges, succProb, start, end) {
    let adj = Array.from({ length: n }, () => []);

    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push([edges[i][1], succProb[i]]);
        adj[edges[i][1]].push([edges[i][0], succProb[i]]);
    }

    let prob = new Array(n).fill(0.0);
    let pq = new MaxPriorityQueue({ priority: x => x[1] });

    prob[start] = 1.0;
    pq.enqueue([start, 1.0]);

    while (!pq.isEmpty()) {
        let [node, nodeProb] = pq.dequeue().element;

        for (let [adjNode, probab] of adj[node]) {
            if (prob[node] * probab > prob[adjNode]) {
                prob[adjNode] = prob[node] * probab;
                pq.enqueue([adjNode, prob[adjNode]]);
            }
        }
    }

    return prob[end];
}

    ```

  </TabItem>
  <TabItem value="TypeScript" label="TypeScript">
  <SolutionAuthor name="@hiteshgahanolia"/> 
   ```typescript
   class Solution {
    maxProbability(n: number, edges: number[][], succProb: number[], start: number, end: number): number {
        let adj: Array<[number, number][]> = Array.from({ length: n }, () => []);

        for (let i = 0; i < edges.length; i++) {
            adj[edges[i][0]].push([edges[i][1], succProb[i]]);
            adj[edges[i][1]].push([edges[i][0], succProb[i]]);
        }

        let prob: number[] = new Array(n).fill(0.0);
        let pq = new MaxPriorityQueue({ priority: (x: [number, number]) => x[1] });

        prob[start] = 1.0;
        pq.enqueue([start, 1.0]);

        while (!pq.isEmpty()) {
            let [node, nodeProb] = pq.dequeue().element;

            for (let [adjNode, probab] of adj[node]) {
                if (prob[node] * probab > prob[adjNode]) {
                    prob[adjNode] = prob[node] * probab;
                    pq.enqueue([adjNode, prob[adjNode]]);
                }
            }
        }

        return prob[end];
    }
}

    ```
  </TabItem>
  <TabItem value="Python" label="Python">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```python
   import heapq
from typing import List

class Solution:
    def maxProbability(self, n: int, edges: List[List[int]], succProb: List[float], start: int, end: int) -> float:
        adj = [[] for _ in range(n)]

        for i in range(len(edges)):
            adj[edges[i][0]].append((edges[i][1], succProb[i]))
            adj[edges[i][1]].append((edges[i][0], succProb[i]))

        prob = [0.0] * n
        pq = []

        prob[start] = 1.0
        heapq.heappush(pq, (-1.0, start))

        while pq:
            nodeProb, node = heapq.heappop(pq)
            nodeProb = -nodeProb

            for adjNode, probab in adj[node]:
                if prob[node] * probab > prob[adjNode]:
                    prob[adjNode] = prob[node] * probab
                    heapq.heappush(pq, (-prob[adjNode], adjNode))

        return prob[end]

    ```

  </TabItem>
  <TabItem value="Java" label="Java">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```java
   import java.util.*;

class Solution {
    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {
        List<Pair<Integer, Double>>[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            adj[i] = new ArrayList<>();
        }

        for (int i = 0; i < edges.length; i++) {
            adj[edges[i][0]].add(new Pair<>(edges[i][1], succProb[i]));
            adj[edges[i][1]].add(new Pair<>(edges[i][0], succProb[i]));
        }

        double[] prob = new double[n];
        PriorityQueue<Pair<Integer, Double>> pq = new PriorityQueue<>((a, b) -> Double.compare(b.getValue(), a.getValue()));

        prob[start] = 1.0;
        pq.add(new Pair<>(start, 1.0));

        while (!pq.isEmpty()) {
            Pair<Integer, Double> nodePair = pq.poll();
            int node = nodePair.getKey();
            double nodeProb = nodePair.getValue();

            for (Pair<Integer, Double> it : adj[node]) {
                int adjNode = it.getKey();
                double probab = it.getValue();

                if (prob[node] * probab > prob[adjNode]) {
                    prob[adjNode] = prob[node] * probab;
                    pq.add(new Pair<>(adjNode, prob[adjNode]));
                }
            }
        }

        return prob[end];
    }

    static class Pair<K, V> {
        private final K key;
        private final V value;

        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }

        public K getKey() {
            return key;
        }

        public V getValue() {
            return value;
        }
    }
}

    ```

  </TabItem>
  <TabItem value="C++" label="C++">
  <SolutionAuthor name="@hiteshgahanolia"/>
   ```cpp
   class Solution {
public:
    double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start, int end) {
        vector<pair<int,double>>adj[n];

        for(int i=0;i<edges.size();i++)
        {
            adj[edges[i][0]].push_back({edges[i][1],succProb[i]});
             adj[edges[i][1]].push_back({edges[i][0],succProb[i]});
        }

        vector<double>prob(n,0.0);
        priority_queue<int> pq;

        prob[start]=1.0;

        pq.push(start);

        while(!pq.empty())
        {
            int  node= pq.top();
            pq.pop();

            for(auto it: adj[node])
            {
                int adjNode=it.first;
                double probab=it.second;

                if(prob[node]*probab>prob[adjNode] )
                {
                    pq.push(adjNode);
                    prob[adjNode]=prob[node]*probab;
                }
            }
        }
     
        return prob[end];
    }
};
```
</TabItem>
</Tabs>

  </TabItem>
</Tabs>

## References

- **LeetCode Problem**: [Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability)

- **Solution Link**: [LeetCode Solution](https://leetcode.com/problems/path-with-maximum-probability/solutions)

