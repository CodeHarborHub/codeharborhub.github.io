---

id: multistage-graph
title: Multistage Graph Algorithm
sidebar_label: Multistage Graph Algorithm
tags: [python, java, c++, javascript, programming, algorithms, graph, shortest-path, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about the Multistage Graph Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.

---

# Multistage Graph Algorithm

## Introduction

A Multistage Graph is a directed graph in which vertices are divided into stages, with edges only directed from one stage to the next. The Multistage Graph Algorithm finds the shortest path from a source vertex in the first stage to a destination vertex in the last stage.

## Key Concepts

- **Stages**: The graph is divided into several stages.
- **Directed Edges**: Each edge connects a vertex in one stage to a vertex in the next stage.
- **Shortest Path**: The path from the source to the destination with the minimum total edge weight.

## Steps

1. Initialize a table to store the shortest path costs from each vertex to the destination.
2. Start from the destination vertex and move backwards to the source vertex.
3. For each vertex, calculate the shortest path cost to the destination by considering all possible paths through the subsequent stages.
4. The final value at the source vertex will be the shortest path cost.


![multistage](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZcLRL-JXQ84J5e5F9BA6BzU76RAtn9vuAnw&s)
## Pseudocode

Here’s the pseudocode for the Multistage Graph Algorithm:

```python
function multistage_graph(graph, stages):
    n = number of vertices in graph
    cost = array of size n with initial values as infinity
    cost[destination] = 0

    for each vertex from destination to source:
        for each edge from vertex:
            cost[vertex] = min(cost[vertex], edge cost + cost[edge to vertex])

    return cost[source]
```

## Implementation in Various Languages

### Python

```python
def multistage_graph(graph, stages):
    n = len(graph)
    cost = [float('inf')] * n
    cost[-1] = 0  # Cost to reach destination from itself is 0

    for i in range(n - 2, -1, -1):
        for j in range(i + 1, n):
            if graph[i][j] != float('inf'):
                cost[i] = min(cost[i], graph[i][j] + cost[j])

    return cost[0]

# Example usage
graph = [
    [float('inf'), 1, 2, 5, float('inf'), float('inf'), float('inf')],
    [float('inf'), float('inf'), float('inf'), float('inf'), 4, 11, float('inf')],
    [float('inf'), float('inf'), float('inf'), float('inf'), 9, 5, 16],
    [float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), 2],
    [float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), 18],
    [float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), 13],
    [float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf'), float('inf')]
]

stages = 4
print(multistage_graph(graph, stages))  # Output: 17
```

### Java

```java
import java.util.Arrays;

public class MultistageGraph {
    public static int multistageGraph(int[][] graph, int stages) {
        int n = graph.length;
        int[] cost = new int[n];
        Arrays.fill(cost, Integer.MAX_VALUE);
        cost[n - 1] = 0;  // Cost to reach destination from itself is 0

        for (int i = n - 2; i >= 0; i--) {
            for (int j = i + 1; j < n; j++) {
                if (graph[i][j] != Integer.MAX_VALUE) {
                    cost[i] = Math.min(cost[i], graph[i][j] + cost[j]);
                }
            }
        }

        return cost[0];
    }

    public static void main(String[] args) {
        int[][] graph = {
            {Integer.MAX_VALUE, 1, 2, 5, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE},
            {Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, 4, 11, Integer.MAX_VALUE},
            {Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, 9, 5, 16},
            {Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, 2},
            {Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, 18},
            {Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, 13},
            {Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE}
        };

        int stages = 4;
        System.out.println(multistageGraph(graph, stages));  // Output: 17
    }
}
```

### C++

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <climits>

using namespace std;

int multistageGraph(vector<vector<int>> &graph, int stages) {
    int n = graph.size();
    vector<int> cost(n, INT_MAX);
    cost[n - 1] = 0;  // Cost to reach destination from itself is 0

    for (int i = n - 2; i >= 0; i--) {
        for (int j = i + 1; j < n; j++) {
            if (graph[i][j] != INT_MAX) {
                cost[i] = min(cost[i], graph[i][j] + cost[j]);
            }
        }
    }

    return cost[0];
}

int main() {
    vector<vector<int>> graph = {
        {INT_MAX, 1, 2, 5, INT_MAX, INT_MAX, INT_MAX},
        {INT_MAX, INT_MAX, INT_MAX, INT_MAX, 4, 11, INT_MAX},
        {INT_MAX, INT_MAX, INT_MAX, INT_MAX, 9, 5, 16},
        {INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, 2},
        {INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, 18},
        {INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, 13},
        {INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX, INT_MAX}
    };

    int stages = 4;
    cout << multistageGraph(graph, stages) << endl;  // Output: 17

    return 0;
}
```

### JavaScript

```javascript
function multistageGraph(graph, stages) {
    const n = graph.length;
    const cost = new Array(n).fill(Infinity);
    cost[n - 1] = 0;  // Cost to reach destination from itself is 0

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (graph[i][j] !== Infinity) {
                cost[i] = Math.min(cost[i], graph[i][j] + cost[j]);
            }
        }
    }

    return cost[0];
}

// Example usage
const graph = [
    [Infinity, 1, 2, 5, Infinity, Infinity, Infinity],
    [Infinity, Infinity, Infinity, Infinity, 4, 11, Infinity],
    [Infinity, Infinity, Infinity, Infinity, 9, 5, 16],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 2],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 18],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, 13],
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity]
];

const stages = 4;
console.log(multistageGraph(graph, stages));  // Output: 17
```

## Example

Consider a multistage graph with vertices and edges:

```plaintext
graph = [
    [∞, 1, 2, 5, ∞, ∞, ∞],
    [∞, ∞, ∞, ∞, 4, 11, ∞],
    [∞, ∞, ∞, ∞, 9, 5, 16],
    [∞, ∞, ∞, ∞, ∞, ∞, 2],
    [∞, ∞, ∞, ∞, ∞, ∞, 18],
    [∞, ∞, ∞, ∞, ∞, ∞, 13],
    [∞, ∞, ∞, ∞, ∞, ∞, ∞]
]
```

1. Start from the destination vertex and move backwards.
2. Calculate the shortest path cost

 for each vertex considering all possible paths.
3. The shortest path cost from the source vertex will be the result.

The shortest path cost is 17.

## Conclusion

The Multistage Graph Algorithm efficiently finds the shortest path in a graph divided into stages. It operates in $O(V^2)$ time complexity, making it suitable for graphs with a structured stage-based layout. Understanding and implementing this algorithm is essential for solving complex optimization problems in various applications.
