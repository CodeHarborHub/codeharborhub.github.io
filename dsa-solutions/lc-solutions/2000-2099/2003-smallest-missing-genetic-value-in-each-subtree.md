---
id: smallest-missing-genetic-value-in-each-subtree
title: Smallest Missing Genetic Value in Each Subtree
sidebar_label: 2003 Smallest Missing Genetic Value in Each Subtree
tags:
  - Tree
  - Dynamic Programming
  - Depth-First Search
  - LeetCode
  - C++
description: "This is a solution to the Smallest Missing Genetic Value in Each Subtree problem on LeetCode."
sidebar_position: 2003
---

## Problem Description

There is a family tree rooted at 0 consisting of `n` nodes numbered `0` to `n - 1`. You are given a 0-indexed integer array `parents`, where `parents[i]` is the parent for node `i`. Since node 0 is the root, `parents[0] == -1`.

There are `10^5` genetic values, each represented by an integer in the inclusive range `[1, 10^5]`. You are given a 0-indexed integer array `nums`, where `nums[i]` is a distinct genetic value for node `i`.

Return an array `ans` of length `n` where `ans[i]` is the smallest genetic value that is missing from the subtree rooted at node `i`.

The subtree rooted at a node `x` contains node `x` and all of its descendant nodes.

### Examples

**Example 1:**

```
Input: parents = [-1,0,0,2], nums = [1,2,3,4]
Output: [5,1,1,1]
Explanation: The answer for each subtree is calculated as follows:

0: The subtree contains nodes [0,1,2,3] with values [1,2,3,4]. 5 is the smallest missing value.
1: The subtree contains only node 1 with value 2. 1 is the smallest missing value.
2: The subtree contains nodes [2,3] with values [3,4]. 1 is the smallest missing value.
3: The subtree contains only node 3 with value 4. 1 is the smallest missing value.
```


**Example 2:**

```
Input: parents = [-1,0,1,0,3,3], nums = [5,4,6,2,1,3]
Output: [7,1,1,4,2,1]
Explanation: The answer for each subtree is calculated as follows:

0: The subtree contains nodes [0,1,2,3,4,5] with values [5,4,6,2,1,3]. 7 is the smallest missing value.
1: The subtree contains nodes [1,2] with values [4,6]. 1 is the smallest missing value.
2: The subtree contains only node 2 with value 6. 1 is the smallest missing value.
3: The subtree contains nodes [3,4,5] with values [2,1,3]. 4 is the smallest missing value.
4: The subtree contains only node 4 with value 1. 2 is the smallest missing value.
5: The subtree contains only node 5 with value 3. 1 is the smallest missing value.
```


**Example 3:**

```
Input: parents = [-1,2,3,0,2,4,1], nums = [2,3,4,5,6,7,8]
Output: [1,1,1,1,1,1,1]
Explanation: The value 1 is missing from all the subtrees.
```


### Constraints

- `n == parents.length == nums.length`
- `2 <= n <= 10^5`
- `0 <= parents[i] <= n - 1 for i != 0`
- `parents[0] == -1`
- `parents` represents a valid tree.
- `1 <= nums[i] <= 10^5`
- Each `nums[i]` is distinct.

### Approach

To solve this problem, we will use a Depth-First Search (DFS) approach to traverse the tree. We will maintain an array `ans` where `ans[i]` will store the smallest missing genetic value for the subtree rooted at node `i`.

1. Construct the tree from the `parents` array.
2. Use DFS to traverse the tree and keep track of the genetic values present in the subtree using a set.
3. For each node, find the smallest missing genetic value by checking sequentially from 1 onwards.
4. Store the result in the `ans` array.

### Complexity

- **Time complexity**: $O(n + k)$, where `n` is the number of nodes and `k` is the maximum value in `nums`.
- **Space complexity**: $O(n + k)$, for storing the tree and the set of genetic values.

### Solution

#### C++

```cpp
class Solution {
public:
    vector<int> smallestMissingValueSubtree(vector<int>& parents, vector<int>& nums) {
        int n = parents.size();
        vector<vector<int>> tree(n);
        for (int i = 1; i < n; ++i) {
            tree[parents[i]].push_back(i);
        }
        
        vector<int> ans(n, 1);
        vector<int> visited(100001, 0);
        
        function<void(int)> dfs = [&](int node) {
            visited[nums[node]] = 1;
            for (int child : tree[node]) {
                dfs(child);
            }
            while (visited[ans[node]]) {
                ans[node]++;
            }
        };
        
        dfs(0);
        return ans;
    }
};
```

#### Java

```java
class Solution {
    public int[] smallestMissingValueSubtree(int[] parents, int[] nums) {
        int n = parents.length;
        List<Integer>[] tree = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            tree[i] = new ArrayList<>();
        }
        for (int i = 1; i < n; i++) {
            tree[parents[i]].add(i);
        }

        int[] ans = new int[n];
        Arrays.fill(ans, 1);
        boolean[] visited = new boolean[100001];

        dfs(tree, nums, visited, ans, 0);

        return ans;
    }

    private void dfs(List<Integer>[] tree, int[] nums, boolean[] visited, int[] ans, int node) {
        visited[nums[node]] = true;
        for (int child : tree[node]) {
            dfs(tree, nums, visited, ans, child);
        }
        while (visited[ans[node]]) {
            ans[node]++;
        }
    }
}
```
