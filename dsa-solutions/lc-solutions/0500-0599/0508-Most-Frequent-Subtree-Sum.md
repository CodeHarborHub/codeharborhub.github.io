---
id: most-frequent-subtree-sum
title: Most Frequent Subtree Sum
sidebar_label: 0508-Most-Frequent-Subtree-Sum
tags:
- Tree
- Depth-First Search
- Hash Table
- Binary Tree
description: "Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order."
---

## Problem

Given the root of a binary tree, return the most frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).

### Examples

**Example 1:**

**Input:** `root = [5,2,-3]`  
**Output:** `[2,-3,4]`  
**Explanation:** The subtree sums are:  
  - Sum of the subtree rooted at node `5`: 4 (5 + 2 - 3)
  - Sum of the subtree rooted at node `2`: 2
  - Sum of the subtree rooted at node `-3`: -3  
  The most frequent subtree sums are [2, -3, 4], occurring once each.

**Example 2:**

**Input:** `root = [5,2,-5]`  
**Output:** `[2]`  
**Explanation:** The subtree sums are:  
  - Sum of the subtree rooted at node `5`: 2 (5 + 2 - 5)
  - Sum of the subtree rooted at node `2`: 2
  - Sum of the subtree rooted at node `-5`: -5  
  The most frequent subtree sum is 2, occurring twice.

### Constraints

- The number of nodes in the tree is in the range `[1, 10^4]`.
- `-10^5 <= Node.val <= 10^5`

---

## Approach

To solve this problem, we need to calculate the sum of all nodes for each subtree and count the frequency of each sum. Finally, we return the sums that have the highest frequency.

### Steps:

1. Use a hash table (dictionary) to store the frequency of each subtree sum.
2. Traverse the tree using depth-first search (DFS) to calculate the sum of each subtree.
3. For each node, calculate the subtree sum and update the frequency in the hash table.
4. Determine the maximum frequency and collect all sums that have this frequency.
5. Return the list of sums with the highest frequency.

### Solution

#### Java Solution

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    private Map<Integer, Integer> countMap = new HashMap<>();
    private int maxCount = 0;
    
    public int[] findFrequentTreeSum(TreeNode root) {
        if (root == null) return new int[0];
        dfs(root);
        List<Integer> result = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : countMap.entrySet()) {
            if (entry.getValue() == maxCount) {
                result.add(entry.getKey());
            }
        }
        return result.stream().mapToInt(i -> i).toArray();
    }
    
    private int dfs(TreeNode node) {
        if (node == null) return 0;
        int sum = node.val + dfs(node.left) + dfs(node.right);
        countMap.put(sum, countMap.getOrDefault(sum, 0) + 1);
        maxCount = Math.max(maxCount, countMap.get(sum));
        return sum;
    }
}
```
### C++ Solution

```cpp
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
    vector<int> findFrequentTreeSum(TreeNode* root) {
        unordered_map<int, int> countMap;
        int maxCount = 0;
        vector<int> result;
        dfs(root, countMap, maxCount);
        for (const auto& entry : countMap) {
            if (entry.second == maxCount) {
                result.push_back(entry.first);
            }
        }
        return result;
    }
    
private:
    int dfs(TreeNode* node, unordered_map<int, int>& countMap, int& maxCount) {
        if (node == nullptr) return 0;
        int sum = node->val + dfs(node->left, countMap, maxCount) + dfs(node->right, countMap, maxCount);
        countMap[sum]++;
        maxCount = max(maxCount, countMap[sum]);
        return sum;
    }
};
```
### Python

```python
from collections import defaultdict
from typing import List, Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def findFrequentTreeSum(self, root: Optional[TreeNode]) -> List[int]:
        if not root:
            return []
        
        def dfs(node):
            if not node:
                return 0
            total = node.val + dfs(node.left) + dfs(node.right)
            count[total] += 1
            self.maxCount = max(self.maxCount, count[total])
            return total
        
        count = defaultdict(int)
        self.maxCount = 0
        dfs(root)
        return [s for s in count if count[s] == self.maxCount]
```
### Complexity Analysis
**Time Complexity:** O(n)
>Reason: Each node is visited once during the DFS traversal.

### Space Complexity: O(n)
>Reason: The space required to store the subtree sums and their frequencies in the hash table is proportional to the number of nodes.

### References
LeetCode Problem: Most Frequent Subtree Sum