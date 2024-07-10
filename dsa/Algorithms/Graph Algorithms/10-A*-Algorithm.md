---
id: a-star-algorithm
title: A* Algorithm
sidebar_label: 10 - A* Algorithm
tags:
  - Graph Algorithms
  - Pathfinding
  - Heuristic
  - DSA
  - Python
  - C++
  - Java
  - JavaScript
description: "This page explains the A* Algorithm for finding the shortest path in a graph using heuristics."
---

# A* Algorithm

## 1. What is A* Algorithm?

The A* Algorithm is a popular pathfinding and graph traversal algorithm known for its efficiency and accuracy. It is used to find the shortest path from a start node to a goal node by combining the strengths of Dijkstra's Algorithm and Greedy Best-First Search.

## 2. Algorithm for A* Algorithm

1. Initialize the open list with the start node.
2. Initialize the closed list as empty.
3. While the open list is not empty:
   - Extract the node with the lowest f-cost from the open list (f-cost = g-cost + h-cost).
   - If this node is the goal node, return the path.
   - Move the node to the closed list.
   - For each neighbor of the current node:
     - If the neighbor is in the closed list, skip it.
     - Calculate the g-cost (distance from start) and h-cost (heuristic estimate to goal).
     - If the neighbor is not in the open list, add it.
     - If the neighbor is in the open list with a higher f-cost, update its f-cost and parent.
4. If the open list is empty and the goal is not reached, return that no path exists.

## 3. How Does A* Algorithm Work?

- A* uses a priority queue to explore nodes with the lowest f-cost (estimated total cost).
- The g-cost represents the actual distance from the start node to the current node.
- The h-cost represents the heuristic estimate from the current node to the goal node.

## 4. Problem Description

Given a graph with weighted edges, A* aims to find the shortest path from the start node to the goal node using heuristic estimates.

## 5. Examples

Example graph:

```
      A ---1--- B
      |       / | \
      4     2   5   12
      |   /     |     \
      C ---1--- D ---1--- E
```

## 6. Constraints

- The graph can be directed or undirected.
- The graph may contain cycles.
- The heuristic function (h-cost) should be admissible (not overestimating the actual cost).

## 7. Implementation

### A* Algorithm

