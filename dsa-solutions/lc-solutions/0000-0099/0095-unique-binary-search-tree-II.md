---
id: unique-binary-search-tree-II
title: Unique binary search tree II
difficulty: Medium
sidebar_label: 0095-Unique-BST-II
tags:
  - Binary Tree
  - Inorder
  - Traversal
  - LeetCode Easy
---


## Problem Description
Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

### Example
**Example 1:**
![alt text](https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg)
```plaintext
Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
```
**Example 2:**
```plaintext
Input: n = 1
Output: [[1]]
```

### Constraints
- `1 <= n <= 8`


## Institution
There 3 important things.

One is we try to create subtrees with some range between start(minimum) and end(maximum) value.

Second is calculation of the range. left range should be between start and current root - 1 as end value because all values of left side must be smaller than current root. right range should be between current root + 1 and end becuase all values on the right side should be greater than current root value.

Thrid is we call the same funtion recursively, so it's good idea to keep results of current start and end, so that we can use the results later. It's time saving.


 
## Approach: 

# Generating All Unique Binary Search Trees

This solution defines a class `Solution` containing a method `generateTrees` which generates all possible unique binary search trees (BSTs) with `n` nodes. The algorithm utilizes memoization to store previously computed results and avoid redundant calculations, thus improving efficiency.

## Implementation Steps

### Step 1: Define the `Solution` Class

Define a class `Solution` containing a method `generateTrees` which takes an integer `n` as input and returns a list of optional `TreeNode` objects.

### Step 2: Base Case Check

Check if `n` is 0. If it is, return an empty list since there are no possible trees with 0 nodes.

### Step 3: Initialize Memoization Dictionary

Initialize an empty dictionary called `memo`. This dictionary will be used to store previously computed results for specific ranges of values to avoid redundant calculations.

### Step 4: Define the Inner Function

Define an inner function called `generate_trees` that takes two parameters: `start` and `end`, which represent the range of values for which binary search trees need to be generated.

### Step 5: Memoization Check

Inside the `generate_trees` function:

- Check if the tuple `(start, end)` exists as a key in the `memo` dictionary. If it does, return the corresponding value from the `memo` dictionary.

### Step 6: Initialize Trees List

- Initialize an empty list called `trees`. This list will store the generated trees for the current range.
- If `start` is greater than `end`, append `None` to the `trees` list, indicating an empty subtree, and return the `trees` list.

### Step 7: Loop Through Root Values

- Loop through each value `root_val` in the range `[start, end]` (inclusive):
  - Recursively call the `generate_trees` function for the left subtree with the range `[start, root_val - 1]` and store the result in `left_trees`.
  - Recursively call the `generate_trees` function for the right subtree with the range `[root_val + 1, end]` and store the result in `right_trees`.

### Step 8: Generate Trees

- Nested loop through each combination of `left_tree` in `left_trees` and `right_tree` in `right_trees`:
  - Create a new `TreeNode` instance with `root_val` as the value, `left_tree` as the left child, and `right_tree` as the right child.
  - Append the new `TreeNode` to the `trees` list.

### Step 9: Memoize and Return Trees

- Store the `trees` list in the `memo` dictionary with the key `(start, end)`.
- Return the `trees` list.

### Step 10: Generate All Trees

- Outside the `generate_trees` function, call `generate_trees` initially with arguments `1` and `n` to generate all unique binary search trees with `n` nodes.

### Step 11: Return Result

- Return the list of generated trees.

This algorithm generates all possible unique binary search trees with `n` nodes by considering different ranges of root values and recursively generating left and right subtrees for each possible root value. The `memo` dictionary is used to store previously computed results, reducing redundant calculations and improving the efficiency of the algorithm.




## Code

### C++
```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    vector<TreeNode*> generateTrees(int n) {
        if (n == 0) {
            return vector<TreeNode*>();
        }
        
        unordered_map<string, vector<TreeNode*>> memo;

        return generateTreesHelper(1, n, memo);        
    }

private:
    vector<TreeNode*> generateTreesHelper(int start, int end, unordered_map<string, vector<TreeNode*>>& memo) {
        string key = to_string(start) + "-" + to_string(end);
        if (memo.find(key) != memo.end()) {
            return memo[key];
        }
        
        vector<TreeNode*> trees;
        if (start > end) {
            trees.push_back(nullptr);
            return trees;
        }
        
        for (int rootVal = start; rootVal <= end; rootVal++) {
            vector<TreeNode*> leftTrees = generateTreesHelper(start, rootVal - 1, memo);
            vector<TreeNode*> rightTrees = generateTreesHelper(rootVal + 1, end, memo);
            
            for (TreeNode* leftTree : leftTrees) {
                for (TreeNode* rightTree : rightTrees) {
                    TreeNode* root = new TreeNode(rootVal);
                    root->left = leftTree;
                    root->right = rightTree;
                    trees.push_back(root);
                }
            }
        }
        
        memo[key] = trees;
        return trees;
    }    
};
```

### Python
```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
        if n == 0:
            return []
        
        memo = {}

        def generate_trees(start, end):
            if (start, end) in memo:
                return memo[(start, end)]
            
            trees = []
            if start > end:
                trees.append(None)
                return trees
            
            for root_val in range(start, end + 1):
                left_trees = generate_trees(start, root_val - 1)
                right_trees = generate_trees(root_val + 1, end)
            
                for left_tree in left_trees:
                    for right_tree in right_trees:
                        root = TreeNode(root_val, left_tree, right_tree)
                        trees.append(root)
            
            memo[(start, end)] = trees
            return trees

        return generate_trees(1, n)
```

### Java
```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<TreeNode> generateTrees(int n) {
        if (n == 0) {
            return new ArrayList<>();
        }
        
        Map<String, List<TreeNode>> memo = new HashMap<>();

        return generateTreesHelper(1, n, memo);        
    }

    private List<TreeNode> generateTreesHelper(int start, int end, Map<String, List<TreeNode>> memo) {
        String key = start + "-" + end;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        
        List<TreeNode> trees = new ArrayList<>();
        if (start > end) {
            trees.add(null);
            return trees;
        }
        
        for (int rootVal = start; rootVal <= end; rootVal++) {
            List<TreeNode> leftTrees = generateTreesHelper(start, rootVal - 1, memo);
            List<TreeNode> rightTrees = generateTreesHelper(rootVal + 1, end, memo);
            
            for (TreeNode leftTree : leftTrees) {
                for (TreeNode rightTree : rightTrees) {
                    TreeNode root = new TreeNode(rootVal);
                    root.left = leftTree;
                    root.right = rightTree;
                    trees.add(root);
                }
            }
        }
        
        memo.put(key, trees);
        return trees;
    }
}
```

## Conclusion 

## Complexity
- Time complexity: `O(C(n))`
C is Catalan number.

- Space complexity: `O(C(n))`
C is Catalan number.


