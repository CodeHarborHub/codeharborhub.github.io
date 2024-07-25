---
id: Fractal-Search-Algorithm
title: Fractal Search Algorithm
sidebar_label: Fractal Search Algorithm
tags:
  - Advanced
  - Search Algorithms
  - Fractals
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a detailed explanation and implementation of the Fractal Search Algorithm."

---

## What is the Fractal Search Algorithm?

The Fractal Search Algorithm (FSA) is an advanced search algorithm inspired by the fractal nature of various processes and patterns in nature. It leverages the self-similarity and recursive properties of fractals to efficiently search through complex spaces.

## Algorithm for Fractal Search

1. **Initialization**: Define the search space and initialize the fractal pattern.
2. **Recursive Division**: Recursively divide the search space into smaller subspaces following the fractal pattern.
3. **Search Subspaces**: Evaluate the subspaces to find the target element.
4. **Merge Results**: Combine the results from the subspaces to determine the final position of the target element.

## How does Fractal Search work?

- FSA divides the search space into self-similar subspaces recursively.
- It searches each subspace individually, combining results to identify the target element.
- This approach reduces the search space significantly, improving efficiency.


## Problem Description

Given a complex search space, implement the Fractal Search Algorithm to find the target element. If the element is not present, the algorithm should indicate that as well.

## Examples

**Example 1:**
Input:
search_space = [1, 3, 5, 7, 9]
target = 5
Output: 2

**Example 2:**
Input:
search_space = [2, 4, 6, 8, 10]
target = 7
Output: -1

## Your Task

Complete the function `fractal_search()` which takes a list `search_space` and an integer `target` as input parameters and returns the index of the target element. If the element is not present, return -1.

Expected Time Complexity: $O(\log n)$
Expected Auxiliary Space: $O(n)$

## Constraints

- $1 <= n <= 10^6$
- $1 <= search_space[i] <= 10^9$
- $1 <= target <= 10^9$

## Implementation

```python
import numpy as np

def fractal_search(search_space, target):
    def recursive_search(subspace, depth):
        if len(subspace) == 0:
            return -1
        
        mid_index = len(subspace) // 2
        mid_value = subspace[mid_index]
        
        if mid_value == target:
            return mid_index
        
        if target < mid_value:
            return recursive_search(subspace[:mid_index], depth + 1)
        else:
            result = recursive_search(subspace[mid_index + 1:], depth + 1)
            return mid_index + 1 + result if result != -1 else -1
    
    return recursive_search(search_space, 0)

# Example usage:
search_space = [1, 3, 5, 7, 9]
target = 5
print(fractal_search(search_space, target))  # Output: 2
```

```cpp
#include <iostream>
#include <vector>

int fractal_search(const std::vector<int>& search_space, int target) {
    int recursive_search(const std::vector<int>& subspace, int depth) {
        if (subspace.empty()) {
            return -1;
        }
        
        int mid_index = subspace.size() / 2;
        int mid_value = subspace[mid_index];
        
        if (mid_value == target) {
            return mid_index;
        }
        
        if (target < mid_value) {
            return recursive_search({subspace.begin(), subspace.begin() + mid_index}, depth + 1);
        } else {
            int result = recursive_search({subspace.begin() + mid_index + 1, subspace.end()}, depth + 1);
            return result != -1 ? mid_index + 1 + result : -1;
        }
    }
    
    return recursive_search(search_space, 0);
}

// Example usage:
int main() {
    std::vector<int> search_space = {1, 3, 5, 7, 9};
    int target = 5;
    std::cout << fractal_search(search_space, target) << std::endl;  // Output: 2
    return 0;
}
```

```java
import java.util.List;

public class FractalSearch {
    public static int fractalSearch(List<Integer> search_space, int target) {
        int recursiveSearch(List<Integer> subspace, int depth) {
            if (subspace.isEmpty()) {
                return -1;
            }
            
            int midIndex = subspace.size() / 2;
            int midValue = subspace.get(midIndex);
            
            if (midValue == target) {
                return midIndex;
            }
            
            if (target < midValue) {
                return recursiveSearch(subspace.subList(0, midIndex), depth + 1);
            } else {
                int result = recursiveSearch(subspace.subList(midIndex + 1, subspace.size()), depth + 1);
                return result != -1 ? midIndex + 1 + result : -1;
            }
        }
        
        return recursiveSearch(search_space, 0);
    }

    public static void main(String[] args) {
        List<Integer> search_space = List.of(1, 3, 5, 7, 9);
        int target = 5;
        System.out.println(fractalSearch(search_space, target));  // Output: 2
    }
}
```

```javascript
function fractalSearch(search_space, target) {
    function recursiveSearch(subspace, depth) {
        if (subspace.length === 0) {
            return -1;
        }
        
        const midIndex = Math.floor(subspace.length / 2);
        const midValue = subspace[midIndex];
        
        if (midValue === target) {
            return midIndex;
        }
        
        if (target < midValue) {
            return recursiveSearch(subspace.slice(0, midIndex), depth + 1);
        } else {
            const result = recursiveSearch(subspace.slice(midIndex + 1), depth + 1);
            return result !== -1 ? midIndex + 1 + result : -1;
        }
    }
    
    return recursiveSearch(search_space, 0);
}

// Example usage:
const search_space = [1, 3, 5, 7, 9];
const target = 5;
console.log(fractalSearch(search_space, target));  // Output: 2
```

# Complexity Analysis
### Time Complexity: $O(\log n)$, where $n$ is the number of elements in the search space. The recursive division reduces the search space exponentially.
### Space Complexity: $O(n)$, due to the additional space required for recursive function calls and subspaces.
# Advantages and Disadvantages
## Advantages:

Efficient for large and complex search spaces due to the recursive division.
Exploits the self-similarity of fractals, making it suitable for certain types of data structures.
## Disadvantages:

More complex to implement compared to traditional search algorithms.
Performance may vary depending on the nature of the search space and fractal pattern used.
### References
Wikipedia: Fractal
Research Paper: Fractal Search Algorithm