<Tabs>
  <TabItem value="Python" label="Python" default>
  
  ```python
  import heapq

  def heuristic(a, b):
      return abs(a - b)

  def a_star(graph, start, goal):
      open_list = []
      heapq.heappush(open_list, (0, start))
      came_from = {}
      g_cost = {start: 0}
      f_cost = {start: heuristic(start, goal)}

      while open_list:
          _, current = heapq.heappop(open_list)
          
          if current == goal:
              path = []
              while current in came_from:
                  path.append(current)
                  current = came_from[current]
              path.append(start)
              return path[::-1]

          for neighbor, weight in graph[current]:
              tentative_g_cost = g_cost[current] + weight
              if neighbor not in g_cost or tentative_g_cost < g_cost[neighbor]:
                  came_from[neighbor] = current
                  g_cost[neighbor] = tentative_g_cost
                  f_cost[neighbor] = g_cost[neighbor] + heuristic(neighbor, goal)
                  heapq.heappush(open_list, (f_cost[neighbor], neighbor))

      return []

  graph = {
      'A': [('B', 1), ('C', 4)],
      'B': [('A', 1), ('D', 5), ('E', 12)],
      'C': [('A', 4), ('D', 1)],
      'D': [('B', 5), ('C', 1), ('E', 1)],
      'E': [('B', 12), ('D', 1)]
  }

  print(a_star(graph, 'A', 'E'))
  ```
  </TabItem>

  <TabItem value="C++" label="C++">

  ```cpp
  #include <iostream>
  #include <vector>
  #include <queue>
  #include <unordered_map>
  #include <cmath>
  using namespace std;

  typedef pair<int, string> pis;

  double heuristic(const string& a, const string& b) {
      return abs(a[0] - b[0]);
  }

  vector<string> a_star(unordered_map<string, vector<pis>>& graph, const string& start, const string& goal) {
      priority_queue<pis, vector<pis>, greater<pis>> open_list;
      open_list.push({0, start});
      unordered_map<string, string> came_from;
      unordered_map<string, double> g_cost;
      unordered_map<string, double> f_cost;

      g_cost[start] = 0;
      f_cost[start] = heuristic(start, goal);

      while (!open_list.empty()) {
          auto [_, current] = open_list.top();
          open_list.pop();

          if (current == goal) {
              vector<string> path;
              while (current != start) {
                  path.push_back(current);
                  current = came_from[current];
              }
              path.push_back(start);
              reverse(path.begin(), path.end());
              return path;
          }

          for (auto& [neighbor, weight] : graph[current]) {
              double tentative_g_cost = g_cost[current] + weight;
              if (!g_cost.count(neighbor) || tentative_g_cost < g_cost[neighbor]) {
                  came_from[neighbor] = current;
                  g_cost[neighbor] = tentative_g_cost;
                  f_cost[neighbor] = g_cost[neighbor] + heuristic(neighbor, goal);
                  open_list.push({f_cost[neighbor], neighbor});
              }
          }
      }

      return {};
  }

  int main() {
      unordered_map<string, vector<pis>> graph = {
          {"A", {{"B", 1}, {"C", 4}}},
          {"B", {{"A", 1}, {"D", 5}, {"E", 12}}},
          {"C", {{"A", 4}, {"D", 1}}},
          {"D", {{"B", 5}, {"C", 1}, {"E", 1}}},
          {"E", {{"B", 12}, {"D", 1}}}
      };

      vector<string> result = a_star(graph, "A", "E");
      for (const auto& node : result) {
          cout << node << " ";
      }
      return 0;
  }
  ```
  </TabItem>

  <TabItem value="Java" label="Java">

  ```java
  import java.util.*;

  public class AStar {
      static class Node implements Comparable<Node> {
          String name;
          double gCost, fCost;

          Node(String name, double gCost, double fCost) {
              this.name = name;
              this.gCost = gCost;
              this.fCost = fCost;
          }

          @Override
          public int compareTo(Node other) {
              return Double.compare(this.fCost, other.fCost);
          }
      }

      static double heuristic(String a, String b) {
          return Math.abs(a.charAt(0) - b.charAt(0));
      }

      static List<String> aStar(Map<String, List<Node>> graph, String start, String goal) {
          PriorityQueue<Node> openList = new PriorityQueue<>();
          Map<String, String> cameFrom = new HashMap<>();
          Map<String, Double> gCost = new HashMap<>();
          Map<String, Double> fCost = new HashMap<>();

          openList.add(new Node(start, 0, heuristic(start, goal)));
          gCost.put(start, 0.0);
          fCost.put(start, heuristic(start, goal));

          while (!openList.isEmpty()) {
              Node current = openList.poll();
              if (current.name.equals(goal)) {
                  List<String> path = new ArrayList<>();
                  while (current.name != null) {
                      path.add(current.name);
                      current = new Node(cameFrom.get(current.name), 0, 0);
                  }
                  Collections.reverse(path);
                  return path;
              }

              for (Node neighbor : graph.get(current.name)) {
                  double tentativeGCost = gCost.get(current.name) + neighbor.gCost;
                  if (!gCost.containsKey(neighbor.name) || tentativeGCost < gCost.get(neighbor.name)) {
                      cameFrom.put(neighbor.name, current.name);
                      gCost.put(neighbor.name, tentativeGCost);
                      fCost.put(neighbor.name, tentativeGCost + heuristic(neighbor.name, goal));
                      openList.add(new Node(neighbor.name, tentativeGCost, fCost.get(neighbor.name)));
                  }
              }
          }

          return Collections.emptyList();
      }

      public static void main(String[] args) {
          Map<String, List<Node>> graph = new HashMap<>();
          graph.put("A", Arrays.asList(new Node("B", 1, 0), new Node("C", 4, 0)));
          graph.put("B", Arrays.asList(new Node("A", 1, 0), new Node("D", 5, 0), new Node("E", 12, 0

)));
          graph.put("C", Arrays.asList(new Node("A", 4, 0), new Node("D", 1, 0)));
          graph.put("D", Arrays.asList(new Node("B", 5, 0), new Node("C", 1, 0), new Node("E", 1, 0)));
          graph.put("E", Arrays.asList(new Node("B", 12, 0), new Node("D", 1, 0)));

          List<String> result = aStar(graph, "A", "E");
          result.forEach(node -> System.out.print(node + " "));
      }
  }
  ```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
  ```javascript
  class Node {
      constructor(name, gCost, fCost) {
          this.name = name;
          this.gCost = gCost;
          this.fCost = fCost;
      }
  }

  function heuristic(a, b) {
      return Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
  }

  function aStar(graph, start, goal) {
      const openList = new PriorityQueue((a, b) => a.fCost < b.fCost);
      openList.enqueue(new Node(start, 0, heuristic(start, goal)));
      const cameFrom = new Map();
      const gCost = new Map([[start, 0]]);
      const fCost = new Map([[start, heuristic(start, goal)]]);

      while (!openList.isEmpty()) {
          const current = openList.dequeue();
          if (current.name === goal) {
              const path = [];
              let temp = current.name;
              while (temp) {
                  path.push(temp);
                  temp = cameFrom.get(temp);
              }
              return path.reverse();
          }

          for (const [neighbor, weight] of graph[current.name]) {
              const tentativeGCost = gCost.get(current.name) + weight;
              if (!gCost.has(neighbor) || tentativeGCost < gCost.get(neighbor)) {
                  cameFrom.set(neighbor, current.name);
                  gCost.set(neighbor, tentativeGCost);
                  const newFCost = tentativeGCost + heuristic(neighbor, goal);
                  fCost.set(neighbor, newFCost);
                  openList.enqueue(new Node(neighbor, tentativeGCost, newFCost));
              }
          }
      }

      return [];
  }

  const graph = {
      'A': [['B', 1], ['C', 4]],
      'B': [['A', 1], ['D', 5], ['E', 12]],
      'C': [['A', 4], ['D', 1]],
      'D': [['B', 5], ['C', 1], ['E', 1]],
      'E': [['B', 12], ['D', 1]]
  };

  const PriorityQueue = class {
      constructor(comparator = (a, b) => a > b) {
          this._heap = [];
          this._comparator = comparator;
      }
      size() {
          return this._heap.length;
      }
      isEmpty() {
          return this.size() === 0;
      }
      peek() {
          return this._heap[0];
      }
      enqueue(value) {
          this._heap.push(value);
          this._siftUp();
          return this.size();
      }
      dequeue() {
          const poppedValue = this.peek();
          const bottom = this.size() - 1;
          if (bottom > 0) {
              this._swap(0, bottom);
          }
          this._heap.pop();
          this._siftDown();
          return poppedValue;
      }
      _greater(i, j) {
          return this._comparator(this._heap[i], this._heap[j]);
      }
      _swap(i, j) {
          [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
      }
      _siftUp() {
          let node = this.size() - 1;
          while (node > 0 && this._greater(node, (node - 1) >>> 1)) {
              this._swap(node, (node - 1) >>> 1);
              node = (node - 1) >>> 1;
          }
      }
      _siftDown() {
          let node = 0;
          while (
              (node << 1) + 1 < this.size() &&
              (this._greater((node << 1) + 1, node) ||
                  (node << 1) + 2 < this.size() && this._greater((node << 1) + 2, node))
          ) {
              let maxChild = (node << 1) + 2 < this.size() && this._greater((node << 1) + 2, (node << 1) + 1)
                  ? (node << 1) + 2
                  : (node << 1) + 1;
              this._swap(node, maxChild);
              node = maxChild;
          }
      }
  };

  console.log(aStar(graph, 'A', 'E'));
  ```
  </TabItem>
</Tabs>

## 8. Complexity Analysis

- **Time Complexity:** $O(E \log V)$ where $E$ is the number of edges and $V$ is the number of vertices.
- **Space Complexity:** $O(V)$ due to the priority queue and the g-cost and f-cost dictionaries.

## 9. Advantages and Disadvantages

### Advantages:
- Guarantees finding the shortest path.
- Efficient with an admissible heuristic.

### Disadvantages:
- Requires a good heuristic to be efficient.
- Memory intensive due to maintaining multiple lists and cost dictionaries.

## 10. References

- [GeeksforGeeks - A* Search Algorithm](https://www.geeksforgeeks.org/a-search-algorithm/)

