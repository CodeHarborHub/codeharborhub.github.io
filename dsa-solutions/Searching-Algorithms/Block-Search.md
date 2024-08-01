---
id: Block-Search
title: Block Search
sidebar_label: Block Search
tags:
  - Intermediate
  - Search Algorithms
  - CPP
  - Python
  - Java
  - JavaScript
  - DSA
description: "This is a solution to the Block Search problem."
---

## What is Block Search?

Block Search is a search algorithm that divides the array into fixed-size blocks and performs linear searches within these blocks. It combines the principles of linear search and blocking to improve efficiency.

## Algorithm for Block Search

1. Divide the array into fixed-size blocks.
2. Search for the block where the target element might be present.
3. Perform a linear search within the identified block.
4. If the target element is found, return its index.
5. If the target element is not found, return -1.

## How does Block Search work?

- It divides the array into smaller blocks of fixed size.
- It determines the block where the target element might be present.
- It performs a linear search within the identified block.

## Problem Description

Given a list and a target element, implement the Block Search algorithm to find the index of the target element in the list. If the element is not present, return -1.

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

Complete the function block_search() which takes two integers n , k and an array arr, as input parameters and returns an integer denoting the answer. Return -1 if the number is not found in the array. You don't have to print answers or take inputs.

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

  import math

  def block_search(lst, target):
      n = len(lst)
      block_size = int(math.sqrt(n))
      block_start = 0

      while block_start < n and lst[min(block_start + block_size, n) - 1] < target:
          block_start += block_size

      for i in range(block_start, min(block_start + block_size, n)):
          if lst[i] == target:
              return i

      return -1
```
  </TabItem>

  <TabItem value="C++" label="C++">
  
```cpp

  #include <iostream>
  #include <vector>
  #include <cmath>

  int block_search(const std::vector<int>& lst, int target) {
      int n = lst.size();
      int block_size = std::sqrt(n);
      int block_start = 0;

      while (block_start < n && lst[std::min(block_start + block_size, n) - 1] < target) {
          block_start += block_size;
      }

      for (int i = block_start; i < std::min(block_start + block_size, n); ++i) {
          if (lst[i] == target) {
              return i;
          }
      }

      return -1;
  }

  int main() {
      std::vector<int> lst = {1, 3, 5, 7, 9, 11, 13, 15};
      int target = 7;
      std::cout << "Index: " << block_search(lst, target) << std::endl;
      return 0;
  }
```
  </TabItem>

  <TabItem value="Java" label="Java">
  
```java

  public class BlockSearch {
      public static int blockSearch(int[] lst, int target) {
          int n = lst.length;
          int block_size = (int) Math.sqrt(n);
          int block_start = 0;

          while (block_start < n && lst[Math.min(block_start + block_size, n) - 1] < target) {
              block_start += block_size;
          }

          for (int i = block_start; i < Math.min(block_start + block_size, n); i++) {
              if (lst[i] == target) {
                  return i;
              }
          }

          return -1;
      }

      public static void main(String[] args) {
          int[] lst = {1, 3, 5, 7, 9, 11, 13, 15};
          int target = 7;
          System.out.println("Index: " + blockSearch(lst, target));
      }
  }
```
  </TabItem>

  <TabItem value="JavaScript" label="JavaScript">
  
```javascript

  function blockSearch(lst, target) {
      let n = lst.length;
      let block_size = Math.floor(Math.sqrt(n));
      let block_start = 0;

      while (block_start < n && lst[Math.min(block_start + block_size, n) - 1] < target) {
          block_start += block_size;
      }

      for (let i = block_start; i < Math.min(block_start + block_size, n); i++) {
          if (lst[i] === target) {
              return i;
          }
      }

      return -1;
  }

  const lst = [1, 3, 5, 7, 9, 11, 13, 15];
  const target = 7;
  console.log("Index:", blockSearch(lst, target));
```
  </TabItem>
</Tabs>

## Complexity Analysis

- **Time Complexity**: $O(\sqrt{n})$, where $n$ is the number of elements in the list. The list is divided into blocks, leading to a root-time complexity.
- **Space Complexity**: $O(1)$, as no extra space is required apart from the input list.

## Advantages and Disadvantages

**Advantages:**
- Efficient for large lists with fixed-size blocks.
- Simple implementation with linear search within blocks.

**Disadvantages:**
- Less efficient compared to other search algorithms for certain cases.
- Performance depends on the block size chosen.

## References

- **Geeks for Geeks:** [Block Search](https://www.geeksforgeeks.org/block-search/)
- **HackerRank Problem:** [HackerRank](https://www.hackerrank.com/challenges/block-search/problem)
