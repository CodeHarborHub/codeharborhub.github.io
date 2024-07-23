---
id: Hierarchical-Binary-Search
title: Hierarchical Binary Search
sidebar_label: Hierarchical Binary Search
tags:
  - Advanced
  - Search Algorithms
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Hierarchical Binary Search problem."
---

## What is Hierarchical Binary Search?

Hierarchical Binary Search is a search algorithm designed to search for a target element in a large sorted dataset by recursively dividing the dataset into hierarchical levels and applying binary search at each level. This approach can be particularly useful for distributed databases or filesystems where data is naturally partitioned.

## Algorithm Steps

1. **Initialization**:
   - Start from the top level of the hierarchy.
   - Define boundaries for the current level: `left` and `right`.

2. **Binary Search at Current Level**:
   - Apply binary search to the current level.
   - If the target is found, return its position.
   - If the target is less than the middle element, move to the next lower level on the left side.
   - If the target is greater than the middle element, move to the next lower level on the right side.

3. **Recursive Search**:
   - Recursively apply binary search at each level of the hierarchy until the target is found or the search space is exhausted.

4. **Base Case**:
   - If the search space at the current level is exhausted, return -1 indicating the target is not found.

## Complexity Analysis

- **Time Complexity**: $O(\log(n))$ where $n$ is the total number of elements in the dataset. This is due to the binary search applied at each hierarchical level.
- **Space Complexity**: $O(\log(n))$ due to the recursive calls on the call stack.

## Example

Given a hierarchical dataset:

level 0: [1, 4, 7, 10]
level 1 (left of 1): []
level 1 (right of 1): [2, 3]
level 1 (left of 4): []
level 1 (right of 4): [5, 6]
level 1 (left of 7): []
level 1 (right of 7): [8, 9]
level 1 (left of 10): []
level 1 (right of 10): [11, 12]


Using Hierarchical Binary Search:

- Start from the top level: `level 0`.
- Apply binary search at each level, moving to the next lower level based on comparisons with the target.

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>

```python
def hierarchical_binary_search(levels, target, level=0, left=0, right=None):
    if right is None:
        right = len(levels[level]) - 1
    
    if left > right:
        return -1
    
    mid = (left + right) // 2
    if levels[level][mid] == target:
        return (level, mid)
    elif levels[level][mid] > target:
        return hierarchical_binary_search(levels, target, level + 1, left, mid - 1)
    else:
        return hierarchical_binary_search(levels, target, level + 1, mid + 1, right)

# Example usage:
levels = [
    [1, 4, 7, 10],
    [],
    [2, 3],
    [],
    [5, 6],
    [],
    [8, 9],
    [],
    [11, 12]
]
target = 5

result = hierarchical_binary_search(levels, target)
if result != -1:
    print(f"Target {target} found at position: {result}")
else:
    print(f"Target {target} not found in the dataset")
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp

#include <iostream>
#include <vector>
#include <utility>

std::pair<int, int> hierarchical_binary_search(std::vector<std::vector<int>>& levels, int target, int level = 0, int left = 0, int right = -1) {
    if (right == -1) {
        right = levels[level].size() - 1;
    }
    
    if (left > right) {
        return {-1, -1};
    }
    
    int mid = (left + right) / 2;
    if (levels[level][mid] == target) {
        return {level, mid};
    } else if (levels[level][mid] > target) {
        return hierarchical_binary_search(levels, target, level + 1, left, mid - 1);
    } else {
        return hierarchical_binary_search(levels, target, level + 1, mid + 1, right);
    }
}

int main() {
    std::vector<std::vector<int>> levels = {
        {1, 4, 7, 10},
        {},
        {2, 3},
        {},
        {5, 6},
        {},
        {8, 9},
        {},
        {11, 12}
    };
    int target = 5;
    
    std::pair<int, int> result = hierarchical_binary_search(levels, target);
    if (result.first != -1) {
        std::cout << "Target " << target << " found at position: (" << result.first << ", " << result.second << ")\n";
    } else {
        std::cout << "Target " << target << " not found in the dataset\n";
    }
    return 0;
}
```

  </TabItem>
</Tabs>

# Conclusion
The Hierarchical Binary Search algorithm is a unique and efficient way to search for a target element in a large, hierarchically structured dataset. It leverages the divide-and-conquer approach of binary search across multiple levels, making it well-suited for distributed or partitioned data systems.
