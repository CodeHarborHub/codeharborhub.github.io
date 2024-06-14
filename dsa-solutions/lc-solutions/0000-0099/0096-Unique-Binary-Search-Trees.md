---
id: unique-binary-search-tree
title: Unique Binary Search Tree
difficulty: Medium
sidebar_label: 0096- Unique Binary Search Tree
tags:
  - Binary Search Tree
  - LeetCode Medium
---

## Problem

| Problem Statement | Solution Link | LeetCode Profile |
| :---------------- | :------------ | :--------------- |
| [Unique Binary Search Tree ](https://leetcode.com/problems/unique-binary-search-trees/description/) | [Unique Binary Search Tree Solution on LeetCode](https://leetcode.com/problems/unique-binary-search-trees/solutions/4945144/easy-recursion-dynamic-programming-c-solution-beats-100) |  [Khushi Kalra](https://leetcode.com/u/abckhush/) |

## Problem Description
Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

### Examples
**Example 1:**
```plaintext
Input: n = 3
Output: 5
```
**Example 2:**
```plaintext
Input: n = 1
Output: 1
```
 
### Constraints:
`1 <= n <= 19`

## Approach#1 : RECURSION 
We use a recursive function numTrees(n) where numTrees(n) returns the number of unique BSTs that can be formed with n nodes. The following steps outline the approach:

1. Base Cases:
If n is 0 or 1, return 1. There is exactly one unique BST that can be formed with 0 or 1 nodes:
- numTrees(0) = 1: An empty tree is considered one unique BST.
- numTrees(1) = 1: A single-node tree is also one unique BST.

2. Recursive Calculation:
- Initialize count to 0. This variable will accumulate the total number of unique BSTs for n nodes.
- For each i from 1 to n, consider i as the root of the BST:
    - The left subtree will have i-1 nodes.
    - The right subtree will have n-i nodes.
- The total number of unique BSTs with i as the root is the product of the number of unique BSTs for the left and right subtrees.
- Accumulate the results in count by adding the product of the number of unique BSTs for the left and right subtrees:
`count += numTrees(i-1) * numTrees(n-i)`

3. Return the Result:
- After computing the total count for all possible roots from 1 to n, return count.

### Complexity
1. Time complexity: $$O(2^n)$$ 
2. Space complexity: $$O(n)$$

### Code
```cpp
class Solution {
public:
    int numTrees(int n) {
        if(n==0 || n==1) return 1;
        int count=0;
        for(int i=1; i<=n; i++){
            count= count + (numTrees(i-1)*numTrees(n-i));
        }
        return count;
    }
};
```

## Approach#2: DYNAMIC PROGRAMMING
We use a dynamic programming array dp where dp[i] represents the number of unique BSTs that can be formed with i nodes. The following steps outline the approach:

1. Initialization:
- Create a dynamic programming array dp of size n+1 initialized with zeros.
- Set the base cases:
    - dp[0] = 1: An empty tree is considered one unique BST.
    - dp[1] = 1: A single-node tree is also one unique BST.

2. Filling the DP Array:
- Iterate over the number of nodes from 2 to n (let's call this i).
- For each i, consider each node j (from 1 to i) as the root of the BST.
- The number of unique BSTs with i nodes can be computed as the sum of all possible left and right subtrees:
- The left subtree will have j-1 nodes.
- The right subtree will have i-j nodes.
- Update the dp[i] value as the sum of the products of the number of unique BSTs for the left and right subtrees:
`dp[i] += dp[j-1] * dp[i-j]`

3. Return the Result:
- After filling the dp array, dp[n] will contain the number of unique BSTs that can be formed with n nodes.

### Complexity
1. Time complexity: $$O(n^2)$$
2. Space complexity: $$O(n)$$

### Code
```cpp
class Solution {
public:
    int numTrees(int n) {
        vector<int>dp(n+1, 0);
        dp[0]=1;
        dp[1]=1;
        for(int i=2; i<=n; i++){
            for(int j=1; j<=i; j++){
                dp[i]= dp[i]+ dp[i-j]*dp[j-1];
            }
        }
        return dp[n];
    }
};
```