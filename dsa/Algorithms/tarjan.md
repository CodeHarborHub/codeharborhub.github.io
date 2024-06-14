---

id: tarjan
title: Tarjan's Algorithm 
sidebar_label: Tarjan's Algorithm 
tags: [python, java, c++, javascript, programming, algorithms, tarjan, graph, strongly-connected-components, data structures, tutorial, in-depth]
description: In this tutorial, we will learn about Tarjan's Algorithm and its implementation in Python, Java, C++, and JavaScript with detailed explanations and examples.

---

# Tarjan's Algorithm for Strongly Connected Components

## Introduction

Tarjan's Algorithm is a depth-first search (DFS) based algorithm for finding all strongly connected components (SCCs) in a directed graph. A strongly connected component is a maximal subgraph where every pair of vertices is mutually reachable. This algorithm is efficient, operating in O(V + E) time, where V is the number of vertices and E is the number of edges.

## Key Concepts

- **DFS Number**: Each node is assigned a unique integer in the order it is first visited.
- **Low Link Value**: The smallest DFS number reachable from the node, including itself and its descendants.
- **Stack**: A stack is used to keep track of the nodes currently being explored.

## Steps

1. Perform a Depth-First Search (DFS) traversal of the graph.
2. Assign a DFS number to each node.
3. Calculate the low link value for each node.
4. Identify nodes that form SCCs based on their low link values.
5. Extract SCCs when a node’s low link value is equal to its DFS number.

## Pseudocode

Here’s the pseudocode for Tarjan's Algorithm:

```python
function tarjanSCC(graph):
    initialize index to 0
    initialize an empty stack
    initialize an empty list for SCCs
    for each vertex v in graph:
        if v is not visited:
            strongConnect(v)

function strongConnect(v):
    set v.index to index
    set v.lowlink to index
    increment index by 1
    push v onto stack
    set v.onStack to true

    for each neighbor w of v:
        if w is not visited:
            strongConnect(w)
            v.lowlink = min(v.lowlink, w.lowlink)
        else if w is on stack:
            v.lowlink = min(v.lowlink, w.index)

    if v.lowlink is equal to v.index:
        start a new SCC
        repeat
            w = stack.pop()
            set w.onStack to false
            add w to current SCC
        until w is v
        add current SCC to list of SCCs
```

## Implementation in Various Languages

### Python

```python
class TarjanSCC:
    def __init__(self, graph):
        self.graph = graph
        self.index = 0
        self.stack = []
        self.indices = {}
        self.lowlinks = {}
        self.on_stack = {}
        self.sccs = []

    def run(self):
        for node in self.graph:
            if node not in self.indices:
                self.strong_connect(node)
        return self.sccs

    def strong_connect(self, node):
        self.indices[node] = self.index
        self.lowlinks[node] = self.index
        self.index += 1
        self.stack.append(node)
        self.on_stack[node] = True

        for neighbor in self.graph[node]:
            if neighbor not in self.indices:
                self.strong_connect(neighbor)
                self.lowlinks[node] = min(self.lowlinks[node], self.lowlinks[neighbor])
            elif self.on_stack[neighbor]:
                self.lowlinks[node] = min(self.lowlinks[node], self.indices[neighbor])

        if self.lowlinks[node] == self.indices[node]:
            scc = []
            while True:
                w = self.stack.pop()
                self.on_stack[w] = False
                scc.append(w)
                if w == node:
                    break
            self.sccs.append(scc)

# Example usage
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 7],
    5: [6],
    6: [4],
    7: [8],
    8: [9],
    9: [7]
}

tarjan = TarjanSCC(graph)
sccs = tarjan.run()
print(sccs)  # Output: [[0, 2, 1], [3], [4, 6, 5], [7, 9, 8]]
```

### Java

```java
import java.util.*;

public class TarjanSCC {
    private Map<Integer, List<Integer>> graph;
    private int index;
    private Stack<Integer> stack;
    private Map<Integer, Integer> indices;
    private Map<Integer, Integer> lowlinks;
    private Set<Integer> onStack;
    private List<List<Integer>> sccs;

    public TarjanSCC(Map<Integer, List<Integer>> graph) {
        this.graph = graph;
        this.index = 0;
        this.stack = new Stack<>();
        this.indices = new HashMap<>();
        this.lowlinks = new HashMap<>();
        this.onStack = new HashSet<>();
        this.sccs = new ArrayList<>();
    }

    public List<List<Integer>> run() {
        for (Integer node : graph.keySet()) {
            if (!indices.containsKey(node)) {
                strongConnect(node);
            }
        }
        return sccs;
    }

    private void strongConnect(Integer node) {
        indices.put(node, index);
        lowlinks.put(node, index);
        index++;
        stack.push(node);
        onStack.add(node);

        for (Integer neighbor : graph.get(node)) {
            if (!indices.containsKey(neighbor)) {
                strongConnect(neighbor);
                lowlinks.put(node, Math.min(lowlinks.get(node), lowlinks.get(neighbor)));
            } else if (onStack.contains(neighbor)) {
                lowlinks.put(node, Math.min(lowlinks.get(node), indices.get(neighbor)));
            }
        }

        if (lowlinks.get(node).equals(indices.get(node))) {
            List<Integer> scc = new ArrayList<>();
            Integer w;
            do {
                w = stack.pop();
                onStack.remove(w);
                scc.add(w);
            } while (!w.equals(node));
            sccs.add(scc);
        }
    }

    public static void main(String[] args) {
        Map<Integer, List<Integer>> graph = new HashMap<>();
        graph.put(0, Arrays.asList(1));
        graph.put(1, Arrays.asList(2));
        graph.put(2, Arrays.asList(0, 3));
        graph.put(3, Arrays.asList(4));
        graph.put(4, Arrays.asList(5, 7));
        graph.put(5, Arrays.asList(6));
        graph.put(6, Arrays.asList(4));
        graph.put(7, Arrays.asList(8));
        graph.put(8, Arrays.asList(9));
        graph.put(9, Arrays.asList(7));

        TarjanSCC tarjan = new TarjanSCC(graph);
        List<List<Integer>> sccs = tarjan.run();
        System.out.println(sccs);  // Output: [[0, 2, 1], [3], [4, 6, 5], [7, 9, 8]]
    }
}
```

