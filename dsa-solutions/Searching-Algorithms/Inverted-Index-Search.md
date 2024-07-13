---
id: Inverted-Index-Search
title: Inverted Index Search
sidebar_label: Inverted Index Search
tags:
  - Advanced
  - Search Algorithms
  - Information Retrieval
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Inverted Index Search problem."
---

## What is Inverted Index Search?

Inverted Index Search is an advanced search algorithm used primarily in information retrieval systems. It involves creating an inverted index, which maps each unique element (or keyword) to the list of positions (or documents) in which it appears. This allows for efficient searches and is widely used in search engines and document retrieval systems.

## Algorithm Steps

1. **Inverted Index Creation**:
   - Iterate through the dataset and create a mapping of each unique element to its positions.

2. **Search Using Inverted Index**:
   - Query the inverted index to quickly retrieve the positions of the target element.

## Complexity Analysis

- **Time Complexity**:
  - Inverted Index Creation: $O(n)$ where $n$ is the total number of elements in the dataset.
  - Search Using Inverted Index: $O(1)$ average case for retrieving the list of positions of the target element.

- **Space Complexity**: $O(n)$ for storing the inverted index.

## Example

Given a dataset:

dataset = [3, 5, 7, 3, 9, 1, 5, 7]
target = 5


Using Inverted Index Search:

- Create an inverted index: `{3: [0, 3], 5: [1, 6], 7: [2, 7], 9: [4], 1: [5]}`
- Search for `5` in the inverted index to retrieve positions `[1, 6]`.

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
def create_inverted_index(dataset):
    inverted_index = {}
    for idx, value in enumerate(dataset):
        if value in inverted_index:
            inverted_index[value].append(idx)
        else:
            inverted_index[value] = [idx]
    return inverted_index

def inverted_index_search(inverted_index, target):
    return inverted_index.get(target, [])

# Example usage:
dataset = [3, 5, 7, 3, 9, 1, 5, 7]
target = 5

inverted_index = create_inverted_index(dataset)
result = inverted_index_search(inverted_index, target)
print(f"Target {target} found at positions: {result}")
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>
#include <unordered_map>

std::unordered_map<int, std::vector<int>> create_inverted_index(const std::vector<int>& dataset) {
    std::unordered_map<int, std::vector<int>> inverted_index;
    for (int i = 0; i < dataset.size(); ++i) {
        inverted_index[dataset[i]].push_back(i);
    }
    return inverted_index;
}

std::vector<int> inverted_index_search(const std::unordered_map<int, std::vector<int>>& inverted_index, int target) {
    auto it = inverted_index.find(target);
    if (it != inverted_index.end()) {
        return it->second;
    } else {
        return {};
    }
}

int main() {
    std::vector<int> dataset = {3, 5, 7, 3, 9, 1, 5, 7};
    int target = 5;
    
    std::unordered_map<int, std::vector<int>> inverted_index = create_inverted_index(dataset);
    std::vector<int> result = inverted_index_search(inverted_index, target);
    
    std::cout << "Target " << target << " found at positions: ";
    for (int pos : result) {
        std::cout << pos << " ";
    }
    std::cout << "\n";
    
    return 0;
}
```

 </TabItem>
</Tabs>

# Conclusion
The Inverted Index Search algorithm is a powerful and efficient way to search for elements in a dataset, especially when dealing with large datasets and frequent queries. It is widely used in search engines and information retrieval systems to quickly locate documents containing specific keywords.
