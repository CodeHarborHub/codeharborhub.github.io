---
id: depth-of-bst-given-insertion-order
title: Depth of BST Given Insertion Order
sidebar_label: 1902-depth-of-bst-given-insertion-order
tags:
- Binary Search Tree
- Tree
- Binary Tree
- Ordered Set
description: "This document provides solutions for depth-of-bst-given-insertion-order."
---

## Problem

You are given an array order which is a permutation of integers from 1 to n. This array represents the sequence in which nodes are inserted into a binary search tree (BST). The properties of a BST are such that:

  1- The left subtree of a node contains only nodes with keys less than
     the node's key.
  2- The right subtree of a node contains only nodes with keys greater
      than the node's key.
  3- Both the left and right subtrees must also be binary search trees.

The first element of order is the root of the BST. All subsequent elements are inserted one by one, at the correct position to maintain the BST property. You need to find the depth of this binary search tree, which is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Examples

**Example 1:**

Input: order = [2,1,4,3]
Output: 3
Explanation: The binary search tree has a depth of 3 with path `2->3->4`.

**Example 2:**

Input: order = [2,1,3,4]
Output: 3
Explanation: The binary search tree has a depth of 3 with path `2->3->4`.

**Example 3:**

Input: order = [1,2,3,4]
Output: 4
Explanation: The binary search tree has a depth of 4 with path `1->2->3->4`.

### Constraints

- `n == order.length`
- `1 <= n <= 105`
-  order is a permutation of integers between `1` and `n`.

---

## Approach

1. Initialization: We initiate the SortedDict with a mapping from 0 to
   depth 0, infinity to depth 0, and the first element of the order array (which is the root node) to depth 1. Both 0 and infinity are sentinel values that assist in determining the depth of the subsequent nodes.

  - `sd = SortedDict({0: 0, inf: 0, order[0]: 1})`

2. Iterate through order: After the root node is added, we iterate
   through the remaining numbers in order array. For each number (node) v, we want to find where it fits in the tree and calculate its depth.

  - `for v in order[1:]:  # Skip the first element as it is the root`

3. Binary Search for Depth: For each number, we perform a binary search
   (bisect_left(v)) on the SortedDict keys to find the closest smaller value (the predecessor or lower) and the direct successor (higher). These are the two possible parents in the BST.

  - `lower = sd.bisect_left(v) - 1`
  - `higher = lower + 1`

4. Calculate the Depth of the Node: The depth of the new node we are
   inserting is one more than the maximum depth between its potential parents (lower and higher), this is because in the BST the new node will become the child of one of these nodes.

  - `depth = 1 + max(sd.values()[lower], sd.values()[higher])`

5. Update the SortedDict and ans: Insert the new node v with its
   calculated depth into the SortedDict. Also, update ans with the new depth if it is greater than the current maximum depth found.

  - `ans = max(ans, depth)`
  - `sd[v] = depth`

6. Return the Maximum Depth: Once we have inserted all the elements,
    ans will hold the maximum depth of the tree, which we then return.

  - `return ans`

## Solution for Depth of BST Given Insertion Order

### Java Solution

```java
class Solution {

    public int maxDepthBST(int[] order) {

        // TreeMap to store the nodes with their corresponding depths

        TreeMap<Integer, Integer> depthMap = new TreeMap<>();

        // Dummy nodes to handle edge cases

        depthMap.put(0, 0); // Represents the leftmost boundary

        depthMap.put(Integer.MAX_VALUE, 0); // Represents the rightmost boundary

        // Initial case: the root node has a depth of 1

        depthMap.put(order[0], 1);

        // The starting maximum depth is the depth of the root, which is 1

        int maxDepth = 1;


        // Iterate over the remaining nodes in the "order" array

        for (int i = 1; i < order.length; ++i) {

            int currentValue = order[i];

            // Find the immediate lower and higher entries in the TreeMap

            Map.Entry<Integer, Integer> lowerEntry = depthMap.lowerEntry(currentValue);

            Map.Entry<Integer, Integer> higherEntry = depthMap.higherEntry(currentValue);

            // Compute the depth of the current node as one plus the maximum of the depths of lower and higher entry

            int currentDepth = 1 + Math.max(lowerEntry.getValue(), higherEntry.getValue());

            // Update the maximum depth found so far

            maxDepth = Math.max(maxDepth, currentDepth);

            // Insert the current value and its depth into the TreeMap

            depthMap.put(currentValue, currentDepth);

        }

        // Return the maximum depth found

        return maxDepth;

    }

}
```
### C++ solution

```cpp
#include <map>

#include <vector>

#include <algorithm>


class Solution {

public:

    int maxDepthBST(std::vector<int>& order) {

        // TreeMap to store the nodes with their corresponding depths

        std::map<int, int> depthMap;

        // Dummy nodes to handle edge cases

        depthMap[0] = 0; // Represents the leftmost boundary

        depthMap[INT_MAX] = 0; // Represents the rightmost boundary

        // Initial case: the root node has a depth of 1

        depthMap[order[0]] = 1;

        // The starting maximum depth is the depth of the root, which is 1

        int maxDepth = 1;


        // Iterate over the remaining nodes in the "order" vector

        for (size_t i = 1; i < order.size(); ++i) {

            int currentValue = order[i];

            // Find the immediate lower and higher entries in the map

            auto lowerEntry = --depthMap.lower_bound(currentValue);

            auto higherEntry = depthMap.upper_bound(currentValue);

            // Compute the depth of the current node as one plus the maximum of the depths of lower and higher entry

            int currentDepth = 1 + std::max(lowerEntry->second, higherEntry->second);

            // Update the maximum depth found so far

            maxDepth = std::max(maxDepth, currentDepth);

            // Insert the current value and its depth into the map

            depthMap[currentValue] = currentDepth;

        }

        // Return the maximum depth found

        return maxDepth;

    }

};
```
### Python Solution

```python
from sortedcontainers import SortedDict
from typing import List
class Solution:

    def maxDepthBST(self, order: List[int]) -> int:

        # Create a SortedDict initialized with border elements with depth 0 and 

        # the root of BST with depth 1

        sorted_dict = SortedDict({0: 0, float('inf'): 0, order[0]: 1})

      

        # Initialize answer with the depth of the first element (root), which is 1

        max_depth = 1

      

        # Iterate over the remaining elements in the order list starting from the second

        for value in order[1:]:

            # Find the keys that would be immediate predecessors and successors of the value

            lower_index = sorted_dict.bisect_left(value) - 1

            higher_index = lower_index + 1

          

            # The new depth is calculated by 1 plus the max depth of immediate lower and higher keys

            depth = 1 + max(sorted_dict.peekitem(lower_index)[1], sorted_dict.peekitem(higher_index)[1])

          

            # Update the answer if the new calculated depth is greater than the previous max depth

            max_depth = max(max_depth, depth)

          

            # Insert the current value with its calculated depth into the sorted dictionary

            sorted_dict[value] = depth

      

        # Finally, return the maximum depth of the binary search tree

        return max_depth
```
### Complexity Analysis
**Time Complexity:** $O((n - 1) * log k)$

**Space Complexity:** $O(n)$

### References
**LeetCode Problem:** Depth of BST Given Insertion Order