### C++

```cpp
#include <iostream>
#include <vector>
#include <stack>
#include <unordered_map>
#include <algorithm>

class TarjanSCC {
private:
    std::unordered_map<int, std::vector<int>> graph;
    int index;
    std::stack<int> stack;
    std::unordered_map<int, int> indices;
    std::unordered_map<int, int> lowlinks;
    std::unordered_map<int, bool> onStack;
    std::vector<std::vector<int>> sccs;

    void strongConnect(int node) {
        indices[node] = index;
        lowlinks[node] = index;
        index++;
        stack.push(node);
        onStack[node] = true;

        for (int neighbor : graph[node]) {
            if (indices.find(neighbor) == indices.end()) {
                strongConnect(neighbor);
                lowlinks[node] = std::min(lowlinks[node], lowlinks[neighbor]);
            } else if (onStack[neighbor]) {
                lowlinks[node] = std::min(lowlinks[node], indices[neighbor]);
            }
        }

        if (lowlinks[node] == indices[node]) {
            std::vector<int> scc;
            int w;
            do {
                w = stack.top();
                stack.pop();
                onStack[w] = false;
                scc.push_back(w);
            } while (w != node);
            sccs.push_back(scc);
        }
    }

public:
    TarjanSCC(const std::unordered_map<int, std::vector<int>>& graph) : graph(graph), index(0) {}

    std::vector<std::vector<int>> run() {
        for (const auto& [node, _] : graph) {
            if (indices.find(node) == indices.end()) {
                strongConnect(node);
            }
        }
        return sccs;
    }
};

int main() {
    std::unordered_map<int, std::vector<int>> graph = {
        {0, {1}},
        {1, {2}},
        {2, {0, 3}},
        {3, {4}},
        {4, {5, 7}},
        {5, {

6}},
        {6, {4}},
        {7, {8}},
        {8, {9}},
        {9, {7}}
    };

    TarjanSCC tarjan(graph);
    std::vector<std::vector<int>> sccs = tarjan.run();
    for (const auto& scc : sccs) {
        for (int node : scc) {
            std::cout << node << " ";
        }
        std::cout << std::endl;
    }
    // Output: [[0, 2, 1], [3], [4, 6, 5], [7, 9, 8]]
}
```

### JavaScript

```javascript
class TarjanSCC {
    constructor(graph) {
        this.graph = graph;
        this.index = 0;
        this.stack = [];
        this.indices = {};
        this.lowlinks = {};
        this.onStack = {};
        this.sccs = [];
    }

    run() {
        for (const node in this.graph) {
            if (!(node in this.indices)) {
                this.strongConnect(node);
            }
        }
        return this.sccs;
    }

    strongConnect(node) {
        this.indices[node] = this.index;
        this.lowlinks[node] = this.index;
        this.index++;
        this.stack.push(node);
        this.onStack[node] = true;

        for (const neighbor of this.graph[node]) {
            if (!(neighbor in this.indices)) {
                this.strongConnect(neighbor);
                this.lowlinks[node] = Math.min(this.lowlinks[node], this.lowlinks[neighbor]);
            } else if (this.onStack[neighbor]) {
                this.lowlinks[node] = Math.min(this.lowlinks[node], this.indices[neighbor]);
            }
        }

        if (this.lowlinks[node] === this.indices[node]) {
            const scc = [];
            let w;
            do {
                w = this.stack.pop();
                this.onStack[w] = false;
                scc.push(w);
            } while (w !== node);
            this.sccs.push(scc);
        }
    }
}

// Example usage
const graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 7],
    5: [6],
    6: [4],
    7: [8],
    8: [9],
    9: [7]
};

const tarjan = new TarjanSCC(graph);
const sccs = tarjan.run();
console.log(sccs);  // Output: [[0, 2, 1], [3], [4, 6, 5], [7, 9, 8]]
```

## Example

Consider a directed graph with vertices and edges:

```plaintext
graph = {
    0: [1],
    1: [2],
    2: [0, 3],
    3: [4],
    4: [5, 7],
    5: [6],
    6: [4],
    7: [8],
    8: [9],
    9: [7]
}
```

1. The algorithm starts at vertex 0, and the DFS traverses the graph assigning DFS numbers and calculating low link values.
2. The nodes 0, 1, and 2 form one SCC as they can all reach each other.
3. Node 3 is an SCC by itself as it doesn't have any back edges to earlier nodes.
4. Nodes 4, 5, and 6 form another SCC.
5. Finally, nodes 7, 8, and 9 form the last SCC.

## Conclusion

Tarjan's Algorithm is a powerful method for finding strongly connected components in a directed graph. It efficiently handles the problem in linear time relative to the number of vertices and edges, making it suitable for large graphs. By understanding and implementing this algorithm, you can solve various problems related to graph connectivity and component analysis.

