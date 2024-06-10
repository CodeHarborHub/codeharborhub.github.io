---

id: prims
title: Prim's Algorithm 
sidebar_label: Prim's Algorithm 
tags: [python, java, c++, javascript, programming, algorithms, prim, graph, minimum-spanning-tree, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Prim's Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.

---

# Prim's Algorithm for Minimum Spanning Tree

## Introduction

Prim's Algorithm is a greedy algorithm used for finding the Minimum Spanning Tree (MST) of a weighted undirected graph. The MST is a subset of the graph's edges that connects all vertices together without cycles and with the minimum possible total edge weight.

## Key Concepts

- **Minimum Spanning Tree (MST)**: A tree that spans all the vertices of the graph with the minimum total edge weight.
- **Greedy Algorithm**: At each step, the algorithm selects the edge with the smallest weight that connects a vertex in the MST to a vertex outside the MST.

## Steps

1. Initialize a tree with a single vertex, chosen arbitrarily from the graph.
2. Grow the tree by one edge: select the edge with the smallest weight that connects a vertex in the tree to a vertex outside the tree.
3. Repeat step 2 until all vertices are included in the tree.

## Pseudocode

Here’s the pseudocode for Prim's Algorithm:

```python
function prim(graph, start):
    initialize a priority queue (min-heap) and a list for the MST
    add start vertex to the MST
    for each edge from the start vertex, add edge to the priority queue

    while the priority queue is not empty:
        edge = extract-min from the priority queue
        if the edge connects a vertex in the MST to a vertex outside the MST:
            add edge to the MST
            add the new vertex to the MST
            for each edge from the new vertex, add edge to the priority queue

    return MST
```

<Tabs>
<TabItem value="Python" label="Python">

```python showLineNubmers
import heapq

def prim(graph, start):
    mst = []
    visited = set([start])
    edges = [(cost, start, to) for to, cost in graph[start].items()]
    heapq.heapify(edges)

    while edges:
        cost, frm, to = heapq.heappop(edges)
        if to not in visited:
            visited.add(to)
            mst.append((frm, to, cost))
            for to_next, cost in graph[to].items():
                if to_next not in visited:
                    heapq.heappush(edges, (cost, to, to_next))
    
    return mst

# Example usage
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 3, 'D': 2},
    'C': {'A': 4, 'B': 3, 'D': 5},
    'D': {'B': 2, 'C': 5}
}

mst = prim(graph, 'A')
print(mst)  # Output: [('A', 'B', 1), ('B', 'D', 2), ('B', 'C', 3)]

```
</TabItem>

<TabItem value="Java" label="Java">

```jsx showLineNumbers
import java.util.*;

public class Prim {
    static class Edge {
        int to, cost;
        Edge(int to, int cost) {
            this.to = to;
            this.cost = cost;
        }
    }

    public static List<int[]> prim(Map<Integer, List<Edge>> graph, int start) {
        List<int[]> mst = new ArrayList<>();
        Set<Integer> visited = new HashSet<>();
        PriorityQueue<Edge> pq = new PriorityQueue<>(Comparator.comparingInt(e -> e.cost));

        visited.add(start);
        pq.addAll(graph.get(start));

        while (!pq.isEmpty()) {
            Edge edge = pq.poll();
            if (!visited.contains(edge.to)) {
                visited.add(edge.to);
                mst.add(new int[]{start, edge.to, edge.cost});
                for (Edge nextEdge : graph.get(edge.to)) {
                    if (!visited.contains(nextEdge.to)) {
                        pq.add(nextEdge);
                    }
                }
            }
        }
        return mst;
    }

    public static void main(String[] args) {
        Map<Integer, List<Edge>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(new Edge(1, 1), new Edge(2, 4)));
        graph.put(1, Arrays.asList(new Edge(0, 1), new Edge(2, 3), new Edge(3, 2)));
        graph.put(2, Arrays.asList(new Edge(0, 4), new Edge(1, 3), new Edge(3, 5)));
        graph.put(3, Arrays.asList(new Edge(1, 2), new Edge(2, 5)));

        List<int[]> mst = prim(graph, 0);
        for (int[] edge : mst) {
            System.out.println(Arrays.toString(edge));  // Output: [0, 1, 1], [1, 3, 2], [1, 2, 3]
        }
    }
}

```
</TabItem>

<TabItem value="Cpp" label="Cpp">
```cpp showLineNumbers
#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <functional>

using namespace std;

class Edge {
public:
    int to, cost;
    Edge(int to, int cost) : to(to), cost(cost) {}
};

vector<vector<int>> prim(unordered_map<int, vector<Edge>> &graph, int start) {
    vector<vector<int>> mst;
    unordered_set<int> visited;
    auto cmp = [](Edge &a, Edge &b) { return a.cost > b.cost; };
    priority_queue<Edge, vector<Edge>, decltype(cmp)> pq(cmp);

    visited.insert(start);
    for (const Edge &edge : graph[start]) {
        pq.push(edge);
    }

    while (!pq.empty()) {
        Edge edge = pq.top();
        pq.pop();

        if (visited.find(edge.to) == visited.end()) {
            visited.insert(edge.to);
            mst.push_back({start, edge.to, edge.cost});

            for (const Edge &nextEdge : graph[edge.to]) {
                if (visited.find(nextEdge.to) == visited.end()) {
                    pq.push(nextEdge);
                }
            }
        }
    }
    return mst;
}

int main() {
    unordered_map<int, vector<Edge>> graph;
    graph[0] = {Edge(1, 1), Edge(2, 4)};
    graph[1] = {Edge(0, 1), Edge(2, 3), Edge(3, 2)};
    graph[2] = {Edge(0, 4), Edge(1, 3), Edge(3, 5)};
    graph[3] = {Edge(1, 2), Edge(2, 5)};

    vector<vector<int>> mst = prim(graph, 0);
    for (const vector<int> &edge : mst) {
        cout << "[" << edge[0] << ", " << edge[1] << ", " << edge[2] << "]" << endl;  // Output: [0, 1, 1], [1, 3, 2], [1, 2, 3]
    }
}

```
</TabItem>

<TabItem value="JavaScript" label="JavaScript">
```jsx showLineNumbers
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(edge) {
        this.heap.push(edge);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length < 2) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const element = this.heap[index];
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (parent.cost <= element.cost) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.cost < element.cost) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild.cost < element.cost) ||
                    (swap !== null && rightChild.cost < leftChild.cost)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}

function prim(graph, start) {
    const mst = [];
    const visited = new Set();
    const minHeap = new MinHeap();

    visited.add(start);
    for (const [to, cost] of Object.entries(graph[start])) {
        minHeap.insert({ from: start

, to: to, cost: cost });
    }

    while (minHeap.heap.length > 0) {
        const { from, to, cost } = minHeap.extractMin();
        if (!visited.has(to)) {
            visited.add(to);
            mst.push([from, to, cost]);
            for (const [nextTo, nextCost] of Object.entries(graph[to])) {
                if (!visited.has(nextTo)) {
                    minHeap.insert({ from: to, to: nextTo, cost: nextCost });
                }
            }
        }
    }
    return mst;
}

// Example usage
const graph = {
    'A': { 'B': 1, 'C': 4 },
    'B': { 'A': 1, 'C': 3, 'D': 2 },
    'C': { 'A': 4, 'B': 3, 'D': 5 },
    'D': { 'B': 2, 'C': 5 }
};

const mst = prim(graph, 'A');
console.log(mst);  // Output: [['A', 'B', 1], ['B', 'D', 2], ['B', 'C', 3]]

```
</TabItem>
</Tabs>

## Example

Consider a weighted undirected graph with vertices and edges:

```plaintext
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 3, 'D': 2},
    'C': {'A': 4, 'B': 3, 'D': 5},
    'D': {'B': 2, 'C': 5}
}
```

1. Start with vertex 'A'.
2. The edge with the smallest weight from 'A' is ('A', 'B', 1), add it to the MST.
3. The next smallest edge is ('B', 'D', 2), add it to the MST.
4. Finally, add edge ('B', 'C', 3) to the MST.

The MST contains the edges: [('A', 'B', 1), ('B', 'D', 2), ('B', 'C', 3)].

## Conclusion

Prim's Algorithm is an efficient method for finding the Minimum Spanning Tree of a weighted undirected graph. It operates in $O(E log V)$ time complexity using a priority queue, making it suitable for large graphs. Understanding and implementing this algorithm is fundamental for solving various network design problems and optimizing connectivity.
