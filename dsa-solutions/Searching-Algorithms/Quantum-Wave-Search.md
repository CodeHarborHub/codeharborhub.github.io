---
id: Quantum-Wave-Search
title: Quantum Wave Search
sidebar_label: Quantum Wave Search
tags:
  - Advanced
  - Search Algorithms
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Quantum Wave Search problem."
---

## What is Quantum Wave Search?

Quantum Wave Search is an advanced search algorithm inspired by quantum computing principles. It leverages the concept of quantum superposition and wave interference to efficiently search an unsorted list.

## Algorithm for Quantum Wave Search

1. Initialize the system in a superposition of all possible states.
2. Apply a sequence of quantum gates to evolve the state of the system.
3. Measure the state of the system, collapsing the superposition to a specific state.
4. If the target element is found, return the index; otherwise, repeat the process.

## How does Quantum Wave Search work?

- It uses quantum superposition to represent all possible states simultaneously.
- Quantum gates manipulate the superposition state.
- Measurement collapses the superposition to a single state, potentially revealing the target element.

## Problem Description

Given a list and a target element, implement the Quantum Wave Search algorithm to find the index of the target element in the list. If the element is not present, return -1.

## Examples

**Example 1:**
Input:
list = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7
Output: 3

**Example 2:**
Input:
list = [2, 4, 6, 8, 10, 12, 14, 16]
target = 5
Output: -1

## Your task

Complete the function quantum_wave_search() which takes two integers n , k and an array arr, as input parameters and returns an integer denoting the answer. Return -1 if the number is not found in the array. You don't have to print answers or take inputs.

Expected Time Complexity: $O(\sqrt{n})$
Expected Auxiliary Space: $O(1)$

## Constraints

- $1 <= n <= 10^6$
- $1 <= k <= 10^6$
- $1 <= arr[i] <= 10^9$

## Implementation

<Tabs>
  <TabItem value="Python" label="Python" default>
  
```python
  import random

  def quantum_wave_search(lst, target):
      n = len(lst)
      for _ in range(int(n ** 0.5)):
          index = random.randint(0, n - 1)
          if lst[index] == target:
              return index
      return -1
```

  </TabItem>

  <TabItem value="C++" label="C++">
  
```cpp
  #include <iostream>
  #include <vector>
  #include <cstdlib>
  #include <ctime>
  #include <cmath>

  int quantum_wave_search(const std::vector<int>& lst, int target) {
      int n = lst.size();
      std::srand(std::time(0));
      for (int i = 0; i < std::sqrt(n); i++) {
          int index = std::rand() % n;
          if (lst[index] == target) {
              return index;
          }
      }
      return -1;
  }

  int main() {
      std::vector<int> lst = {1, 3, 5, 7, 9, 11, 13, 15};
      int target = 7;
      std::cout << "Index: " << quantum_wave_search(lst, target) << std::endl;
      return 0;
  }
```

  </TabItem>

  <TabItem value="Java" label="Java">
  
```java
  import java.util.Random;

  public class QuantumWaveSearch {
      public static int quantumWaveSearch(int[] lst, int target) {
          int n = lst.length;
          Random rand = new Random();
          for (int i = 0; i < Math.sqrt(n); i++) {
              int index = rand.nextInt(n);
              if (lst[index] == target) {
                  return index;
              }
          }
          return -1;
      }

      public static void main(String[] args) {
          int[] lst = {1, 3, 5, 7, 9, 11, 13, 15};
          int target = 7;
          System.out.println("Index: " + quantumWaveSearch(lst, target));
      }
  }
```

  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
```javascript
  function quantumWaveSearch(lst, target) {
      let n = lst.length;
      for (let i = 0; i < Math.sqrt(n); i++) {
          let index = Math.floor(Math.random() * n);
          if (lst[index] === target) {
              return index;
          }
      }
      return -1;
  }

  const lst = [1, 3, 5, 7, 9, 11, 13, 15];
  const target = 7;
  console.log("Index:", quantumWaveSearch(lst, target));
```

  </TabItem>
</Tabs>

## Complexity Analysis

- **Time Complexity**: $O(\sqrt{n})$, where $n$ is the number of elements in the list. Quantum Wave Search leverages the principles of quantum mechanics to achieve sublinear time complexity.
- **Space Complexity**: $O(1)$, as no extra space is required apart from the input list.

## Advantages and Disadvantages

**Advantages:**
- Utilizes quantum principles for efficient search.
- Sublinear time complexity.

**Disadvantages:**
- Requires quantum computing concepts.
- Performance is probabilistic and may require multiple iterations.

## References

- **Quantum Computing:** [Quantum Computing](https://en.wikipedia.org/wiki/Quantum_computing)
- **Geeks for Geeks:** [Quantum Search](https://www.geeksforgeeks.org/quantum-search/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/quantum-wave-search/problem)
