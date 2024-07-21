---
id: Count-Nodes-Equal-to-Average-of-Subtree
title: Count Nodes Equal to Average of Subtree
sidebar_label: 2265-Count Nodes Equal to Average of Subtree
tags: 
  - Arrays
  - Brute Force
  - Optimized approach
  - LeetCode
  - Python
  - Java
  - C++

description: "This is a solution to Count Nodes Equal to Average of Subtree problem on LeetCode."
sidebar_position: 66
---

## Problem Statement 
In this tutorial, we will solve the Count Nodes Equal to Average of Subtree problem . We will provide the implementation of the solution in Python, Java, and C++.

### Problem Description

Given the root of a binary tree, return the number of nodes where the value of the node is equal to the average of the values in its subtree.

Note:

The average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.
A subtree of root is a tree consisting of root and all of its descendants.
 
### Examples

**Example 1:**
Input: root = [4,8,5,0,1,null,6]
Output: 5
Explanation: 
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6.
**Example 2:**
Input: root = [1]
Output: 1
Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.
 
### Constraints
- `The number of nodes in the tree is in the range [1, 1000].`
- `0 <= Node.val <= 1000`

## Solution of Given Problem

### Intuition and Approach

The problem can be solved using a brute force approach or an optimized Technique.

<Tabs>
<tabItem value="Brute Force" label="Brute Force">

### Approach 1:Brute Force (Naive)


In the brute force approach, we can perform the following steps:

- Traverse each node in the tree.
- For each node, calculate the sum and count of the nodes in its subtree.
- Compute the average value of the subtree.
- Check if the node’s value equals the computed average.

#### Codes in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

pair<int, int> subtreeSumCount(TreeNode* root) {
    if (!root) return {0, 0};
    auto left = subtreeSumCount(root->left);
    auto right = subtreeSumCount(root->right);
    int sum = root->val + left.first + right.first;
    int count = 1 + left.second + right.second;
    return {sum, count};
}

int bruteForceCount(TreeNode* root) {
    if (!root) return 0;
    auto [sum, count] = subtreeSumCount(root);
    int average = sum / count;
    int match = (root->val == average) ? 1 : 0;
    return match + bruteForceCount(root->left) + bruteForceCount(root->right);
}


```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    private int[] subtreeSumCount(TreeNode root) {
        if (root == null) return new int[]{0, 0};
        int[] left = subtreeSumCount(root.left);
        int[] right = subtreeSumCount(root.right);
        int sum = root.val + left[0] + right[0];
        int count = 1 + left[1] + right[1];
        return new int[]{sum, count};
    }
    
    public int bruteForceCount(TreeNode root) {
        if (root == null) return 0;
        int[] res = subtreeSumCount(root);
        int average = res[0] / res[1];
        int match = (root.val == average) ? 1 : 0;
        return match + bruteForceCount(root.left) + bruteForceCount(root.right);
    }
}


```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def subtree_sum_count(root):
    if not root:
        return (0, 0)
    left = subtree_sum_count(root.left)
    right = subtree_sum_count(root.right)
    subtree_sum = root.val + left[0] + right[0]
    subtree_count = 1 + left[1] + right[1]
    return (subtree_sum, subtree_count)

def brute_force_count(root):
    if not root:
        return 0
    subtree_sum, subtree_count = subtree_sum_count(root)
    average = subtree_sum // subtree_count
    match = 1 if root.val == average else 0
    return match + brute_force_count(root.left) + brute_force_count(root.right)

```

</TabItem>
</Tabs>


### Complexity Analysis

- Time Complexity: $O(n^2)$
- For each node, calculate the sum and count of the nodes in its subtree.
- Compute the average and check if it matches the node’s value.
- Traverse each node to repeat the above steps.
- Space Complexity: $O(h)$
-  where h is the height of the tree due to the recursion stack.
</tabItem>
<tabItem value="Optimized approach" label="Optimized approach">

### Approach 2: Optimized approach

In the optimized approach, we can perform a single post-order traversal to calculate the sum and count of each subtree. During this traversal, we can also check if the current node's value is equal to the average of its subtree.


#### Code in Different Languages

<Tabs>
<TabItem value="C++" label="C++" default>
<SolutionAuthor name="@AmruthaPariprolu"/>

```cpp
#include <iostream>
#include <vector>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

pair<int, int> subtreeSumCount(TreeNode* root, int& count) {
    if (!root) return {0, 0};
    auto left = subtreeSumCount(root->left, count);
    auto right = subtreeSumCount(root->right, count);
    int sum = root->val + left.first + right.first;
    int nodes = 1 + left.second + right.second;
    if (root->val == sum / nodes) count++;
    return {sum, nodes};
}

int optimizedCount(TreeNode* root) {
    int count = 0;
    subtreeSumCount(root, count);
    return count;
}



```
</TabItem>
<TabItem value="Java" label="Java">
<SolutionAuthor name="@AmruthaPariprolu"/>

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class Solution {
    private int[] subtreeSumCount(TreeNode root, int[] count) {
        if (root == null) return new int[]{0, 0};
        int[] left = subtreeSumCount(root.left, count);
        int[] right = subtreeSumCount(root.right, count);
        int sum = root.val + left[0] + right[0];
        int nodes = 1 + left[1] + right[1];
        if (root.val == sum / nodes) count[0]++;
        return new int[]{sum, nodes};
    }
    
    public int optimizedCount(TreeNode root) {
        int[] count = new int[1];
        subtreeSumCount(root, count);
        return count[0];
    }
}

```


</TabItem>
<TabItem value="Python" label="Python">
<SolutionAuthor name="@AmruthaPariprolu"/>

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def subtree_sum_count(root, count):
    if not root:
        return (0, 0)
    left = subtree_sum_count(root.left, count)
    right = subtree_sum_count(root.right, count)
    subtree_sum = root.val + left[0] + right[0]
    subtree_count = 1 + left[1] + right[1]
    if root.val == subtree_sum // subtree_count:
        count[0] += 1
    return (subtree_sum, subtree_count)

def optimized_count(root):
    count = [0]
    subtree_sum_count(root, count)
    return count[0]


```

</TabItem>
</Tabs>

#### Complexity Analysis

- Time Complexity: $O(n)$
- Perform a single post-order traversal to compute the sum and count of each subtree.
- Check if the current node's value matches the average of its subtree during the traversal.
- Use the results of the traversal to count matching nodes.
- Space Complexity: $O(h)$

- where h is the height of the tree due to the recursion stack.

</tabItem>
</Tabs>

---

<h2>Authors:</h2>

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '10px'}}>
{['AmruthaPariprolu'].map(username => (
 <Author key={username} username={username} />
))}
</div>
