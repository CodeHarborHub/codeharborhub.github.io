---
id: Heuristic-Search
title: Heuristic Search
sidebar_label: Heuristic Search
tags:
  - Advanced
  - Search Algorithms
  - Heuristics
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Heuristic Search problem."
---

## What is Heuristic Search?

Heuristic Search is a search algorithm that uses heuristic functions to guide the search process. The heuristic function estimates the cost to reach the goal from a given state, allowing the algorithm to prioritize which paths to explore. This approach is commonly used in AI and optimization problems.

## Algorithm Steps

1. **Initialization**:
   - Define the heuristic function that estimates the cost to reach the goal.
   - Initialize the search from the starting state.

2. **Search Process**:
   - Use a priority queue to manage the states to be explored, prioritizing states with lower heuristic costs.
   - At each step, expand the state with the lowest estimated cost.
   - If the goal state is reached, return the path or the solution.

## Complexity Analysis

- **Time Complexity**: Depends on the heuristic function. In the best case, it can be $O(\log n)$, but in the worst case, it can approach $O(n)$ where $n$ is the number of states.
- **Space Complexity**: $O(n)$ for storing the priority queue and explored states.
  

## Example

Given a graph representing a map:

```
graph = {
'A': [('B', 1), ('C', 3)],
'B': [('D', 5)],
'C': [('D', 2)],
'D': []
}
start = 'A'

goal = 'D'
```



Using Heuristic Search:

- Define a heuristic function that estimates the distance from each state to the goal.
- Use the heuristic to guide the search from the start state to the goal state.

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
import heapq

def heuristic(node, goal):
    # Example heuristic: distance to goal
    heuristics = {
        'A': 4,
        'B': 2,
        'C': 2,
        'D': 0
    }
    return heuristics[node]

def heuristic_search(graph, start, goal):
    priority_queue = [(0 + heuristic(start, goal), start)]
    explored = set()
    
    while priority_queue:
        cost, current = heapq.heappop(priority_queue)
        if current == goal:
            return cost
        
        if current not in explored:
            explored.add(current)
            for neighbor, weight in graph[current]:
                if neighbor not in explored:
                    total_cost = cost + weight
                    heapq.heappush(priority_queue, (total_cost + heuristic(neighbor, goal), neighbor))
    
    return float('inf')

# Example usage:
graph = {
    'A': [('B', 1), ('C', 3)],
    'B': [('D', 5)],
    'C': [('D', 2)],
    'D': []
}
start = 'A'
goal = 'D'

result = heuristic_search(graph, start, goal)
print(f"Minimum cost from {start} to {goal}: {result}")
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <unordered_set>

struct Node {
    std::string name;
    int cost;
    bool operator>(const Node& other) const {
        return cost > other.cost;
    }
};

int heuristic(const std::string& node, const std::string& goal) {
    std::unordered_map<std::string, int> heuristics = {
        {"A", 4},
        {"B", 2},
        {"C", 2},
        {"D", 0}
    };
    return heuristics[node];
}

int heuristic_search(const std::unordered_map<std::string, std::vector<std::pair<std::string, int>>>& graph, const std::string& start, const std::string& goal) {
    std::priority_queue<Node, std::vector<Node>, std::greater<Node>> priority_queue;
    std::unordered_set<std::string> explored;
    
    priority_queue.push({start, heuristic(start, goal)});
    
    while (!priority_queue.empty()) {
        Node current = priority_queue.top();
        priority_queue.pop();
        
        if (current.name == goal) {
            return current.cost;
        }
        
        if (explored.find(current.name) == explored.end()) {
            explored.insert(current.name);
            for (const auto& neighbor : graph.at(current.name)) {
                if (explored.find(neighbor.first) == explored.end()) {
                    int total_cost = current.cost + neighbor.second;
                    priority_queue.push({neighbor.first, total_cost + heuristic(neighbor.first, goal)});
                }
            }
        }
    }
    
    return INT_MAX;
}

int main() {
    std::unordered_map<std::string, std::vector<std::pair<std::string, int>>> graph = {
        {"A", {{"B", 1}, {"C", 3}}},
        {"B", {{"D", 5}}},
        {"C", {{"D", 2}}},
        {"D", {}}
    };
    std::string start = "A";
    std::string goal = "D";
    
    int result = heuristic_search(graph, start, goal);
    std::cout << "Minimum cost from " << start << " to " << goal << ": " << result << "\n";
    
    return 0;
}

```

  </TabItem>
</Tabs>

# Conclusion
The Heuristic Search algorithm efficiently searches for a target state by leveraging heuristic functions to guide the search process. It is widely used in AI, optimization problems, and various applications where informed search strategies are beneficial.
